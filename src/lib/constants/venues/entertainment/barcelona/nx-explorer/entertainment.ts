// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "fc7fb53b-a404-4a56-9736-abeebf8f8512",
    vesselId: "nx--explorer",
    type: "Comedy",
    location: {
      deck: 7,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "4c5f232e-df3c-45cf-962b-94f8eddcb449",
    vesselId: "nx--explorer",
    type: "Live Music",
    location: {
      deck: 9,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "052d0c70-e6b9-41ec-9e9b-56f75579827b",
    vesselId: "nx--explorer",
    type: "Game Show",
    location: {
      deck: 15,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "d899a21e-1d81-421a-be17-5700ad4dc67b",
    vesselId: "nx--explorer",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
