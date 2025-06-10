// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "514a3ddd-0a1f-4476-84c9-f63143b67009",
    vesselId: "mv--gale",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "78ab00a9-5443-41bc-b1cf-60b3f7e96ba2",
    vesselId: "mv--gale",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "3a55cfeb-4ea5-4dc4-861c-3d0cf5851b3f",
    vesselId: "mv--gale",
    type: "Game Show",
    location: {
      deck: 11,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c2d96d94-e599-4042-8652-c2d2a775b1cc",
    vesselId: "mv--gale",
    type: "Magic Show",
    location: {
      deck: 15,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "66e709bf-6f5d-4478-86df-ac6ce928a474",
    vesselId: "mv--gale",
    type: "Live Music",
    location: {
      deck: 8,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "606ffbcd-bb29-4aa6-9a0b-96bcf44fb43e",
    vesselId: "mv--gale",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "03cf1a71-3a04-4bf8-977d-f3c90f9eddc8",
    vesselId: "mv--gale",
    type: "Comedy",
    location: {
      deck: 7,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "7d731b24-eba2-4335-bfb1-92264baead2d",
    vesselId: "mv--gale",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
