import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

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
}
