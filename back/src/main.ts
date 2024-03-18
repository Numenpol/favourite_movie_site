import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
// var cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    bodyParser: true,
  });

  // app.use(cors());
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
