import { MailerOptionsFactory, MailerOptions } from '@nest-modules/mailer';

export class MailerConfigService implements MailerOptionsFactory {
  createMailerOptions(): MailerOptions {
    return {
      transport: {
        host: process.env.EMAIL_SERVICE_SMTP_HOST,
        port: Number(String(process.env.EMAIL_SERVICE_SMTP_PORT)),
        auth: {
          user: process.env.EMAIL_SERVICE_SMTP_USER,
          pass: process.env.EMAIL_SERVICE_SMTP_PASS,
        },
      },
      defaults: {
        from: process.env.EMAIL_SERVICE_SMTP_FROM,
      },
    };
  }
}
