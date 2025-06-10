// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "ce67bf36-8eef-4ac0-8c2a-c05bc99d035f",
    vesselId: "ly-san-juan-voyager",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a19aa12f-433c-47dc-be3a-1bcba570feb2",
    vesselId: "ly-san-juan-voyager",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "7bf0902e-2bea-4b53-a53c-7446f2a7383f",
    vesselId: "ly-san-juan-voyager",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a3ad6455-5c86-425d-8e41-a8c276959b26",
    vesselId: "ly-san-juan-voyager",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "ed7e2c1b-1296-4515-bf1f-734fc24bff9a",
    vesselId: "ly-san-juan-voyager",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "3be82b1a-edc4-4e2f-b630-856ca64f61af",
    vesselId: "ly-san-juan-voyager",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
