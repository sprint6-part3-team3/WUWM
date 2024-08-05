import { z } from "zod";

const repeatTypeSchema = z.enum(["ONCE", "DAILY", "WEEKLY", "MONTHLY"]);

const newTaskBaseSchema = z.object({
  name: z.string(),
  frequencyType: repeatTypeSchema,
  description: z.string().optional(),
  displayIndex: z.number().optional(),
});

const weeklyTaskSchema = newTaskBaseSchema.extend({
  frequencyType: z.literal("WEEKLY"),
  weekDays: z.array(z.string()).min(1),
});

const monthlyTaskSchema = newTaskBaseSchema.extend({
  frequencyType: z.literal("MONTHLY"),
  monthDay: z.number().min(1).max(31),
});

const otherTaskSchema = newTaskBaseSchema.extend({
  frequencyType: z.union([z.literal("ONCE"), z.literal("DAILY")]),
});

const newTaskSchema = z.union([
  weeklyTaskSchema,
  monthlyTaskSchema,
  otherTaskSchema,
]);

export default newTaskSchema;
