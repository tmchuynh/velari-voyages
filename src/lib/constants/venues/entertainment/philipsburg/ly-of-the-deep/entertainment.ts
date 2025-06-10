// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "0a621d8b-967a-4ae1-8a1e-b12c68c22b67",
    vesselId: "ly--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 15,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "beab6cc7-18be-437f-ad74-130c77246082",
    vesselId: "ly--of-the-deep",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "66ccc1d0-eef1-4da8-a084-e08c0f10af75",
    vesselId: "ly--of-the-deep",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "88cab3d9-83bf-43f7-bb44-1b7fee194bd4",
    vesselId: "ly--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "04df4ccc-96db-4d7c-aae4-31eb1a872425",
    vesselId: "ly--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 15,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
