// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "5a371482-8271-4629-843f-e8ae52c90f6e",
    vesselId: "rms--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 14,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "db3e5293-93ac-4b2c-a513-6da34d8bbf2b",
    vesselId: "rms--of-the-deep",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "bc266318-6414-4484-b9bb-c42685ffa71f",
    vesselId: "rms--of-the-deep",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3c80861b-e5e1-4464-9e44-9d25afad5d4a",
    vesselId: "rms--of-the-deep",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "9f63998d-9eaa-4431-bd2b-b5c0000ba46a",
    vesselId: "rms--of-the-deep",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
