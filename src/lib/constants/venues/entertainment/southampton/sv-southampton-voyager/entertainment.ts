// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "c151d64a-3be3-429e-8586-4ea03a13046c",
    vesselId: "sv-southampton-voyager",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c4da2cdd-ae3f-4efc-8d45-27161fdf9823",
    vesselId: "sv-southampton-voyager",
    type: "Movie Theater",
    location: {
      deck: 11,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "fe520eb9-8370-4f95-9a85-1d01f38d849f",
    vesselId: "sv-southampton-voyager",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "50ad5287-3571-46d4-8680-5970e545c954",
    vesselId: "sv-southampton-voyager",
    type: "Live Music",
    location: {
      deck: 8,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "fc6c97f6-114d-4e1f-b645-275bdabd7641",
    vesselId: "sv-southampton-voyager",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
