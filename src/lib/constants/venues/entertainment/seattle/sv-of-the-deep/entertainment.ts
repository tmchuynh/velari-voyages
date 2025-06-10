// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "657443f3-83fd-441b-8e9d-c518293301b3",
    vesselId: "sv--of-the-deep",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "d58c7b2b-60c5-4445-bee1-8fa08044e36a",
    vesselId: "sv--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "92c1b0e1-0343-4538-aef9-1cd2c35e6b52",
    vesselId: "sv--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 12,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "52cc25bc-883e-4679-bc5c-8345dbe83a2a",
    vesselId: "sv--of-the-deep",
    type: "Comedy",
    location: {
      deck: 14,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
