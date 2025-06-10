// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "8ac9b081-94fb-436e-803f-e90554125460",
    vesselId: "hms--explorer",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "31fa729a-27af-4d63-8821-52a6f6b5701b",
    vesselId: "hms--explorer",
    type: "Comedy",
    location: {
      deck: 8,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c6478227-ea8a-435f-ac7e-7b383c266841",
    vesselId: "hms--explorer",
    type: "Karaoke",
    location: {
      deck: 6,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9b336dea-5337-4fa5-8432-1f9bae5c4f27",
    vesselId: "hms--explorer",
    type: "Nightclub",
    location: {
      deck: 5,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "efe9f562-e3de-4498-ae73-848840346029",
    vesselId: "hms--explorer",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
