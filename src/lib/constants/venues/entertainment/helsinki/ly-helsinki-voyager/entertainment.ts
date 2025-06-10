// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "face53a0-3b5c-4177-9f38-8cd30d0f2fde",
    vesselId: "ly-helsinki-voyager",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "e0a48ba0-c2f9-4e15-bd69-1f0e1cfdf995",
    vesselId: "ly-helsinki-voyager",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "aa3cd77d-ec2b-4658-97d8-43f116c3e1b4",
    vesselId: "ly-helsinki-voyager",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "783a2851-2901-4876-882d-15d2fcb5f184",
    vesselId: "ly-helsinki-voyager",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "dc7271a8-04fa-4793-88c8-7747eed68fb1",
    vesselId: "ly-helsinki-voyager",
    type: "Movie Theater",
    location: {
      deck: 14,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "6a5e0c52-7be6-4493-9632-8d810ca86f0a",
    vesselId: "ly-helsinki-voyager",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
