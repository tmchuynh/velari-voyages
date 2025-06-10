// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "5d893908-32b1-4eef-a7de-55e2f21a6ad8",
    vesselId: "hms-st-thomas-voyager",
    type: "Nightclub",
    location: {
      deck: 11,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "0390a7ed-b3e4-41ca-b6d8-99e3285ecc0b",
    vesselId: "hms-st-thomas-voyager",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "08a34efb-b431-4062-9143-be3cb9cc0ec6",
    vesselId: "hms-st-thomas-voyager",
    type: "Karaoke",
    location: {
      deck: 9,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "521003d1-c5c5-48b6-ad4a-23640e8cd273",
    vesselId: "hms-st-thomas-voyager",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
