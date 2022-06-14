import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const PREFIX = 'rest'
  const app = await NestFactory.create(AppModule, { cors:true })
  app.enableCors();
  app.setGlobalPrefix(PREFIX);

  const swaggerConfig = new DocumentBuilder()
    .setBasePath(PREFIX)
    .setTitle('Cabbage API')
    .setDescription('')
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'accessToken',
    )
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('swagger', app, document);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
