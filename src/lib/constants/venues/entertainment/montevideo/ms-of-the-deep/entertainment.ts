// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "5e751c73-e59a-4344-9b14-54f8ff977e6a",
    vesselId: "ms--of-the-deep",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "05b64896-019b-46d6-821c-edc01ab6bf34",
    vesselId: "ms--of-the-deep",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "4d97458b-e8b5-4fe9-95cf-1f3aa46bb444",
    vesselId: "ms--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 15,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "dce04ad1-619c-4d14-b5a5-d8d9296bbd78",
    vesselId: "ms--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "20a6bb8f-e352-4a07-8afe-1f0984cdfaad",
    vesselId: "ms--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8a7c0d96-c92f-48e5-8e5b-9f07ffffec69",
    vesselId: "ms--of-the-deep",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "6a9e7f89-64ab-432e-8f9f-77545498ee04",
    vesselId: "ms--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 15,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
