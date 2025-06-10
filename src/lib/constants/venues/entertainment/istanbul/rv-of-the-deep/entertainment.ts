// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "e7755ce8-64cf-4359-b8dc-cc08b9e4d9fc",
    vesselId: "rv--of-the-deep",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "f4d70a00-955c-4cd0-807e-2abfd0e3dbd3",
    vesselId: "rv--of-the-deep",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "dcf25fd1-4acb-4d76-aa35-aeade65f13b4",
    vesselId: "rv--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 8,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "07cd8060-1934-4561-b929-9a93e59ce4e5",
    vesselId: "rv--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 9,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "9130db73-f099-4368-b08d-d8a15dea1578",
    vesselId: "rv--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2ba4d389-f2a7-41b1-ac46-f3cb7710c727",
    vesselId: "rv--of-the-deep",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "ec88c172-48cc-4aca-a377-2030655bb55b",
    vesselId: "rv--of-the-deep",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
