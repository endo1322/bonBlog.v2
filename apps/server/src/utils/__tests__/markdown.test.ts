import { markdownFormatter } from "@server/utils/markdown";

describe("markdownFormatter", () => {
  test("箇条書きの'・'をマークダウンの'- 'に変換する", () => {
    const input = "・項目1\n・項目2";
    const expected = "- 項目1\n- 項目2";
    expect(markdownFormatter(input)).toBe(expected);
  });

  test("文と文の間の改行1つ（\\n）を段落の空行（\\n\\n）に変換する", () => {
    const input = "これは1文目です\nこれは2文目です";
    const expected = "これは1文目です\n\nこれは2文目です";
    expect(markdownFormatter(input)).toBe(expected);
  });

  test("すでに空行（\\n\\n）がある場合は追加の空行を挿入しない", () => {
    const input = "これは1文目です\n\nこれは2文目です";
    const expected = "これは1文目です\n\nこれは2文目です";
    expect(markdownFormatter(input)).toBe(expected);
  });

  test("次の行がリスト（'- 'で始まる）場合は空行（\\n\\n）を挿入しない", () => {
    const input = "- 項目1\n- 項目2";
    const expected = "- 項目1\n- 項目2";
    expect(markdownFormatter(input)).toBe(expected);
  });
});
