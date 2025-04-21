import { NotionBaseRepository } from "../NotionBaseRepository";

class TestableNotionBaseRepository extends NotionBaseRepository {
  public callFormatMarkdown(markdown: string): string {
    return this.formatMarkdown(markdown);
  }
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const mockNotionClient = {} as any;
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const mockNotionMarkdownConverter = {} as any;

const testRepository = new TestableNotionBaseRepository(
  mockNotionClient,
  mockNotionMarkdownConverter,
);

describe("NotionBaseRepository", () => {
  describe("formatMarkdown", () => {
    test("箇条書きの'・'をマークダウンの'- 'に変換する", () => {
      const input = "・項目1\n・項目2";
      const expected = "- 項目1\n- 項目2";
      expect(testRepository.callFormatMarkdown(input)).toBe(expected);
    });

    test("文と文の間の改行1つ（\\n）を段落の空行（\\n\\n）に変換する", () => {
      const input = "これは1文目です\nこれは2文目です";
      const expected = "これは1文目です\n\nこれは2文目です";
      expect(testRepository.callFormatMarkdown(input)).toBe(expected);
    });

    test("すでに空行（\\n\\n）がある場合は追加の空行を挿入しない", () => {
      const input = "これは1文目です\n\nこれは2文目です";
      const expected = "これは1文目です\n\nこれは2文目です";
      expect(testRepository.callFormatMarkdown(input)).toBe(expected);
    });

    test("次の行がリスト（'- 'で始まる）場合は空行（\\n\\n）を挿入しない", () => {
      const input = "- 項目1\n- 項目2";
      const expected = "- 項目1\n- 項目2";
      expect(testRepository.callFormatMarkdown(input)).toBe(expected);
    });

    test("複数の段落とリストが混在していても正しく整形される", () => {
      const input = `
タイトル
これは空行を含まない文です

これは空行を既に含む文です
・項目1
・項目2
これは段落後の文です

`;
      const expected = `
タイトル

これは空行を含まない文です

これは空行を既に含む文です
- 項目1
- 項目2

これは段落後の文です

`;
      expect(testRepository.callFormatMarkdown(input)).toBe(expected);
    });
  });
});
