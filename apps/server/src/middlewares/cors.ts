import { cors } from "hono/cors";
import { createMiddleware } from "hono/factory";

type Bindings = {
  Bindings: {
    CLIENT_URLS: string[];
    CF_CLIENT_DOMAIN: string;
  };
};

const corsMiddleware = createMiddleware<Bindings>(async (c, next) => {
  return cors({
    origin:
      c.env.CF_CLIENT_DOMAIN !== ""
        ? (origin) => {
            return origin.endsWith(c.env.CF_CLIENT_DOMAIN) ? origin : null;
          }
        : c.env.CLIENT_URLS,
  })(c, next);
});

export default corsMiddleware;
