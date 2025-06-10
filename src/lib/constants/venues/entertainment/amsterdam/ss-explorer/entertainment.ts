// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "be25886c-787a-44a4-bc5e-bf3096bd41b8",
    vesselId: "ss--explorer",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "3b00b133-a3fa-4cb1-9f57-8969e89abdd6",
    vesselId: "ss--explorer",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "903d790d-0daf-4488-a169-3c5d17a74a15",
    vesselId: "ss--explorer",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "2313b677-048c-452c-97b1-f79ad2728d99",
    vesselId: "ss--explorer",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9489ff33-5348-4927-99ba-95b97114e31d",
    vesselId: "ss--explorer",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "6e9d1cd3-00cd-4ec7-8347-7c392c0f8f75",
    vesselId: "ss--explorer",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
