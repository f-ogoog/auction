import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from '../repositories/UserRepository';
import { AlreadyRegisteredException } from '../utils/exceptions/AlreadyRegisteredException';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDTO } from '../dtos/UserDTO';
import { User } from '@prisma/client';
import { UserMapper } from '../mappers/UserMapper';

@Injectable()
export class AuthService {
  constructor (
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
    private readonly userMapper: UserMapper,
  ) {}

  async register (body: CreateUserDTO) {
    const { password, ...securedUser } = body;

    const user = await this.userRepository.find({
      username: securedUser.username,
    });

    if (user) throw new AlreadyRegisteredException('username');

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
    const user = await this.userRepository.find({ username });
    
    if (!user) throw new UnauthorizedException('Username or email is wrong');

    const comparedPasswords = await bcrypt.compare(password, user.password);

    if (!comparedPasswords)
      throw new UnauthorizedException('Password is wrong');

    return this.userMapper.getUser(user);
  }

  async login (user: User) {
    return this.getAccessToken(user.id);
  }

  private getAccessToken (userId: string) {
    const payload = { sub: userId };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
