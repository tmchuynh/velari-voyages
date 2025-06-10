// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "4979d1be-675d-4f05-ab6c-dfddd2dfbf24",
    vesselId: "nb--gale",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "66376e38-64d6-4558-b3f1-5b43f0f20dcb",
    vesselId: "nb--gale",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "5f980cbe-7028-4089-b619-54d066eb50b8",
    vesselId: "nb--gale",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "f14e84fe-dc10-498a-b513-cfd1600ca1d9",
    vesselId: "nb--gale",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "261faa21-51e9-4526-9ee0-3b56f6645d0f",
    vesselId: "nb--gale",
    type: "Karaoke",
    location: {
      deck: 12,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7c67077e-eb4d-4e7d-a638-9ebd131c69b8",
    vesselId: "nb--gale",
    type: "Movie Theater",
    location: {
      deck: 15,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
