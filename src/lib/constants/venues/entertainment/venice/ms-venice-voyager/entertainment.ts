// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "67a682d7-b2bd-4439-a41b-ffa298cfdd78",
    vesselId: "ms-venice-voyager",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0a275874-9855-408d-a485-5b5fdb59fe2b",
    vesselId: "ms-venice-voyager",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "57d9993d-15e7-4b34-aa34-78a52de27682",
    vesselId: "ms-venice-voyager",
    type: "Karaoke",
    location: {
      deck: 13,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "fa297190-617b-471d-b0c7-2c746afef2bd",
    vesselId: "ms-venice-voyager",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "a708d354-2840-46d0-94e0-8b7984f849a0",
    vesselId: "ms-venice-voyager",
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
