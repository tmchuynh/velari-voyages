// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "626172d5-7660-4818-8ace-083fbaef347e",
    vesselId: "fv--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "0d03eea6-66a7-41f7-b0ab-a6f5f522e574",
    vesselId: "fv--of-the-deep",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "793911e5-9266-42a8-90bc-724e0fff3580",
    vesselId: "fv--of-the-deep",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "8154e0a1-b026-4d7b-8cde-9a0721db5d2b",
    vesselId: "fv--of-the-deep",
    type: "Comedy",
    location: {
      deck: 7,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "e7317fc7-6aca-46b1-b6ea-8774fde8ec3d",
    vesselId: "fv--of-the-deep",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "21bb5b7a-4176-4069-a239-2bb378195faf",
    vesselId: "fv--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
