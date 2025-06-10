// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "9d0120ac-6080-48e0-a0b4-daf68111bb4f",
    vesselId: "hms-lisbon-voyager",
    type: "Magic Show",
    location: {
      deck: 9,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a646f54b-1548-442f-969d-b5da9a390089",
    vesselId: "hms-lisbon-voyager",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "b61b24c9-1472-4d77-aa5a-76569a4bb9e4",
    vesselId: "hms-lisbon-voyager",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "16579a61-e408-4401-84ea-7c830a5570e8",
    vesselId: "hms-lisbon-voyager",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "41dd210b-92c6-4baf-aa37-8c2b893c6ab1",
    vesselId: "hms-lisbon-voyager",
    type: "Karaoke",
    location: {
      deck: 6,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
