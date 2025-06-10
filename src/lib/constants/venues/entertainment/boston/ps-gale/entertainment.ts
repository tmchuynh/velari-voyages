// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "8be1e600-8fb6-4b80-821d-c6fc84aa3150",
    vesselId: "ps--gale",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "303211ec-6f57-4ca9-ac5e-d3036aed1b4d",
    vesselId: "ps--gale",
    type: "Nightclub",
    location: {
      deck: 8,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7c4b95dd-be24-4b8e-b08d-dff60d5fea8e",
    vesselId: "ps--gale",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "50cbed5e-64c5-43dd-a75a-483059b2a6f8",
    vesselId: "ps--gale",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "77c67127-d4bb-4b3d-9f0c-998ce80b2103",
    vesselId: "ps--gale",
    type: "Magic Show",
    location: {
      deck: 13,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
