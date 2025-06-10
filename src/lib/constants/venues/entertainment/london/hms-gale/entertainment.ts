// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "d69bdbaa-d0e1-46fc-be00-5d8ed34b6edc",
    vesselId: "hms--gale",
    type: "Game Show",
    location: {
      deck: 15,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "26241b80-1414-4ab9-b8b5-f0b32c3b909f",
    vesselId: "hms--gale",
    type: "Comedy",
    location: {
      deck: 13,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "57232b03-3c98-48f5-9f1c-444711ef9451",
    vesselId: "hms--gale",
    type: "Magic Show",
    location: {
      deck: 14,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b9dba50a-27b3-4484-aa61-ae5b4f4916e6",
    vesselId: "hms--gale",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c210c80f-e178-4376-aa56-a9d8511513dd",
    vesselId: "hms--gale",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "97023859-7dbb-41c1-9b64-128971cff68c",
    vesselId: "hms--gale",
    type: "Nightclub",
    location: {
      deck: 8,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
