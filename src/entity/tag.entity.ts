import { BeforeUpdate, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ArticleEntity } from './article.entity';
import { ProjectEntity } from './project.entity';

@Entity('tag')
export class TagEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

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

  @ManyToMany(
    type => ArticleEntity,
    article => article.tags
  )
  articles: ArticleEntity;

  @ManyToMany(
    type => ProjectEntity,
    project => project.tags
  )
  projects: ProjectEntity;
}
