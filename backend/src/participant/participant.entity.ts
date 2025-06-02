import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('tbl_participants')
export class ParticipantEntity {
  @PrimaryGeneratedColumn({type: 'int'})
  id: number;

  @Column({type: 'varchar', nullable: false})
  name: string;

  @Column({type: 'char', nullable: false})
  type: string;

  @Column({type: 'boolean', default: true})
  isActive: boolean;
}
