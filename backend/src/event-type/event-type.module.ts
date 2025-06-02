import {Module} from '@nestjs/common';
import {EventTypeService} from './event-type.service';
import {EventTypeController} from './event-type.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {EventTypeEntity} from './event-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventTypeEntity])],
  controllers: [EventTypeController],
  providers: [EventTypeService],
})
export class EventTypeModule {}
