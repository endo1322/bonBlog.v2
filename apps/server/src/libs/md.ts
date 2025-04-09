/**
 * Notionで書かれたblogに一部適切でないmarkdownが含まれることがあるため整形を行う
 */
export const mdFormatter = (markdown: string) => {
  return markdown.replace(/・/g, "- ");
};
