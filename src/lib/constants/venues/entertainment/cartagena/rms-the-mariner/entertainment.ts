// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "ebd4a1a1-3fc3-4612-8db4-87da2f1bcbee",
    vesselId: "rms-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7d51952a-ff6f-4133-b374-722ec8df4669",
    vesselId: "rms-the--mariner",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "e7c0d57a-c45e-4162-93dd-d76868d6ea0f",
    vesselId: "rms-the--mariner",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "682c3725-98a6-4d61-a11e-f89ffcc734ab",
    vesselId: "rms-the--mariner",
    type: "Game Show",
    location: {
      deck: 15,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "4a5323a0-5254-4fc8-a517-ea07920d2680",
    vesselId: "rms-the--mariner",
    type: "Comedy",
    location: {
      deck: 14,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
