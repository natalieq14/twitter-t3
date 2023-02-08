import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./router/example";
import { tweetrouter } from "./router/tweet";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  tweet: tweetrouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
