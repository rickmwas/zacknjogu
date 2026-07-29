import { z } from "zod";

export const volunteerSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  phoneNumber: z
    .string()
    .min(9, "Please enter a valid Kenyan phone number (e.g., 0712345678).")
    .max(13, "Phone number is too long."),
  email: z.string().email("Invalid email address.").optional().or(z.literal("")),
  subLocation: z.string().min(2, "Please select or enter your sub-location in Maai Mahiu."),
  skills: z.array(z.string()).min(1, "Please select at least one area of contribution."),
  preferredRole: z.string().optional(),
  honeypot: z.string().max(0, "Bot detected."),
});

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  contactInfo: z.string().min(5, "Please provide a valid phone number or email address."),
  category: z.enum(["general", "media", "bursary", "meeting"], {
    errorMap: () => ({ message: "Please select an inquiry category." }),
  }),
  message: z.string().min(10, "Message must be at least 10 characters."),
  honeypot: z.string().max(0, "Bot detected."),
});

export const wardIssueSchema = z.object({
  reporterName: z.string().optional(),
  reporterContact: z.string().min(9, "Please provide a valid contact number for status updates."),
  location: z.string().min(2, "Please specify the exact location in Maai Mahiu Ward."),
  issueCategory: z.enum(["roads", "water", "bursary", "sanitation", "youth", "security"], {
    errorMap: () => ({ message: "Please select an issue category." }),
  }),
  description: z.string().min(15, "Please provide a detailed description of the ward issue."),
  honeypot: z.string().max(0, "Bot detected."),
});
