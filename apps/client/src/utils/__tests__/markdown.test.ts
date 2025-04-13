import { type Headings, extractHeadings } from "@/utils/markdown";

describe("extractHeadings", () => {
  it("レベル1とレベル2の見出しを正しく抽出できる", () => {
    const input = `
    # レベル1見出し1
    Some content here.
    
    ## レベル2見出し1
    More content.
    
    # レベル1見出し2
    Even more content.
    
    ## レベル2見出し2
    `;
    const expected: Headings = [
      { level: 1, text: "レベル1見出し1" },
      { level: 2, text: "レベル2見出し1" },
      { level: 1, text: "レベル1見出し2" },
      { level: 2, text: "レベル2見出し2" },
    ];
    expect(extractHeadings(input)).toEqual(expected);
  });

  it("レベル3以降の見出しを抽出しない", () => {
    const input = `
    ### レベル3見出し
    #### レベル4見出し
    ##### レベル5見出し
    ###### レベル6見出し
    `;
    const expected: Headings = [];
    expect(extractHeadings(input)).toEqual(expected);
  });

  it("エスケープ付きの#を抽出しない", () => {
    // '\'をエスケープとして扱うため、'\\#'を評価する
    const input = `
    \\# エスケープ付きレベル1見出し
    \\## エスケープ付きレベル2見出し
    `;
    const expected: Headings = [];
    expect(extractHeadings(input)).toEqual(expected);
  });
});
