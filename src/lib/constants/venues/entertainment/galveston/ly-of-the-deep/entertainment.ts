// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "2b6a9d24-0e4d-4c21-92be-9fd0ad2689ab",
    vesselId: "ly--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3098d153-203e-4c44-85f5-9144bc334fc5",
    vesselId: "ly--of-the-deep",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "5041293f-cfb1-4d0a-8e63-5b144758aecd",
    vesselId: "ly--of-the-deep",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7a8f437a-bba8-4d99-bc8c-c7f579204868",
    vesselId: "ly--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 10,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "cc64f635-3361-4530-843c-6d644ca1f522",
    vesselId: "ly--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
