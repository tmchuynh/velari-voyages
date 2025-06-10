// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "7dcda09c-738e-4a33-b818-a8431ba0ca58",
    vesselId: "cs-the--mariner",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "94d03140-8c43-422c-80be-8f74c8093fde",
    vesselId: "cs-the--mariner",
    type: "Karaoke",
    location: {
      deck: 13,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "79ef547e-c65a-4aa6-88af-a2dedb928850",
    vesselId: "cs-the--mariner",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "1d838d5d-7e9e-4793-bcfa-ccf8a4a693e9",
    vesselId: "cs-the--mariner",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "3d9176ba-d96b-419b-b606-2173d0c209eb",
    vesselId: "cs-the--mariner",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "72f0b4ca-710d-4746-8a84-f42ba64a87bf",
    vesselId: "cs-the--mariner",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
