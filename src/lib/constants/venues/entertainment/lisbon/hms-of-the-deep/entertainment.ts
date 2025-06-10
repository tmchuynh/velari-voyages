// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "4b0cc403-2b4d-42cc-9506-4f161ee78ed7",
    vesselId: "hms--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "870264e9-f5b6-42c5-94e5-d6c2ef27cc52",
    vesselId: "hms--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "0d6cf8ac-412a-43bf-8e4f-dbcd75eaa67d",
    vesselId: "hms--of-the-deep",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "70ea5b7f-a692-4697-b3c2-3f006dc51979",
    vesselId: "hms--of-the-deep",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
