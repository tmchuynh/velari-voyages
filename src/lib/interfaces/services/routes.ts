import { MeetingPoint } from "@/lib/types/types";

export interface YachtRoute {
  route: string;
  totalDuration: string;
  timeAtSea: { firstPeriod: string; secondPeriod: string; return: string };
  timeOnLand: { firstPeriod: string; secondPeriod: string };
  meetingPoint: MeetingPoint;
  highlight: string[];
}
