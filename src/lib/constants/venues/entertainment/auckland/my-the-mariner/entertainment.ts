// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "9f06d693-9b1b-46f0-be30-d246be51aee5",
    vesselId: "my-the--mariner",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8414d503-8bc4-4b03-8c4f-1c28bea29a56",
    vesselId: "my-the--mariner",
    type: "Magic Show",
    location: {
      deck: 15,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e487e0f2-3b1c-4608-a891-bc57e52690d4",
    vesselId: "my-the--mariner",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a2150af7-981c-4f61-953b-291d82efa190",
    vesselId: "my-the--mariner",
    type: "Comedy",
    location: {
      deck: 12,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "239e9fd1-bfb0-424a-b150-8fa11b80e2cb",
    vesselId: "my-the--mariner",
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
    id: "ed6dc587-d58a-4343-aa14-20addbfbbd59",
    vesselId: "my-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 15,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
