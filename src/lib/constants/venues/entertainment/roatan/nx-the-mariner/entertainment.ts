// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "3efd3db1-b32e-4871-8c34-deced2019904",
    vesselId: "nx-the--mariner",
    type: "Live Music",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1cd16a38-47cf-42b9-a327-1eb92dd754bd",
    vesselId: "nx-the--mariner",
    type: "Magic Show",
    location: {
      deck: 14,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0ef127b3-0645-490c-bfe6-01d14b7657b8",
    vesselId: "nx-the--mariner",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "e2e8b6db-0326-4076-a43a-930a59f32f7a",
    vesselId: "nx-the--mariner",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "49bde24a-2d7d-427f-8419-b9fa3bf0c3ef",
    vesselId: "nx-the--mariner",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
