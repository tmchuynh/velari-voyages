// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "a8ddbc05-937c-4d35-bf4f-e3e65de59e9d",
    vesselId: "fv-singapore-voyager",
    type: "Nightclub",
    location: {
      deck: 11,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "bed5f67b-6258-4cd6-ad78-09ec0ba6c4ad",
    vesselId: "fv-singapore-voyager",
    type: "Karaoke",
    location: {
      deck: 11,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "6943be05-c9c1-4eac-abec-2462a241aa86",
    vesselId: "fv-singapore-voyager",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "34f8f83b-4bbb-4961-8b90-84a6eeea1632",
    vesselId: "fv-singapore-voyager",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
