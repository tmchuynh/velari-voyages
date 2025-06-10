import { ArtGallery } from "@/lib/interfaces/services/venues";

/**
 * Amsterdam Art Galleries
 * Generated art gallery data for vessels operating in Amsterdam
 * Each vessel has one comprehensive art gallery with curated collections,
 * exhibitions, guided tours, and art classes based on vessel type and luxury level.
 */

export const amsterdamArtGalleries: ArtGallery[] = [
  {
    "id": "39231e29-31d2-4a5f-8dec-408424751cb1",
    "vesselId": "sy--explorer",
    "name": "The Gallery at Sea",
    "description": "Welcome to The Gallery at Sea aboard the SY  Explorer. Immerse yourself in a world-class collection of maritime and contemporary art while sailing the waters near Amsterdam. We offer rotating exhibitions, expert-led tours to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/superyacht-gallery.jpg",
    "hours": {
      "start": "10:00",
      "end": "22:00",
      "duration": "12 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-538-147-2296",
      "contactEmail": "care@gallery.velarivoyages.com"
    },
    "artists": [
      "Henri Rousseau",
      "Pablo Picasso",
      "Edgar Degas",
      "Raphael Sanzio",
      "Andy Warhol",
      "Donatello",
      "Mary Cassatt",
      "Berthe Morisot",
      "Georges Seurat",
      "Damien Hirst",
      "Pierre-Auguste Renoir",
      "Sandro Botticelli",
      "Piet Mondrian",
      "Leonardo da Vinci"
    ],
    "hasExhibitions": true,
    "exhibitions": [
      {
        "title": "Masterpieces of the Sea",
        "description": "A curated collection of maritime art spanning centuries, featuring works that capture the beauty, power, and mystery of the ocean.",
        "duration": "3 months",
        "type": "Permanent Collection",
        "featured": false,
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
      },
      {
        "title": "Photography at Sea",
        "description": "Stunning maritime photography collection featuring both historical and contemporary works capturing life on the ocean.",
        "duration": "2 months",
        "type": "Photography Exhibition",
        "featured": false,
        "ticketPrice": 24
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
    "isPopular": true
  },
  {
    "id": "008fbdee-9fd5-4113-a5e2-bf4dfb53a844",
    "vesselId": "sv-amsterdam-voyager",
    "name": "Seascape Gallery",
    "description": "Seascape Gallery presents an inspiring collection of artworks that celebrate the beauty of the sea and the creativity of human expression. Discover masterpieces and emerging talents in our thoughtfully curated space. We offer expert-led tours to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/chartered-vessel-gallery.jpg",
    "hours": {
      "start": "10:00",
      "end": "21:00",
      "duration": "11 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-660-847-4908",
      "contactEmail": "inquiries@gallery.velarivoyages.com"
    },
    "artists": [
      "Donatello",
      "Kehinde Wiley",
      "Michelangelo Buonarroti",
      "Camille Pissarro",
      "Sandro Botticelli",
      "Damien Hirst",
      "Gustave Caillebotte",
      "Titian",
      "Jackson Pollock",
      "Kara Walker",
      "Jan van Eyck",
      "Banksy",
      "Georges Seurat"
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
        "question": "How often do you change exhibitions?",
        "answer": "We regularly rotate our exhibitions to provide fresh experiences for our guests. Major exhibitions typically change every 3-6 months."
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
        "question": "Is there an admission fee for the gallery?",
        "answer": "Access to the art gallery is complimentary for all guests. Some special exhibitions, guided tours, and art classes may have an additional charge."
      }
    ],
    "isPopular": false
  },
  {
    "id": "0f9fc3e9-cb48-433e-a44f-e7e6d7c2b5ef",
    "vesselId": "ss--of-the-deep",
    "name": "Velari Maritime Gallery",
    "description": "Velari Maritime Gallery presents an inspiring collection of artworks that celebrate the beauty of the sea and the creativity of human expression. Discover masterpieces and emerging talents in our thoughtfully curated space. We offer rotating exhibitions, expert-led tours, hands-on art classes to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/mega-yacht-gallery.jpg",
    "hours": {
      "start": "10:00",
      "end": "20:00",
      "duration": "10 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-347-648-8342",
      "contactEmail": "feedback@gallery.velarivoyages.com"
    },
    "artists": [
      "Camille Pissarro",
      "Raphael Sanzio",
      "Vincent van Gogh",
      "Michelangelo Buonarroti",
      "Jan van Eyck",
      "Peter Paul Rubens",
      "Hans Holbein the Younger",
      "Pablo Picasso",
      "Alfred Sisley"
    ],
    "hasExhibitions": true,
    "exhibitions": [
      {
        "title": "Contemporary Voyages",
        "description": "Modern interpretations of travel and exploration through the lens of contemporary artists from around the world.",
        "duration": "6 months",
        "type": "Featured Exhibition",
        "featured": false,
        "ticketPrice": 0
      },
      {
        "title": "Masterpieces of the Sea",
        "description": "A curated collection of maritime art spanning centuries, featuring works that capture the beauty, power, and mystery of the ocean.",
        "duration": "3 months",
        "type": "Permanent Collection",
        "featured": false,
        "ticketPrice": 25
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
        "featured": false,
        "ticketPrice": 15
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
        "question": "Can I take photos in the gallery?",
        "answer": "Photography policies vary by exhibition. Please check with gallery staff about photography permissions for specific displays."
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
    "id": "65fbbbd2-d161-4408-a2a5-b910ad548100",
    "vesselId": "nb-the--mariner",
    "name": "Aqua Fine Arts",
    "description": "Aqua Fine Arts presents an inspiring collection of artworks that celebrate the beauty of the sea and the creativity of human expression. Discover masterpieces and emerging talents in our thoughtfully curated space. We offer rotating exhibitions, expert-led tours, hands-on art classes to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/expedition-ship-gallery.jpg",
    "hours": {
      "start": "10:00",
      "end": "22:00",
      "duration": "12 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-526-898-2638",
      "contactEmail": "info@gallery.velarivoyages.com"
    },
    "artists": [
      "Giotto di Bondone",
      "Rembrandt van Rijn",
      "Camille Pissarro",
      "Andy Warhol",
      "Hans Holbein the Younger",
      "Berthe Morisot",
      "Leonardo da Vinci",
      "Mark Rothko",
      "Kara Walker",
      "Kehinde Wiley",
      "Henri Matisse",
      "Piet Mondrian",
      "Ai Weiwei",
      "Michelangelo Buonarroti",
      "Titian"
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
      },
      {
        "title": "Sculptures of Movement",
        "description": "Three-dimensional artworks that embody the fluid motion of waves and the dynamic energy of maritime life.",
        "duration": "4 months",
        "type": "Sculpture Exhibition",
        "featured": false,
        "ticketPrice": 11
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
      }
    ],
    "faqs": [
      {
        "question": "Can I take photos in the gallery?",
        "answer": "Photography policies vary by exhibition. Please check with gallery staff about photography permissions for specific displays."
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
    "isPopular": true
  },
  {
    "id": "0261b624-b559-4022-b636-523f7927bf9f",
    "vesselId": "sv--gale",
    "name": "Seascape Gallery",
    "description": "Seascape Gallery offers a sophisticated artistic experience with carefully selected works that reflect both maritime heritage and contemporary artistic innovation. Join us for a journey through art and culture. We offer rotating exhibitions, expert-led tours, hands-on art classes to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/expedition-ship-gallery.jpg",
    "hours": {
      "start": "08:00",
      "end": "20:00",
      "duration": "12 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-591-400-1378",
      "contactEmail": "feedback@gallery.velarivoyages.com"
    },
    "artists": [
      "Titian",
      "Paul Gauguin",
      "Pablo Picasso",
      "Damien Hirst",
      "Hans Holbein the Younger",
      "Giotto di Bondone",
      "Johannes Vermeer",
      "Edgar Degas",
      "Pierre-Auguste Renoir"
    ],
    "hasExhibitions": true,
    "exhibitions": [
      {
        "title": "Photography at Sea",
        "description": "Stunning maritime photography collection featuring both historical and contemporary works capturing life on the ocean.",
        "duration": "2 months",
        "type": "Photography Exhibition",
        "featured": true,
        "ticketPrice": 20
      },
      {
        "title": "Local Artisan Showcase",
        "description": "Featuring works by local artists from ports of call, celebrating regional artistic traditions and contemporary expressions.",
        "duration": "3 months",
        "type": "Cultural Exchange",
        "featured": false,
        "ticketPrice": 10
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
        "ticketPrice": 20
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
        "question": "What are the art gallery operating hours?",
        "answer": "Our art gallery is typically open from 9:00 AM to 9:00 PM daily. Hours may vary based on port days and special events."
      },
      {
        "question": "Do you offer art classes for beginners?",
        "answer": "Absolutely! We offer art classes for all skill levels, from complete beginners to experienced artists. All necessary materials are typically provided."
      },
      {
        "question": "How often do you change exhibitions?",
        "answer": "We regularly rotate our exhibitions to provide fresh experiences for our guests. Major exhibitions typically change every 3-6 months."
      }
    ],
    "isPopular": false
  },
  {
    "id": "b393b24d-f113-47c5-9d72-5136c95b5871",
    "vesselId": "ss--explorer",
    "name": "Amsterdam Art Collection",
    "description": "Welcome to Amsterdam Art Collection aboard the SS  Explorer. Immerse yourself in a world-class collection of maritime and contemporary art while sailing the waters near Amsterdam. We offer rotating exhibitions, expert-led tours to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/resort-style-ship-gallery.jpg",
    "hours": {
      "start": "09:00",
      "end": "21:00",
      "duration": "12 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-801-511-9977",
      "contactEmail": "care@gallery.velarivoyages.com"
    },
    "artists": [
      "Michelangelo Buonarroti",
      "Paul Cézanne",
      "Raphael Sanzio",
      "Leonardo da Vinci",
      "Jan van Eyck",
      "Roy Lichtenstein",
      "Banksy",
      "Claude Monet",
      "Jeff Koons",
      "Donatello",
      "Damien Hirst",
      "Kehinde Wiley",
      "Titian",
      "Albrecht Dürer"
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
        "title": "Masterpieces of the Sea",
        "description": "A curated collection of maritime art spanning centuries, featuring works that capture the beauty, power, and mystery of the ocean.",
        "duration": "3 months",
        "type": "Permanent Collection",
        "featured": true,
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
    "hasArtClasses": false,
    "faqs": [
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
        "question": "What are the art gallery operating hours?",
        "answer": "Our art gallery is typically open from 9:00 AM to 9:00 PM daily. Hours may vary based on port days and special events."
      }
    ],
    "isPopular": true
  },
  {
    "id": "1e19dc74-435b-4852-adc5-ecdb5c40c0c1",
    "vesselId": "nx-amsterdam-voyager",
    "name": "Oceanview Gallery",
    "description": "Experience art like never before at Oceanview Gallery. Our floating gallery combines the serenity of ocean travel with the inspiration of great art, creating a unique cultural experience. We offer rotating exhibitions, expert-led tours to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/resort-style-ship-gallery.jpg",
    "hours": {
      "start": "10:00",
      "end": "20:00",
      "duration": "10 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-459-957-8988",
      "contactEmail": "ask@gallery.velarivoyages.com"
    },
    "artists": [
      "Albrecht Dürer",
      "Pablo Picasso",
      "Mark Rothko",
      "Gustave Caillebotte",
      "Vincent van Gogh",
      "Wassily Kandinsky",
      "Henri Rousseau",
      "Paul Gauguin",
      "Donatello",
      "Banksy",
      "Paul Cézanne",
      "Mary Cassatt",
      "Kehinde Wiley",
      "Rembrandt van Rijn"
    ],
    "hasExhibitions": true,
    "exhibitions": [
      {
        "title": "Photography at Sea",
        "description": "Stunning maritime photography collection featuring both historical and contemporary works capturing life on the ocean.",
        "duration": "2 months",
        "type": "Photography Exhibition",
        "featured": true,
        "ticketPrice": 21
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
        "title": "Sculptures of Movement",
        "description": "Three-dimensional artworks that embody the fluid motion of waves and the dynamic energy of maritime life.",
        "duration": "4 months",
        "type": "Sculpture Exhibition",
        "featured": false,
        "ticketPrice": 11
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
    "hasArtClasses": false,
    "faqs": [
      {
        "question": "Is the gallery accessible for guests with mobility issues?",
        "answer": "Yes, our gallery is fully accessible with wheelchair access, accessible restrooms, and accommodations for guests with various mobility needs."
      },
      {
        "question": "Can I take photos in the gallery?",
        "answer": "Photography policies vary by exhibition. Please check with gallery staff about photography permissions for specific displays."
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
    "isPopular": false
  },
  {
    "id": "34eecafd-d3b3-4a64-b759-548e6670a63a",
    "vesselId": "nb--of-the-deep",
    "name": "Amsterdam Art Collection",
    "description": "Amsterdam Art Collection presents an inspiring collection of artworks that celebrate the beauty of the sea and the creativity of human expression. Discover masterpieces and emerging talents in our thoughtfully curated space. We offer rotating exhibitions, expert-led tours, hands-on art classes to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/family-cruise-ship-gallery.jpg",
    "hours": {
      "start": "10:00",
      "end": "20:00",
      "duration": "10 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-249-997-3126",
      "contactEmail": "hello@gallery.velarivoyages.com"
    },
    "artists": [
      "Leonardo da Vinci",
      "Pieter Bruegel the Elder",
      "Henri Rousseau",
      "Camille Pissarro",
      "Mary Cassatt",
      "Berthe Morisot",
      "Michelangelo Buonarroti",
      "Georges Seurat",
      "Edgar Degas",
      "Peter Paul Rubens",
      "Kara Walker",
      "Henri Matisse",
      "Johannes Vermeer",
      "Mark Rothko",
      "Paul Signac"
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
        "title": "Colors of the Mediterranean",
        "description": "Vibrant paintings and sculptures inspired by the Mediterranean coast, showcasing the region's rich artistic heritage.",
        "duration": "4 months",
        "type": "Regional Focus",
        "featured": false,
        "ticketPrice": 0
      },
      {
        "title": "Digital Art Revolution",
        "description": "Cutting-edge digital and interactive art installations that push the boundaries of traditional gallery experiences.",
        "duration": "6 months",
        "type": "Interactive Exhibition",
        "featured": false,
        "ticketPrice": 18
      },
      {
        "title": "Abstract Horizons",
        "description": "An exploration of abstract art that captures the infinite possibilities of the horizon line and open waters.",
        "duration": "5 months",
        "type": "Thematic Exhibition",
        "featured": false,
        "ticketPrice": 0
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
        "question": "Is the gallery accessible for guests with mobility issues?",
        "answer": "Yes, our gallery is fully accessible with wheelchair access, accessible restrooms, and accommodations for guests with various mobility needs."
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
    "id": "b611e6b6-14b6-4c01-884d-2a76b0114813",
    "vesselId": "sv-the--mariner",
    "name": "Nautical Arts Gallery",
    "description": "Experience art like never before at Nautical Arts Gallery. Our floating gallery combines the serenity of ocean travel with the inspiration of great art, creating a unique cultural experience. We offer rotating exhibitions, expert-led tours to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/superyacht-gallery.jpg",
    "hours": {
      "start": "10:00",
      "end": "20:00",
      "duration": "10 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-381-943-8151",
      "contactEmail": "contact@gallery.velarivoyages.com"
    },
    "artists": [
      "Titian",
      "Claude Monet",
      "Camille Pissarro",
      "Mark Rothko",
      "Caravaggio",
      "Jeff Koons",
      "Pieter Bruegel the Elder",
      "Mary Cassatt"
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
        "title": "Colors of the Mediterranean",
        "description": "Vibrant paintings and sculptures inspired by the Mediterranean coast, showcasing the region's rich artistic heritage.",
        "duration": "4 months",
        "type": "Regional Focus",
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
        "title": "Sculptures of Movement",
        "description": "Three-dimensional artworks that embody the fluid motion of waves and the dynamic energy of maritime life.",
        "duration": "4 months",
        "type": "Sculpture Exhibition",
        "featured": false,
        "ticketPrice": 10
      },
      {
        "title": "Digital Art Revolution",
        "description": "Cutting-edge digital and interactive art installations that push the boundaries of traditional gallery experiences.",
        "duration": "6 months",
        "type": "Interactive Exhibition",
        "featured": false,
        "ticketPrice": 22
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
    "hasArtClasses": false,
    "faqs": [
      {
        "question": "How often do you change exhibitions?",
        "answer": "We regularly rotate our exhibitions to provide fresh experiences for our guests. Major exhibitions typically change every 3-6 months."
      },
      {
        "question": "Is the gallery accessible for guests with mobility issues?",
        "answer": "Yes, our gallery is fully accessible with wheelchair access, accessible restrooms, and accommodations for guests with various mobility needs."
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
        "question": "Can I purchase artwork displayed in the gallery?",
        "answer": "Selected pieces in our gallery are available for purchase. Please speak with our gallery staff for information about acquiring specific artworks."
      }
    ],
    "isPopular": false
  },
  {
    "id": "083ddfe0-57ff-4a76-a749-37c797f96881",
    "vesselId": "rv--gale",
    "name": "Aqua Fine Arts",
    "description": "Welcome to Aqua Fine Arts aboard the RV  Gale. Immerse yourself in a world-class collection of maritime and contemporary art while sailing the waters near Amsterdam. We offer rotating exhibitions to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/expedition-ship-gallery.jpg",
    "hours": {
      "start": "08:00",
      "end": "22:00",
      "duration": "14 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-690-391-9922",
      "contactEmail": "mail@gallery.velarivoyages.com"
    },
    "artists": [
      "Henri de Toulouse-Lautrec",
      "Sandro Botticelli",
      "Ai Weiwei",
      "Alfred Sisley",
      "Rembrandt van Rijn",
      "Caravaggio",
      "Camille Pissarro",
      "Paul Gauguin",
      "Andy Warhol",
      "Donatello",
      "Damien Hirst",
      "Henri Rousseau",
      "Pierre-Auguste Renoir",
      "Takashi Murakami"
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
        "title": "Local Artisan Showcase",
        "description": "Featuring works by local artists from ports of call, celebrating regional artistic traditions and contemporary expressions.",
        "duration": "3 months",
        "type": "Cultural Exchange",
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
        "title": "Digital Art Revolution",
        "description": "Cutting-edge digital and interactive art installations that push the boundaries of traditional gallery experiences.",
        "duration": "6 months",
        "type": "Interactive Exhibition",
        "featured": true,
        "ticketPrice": 24
      }
    ],
    "hasGuidedTours": false,
    "hasArtClasses": false,
    "faqs": [
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
        "question": "Is the gallery accessible for guests with mobility issues?",
        "answer": "Yes, our gallery is fully accessible with wheelchair access, accessible restrooms, and accommodations for guests with various mobility needs."
      },
      {
        "question": "Do you offer art classes for beginners?",
        "answer": "Absolutely! We offer art classes for all skill levels, from complete beginners to experienced artists. All necessary materials are typically provided."
      }
    ],
    "isPopular": false
  }
];
