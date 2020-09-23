import {
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { ArticleEntity } from './article.entity';
import { ProjectEntity } from './project.entity';

@Entity('category')
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column()
  module: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP'
  })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP'
  })
  updatedAt: Date;

  @BeforeUpdate()
  updateTimestamp() {
    this.updatedAt = new Date();
  }

  @OneToMany(
    type => ArticleEntity,
    article => article.category
  )
  articles: ArticleEntity[];

  @OneToMany(
    type => ProjectEntity,
    project => project.category
  )
  projects: ProjectEntity[];
}
