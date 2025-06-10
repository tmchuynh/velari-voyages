// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "6541c883-46e8-4b47-95ed-6291b3c968ac",
    vesselId: "hms-the--mariner",
    type: "Magic Show",
    location: {
      deck: 11,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "69229f14-9161-4f34-8148-1e3e8e217d74",
    vesselId: "hms-the--mariner",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d62e71ec-e632-43f7-a142-303df6a33b2a",
    vesselId: "hms-the--mariner",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "611cde0b-9de2-4486-a718-604cd24487ee",
    vesselId: "hms-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 12,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8c565698-28d6-489a-8366-8d380134c936",
    vesselId: "hms-the--mariner",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "949166a8-a122-4083-b586-da734ba95ae4",
    vesselId: "hms-the--mariner",
    type: "Nightclub",
    location: {
      deck: 12,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
