import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  Collection,
} from 'typeorm';
import {EventTypeEntity} from 'src/event-type/event-type.entity';
import {ParticipantEntity} from 'src/participant/participant.entity';
import {SectionEntity} from 'src/section/section.entity';

@Entity('tbl_event')
export class EventEntity {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id: number;

  @Column({type: 'varchar', nullable: false})
  title: string;

  @Column({type: 'datetime', nullable: false})
  start: Date;

  @Column({type: 'datetime', nullable: false})
  end: Date;

  @Column({type: 'varchar'})
  bgColor: string;

  @Column({type: 'char', default: 'P'})
  status: string;

  @ManyToOne((type) => SectionEntity, (section) => section.event)
  section: SectionEntity;
}
