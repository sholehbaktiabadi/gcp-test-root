import { Injectable } from '@nestjs/common';
import { env } from 'process';

@Injectable()
export class AppService {
  getHello() {
    return {
      name: 'gcp-test-root',
      port: env.APP_PORT
    }
  }
}
