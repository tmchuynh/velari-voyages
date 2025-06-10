import { ArtGallery } from "@/lib/interfaces/services/venues";

/**
 * Malta Art Galleries
 * Generated art gallery data for vessels operating in Malta
 * Each vessel has one comprehensive art gallery with curated collections,
 * exhibitions, guided tours, and art classes based on vessel type and luxury level.
 */

export const maltaArtGalleries: ArtGallery[] = [
  {
    "id": "5b59f72e-9771-4a7d-a4e6-4c22128272ee",
    "vesselId": "nx--explorer",
    "name": "Velari Maritime Gallery",
    "description": "Velari Maritime Gallery offers a sophisticated artistic experience with carefully selected works that reflect both maritime heritage and contemporary artistic innovation. Join us for a journey through art and culture. We offer rotating exhibitions, expert-led tours, hands-on art classes to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/adults-only-ship-gallery.jpg",
    "hours": {
      "start": "10:00",
      "end": "21:00",
      "duration": "11 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-940-812-8717",
      "contactEmail": "contact@gallery.velarivoyages.com"
    },
    "artists": [
      "Pierre-Auguste Renoir",
      "Titian",
      "Damien Hirst",
      "Ai Weiwei",
      "Jackson Pollock",
      "Vincent van Gogh",
      "Kara Walker",
      "Piet Mondrian",
      "Henri Rousseau",
      "Raphael Sanzio",
      "Kehinde Wiley",
      "Andy Warhol",
      "Johannes Vermeer"
    ],
    "hasExhibitions": true,
    "exhibitions": [
      {
        "title": "Masterpieces of the Sea",
        "description": "A curated collection of maritime art spanning centuries, featuring works that capture the beauty, power, and mystery of the ocean.",
        "duration": "3 months",
        "type": "Permanent Collection",
        "featured": true,
        "ticketPrice": 15
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
        "title": "Colors of the Mediterranean",
        "description": "Vibrant paintings and sculptures inspired by the Mediterranean coast, showcasing the region's rich artistic heritage.",
        "duration": "4 months",
        "type": "Regional Focus",
        "featured": false,
        "ticketPrice": 0
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
    "hasArtClasses": true,
    "artClasses": [
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
        "question": "Do you offer art classes for beginners?",
        "answer": "Absolutely! We offer art classes for all skill levels, from complete beginners to experienced artists. All necessary materials are typically provided."
      },
      {
        "question": "Is there an admission fee for the gallery?",
        "answer": "Access to the art gallery is complimentary for all guests. Some special exhibitions, guided tours, and art classes may have an additional charge."
      }
    ],
    "isPopular": false
  },
  {
    "id": "b56090df-b3dc-4e41-9592-fe76349f91ee",
    "vesselId": "my-malta-voyager",
    "name": "MY Malta Voyager Art Gallery",
    "description": "Experience art like never before at MY Malta Voyager Art Gallery. Our floating gallery combines the serenity of ocean travel with the inspiration of great art, creating a unique cultural experience. We offer rotating exhibitions, expert-led tours, hands-on art classes to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/ice-class-ship-gallery.jpg",
    "hours": {
      "start": "09:00",
      "end": "22:00",
      "duration": "13 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-423-221-6819",
      "contactEmail": "ask@gallery.velarivoyages.com"
    },
    "artists": [
      "Albrecht Dürer",
      "Jan van Eyck",
      "Pierre-Auguste Renoir",
      "Piet Mondrian",
      "Jackson Pollock",
      "Mary Cassatt",
      "Georges Seurat",
      "Giotto di Bondone",
      "Berthe Morisot"
    ],
    "hasExhibitions": true,
    "exhibitions": [
      {
        "title": "Sculptures of Movement",
        "description": "Three-dimensional artworks that embody the fluid motion of waves and the dynamic energy of maritime life.",
        "duration": "4 months",
        "type": "Sculpture Exhibition",
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
        "title": "Local Artisan Showcase",
        "description": "Featuring works by local artists from ports of call, celebrating regional artistic traditions and contemporary expressions.",
        "duration": "3 months",
        "type": "Cultural Exchange",
        "featured": true,
        "ticketPrice": 15
      },
      {
        "title": "Abstract Horizons",
        "description": "An exploration of abstract art that captures the infinite possibilities of the horizon line and open waters.",
        "duration": "5 months",
        "type": "Thematic Exhibition",
        "featured": false,
        "ticketPrice": 14
      },
      {
        "title": "Colors of the Mediterranean",
        "description": "Vibrant paintings and sculptures inspired by the Mediterranean coast, showcasing the region's rich artistic heritage.",
        "duration": "4 months",
        "type": "Regional Focus",
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
        "question": "Is there an admission fee for the gallery?",
        "answer": "Access to the art gallery is complimentary for all guests. Some special exhibitions, guided tours, and art classes may have an additional charge."
      },
      {
        "question": "What are the art gallery operating hours?",
        "answer": "Our art gallery is typically open from 9:00 AM to 9:00 PM daily. Hours may vary based on port days and special events."
      },
      {
        "question": "Can I purchase artwork displayed in the gallery?",
        "answer": "Selected pieces in our gallery are available for purchase. Please speak with our gallery staff for information about acquiring specific artworks."
      }
    ],
    "isPopular": false
  },
  {
    "id": "fcdfd2ed-18bd-405e-8df2-a9680d6bf8be",
    "vesselId": "rv--of-the-deep",
    "name": "Seascape Gallery",
    "description": "Welcome to Seascape Gallery aboard the RV  of the Deep. Immerse yourself in a world-class collection of maritime and contemporary art while sailing the waters near Malta. We offer rotating exhibitions to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/superyacht-gallery.jpg",
    "hours": {
      "start": "09:00",
      "end": "22:00",
      "duration": "13 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-615-624-1034",
      "contactEmail": "services@gallery.velarivoyages.com"
    },
    "artists": [
      "Pieter Bruegel the Elder",
      "Leonardo da Vinci",
      "Michelangelo Buonarroti",
      "Raphael Sanzio",
      "Andy Warhol",
      "Mary Cassatt",
      "Sandro Botticelli",
      "Piet Mondrian",
      "Banksy",
      "Rembrandt van Rijn",
      "Gustave Caillebotte",
      "Vincent van Gogh",
      "Berthe Morisot"
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
        "title": "Photography at Sea",
        "description": "Stunning maritime photography collection featuring both historical and contemporary works capturing life on the ocean.",
        "duration": "2 months",
        "type": "Photography Exhibition",
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
        "title": "Abstract Horizons",
        "description": "An exploration of abstract art that captures the infinite possibilities of the horizon line and open waters.",
        "duration": "5 months",
        "type": "Thematic Exhibition",
        "featured": true,
        "ticketPrice": 13
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
    "hasGuidedTours": false,
    "hasArtClasses": false,
    "faqs": [
      {
        "question": "Is there an admission fee for the gallery?",
        "answer": "Access to the art gallery is complimentary for all guests. Some special exhibitions, guided tours, and art classes may have an additional charge."
      },
      {
        "question": "Can I purchase artwork displayed in the gallery?",
        "answer": "Selected pieces in our gallery are available for purchase. Please speak with our gallery staff for information about acquiring specific artworks."
      },
      {
        "question": "How often do you change exhibitions?",
        "answer": "We regularly rotate our exhibitions to provide fresh experiences for our guests. Major exhibitions typically change every 3-6 months."
      },
      {
        "question": "Is the gallery accessible for guests with mobility issues?",
        "answer": "Yes, our gallery is fully accessible with wheelchair access, accessible restrooms, and accommodations for guests with various mobility needs."
      },
      {
        "question": "What are the art gallery operating hours?",
        "answer": "Our art gallery is typically open from 9:00 AM to 9:00 PM daily. Hours may vary based on port days and special events."
      },
      {
        "question": "Do you offer art classes for beginners?",
        "answer": "Absolutely! We offer art classes for all skill levels, from complete beginners to experienced artists. All necessary materials are typically provided."
      }
    ],
    "isPopular": false
  },
  {
    "id": "e53b66e3-7ecf-45be-98b8-c1cbff31b59a",
    "vesselId": "ps-the--mariner",
    "name": "Oceanview Gallery",
    "description": "Oceanview Gallery presents an inspiring collection of artworks that celebrate the beauty of the sea and the creativity of human expression. Discover masterpieces and emerging talents in our thoughtfully curated space. We offer rotating exhibitions, hands-on art classes to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/boutique-cruise-ship-gallery.jpg",
    "hours": {
      "start": "10:00",
      "end": "21:00",
      "duration": "11 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-992-753-8485",
      "contactEmail": "clientservices@gallery.velarivoyages.com"
    },
    "artists": [
      "Leonardo da Vinci",
      "Claude Monet",
      "Mary Cassatt",
      "Pierre-Auguste Renoir",
      "Giotto di Bondone",
      "Georges Seurat",
      "Jan van Eyck",
      "Paul Gauguin",
      "Caravaggio",
      "Michelangelo Buonarroti"
    ],
    "hasExhibitions": true,
    "exhibitions": [
      {
        "title": "Contemporary Voyages",
        "description": "Modern interpretations of travel and exploration through the lens of contemporary artists from around the world.",
        "duration": "6 months",
        "type": "Featured Exhibition",
        "featured": true,
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
        "title": "Local Artisan Showcase",
        "description": "Featuring works by local artists from ports of call, celebrating regional artistic traditions and contemporary expressions.",
        "duration": "3 months",
        "type": "Cultural Exchange",
        "featured": false,
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
        "title": "Photography at Sea",
        "description": "Stunning maritime photography collection featuring both historical and contemporary works capturing life on the ocean.",
        "duration": "2 months",
        "type": "Photography Exhibition",
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
        "title": "Digital Art Creation",
        "description": "Introduction to digital art using tablets and styluses, perfect for modern artists looking to explore new mediums.",
        "duration": "2 hours",
        "skillLevel": "Beginner",
        "materialsIncluded": false,
        "maxParticipants": 6,
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
        "question": "What are the art gallery operating hours?",
        "answer": "Our art gallery is typically open from 9:00 AM to 9:00 PM daily. Hours may vary based on port days and special events."
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
    "isPopular": false
  },
  {
    "id": "38c69d8c-bc23-4571-a5e1-f73c4aab49a7",
    "vesselId": "rms--gale",
    "name": "Aqua Fine Arts",
    "description": "Aqua Fine Arts presents an inspiring collection of artworks that celebrate the beauty of the sea and the creativity of human expression. Discover masterpieces and emerging talents in our thoughtfully curated space.",
    "imageUrl": "/images/art-galleries/polar-expedition-ship-gallery.jpg",
    "hours": {
      "start": "09:00",
      "end": "21:00",
      "duration": "12 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-906-899-9427",
      "contactEmail": "mail@gallery.velarivoyages.com"
    },
    "artists": [
      "Henri Matisse",
      "Gustave Caillebotte",
      "Jackson Pollock",
      "Pierre-Auguste Renoir",
      "Kara Walker",
      "Jan van Eyck",
      "Donatello",
      "Giotto di Bondone"
    ],
    "hasExhibitions": false,
    "hasGuidedTours": false,
    "hasArtClasses": false,
    "faqs": [
      {
        "question": "Do you offer art classes for beginners?",
        "answer": "Absolutely! We offer art classes for all skill levels, from complete beginners to experienced artists. All necessary materials are typically provided."
      },
      {
        "question": "Are guided tours available?",
        "answer": "Yes, we offer several guided tour options led by our knowledgeable curators and art experts. Tours can be booked at the gallery or through guest services."
      },
      {
        "question": "What are the art gallery operating hours?",
        "answer": "Our art gallery is typically open from 9:00 AM to 9:00 PM daily. Hours may vary based on port days and special events."
      },
      {
        "question": "Can I take photos in the gallery?",
        "answer": "Photography policies vary by exhibition. Please check with gallery staff about photography permissions for specific displays."
      }
    ],
    "isPopular": false
  },
  {
    "id": "9b96dae0-c27d-46c4-8575-b2fa1dd676fe",
    "vesselId": "cs--explorer",
    "name": "Maritime Arts Center",
    "description": "Maritime Arts Center offers a sophisticated artistic experience with carefully selected works that reflect both maritime heritage and contemporary artistic innovation. Join us for a journey through art and culture.",
    "imageUrl": "/images/art-galleries/catamaran-gallery.jpg",
    "hours": {
      "start": "10:00",
      "end": "20:00",
      "duration": "10 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-514-132-5368",
      "contactEmail": "connect@gallery.velarivoyages.com"
    },
    "artists": [
      "Michelangelo Buonarroti",
      "Leonardo da Vinci",
      "Rembrandt van Rijn",
      "Andy Warhol",
      "Johannes Vermeer",
      "Ai Weiwei",
      "Kara Walker",
      "Albrecht Dürer",
      "Caravaggio",
      "Yayoi Kusama",
      "Henri de Toulouse-Lautrec"
    ],
    "hasExhibitions": false,
    "hasGuidedTours": false,
    "hasArtClasses": false,
    "faqs": [
      {
        "question": "Can I take photos in the gallery?",
        "answer": "Photography policies vary by exhibition. Please check with gallery staff about photography permissions for specific displays."
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
        "question": "Is there an admission fee for the gallery?",
        "answer": "Access to the art gallery is complimentary for all guests. Some special exhibitions, guided tours, and art classes may have an additional charge."
      }
    ],
    "isPopular": false
  },
  {
    "id": "f733ebd5-c458-441e-8a7a-2458f4de95e4",
    "vesselId": "ps-malta-voyager",
    "name": "Horizon Arts Gallery",
    "description": "Horizon Arts Gallery presents an inspiring collection of artworks that celebrate the beauty of the sea and the creativity of human expression. Discover masterpieces and emerging talents in our thoughtfully curated space. We offer rotating exhibitions, expert-led tours to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/superyacht-gallery.jpg",
    "hours": {
      "start": "09:00",
      "end": "20:00",
      "duration": "11 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-676-237-5921",
      "contactEmail": "info@gallery.velarivoyages.com"
    },
    "artists": [
      "Kara Walker",
      "Takashi Murakami",
      "Michelangelo Buonarroti",
      "Henri de Toulouse-Lautrec",
      "Claude Monet",
      "Henri Matisse",
      "Jackson Pollock",
      "Ai Weiwei",
      "Hans Holbein the Younger",
      "Yayoi Kusama",
      "Kehinde Wiley",
      "Edgar Degas",
      "Titian"
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
        "title": "Colors of the Mediterranean",
        "description": "Vibrant paintings and sculptures inspired by the Mediterranean coast, showcasing the region's rich artistic heritage.",
        "duration": "4 months",
        "type": "Regional Focus",
        "featured": true,
        "ticketPrice": 0
      },
      {
        "title": "Photography at Sea",
        "description": "Stunning maritime photography collection featuring both historical and contemporary works capturing life on the ocean.",
        "duration": "2 months",
        "type": "Photography Exhibition",
        "featured": false,
        "ticketPrice": 12
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
        "featured": true,
        "ticketPrice": 25
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
    "hasArtClasses": false,
    "faqs": [
      {
        "question": "Can I purchase artwork displayed in the gallery?",
        "answer": "Selected pieces in our gallery are available for purchase. Please speak with our gallery staff for information about acquiring specific artworks."
      },
      {
        "question": "Is there an admission fee for the gallery?",
        "answer": "Access to the art gallery is complimentary for all guests. Some special exhibitions, guided tours, and art classes may have an additional charge."
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
        "question": "Are guided tours available?",
        "answer": "Yes, we offer several guided tour options led by our knowledgeable curators and art experts. Tours can be booked at the gallery or through guest services."
      },
      {
        "question": "Do you offer art classes for beginners?",
        "answer": "Absolutely! We offer art classes for all skill levels, from complete beginners to experienced artists. All necessary materials are typically provided."
      }
    ],
    "isPopular": false
  },
  {
    "id": "c3ffbbde-ae54-42b7-b438-7d787e8dea88",
    "vesselId": "rv--of-the-deep",
    "name": "Horizon Arts Gallery",
    "description": "Experience art like never before at Horizon Arts Gallery. Our floating gallery combines the serenity of ocean travel with the inspiration of great art, creating a unique cultural experience. We offer hands-on art classes to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/polar-expedition-ship-gallery.jpg",
    "hours": {
      "start": "09:00",
      "end": "20:00",
      "duration": "11 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-526-466-3021",
      "contactEmail": "office@gallery.velarivoyages.com"
    },
    "artists": [
      "Rembrandt van Rijn",
      "Jan van Eyck",
      "Paul Gauguin",
      "Andy Warhol",
      "Edgar Degas",
      "Kehinde Wiley",
      "Peter Paul Rubens",
      "Pieter Bruegel the Elder",
      "Titian"
    ],
    "hasExhibitions": false,
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
        "question": "Is the gallery accessible for guests with mobility issues?",
        "answer": "Yes, our gallery is fully accessible with wheelchair access, accessible restrooms, and accommodations for guests with various mobility needs."
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
        "question": "Is there an admission fee for the gallery?",
        "answer": "Access to the art gallery is complimentary for all guests. Some special exhibitions, guided tours, and art classes may have an additional charge."
      },
      {
        "question": "Can I take photos in the gallery?",
        "answer": "Photography policies vary by exhibition. Please check with gallery staff about photography permissions for specific displays."
      },
      {
        "question": "What are the art gallery operating hours?",
        "answer": "Our art gallery is typically open from 9:00 AM to 9:00 PM daily. Hours may vary based on port days and special events."
      }
    ],
    "isPopular": true
  },
  {
    "id": "fdac45d4-bc13-40f6-8805-7abd71ca35ac",
    "vesselId": "hms-the--mariner",
    "name": "HMS The  Mariner Art Gallery",
    "description": "Experience art like never before at HMS The  Mariner Art Gallery. Our floating gallery combines the serenity of ocean travel with the inspiration of great art, creating a unique cultural experience.",
    "imageUrl": "/images/art-galleries/boutique-cruise-ship-gallery.jpg",
    "hours": {
      "start": "09:00",
      "end": "21:00",
      "duration": "12 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-411-839-3745",
      "contactEmail": "admin@gallery.velarivoyages.com"
    },
    "artists": [
      "Jackson Pollock",
      "Paul Gauguin",
      "Berthe Morisot",
      "Donatello",
      "Piet Mondrian",
      "Caravaggio",
      "Titian",
      "Paul Cézanne"
    ],
    "hasExhibitions": false,
    "hasGuidedTours": false,
    "hasArtClasses": false,
    "faqs": [
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
        "question": "Is the gallery accessible for guests with mobility issues?",
        "answer": "Yes, our gallery is fully accessible with wheelchair access, accessible restrooms, and accommodations for guests with various mobility needs."
      },
      {
        "question": "Do you offer art classes for beginners?",
        "answer": "Absolutely! We offer art classes for all skill levels, from complete beginners to experienced artists. All necessary materials are typically provided."
      },
      {
        "question": "Can I take photos in the gallery?",
        "answer": "Photography policies vary by exhibition. Please check with gallery staff about photography permissions for specific displays."
      }
    ],
    "isPopular": false
  },
  {
    "id": "73a6ed25-02b5-4930-b8db-2b2e732b5c0a",
    "vesselId": "mv--gale",
    "name": "The Gallery at Sea",
    "description": "Experience art like never before at The Gallery at Sea. Our floating gallery combines the serenity of ocean travel with the inspiration of great art, creating a unique cultural experience. We offer hands-on art classes to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/superyacht-gallery.jpg",
    "hours": {
      "start": "10:00",
      "end": "21:00",
      "duration": "11 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-612-199-1024",
      "contactEmail": "hi@gallery.velarivoyages.com"
    },
    "artists": [
      "Ai Weiwei",
      "Vincent van Gogh",
      "Alfred Sisley",
      "Kara Walker",
      "Raphael Sanzio",
      "Piet Mondrian",
      "Andy Warhol",
      "Donatello",
      "Michelangelo Buonarroti",
      "Leonardo da Vinci",
      "Kehinde Wiley",
      "Sandro Botticelli"
    ],
    "hasExhibitions": false,
    "hasGuidedTours": false,
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
        "question": "Is there an admission fee for the gallery?",
        "answer": "Access to the art gallery is complimentary for all guests. Some special exhibitions, guided tours, and art classes may have an additional charge."
      },
      {
        "question": "Is the gallery accessible for guests with mobility issues?",
        "answer": "Yes, our gallery is fully accessible with wheelchair access, accessible restrooms, and accommodations for guests with various mobility needs."
      },
      {
        "question": "How often do you change exhibitions?",
        "answer": "We regularly rotate our exhibitions to provide fresh experiences for our guests. Major exhibitions typically change every 3-6 months."
      }
    ],
    "isPopular": true
  }
];
