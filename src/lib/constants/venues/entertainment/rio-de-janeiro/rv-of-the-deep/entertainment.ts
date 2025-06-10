// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "8389df1c-ef37-496e-ad21-0d85fd1276ad",
    vesselId: "rv--of-the-deep",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "75a5b1f0-aa8b-49a8-87ac-1d1f366f650e",
    vesselId: "rv--of-the-deep",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "1a3b92da-77a0-4619-b560-2c2cab6bf28f",
    vesselId: "rv--of-the-deep",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "7993c8c9-d073-46c9-9be7-7b27adb43047",
    vesselId: "rv--of-the-deep",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "559cdf9d-a017-401c-a5ab-0858033c0c35",
    vesselId: "rv--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
