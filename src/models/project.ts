export class ProjectVo {
  name: string;

  description: string;

  content: string;

  stateText: string;

  github: string;

  role: string;

  url: string;

  state?: number;

  isDeleted?: boolean;

  categoryId?: number;

  image?: string;

  tagIds: number[] = [];

  startedAt: Date;

  endedAt: Date;
}
