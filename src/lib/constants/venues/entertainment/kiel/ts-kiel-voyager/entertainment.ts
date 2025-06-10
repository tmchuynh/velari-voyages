// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "c9a16e80-4d53-4bb1-847f-a40289467780",
    vesselId: "ts-kiel-voyager",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "5fb281fb-dcd7-46fe-9c37-87c36bff3bc0",
    vesselId: "ts-kiel-voyager",
    type: "Live Music",
    location: {
      deck: 8,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "81ef90f7-f715-4a2d-8f43-92dfa0b0651c",
    vesselId: "ts-kiel-voyager",
    type: "Magic Show",
    location: {
      deck: 6,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "9c6fd47d-eeb9-401f-93a9-ff8479e5cdca",
    vesselId: "ts-kiel-voyager",
    type: "Movie Theater",
    location: {
      deck: 15,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "4d5051ee-2ea7-4a39-821c-65c280f11fef",
    vesselId: "ts-kiel-voyager",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
