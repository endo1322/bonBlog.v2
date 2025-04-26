import type { TagList } from "./Tag";

type Props = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  tagList: TagList;
};

export class BlogSummary {
  readonly id: string;
  readonly title: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly tagList: TagList;
  readonly unPublished: boolean;

  constructor(props: Props) {
    this.id = props.id;
    this.title = props.title;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.tagList = props.tagList;
    this.unPublished = this.isUnPublished();
  }

  isUnPublished(): boolean {
    return this.tagList.hasUnPublishedTag();
  }
}
