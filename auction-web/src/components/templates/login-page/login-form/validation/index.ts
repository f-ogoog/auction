import { z } from "zod";

export const validationSchema = z.object({
  username: z
    .string({ required_error: "Specify username" })
    .min(4, "Username must have at least 4 characters")
    .max(32, "Username must be at most 32 characters"),
  password: z
    .string({ required_error: "Specify password" })
    .min(6, "Password must be at least 6 characters")
    .max(32, "Password must be at most 32 characters"),
});
