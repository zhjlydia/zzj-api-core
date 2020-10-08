export class ArticleVo {
  title: string;

  description: string;

  content: string;

  categoryId?: number;

  image?: string;

  tagIds: number[] = [];
}
