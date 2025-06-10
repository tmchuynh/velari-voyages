// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "c08e7474-0e6f-4434-8256-6e2194789ba1",
    vesselId: "ms-the--mariner",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "300f64b6-e37e-4f2f-94b5-0b7c7e229d6b",
    vesselId: "ms-the--mariner",
    type: "Nightclub",
    location: {
      deck: 5,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "34db2831-d742-46c6-bae6-d028fd7606da",
    vesselId: "ms-the--mariner",
    type: "Dancing",
    location: {
      deck: 14,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c76cdeb9-db90-44c7-8bd7-f31d87ca7676",
    vesselId: "ms-the--mariner",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "6515106e-1ac1-486d-a5da-c5b5d2779e36",
    vesselId: "ms-the--mariner",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "68cd84ff-3387-432e-878c-615d31614c33",
    vesselId: "ms-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 11,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
