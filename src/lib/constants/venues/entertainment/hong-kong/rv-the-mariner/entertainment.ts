// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "f42c9ec1-e991-4dbe-b893-f11253f732dd",
    vesselId: "rv-the--mariner",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "69d1cd47-d288-4919-b41e-066b7e41cb63",
    vesselId: "rv-the--mariner",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "44e13813-43fe-476f-a7cc-0902667d1bb1",
    vesselId: "rv-the--mariner",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "906e7292-9f15-4abd-bb2c-152ff87e0b0f",
    vesselId: "rv-the--mariner",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "ab857976-3b00-49ef-954c-8346cf20f449",
    vesselId: "rv-the--mariner",
    type: "Magic Show",
    location: {
      deck: 14,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8f517370-76a0-450c-ba94-ba99ef6edc72",
    vesselId: "rv-the--mariner",
    type: "Karaoke",
    location: {
      deck: 15,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
