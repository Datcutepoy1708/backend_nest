import { Controller, Get, Post, Render, UseGuards, Req, Body, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public, ResponseMessage } from 'src/decorator/customize';
import { LocalAuthGuard } from './local-auth.guard';
import { RegisterUserDto, UserLoginDto } from 'src/users/dto/create-user.dto';
import { Request, response, Response } from 'express';
import { IUser } from 'src/users/user.interface';
import { User } from 'src/decorator/customize';
import { request } from 'http';
import { RolesService } from 'src/roles/roles.service';
import { UsersService } from 'src/users/users.service';
import { ThrottlerGuard,Throttle } from '@nestjs/throttler';
import { ApiAcceptedResponse, ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private rolesService:RolesService,
    private usersService:UsersService
  ) { }

  @Get()
  @Render("home")
  handleHomePage() {

    // return "this.appService.getHello()";

  }

  // @UseGuards(AuthGuard('local'))
  // @Post('/login')
  // handleLogin(@Request() req) {
  //    return req.user;
  // }
  @UseGuards(LocalAuthGuard)
  @UseGuards(ThrottlerGuard)
  @Throttle({ default: { limit: 3, ttl: 60 } })
  @ApiBody({type:UserLoginDto})
  @Public()
  @Post('login')
  @ResponseMessage("User login")
  handleLogin(@Req() req,
    @Res({ passthrough: true }) response: Response) {
    return this.authService.login(req.user,response)
  }


  @Public()
  @ResponseMessage("Register a new user")
  @Post('/register')
  handleRegister(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.register(registerUserDto)
  }

  // @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    return req.user
  }
  
  @ResponseMessage("Get user infomation")
  @Get('/account')
  async handleGetAccount(@User() user:IUser){
    // Lấy lại thông tin user từ DB (bao gồm cả role)
    const temp = await this.usersService.findOne(user._id) as any;

    // Lấy đầy đủ role kèm danh sách permissions
    const roleWithPermissions = await this.rolesService.findOne(
      temp.role._id.toString(),
    );

    // Gán danh sách permissions vào user trả về cho FE
    user.permissions = (roleWithPermissions as any).permissions ?? [];
    return {
      user
    }
  }
  
  @Public()
  @ResponseMessage("Get user by refresh token")
  @Get('/refresh')
  handleRefreshToken(@Req() request:Request, @Res({passthrough:true}) response:Response ){
    const refreshToken=request.cookies["refresh_token"];
    return this.authService.processNewToken(refreshToken,response);
  }

  @ResponseMessage("Logout User")
  @Post('/logout')
  handleLogout(
    @Res({passthrough:true}) response:Response,
    @User() user:IUser
  ) {
    return this.authService.logout(response,user);
  }
}
