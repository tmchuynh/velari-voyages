// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "7693269c-262a-40de-a769-b8577a3efe1f",
    vesselId: "ms--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 9,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "955a6048-6adc-4152-a88a-1aad5cc4da8a",
    vesselId: "ms--of-the-deep",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "f0d330ea-518c-4d60-811f-613673d97a33",
    vesselId: "ms--of-the-deep",
    type: "Dancing",
    location: {
      deck: 14,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1795d176-02f2-4a71-bed9-660be8f076a9",
    vesselId: "ms--of-the-deep",
    type: "Comedy",
    location: {
      deck: 13,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d22161c4-5db6-4fe1-94c7-9f01c41398c9",
    vesselId: "ms--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 8,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "d7a73159-a0cc-4bc3-8c82-1e5df64b7a16",
    vesselId: "ms--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 9,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c867fb50-9f72-4d9e-bf97-cf3c830d264f",
    vesselId: "ms--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 10,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
