import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import {SectionEntity} from 'src/section/section.entity';

@Entity('tbl_user')
export class UserEntity {
  @PrimaryGeneratedColumn({type: 'int'})
  id: number;

  @Column({type: 'varchar', nullable: false})
  name: string;

  @Column({type: 'varchar', nullable: false})
  username: string;

  @Column({type: 'varchar', nullable: false})
  password: string;

  @Column({type: 'boolean', default: true})
  isActive: boolean;

  @ManyToOne((type) => SectionEntity, (section) => section.users)
  section: SectionEntity;
}
