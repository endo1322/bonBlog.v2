import { TagList, TagRole } from "../Tag";

describe("Tag", () => {
  describe("Tag", () => {
    describe("resolveRole", () => {
      it.each([
        { tagName: "test", expectedRole: TagRole.UnPublished },
        { tagName: "v1", expectedRole: TagRole.VersionV1 },
        { tagName: "v2", expectedRole: TagRole.VersionV2 },
        { tagName: "default", expectedRole: TagRole.Normal },
      ])("タグの名前が$tagNameのとき、roleは$expectedRoleになる", ({ tagName, expectedRole }) => {
        const tagList = new TagList([{ id: "1", name: tagName }]);
        expect(tagList.getTags()[0].getRole()).toBe(expectedRole);
      });
    });
  });
  describe("TagList", () => {
    describe("hasUnPublishedTag", () => {
      it.each([
        {
          description: "ある",
          tags: [
            { id: "1", name: "test" },
            { id: "2", name: "hoge" },
          ],
          expected: true,
        },
        {
          description: "ない",
          tags: [
            { id: "1", name: "hoge" },
            { id: "2", name: "fuga" },
          ],
          expected: false,
        },
      ])("unPublishedタグが$descriptionとき、$expectedを返す", ({ tags, expected }) => {
        const tagList = new TagList(tags);
        expect(tagList.hasUnPublishedTag()).toBe(expected);
      });
    });

    describe("getVersion", () => {
      it.each([
        {
          description: "v2タグがある",
          tags: [
            { id: "1", name: "v2" },
            { id: "2", name: "test" },
          ],
          expected: 2,
        },
        {
          description: "v1タグがある",
          tags: [
            { id: "1", name: "v1" },
            { id: "2", name: "test" },
          ],
          expected: 1,
        },
        {
          description: "v1タグもv2タグもない",
          tags: [
            { id: "1", name: "hoge" },
            { id: "2", name: "fuga" },
          ],
          expected: 2,
        },
      ])("$descriptionとき、$expectedを返す", ({ tags, expected }) => {
        const tagList = new TagList(tags);
        expect(tagList.getVersion()).toBe(expected);
      });
    });
  });
});
