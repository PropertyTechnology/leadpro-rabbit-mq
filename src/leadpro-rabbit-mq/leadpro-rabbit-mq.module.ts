import { Module } from '@nestjs/common';
import { LeadproRabbitMqService } from './leadpro-rabbit-mq.service';
import { UtilModule } from '../util/util.module';

@Module({
  imports: [UtilModule],
  providers: [LeadproRabbitMqService],
  exports: [LeadproRabbitMqService],
})
export class LeadproRabbitMqModule {}
