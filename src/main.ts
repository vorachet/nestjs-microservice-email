import { NestFactory } from '@nestjs/core';
import { Transport, TcpOptions } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

import { ServiceModule } from './service.module';
import { ConfigService } from './services/config/config.service';

async function bootstrap() {
  const logger = new Logger('Main');
  const host = new ConfigService().get('host');
  const port = new ConfigService().get('port');
  const app = await NestFactory.createMicroservice(ServiceModule, {
    transport: Transport.TCP,
    options: {
      host: host,
      port: port,
    },
  } as TcpOptions);
  await app.listen();
  logger.log(`Started host=${host} port=${port}`);
}
bootstrap();
