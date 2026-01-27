import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import ms from 'ms';
import { access } from 'fs';
import { RegisterUserDto } from 'src/users/dto/create-user.dto';
import { IUser } from 'src/users/user.interface';
import { UsersService } from 'src/users/users.service';
import { Response } from 'express';
import { RolesService } from 'src/roles/roles.service';
@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        private configService: ConfigService,
        private rolesService:RolesService
    ) { }
    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOneByUsername(username);
        if (user) {
            const isValid = this.usersService.isValidPassword(pass, user.password)
            if (isValid === true) {
                const userRole=user.role as unknown as {_id:string,name:string};
                const temp= await this.rolesService.findOne(userRole._id);
                const objUser={
                    ...user.toObject(),
                    permission:temp?.permissions ?? []
                }
                return objUser;
            }
        }
        return null;
    }
    async login(user: IUser, response: Response) {
        const { _id, name, email, role } = user;
        const payload = {
            sub: "token login",
            iss: "from server",
            _id,
            name,
            email,
            role
        };
        const refresh_token = this.createRefreshToken(payload)

        //update user with refresh token 
        await this.usersService.updateUserToken(refresh_token, _id);

        //set refresh_token as cookie
        response.cookie('refresh_token', refresh_token, {
            httpOnly: true,
            maxAge: this.configService.get<number>("JWT_REFRESH_EXPRIRE")
        });

        return {
            access_token: this.jwtService.sign(payload),
            refresh_token,
            user: {
                _id,
                name, email, role
            }
        }
    }
    async register(user: RegisterUserDto) {
        let newUser = await this.usersService.register(user);
        return {
            _id: newUser?._id,
            createdAt: newUser?.createdAt
        }
    }

    createRefreshToken = (payload: any) => {
        const refresh_token = this.jwtService.sign(payload, {
            secret: this.configService.get<string>("JWT_REFRESH_TOKEN"),
            expiresIn: this.configService.get<number>("JWT_REFRESH_EXPRIRE")

        });
        return refresh_token
    }
    processNewToken = async (refreshToken: string, response: Response) => {
        try {
            this.jwtService.verify(refreshToken, {
                secret: this.configService.get<string>("JWT_REFRESH_TOKEN")
            }
            )
            let user = await this.usersService.findUserByToken(refreshToken);
            if (user) {
                //update refresh token
                const { _id, name, email, role } = user;
                const payload = {
                    sub: "token refresh",
                    iss: "from server",
                    _id,
                    name,
                    email,
                    role
                }
                const refresh_token = this.createRefreshToken(payload);
                //update user with refresh token
                await this.usersService.updateUserToken(refresh_token, _id.toString());

                response.cookie('refresh_token', refresh_token, {
                    httpOnly: true,
                    maxAge: this.configService.get<number>("JWT_REFRESH_EXPRIRE")
                });

                return {
                    access_token: this.jwtService.sign(payload),
                    refresh_token,
                    user: {
                        _id,
                        name, email, role
                    }
                }
            } else {
                throw new BadRequestException(`Refesh token không hợp lệ`);
            }
        } catch (error) {
            throw new BadRequestException(`Refesh token không hợp lệ`);
        }
    }
    
    logout = async(response:Response,user:IUser)=>{
        await this.usersService.updateUserToken("",user._id);
        response.clearCookie("refresh_token");
        return "ok";
    }
}
