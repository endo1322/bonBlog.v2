/**
 * Notionで書かれたblogに一部適切でないmarkdownが含まれることがあるため整形を行う
 */
export const markdownFormatter = (markdown: string) => {
  return markdown.replace(/・/g, "- ").replace(/([^\n])\n([^\n-])/g, "$1\n\n$2");
};
