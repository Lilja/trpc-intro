import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import { z } from "zod";
import { Result, failure, success } from "./utils"

export const createContext = () => ({});

type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();

export const appRouter = t.router({
  greetFunconFour: t.procedure
    .input(z.object({
      name: z.string()
    }))
    .query(({ input }) => {
      return {
        output: "Hello, " + input.name + "!"
      };
    }),
  getLogs: t.procedure
    .input(z.object({
      token: z.string().min(10),
      userId: z.string(),
    }))
    .query(({ input }): Result<string[], "Unauthorised" | "No permissions"> => {
      if (input.token !== "abcdefghikl") {
        return failure("Unauthorised");
      }
      if (input.userId !== "editor") {
        return failure("No permissions");
      }
      return success(["Someone did something"]);
    })
});

export type AppRouter = typeof appRouter;
