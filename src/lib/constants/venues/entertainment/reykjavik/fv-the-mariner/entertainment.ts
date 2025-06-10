// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "fd3bdc6e-4d21-4ca7-8d44-ac393f71653d",
    vesselId: "fv-the--mariner",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e5612a7d-b9fd-49d1-8785-fa1e9b4e5880",
    vesselId: "fv-the--mariner",
    type: "Magic Show",
    location: {
      deck: 6,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "4010a8d3-0410-4a81-ac57-c2d7dd9bef8a",
    vesselId: "fv-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 11,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "80b674cc-22d3-420a-a886-8e00ec728794",
    vesselId: "fv-the--mariner",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "cf9cf0c6-7766-4ccc-9dad-7776c4451e72",
    vesselId: "fv-the--mariner",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1c6f7374-83f2-48d5-aac8-0975ae74d174",
    vesselId: "fv-the--mariner",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
