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
