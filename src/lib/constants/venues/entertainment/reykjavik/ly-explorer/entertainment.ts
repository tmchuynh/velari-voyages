// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "80f5e8a3-db38-46a7-b531-99dfa80f62e6",
    vesselId: "ly--explorer",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ccdaf082-89b9-4b1b-bc36-784822a6b979",
    vesselId: "ly--explorer",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "50f7f8ed-a420-4375-9480-f2f4bc26d4bd",
    vesselId: "ly--explorer",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a84fd8da-fe18-4b57-b47d-69d498338aa8",
    vesselId: "ly--explorer",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "1d0bb1c6-24e8-47dc-89b0-eea0ccd6cc37",
    vesselId: "ly--explorer",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "ea764f9a-98af-48fe-9692-9683cd37489f",
    vesselId: "ly--explorer",
    type: "Movie Theater",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
