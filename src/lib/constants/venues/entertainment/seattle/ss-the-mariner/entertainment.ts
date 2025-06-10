// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "581f3358-fdb9-4cca-9685-924a4f382a93",
    vesselId: "ss-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 10,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "06346ad3-e26f-43a3-b4e5-b785bf000dec",
    vesselId: "ss-the--mariner",
    type: "Comedy",
    location: {
      deck: 12,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "7c452a5c-f8c0-4e27-ad65-49110b67bbb6",
    vesselId: "ss-the--mariner",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "bc6bb54f-ee9b-4982-9a5e-c53d4857e961",
    vesselId: "ss-the--mariner",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9764854d-351b-47b6-bb5a-a7f76f22f1a4",
    vesselId: "ss-the--mariner",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c6f93b6e-f60c-4e4f-b552-5631c2777649",
    vesselId: "ss-the--mariner",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
