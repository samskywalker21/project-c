import {EventEntity} from 'src/event/event.entity';
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';

@Entity('tbl_task-type')
export class EventTypeEntity {
  @PrimaryGeneratedColumn({type: 'int'})
  id: number;

  @Column({type: 'varchar', nullable: false})
  name: string;

  @Column({type: 'boolean', nullable: false})
  requirePR: boolean;

  @Column({type: 'boolean', default: true})
  isActive: boolean;

  @OneToMany((type) => EventEntity, (event) => event.eventType)
  events: EventEntity[];
}
