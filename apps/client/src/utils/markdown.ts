export type Headings = {
  level: 1 | 2;
  text: string;
}[];

export const extractHeadings = (markdown: string): Headings => {
  const regex = /^(?<!\\)\s*(#{1,2})\s+(.+)/gm;
  const matches = [];
  let match = regex.exec(markdown);

  while (match !== null) {
    matches.push({ level: match[1].length as 1 | 2, text: match[2] });
    match = regex.exec(markdown);
  }

  return matches;
};
