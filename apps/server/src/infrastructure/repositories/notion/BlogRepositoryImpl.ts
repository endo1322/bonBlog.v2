import { $getPageFullContent, type NotionMarkdownConverter } from "@notion-md-converter/core";
import type { Client } from "@notionhq/client";
import { NotFoundError } from "@server/domain/errors/NotFoundError";
import { BlogDetail, BlogSummary, TagList } from "@server/domain/models/blog/";
import type { IBlogRepository } from "@server/domain/repositories/IBlogRepository";
import { NotionBaseRepository } from "@server/infrastructure/repositories/notion/NotionBaseRepository";

export class BlogRepository extends NotionBaseRepository implements IBlogRepository {
  private databaseId: string;

  public constructor(
    notion: Client,
    notionMarkdownConverter: NotionMarkdownConverter,
    databaseId: string,
  ) {
    super(notion, notionMarkdownConverter);
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
        tagList: new TagList(
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          result.properties.tag.multi_select.map((tag: any) => {
            return { id: tag.id, name: tag.name };
          }),
        ),
      });
    });
  }

  public async findBlogById(id: string): Promise<BlogDetail> {
    try {
      const content = await $getPageFullContent(this.notion, id);
      const mdContent = this.notionMarkdownConverter.execute(content);
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      const response: any = await this.notion.pages.retrieve({ page_id: id });

      return new BlogDetail({
        id: response.id,
        title: response.properties.title.title[0].plain_text,
        createdAt: response.created_time,
        updatedAt: response.last_edited_time,
        tagList: new TagList(
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          response.properties.tag.multi_select.map((tag: any) => {
            return { id: tag.id, name: tag.name };
          }),
        ),
        content: this.formatMarkdown(mdContent),
      });
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (error: any) {
      if (error.code === "object_not_found" || error.code === "validation_error") {
        throw new NotFoundError(`Blog with id ${id} not found`);
      }
      throw error;
    }
  }
}
