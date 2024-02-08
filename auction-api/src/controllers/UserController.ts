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

@Controller('/users')
export class UserController {
  constructor (
    private readonly userService: UserService,
  ) {}

  @Get('/:userId')
  findById (
    @Param('userId', UserByIdPipe) userId: string,
  ) {
    return this.userService.findById(userId);
  }

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('avatar'))
  @Patch()
  updateMe (
    @Req() req: RequestWithUser,
    @Body() body: UpdateUserDTO,
    @UploadedFile(ImageValidationPipe) file: Express.Multer.File,
  ) {
    return this.userService.updateById(req.user.id, body, file);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  deleteMe (@Req() req: RequestWithUser) {
    return this.userService.deleteById(req.user.id);
  }
}
