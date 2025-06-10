// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "a95dc1fd-b81d-4077-8ae9-41b1e91e13e6",
    vesselId: "ps-st-thomas-voyager",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a0ef641a-190c-44f4-a23e-d21c079346c0",
    vesselId: "ps-st-thomas-voyager",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "0dde19e1-77ac-4442-adfc-59454a0243e4",
    vesselId: "ps-st-thomas-voyager",
    type: "Magic Show",
    location: {
      deck: 15,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "502acd02-45ed-40f8-b057-6b179f627831",
    vesselId: "ps-st-thomas-voyager",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "a19dd5eb-6c92-4e0a-978c-063910373a52",
    vesselId: "ps-st-thomas-voyager",
    type: "Live Music",
    location: {
      deck: 15,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ca6e052d-654c-46ea-b378-1a507a8c452c",
    vesselId: "ps-st-thomas-voyager",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "438ae987-2163-4e76-a807-90474e0513c6",
    vesselId: "ps-st-thomas-voyager",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e533e441-29ab-4e09-88f5-591b3dd574f8",
    vesselId: "ps-st-thomas-voyager",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
