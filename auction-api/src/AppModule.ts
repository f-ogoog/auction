import { Module } from '@nestjs/common';
import { AuthModule } from './modules/AuthModule';
import { ConfigModule } from '@nestjs/config';
import { AuctionModule } from './modules/AuctionModule';
import { GatewayModule } from './gateway/GatewayModule';
import { UserModule } from './modules/UserModule';

@Module({
  imports: [
    AuthModule,
    AuctionModule,
    UserModule,
    GatewayModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
