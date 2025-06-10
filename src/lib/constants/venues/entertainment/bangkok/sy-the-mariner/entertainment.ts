// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "c2695477-6fbe-4a90-8559-9bfe0e2e64fd",
    vesselId: "sy-the--mariner",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "f766eb4b-bcac-4ef7-a3bd-76d5f3794986",
    vesselId: "sy-the--mariner",
    type: "Karaoke",
    location: {
      deck: 13,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ca9331f1-e9b5-46cc-b716-ac85e360d535",
    vesselId: "sy-the--mariner",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "df1eaa02-a7aa-4aef-8dc0-707da24283ef",
    vesselId: "sy-the--mariner",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e666d821-56d5-4229-b696-d642303df748",
    vesselId: "sy-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "14d99662-fc3e-4304-aa3e-d45e57b55d97",
    vesselId: "sy-the--mariner",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
