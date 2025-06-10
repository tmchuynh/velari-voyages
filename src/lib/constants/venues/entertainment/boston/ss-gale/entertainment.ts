// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "09ec766c-2014-4672-a108-172b3f3b8d26",
    vesselId: "ss--gale",
    type: "Magic Show",
    location: {
      deck: 9,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "26f54cd2-6de9-45e7-9d20-7c77f694a80b",
    vesselId: "ss--gale",
    type: "Karaoke",
    location: {
      deck: 6,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d2b08fe2-6a6d-40c6-8e62-c61573a78b22",
    vesselId: "ss--gale",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "405c36f1-2cf4-4aba-9066-b16e51dc1044",
    vesselId: "ss--gale",
    type: "Live Music",
    location: {
      deck: 8,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
