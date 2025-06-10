// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "61c8e8e0-c5e3-4976-b820-7a8e4c2d9ac3",
    vesselId: "hms-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 6,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "3dcfc77e-dc72-41c3-849a-a4146c988836",
    vesselId: "hms-the--mariner",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "2b375436-59c0-4d4d-8440-cb125b714091",
    vesselId: "hms-the--mariner",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e5b24a32-422f-4c50-afc1-3d4c3468b082",
    vesselId: "hms-the--mariner",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
