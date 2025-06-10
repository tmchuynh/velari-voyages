// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "82846c49-d950-42ed-b774-792e06091032",
    vesselId: "sy-the--mariner",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "09dbd1fc-2f4b-4c73-b195-753b78fea74a",
    vesselId: "sy-the--mariner",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9f98e1a7-2629-4fa1-a9a6-3b20765fce02",
    vesselId: "sy-the--mariner",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b15889fd-f6cc-401e-a74a-0faff4e46047",
    vesselId: "sy-the--mariner",
    type: "Karaoke",
    location: {
      deck: 11,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
