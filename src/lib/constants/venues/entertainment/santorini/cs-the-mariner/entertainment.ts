// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "3ea56f35-95d7-4a84-870a-55b914031ced",
    vesselId: "cs-the--mariner",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "20c4084d-771f-401e-a842-594e553b118f",
    vesselId: "cs-the--mariner",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "0c146ea2-7615-4438-943b-78d831a23bbb",
    vesselId: "cs-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 7,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8a8513cc-af74-42e0-8896-290a8d6746dc",
    vesselId: "cs-the--mariner",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "3d7c8b8f-9da3-4d2d-8305-2cfbc2788350",
    vesselId: "cs-the--mariner",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "3077e5cd-8a98-4588-99cf-c31bbb639b6c",
    vesselId: "cs-the--mariner",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
