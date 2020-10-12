import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
export type ModuleType = 'article' | 'project';

@Entity('log')
export class LogEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  targetId: number;

  @Column({
      type: 'enum',
      enum: ['article', 'project'],
      default: 'article'
  })
  module: ModuleType;

  @Column()
  ip: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP'
  })
  createdAt: Date;
}
