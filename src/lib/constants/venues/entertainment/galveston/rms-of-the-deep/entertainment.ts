// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "1eb740bf-7c96-4f16-b373-7589e47ea437",
    vesselId: "rms--of-the-deep",
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
    id: "9302bc80-3e17-4c2c-a00c-5e0033376036",
    vesselId: "rms--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "aa3eb83d-51f7-416d-9af8-53b8b56f5164",
    vesselId: "rms--of-the-deep",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "4496e7a9-9a82-47bd-b944-dae53cd778cf",
    vesselId: "rms--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "29dc0d15-5fd5-407d-a30d-80468a6f63d3",
    vesselId: "rms--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 6,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
