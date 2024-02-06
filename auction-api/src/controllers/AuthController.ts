import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from '../services/AuthService';
import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { LocalAuthGuard } from '../utils/security/guards/LocalAuthGuard';
import { JwtAuthGuard } from '../utils/security/guards/JWTAuthGuard';

@Controller('/auth')
export class AuthController {
  constructor (private readonly authService: AuthService) {}

  @Post('/register')
  register (@Body() body: CreateUserDTO) {
    return this.authService.register(body);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login (@Req() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/user')
  getMe (@Req() req) {
    return req.user;
  }
}
