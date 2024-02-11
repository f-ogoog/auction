import { Module } from '@nestjs/common';
import { UserController } from '../controllers/UserController';
import { UserRepository } from '../repositories/UserRepository';
import { UserService } from '../services/UserService';
import { UserByIdPipe } from '../pipes/UserByIdPipe';
import { PrismaModule } from './PrismaModule';
import { FileModule } from '../utils/files/FileModule';
import { MapperModule } from './MapperModule';

@Module({
  controllers: [UserController],
  imports: [PrismaModule, FileModule, MapperModule],
  providers: [UserRepository, UserService, UserByIdPipe],
  exports: [UserRepository, UserService, UserByIdPipe],
})
export class UserModule {}
