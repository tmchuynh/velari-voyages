// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "3ef3c4b6-7086-4d4a-ab12-947479fa919e",
    vesselId: "mv-the--mariner",
    type: "Comedy",
    location: {
      deck: 8,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "a217093a-a589-481f-a6af-116e49813f74",
    vesselId: "mv-the--mariner",
    type: "Game Show",
    location: {
      deck: 15,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "5574ee5b-6ff4-40cf-a39a-a9e5b0df54c8",
    vesselId: "mv-the--mariner",
    type: "Karaoke",
    location: {
      deck: 6,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b31d7138-cb7e-480f-ba52-7a83514888c7",
    vesselId: "mv-the--mariner",
    type: "Magic Show",
    location: {
      deck: 13,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "495c3f12-a8d9-4d9d-934b-21fdaba8f469",
    vesselId: "mv-the--mariner",
    type: "Dancing",
    location: {
      deck: 14,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
