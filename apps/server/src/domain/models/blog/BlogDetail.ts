import { BlogSummary } from "./BlogSummary";
import type { TagList } from "./Tag";

type Props = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  tagList: TagList;
  content: string;
};

export class BlogDetail extends BlogSummary {
  readonly content: string;
  readonly version: number;

  constructor(props: Props) {
    super({
      id: props.id,
      title: props.title,
      createdAt: props.createdAt,
      updatedAt: props.updatedAt,
      tagList: props.tagList,
    });
    this.content = props.content;
    this.version = props.tagList.getVersion();
  }
}
