import { Controller, HttpStatus, Logger } from '@nestjs/common';

import { MessagePattern } from '@nestjs/microservices';
import { MailerService } from '@nest-modules/mailer';

import { ConfigService } from './services/config/config.service';
import { IEmailData } from './interfaces/email-data.interface';
import { IMailSendResponse } from './interfaces/mail-send-response.interface';

@Controller()
export class ServiceController {
  private readonly logger = new Logger(ServiceController.name);

  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {}

  @MessagePattern('email')
  mailSend(data: IEmailData): IMailSendResponse {
    this.mailerService.sendMail(data);
    this.logger.log(`command=email`);
    this.logger.log(`payload=${JSON.stringify(data)}`);
    const result = {
      status: HttpStatus.OK,
      message: 'email has been sent',
    };
    this.logger.log(`result=${JSON.stringify(result)}`);
    return result;
  }
}
