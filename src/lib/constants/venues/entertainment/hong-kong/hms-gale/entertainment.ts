// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "dece4f86-7039-49e0-9a9c-949720cb0d78",
    vesselId: "hms--gale",
    type: "Game Show",
    location: {
      deck: 11,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c409fe16-f066-48c2-8c55-662e05da9124",
    vesselId: "hms--gale",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ebf2434a-d7a6-40c8-8388-2cda524622fa",
    vesselId: "hms--gale",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "77165e4a-ec14-4291-8665-a33ed0c2c791",
    vesselId: "hms--gale",
    type: "Karaoke",
    location: {
      deck: 9,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
