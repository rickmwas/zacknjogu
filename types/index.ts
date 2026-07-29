export interface Volunteer {
  id?: string;
  fullName: string;
  phoneNumber: string;
  email?: string;
  subLocation: string;
  skills: string[];
  preferredRole?: string;
  createdAt?: string;
}

export interface ContactInquiry {
  id?: string;
  name: string;
  contactInfo: string;
  category: "general" | "media" | "bursary" | "meeting";
  message: string;
  createdAt?: string;
}

export interface WardIssueReport {
  id?: string;
  reporterName?: string;
  reporterContact: string;
  location: string;
  issueCategory: "roads" | "water" | "bursary" | "sanitation" | "youth" | "security";
  description: string;
  status?: "received" | "under_review" | "action_planned" | "resolved";
  createdAt?: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: "Press Release" | "Community Initiative" | "Youth & Economy" | "Policy";
  featuredImageUrl: string;
  publishedAt: string;
  author: string;
  readTime: string;
}

export interface ManifestoPillar {
  id: string;
  number: string;
  title: string;
  shortSummary: string;
  detailedPoints: string[];
  iconName: string;
  localImpactArea: string;
}

export interface CommunityProject {
  id: string;
  title: string;
  location: string;
  category: string;
  status: "Completed" | "In Progress" | "Planned";
  description: string;
  impactMetrics: string;
  imageUrl: string;
}
