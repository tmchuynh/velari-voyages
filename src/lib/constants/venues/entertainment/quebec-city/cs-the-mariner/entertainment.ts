// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "cca5caff-59e9-45e8-960f-0047cfc1fe49",
    vesselId: "cs-the--mariner",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "4290c18d-ce2d-437b-88ac-46faec71a249",
    vesselId: "cs-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 5,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "b1ac5129-7afe-41b9-b062-c4111ff7b7e3",
    vesselId: "cs-the--mariner",
    type: "Live Music",
    location: {
      deck: 8,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6f44b5f9-8a70-4f0f-8496-e72e0b7b441c",
    vesselId: "cs-the--mariner",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
