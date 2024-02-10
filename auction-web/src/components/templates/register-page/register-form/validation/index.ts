import { z } from "zod";

export const validationSchema = z.object({
  username: z
    .string({ required_error: "Specify username" })
    .min(4, "Username must have at least 4 characters")
    .max(32, "Username must be at most 32 characters"),
  firstName: z
    .string({ required_error: "Specify first name" })
    .min(3, "First name must have at least 3 characters")
    .max(32, "First name must be at most 32 characters"),
  lastName: z
    .string({ required_error: "Specify last name" })
    .min(3, "Last name must have at least 3 characters")
    .max(32, "Last name must be at most 32 characters"),
  middleName: z
    .string()
    .min(3, "Middle name must have at least 3 characters")
    .max(32, "Middle name must be at most 32 characters")
    .optional()
    .or(z.literal("")),
  password: z
    .string({ required_error: "Specify password" })
    .min(6, "Password must be at least 6 characters")
    .max(32, "Password must be at most 32 characters"),
});
