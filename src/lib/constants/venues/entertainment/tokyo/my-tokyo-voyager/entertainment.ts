// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "5952cd13-ae30-4941-989f-dedd25584a21",
    vesselId: "my-tokyo-voyager",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "215f8e80-b128-43af-814e-49df130e4f65",
    vesselId: "my-tokyo-voyager",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "3060bf35-c802-46da-b7dc-da35539c7362",
    vesselId: "my-tokyo-voyager",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "4e8704c3-74d6-421d-9204-3cf558443f93",
    vesselId: "my-tokyo-voyager",
    type: "Dancing",
    location: {
      deck: 14,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
