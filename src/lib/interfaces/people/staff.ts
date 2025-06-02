import { ContactInfo } from "@/lib/types/types";

export interface TeamMember {
  name: string;
  bio: string;
  description?: string;
  languages: string[];
  experienceYears: number;
  profileImage: string;
}

export interface TourGuide extends TeamMember {
  contact: ContactInfo;
}
