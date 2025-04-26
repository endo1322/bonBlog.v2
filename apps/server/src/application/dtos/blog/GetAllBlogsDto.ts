import type { BlogSummary } from "@server/domain/models/blog";

export class GetAllBlogsDto {
  readonly blogs: BlogSummaryDto[];
  constructor(props: BlogSummary[]) {
    this.blogs = props.map((blog) => {
      return new BlogSummaryDto({
        id: blog.id,
        createdAt: blog.createdAt,
        updatedAt: blog.updatedAt,
        title: blog.title,
        tags: blog.tagList.getTags().map((tag) => tag.toObject()),
      });
    });
  }
}

export class BlogSummaryDto {
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly title: string;
  readonly tags: { id: string; name: string }[];

  constructor(props: BlogSummaryDto) {
    this.id = props.id;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.title = props.title;
    this.tags = props.tags;
  }
}
