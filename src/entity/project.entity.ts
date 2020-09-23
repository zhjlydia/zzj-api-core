import {
    BeforeUpdate,
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn
} from 'typeorm';
import { CategoryEntity } from './category.entity';
import { UserEntity } from './user.entity';

@Entity('project')
  export class ProjectEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    image: string;

    @Column('text')
    description: string;

    @Column('text')
    content: string;

    @Column()
    github: string;

    @Column()
    role: string;

    @Column()
    tags: string;

    @Column()
    url: string;

    @Column({
      type: 'timestamp'
    })
    startedAt: Date;

    @Column({
        type: 'timestamp'
      })
    endedAt: Date;

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

    @ManyToOne(
      type => UserEntity,
      user => user.articles
    )
    author: UserEntity;

    @ManyToOne(
      type => CategoryEntity,
      category => category.projects
    )
    category: CategoryEntity;
  }
