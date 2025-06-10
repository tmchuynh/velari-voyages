// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "4fa03a36-3ecf-4606-a1ba-9d945c9013b3",
    vesselId: "nb-victoria-voyager",
    type: "Live Music",
    location: {
      deck: 15,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "ceb7d6ee-eede-48cc-b4a2-e5f4ba5bcee5",
    vesselId: "nb-victoria-voyager",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8f5d2f47-3139-4415-8e0b-acf6460875b6",
    vesselId: "nb-victoria-voyager",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "27e57d63-6ba1-4a18-b00f-4a9299ff0390",
    vesselId: "nb-victoria-voyager",
    type: "Karaoke",
    location: {
      deck: 12,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d8dec909-3e08-4ffb-b837-494f8ad66f28",
    vesselId: "nb-victoria-voyager",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3a19178a-34a8-48c5-adcf-5a724dda69d1",
    vesselId: "nb-victoria-voyager",
    type: "Nightclub",
    location: {
      deck: 5,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
