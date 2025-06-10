// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "1113073f-b851-4fbc-b8ff-6fc7ccdd65b4",
    vesselId: "rms--of-the-deep",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ece5fe5d-01e1-4e46-b24c-6adcf7e173cb",
    vesselId: "rms--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 8,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "69def17f-6f0c-4226-96e0-3bd64cdf4344",
    vesselId: "rms--of-the-deep",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "14972c4b-e822-4b7b-a4d4-93c7831379c6",
    vesselId: "rms--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
