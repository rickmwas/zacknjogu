"use server";

import { volunteerSchema, contactSchema, wardIssueSchema } from "@/lib/validations/forms";

export type ActionResponse = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

// In-memory simple rate limiting per IP / Session for local server execution
const rateLimitMap = new Map<string, number>();

function checkRateLimit(identifier: string, limitMs: number = 30000): boolean {
  const now = Date.now();
  const lastTime = rateLimitMap.get(identifier);
  if (lastTime && now - lastTime < limitMs) {
    return false; // rate limited
  }
  rateLimitMap.set(identifier, now);
  return true;
}

export async function submitVolunteerAction(formData: unknown): Promise<ActionResponse> {
  try {
    const result = volunteerSchema.safeParse(formData);
    if (!result.success) {
      return {
        success: false,
        message: "Validation failed. Please check your entries.",
        errors: result.error.flatten().fieldErrors,
      };
    }

    const { fullName, phoneNumber, subLocation, skills, honeypot } = result.data;

    // Honeypot check
    if (honeypot && honeypot.length > 0) {
      return { success: true, message: "Thank you for registering!" };
    }

    // Rate limit check
    if (!checkRateLimit(`vol_${phoneNumber}`)) {
      return {
        success: false,
        message: "You have recently submitted a form. Please wait a moment before trying again.",
      };
    }

    // Simulated Supabase persistence or fallback
    console.log("[SERVER ACTION] Volunteer Registered:", { fullName, phoneNumber, subLocation, skills });

    return {
      success: true,
      message: `Asante sana ${fullName}! Your volunteer registration for ${subLocation} has been received. Our team will reach out via WhatsApp/Phone shortly.`,
    };
  } catch (error) {
    console.error("[SERVER ACTION ERROR] Volunteer:", error);
    return {
      success: false,
      message: "An unexpected server error occurred. Please try again or contact us directly.",
    };
  }
}

export async function submitContactAction(formData: unknown): Promise<ActionResponse> {
  try {
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      return {
        success: false,
        message: "Validation failed. Please check your entries.",
        errors: result.error.flatten().fieldErrors,
      };
    }

    const { name, contactInfo, message, honeypot } = result.data;

    if (honeypot && honeypot.length > 0) {
      return { success: true, message: "Thank you for your message!" };
    }

    if (!checkRateLimit(`contact_${contactInfo}`)) {
      return {
        success: false,
        message: "Please wait a moment before sending another message.",
      };
    }

    console.log("[SERVER ACTION] Contact Inquiry:", { name, contactInfo, message });

    return {
      success: true,
      message: `Thank you ${name}. Your message has been routed to Zack Njogu's campaign office. We will respond promptly.`,
    };
  } catch (error) {
    console.error("[SERVER ACTION ERROR] Contact:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    };
  }
}

export async function submitWardIssueAction(formData: unknown): Promise<ActionResponse> {
  try {
    const result = wardIssueSchema.safeParse(formData);
    if (!result.success) {
      return {
        success: false,
        message: "Validation failed. Please complete all required fields.",
        errors: result.error.flatten().fieldErrors,
      };
    }

    const { location, issueCategory, description, reporterContact, honeypot } = result.data;

    if (honeypot && honeypot.length > 0) {
      return { success: true, message: "Issue report received." };
    }

    if (!checkRateLimit(`issue_${reporterContact}`)) {
      return {
        success: false,
        message: "You have submitted a report recently. Please wait before submitting another.",
      };
    }

    console.log("[SERVER ACTION] Ward Issue Reported:", { location, issueCategory, description, reporterContact });

    return {
      success: true,
      message: `Ward issue report for ${location} (${issueCategory.toUpperCase()}) logged successfully. Tracking reference created.`,
    };
  } catch (error) {
    console.error("[SERVER ACTION ERROR] Ward Issue:", error);
    return {
      success: false,
      message: "Unable to submit report. Please try again later.",
    };
  }
}
