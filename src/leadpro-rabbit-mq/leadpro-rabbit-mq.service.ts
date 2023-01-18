import { Injectable } from '@nestjs/common';
import { UtilService } from '../util/util.service';

@Injectable()
export class LeadproRabbitMqService {
  constructor(private readonly utilService: UtilService) {}

  public sayHello(): string {
    return this.utilService.sayHello();
  }
}
