import { z } from "zod";
import { validationSchema } from "../validation";

export type EditProfileFields = z.infer<typeof validationSchema>;
