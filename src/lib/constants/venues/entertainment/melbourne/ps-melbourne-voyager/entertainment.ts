// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "ded1a02f-f403-4cf1-aa5d-19556e041158",
    vesselId: "ps-melbourne-voyager",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "fade64f9-ab72-4441-96b6-b3adb07aa2ba",
    vesselId: "ps-melbourne-voyager",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "e74d1f36-aae2-497a-9c4a-9b70485843c8",
    vesselId: "ps-melbourne-voyager",
    type: "Nightclub",
    location: {
      deck: 11,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "408f5c1e-8c01-4747-9fd9-bcded91e0016",
    vesselId: "ps-melbourne-voyager",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
