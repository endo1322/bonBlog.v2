import { BlogSummaryDto } from "./GetAllBlogsDto";

type Props = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  tags: { id: string; name: string }[];
  content: string;
};

export class GetBlogDto {
  constructor(readonly blog: BlogDetailDto) {}
}

class BlogDetailDto extends BlogSummaryDto {
  readonly content: string;

  constructor(props: Props) {
    super({
      id: props.id,
      createdAt: props.createdAt,
      updatedAt: props.updatedAt,
      title: props.title,
      tags: props.tags,
    });
    this.content = props.content;
  }
}
