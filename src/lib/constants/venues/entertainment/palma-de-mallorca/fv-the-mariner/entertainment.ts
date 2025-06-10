// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "0c770953-5299-46e3-b63b-1dc0e52ab17b",
    vesselId: "fv-the--mariner",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "da2d6a73-68ce-4a4c-a447-cd2e347277a5",
    vesselId: "fv-the--mariner",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "c3d695ac-01ba-49ea-b99a-424707a0d443",
    vesselId: "fv-the--mariner",
    type: "Magic Show",
    location: {
      deck: 9,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "f8730e66-9818-4a9d-9859-0f9fe6efff4e",
    vesselId: "fv-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 13,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "b6041e2c-d44c-460a-956c-44a837030c8d",
    vesselId: "fv-the--mariner",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
