import { Injectable } from '@nestjs/common';
import { env } from 'process';

@Injectable()
export class AppService {
  getHello() {
    return {
      action: "health-check",
      serviceName: 'gcp-root',
      port: env.APP_PORT,
      env: env.APP_ENV
    }
  }
}
