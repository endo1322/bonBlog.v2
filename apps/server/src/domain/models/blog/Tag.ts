export enum TagRole {
  UnPublished = "test",
  VersionV1 = "v1",
  VersionV2 = "v2",
  Normal = "normal",
}

type Props = {
  id: string;
  name: string;
};

class Tag {
  private readonly id: string;
  private readonly name: string;
  private readonly role: TagRole;

  constructor(props: Props) {
    this.id = props.id;
    this.name = props.name;
    this.role = this.resolveRole();
  }

  private resolveRole(): TagRole {
    if (this.name === "test") return TagRole.UnPublished;
    if (this.name === "v1") return TagRole.VersionV1;
    if (this.name === "v2") return TagRole.VersionV2;
    return TagRole.Normal;
  }

  getName(): string {
    return this.name;
  }

  getRole(): TagRole {
    return this.role;
  }

  toObject(): { id: string; name: string } {
    return {
      id: this.id,
      name: this.name,
    };
  }

  isUnPublished(): boolean {
    return this.role === TagRole.UnPublished;
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
    const tagRoles = this.tags.map((tag) => tag.getRole());
    if (tagRoles.includes(TagRole.VersionV2)) return 2;
    if (tagRoles.includes(TagRole.VersionV1)) return 1;
    return 2;
  }
}
