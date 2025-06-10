// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "f580c178-95c2-4fab-a80c-1717bebb12f9",
    vesselId: "hms-the--mariner",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8cf2ea48-3fa1-4665-9a19-ee072ab7d159",
    vesselId: "hms-the--mariner",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "5880079c-d0c0-46d8-a96d-ee982dd1e4e3",
    vesselId: "hms-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 10,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "771d9dca-570e-4c11-ba46-e5914f0d2d92",
    vesselId: "hms-the--mariner",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "dc936b98-e7a0-4860-9ed1-ea05f987099f",
    vesselId: "hms-the--mariner",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "4d0a53f8-4649-4c5f-bd50-3f1082351a20",
    vesselId: "hms-the--mariner",
    type: "Live Music",
    location: {
      deck: 15,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
