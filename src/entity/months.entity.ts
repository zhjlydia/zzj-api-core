import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('months')
export class MonthsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mon: string;
}
