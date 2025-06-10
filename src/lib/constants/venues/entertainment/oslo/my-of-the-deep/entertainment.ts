// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "2d8061fe-c231-4da9-a22b-46c6bedf5f16",
    vesselId: "my--of-the-deep",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "4b8c832b-b448-4657-8cf1-b4a40f1c51d7",
    vesselId: "my--of-the-deep",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "baba3eb4-432f-4aeb-85a7-d22047ea2a52",
    vesselId: "my--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 14,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c772cf67-e748-405e-a91d-b8c78c262e16",
    vesselId: "my--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 11,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "dc147638-298d-46fa-b044-7d8e1b2a261a",
    vesselId: "my--of-the-deep",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "18f122d0-8012-4852-9534-57b008455f48",
    vesselId: "my--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 10,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
