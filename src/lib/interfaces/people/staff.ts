import { ContactInfo } from "@/lib/types/types";

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  description?: string;
  languages: string[];
  experienceYears?: number;
  profileImage: string;
}

export interface ContactPersonnel extends TeamMember {
  contact: ContactInfo;
}

export interface CrewMember extends TeamMember {
  city: string;
  department:
    | "Deck Department"
    | "Engineering Department"
    | "Security Department"
    | "Youth & Family Programs"
    | "Activities & Recreation"
    | "Photography & Videography"
    | "Health & Safety"
    | "Hospitality Department"
    | "Culinary Department"
    | "Entertainment Department"
    | "Operations Department";
  country: string;
  state?: string;
  region?: string;
}