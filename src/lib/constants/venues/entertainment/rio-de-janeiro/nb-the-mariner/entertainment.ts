// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "d0085084-557f-457a-a711-023d7464ea12",
    vesselId: "nb-the--mariner",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "11ee653f-d70b-437b-ad75-56768962e19b",
    vesselId: "nb-the--mariner",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "756591b1-6948-4687-9d77-f475cc707c34",
    vesselId: "nb-the--mariner",
    type: "Karaoke",
    location: {
      deck: 13,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3d2a94a8-cdf5-4c6d-bb36-ebfc1ea5a3da",
    vesselId: "nb-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "39862a26-432f-4323-8559-0626f48c5ccb",
    vesselId: "nb-the--mariner",
    type: "Comedy",
    location: {
      deck: 7,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "29d328f2-92f7-4451-9af5-506288930ed3",
    vesselId: "nb-the--mariner",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
