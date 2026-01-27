import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IUser } from 'src/users/user.interface';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private rolesService: RolesService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>("JWT_SECRET"),
    });
  }

  async validate(payload: IUser) {
    const { _id, name, email, role } = payload;
    const userRole = role as unknown as { _id: string, name: string };

    const roleDoc = await this.rolesService.findOne(userRole._id);
    const temp = roleDoc?.toObject?.() ?? roleDoc; // ✅ Safe call

    return {
      _id,
      name,
      email,
      role,
      permission: temp?.permissions ?? []
    }
  }
}