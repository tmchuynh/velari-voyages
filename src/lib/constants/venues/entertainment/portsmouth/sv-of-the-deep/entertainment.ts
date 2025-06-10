// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "c4997328-39a1-44e2-ab0d-409e8f3c3ed5",
    vesselId: "sv--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 11,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b78917f1-f2d8-48c2-8662-a95878d1bd6f",
    vesselId: "sv--of-the-deep",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "75fac0aa-8ce9-4ea9-973a-2c6cf3be43ce",
    vesselId: "sv--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "fb47b4d8-7751-4205-95fa-93d102dca6db",
    vesselId: "sv--of-the-deep",
    type: "Comedy",
    location: {
      deck: 13,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "5cdb3a9a-dd80-40fa-975c-15f54dd12904",
    vesselId: "sv--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "18b32cb2-f1f7-4f80-8483-21d3cab4290e",
    vesselId: "sv--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "4cfa8923-0265-41ae-921f-1defc27ffb28",
    vesselId: "sv--of-the-deep",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "df2da243-1258-4598-96b5-325062f8c86e",
    vesselId: "sv--of-the-deep",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
