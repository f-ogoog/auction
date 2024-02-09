import { z } from "zod";
import { validationSchema } from "../validation";

export type LoginFormFields = z.infer<typeof validationSchema>;
