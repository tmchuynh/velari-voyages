// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "f3f64258-494c-4ec0-acdc-aa4175fd793c",
    vesselId: "nx--gale",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6898b1af-1cfb-4c30-b4b8-29bc154c091d",
    vesselId: "nx--gale",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "1d6bd755-2241-48a1-9bca-e906e3dd90c9",
    vesselId: "nx--gale",
    type: "Movie Theater",
    location: {
      deck: 15,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "efac1cdd-3017-496b-8445-6e84b34fb223",
    vesselId: "nx--gale",
    type: "Game Show",
    location: {
      deck: 15,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "dc9a76de-9102-4b97-93c3-f436a7f1c699",
    vesselId: "nx--gale",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6b2db855-9dbe-4831-a188-30b14e58ffc9",
    vesselId: "nx--gale",
    type: "Comedy",
    location: {
      deck: 13,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c2dd6a80-4368-4cd9-8f55-0b4023099d76",
    vesselId: "nx--gale",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
