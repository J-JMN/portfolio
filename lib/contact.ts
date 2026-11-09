import { z } from "zod";

const singleLine = (message: string) =>
  z.string().refine((value) => !/[\r\n]/.test(value), message);

export const contactFormSchema = z
  .object({
    name: singleLine("Name must be on one line")
      .trim()
      .min(2, "Name must be at least 2 characters")
      .max(100, "Name must be at most 100 characters"),
    email: z
      .string()
      .trim()
      .toLowerCase()
      .email("Please enter a valid email address")
      .max(254, "Email address is too long"),
    subject: singleLine("Subject must be on one line")
      .trim()
      .min(5, "Subject must be at least 5 characters")
      .max(150, "Subject must be at most 150 characters"),
    message: z
      .string()
      .trim()
      .min(10, "Message must be at least 10 characters")
      .max(5000, "Message must be at most 5000 characters"),
    honeypot: z.string().trim().max(200).optional(),
  })
  .strict();

export type ContactFormValues = z.infer<typeof contactFormSchema>;
export type ContactSubmission = Omit<ContactFormValues, "honeypot">;
