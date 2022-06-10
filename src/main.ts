import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const PREFIX = 'rest'
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix(PREFIX);

  const swaggerConfig = new DocumentBuilder()
    .setBasePath(PREFIX)
    .setTitle('Cabbage API')
    .setDescription('')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('swagger', app, document);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
