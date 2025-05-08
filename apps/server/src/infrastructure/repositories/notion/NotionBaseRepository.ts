import type { NotionMarkdownConverter } from "@notion-md-converter/core";
import type { Client } from "@notionhq/client";

export abstract class NotionBaseRepository {
  protected notion: Client;
  protected notionMarkdownConverter: NotionMarkdownConverter;

  constructor(notion: Client, converter: NotionMarkdownConverter) {
    this.notion = notion;
    this.notionMarkdownConverter = converter;
  }

  /**
   * Notionで書かれたmarkdownに一部適切でないmarkdownが含まれることがあるため整形を行う
   */
  protected formatMarkdown(markdown: string): string {
    return markdown.replace(/・/g, "- ").replace(/([^\n])\n([^\n-])/g, "$1\n\n$2");
  }
}
