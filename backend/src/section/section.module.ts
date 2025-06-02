import {Module} from '@nestjs/common';
import {SectionService} from './section.service';
import {SectionController} from './section.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {SectionEntity} from './section.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SectionEntity])],
  controllers: [SectionController],
  providers: [SectionService],
})
export class SectionModule {}
