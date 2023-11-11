import { NestFactory } from '@nestjs/core';
import { env } from 'process';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv'
import { Logger } from '@nestjs/common';
dotenv.config()

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(env.APP_PORT);
  Logger.log(`Service Running on port ${env.APP_PORT}`, "App")
}
bootstrap();
