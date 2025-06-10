// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "f3149482-0b04-4984-a86f-da6f9b2d5621",
    vesselId: "rv--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "cbfa6bde-eaca-40db-a554-5547999f063f",
    vesselId: "rv--of-the-deep",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "396003a4-5c06-472c-98db-c67f4616f104",
    vesselId: "rv--of-the-deep",
    type: "Game Show",
    location: {
      deck: 11,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "88d0e9da-a951-4894-aee5-11cf6f2f443c",
    vesselId: "rv--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
