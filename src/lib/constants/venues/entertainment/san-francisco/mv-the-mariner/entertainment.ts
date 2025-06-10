// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "b53bf507-3381-4591-9060-6c2607891651",
    vesselId: "mv-the--mariner",
    type: "Live Music",
    location: {
      deck: 8,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6cd65c9a-3544-44ca-8898-5721a9863d9c",
    vesselId: "mv-the--mariner",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "144d375e-1660-4e5f-ab96-58c73a6a2691",
    vesselId: "mv-the--mariner",
    type: "Comedy",
    location: {
      deck: 13,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "4101c9a5-7b48-4ff3-828f-b6e0a13930c2",
    vesselId: "mv-the--mariner",
    type: "Game Show",
    location: {
      deck: 11,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
