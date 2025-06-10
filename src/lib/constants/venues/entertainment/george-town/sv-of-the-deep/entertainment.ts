// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "0aeaee43-24fe-40be-a11e-bc054dfb5dfe",
    vesselId: "sv--of-the-deep",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "cdce6b1a-3c45-440b-977d-04258fcc75c9",
    vesselId: "sv--of-the-deep",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "bcfcec0b-45cc-4d2f-b2a3-4e3f06757417",
    vesselId: "sv--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "249a2121-00b5-486a-a66c-163f941735d0",
    vesselId: "sv--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 13,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "64d0aaed-cbe6-4821-9c7f-45c707fba70c",
    vesselId: "sv--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
