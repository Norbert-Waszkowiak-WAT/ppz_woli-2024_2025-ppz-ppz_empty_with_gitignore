import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { EmailModule } from './email/email.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'),
    ConfigModule.forRoot({
      isGlobal: true, // makes environment variables available throughout the app
    }),
     UsersModule,
     AuthModule,
     EmailModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
