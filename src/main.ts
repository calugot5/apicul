import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Agregamos validador automático a nuestra app
  app.useGlobalPipes(
    new ValidationPipe({
    whitelist: true,
  }),
);
  await app.listen(3000);
}
bootstrap();
