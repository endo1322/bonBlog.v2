import { $getPageFullContent, type NotionMarkdownConverter } from "@notion-md-converter/core";
import type { Client } from "@notionhq/client";
import { BlogDetail, BlogSummary, Tag } from "@server/domain/models/blog/";
import type { IBlogRepository } from "@server/domain/repositories/IBlogRepository";
import { markdownFormatter } from "@server/utils/markdown";

export class BlogRepository implements IBlogRepository {
  private notion: Client;
  private notionMarkdownConverter: NotionMarkdownConverter;
  private databaseId: string;

  public constructor(
    notion: Client,
    notionMarkdownConverter: NotionMarkdownConverter,
    databaseId: string,
  ) {
    this.notion = notion;
    this.notionMarkdownConverter = notionMarkdownConverter;
    this.databaseId = databaseId;
  }

  public async findAllBlogs(): Promise<BlogSummary[]> {
    const response = await this.notion.databases.query({ database_id: this.databaseId });

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    return response.results.map((result: any): BlogSummary => {
      return new BlogSummary({
        id: result.id,
        title: result.properties.title.title[0].plain_text,
        createdAt: result.created_time,
        updatedAt: result.last_edited_time,
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        tags: result.properties.tag.multi_select.map((tag: any) => {
          return new Tag({
            id: tag.id,
            name: tag.name,
          });
        }),
      });
    });
  }

  public async findBlogById(id: string): Promise<BlogDetail> {
    const content = await $getPageFullContent(this.notion, id);
    const mdContent = this.notionMarkdownConverter.execute(content);
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const response: any = await this.notion.pages.retrieve({ page_id: id });

    return new BlogDetail({
      id: response.id,
      title: response.properties.title.title[0].plain_text,
      createdAt: response.created_time,
      updatedAt: response.last_edited_time,
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      tags: response.properties.tag.multi_select.map((tag: any) => {
        return new Tag({
          id: tag.id,
          name: tag.name,
        });
      }),
      content: markdownFormatter(mdContent),
    });
  }
}
