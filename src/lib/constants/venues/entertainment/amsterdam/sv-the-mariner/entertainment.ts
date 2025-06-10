// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "be5b0897-e789-4b98-9b2b-998732e614bc",
    vesselId: "sv-the--mariner",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "bdac0246-0793-4f06-a738-5cab84d25640",
    vesselId: "sv-the--mariner",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "89ac5788-cb99-429d-b38a-a59a9f24b008",
    vesselId: "sv-the--mariner",
    type: "Karaoke",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2aa9e6ee-8563-4b96-97bd-83173b823e34",
    vesselId: "sv-the--mariner",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c3e64525-d5b9-4858-98f5-125c8810c103",
    vesselId: "sv-the--mariner",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "bfffc6fd-fc60-430a-a763-fb9ab4227bcb",
    vesselId: "sv-the--mariner",
    type: "Game Show",
    location: {
      deck: 15,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
