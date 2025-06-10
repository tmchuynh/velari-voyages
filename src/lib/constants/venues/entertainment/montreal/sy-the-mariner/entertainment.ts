// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "2e2feb94-80a1-42f6-8e5e-9729de7000e1",
    vesselId: "sy-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 6,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "69429710-d7bf-4232-8918-b23c768c4f33",
    vesselId: "sy-the--mariner",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "f4a1f127-d6f8-4de6-92b1-9cbdb70bd179",
    vesselId: "sy-the--mariner",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "00f539e6-e1ef-4b44-8ae5-0eff0d064c70",
    vesselId: "sy-the--mariner",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
