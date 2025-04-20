type Props = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  tags: { id: string; name: string }[];
};

export class GetAllBlogsDto {
  constructor(readonly blogs: BlogSummaryDto[]) {}
}

export class BlogSummaryDto {
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly title: string;
  readonly tags: { id: string; name: string }[];

  constructor(props: Props) {
    this.id = props.id;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.title = props.title;
    this.tags = props.tags;
  }
}
