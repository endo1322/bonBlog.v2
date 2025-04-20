import type { Tag } from "./Tag";

type Props = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  tags: Tag[];
};

export class BlogSummary {
  readonly id: string;
  readonly title: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly tags: Tag[];

  constructor(props: Props) {
    this.id = props.id;
    this.title = props.title;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.tags = props.tags;
  }
}
