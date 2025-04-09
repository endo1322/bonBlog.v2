import { env } from "cloudflare:test";
import app from "@server/index";

vi.mock("@notionhq/client", () => ({
  Client: vi.fn(),
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
