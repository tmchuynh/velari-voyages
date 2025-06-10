// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "3bb50720-8ad7-467c-be55-2bac340709df",
    vesselId: "sv-the--mariner",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "4185067b-0135-42a2-b08f-3f9703770dd0",
    vesselId: "sv-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "aa244863-46ca-4ea4-b2f3-2a32b000539c",
    vesselId: "sv-the--mariner",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8379063c-f03d-471f-ae92-befe848b24b1",
    vesselId: "sv-the--mariner",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
