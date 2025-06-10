// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "765cb177-6b70-4aff-ae94-c2f1b9b454e8",
    vesselId: "rv-auckland-voyager",
    type: "Comedy",
    location: {
      deck: 12,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c0deedbe-0b49-43ee-ae90-a094d9087749",
    vesselId: "rv-auckland-voyager",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "990c23bf-ec38-43b4-9ad8-6cdf5c5fc2c1",
    vesselId: "rv-auckland-voyager",
    type: "Magic Show",
    location: {
      deck: 11,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "93083554-f833-4921-bf7f-9bba119b6556",
    vesselId: "rv-auckland-voyager",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ed4227e5-4475-4f18-a30d-449847882c20",
    vesselId: "rv-auckland-voyager",
    type: "Live Music",
    location: {
      deck: 8,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "e67003b3-ad62-43ed-973c-d6d1a7e674e4",
    vesselId: "rv-auckland-voyager",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a8165dde-4ac7-41dc-99de-b4f1875cb218",
    vesselId: "rv-auckland-voyager",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "54f806ec-dc67-40e0-97c1-be3274621545",
    vesselId: "rv-auckland-voyager",
    type: "Movie Theater",
    location: {
      deck: 7,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
