// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "4fb943ca-fddd-4676-aa93-39f425f12bb1",
    vesselId: "ss-the--mariner",
    type: "Live Music",
    location: {
      deck: 8,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3199ed84-141c-4cb4-ac23-86fbfefec5e4",
    vesselId: "ss-the--mariner",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "242416dc-7c3b-45a5-bd34-fa42c64c17b0",
    vesselId: "ss-the--mariner",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "424e7a72-ca31-4562-a047-8182334f0075",
    vesselId: "ss-the--mariner",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "fc8ca31b-6325-4fc8-854c-b790aeee0e83",
    vesselId: "ss-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 6,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "6c5236e5-5b84-4033-90c2-e99fc0e895c0",
    vesselId: "ss-the--mariner",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
