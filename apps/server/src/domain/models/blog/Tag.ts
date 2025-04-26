type Props = {
  id: string;
  name: string;
};

class Tag {
  private readonly id: string;
  private readonly name: string;

  constructor(props: Props) {
    this.id = props.id;
    this.name = props.name;
  }

  getName(): string {
    return this.name;
  }

  toObject(): { id: string; name: string } {
    return {
      id: this.id,
      name: this.name,
    };
  }

  isUnPublished(): boolean {
    return this.name === "test";
  }
}

export class TagList {
  private readonly tags: Tag[];

  constructor(PropsList: Props[]) {
    this.tags = PropsList.map((props) => new Tag(props));
  }

  getTags(): Tag[] {
    return [...this.tags];
  }

  hasUnPublishedTag(): boolean {
    return this.tags.some((tag) => tag.isUnPublished());
  }

  getVersion(): number {
    const tagNames = this.tags.map((tag) => tag.getName());
    if (tagNames.includes("v2")) return 2;
    if (tagNames.includes("v1")) return 1;
    return 2;
  }
}
