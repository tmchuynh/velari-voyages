// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "e5b21a32-0666-4b8e-97d4-3b5e8837e297",
    vesselId: "rv-the--mariner",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "ac3c0b3f-c404-4e71-bd27-31c8d98a0889",
    vesselId: "rv-the--mariner",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "7db404aa-eaa1-43b7-9c5d-cb4862797d12",
    vesselId: "rv-the--mariner",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0801e65b-732a-4c4b-bd38-3d4a2b47bc23",
    vesselId: "rv-the--mariner",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "fc8c82bf-e85f-478d-aae7-f7d183c19f22",
    vesselId: "rv-the--mariner",
    type: "Magic Show",
    location: {
      deck: 15,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "1037f9a9-55e7-4667-acd1-faff927b2006",
    vesselId: "rv-the--mariner",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
