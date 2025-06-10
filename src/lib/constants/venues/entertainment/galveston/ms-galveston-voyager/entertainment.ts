// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "42ae4555-0363-4aad-96aa-5936513c3b65",
    vesselId: "ms-galveston-voyager",
    type: "Magic Show",
    location: {
      deck: 14,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1a3d3d6f-00c7-4695-baec-64f3c2d75c70",
    vesselId: "ms-galveston-voyager",
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
    id: "0e512350-9d52-4be1-947d-b4a7f5cbc586",
    vesselId: "ms-galveston-voyager",
    type: "Nightclub",
    location: {
      deck: 12,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3ce446bd-ecfb-44d3-bf54-ffd7942bde9d",
    vesselId: "ms-galveston-voyager",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "f4d1ceb8-2260-4754-bc1c-68cbb2267ed2",
    vesselId: "ms-galveston-voyager",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
