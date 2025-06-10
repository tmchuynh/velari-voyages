// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "8a9dabdf-bbe3-4977-8844-615758c34b80",
    vesselId: "rv--gale",
    type: "Nightclub",
    location: {
      deck: 11,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "993d3ff9-9b13-4e1e-83f4-21aa5766225c",
    vesselId: "rv--gale",
    type: "Game Show",
    location: {
      deck: 11,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7d83f18d-9c10-4daa-b85d-12ddae066a75",
    vesselId: "rv--gale",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "049176b4-a8ff-40e4-870a-12550b3fac15",
    vesselId: "rv--gale",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "89658019-c5ac-4ba7-b590-5c20a1fc6bb4",
    vesselId: "rv--gale",
    type: "Comedy",
    location: {
      deck: 13,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "991e9bfe-3cd5-4266-bb4a-2687437347c3",
    vesselId: "rv--gale",
    type: "Magic Show",
    location: {
      deck: 15,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "92bd51ab-69cb-4e4d-83c4-1b79428148ce",
    vesselId: "rv--gale",
    type: "Movie Theater",
    location: {
      deck: 14,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8cea085f-d870-45f4-83e6-c0499739fafb",
    vesselId: "rv--gale",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
