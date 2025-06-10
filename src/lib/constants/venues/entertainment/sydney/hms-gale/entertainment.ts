// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "e5d3f3f6-2e13-48da-91f8-7b6aa9bb1629",
    vesselId: "hms--gale",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ee9a8f74-abb1-41ed-9172-65910b8b1a26",
    vesselId: "hms--gale",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "a008691f-5c4b-4d5d-9d4d-f751e6419836",
    vesselId: "hms--gale",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "0edd6878-7b87-4944-8f51-d7b1536211b0",
    vesselId: "hms--gale",
    type: "Comedy",
    location: {
      deck: 13,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
