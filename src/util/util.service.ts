import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilService {
  public sayHello(): string {
    return 'Hello';
  }
}
