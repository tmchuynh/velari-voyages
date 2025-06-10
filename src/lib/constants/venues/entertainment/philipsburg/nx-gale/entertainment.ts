// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "96f44a32-0a38-4515-a3b2-799d4e879544",
    vesselId: "nx--gale",
    type: "Movie Theater",
    location: {
      deck: 7,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f4ba3553-8900-419d-95c8-e82cd2892cc9",
    vesselId: "nx--gale",
    type: "Game Show",
    location: {
      deck: 11,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "18478da4-ac13-4f28-9fe5-85847e9b19fb",
    vesselId: "nx--gale",
    type: "Comedy",
    location: {
      deck: 7,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "65a29d1e-0336-4a8d-96ca-4760d5b4975a",
    vesselId: "nx--gale",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "08e06a41-8602-4f3c-bf69-4202b82f37b8",
    vesselId: "nx--gale",
    type: "Magic Show",
    location: {
      deck: 15,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b3034e5c-c907-4f62-969a-e6740cf68662",
    vesselId: "nx--gale",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
