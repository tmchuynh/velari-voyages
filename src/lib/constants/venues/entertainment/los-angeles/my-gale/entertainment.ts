// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "2de5a1f5-90c6-4775-9e56-dc55fe46a836",
    vesselId: "my--gale",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ec85c48c-0244-4c1e-a19d-6c5b53a28d24",
    vesselId: "my--gale",
    type: "Nightclub",
    location: {
      deck: 12,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "62a4a9ae-875a-4f9b-ba2c-6dff8e2e683b",
    vesselId: "my--gale",
    type: "Game Show",
    location: {
      deck: 15,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e3d320a5-c80e-4eb9-8d79-34798d840822",
    vesselId: "my--gale",
    type: "Karaoke",
    location: {
      deck: 12,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "be57a083-5b64-4184-8ef8-cc366308b0f6",
    vesselId: "my--gale",
    type: "Movie Theater",
    location: {
      deck: 5,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
