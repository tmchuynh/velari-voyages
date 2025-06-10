// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "a4a90976-8f60-4896-8139-30a14003bee6",
    vesselId: "hms-london-voyager",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a5459b8d-ecfc-48fc-8c49-edaea4c43922",
    vesselId: "hms-london-voyager",
    type: "Comedy",
    location: {
      deck: 14,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "916ef683-8dfe-4261-afc5-52243b873c27",
    vesselId: "hms-london-voyager",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ad61356a-1e1d-4b6f-9e71-bed70caeb19c",
    vesselId: "hms-london-voyager",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f5a7a6f1-73c1-4729-9a67-b7b3697cd517",
    vesselId: "hms-london-voyager",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "09939636-13f2-466d-a4d0-284efe6fbae5",
    vesselId: "hms-london-voyager",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c375927b-1e52-4491-9cf1-2b7e452215e8",
    vesselId: "hms-london-voyager",
    type: "Movie Theater",
    location: {
      deck: 5,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "bc0ebf0b-2774-430c-b4b8-fb352e59e968",
    vesselId: "hms-london-voyager",
    type: "Karaoke",
    location: {
      deck: 11,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
