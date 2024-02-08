import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from '../services/AuthService';
import { LocalAuthGuard } from '../utils/security/guards/LocalAuthGuard';
import { JwtAuthGuard } from '../utils/security/guards/JWTAuthGuard';
import { RequestWithUser } from '../utils/types';
import { CreateUserDTO } from '../dtos/UserDTO';

@Controller('/auth')
export class AuthController {
  constructor (
    private readonly authService: AuthService,
  ) {}

  @Post('/register')
  register (@Body() body: CreateUserDTO) {
    return this.authService.register(body);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login (@Req() req: RequestWithUser) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  getMe (@Req() req: RequestWithUser) {
    return req.user;
  }
}
