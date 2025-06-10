// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "818651e6-1941-4e65-a527-86b22fb77fae",
    vesselId: "hms--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 14,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "6696c47c-e6e6-4bfe-a582-713977e49840",
    vesselId: "hms--of-the-deep",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c8441c2a-8737-43c6-becd-b81a998a13b5",
    vesselId: "hms--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "da597dfe-2095-4b81-8221-5abb371711bc",
    vesselId: "hms--of-the-deep",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "c4923206-d0aa-444e-ac63-396185feede2",
    vesselId: "hms--of-the-deep",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "bdfb18aa-deff-4bba-8a43-6f0abe8d832d",
    vesselId: "hms--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "4ee71058-a967-40d8-a978-0ab5962fb1ad",
    vesselId: "hms--of-the-deep",
    type: "Live Music",
    location: {
      deck: 15,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "4d1f7380-9dab-4daa-862a-20e65a9ad085",
    vesselId: "hms--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 7,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
