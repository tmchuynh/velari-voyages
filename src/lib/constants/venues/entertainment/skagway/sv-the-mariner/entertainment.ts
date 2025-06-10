// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "79be5503-2aea-410c-8c83-f8b3c460dd09",
    vesselId: "sv-the--mariner",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "bf1f6fa4-1b0f-4557-9133-36ad8d444a0d",
    vesselId: "sv-the--mariner",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ef622d52-d406-457e-aa5a-4f32f36ef3a8",
    vesselId: "sv-the--mariner",
    type: "Magic Show",
    location: {
      deck: 14,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "f7bf34f6-5529-423d-930b-5a842d05b2e8",
    vesselId: "sv-the--mariner",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "89fd88b0-a473-4621-8310-984bc6697f96",
    vesselId: "sv-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
