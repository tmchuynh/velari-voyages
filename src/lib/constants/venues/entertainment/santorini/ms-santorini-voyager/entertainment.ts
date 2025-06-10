// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "45c10af3-ccba-4fb6-b6c7-dc26ec177ad6",
    vesselId: "ms-santorini-voyager",
    type: "Karaoke",
    location: {
      deck: 11,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "f40fd7db-3edb-4f45-8ee1-eefa410303da",
    vesselId: "ms-santorini-voyager",
    type: "Dancing",
    location: {
      deck: 14,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "dd785138-99c6-4d7a-b4a4-c3b340c2ae83",
    vesselId: "ms-santorini-voyager",
    type: "Live Music",
    location: {
      deck: 8,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "882da955-dd7b-4c17-9142-05d2a8c7a349",
    vesselId: "ms-santorini-voyager",
    type: "Movie Theater",
    location: {
      deck: 11,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "f786bf7a-ef36-47da-918c-fe910bb2b067",
    vesselId: "ms-santorini-voyager",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2af982dd-116c-4f92-a92a-1353d266a7c7",
    vesselId: "ms-santorini-voyager",
    type: "Nightclub",
    location: {
      deck: 11,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
