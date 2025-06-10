// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "ed93c3ed-3bca-4a85-a2eb-45113e0a495a",
    vesselId: "my-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "51b9a7a0-71be-4210-9c91-be9abc7e32a6",
    vesselId: "my-the--mariner",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "44142f23-67cd-438f-8e88-dd38def3b548",
    vesselId: "my-the--mariner",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7cd83e81-f462-4469-9c53-f573b09f6f3a",
    vesselId: "my-the--mariner",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "d375c51a-7902-4258-b65a-029574d5a84f",
    vesselId: "my-the--mariner",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "cbe04081-7bd9-4b8d-98ca-6c219cb00a83",
    vesselId: "my-the--mariner",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
