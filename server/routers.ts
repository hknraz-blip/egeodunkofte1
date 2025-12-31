import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import { getMenuItems, getMenuItemsByCategory, createMenuItem, updateMenuItem, deleteMenuItem, getOrders, getOrderById, createOrder, updateOrder, getReservations, createReservation, updateReservation } from "./db";
import { TRPCError } from "@trpc/server";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Admin router for menu management
  admin: router({
    menu: router({
      list: protectedProcedure.query(async () => {
        return getMenuItems();
      }),
      getByCategory: protectedProcedure.input(z.object({ category: z.string() })).query(async ({ input }) => {
        return getMenuItemsByCategory(input.category);
      }),
      create: protectedProcedure.input(z.object({
        name: z.string(),
        description: z.string().optional(),
        category: z.string(),
        price: z.number(),
      })).mutation(async ({ ctx, input }) => {
        if (ctx.user?.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
        return createMenuItem(input);
      }),
      update: protectedProcedure.input(z.object({
        id: z.number(),
        name: z.string().optional(),
        description: z.string().optional(),
        price: z.number().optional(),
        isAvailable: z.number().optional(),
      })).mutation(async ({ ctx, input }) => {
        if (ctx.user?.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
        const { id, ...data } = input;
        return updateMenuItem(id, data);
      }),
      delete: protectedProcedure.input(z.object({ id: z.number() })).mutation(async ({ ctx, input }) => {
        if (ctx.user?.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
        return deleteMenuItem(input.id);
      }),
    }),
    orders: router({
      list: protectedProcedure.query(async ({ ctx }) => {
        if (ctx.user?.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
        return getOrders();
      }),
      getById: protectedProcedure.input(z.object({ id: z.number() })).query(async ({ ctx, input }) => {
        if (ctx.user?.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
        return getOrderById(input.id);
      }),
      updateStatus: protectedProcedure.input(z.object({
        id: z.number(),
        status: z.enum(["pending", "confirmed", "preparing", "ready", "completed", "cancelled"]),
      })).mutation(async ({ ctx, input }) => {
        if (ctx.user?.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
        return updateOrder(input.id, { status: input.status });
      }),
    }),
    reservations: router({
      list: protectedProcedure.query(async ({ ctx }) => {
        if (ctx.user?.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
        return getReservations();
      }),
      updateStatus: protectedProcedure.input(z.object({
        id: z.number(),
        status: z.enum(["pending", "confirmed", "cancelled", "completed"]),
      })).mutation(async ({ ctx, input }) => {
        if (ctx.user?.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
        return updateReservation(input.id, { status: input.status });
      }),
    }),
  }),
  
  // Public router for customer operations
  public: router({
    menu: router({
      list: publicProcedure.query(async () => {
        return getMenuItems();
      }),
      getByCategory: publicProcedure.input(z.object({ category: z.string() })).query(async ({ input }) => {
        return getMenuItemsByCategory(input.category);
      }),
    }),
    orders: router({
      create: publicProcedure.input(z.object({
        customerName: z.string(),
        customerEmail: z.string().email().optional(),
        customerPhone: z.string(),
        totalPrice: z.number(),
        notes: z.string().optional(),
      })).mutation(async ({ input }) => {
        return createOrder(input);
      }),
    }),
    reservations: router({
      create: publicProcedure.input(z.object({
        customerName: z.string(),
        customerEmail: z.string().email().optional(),
        customerPhone: z.string(),
        guestCount: z.number(),
        reservationDate: z.date(),
        notes: z.string().optional(),
      })).mutation(async ({ input }) => {
        return createReservation(input);
      }),
    }),
  })
});

export type AppRouter = typeof appRouter;
