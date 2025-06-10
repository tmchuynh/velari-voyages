// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "43898f5c-ad72-40d1-8ed4-325fc9ded022",
    vesselId: "my--explorer",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "4025e180-c963-4e05-9a19-49c2eda30703",
    vesselId: "my--explorer",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "bb83bb4c-77b6-49dc-86e8-86984d725814",
    vesselId: "my--explorer",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2fd6ba80-3998-43cd-bb48-311d8cd0a8de",
    vesselId: "my--explorer",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "c99393e4-f2d3-4713-910d-06d535365048",
    vesselId: "my--explorer",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
