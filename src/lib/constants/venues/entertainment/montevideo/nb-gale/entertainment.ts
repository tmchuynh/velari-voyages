// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "5feb64ff-5b2c-43ab-a85a-499b521b0e2a",
    vesselId: "nb--gale",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "1a4b9e7d-18cd-4363-851a-73ed278419e5",
    vesselId: "nb--gale",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d5185467-3f50-41de-b695-ff716754bbed",
    vesselId: "nb--gale",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c8e1ced7-1894-4ec9-9835-37d44558ba86",
    vesselId: "nb--gale",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "387dbb60-b259-47c5-a510-f92b9df343f3",
    vesselId: "nb--gale",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
