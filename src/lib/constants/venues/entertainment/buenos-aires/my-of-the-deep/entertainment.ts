// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "60d2f090-9ad4-41f5-83de-bc8ee3ace7b6",
    vesselId: "my--of-the-deep",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "d201b3c3-ae41-45ef-991d-2fff65807394",
    vesselId: "my--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3a8f4cff-8e0d-4564-87d1-0570cf0f429c",
    vesselId: "my--of-the-deep",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "f3470e82-288f-45e5-8443-c5abe56132a9",
    vesselId: "my--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 15,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
