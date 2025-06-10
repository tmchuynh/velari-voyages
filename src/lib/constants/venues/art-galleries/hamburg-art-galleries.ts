import { ArtGallery } from "@/lib/interfaces/services/venues";

/**
 * Hamburg Art Galleries
 * Generated art gallery data for vessels operating in Hamburg
 * Each vessel has one comprehensive art gallery with curated collections,
 * exhibitions, guided tours, and art classes based on vessel type and luxury level.
 */

export const hamburgArtGalleries: ArtGallery[] = [
  {
    "id": "46b66d5a-25f8-425c-948d-08c5bc58c546",
    "vesselId": "my--explorer",
    "name": "Aqua Fine Arts",
    "description": "Aqua Fine Arts offers a sophisticated artistic experience with carefully selected works that reflect both maritime heritage and contemporary artistic innovation. Join us for a journey through art and culture. We offer rotating exhibitions, expert-led tours to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/luxury-cruise-ship-gallery.jpg",
    "hours": {
      "start": "09:00",
      "end": "22:00",
      "duration": "13 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-924-873-2023",
      "contactEmail": "hi@gallery.velarivoyages.com"
    },
    "artists": [
      "Giotto di Bondone",
      "Damien Hirst",
      "Hans Holbein the Younger",
      "Paul Signac",
      "Caravaggio",
      "Johannes Vermeer",
      "Leonardo da Vinci",
      "Donatello",
      "Yayoi Kusama",
      "Jan van Eyck",
      "Sandro Botticelli",
      "Pieter Bruegel the Elder",
      "Ai Weiwei",
      "Kehinde Wiley",
      "Pablo Picasso",
      "Camille Pissarro",
      "Piet Mondrian",
      "Jeff Koons",
      "Mark Rothko"
    ],
    "hasExhibitions": true,
    "exhibitions": [
      {
        "title": "Abstract Horizons",
        "description": "An exploration of abstract art that captures the infinite possibilities of the horizon line and open waters.",
        "duration": "5 months",
        "type": "Thematic Exhibition",
        "featured": true,
        "ticketPrice": 0
      },
      {
        "title": "Local Artisan Showcase",
        "description": "Featuring works by local artists from ports of call, celebrating regional artistic traditions and contemporary expressions.",
        "duration": "3 months",
        "type": "Cultural Exchange",
        "featured": true,
        "ticketPrice": 0
      },
      {
        "title": "Colors of the Mediterranean",
        "description": "Vibrant paintings and sculptures inspired by the Mediterranean coast, showcasing the region's rich artistic heritage.",
        "duration": "4 months",
        "type": "Regional Focus",
        "featured": false,
        "ticketPrice": 0
      },
      {
        "title": "Contemporary Voyages",
        "description": "Modern interpretations of travel and exploration through the lens of contemporary artists from around the world.",
        "duration": "6 months",
        "type": "Featured Exhibition",
        "featured": false,
        "ticketPrice": 0
      },
      {
        "title": "Digital Art Revolution",
        "description": "Cutting-edge digital and interactive art installations that push the boundaries of traditional gallery experiences.",
        "duration": "6 months",
        "type": "Interactive Exhibition",
        "featured": true,
        "ticketPrice": 0
      }
    ],
    "hasGuidedTours": true,
    "tours": [
      {
        "title": "Behind the Scenes Tour",
        "description": "Exclusive access to conservation areas and storage facilities, discovering how artworks are preserved and maintained aboard the vessel.",
        "duration": "60 minutes",
        "schedule": "Weekends at 3:00 PM",
        "maxParticipants": 8,
        "currency": "USD",
        "bookingRequired": true
      },
      {
        "title": "Artist Spotlight Tour",
        "description": "Focus on specific artists and their contributions to the maritime art world, with detailed analysis of their most significant works.",
        "duration": "30 minutes",
        "schedule": "Tuesdays and Thursdays at 11:00 AM",
        "maxParticipants": 12,
        "currency": "USD",
        "bookingRequired": true
      },
      {
        "title": "Curator's Choice Tour",
        "description": "Join our expert curator for an in-depth exploration of featured artworks, learning about artistic techniques, historical context, and hidden details.",
        "duration": "45 minutes",
        "schedule": "Daily at 10:00 AM and 2:00 PM",
        "maxParticipants": 15,
        "currency": "USD",
        "bookingRequired": true
      }
    ],
    "hasArtClasses": false,
    "faqs": [
      {
        "question": "Is there an admission fee for the gallery?",
        "answer": "Access to the art gallery is complimentary for all guests. Some special exhibitions, guided tours, and art classes may have an additional charge."
      },
      {
        "question": "Is the gallery accessible for guests with mobility issues?",
        "answer": "Yes, our gallery is fully accessible with wheelchair access, accessible restrooms, and accommodations for guests with various mobility needs."
      },
      {
        "question": "Can I purchase artwork displayed in the gallery?",
        "answer": "Selected pieces in our gallery are available for purchase. Please speak with our gallery staff for information about acquiring specific artworks."
      },
      {
        "question": "Can I take photos in the gallery?",
        "answer": "Photography policies vary by exhibition. Please check with gallery staff about photography permissions for specific displays."
      },
      {
        "question": "What are the art gallery operating hours?",
        "answer": "Our art gallery is typically open from 9:00 AM to 9:00 PM daily. Hours may vary based on port days and special events."
      },
      {
        "question": "How often do you change exhibitions?",
        "answer": "We regularly rotate our exhibitions to provide fresh experiences for our guests. Major exhibitions typically change every 3-6 months."
      }
    ],
    "isPopular": false
  },
  {
    "id": "0db04460-580f-4d6e-9642-1e164a0dd34f",
    "vesselId": "cs-hamburg-voyager",
    "name": "Velari Maritime Gallery",
    "description": "Welcome to Velari Maritime Gallery aboard the CS Hamburg Voyager. Immerse yourself in a world-class collection of maritime and contemporary art while sailing the waters near Hamburg. We offer rotating exhibitions, expert-led tours, hands-on art classes to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/mainstream-cruise-ship-gallery.jpg",
    "hours": {
      "start": "10:00",
      "end": "22:00",
      "duration": "12 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-663-436-6290",
      "contactEmail": "inquiries@gallery.velarivoyages.com"
    },
    "artists": [
      "Paul Cézanne",
      "Donatello",
      "Leonardo da Vinci",
      "Henri de Toulouse-Lautrec",
      "Roy Lichtenstein",
      "Paul Signac",
      "Michelangelo Buonarroti",
      "Henri Matisse",
      "Piet Mondrian"
    ],
    "hasExhibitions": true,
    "exhibitions": [
      {
        "title": "Colors of the Mediterranean",
        "description": "Vibrant paintings and sculptures inspired by the Mediterranean coast, showcasing the region's rich artistic heritage.",
        "duration": "4 months",
        "type": "Regional Focus",
        "featured": true,
        "ticketPrice": 12
      },
      {
        "title": "Abstract Horizons",
        "description": "An exploration of abstract art that captures the infinite possibilities of the horizon line and open waters.",
        "duration": "5 months",
        "type": "Thematic Exhibition",
        "featured": true,
        "ticketPrice": 17
      },
      {
        "title": "Contemporary Voyages",
        "description": "Modern interpretations of travel and exploration through the lens of contemporary artists from around the world.",
        "duration": "6 months",
        "type": "Featured Exhibition",
        "featured": false,
        "ticketPrice": 0
      },
      {
        "title": "Local Artisan Showcase",
        "description": "Featuring works by local artists from ports of call, celebrating regional artistic traditions and contemporary expressions.",
        "duration": "3 months",
        "type": "Cultural Exchange",
        "featured": false,
        "ticketPrice": 0
      },
      {
        "title": "Photography at Sea",
        "description": "Stunning maritime photography collection featuring both historical and contemporary works capturing life on the ocean.",
        "duration": "2 months",
        "type": "Photography Exhibition",
        "featured": false,
        "ticketPrice": 0
      }
    ],
    "hasGuidedTours": true,
    "tours": [
      {
        "title": "Behind the Scenes Tour",
        "description": "Exclusive access to conservation areas and storage facilities, discovering how artworks are preserved and maintained aboard the vessel.",
        "duration": "60 minutes",
        "schedule": "Weekends at 3:00 PM",
        "maxParticipants": 8,
        "currency": "USD",
        "bookingRequired": true
      },
      {
        "title": "Artist Spotlight Tour",
        "description": "Focus on specific artists and their contributions to the maritime art world, with detailed analysis of their most significant works.",
        "duration": "30 minutes",
        "schedule": "Tuesdays and Thursdays at 11:00 AM",
        "maxParticipants": 12,
        "currency": "USD",
        "bookingRequired": true
      },
      {
        "title": "Curator's Choice Tour",
        "description": "Join our expert curator for an in-depth exploration of featured artworks, learning about artistic techniques, historical context, and hidden details.",
        "duration": "45 minutes",
        "schedule": "Daily at 10:00 AM and 2:00 PM",
        "maxParticipants": 15,
        "currency": "USD",
        "bookingRequired": true
      }
    ],
    "hasArtClasses": true,
    "artClasses": [
      {
        "title": "Mixed Media Collage",
        "description": "Combine various materials and techniques to create unique mixed media artworks inspired by your travel experiences.",
        "duration": "2 hours",
        "skillLevel": "All Levels",
        "materialsIncluded": true,
        "maxParticipants": 10,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Sculpture with Clay",
        "description": "Hands-on sculpture class working with clay to create small maritime-themed pieces, from sea creatures to abstract forms.",
        "duration": "3 hours",
        "skillLevel": "All Levels",
        "materialsIncluded": true,
        "maxParticipants": 8,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Abstract Painting Workshop",
        "description": "Explore abstract expressionism through color, texture, and movement, creating your own unique maritime-inspired artwork.",
        "duration": "2.5 hours",
        "skillLevel": "Intermediate",
        "materialsIncluded": true,
        "maxParticipants": 8,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Watercolor Seascapes",
        "description": "Learn to paint beautiful seascapes using watercolor techniques, capturing the ever-changing moods of the ocean.",
        "duration": "2 hours",
        "skillLevel": "Beginner to Intermediate",
        "materialsIncluded": true,
        "maxParticipants": 12,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Jewelry Making Workshop",
        "description": "Create unique jewelry pieces using various techniques and materials, incorporating maritime themes and found objects.",
        "duration": "3 hours",
        "skillLevel": "Beginner to Intermediate",
        "materialsIncluded": true,
        "maxParticipants": 8,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Printmaking Basics",
        "description": "Introduction to printmaking techniques including linocuts and etchings, creating multiple copies of your original designs.",
        "duration": "2.5 hours",
        "skillLevel": "Intermediate to Advanced",
        "materialsIncluded": true,
        "maxParticipants": 6,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "12+"
      },
      {
        "title": "Digital Art Creation",
        "description": "Introduction to digital art using tablets and styluses, perfect for modern artists looking to explore new mediums.",
        "duration": "2 hours",
        "skillLevel": "Beginner",
        "materialsIncluded": false,
        "maxParticipants": 6,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Calligraphy and Lettering",
        "description": "Learn the elegant art of calligraphy and modern lettering techniques, perfect for creating personalized travel journals.",
        "duration": "90 minutes",
        "skillLevel": "Beginner",
        "materialsIncluded": true,
        "maxParticipants": 12,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Photography Composition",
        "description": "Learn the art of photographic composition while documenting your cruise experience and capturing stunning maritime scenes.",
        "duration": "2 hours",
        "skillLevel": "Beginner to Intermediate",
        "materialsIncluded": false,
        "maxParticipants": 15,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Portrait Drawing Fundamentals",
        "description": "Master the basics of portrait drawing with professional guidance, focusing on proportion, shading, and expression.",
        "duration": "90 minutes",
        "skillLevel": "All Levels",
        "materialsIncluded": true,
        "maxParticipants": 10,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      }
    ],
    "faqs": [
      {
        "question": "How often do you change exhibitions?",
        "answer": "We regularly rotate our exhibitions to provide fresh experiences for our guests. Major exhibitions typically change every 3-6 months."
      },
      {
        "question": "What are the art gallery operating hours?",
        "answer": "Our art gallery is typically open from 9:00 AM to 9:00 PM daily. Hours may vary based on port days and special events."
      },
      {
        "question": "Is the gallery accessible for guests with mobility issues?",
        "answer": "Yes, our gallery is fully accessible with wheelchair access, accessible restrooms, and accommodations for guests with various mobility needs."
      },
      {
        "question": "Is there an admission fee for the gallery?",
        "answer": "Access to the art gallery is complimentary for all guests. Some special exhibitions, guided tours, and art classes may have an additional charge."
      }
    ],
    "isPopular": false
  },
  {
    "id": "0edf0b9d-2d32-4c53-ab00-0789dac8dd3c",
    "vesselId": "hms--of-the-deep",
    "name": "Aqua Fine Arts",
    "description": "Aqua Fine Arts offers a sophisticated artistic experience with carefully selected works that reflect both maritime heritage and contemporary artistic innovation. Join us for a journey through art and culture. We offer rotating exhibitions, expert-led tours, hands-on art classes to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/ultra-luxury-cruise-ship-gallery.jpg",
    "hours": {
      "start": "08:00",
      "end": "21:00",
      "duration": "13 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-612-564-6923",
      "contactEmail": "team@gallery.velarivoyages.com"
    },
    "artists": [
      "Ai Weiwei",
      "Wassily Kandinsky",
      "Kehinde Wiley",
      "Paul Gauguin",
      "Paul Signac",
      "Damien Hirst",
      "Yayoi Kusama",
      "Giotto di Bondone",
      "Vincent van Gogh",
      "Mark Rothko",
      "Leonardo da Vinci",
      "Piet Mondrian",
      "Michelangelo Buonarroti",
      "Titian",
      "Berthe Morisot"
    ],
    "hasExhibitions": true,
    "exhibitions": [
      {
        "title": "Masterpieces of the Sea",
        "description": "A curated collection of maritime art spanning centuries, featuring works that capture the beauty, power, and mystery of the ocean.",
        "duration": "3 months",
        "type": "Permanent Collection",
        "featured": false,
        "ticketPrice": 0
      },
      {
        "title": "Contemporary Voyages",
        "description": "Modern interpretations of travel and exploration through the lens of contemporary artists from around the world.",
        "duration": "6 months",
        "type": "Featured Exhibition",
        "featured": true,
        "ticketPrice": 18
      },
      {
        "title": "Colors of the Mediterranean",
        "description": "Vibrant paintings and sculptures inspired by the Mediterranean coast, showcasing the region's rich artistic heritage.",
        "duration": "4 months",
        "type": "Regional Focus",
        "featured": true,
        "ticketPrice": 23
      },
      {
        "title": "Abstract Horizons",
        "description": "An exploration of abstract art that captures the infinite possibilities of the horizon line and open waters.",
        "duration": "5 months",
        "type": "Thematic Exhibition",
        "featured": false,
        "ticketPrice": 22
      },
      {
        "title": "Photography at Sea",
        "description": "Stunning maritime photography collection featuring both historical and contemporary works capturing life on the ocean.",
        "duration": "2 months",
        "type": "Photography Exhibition",
        "featured": true,
        "ticketPrice": 0
      }
    ],
    "hasGuidedTours": true,
    "tours": [
      {
        "title": "Artist Spotlight Tour",
        "description": "Focus on specific artists and their contributions to the maritime art world, with detailed analysis of their most significant works.",
        "duration": "30 minutes",
        "schedule": "Tuesdays and Thursdays at 11:00 AM",
        "maxParticipants": 12,
        "currency": "USD",
        "bookingRequired": true
      },
      {
        "title": "Curator's Choice Tour",
        "description": "Join our expert curator for an in-depth exploration of featured artworks, learning about artistic techniques, historical context, and hidden details.",
        "duration": "45 minutes",
        "schedule": "Daily at 10:00 AM and 2:00 PM",
        "maxParticipants": 15,
        "currency": "USD",
        "bookingRequired": true
      },
      {
        "title": "Behind the Scenes Tour",
        "description": "Exclusive access to conservation areas and storage facilities, discovering how artworks are preserved and maintained aboard the vessel.",
        "duration": "60 minutes",
        "schedule": "Weekends at 3:00 PM",
        "maxParticipants": 8,
        "currency": "USD",
        "bookingRequired": true
      }
    ],
    "hasArtClasses": true,
    "artClasses": [
      {
        "title": "Mixed Media Collage",
        "description": "Combine various materials and techniques to create unique mixed media artworks inspired by your travel experiences.",
        "duration": "2 hours",
        "skillLevel": "All Levels",
        "materialsIncluded": true,
        "maxParticipants": 10,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Watercolor Seascapes",
        "description": "Learn to paint beautiful seascapes using watercolor techniques, capturing the ever-changing moods of the ocean.",
        "duration": "2 hours",
        "skillLevel": "Beginner to Intermediate",
        "materialsIncluded": true,
        "maxParticipants": 12,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "12+"
      },
      {
        "title": "Portrait Drawing Fundamentals",
        "description": "Master the basics of portrait drawing with professional guidance, focusing on proportion, shading, and expression.",
        "duration": "90 minutes",
        "skillLevel": "All Levels",
        "materialsIncluded": true,
        "maxParticipants": 10,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Calligraphy and Lettering",
        "description": "Learn the elegant art of calligraphy and modern lettering techniques, perfect for creating personalized travel journals.",
        "duration": "90 minutes",
        "skillLevel": "Beginner",
        "materialsIncluded": true,
        "maxParticipants": 12,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Photography Composition",
        "description": "Learn the art of photographic composition while documenting your cruise experience and capturing stunning maritime scenes.",
        "duration": "2 hours",
        "skillLevel": "Beginner to Intermediate",
        "materialsIncluded": false,
        "maxParticipants": 15,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Printmaking Basics",
        "description": "Introduction to printmaking techniques including linocuts and etchings, creating multiple copies of your original designs.",
        "duration": "2.5 hours",
        "skillLevel": "Intermediate to Advanced",
        "materialsIncluded": true,
        "maxParticipants": 6,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Abstract Painting Workshop",
        "description": "Explore abstract expressionism through color, texture, and movement, creating your own unique maritime-inspired artwork.",
        "duration": "2.5 hours",
        "skillLevel": "Intermediate",
        "materialsIncluded": true,
        "maxParticipants": 8,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Jewelry Making Workshop",
        "description": "Create unique jewelry pieces using various techniques and materials, incorporating maritime themes and found objects.",
        "duration": "3 hours",
        "skillLevel": "Beginner to Intermediate",
        "materialsIncluded": true,
        "maxParticipants": 8,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Digital Art Creation",
        "description": "Introduction to digital art using tablets and styluses, perfect for modern artists looking to explore new mediums.",
        "duration": "2 hours",
        "skillLevel": "Beginner",
        "materialsIncluded": false,
        "maxParticipants": 6,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "12+"
      },
      {
        "title": "Sculpture with Clay",
        "description": "Hands-on sculpture class working with clay to create small maritime-themed pieces, from sea creatures to abstract forms.",
        "duration": "3 hours",
        "skillLevel": "All Levels",
        "materialsIncluded": true,
        "maxParticipants": 8,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "12+"
      }
    ],
    "faqs": [
      {
        "question": "Do you offer art classes for beginners?",
        "answer": "Absolutely! We offer art classes for all skill levels, from complete beginners to experienced artists. All necessary materials are typically provided."
      },
      {
        "question": "What are the art gallery operating hours?",
        "answer": "Our art gallery is typically open from 9:00 AM to 9:00 PM daily. Hours may vary based on port days and special events."
      },
      {
        "question": "How often do you change exhibitions?",
        "answer": "We regularly rotate our exhibitions to provide fresh experiences for our guests. Major exhibitions typically change every 3-6 months."
      },
      {
        "question": "Can I purchase artwork displayed in the gallery?",
        "answer": "Selected pieces in our gallery are available for purchase. Please speak with our gallery staff for information about acquiring specific artworks."
      },
      {
        "question": "Is the gallery accessible for guests with mobility issues?",
        "answer": "Yes, our gallery is fully accessible with wheelchair access, accessible restrooms, and accommodations for guests with various mobility needs."
      }
    ],
    "isPopular": false
  },
  {
    "id": "c2213b21-9650-4017-914e-f730522a9811",
    "vesselId": "sv-the--mariner",
    "name": "The Gallery at Sea",
    "description": "Welcome to The Gallery at Sea aboard the SV The  Mariner. Immerse yourself in a world-class collection of maritime and contemporary art while sailing the waters near Hamburg. We offer rotating exhibitions to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/short-hop-ferry-gallery.jpg",
    "hours": {
      "start": "08:00",
      "end": "20:00",
      "duration": "12 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-696-732-9630",
      "contactEmail": "reachus@gallery.velarivoyages.com"
    },
    "artists": [
      "Paul Cézanne",
      "Peter Paul Rubens",
      "Hans Holbein the Younger",
      "Yayoi Kusama",
      "Paul Signac",
      "Damien Hirst",
      "Banksy",
      "Donatello",
      "Georges Seurat",
      "Kehinde Wiley",
      "Albrecht Dürer",
      "Kara Walker",
      "Rembrandt van Rijn",
      "Leonardo da Vinci"
    ],
    "hasExhibitions": true,
    "exhibitions": [
      {
        "title": "Colors of the Mediterranean",
        "description": "Vibrant paintings and sculptures inspired by the Mediterranean coast, showcasing the region's rich artistic heritage.",
        "duration": "4 months",
        "type": "Regional Focus",
        "featured": false,
        "ticketPrice": 0
      },
      {
        "title": "Masterpieces of the Sea",
        "description": "A curated collection of maritime art spanning centuries, featuring works that capture the beauty, power, and mystery of the ocean.",
        "duration": "3 months",
        "type": "Permanent Collection",
        "featured": true,
        "ticketPrice": 14
      },
      {
        "title": "Local Artisan Showcase",
        "description": "Featuring works by local artists from ports of call, celebrating regional artistic traditions and contemporary expressions.",
        "duration": "3 months",
        "type": "Cultural Exchange",
        "featured": true,
        "ticketPrice": 0
      },
      {
        "title": "Contemporary Voyages",
        "description": "Modern interpretations of travel and exploration through the lens of contemporary artists from around the world.",
        "duration": "6 months",
        "type": "Featured Exhibition",
        "featured": false,
        "ticketPrice": 0
      },
      {
        "title": "Photography at Sea",
        "description": "Stunning maritime photography collection featuring both historical and contemporary works capturing life on the ocean.",
        "duration": "2 months",
        "type": "Photography Exhibition",
        "featured": true,
        "ticketPrice": 0
      }
    ],
    "hasGuidedTours": false,
    "hasArtClasses": false,
    "faqs": [
      {
        "question": "Can I take photos in the gallery?",
        "answer": "Photography policies vary by exhibition. Please check with gallery staff about photography permissions for specific displays."
      },
      {
        "question": "Do you offer art classes for beginners?",
        "answer": "Absolutely! We offer art classes for all skill levels, from complete beginners to experienced artists. All necessary materials are typically provided."
      },
      {
        "question": "Can I purchase artwork displayed in the gallery?",
        "answer": "Selected pieces in our gallery are available for purchase. Please speak with our gallery staff for information about acquiring specific artworks."
      },
      {
        "question": "How often do you change exhibitions?",
        "answer": "We regularly rotate our exhibitions to provide fresh experiences for our guests. Major exhibitions typically change every 3-6 months."
      }
    ],
    "isPopular": false
  },
  {
    "id": "42ddac2a-15fe-4637-b43e-2888eeba4733",
    "vesselId": "ss--gale",
    "name": "The Gallery at Sea",
    "description": "The Gallery at Sea offers a sophisticated artistic experience with carefully selected works that reflect both maritime heritage and contemporary artistic innovation. Join us for a journey through art and culture.",
    "imageUrl": "/images/art-galleries/mega-yacht-gallery.jpg",
    "hours": {
      "start": "08:00",
      "end": "22:00",
      "duration": "14 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-208-187-6115",
      "contactEmail": "contact@gallery.velarivoyages.com"
    },
    "artists": [
      "Damien Hirst",
      "Claude Monet",
      "Wassily Kandinsky",
      "Sandro Botticelli",
      "Jackson Pollock",
      "Hans Holbein the Younger",
      "Michelangelo Buonarroti",
      "Paul Gauguin",
      "Banksy",
      "Kara Walker",
      "Edgar Degas"
    ],
    "hasExhibitions": false,
    "hasGuidedTours": false,
    "hasArtClasses": false,
    "faqs": [
      {
        "question": "Is the gallery accessible for guests with mobility issues?",
        "answer": "Yes, our gallery is fully accessible with wheelchair access, accessible restrooms, and accommodations for guests with various mobility needs."
      },
      {
        "question": "Can I purchase artwork displayed in the gallery?",
        "answer": "Selected pieces in our gallery are available for purchase. Please speak with our gallery staff for information about acquiring specific artworks."
      },
      {
        "question": "Do you offer art classes for beginners?",
        "answer": "Absolutely! We offer art classes for all skill levels, from complete beginners to experienced artists. All necessary materials are typically provided."
      },
      {
        "question": "What are the art gallery operating hours?",
        "answer": "Our art gallery is typically open from 9:00 AM to 9:00 PM daily. Hours may vary based on port days and special events."
      },
      {
        "question": "Is there an admission fee for the gallery?",
        "answer": "Access to the art gallery is complimentary for all guests. Some special exhibitions, guided tours, and art classes may have an additional charge."
      },
      {
        "question": "Can I take photos in the gallery?",
        "answer": "Photography policies vary by exhibition. Please check with gallery staff about photography permissions for specific displays."
      }
    ],
    "isPopular": false
  },
  {
    "id": "bb3de5b7-1c4b-49d8-b89f-92c584425974",
    "vesselId": "rms--explorer",
    "name": "Oceanview Gallery",
    "description": "Oceanview Gallery presents an inspiring collection of artworks that celebrate the beauty of the sea and the creativity of human expression. Discover masterpieces and emerging talents in our thoughtfully curated space. We offer hands-on art classes to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/eco-friendly-hybrid-ship-gallery.jpg",
    "hours": {
      "start": "08:00",
      "end": "20:00",
      "duration": "12 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-414-895-7692",
      "contactEmail": "welcome@gallery.velarivoyages.com"
    },
    "artists": [
      "Leonardo da Vinci",
      "Raphael Sanzio",
      "Andy Warhol",
      "Banksy",
      "Sandro Botticelli",
      "Rembrandt van Rijn",
      "Wassily Kandinsky",
      "Takashi Murakami",
      "Albrecht Dürer",
      "Titian",
      "Paul Gauguin",
      "Vincent van Gogh",
      "Gustave Caillebotte"
    ],
    "hasExhibitions": false,
    "hasGuidedTours": false,
    "hasArtClasses": true,
    "artClasses": [
      {
        "title": "Photography Composition",
        "description": "Learn the art of photographic composition while documenting your cruise experience and capturing stunning maritime scenes.",
        "duration": "2 hours",
        "skillLevel": "Beginner to Intermediate",
        "materialsIncluded": false,
        "maxParticipants": 15,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Sculpture with Clay",
        "description": "Hands-on sculpture class working with clay to create small maritime-themed pieces, from sea creatures to abstract forms.",
        "duration": "3 hours",
        "skillLevel": "All Levels",
        "materialsIncluded": true,
        "maxParticipants": 8,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Calligraphy and Lettering",
        "description": "Learn the elegant art of calligraphy and modern lettering techniques, perfect for creating personalized travel journals.",
        "duration": "90 minutes",
        "skillLevel": "Beginner",
        "materialsIncluded": true,
        "maxParticipants": 12,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Jewelry Making Workshop",
        "description": "Create unique jewelry pieces using various techniques and materials, incorporating maritime themes and found objects.",
        "duration": "3 hours",
        "skillLevel": "Beginner to Intermediate",
        "materialsIncluded": true,
        "maxParticipants": 8,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Digital Art Creation",
        "description": "Introduction to digital art using tablets and styluses, perfect for modern artists looking to explore new mediums.",
        "duration": "2 hours",
        "skillLevel": "Beginner",
        "materialsIncluded": false,
        "maxParticipants": 6,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "12+"
      },
      {
        "title": "Abstract Painting Workshop",
        "description": "Explore abstract expressionism through color, texture, and movement, creating your own unique maritime-inspired artwork.",
        "duration": "2.5 hours",
        "skillLevel": "Intermediate",
        "materialsIncluded": true,
        "maxParticipants": 8,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "12+"
      },
      {
        "title": "Mixed Media Collage",
        "description": "Combine various materials and techniques to create unique mixed media artworks inspired by your travel experiences.",
        "duration": "2 hours",
        "skillLevel": "All Levels",
        "materialsIncluded": true,
        "maxParticipants": 10,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Portrait Drawing Fundamentals",
        "description": "Master the basics of portrait drawing with professional guidance, focusing on proportion, shading, and expression.",
        "duration": "90 minutes",
        "skillLevel": "All Levels",
        "materialsIncluded": true,
        "maxParticipants": 10,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Printmaking Basics",
        "description": "Introduction to printmaking techniques including linocuts and etchings, creating multiple copies of your original designs.",
        "duration": "2.5 hours",
        "skillLevel": "Intermediate to Advanced",
        "materialsIncluded": true,
        "maxParticipants": 6,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Watercolor Seascapes",
        "description": "Learn to paint beautiful seascapes using watercolor techniques, capturing the ever-changing moods of the ocean.",
        "duration": "2 hours",
        "skillLevel": "Beginner to Intermediate",
        "materialsIncluded": true,
        "maxParticipants": 12,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      }
    ],
    "faqs": [
      {
        "question": "Can I take photos in the gallery?",
        "answer": "Photography policies vary by exhibition. Please check with gallery staff about photography permissions for specific displays."
      },
      {
        "question": "Is there an admission fee for the gallery?",
        "answer": "Access to the art gallery is complimentary for all guests. Some special exhibitions, guided tours, and art classes may have an additional charge."
      },
      {
        "question": "Can I purchase artwork displayed in the gallery?",
        "answer": "Selected pieces in our gallery are available for purchase. Please speak with our gallery staff for information about acquiring specific artworks."
      },
      {
        "question": "What are the art gallery operating hours?",
        "answer": "Our art gallery is typically open from 9:00 AM to 9:00 PM daily. Hours may vary based on port days and special events."
      },
      {
        "question": "How often do you change exhibitions?",
        "answer": "We regularly rotate our exhibitions to provide fresh experiences for our guests. Major exhibitions typically change every 3-6 months."
      }
    ],
    "isPopular": false
  },
  {
    "id": "eadf55ae-8508-4a40-b80e-330dfa023d3d",
    "vesselId": "rms-hamburg-voyager",
    "name": "Seascape Gallery",
    "description": "Seascape Gallery presents an inspiring collection of artworks that celebrate the beauty of the sea and the creativity of human expression. Discover masterpieces and emerging talents in our thoughtfully curated space. We offer rotating exhibitions, expert-led tours, hands-on art classes to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/boutique-cruise-ship-gallery.jpg",
    "hours": {
      "start": "10:00",
      "end": "21:00",
      "duration": "11 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-813-916-3611",
      "contactEmail": "info@gallery.velarivoyages.com"
    },
    "artists": [
      "Jeff Koons",
      "Rembrandt van Rijn",
      "Georges Seurat",
      "Pierre-Auguste Renoir",
      "Yayoi Kusama",
      "Johannes Vermeer",
      "Damien Hirst",
      "Sandro Botticelli",
      "Takashi Murakami",
      "Camille Pissarro",
      "Alfred Sisley",
      "Paul Cézanne"
    ],
    "hasExhibitions": true,
    "exhibitions": [
      {
        "title": "Colors of the Mediterranean",
        "description": "Vibrant paintings and sculptures inspired by the Mediterranean coast, showcasing the region's rich artistic heritage.",
        "duration": "4 months",
        "type": "Regional Focus",
        "featured": false,
        "ticketPrice": 13
      },
      {
        "title": "Abstract Horizons",
        "description": "An exploration of abstract art that captures the infinite possibilities of the horizon line and open waters.",
        "duration": "5 months",
        "type": "Thematic Exhibition",
        "featured": true,
        "ticketPrice": 0
      },
      {
        "title": "Masterpieces of the Sea",
        "description": "A curated collection of maritime art spanning centuries, featuring works that capture the beauty, power, and mystery of the ocean.",
        "duration": "3 months",
        "type": "Permanent Collection",
        "featured": true,
        "ticketPrice": 25
      },
      {
        "title": "Contemporary Voyages",
        "description": "Modern interpretations of travel and exploration through the lens of contemporary artists from around the world.",
        "duration": "6 months",
        "type": "Featured Exhibition",
        "featured": true,
        "ticketPrice": 0
      },
      {
        "title": "Local Artisan Showcase",
        "description": "Featuring works by local artists from ports of call, celebrating regional artistic traditions and contemporary expressions.",
        "duration": "3 months",
        "type": "Cultural Exchange",
        "featured": false,
        "ticketPrice": 0
      }
    ],
    "hasGuidedTours": true,
    "tours": [
      {
        "title": "Behind the Scenes Tour",
        "description": "Exclusive access to conservation areas and storage facilities, discovering how artworks are preserved and maintained aboard the vessel.",
        "duration": "60 minutes",
        "schedule": "Weekends at 3:00 PM",
        "maxParticipants": 8,
        "currency": "USD",
        "bookingRequired": true
      },
      {
        "title": "Curator's Choice Tour",
        "description": "Join our expert curator for an in-depth exploration of featured artworks, learning about artistic techniques, historical context, and hidden details.",
        "duration": "45 minutes",
        "schedule": "Daily at 10:00 AM and 2:00 PM",
        "maxParticipants": 15,
        "currency": "USD",
        "bookingRequired": true
      },
      {
        "title": "Artist Spotlight Tour",
        "description": "Focus on specific artists and their contributions to the maritime art world, with detailed analysis of their most significant works.",
        "duration": "30 minutes",
        "schedule": "Tuesdays and Thursdays at 11:00 AM",
        "maxParticipants": 12,
        "currency": "USD",
        "bookingRequired": true
      }
    ],
    "hasArtClasses": true,
    "artClasses": [
      {
        "title": "Calligraphy and Lettering",
        "description": "Learn the elegant art of calligraphy and modern lettering techniques, perfect for creating personalized travel journals.",
        "duration": "90 minutes",
        "skillLevel": "Beginner",
        "materialsIncluded": true,
        "maxParticipants": 12,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Abstract Painting Workshop",
        "description": "Explore abstract expressionism through color, texture, and movement, creating your own unique maritime-inspired artwork.",
        "duration": "2.5 hours",
        "skillLevel": "Intermediate",
        "materialsIncluded": true,
        "maxParticipants": 8,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Photography Composition",
        "description": "Learn the art of photographic composition while documenting your cruise experience and capturing stunning maritime scenes.",
        "duration": "2 hours",
        "skillLevel": "Beginner to Intermediate",
        "materialsIncluded": false,
        "maxParticipants": 15,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Jewelry Making Workshop",
        "description": "Create unique jewelry pieces using various techniques and materials, incorporating maritime themes and found objects.",
        "duration": "3 hours",
        "skillLevel": "Beginner to Intermediate",
        "materialsIncluded": true,
        "maxParticipants": 8,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Printmaking Basics",
        "description": "Introduction to printmaking techniques including linocuts and etchings, creating multiple copies of your original designs.",
        "duration": "2.5 hours",
        "skillLevel": "Intermediate to Advanced",
        "materialsIncluded": true,
        "maxParticipants": 6,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Portrait Drawing Fundamentals",
        "description": "Master the basics of portrait drawing with professional guidance, focusing on proportion, shading, and expression.",
        "duration": "90 minutes",
        "skillLevel": "All Levels",
        "materialsIncluded": true,
        "maxParticipants": 10,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Mixed Media Collage",
        "description": "Combine various materials and techniques to create unique mixed media artworks inspired by your travel experiences.",
        "duration": "2 hours",
        "skillLevel": "All Levels",
        "materialsIncluded": true,
        "maxParticipants": 10,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Sculpture with Clay",
        "description": "Hands-on sculpture class working with clay to create small maritime-themed pieces, from sea creatures to abstract forms.",
        "duration": "3 hours",
        "skillLevel": "All Levels",
        "materialsIncluded": true,
        "maxParticipants": 8,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "12+"
      },
      {
        "title": "Digital Art Creation",
        "description": "Introduction to digital art using tablets and styluses, perfect for modern artists looking to explore new mediums.",
        "duration": "2 hours",
        "skillLevel": "Beginner",
        "materialsIncluded": false,
        "maxParticipants": 6,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Watercolor Seascapes",
        "description": "Learn to paint beautiful seascapes using watercolor techniques, capturing the ever-changing moods of the ocean.",
        "duration": "2 hours",
        "skillLevel": "Beginner to Intermediate",
        "materialsIncluded": true,
        "maxParticipants": 12,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      }
    ],
    "faqs": [
      {
        "question": "Can I take photos in the gallery?",
        "answer": "Photography policies vary by exhibition. Please check with gallery staff about photography permissions for specific displays."
      },
      {
        "question": "Can I purchase artwork displayed in the gallery?",
        "answer": "Selected pieces in our gallery are available for purchase. Please speak with our gallery staff for information about acquiring specific artworks."
      },
      {
        "question": "What are the art gallery operating hours?",
        "answer": "Our art gallery is typically open from 9:00 AM to 9:00 PM daily. Hours may vary based on port days and special events."
      },
      {
        "question": "Are guided tours available?",
        "answer": "Yes, we offer several guided tour options led by our knowledgeable curators and art experts. Tours can be booked at the gallery or through guest services."
      },
      {
        "question": "How often do you change exhibitions?",
        "answer": "We regularly rotate our exhibitions to provide fresh experiences for our guests. Major exhibitions typically change every 3-6 months."
      }
    ],
    "isPopular": false
  },
  {
    "id": "187977e6-985f-4ae4-8c5c-919a42bc7c93",
    "vesselId": "ps--of-the-deep",
    "name": "Velari Maritime Gallery",
    "description": "Velari Maritime Gallery offers a sophisticated artistic experience with carefully selected works that reflect both maritime heritage and contemporary artistic innovation. Join us for a journey through art and culture. We offer rotating exhibitions, expert-led tours to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/zodiac-equipped-vessel-gallery.jpg",
    "hours": {
      "start": "09:00",
      "end": "22:00",
      "duration": "13 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-417-837-2306",
      "contactEmail": "clientservices@gallery.velarivoyages.com"
    },
    "artists": [
      "Paul Cézanne",
      "Sandro Botticelli",
      "Pierre-Auguste Renoir",
      "Titian",
      "Claude Monet",
      "Vincent van Gogh",
      "Rembrandt van Rijn",
      "Andy Warhol",
      "Jackson Pollock",
      "Banksy"
    ],
    "hasExhibitions": true,
    "exhibitions": [
      {
        "title": "Abstract Horizons",
        "description": "An exploration of abstract art that captures the infinite possibilities of the horizon line and open waters.",
        "duration": "5 months",
        "type": "Thematic Exhibition",
        "featured": false,
        "ticketPrice": 0
      },
      {
        "title": "Sculptures of Movement",
        "description": "Three-dimensional artworks that embody the fluid motion of waves and the dynamic energy of maritime life.",
        "duration": "4 months",
        "type": "Sculpture Exhibition",
        "featured": false,
        "ticketPrice": 0
      },
      {
        "title": "Colors of the Mediterranean",
        "description": "Vibrant paintings and sculptures inspired by the Mediterranean coast, showcasing the region's rich artistic heritage.",
        "duration": "4 months",
        "type": "Regional Focus",
        "featured": false,
        "ticketPrice": 14
      },
      {
        "title": "Contemporary Voyages",
        "description": "Modern interpretations of travel and exploration through the lens of contemporary artists from around the world.",
        "duration": "6 months",
        "type": "Featured Exhibition",
        "featured": false,
        "ticketPrice": 0
      },
      {
        "title": "Photography at Sea",
        "description": "Stunning maritime photography collection featuring both historical and contemporary works capturing life on the ocean.",
        "duration": "2 months",
        "type": "Photography Exhibition",
        "featured": true,
        "ticketPrice": 17
      }
    ],
    "hasGuidedTours": true,
    "tours": [
      {
        "title": "Artist Spotlight Tour",
        "description": "Focus on specific artists and their contributions to the maritime art world, with detailed analysis of their most significant works.",
        "duration": "30 minutes",
        "schedule": "Tuesdays and Thursdays at 11:00 AM",
        "maxParticipants": 12,
        "currency": "USD",
        "bookingRequired": true
      },
      {
        "title": "Behind the Scenes Tour",
        "description": "Exclusive access to conservation areas and storage facilities, discovering how artworks are preserved and maintained aboard the vessel.",
        "duration": "60 minutes",
        "schedule": "Weekends at 3:00 PM",
        "maxParticipants": 8,
        "currency": "USD",
        "bookingRequired": true
      },
      {
        "title": "Curator's Choice Tour",
        "description": "Join our expert curator for an in-depth exploration of featured artworks, learning about artistic techniques, historical context, and hidden details.",
        "duration": "45 minutes",
        "schedule": "Daily at 10:00 AM and 2:00 PM",
        "maxParticipants": 15,
        "currency": "USD",
        "bookingRequired": true
      }
    ],
    "hasArtClasses": false,
    "faqs": [
      {
        "question": "What are the art gallery operating hours?",
        "answer": "Our art gallery is typically open from 9:00 AM to 9:00 PM daily. Hours may vary based on port days and special events."
      },
      {
        "question": "Do you offer art classes for beginners?",
        "answer": "Absolutely! We offer art classes for all skill levels, from complete beginners to experienced artists. All necessary materials are typically provided."
      },
      {
        "question": "Is there an admission fee for the gallery?",
        "answer": "Access to the art gallery is complimentary for all guests. Some special exhibitions, guided tours, and art classes may have an additional charge."
      },
      {
        "question": "Can I purchase artwork displayed in the gallery?",
        "answer": "Selected pieces in our gallery are available for purchase. Please speak with our gallery staff for information about acquiring specific artworks."
      }
    ],
    "isPopular": false
  },
  {
    "id": "bd6cc223-7397-477a-9b2d-70f8c5d73296",
    "vesselId": "my-the--mariner",
    "name": "Maritime Arts Center",
    "description": "Maritime Arts Center offers a sophisticated artistic experience with carefully selected works that reflect both maritime heritage and contemporary artistic innovation. Join us for a journey through art and culture. We offer expert-led tours, hands-on art classes to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/river-cruise-ship-gallery.jpg",
    "hours": {
      "start": "10:00",
      "end": "20:00",
      "duration": "10 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-598-932-8193",
      "contactEmail": "customerservice@gallery.velarivoyages.com"
    },
    "artists": [
      "Jan van Eyck",
      "Peter Paul Rubens",
      "Pierre-Auguste Renoir",
      "Paul Gauguin",
      "Camille Pissarro",
      "Berthe Morisot",
      "Henri de Toulouse-Lautrec",
      "Raphael Sanzio",
      "Kehinde Wiley",
      "Yayoi Kusama",
      "Paul Cézanne",
      "Hans Holbein the Younger"
    ],
    "hasExhibitions": false,
    "hasGuidedTours": true,
    "tours": [
      {
        "title": "Curator's Choice Tour",
        "description": "Join our expert curator for an in-depth exploration of featured artworks, learning about artistic techniques, historical context, and hidden details.",
        "duration": "45 minutes",
        "schedule": "Daily at 10:00 AM and 2:00 PM",
        "maxParticipants": 15,
        "currency": "USD",
        "bookingRequired": true
      },
      {
        "title": "Artist Spotlight Tour",
        "description": "Focus on specific artists and their contributions to the maritime art world, with detailed analysis of their most significant works.",
        "duration": "30 minutes",
        "schedule": "Tuesdays and Thursdays at 11:00 AM",
        "maxParticipants": 12,
        "currency": "USD",
        "bookingRequired": true
      },
      {
        "title": "Behind the Scenes Tour",
        "description": "Exclusive access to conservation areas and storage facilities, discovering how artworks are preserved and maintained aboard the vessel.",
        "duration": "60 minutes",
        "schedule": "Weekends at 3:00 PM",
        "maxParticipants": 8,
        "currency": "USD",
        "bookingRequired": true
      }
    ],
    "hasArtClasses": true,
    "artClasses": [
      {
        "title": "Jewelry Making Workshop",
        "description": "Create unique jewelry pieces using various techniques and materials, incorporating maritime themes and found objects.",
        "duration": "3 hours",
        "skillLevel": "Beginner to Intermediate",
        "materialsIncluded": true,
        "maxParticipants": 8,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Watercolor Seascapes",
        "description": "Learn to paint beautiful seascapes using watercolor techniques, capturing the ever-changing moods of the ocean.",
        "duration": "2 hours",
        "skillLevel": "Beginner to Intermediate",
        "materialsIncluded": true,
        "maxParticipants": 12,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Portrait Drawing Fundamentals",
        "description": "Master the basics of portrait drawing with professional guidance, focusing on proportion, shading, and expression.",
        "duration": "90 minutes",
        "skillLevel": "All Levels",
        "materialsIncluded": true,
        "maxParticipants": 10,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Abstract Painting Workshop",
        "description": "Explore abstract expressionism through color, texture, and movement, creating your own unique maritime-inspired artwork.",
        "duration": "2.5 hours",
        "skillLevel": "Intermediate",
        "materialsIncluded": true,
        "maxParticipants": 8,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Photography Composition",
        "description": "Learn the art of photographic composition while documenting your cruise experience and capturing stunning maritime scenes.",
        "duration": "2 hours",
        "skillLevel": "Beginner to Intermediate",
        "materialsIncluded": false,
        "maxParticipants": 15,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Digital Art Creation",
        "description": "Introduction to digital art using tablets and styluses, perfect for modern artists looking to explore new mediums.",
        "duration": "2 hours",
        "skillLevel": "Beginner",
        "materialsIncluded": false,
        "maxParticipants": 6,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "12+"
      },
      {
        "title": "Mixed Media Collage",
        "description": "Combine various materials and techniques to create unique mixed media artworks inspired by your travel experiences.",
        "duration": "2 hours",
        "skillLevel": "All Levels",
        "materialsIncluded": true,
        "maxParticipants": 10,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "12+"
      },
      {
        "title": "Printmaking Basics",
        "description": "Introduction to printmaking techniques including linocuts and etchings, creating multiple copies of your original designs.",
        "duration": "2.5 hours",
        "skillLevel": "Intermediate to Advanced",
        "materialsIncluded": true,
        "maxParticipants": 6,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Sculpture with Clay",
        "description": "Hands-on sculpture class working with clay to create small maritime-themed pieces, from sea creatures to abstract forms.",
        "duration": "3 hours",
        "skillLevel": "All Levels",
        "materialsIncluded": true,
        "maxParticipants": 8,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Calligraphy and Lettering",
        "description": "Learn the elegant art of calligraphy and modern lettering techniques, perfect for creating personalized travel journals.",
        "duration": "90 minutes",
        "skillLevel": "Beginner",
        "materialsIncluded": true,
        "maxParticipants": 12,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      }
    ],
    "faqs": [
      {
        "question": "Is the gallery accessible for guests with mobility issues?",
        "answer": "Yes, our gallery is fully accessible with wheelchair access, accessible restrooms, and accommodations for guests with various mobility needs."
      },
      {
        "question": "Can I purchase artwork displayed in the gallery?",
        "answer": "Selected pieces in our gallery are available for purchase. Please speak with our gallery staff for information about acquiring specific artworks."
      },
      {
        "question": "Do you offer art classes for beginners?",
        "answer": "Absolutely! We offer art classes for all skill levels, from complete beginners to experienced artists. All necessary materials are typically provided."
      },
      {
        "question": "Are guided tours available?",
        "answer": "Yes, we offer several guided tour options led by our knowledgeable curators and art experts. Tours can be booked at the gallery or through guest services."
      },
      {
        "question": "Is there an admission fee for the gallery?",
        "answer": "Access to the art gallery is complimentary for all guests. Some special exhibitions, guided tours, and art classes may have an additional charge."
      }
    ],
    "isPopular": true
  },
  {
    "id": "28510954-ab84-4043-a79a-884ed5623225",
    "vesselId": "nx--gale",
    "name": "Oceanview Gallery",
    "description": "Oceanview Gallery presents an inspiring collection of artworks that celebrate the beauty of the sea and the creativity of human expression. Discover masterpieces and emerging talents in our thoughtfully curated space. We offer expert-led tours, hands-on art classes to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/catamaran-gallery.jpg",
    "hours": {
      "start": "09:00",
      "end": "21:00",
      "duration": "12 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-479-177-3963",
      "contactEmail": "info@gallery.velarivoyages.com"
    },
    "artists": [
      "Jeff Koons",
      "Pieter Bruegel the Elder",
      "Titian",
      "Berthe Morisot",
      "Pablo Picasso",
      "Damien Hirst",
      "Paul Gauguin",
      "Henri de Toulouse-Lautrec",
      "Jackson Pollock",
      "Vincent van Gogh",
      "Piet Mondrian",
      "Pierre-Auguste Renoir"
    ],
    "hasExhibitions": false,
    "hasGuidedTours": true,
    "tours": [
      {
        "title": "Curator's Choice Tour",
        "description": "Join our expert curator for an in-depth exploration of featured artworks, learning about artistic techniques, historical context, and hidden details.",
        "duration": "45 minutes",
        "schedule": "Daily at 10:00 AM and 2:00 PM",
        "maxParticipants": 15,
        "currency": "USD",
        "bookingRequired": true
      },
      {
        "title": "Behind the Scenes Tour",
        "description": "Exclusive access to conservation areas and storage facilities, discovering how artworks are preserved and maintained aboard the vessel.",
        "duration": "60 minutes",
        "schedule": "Weekends at 3:00 PM",
        "maxParticipants": 8,
        "currency": "USD",
        "bookingRequired": true
      },
      {
        "title": "Artist Spotlight Tour",
        "description": "Focus on specific artists and their contributions to the maritime art world, with detailed analysis of their most significant works.",
        "duration": "30 minutes",
        "schedule": "Tuesdays and Thursdays at 11:00 AM",
        "maxParticipants": 12,
        "currency": "USD",
        "bookingRequired": true
      }
    ],
    "hasArtClasses": true,
    "artClasses": [
      {
        "title": "Digital Art Creation",
        "description": "Introduction to digital art using tablets and styluses, perfect for modern artists looking to explore new mediums.",
        "duration": "2 hours",
        "skillLevel": "Beginner",
        "materialsIncluded": false,
        "maxParticipants": 6,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Printmaking Basics",
        "description": "Introduction to printmaking techniques including linocuts and etchings, creating multiple copies of your original designs.",
        "duration": "2.5 hours",
        "skillLevel": "Intermediate to Advanced",
        "materialsIncluded": true,
        "maxParticipants": 6,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Jewelry Making Workshop",
        "description": "Create unique jewelry pieces using various techniques and materials, incorporating maritime themes and found objects.",
        "duration": "3 hours",
        "skillLevel": "Beginner to Intermediate",
        "materialsIncluded": true,
        "maxParticipants": 8,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Watercolor Seascapes",
        "description": "Learn to paint beautiful seascapes using watercolor techniques, capturing the ever-changing moods of the ocean.",
        "duration": "2 hours",
        "skillLevel": "Beginner to Intermediate",
        "materialsIncluded": true,
        "maxParticipants": 12,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Sculpture with Clay",
        "description": "Hands-on sculpture class working with clay to create small maritime-themed pieces, from sea creatures to abstract forms.",
        "duration": "3 hours",
        "skillLevel": "All Levels",
        "materialsIncluded": true,
        "maxParticipants": 8,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Portrait Drawing Fundamentals",
        "description": "Master the basics of portrait drawing with professional guidance, focusing on proportion, shading, and expression.",
        "duration": "90 minutes",
        "skillLevel": "All Levels",
        "materialsIncluded": true,
        "maxParticipants": 10,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "12+"
      },
      {
        "title": "Mixed Media Collage",
        "description": "Combine various materials and techniques to create unique mixed media artworks inspired by your travel experiences.",
        "duration": "2 hours",
        "skillLevel": "All Levels",
        "materialsIncluded": true,
        "maxParticipants": 10,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "12+"
      },
      {
        "title": "Photography Composition",
        "description": "Learn the art of photographic composition while documenting your cruise experience and capturing stunning maritime scenes.",
        "duration": "2 hours",
        "skillLevel": "Beginner to Intermediate",
        "materialsIncluded": false,
        "maxParticipants": 15,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Calligraphy and Lettering",
        "description": "Learn the elegant art of calligraphy and modern lettering techniques, perfect for creating personalized travel journals.",
        "duration": "90 minutes",
        "skillLevel": "Beginner",
        "materialsIncluded": true,
        "maxParticipants": 12,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      },
      {
        "title": "Abstract Painting Workshop",
        "description": "Explore abstract expressionism through color, texture, and movement, creating your own unique maritime-inspired artwork.",
        "duration": "2.5 hours",
        "skillLevel": "Intermediate",
        "materialsIncluded": true,
        "maxParticipants": 8,
        "currency": "USD",
        "bookingRequired": true,
        "ageRestriction": "All ages"
      }
    ],
    "faqs": [
      {
        "question": "Can I purchase artwork displayed in the gallery?",
        "answer": "Selected pieces in our gallery are available for purchase. Please speak with our gallery staff for information about acquiring specific artworks."
      },
      {
        "question": "Are guided tours available?",
        "answer": "Yes, we offer several guided tour options led by our knowledgeable curators and art experts. Tours can be booked at the gallery or through guest services."
      },
      {
        "question": "Can I take photos in the gallery?",
        "answer": "Photography policies vary by exhibition. Please check with gallery staff about photography permissions for specific displays."
      },
      {
        "question": "Is the gallery accessible for guests with mobility issues?",
        "answer": "Yes, our gallery is fully accessible with wheelchair access, accessible restrooms, and accommodations for guests with various mobility needs."
      }
    ],
    "isPopular": true
  }
];
