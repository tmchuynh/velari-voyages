// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "4e7e34b2-d2ab-4928-9f6b-ddac0b1a9bc9",
    vesselId: "ps-shanghai-voyager",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "9fe958ec-0964-4446-96cf-cceabf38e05c",
    vesselId: "ps-shanghai-voyager",
    type: "Nightclub",
    location: {
      deck: 12,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "30b27178-9c0e-41ee-8dc3-b984f2d4d476",
    vesselId: "ps-shanghai-voyager",
    type: "Movie Theater",
    location: {
      deck: 5,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "437ce179-a2c0-411c-9253-025d43eb20eb",
    vesselId: "ps-shanghai-voyager",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
