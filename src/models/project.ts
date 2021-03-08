export class ProjectVo {
    name: string;

    description: string;

    content: string;

    state: string;

    github: string;

    role: string;

    url: string;

    categoryId?: number;

    image?: string;

    tagIds: number[] = [];

    startedAt: Date;

    endedAt: Date;
  }
