import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { UserRepository } from '../repositories/UserRepository';
import { AlreadyRegisteredException } from '../utils/exceptions/AlreadyRegisteredException';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor (
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async register (body: CreateUserDTO) {
    const { password, ...securedUser } = body;

    const user = await this.userRepository.find({
      username: securedUser.username,
      email: securedUser.email,
    });

    if (user) throw new AlreadyRegisteredException('username or email');

    const hashedPassword = await this.hashPassword(password);

    await this.userRepository.create({
      ...securedUser,
      password: hashedPassword,
    });
  }

  private async hashPassword (password: string) {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
  }

  async validateUser (username: string, password: string) {
    const user = await this.userRepository.find({
      OR: [{ username }, { email: username }],
    });
    if (!user) throw new UnauthorizedException('Username or email is wrong');

    const comparedPasswords = await bcrypt.compare(password, user.password);

    if (!comparedPasswords)
      throw new UnauthorizedException('Password is wrong');

    delete user.password;

    return user;
  }

  async login (user) {
    return this.getAccessToken(user.id);
  }

  private getAccessToken (userId: string) {
    const payload = { sub: userId };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
