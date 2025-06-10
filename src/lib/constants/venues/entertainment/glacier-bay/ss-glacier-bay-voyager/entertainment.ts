// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "58db8cfc-d940-4060-94ca-d181c8f1797f",
    vesselId: "ss-glacier-bay-voyager",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7775a1b0-860e-4288-9ebc-7e260634a27c",
    vesselId: "ss-glacier-bay-voyager",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "e68e2290-5bc2-480e-8c3a-9a2a15195559",
    vesselId: "ss-glacier-bay-voyager",
    type: "Magic Show",
    location: {
      deck: 11,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "9551b20e-8b01-4392-97c5-bce02dc2738a",
    vesselId: "ss-glacier-bay-voyager",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ded9149d-9728-4d5f-829d-b3d0f6226bfd",
    vesselId: "ss-glacier-bay-voyager",
    type: "Movie Theater",
    location: {
      deck: 5,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0ecb239b-dd1f-4441-9ab6-e75de921ebd4",
    vesselId: "ss-glacier-bay-voyager",
    type: "Comedy",
    location: {
      deck: 12,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "dff429f0-15ee-4015-9ef8-4b815e73ae83",
    vesselId: "ss-glacier-bay-voyager",
    type: "Live Music",
    location: {
      deck: 15,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "0258e6dd-ea26-4bd8-805f-90f72af06d0f",
    vesselId: "ss-glacier-bay-voyager",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
