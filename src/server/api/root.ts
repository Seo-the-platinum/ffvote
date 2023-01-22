import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { ffRouter } from "./routers/ffRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  ff: ffRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
