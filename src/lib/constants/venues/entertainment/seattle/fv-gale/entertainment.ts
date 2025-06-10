// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "4a70aa61-d757-4123-8bef-6478ef6cd0f6",
    vesselId: "fv--gale",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "df99ef5a-9377-4cac-a557-b831bcc022bb",
    vesselId: "fv--gale",
    type: "Magic Show",
    location: {
      deck: 15,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "c3dfb05a-6e76-4d00-a3b5-3bd7100aca0f",
    vesselId: "fv--gale",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "b6f9b548-93c7-4ab2-8014-ade5fcbe8e83",
    vesselId: "fv--gale",
    type: "Comedy",
    location: {
      deck: 8,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
