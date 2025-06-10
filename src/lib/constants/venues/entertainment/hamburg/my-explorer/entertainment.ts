// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "5804e172-075e-4ab1-82af-2f24040ce0e2",
    vesselId: "my--explorer",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "81fb7323-fb98-4bdf-a41b-9222ad72c347",
    vesselId: "my--explorer",
    type: "Nightclub",
    location: {
      deck: 11,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "ab1d52c7-d6ce-4d37-89cd-44f69c91c08e",
    vesselId: "my--explorer",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f3f76ecb-47ba-46ed-9ebf-3a97b3a97d72",
    vesselId: "my--explorer",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "445516aa-55bb-45d6-a33e-a798bec35e4f",
    vesselId: "my--explorer",
    type: "Magic Show",
    location: {
      deck: 9,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "41766541-feb2-4d3d-8318-29541089189a",
    vesselId: "my--explorer",
    type: "Movie Theater",
    location: {
      deck: 13,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "4f713b12-0b0f-4e53-87ef-0507dfce75d7",
    vesselId: "my--explorer",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "c89e883b-915c-4aa2-b10d-b4219b7e9f25",
    vesselId: "my--explorer",
    type: "Karaoke",
    location: {
      deck: 13,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
