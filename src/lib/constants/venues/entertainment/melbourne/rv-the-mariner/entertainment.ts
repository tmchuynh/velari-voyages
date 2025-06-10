// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "e4a5b3ce-b0cc-47fb-945e-25eab77b0dd3",
    vesselId: "rv-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "7a81e907-a002-4e62-9414-1ba55edf3589",
    vesselId: "rv-the--mariner",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "fb7796c8-ac13-4781-9cdc-50c870678b08",
    vesselId: "rv-the--mariner",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "0e2ff5fd-1177-48a3-8da9-f30ad660c7a2",
    vesselId: "rv-the--mariner",
    type: "Comedy",
    location: {
      deck: 7,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0dff24b9-ec45-4f71-bd11-a8aa27dc0fc6",
    vesselId: "rv-the--mariner",
    type: "Live Music",
    location: {
      deck: 15,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
