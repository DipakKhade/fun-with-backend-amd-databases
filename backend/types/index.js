import z from "zod";

export const createTodoValidator = z.object({
  title: z.string(),
  description: z.string(),
  isCompleted: z.number(), // Assuming isCompleted is meant to be a boolean
});

export const updateTodoValidator = z.object({
  id: z.string,
});
