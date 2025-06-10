// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "263d41e1-b883-4ce0-b8f0-11010351a24a",
    vesselId: "sy--explorer",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "bcbc85d6-a557-4a3d-ac5c-ea07086b1ba4",
    vesselId: "sy--explorer",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "8ed351a5-cf4e-49b3-a5bf-92d532416ab2",
    vesselId: "sy--explorer",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "8ac6867f-ce74-415b-aaf7-abe54ac10fdd",
    vesselId: "sy--explorer",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8a88cc39-63fe-4b4f-9a9d-99d642f2c695",
    vesselId: "sy--explorer",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
