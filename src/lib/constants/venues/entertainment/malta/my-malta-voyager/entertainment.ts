// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "d6dc7868-ce03-4779-b1da-659810439411",
    vesselId: "my-malta-voyager",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "41f37481-40f2-4ad4-aed8-e791101e0d79",
    vesselId: "my-malta-voyager",
    type: "Magic Show",
    location: {
      deck: 11,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c6f2e753-437e-4993-bf96-f682c8e71b3c",
    vesselId: "my-malta-voyager",
    type: "Movie Theater",
    location: {
      deck: 14,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "f660d970-79cd-413b-bfbb-94f857ce9c74",
    vesselId: "my-malta-voyager",
    type: "Comedy",
    location: {
      deck: 12,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "2d29dcac-2047-4951-a309-978570eb5076",
    vesselId: "my-malta-voyager",
    type: "Dancing",
    location: {
      deck: 14,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "57e16d46-4034-44b5-9ec8-bc659f90d44d",
    vesselId: "my-malta-voyager",
    type: "Nightclub",
    location: {
      deck: 11,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
