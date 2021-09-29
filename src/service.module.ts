import { Module } from '@nestjs/common';
import { MailerModule } from '@nest-modules/mailer';
import { ServiceController } from './service.controller';
import { MailerConfigService } from './services/config/mailer-config.service';
import { ConfigService } from './services/config/config.service';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useClass: MailerConfigService,
    }),
  ],
  providers: [ConfigService],
  controllers: [ServiceController],
})
export class ServiceModule {}
