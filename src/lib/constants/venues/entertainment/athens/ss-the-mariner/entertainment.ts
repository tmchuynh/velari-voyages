// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "babafe35-07ba-44ec-b5ff-a0b91c4d3214",
    vesselId: "ss-the--mariner",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c4fad7e4-7661-484a-92e8-14e0fbe7966b",
    vesselId: "ss-the--mariner",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "2af39d24-ae8f-4844-b848-0881dc49d996",
    vesselId: "ss-the--mariner",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "059fc26c-8a35-427d-ad01-cb86b817eacd",
    vesselId: "ss-the--mariner",
    type: "Comedy",
    location: {
      deck: 8,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "56e622c7-17b3-401f-b941-06ce66080eff",
    vesselId: "ss-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 15,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
