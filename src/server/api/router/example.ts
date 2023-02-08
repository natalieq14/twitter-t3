import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure, logProcedure } from "../trpc";

export const exampleRouter = createTRPCRouter({
  hello: logProcedure
    .input(z.object({ text: z.string() }))
    .query(({ ctx, input }) => {
      console.log(Object.keys(ctx))
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
