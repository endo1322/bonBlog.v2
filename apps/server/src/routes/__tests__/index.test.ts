import { env } from "cloudflare:test";
import { app } from "@server/routes";

vi.mock("@notionhq/client", () => ({
  Client: vi.fn(),
}));

vi.mock("@notion-md-converter/core", () => ({
  NotionMarkdownConverter: vi.fn(),
}));

describe("Example", () => {
  it("Should return 200 response", async () => {
    const res = await app.request("/", {}, env);

    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({
      message: "Hello Hono!",
    });
  });
});
