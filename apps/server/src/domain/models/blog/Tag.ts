type Props = {
  id: string;
  name: string;
};

export class Tag {
  readonly id: string;
  readonly name: string;

  constructor(props: Props) {
    this.id = props.id;
    this.name = props.name;
  }
}
