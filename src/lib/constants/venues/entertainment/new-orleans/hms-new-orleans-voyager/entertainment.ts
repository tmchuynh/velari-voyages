// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "48f2e5d5-de48-4ce0-9c83-7e3e028cde62",
    vesselId: "hms-new-orleans-voyager",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3740e020-4aac-4297-bea8-e90aa2d974aa",
    vesselId: "hms-new-orleans-voyager",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "20c84244-b4e0-41c0-9081-1ab670745ab1",
    vesselId: "hms-new-orleans-voyager",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "350ed8e7-4264-41c7-8606-4a0ed60ff62e",
    vesselId: "hms-new-orleans-voyager",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "3e0b396c-2dd9-4113-9b8a-199cc2b8a740",
    vesselId: "hms-new-orleans-voyager",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
