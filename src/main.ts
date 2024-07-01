import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CONFIG } from '@Utils/env.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(`🚀 Starting ${CONFIG.APP_NAME} on port ${CONFIG.APP_PORT} 🚀`);
  await app.listen(3000);
}
bootstrap();
