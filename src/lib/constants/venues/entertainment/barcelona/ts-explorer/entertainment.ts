// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "7df6066a-e026-431d-b6da-e234c2958b55",
    vesselId: "ts--explorer",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "fb56c1ff-5bcf-461b-9262-bc498a04e608",
    vesselId: "ts--explorer",
    type: "Dancing",
    location: {
      deck: 14,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "29a26f35-70ba-40aa-a620-b7610a5bc4fd",
    vesselId: "ts--explorer",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c2d99f8a-d586-4943-99ae-920aaf19b32a",
    vesselId: "ts--explorer",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "994d8749-52ef-4b38-ac58-7ec9041091eb",
    vesselId: "ts--explorer",
    type: "Movie Theater",
    location: {
      deck: 12,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "eb469b30-c7bd-4f42-b972-2c04d3089961",
    vesselId: "ts--explorer",
    type: "Magic Show",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
