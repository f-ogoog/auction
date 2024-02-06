import { Module } from '@nestjs/common';
import { AuthModule } from './modules/AuthModule';
import { ConfigModule } from '@nestjs/config';
import { AuctionModule } from './modules/AuctionModule';

@Module({
  imports: [
    AuthModule,
    AuctionModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {
}