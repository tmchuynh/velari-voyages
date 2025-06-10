// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "86136826-8e67-46e2-8c27-c7877973735e",
    vesselId: "nb-portsmouth-voyager",
    type: "Comedy",
    location: {
      deck: 13,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "646cc0c7-9114-4c96-ad12-b1072484c15a",
    vesselId: "nb-portsmouth-voyager",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "158319c1-fd05-4dde-b96c-8d6abb866e10",
    vesselId: "nb-portsmouth-voyager",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c190b0d4-e0b9-45e6-8696-106d6e13d532",
    vesselId: "nb-portsmouth-voyager",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "5118e69b-1f34-4b1a-bc61-275173386f3b",
    vesselId: "nb-portsmouth-voyager",
    type: "Movie Theater",
    location: {
      deck: 15,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
