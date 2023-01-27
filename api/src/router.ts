import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import { string, z } from "zod";
import { Result, failure, success } from "./utils"

export const createContext = () => ({});

type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();

export const appRouter = t.router({
  getLogs: t.procedure
  .input(z.object({
    user_id: z.string(),
    token: z.string(),
  }))
  .query(({input}): Result<string, string> => {
    return failure("noo!")
  })
});

export type AppRouter = typeof appRouter;