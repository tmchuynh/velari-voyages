// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "fd87022f-8174-4abe-b4b4-58a8d4c147db",
    vesselId: "ms-the--mariner",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7fb491fb-768a-4723-9903-04c1dfcc006e",
    vesselId: "ms-the--mariner",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c82f9b91-60bd-4c66-972a-cc0fbb9143a4",
    vesselId: "ms-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 14,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1a56b46d-7c9f-4167-b2f9-b9f01d43b60d",
    vesselId: "ms-the--mariner",
    type: "Magic Show",
    location: {
      deck: 15,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d2c7bc2c-2c69-42b3-b6c7-3892ebcacff3",
    vesselId: "ms-the--mariner",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "5a298208-990b-4862-8457-6a260d670126",
    vesselId: "ms-the--mariner",
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
    id: "da925ee8-ff1b-4da5-ae99-f302325004ff",
    vesselId: "ms-the--mariner",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "2c07bc64-83d1-41ad-b956-ac8f3f89a4b9",
    vesselId: "ms-the--mariner",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
