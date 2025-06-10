// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "754481b5-f898-4263-afee-e97ffae606d1",
    vesselId: "rms-the--mariner",
    type: "Magic Show",
    location: {
      deck: 6,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1650c6f0-418a-49b6-915f-8590308b8640",
    vesselId: "rms-the--mariner",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "502ea7d2-c54f-4d2c-aaa2-946861fe133c",
    vesselId: "rms-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 10,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "0efebd32-e134-4447-9b5a-605090f32fc8",
    vesselId: "rms-the--mariner",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "fb11fef6-8fb1-48af-9572-867ce6fd61ff",
    vesselId: "rms-the--mariner",
    type: "Comedy",
    location: {
      deck: 13,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
