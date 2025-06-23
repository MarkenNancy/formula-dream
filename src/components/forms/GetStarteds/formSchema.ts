import { z } from "zod";
export const formSchema = z.object({
  name: z.string().nonempty({ message: "Enter your name" }).min(3, {
    message: "Name must be at least 3 characters long",
  }),
  email: z
    .string()
    .nonempty({ message: "Enter your email" })
    .email("Invalid email address"),
  company: z.string().nonempty({ message: "Enter your company" }),
  role: z.string().nonempty({ message: "Enter your role" }),
  topPriority: z.string().nonempty({ message: "Select your top priority" }),
  source_page: z.string().optional(),
});

export type FormSchema = z.infer<typeof formSchema>;
