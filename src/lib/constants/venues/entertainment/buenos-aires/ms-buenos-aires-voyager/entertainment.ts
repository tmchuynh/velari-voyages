// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "308a9d69-75a2-4ca4-929b-89577c64b677",
    vesselId: "ms-buenos-aires-voyager",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "1cc40ab9-e84b-4492-a998-454de9aa96b0",
    vesselId: "ms-buenos-aires-voyager",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b79a5f99-499b-4c1a-b180-14c3ab068eb2",
    vesselId: "ms-buenos-aires-voyager",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "f9bec889-e1bd-4389-82ff-95de40fcf60c",
    vesselId: "ms-buenos-aires-voyager",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ab72b524-88c1-4177-8234-289b93877062",
    vesselId: "ms-buenos-aires-voyager",
    type: "Movie Theater",
    location: {
      deck: 7,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "7aef8f7a-50ed-4ec7-9f31-62d443c08215",
    vesselId: "ms-buenos-aires-voyager",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
