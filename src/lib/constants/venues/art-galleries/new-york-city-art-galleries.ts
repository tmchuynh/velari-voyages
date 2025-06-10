import { ArtGallery } from "@/lib/interfaces/services/venues";

/**
 * New York City Art Galleries
 * Generated art gallery data for vessels operating in New York City
 * Each vessel has one comprehensive art gallery with curated collections,
 * exhibitions, guided tours, and art classes based on vessel type and luxury level.
 */

export const newYorkCityArtGalleries: ArtGallery[] = [
  {
    "id": "ebff0b95-022a-4975-bc27-386ff92dbe7b",
    "vesselId": "my--explorer",
    "name": "The Gallery at Sea",
    "description": "Welcome to The Gallery at Sea aboard the MY  Explorer. Immerse yourself in a world-class collection of maritime and contemporary art while sailing the waters near New York City. We offer rotating exhibitions, expert-led tours, hands-on art classes to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/ultra-luxury-cruise-ship-gallery.jpg",
    "hours": {
      "start": "09:00",
      "end": "20:00",
      "duration": "11 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-758-760-7878",
      "contactEmail": "clientservices@gallery.velarivoyages.com"
    },
    "artists": [
      "Jackson Pollock",
      "Berthe Morisot",
      "Damien Hirst",
      "Yayoi Kusama",
      "Andy Warhol",
      "Raphael Sanzio",
      "Michelangelo Buonarroti",
      "Jan van Eyck",
      "Titian",
      "Paul Signac",
      "Camille Pissarro",
      "Caravaggio",
      "Gustave Caillebotte",
      "Vincent van Gogh",
      "Ai Weiwei",
      "Paul Cézanne"
    ],
    "hasExhibitions": true,
    "exhibitions": [
      {
        "title": "Local Artisan Showcase",
        "description": "Featuring works by local artists from ports of call, celebrating regional artistic traditions and contemporary expressions.",
        "duration": "3 months",
        "type": "Cultural Exchange",
        "featured": false,
        "ticketPrice": 13
      },
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
        "featured": false,
        "ticketPrice": 0
      },
      {
        "title": "Colors of the Mediterranean",
        "description": "Vibrant paintings and sculptures inspired by the Mediterranean coast, showcasing the region's rich artistic heritage.",
        "duration": "4 months",
        "type": "Regional Focus",
        "featured": true,
        "ticketPrice": 0
      },
      {
        "title": "Abstract Horizons",
        "description": "An exploration of abstract art that captures the infinite possibilities of the horizon line and open waters.",
        "duration": "5 months",
        "type": "Thematic Exhibition",
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
        "ageRestriction": "12+"
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
        "question": "Is there an admission fee for the gallery?",
        "answer": "Access to the art gallery is complimentary for all guests. Some special exhibitions, guided tours, and art classes may have an additional charge."
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
        "question": "Can I purchase artwork displayed in the gallery?",
        "answer": "Selected pieces in our gallery are available for purchase. Please speak with our gallery staff for information about acquiring specific artworks."
      }
    ],
    "isPopular": true
  },
  {
    "id": "9028a6a2-debb-41c7-8298-70255d2536ee",
    "vesselId": "sy-new-york-city-voyager",
    "name": "Oceanview Gallery",
    "description": "Oceanview Gallery offers a sophisticated artistic experience with carefully selected works that reflect both maritime heritage and contemporary artistic innovation. Join us for a journey through art and culture. We offer rotating exhibitions, expert-led tours, hands-on art classes to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/polar-expedition-ship-gallery.jpg",
    "hours": {
      "start": "09:00",
      "end": "21:00",
      "duration": "12 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-634-647-1835",
      "contactEmail": "reachus@gallery.velarivoyages.com"
    },
    "artists": [
      "Leonardo da Vinci",
      "Rembrandt van Rijn",
      "Kara Walker",
      "Paul Cézanne",
      "Claude Monet",
      "Henri Rousseau",
      "Gustave Caillebotte",
      "Damien Hirst",
      "Roy Lichtenstein"
    ],
    "hasExhibitions": true,
    "exhibitions": [
      {
        "title": "Contemporary Voyages",
        "description": "Modern interpretations of travel and exploration through the lens of contemporary artists from around the world.",
        "duration": "6 months",
        "type": "Featured Exhibition",
        "featured": true,
        "ticketPrice": 17
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
        "featured": true,
        "ticketPrice": 25
      },
      {
        "title": "Masterpieces of the Sea",
        "description": "A curated collection of maritime art spanning centuries, featuring works that capture the beauty, power, and mystery of the ocean.",
        "duration": "3 months",
        "type": "Permanent Collection",
        "featured": false,
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
        "question": "Are guided tours available?",
        "answer": "Yes, we offer several guided tour options led by our knowledgeable curators and art experts. Tours can be booked at the gallery or through guest services."
      },
      {
        "question": "Do you offer art classes for beginners?",
        "answer": "Absolutely! We offer art classes for all skill levels, from complete beginners to experienced artists. All necessary materials are typically provided."
      },
      {
        "question": "Can I take photos in the gallery?",
        "answer": "Photography policies vary by exhibition. Please check with gallery staff about photography permissions for specific displays."
      },
      {
        "question": "How often do you change exhibitions?",
        "answer": "We regularly rotate our exhibitions to provide fresh experiences for our guests. Major exhibitions typically change every 3-6 months."
      },
      {
        "question": "Is the gallery accessible for guests with mobility issues?",
        "answer": "Yes, our gallery is fully accessible with wheelchair access, accessible restrooms, and accommodations for guests with various mobility needs."
      }
    ],
    "isPopular": false
  },
  {
    "id": "13e23f93-9282-4a3f-adb7-3ab58fb49082",
    "vesselId": "sy--of-the-deep",
    "name": "SY  of the Deep Art Gallery",
    "description": "Experience art like never before at SY  of the Deep Art Gallery. Our floating gallery combines the serenity of ocean travel with the inspiration of great art, creating a unique cultural experience. We offer rotating exhibitions, hands-on art classes to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/adults-only-ship-gallery.jpg",
    "hours": {
      "start": "08:00",
      "end": "20:00",
      "duration": "12 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-837-378-8001",
      "contactEmail": "feedback@gallery.velarivoyages.com"
    },
    "artists": [
      "Rembrandt van Rijn",
      "Leonardo da Vinci",
      "Camille Pissarro",
      "Pieter Bruegel the Elder",
      "Giotto di Bondone",
      "Georges Seurat",
      "Jan van Eyck",
      "Banksy",
      "Roy Lichtenstein"
    ],
    "hasExhibitions": true,
    "exhibitions": [
      {
        "title": "Digital Art Revolution",
        "description": "Cutting-edge digital and interactive art installations that push the boundaries of traditional gallery experiences.",
        "duration": "6 months",
        "type": "Interactive Exhibition",
        "featured": false,
        "ticketPrice": 0
      },
      {
        "title": "Masterpieces of the Sea",
        "description": "A curated collection of maritime art spanning centuries, featuring works that capture the beauty, power, and mystery of the ocean.",
        "duration": "3 months",
        "type": "Permanent Collection",
        "featured": true,
        "ticketPrice": 24
      },
      {
        "title": "Abstract Horizons",
        "description": "An exploration of abstract art that captures the infinite possibilities of the horizon line and open waters.",
        "duration": "5 months",
        "type": "Thematic Exhibition",
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
        "title": "Colors of the Mediterranean",
        "description": "Vibrant paintings and sculptures inspired by the Mediterranean coast, showcasing the region's rich artistic heritage.",
        "duration": "4 months",
        "type": "Regional Focus",
        "featured": false,
        "ticketPrice": 0
      }
    ],
    "hasGuidedTours": false,
    "hasArtClasses": true,
    "artClasses": [
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
        "title": "Photography Composition",
        "description": "Learn the art of photographic composition while documenting your cruise experience and capturing stunning maritime scenes.",
        "duration": "2 hours",
        "skillLevel": "Beginner to Intermediate",
        "materialsIncluded": false,
        "maxParticipants": 15,
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
      }
    ],
    "faqs": [
      {
        "question": "Are guided tours available?",
        "answer": "Yes, we offer several guided tour options led by our knowledgeable curators and art experts. Tours can be booked at the gallery or through guest services."
      },
      {
        "question": "Can I purchase artwork displayed in the gallery?",
        "answer": "Selected pieces in our gallery are available for purchase. Please speak with our gallery staff for information about acquiring specific artworks."
      },
      {
        "question": "Is there an admission fee for the gallery?",
        "answer": "Access to the art gallery is complimentary for all guests. Some special exhibitions, guided tours, and art classes may have an additional charge."
      },
      {
        "question": "Do you offer art classes for beginners?",
        "answer": "Absolutely! We offer art classes for all skill levels, from complete beginners to experienced artists. All necessary materials are typically provided."
      },
      {
        "question": "Is the gallery accessible for guests with mobility issues?",
        "answer": "Yes, our gallery is fully accessible with wheelchair access, accessible restrooms, and accommodations for guests with various mobility needs."
      },
      {
        "question": "What are the art gallery operating hours?",
        "answer": "Our art gallery is typically open from 9:00 AM to 9:00 PM daily. Hours may vary based on port days and special events."
      }
    ],
    "isPopular": true
  },
  {
    "id": "eb2f2ef5-04f5-42dc-9a95-c1412e9037b7",
    "vesselId": "ms-the--mariner",
    "name": "Horizon Arts Gallery",
    "description": "Horizon Arts Gallery offers a sophisticated artistic experience with carefully selected works that reflect both maritime heritage and contemporary artistic innovation. Join us for a journey through art and culture. We offer rotating exhibitions, expert-led tours, hands-on art classes to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/expedition-ship-gallery.jpg",
    "hours": {
      "start": "08:00",
      "end": "22:00",
      "duration": "14 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-374-591-4015",
      "contactEmail": "contact@gallery.velarivoyages.com"
    },
    "artists": [
      "Peter Paul Rubens",
      "Georges Seurat",
      "Roy Lichtenstein",
      "Johannes Vermeer",
      "Paul Signac",
      "Gustave Caillebotte",
      "Edgar Degas",
      "Mark Rothko",
      "Donatello",
      "Paul Cézanne",
      "Leonardo da Vinci",
      "Ai Weiwei",
      "Henri de Toulouse-Lautrec",
      "Damien Hirst",
      "Michelangelo Buonarroti"
    ],
    "hasExhibitions": true,
    "exhibitions": [
      {
        "title": "Photography at Sea",
        "description": "Stunning maritime photography collection featuring both historical and contemporary works capturing life on the ocean.",
        "duration": "2 months",
        "type": "Photography Exhibition",
        "featured": true,
        "ticketPrice": 0
      },
      {
        "title": "Digital Art Revolution",
        "description": "Cutting-edge digital and interactive art installations that push the boundaries of traditional gallery experiences.",
        "duration": "6 months",
        "type": "Interactive Exhibition",
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
        "title": "Local Artisan Showcase",
        "description": "Featuring works by local artists from ports of call, celebrating regional artistic traditions and contemporary expressions.",
        "duration": "3 months",
        "type": "Cultural Exchange",
        "featured": false,
        "ticketPrice": 0
      },
      {
        "title": "Abstract Horizons",
        "description": "An exploration of abstract art that captures the infinite possibilities of the horizon line and open waters.",
        "duration": "5 months",
        "type": "Thematic Exhibition",
        "featured": false,
        "ticketPrice": 21
      }
    ],
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
        "title": "Calligraphy and Lettering",
        "description": "Learn the elegant art of calligraphy and modern lettering techniques, perfect for creating personalized travel journals.",
        "duration": "90 minutes",
        "skillLevel": "Beginner",
        "materialsIncluded": true,
        "maxParticipants": 12,
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
        "title": "Mixed Media Collage",
        "description": "Combine various materials and techniques to create unique mixed media artworks inspired by your travel experiences.",
        "duration": "2 hours",
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
        "question": "What are the art gallery operating hours?",
        "answer": "Our art gallery is typically open from 9:00 AM to 9:00 PM daily. Hours may vary based on port days and special events."
      },
      {
        "question": "How often do you change exhibitions?",
        "answer": "We regularly rotate our exhibitions to provide fresh experiences for our guests. Major exhibitions typically change every 3-6 months."
      },
      {
        "question": "Is there an admission fee for the gallery?",
        "answer": "Access to the art gallery is complimentary for all guests. Some special exhibitions, guided tours, and art classes may have an additional charge."
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
        "question": "Can I purchase artwork displayed in the gallery?",
        "answer": "Selected pieces in our gallery are available for purchase. Please speak with our gallery staff for information about acquiring specific artworks."
      }
    ],
    "isPopular": false
  },
  {
    "id": "1661cde8-ae70-4738-be57-f80936c2fe48",
    "vesselId": "my--gale",
    "name": "The Gallery at Sea",
    "description": "The Gallery at Sea presents an inspiring collection of artworks that celebrate the beauty of the sea and the creativity of human expression. Discover masterpieces and emerging talents in our thoughtfully curated space. We offer rotating exhibitions, expert-led tours to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/superyacht-gallery.jpg",
    "hours": {
      "start": "08:00",
      "end": "20:00",
      "duration": "12 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-713-242-8612",
      "contactEmail": "hi@gallery.velarivoyages.com"
    },
    "artists": [
      "Henri de Toulouse-Lautrec",
      "Ai Weiwei",
      "Peter Paul Rubens",
      "Giotto di Bondone",
      "Kara Walker",
      "Alfred Sisley",
      "Jeff Koons",
      "Vincent van Gogh",
      "Gustave Caillebotte",
      "Paul Gauguin",
      "Henri Rousseau",
      "Roy Lichtenstein"
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
        "ticketPrice": 0
      },
      {
        "title": "Photography at Sea",
        "description": "Stunning maritime photography collection featuring both historical and contemporary works capturing life on the ocean.",
        "duration": "2 months",
        "type": "Photography Exhibition",
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
      },
      {
        "title": "Local Artisan Showcase",
        "description": "Featuring works by local artists from ports of call, celebrating regional artistic traditions and contemporary expressions.",
        "duration": "3 months",
        "type": "Cultural Exchange",
        "featured": true,
        "ticketPrice": 23
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
        "question": "Is the gallery accessible for guests with mobility issues?",
        "answer": "Yes, our gallery is fully accessible with wheelchair access, accessible restrooms, and accommodations for guests with various mobility needs."
      },
      {
        "question": "Is there an admission fee for the gallery?",
        "answer": "Access to the art gallery is complimentary for all guests. Some special exhibitions, guided tours, and art classes may have an additional charge."
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
        "question": "Can I purchase artwork displayed in the gallery?",
        "answer": "Selected pieces in our gallery are available for purchase. Please speak with our gallery staff for information about acquiring specific artworks."
      }
    ],
    "isPopular": true
  },
  {
    "id": "085114f8-6e76-4b88-b7a3-56e53b78f022",
    "vesselId": "rms--explorer",
    "name": "Oceanview Gallery",
    "description": "Oceanview Gallery presents an inspiring collection of artworks that celebrate the beauty of the sea and the creativity of human expression. Discover masterpieces and emerging talents in our thoughtfully curated space. We offer expert-led tours to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/eco-friendly-hybrid-ship-gallery.jpg",
    "hours": {
      "start": "10:00",
      "end": "20:00",
      "duration": "10 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-354-258-7159",
      "contactEmail": "team@gallery.velarivoyages.com"
    },
    "artists": [
      "Berthe Morisot",
      "Peter Paul Rubens",
      "Kehinde Wiley",
      "Georges Seurat",
      "Paul Gauguin",
      "Pablo Picasso",
      "Piet Mondrian",
      "Leonardo da Vinci"
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
    "hasArtClasses": false,
    "faqs": [
      {
        "question": "Is the gallery accessible for guests with mobility issues?",
        "answer": "Yes, our gallery is fully accessible with wheelchair access, accessible restrooms, and accommodations for guests with various mobility needs."
      },
      {
        "question": "How often do you change exhibitions?",
        "answer": "We regularly rotate our exhibitions to provide fresh experiences for our guests. Major exhibitions typically change every 3-6 months."
      },
      {
        "question": "Can I take photos in the gallery?",
        "answer": "Photography policies vary by exhibition. Please check with gallery staff about photography permissions for specific displays."
      },
      {
        "question": "Do you offer art classes for beginners?",
        "answer": "Absolutely! We offer art classes for all skill levels, from complete beginners to experienced artists. All necessary materials are typically provided."
      }
    ],
    "isPopular": true
  },
  {
    "id": "b4c72032-4884-4adb-81d2-2b9e42b2a0d0",
    "vesselId": "rms-new-york-city-voyager",
    "name": "RMS New York City Voyager Art Gallery",
    "description": "RMS New York City Voyager Art Gallery presents an inspiring collection of artworks that celebrate the beauty of the sea and the creativity of human expression. Discover masterpieces and emerging talents in our thoughtfully curated space. We offer rotating exhibitions, expert-led tours, hands-on art classes to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/small-ocean-ship-gallery.jpg",
    "hours": {
      "start": "09:00",
      "end": "21:00",
      "duration": "12 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-360-484-4363",
      "contactEmail": "hello@gallery.velarivoyages.com"
    },
    "artists": [
      "Leonardo da Vinci",
      "Michelangelo Buonarroti",
      "Roy Lichtenstein",
      "Camille Pissarro",
      "Wassily Kandinsky",
      "Pablo Picasso",
      "Titian",
      "Raphael Sanzio",
      "Henri Matisse",
      "Pierre-Auguste Renoir",
      "Yayoi Kusama",
      "Ai Weiwei",
      "Claude Monet",
      "Sandro Botticelli"
    ],
    "hasExhibitions": true,
    "exhibitions": [
      {
        "title": "Photography at Sea",
        "description": "Stunning maritime photography collection featuring both historical and contemporary works capturing life on the ocean.",
        "duration": "2 months",
        "type": "Photography Exhibition",
        "featured": false,
        "ticketPrice": 0
      },
      {
        "title": "Sculptures of Movement",
        "description": "Three-dimensional artworks that embody the fluid motion of waves and the dynamic energy of maritime life.",
        "duration": "4 months",
        "type": "Sculpture Exhibition",
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
        "title": "Masterpieces of the Sea",
        "description": "A curated collection of maritime art spanning centuries, featuring works that capture the beauty, power, and mystery of the ocean.",
        "duration": "3 months",
        "type": "Permanent Collection",
        "featured": true,
        "ticketPrice": 0
      },
      {
        "title": "Abstract Horizons",
        "description": "An exploration of abstract art that captures the infinite possibilities of the horizon line and open waters.",
        "duration": "5 months",
        "type": "Thematic Exhibition",
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
        "title": "Calligraphy and Lettering",
        "description": "Learn the elegant art of calligraphy and modern lettering techniques, perfect for creating personalized travel journals.",
        "duration": "90 minutes",
        "skillLevel": "Beginner",
        "materialsIncluded": true,
        "maxParticipants": 12,
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
        "ageRestriction": "12+"
      }
    ],
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
        "question": "Are guided tours available?",
        "answer": "Yes, we offer several guided tour options led by our knowledgeable curators and art experts. Tours can be booked at the gallery or through guest services."
      },
      {
        "question": "Can I purchase artwork displayed in the gallery?",
        "answer": "Selected pieces in our gallery are available for purchase. Please speak with our gallery staff for information about acquiring specific artworks."
      },
      {
        "question": "Is there an admission fee for the gallery?",
        "answer": "Access to the art gallery is complimentary for all guests. Some special exhibitions, guided tours, and art classes may have an additional charge."
      }
    ],
    "isPopular": false
  },
  {
    "id": "779d0092-a375-46d4-a948-468e094c0760",
    "vesselId": "ly--of-the-deep",
    "name": "Oceanview Gallery",
    "description": "Experience art like never before at Oceanview Gallery. Our floating gallery combines the serenity of ocean travel with the inspiration of great art, creating a unique cultural experience. We offer rotating exhibitions, expert-led tours, hands-on art classes to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/adults-only-ship-gallery.jpg",
    "hours": {
      "start": "10:00",
      "end": "21:00",
      "duration": "11 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-318-946-8645",
      "contactEmail": "services@gallery.velarivoyages.com"
    },
    "artists": [
      "Rembrandt van Rijn",
      "Paul Signac",
      "Sandro Botticelli",
      "Alfred Sisley",
      "Vincent van Gogh",
      "Pierre-Auguste Renoir",
      "Pieter Bruegel the Elder",
      "Ai Weiwei",
      "Andy Warhol",
      "Berthe Morisot"
    ],
    "hasExhibitions": true,
    "exhibitions": [
      {
        "title": "Colors of the Mediterranean",
        "description": "Vibrant paintings and sculptures inspired by the Mediterranean coast, showcasing the region's rich artistic heritage.",
        "duration": "4 months",
        "type": "Regional Focus",
        "featured": true,
        "ticketPrice": 0
      },
      {
        "title": "Abstract Horizons",
        "description": "An exploration of abstract art that captures the infinite possibilities of the horizon line and open waters.",
        "duration": "5 months",
        "type": "Thematic Exhibition",
        "featured": false,
        "ticketPrice": 13
      },
      {
        "title": "Contemporary Voyages",
        "description": "Modern interpretations of travel and exploration through the lens of contemporary artists from around the world.",
        "duration": "6 months",
        "type": "Featured Exhibition",
        "featured": false,
        "ticketPrice": 25
      },
      {
        "title": "Digital Art Revolution",
        "description": "Cutting-edge digital and interactive art installations that push the boundaries of traditional gallery experiences.",
        "duration": "6 months",
        "type": "Interactive Exhibition",
        "featured": true,
        "ticketPrice": 0
      },
      {
        "title": "Masterpieces of the Sea",
        "description": "A curated collection of maritime art spanning centuries, featuring works that capture the beauty, power, and mystery of the ocean.",
        "duration": "3 months",
        "type": "Permanent Collection",
        "featured": false,
        "ticketPrice": 11
      }
    ],
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
        "question": "How often do you change exhibitions?",
        "answer": "We regularly rotate our exhibitions to provide fresh experiences for our guests. Major exhibitions typically change every 3-6 months."
      },
      {
        "question": "Are guided tours available?",
        "answer": "Yes, we offer several guided tour options led by our knowledgeable curators and art experts. Tours can be booked at the gallery or through guest services."
      },
      {
        "question": "Can I purchase artwork displayed in the gallery?",
        "answer": "Selected pieces in our gallery are available for purchase. Please speak with our gallery staff for information about acquiring specific artworks."
      },
      {
        "question": "What are the art gallery operating hours?",
        "answer": "Our art gallery is typically open from 9:00 AM to 9:00 PM daily. Hours may vary based on port days and special events."
      }
    ],
    "isPopular": true
  },
  {
    "id": "91a5149a-3b05-4af8-9821-cdc04055639b",
    "vesselId": "mv-the--mariner",
    "name": "Seascape Gallery",
    "description": "Experience art like never before at Seascape Gallery. Our floating gallery combines the serenity of ocean travel with the inspiration of great art, creating a unique cultural experience. We offer expert-led tours to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/zodiac-equipped-vessel-gallery.jpg",
    "hours": {
      "start": "09:00",
      "end": "20:00",
      "duration": "11 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-230-615-9155",
      "contactEmail": "welcome@gallery.velarivoyages.com"
    },
    "artists": [
      "Sandro Botticelli",
      "Kehinde Wiley",
      "Claude Monet",
      "Gustave Caillebotte",
      "Jan van Eyck",
      "Hans Holbein the Younger",
      "Ai Weiwei",
      "Leonardo da Vinci",
      "Henri Rousseau",
      "Damien Hirst",
      "Paul Gauguin",
      "Paul Cézanne",
      "Alfred Sisley"
    ],
    "hasExhibitions": false,
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
        "question": "What are the art gallery operating hours?",
        "answer": "Our art gallery is typically open from 9:00 AM to 9:00 PM daily. Hours may vary based on port days and special events."
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
      },
      {
        "question": "How often do you change exhibitions?",
        "answer": "We regularly rotate our exhibitions to provide fresh experiences for our guests. Major exhibitions typically change every 3-6 months."
      },
      {
        "question": "Do you offer art classes for beginners?",
        "answer": "Absolutely! We offer art classes for all skill levels, from complete beginners to experienced artists. All necessary materials are typically provided."
      }
    ],
    "isPopular": true
  },
  {
    "id": "c7e66b00-8822-4928-bad5-e543d5cd7a5f",
    "vesselId": "nb--gale",
    "name": "NB  Gale Art Gallery",
    "description": "NB  Gale Art Gallery offers a sophisticated artistic experience with carefully selected works that reflect both maritime heritage and contemporary artistic innovation. Join us for a journey through art and culture. We offer hands-on art classes to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/mega-yacht-gallery.jpg",
    "hours": {
      "start": "09:00",
      "end": "20:00",
      "duration": "11 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-528-763-3762",
      "contactEmail": "reachus@gallery.velarivoyages.com"
    },
    "artists": [
      "Ai Weiwei",
      "Vincent van Gogh",
      "Pierre-Auguste Renoir",
      "Mark Rothko",
      "Wassily Kandinsky",
      "Michelangelo Buonarroti",
      "Albrecht Dürer",
      "Johannes Vermeer",
      "Caravaggio",
      "Peter Paul Rubens",
      "Takashi Murakami",
      "Claude Monet",
      "Henri Rousseau"
    ],
    "hasExhibitions": false,
    "hasGuidedTours": false,
    "hasArtClasses": true,
    "artClasses": [
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
      }
    ],
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
        "question": "Is there an admission fee for the gallery?",
        "answer": "Access to the art gallery is complimentary for all guests. Some special exhibitions, guided tours, and art classes may have an additional charge."
      },
      {
        "question": "Are guided tours available?",
        "answer": "Yes, we offer several guided tour options led by our knowledgeable curators and art experts. Tours can be booked at the gallery or through guest services."
      }
    ],
    "isPopular": true
  }
];
