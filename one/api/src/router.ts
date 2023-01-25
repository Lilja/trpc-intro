import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import { z } from "zod";
import { Result, failure, success } from "./utils"

export const createContext = () => ({});

type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();

export const appRouter = t.router({
  greetFunconFour: t.procedure
  .input(z.string())
  .query(({input}) => {
    return "Hi " + input + "!";
  }),
  getLogs: t.procedure
  .input(z.object({userId: z.string(), token: z.string()}))
  .query(({input}): Result<string[], "Unauthorized" | "No permissions"> => {
    if (input.token !== "abc") {
      return failure("Unauthorized")
    }
    else if (input.userId != "123") {
      return failure("No permissions")
    }
    else {
      return success(["a", "b", "c"])
    }
  })

});

export type AppRouter = typeof appRouter;