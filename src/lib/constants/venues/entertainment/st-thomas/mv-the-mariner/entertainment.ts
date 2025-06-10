// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "5c11a29b-1f84-4fbe-a950-9853d7830372",
    vesselId: "mv-the--mariner",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "c90c28fa-ccbe-4058-91f2-454975cc0bb1",
    vesselId: "mv-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 11,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "d59fdc19-97ea-454c-b519-314fd26fe6b8",
    vesselId: "mv-the--mariner",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8ae899fc-65bb-430f-bcef-cfe15fb0181f",
    vesselId: "mv-the--mariner",
    type: "Live Music",
    location: {
      deck: 9,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "4f440808-3331-49b8-84e7-a7163670a66b",
    vesselId: "mv-the--mariner",
    type: "Nightclub",
    location: {
      deck: 11,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
