/* eslint-disable @typescript-eslint/no-var-requires */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const version = require('../package.json').version;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle(`Block Scheduling Project - ${process.env.NODE_ENV}`)
    .setDescription('Back-end block scheduling project')
    .setVersion(version)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  const PORT = Number(process.env.PORT) || 3000;

  await app.listen(PORT, '0.0.0.0');
  console.log(
    `🤾🏻‍♂️ block scheduling is in ${process.env.NODE_ENV} mode and is listening on port:`,
    PORT,
  );
}
bootstrap();
