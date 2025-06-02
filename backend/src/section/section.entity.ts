import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import {EventEntity} from 'src/event/event.entity';

@Entity('tbl_section')
export class SectionEntity {
  @PrimaryGeneratedColumn({type: 'int'})
  id: number;

  @Column({type: 'varchar', nullable: false})
  name: string;

  @Column({type: 'varchar', nullable: false})
  cluster: string;

  @Column({type: 'varchar', nullable: false})
  division: string;

  @Column({type: 'boolean', default: true})
  isActive: boolean;

  @OneToMany(() => EventEntity, (event) => event.section)
  event: EventEntity[];
}
