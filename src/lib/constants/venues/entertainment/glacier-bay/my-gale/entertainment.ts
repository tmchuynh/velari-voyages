// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "5d9b955d-6b92-4ca0-959a-ff07e9f13708",
    vesselId: "my--gale",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "c351879b-5f38-4f48-8543-a43f1196c9b0",
    vesselId: "my--gale",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "5fafb0cf-1f01-4566-876c-53a9458a90dd",
    vesselId: "my--gale",
    type: "Game Show",
    location: {
      deck: 11,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0a4274a7-9471-4c6c-b0bc-b2245b074d55",
    vesselId: "my--gale",
    type: "Dancing",
    location: {
      deck: 14,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "51df6f58-0daf-4dd7-869e-8b57a143cc68",
    vesselId: "my--gale",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2c1fee2c-3a91-41c0-b780-623988995bbc",
    vesselId: "my--gale",
    type: "Comedy",
    location: {
      deck: 8,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
