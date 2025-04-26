import type { BlogDetail } from "@server/domain/models/blog";
import { BlogSummaryDto } from "./GetAllBlogsDto";

export class GetBlogDto {
  readonly blog: BlogDetailDto;

  constructor(props: BlogDetail) {
    this.blog = new BlogDetailDto({
      id: props.id,
      createdAt: props.createdAt,
      updatedAt: props.updatedAt,
      title: props.title,
      tags: props.tagList.getTags().map((tag) => tag.toObject()),
      content: props.content,
      version: props.version,
    });
  }
}

class BlogDetailDto extends BlogSummaryDto {
  readonly content: string;
  readonly version: number;

  constructor(props: BlogDetailDto) {
    super({
      id: props.id,
      createdAt: props.createdAt,
      updatedAt: props.updatedAt,
      title: props.title,
      tags: props.tags,
    });
    this.content = props.content;
    this.version = props.version;
  }
}
