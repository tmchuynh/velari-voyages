// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "42f697e3-d21b-4265-afaa-d20164ea9877",
    vesselId: "ss-the--mariner",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b923cf0d-ff45-4113-9e7e-6fd4e60d1fc7",
    vesselId: "ss-the--mariner",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "75ed082c-c901-4869-ad6c-98fe99d85847",
    vesselId: "ss-the--mariner",
    type: "Comedy",
    location: {
      deck: 8,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "24ee0fbb-39dd-40fc-b2de-b60c574e643d",
    vesselId: "ss-the--mariner",
    type: "Karaoke",
    location: {
      deck: 11,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
