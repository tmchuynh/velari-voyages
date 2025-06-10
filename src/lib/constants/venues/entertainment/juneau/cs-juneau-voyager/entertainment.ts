// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "5953627b-b0f6-4c22-a007-818c03bb908e",
    vesselId: "cs-juneau-voyager",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "079955aa-f02b-4f68-9633-98dc86f03213",
    vesselId: "cs-juneau-voyager",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "4f07c1a5-fbd9-4fdf-bd1d-279733146a16",
    vesselId: "cs-juneau-voyager",
    type: "Movie Theater",
    location: {
      deck: 10,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b6cd6b31-d624-49c3-ba67-427d402c38fb",
    vesselId: "cs-juneau-voyager",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e55ace79-5bff-4d0f-bb1a-ebcae6898a63",
    vesselId: "cs-juneau-voyager",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "d19928d2-010a-4ad3-a130-f976cf47792a",
    vesselId: "cs-juneau-voyager",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
