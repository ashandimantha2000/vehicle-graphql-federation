import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS
  app.enableCors();
  // await app.listen(4000);

  await app.listen(4000, () => {
    console.log(`Federation gateway ready at http://localhost:4000/graphql`);
  });
}
bootstrap();
