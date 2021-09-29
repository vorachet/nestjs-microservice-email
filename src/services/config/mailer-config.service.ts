import { MailerOptionsFactory, MailerOptions } from '@nest-modules/mailer';

export class MailerConfigService implements MailerOptionsFactory {
  createMailerOptions(): MailerOptions {
    return {
      transport: {
        host: process.env.SMTP_HOST,
        port: Number(String(process.env.SMTP_PORT)),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      },
      defaults: {
        from: process.env.SMTP_FROM,
      },
    };
  }
}
