// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "68e3b15c-9537-4a25-8bcb-19429b9fe583",
    vesselId: "rms-miami-voyager",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "92894a0e-2b9d-4b36-af99-7cb5c97d6b4b",
    vesselId: "rms-miami-voyager",
    type: "Comedy",
    location: {
      deck: 14,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "d4b78947-1234-4be2-8207-b181885d1a99",
    vesselId: "rms-miami-voyager",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1d757b52-e8ac-4bd2-a2cd-117cc0100650",
    vesselId: "rms-miami-voyager",
    type: "Nightclub",
    location: {
      deck: 8,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "3b464f50-32d3-40df-9ea8-f78b5c71ab24",
    vesselId: "rms-miami-voyager",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
