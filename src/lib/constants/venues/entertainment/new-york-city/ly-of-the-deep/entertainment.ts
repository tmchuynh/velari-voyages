// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "f971b91a-21df-4984-8d8d-8466774ba930",
    vesselId: "ly--of-the-deep",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "66491d3f-e96f-49be-aa5b-82a882c422e6",
    vesselId: "ly--of-the-deep",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "60c24ffb-ff6c-4120-9283-e0714d1165c4",
    vesselId: "ly--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "984e201c-7b40-4365-8e0c-a18917e685f2",
    vesselId: "ly--of-the-deep",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
