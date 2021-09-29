export class ConfigService {
  private readonly envConfig: { [key: string]: any } = null;

  constructor() {
    this.envConfig = {
      host: process.env.HOST,
      port: process.env.PORT,
    };
  }

  get(key: string): any {
    return this.envConfig[key];
  }
}
