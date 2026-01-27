import { Controller, Get, Post, Render, UseGuards, Request, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { Public } from './decorator/customize';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private configService: ConfigService,
    private authService: AuthService
  ) { }

  @Get()
  @Render("home")
  handleHomePage() {
    console.log(">> check port =", this.configService.get<string>("PORT"));
    const massage1 = this.appService.getHello();
    // return "this.appService.getHello()";
    return {
      message: massage1
    }
  }

  // @UseGuards(AuthGuard('local'))
  // @Post('/login')
  // handleLogin(@Request() req) {
  //    return req.user;
  // }
  //  @UseGuards(LocalAuthGuard)
  // @Public()
  // @Post('/login')
  // handleLogin(@Request() req, @Res({passthrough:true}) res: Response) {
  //   return this.authService.login(req.user,res)
  // }

  // @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req){
    return req.user
  }
}
