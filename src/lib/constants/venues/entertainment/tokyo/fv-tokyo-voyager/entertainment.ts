// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "2e37c36f-88ae-4884-9d8a-768523492f69",
    vesselId: "fv-tokyo-voyager",
    type: "Live Music",
    location: {
      deck: 8,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e2cb4427-2bc8-43a7-a9c6-f1b59bd39f75",
    vesselId: "fv-tokyo-voyager",
    type: "Karaoke",
    location: {
      deck: 9,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "997e2c27-06f0-4327-9420-457a31e3dd66",
    vesselId: "fv-tokyo-voyager",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "7c5f01a2-db0f-4028-a95d-e75542def04d",
    vesselId: "fv-tokyo-voyager",
    type: "Comedy",
    location: {
      deck: 12,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "1098d4fd-be35-4804-9d9f-d483699b9982",
    vesselId: "fv-tokyo-voyager",
    type: "Movie Theater",
    location: {
      deck: 11,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
