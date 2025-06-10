// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "a49936b1-a0ea-476f-a6fe-6de678e91f1f",
    vesselId: "ss--explorer",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "412047b4-431a-450c-bb26-2b5634f202ad",
    vesselId: "ss--explorer",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "396afbc1-498b-4afb-9346-1a03fab81790",
    vesselId: "ss--explorer",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "5377b787-31cd-406b-a303-92829de903d5",
    vesselId: "ss--explorer",
    type: "Comedy",
    location: {
      deck: 14,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "926ec6c5-3341-48dc-91df-f7c21c57e84d",
    vesselId: "ss--explorer",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
