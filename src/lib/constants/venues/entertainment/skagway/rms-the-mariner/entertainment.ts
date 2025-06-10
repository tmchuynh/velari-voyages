// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "556d0c71-ab28-4558-89df-0dfd0a406337",
    vesselId: "rms-the--mariner",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "4bd1cb8e-af03-4662-a726-b257a2b249d1",
    vesselId: "rms-the--mariner",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "6e3d167c-fbbc-44f1-b134-da05104739c8",
    vesselId: "rms-the--mariner",
    type: "Magic Show",
    location: {
      deck: 13,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ac07e154-52a5-47f9-822c-edc0127cf3c6",
    vesselId: "rms-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 11,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b052a14c-d421-4412-a65d-4830753b9dbd",
    vesselId: "rms-the--mariner",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
