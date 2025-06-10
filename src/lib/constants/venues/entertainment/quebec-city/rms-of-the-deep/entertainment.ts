// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "8c86c477-5564-4d13-98f7-677128590556",
    vesselId: "rms--of-the-deep",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d43864bf-45f8-4467-9566-0e02e3a188ca",
    vesselId: "rms--of-the-deep",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "702bf9f6-7ba4-4b0b-a65b-00045b1a9aa6",
    vesselId: "rms--of-the-deep",
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
    id: "b3d03f59-1b6e-47de-afa3-ec2cc373a2f1",
    vesselId: "rms--of-the-deep",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
