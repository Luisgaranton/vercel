import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Servando compra los pasamontaña mmñm!';
  }
}
