import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import { z } from "zod";

// created for each request
export const createContext = () => ({});

type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();

export const appRouter = t.router({
  greetFunconFour: t.procedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .query(({ input }) => {
      return `Hi ${input.name}`;
    }),
});

export type AppRouter = typeof appRouter;
