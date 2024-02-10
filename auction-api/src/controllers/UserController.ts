import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from '../services/UserService';
import { UserByIdPipe } from '../pipes/UserByIdPipe';
import { RequestWithUser } from '../utils/types';
import { UpdateUserDTO } from '../dtos/UserDTO';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageValidationPipe } from '../pipes/ImageValidationPipe';
import { JwtAuthGuard } from '../utils/security/guards/JWTAuthGuard';
import { UserMapper } from '../mappers/UserMapper';

@Controller('/users')
export class UserController {
  constructor (
    private readonly userService: UserService,
    private readonly userMapper: UserMapper,
  ) {}

  @Get('/:userId')
  async findById (
    @Param('userId', UserByIdPipe) userId: string,
  ) {
    const user = await this.userService.findById(userId);
    return this.userMapper.getUser(user);
  }

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('avatar'))
  @Patch()
  async updateMe (
    @Req() req: RequestWithUser,
    @Body() body: UpdateUserDTO,
    @UploadedFile(ImageValidationPipe) file: Express.Multer.File,
  ) {
    const user = await this.userService.updateById(req.user.id, body, file);
    return this.userMapper.getUser(user);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  async deleteMe (@Req() req: RequestWithUser) {
    const user = await this.userService.deleteById(req.user.id);
    return this.userMapper.getUser(user);
  }
}
