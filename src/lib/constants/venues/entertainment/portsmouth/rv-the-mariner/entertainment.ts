// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "a7df9611-7d9e-4bb9-b5be-008e74a41444",
    vesselId: "rv-the--mariner",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "13cd3cd0-ef4a-46c1-8375-971368f6b1f3",
    vesselId: "rv-the--mariner",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "db8e445c-a6b7-4575-89ca-c27951c145f2",
    vesselId: "rv-the--mariner",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d4e45829-ef7d-4374-b1c1-b2aed37ab54f",
    vesselId: "rv-the--mariner",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "78fe9056-ddde-49b3-ba7d-e97b8330e191",
    vesselId: "rv-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 6,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "cb50dde9-8cbb-45b0-8b4c-b9a3938422ce",
    vesselId: "rv-the--mariner",
    type: "Comedy",
    location: {
      deck: 12,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "f9dd2d05-ef43-4455-8b40-9de2177ba566",
    vesselId: "rv-the--mariner",
    type: "Karaoke",
    location: {
      deck: 6,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
