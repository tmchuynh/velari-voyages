// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "ef0d6f93-0ae2-4404-ad57-dc15dd81ba0c",
    vesselId: "my--explorer",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "903bb13a-8600-4c4a-8514-01c5147938f5",
    vesselId: "my--explorer",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "107f2564-3945-4153-b856-ce06ad1c6c0f",
    vesselId: "my--explorer",
    type: "Comedy",
    location: {
      deck: 14,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "62ff7f62-a57e-47bf-a470-7695ebe8b627",
    vesselId: "my--explorer",
    type: "Karaoke",
    location: {
      deck: 6,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
