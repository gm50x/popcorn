import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './services';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const prisma: PrismaService = app.get(PrismaService);
  prisma.enableShutdownHooks(app);

  await app.listen(3000);
}
bootstrap();
