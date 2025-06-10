// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "d454f1df-1cbc-48df-b7e8-4a3dca405c86",
    vesselId: "ts--gale",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "e9c65db0-94cf-4f78-a37c-b8a05f59de98",
    vesselId: "ts--gale",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "ebef5eeb-7175-4fc0-a30e-0423a9332520",
    vesselId: "ts--gale",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "c6115218-8db8-448f-9eb5-c8c8de86a1f9",
    vesselId: "ts--gale",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "6ce4defe-f29a-4922-b55a-b32b68d313e0",
    vesselId: "ts--gale",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "fc56bbbb-8ec9-4a83-950d-0b70993fd5d1",
    vesselId: "ts--gale",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "6f572bf2-b8e8-4b85-a18f-3e6bd1806a05",
    vesselId: "ts--gale",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
