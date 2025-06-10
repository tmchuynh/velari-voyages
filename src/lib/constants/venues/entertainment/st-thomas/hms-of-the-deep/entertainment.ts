// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "2f6329e4-4ee6-4c92-b4e4-1f03c75acde9",
    vesselId: "hms--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "13412064-6795-45a6-8329-9159cc1b364e",
    vesselId: "hms--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 14,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7137b515-aa4a-4c86-b63f-bd8741fe83c2",
    vesselId: "hms--of-the-deep",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "f66f877d-1d48-414d-958f-f4d145ec716f",
    vesselId: "hms--of-the-deep",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "730bd288-b038-47f4-8682-7915169e1b6e",
    vesselId: "hms--of-the-deep",
    type: "Comedy",
    location: {
      deck: 12,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
