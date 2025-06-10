// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "c641ba5f-1299-4b74-9d9d-7bc065e080d7",
    vesselId: "hms-bermuda-voyager",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "f7da9b30-3216-4757-90ae-c32cc2c2d88c",
    vesselId: "hms-bermuda-voyager",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "62eb6d78-57e9-4b5b-bfa8-12c4a10da84d",
    vesselId: "hms-bermuda-voyager",
    type: "Comedy",
    location: {
      deck: 13,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "acd2c4f4-4a3f-40b2-a58f-4cacf7a7c754",
    vesselId: "hms-bermuda-voyager",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "e6ce6cc3-8f81-4d4a-a331-805ee7bd76b3",
    vesselId: "hms-bermuda-voyager",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
