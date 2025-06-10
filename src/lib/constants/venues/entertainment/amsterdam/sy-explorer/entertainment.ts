// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "2676683d-0634-4823-94f7-dffd6eed097b",
    vesselId: "sy--explorer",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f2b556ad-7ab4-42ed-bb0f-561371b25ca2",
    vesselId: "sy--explorer",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d6ab47f8-b7bb-4035-8553-af27dc428604",
    vesselId: "sy--explorer",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "63052b17-d820-43c2-a7f1-a0119d9833fe",
    vesselId: "sy--explorer",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "2498d021-e8dd-449d-a726-6bdd3fb2c5e2",
    vesselId: "sy--explorer",
    type: "Movie Theater",
    location: {
      deck: 7,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
