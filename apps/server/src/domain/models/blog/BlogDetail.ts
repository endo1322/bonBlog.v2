// domain/models/blog/BlogDetail.ts
import { BlogSummary } from "./BlogSummary";
import type { Tag } from "./Tag";

type Props = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  tags: Tag[];
  content: string;
};

export class BlogDetail extends BlogSummary {
  readonly content: string;

  constructor(props: Props) {
    super({
      id: props.id,
      title: props.title,
      createdAt: props.createdAt,
      updatedAt: props.updatedAt,
      tags: props.tags,
    });
    this.content = props.content;
  }
}
