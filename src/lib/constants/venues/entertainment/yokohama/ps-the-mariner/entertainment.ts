// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "2998b1c9-0e96-4d66-b096-db3dd20b48d2",
    vesselId: "ps-the--mariner",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "f32006b7-8e2a-4dee-aae1-1fa4770dc16a",
    vesselId: "ps-the--mariner",
    type: "Karaoke",
    location: {
      deck: 11,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "95e2c762-edaf-4f94-ab9a-57867cb20c36",
    vesselId: "ps-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 11,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "d5d1de8a-ef65-4f2e-aca0-25e66ea61ded",
    vesselId: "ps-the--mariner",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ba8c0b6c-c958-493d-aa63-0cc324559d1b",
    vesselId: "ps-the--mariner",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0a364162-694a-4f19-975e-05baf69fb491",
    vesselId: "ps-the--mariner",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "d2880b5f-a323-4b7a-8a32-dfc5a13f80ac",
    vesselId: "ps-the--mariner",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "120e1e7f-c8d8-4f4f-a09f-b700d0fffdf9",
    vesselId: "ps-the--mariner",
    type: "Magic Show",
    location: {
      deck: 13,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
