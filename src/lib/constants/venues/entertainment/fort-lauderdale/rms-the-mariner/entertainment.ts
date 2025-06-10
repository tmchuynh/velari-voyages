// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "de0a7863-a61a-408d-bc36-ac94263889a3",
    vesselId: "rms-the--mariner",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "abbb0a6d-2c4b-46b9-820d-03f1d3a2b5b5",
    vesselId: "rms-the--mariner",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9a686024-2551-4022-8cf2-d9638c0d25f8",
    vesselId: "rms-the--mariner",
    type: "Live Music",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "b8588b05-da05-4c99-acbd-f1da7b275374",
    vesselId: "rms-the--mariner",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9a02976d-5680-41ab-8ff4-905f378847b3",
    vesselId: "rms-the--mariner",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "a040ca08-024a-4a24-bfdd-cb64708b66a7",
    vesselId: "rms-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 12,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
