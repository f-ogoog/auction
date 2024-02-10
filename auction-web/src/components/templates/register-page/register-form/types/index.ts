import { z } from "zod";
import { validationSchema } from "../validation";

export type RegisterFormFields = z.infer<typeof validationSchema>;
