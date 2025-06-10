import { ArtGallery } from "@/lib/interfaces/services/venues";

/**
 * Montreal Art Galleries
 * Generated art gallery data for vessels operating in Montreal
 * Each vessel has one comprehensive art gallery with curated collections,
 * exhibitions, guided tours, and art classes based on vessel type and luxury level.
 */

export const montrealArtGalleries: ArtGallery[] = [
  {
    "id": "3fa96674-330e-49ff-9966-fee9ddce9be4",
    "vesselId": "ts--explorer",
    "name": "Seascape Gallery",
    "description": "Seascape Gallery offers a sophisticated artistic experience with carefully selected works that reflect both maritime heritage and contemporary artistic innovation. Join us for a journey through art and culture. We offer rotating exhibitions, hands-on art classes to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/mid-size-cruise-ship-gallery.jpg",
    "hours": {
      "start": "08:00",
      "end": "22:00",
      "duration": "14 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-383-791-5601",
      "contactEmail": "info@gallery.velarivoyages.com"
    },
    "artists": [
      "Leonardo da Vinci",
      "Albrecht Dürer",
      "Pablo Picasso",
      "Michelangelo Buonarroti",
      "Raphael Sanzio",
      "Takashi Murakami",
      "Piet Mondrian",
      "Giotto di Bondone",
      "Edgar Degas",
      "Paul Gauguin",
      "Jeff Koons",
      "Johannes Vermeer",
      "Henri Matisse"
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
        "title": "Colors of the Mediterranean",
        "description": "Vibrant paintings and sculptures inspired by the Mediterranean coast, showcasing the region's rich artistic heritage.",
        "duration": "4 months",
        "type": "Regional Focus",
        "featured": true,
        "ticketPrice": 14
      },
      {
        "title": "Contemporary Voyages",
        "description": "Modern interpretations of travel and exploration through the lens of contemporary artists from around the world.",
        "duration": "6 months",
        "type": "Featured Exhibition",
        "featured": true,
        "ticketPrice": 13
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
      }
    ],
    "faqs": [
      {
        "question": "Are guided tours available?",
        "answer": "Yes, we offer several guided tour options led by our knowledgeable curators and art experts. Tours can be booked at the gallery or through guest services."
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
        "question": "How often do you change exhibitions?",
        "answer": "We regularly rotate our exhibitions to provide fresh experiences for our guests. Major exhibitions typically change every 3-6 months."
      }
    ],
    "isPopular": false
  },
  {
    "id": "9cfd5702-47f4-437a-a893-70ad502eb03e",
    "vesselId": "hms-montreal-voyager",
    "name": "Seascape Gallery",
    "description": "Seascape Gallery presents an inspiring collection of artworks that celebrate the beauty of the sea and the creativity of human expression. Discover masterpieces and emerging talents in our thoughtfully curated space. We offer rotating exhibitions, expert-led tours, hands-on art classes to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/family-cruise-ship-gallery.jpg",
    "hours": {
      "start": "09:00",
      "end": "21:00",
      "duration": "12 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-306-885-3262",
      "contactEmail": "customerservice@gallery.velarivoyages.com"
    },
    "artists": [
      "Yayoi Kusama",
      "Leonardo da Vinci",
      "Michelangelo Buonarroti",
      "Titian",
      "Roy Lichtenstein",
      "Ai Weiwei",
      "Hans Holbein the Younger",
      "Rembrandt van Rijn"
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
      }
    ],
    "faqs": [
      {
        "question": "Do you offer art classes for beginners?",
        "answer": "Absolutely! We offer art classes for all skill levels, from complete beginners to experienced artists. All necessary materials are typically provided."
      },
      {
        "question": "Can I purchase artwork displayed in the gallery?",
        "answer": "Selected pieces in our gallery are available for purchase. Please speak with our gallery staff for information about acquiring specific artworks."
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
        "question": "Are guided tours available?",
        "answer": "Yes, we offer several guided tour options led by our knowledgeable curators and art experts. Tours can be booked at the gallery or through guest services."
      }
    ],
    "isPopular": true
  },
  {
    "id": "8cfe51df-a5d7-4178-b70c-96fd9a06c868",
    "vesselId": "nb--of-the-deep",
    "name": "Seascape Gallery",
    "description": "Seascape Gallery presents an inspiring collection of artworks that celebrate the beauty of the sea and the creativity of human expression. Discover masterpieces and emerging talents in our thoughtfully curated space.",
    "imageUrl": "/images/art-galleries/expedition-ship-gallery.jpg",
    "hours": {
      "start": "09:00",
      "end": "21:00",
      "duration": "12 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-898-185-6678",
      "contactEmail": "reachus@gallery.velarivoyages.com"
    },
    "artists": [
      "Pablo Picasso",
      "Giotto di Bondone",
      "Leonardo da Vinci",
      "Banksy",
      "Peter Paul Rubens",
      "Henri Matisse",
      "Alfred Sisley",
      "Claude Monet"
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
    "id": "b3391392-c985-45fa-8141-286ef71a5e76",
    "vesselId": "rms-the--mariner",
    "name": "Oceanview Gallery",
    "description": "Oceanview Gallery presents an inspiring collection of artworks that celebrate the beauty of the sea and the creativity of human expression. Discover masterpieces and emerging talents in our thoughtfully curated space. We offer rotating exhibitions, hands-on art classes to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/chartered-vessel-gallery.jpg",
    "hours": {
      "start": "09:00",
      "end": "21:00",
      "duration": "12 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-524-327-3999",
      "contactEmail": "office@gallery.velarivoyages.com"
    },
    "artists": [
      "Paul Cézanne",
      "Claude Monet",
      "Titian",
      "Paul Signac",
      "Rembrandt van Rijn",
      "Takashi Murakami",
      "Jan van Eyck",
      "Sandro Botticelli",
      "Banksy",
      "Wassily Kandinsky",
      "Hans Holbein the Younger",
      "Kehinde Wiley",
      "Georges Seurat",
      "Albrecht Dürer",
      "Donatello"
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
        "title": "Local Artisan Showcase",
        "description": "Featuring works by local artists from ports of call, celebrating regional artistic traditions and contemporary expressions.",
        "duration": "3 months",
        "type": "Cultural Exchange",
        "featured": false,
        "ticketPrice": 0
      }
    ],
    "hasGuidedTours": false,
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
      }
    ],
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
        "question": "Can I purchase artwork displayed in the gallery?",
        "answer": "Selected pieces in our gallery are available for purchase. Please speak with our gallery staff for information about acquiring specific artworks."
      },
      {
        "question": "How often do you change exhibitions?",
        "answer": "We regularly rotate our exhibitions to provide fresh experiences for our guests. Major exhibitions typically change every 3-6 months."
      }
    ],
    "isPopular": true
  },
  {
    "id": "ef1aa4c9-f1be-4ac8-bc75-9a1f74d72926",
    "vesselId": "hms--gale",
    "name": "Maritime Arts Center",
    "description": "Experience art like never before at Maritime Arts Center. Our floating gallery combines the serenity of ocean travel with the inspiration of great art, creating a unique cultural experience. We offer hands-on art classes to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/chartered-vessel-gallery.jpg",
    "hours": {
      "start": "08:00",
      "end": "22:00",
      "duration": "14 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-380-122-4442",
      "contactEmail": "contact@gallery.velarivoyages.com"
    },
    "artists": [
      "Camille Pissarro",
      "Claude Monet",
      "Gustave Caillebotte",
      "Henri Matisse",
      "Damien Hirst",
      "Donatello",
      "Titian",
      "Edgar Degas",
      "Yayoi Kusama",
      "Henri de Toulouse-Lautrec",
      "Peter Paul Rubens"
    ],
    "hasExhibitions": false,
    "hasGuidedTours": false,
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
      }
    ],
    "faqs": [
      {
        "question": "What are the art gallery operating hours?",
        "answer": "Our art gallery is typically open from 9:00 AM to 9:00 PM daily. Hours may vary based on port days and special events."
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
        "question": "Is there an admission fee for the gallery?",
        "answer": "Access to the art gallery is complimentary for all guests. Some special exhibitions, guided tours, and art classes may have an additional charge."
      },
      {
        "question": "Can I purchase artwork displayed in the gallery?",
        "answer": "Selected pieces in our gallery are available for purchase. Please speak with our gallery staff for information about acquiring specific artworks."
      },
      {
        "question": "Are guided tours available?",
        "answer": "Yes, we offer several guided tour options led by our knowledgeable curators and art experts. Tours can be booked at the gallery or through guest services."
      }
    ],
    "isPopular": false
  },
  {
    "id": "d1642cb4-0593-4569-bffe-76b4e9351f56",
    "vesselId": "ps--explorer",
    "name": "Maritime Arts Center",
    "description": "Maritime Arts Center presents an inspiring collection of artworks that celebrate the beauty of the sea and the creativity of human expression. Discover masterpieces and emerging talents in our thoughtfully curated space. We offer rotating exhibitions, expert-led tours, hands-on art classes to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/mainstream-cruise-ship-gallery.jpg",
    "hours": {
      "start": "09:00",
      "end": "22:00",
      "duration": "13 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-215-955-7430",
      "contactEmail": "info@gallery.velarivoyages.com"
    },
    "artists": [
      "Titian",
      "Leonardo da Vinci",
      "Giotto di Bondone",
      "Claude Monet",
      "Damien Hirst",
      "Pablo Picasso",
      "Albrecht Dürer",
      "Mary Cassatt"
    ],
    "hasExhibitions": true,
    "exhibitions": [
      {
        "title": "Contemporary Voyages",
        "description": "Modern interpretations of travel and exploration through the lens of contemporary artists from around the world.",
        "duration": "6 months",
        "type": "Featured Exhibition",
        "featured": false,
        "ticketPrice": 14
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
        "title": "Local Artisan Showcase",
        "description": "Featuring works by local artists from ports of call, celebrating regional artistic traditions and contemporary expressions.",
        "duration": "3 months",
        "type": "Cultural Exchange",
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
        "title": "Sculptures of Movement",
        "description": "Three-dimensional artworks that embody the fluid motion of waves and the dynamic energy of maritime life.",
        "duration": "4 months",
        "type": "Sculpture Exhibition",
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
      }
    ],
    "faqs": [
      {
        "question": "Is there an admission fee for the gallery?",
        "answer": "Access to the art gallery is complimentary for all guests. Some special exhibitions, guided tours, and art classes may have an additional charge."
      },
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
        "question": "Are guided tours available?",
        "answer": "Yes, we offer several guided tour options led by our knowledgeable curators and art experts. Tours can be booked at the gallery or through guest services."
      }
    ],
    "isPopular": false
  },
  {
    "id": "44c97b11-307e-4a1a-a1cf-336ec4daaf8f",
    "vesselId": "rv-montreal-voyager",
    "name": "Aqua Fine Arts",
    "description": "Aqua Fine Arts presents an inspiring collection of artworks that celebrate the beauty of the sea and the creativity of human expression. Discover masterpieces and emerging talents in our thoughtfully curated space. We offer rotating exhibitions, expert-led tours, hands-on art classes to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/zodiac-equipped-vessel-gallery.jpg",
    "hours": {
      "start": "10:00",
      "end": "22:00",
      "duration": "12 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-425-815-7676",
      "contactEmail": "care@gallery.velarivoyages.com"
    },
    "artists": [
      "Jan van Eyck",
      "Raphael Sanzio",
      "Gustave Caillebotte",
      "Camille Pissarro",
      "Banksy",
      "Kehinde Wiley",
      "Jeff Koons",
      "Donatello",
      "Vincent van Gogh",
      "Pieter Bruegel the Elder",
      "Michelangelo Buonarroti"
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
        "featured": true,
        "ticketPrice": 0
      },
      {
        "title": "Contemporary Voyages",
        "description": "Modern interpretations of travel and exploration through the lens of contemporary artists from around the world.",
        "duration": "6 months",
        "type": "Featured Exhibition",
        "featured": false,
        "ticketPrice": 15
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
      }
    ],
    "faqs": [
      {
        "question": "Do you offer art classes for beginners?",
        "answer": "Absolutely! We offer art classes for all skill levels, from complete beginners to experienced artists. All necessary materials are typically provided."
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
        "question": "Are guided tours available?",
        "answer": "Yes, we offer several guided tour options led by our knowledgeable curators and art experts. Tours can be booked at the gallery or through guest services."
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
    "id": "0cb2da07-1e13-4196-93a6-8625852634c5",
    "vesselId": "sy--of-the-deep",
    "name": "Nautical Arts Gallery",
    "description": "Experience art like never before at Nautical Arts Gallery. Our floating gallery combines the serenity of ocean travel with the inspiration of great art, creating a unique cultural experience. We offer rotating exhibitions, expert-led tours to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/river-cruise-ship-gallery.jpg",
    "hours": {
      "start": "10:00",
      "end": "20:00",
      "duration": "10 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-416-196-2449",
      "contactEmail": "inquiries@gallery.velarivoyages.com"
    },
    "artists": [
      "Kehinde Wiley",
      "Georges Seurat",
      "Paul Signac",
      "Jan van Eyck",
      "Alfred Sisley",
      "Henri Rousseau",
      "Camille Pissarro",
      "Mary Cassatt",
      "Leonardo da Vinci",
      "Takashi Murakami"
    ],
    "hasExhibitions": true,
    "exhibitions": [
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
        "title": "Photography at Sea",
        "description": "Stunning maritime photography collection featuring both historical and contemporary works capturing life on the ocean.",
        "duration": "2 months",
        "type": "Photography Exhibition",
        "featured": false,
        "ticketPrice": 22
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
      },
      {
        "question": "What are the art gallery operating hours?",
        "answer": "Our art gallery is typically open from 9:00 AM to 9:00 PM daily. Hours may vary based on port days and special events."
      }
    ],
    "isPopular": false
  },
  {
    "id": "fb806062-120e-4cef-81e6-9799eb3b7d27",
    "vesselId": "sy-the--mariner",
    "name": "Montreal Art Collection",
    "description": "Montreal Art Collection presents an inspiring collection of artworks that celebrate the beauty of the sea and the creativity of human expression. Discover masterpieces and emerging talents in our thoughtfully curated space. We offer rotating exhibitions, expert-led tours to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/adults-only-ship-gallery.jpg",
    "hours": {
      "start": "08:00",
      "end": "21:00",
      "duration": "13 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-549-979-5580",
      "contactEmail": "inquiries@gallery.velarivoyages.com"
    },
    "artists": [
      "Peter Paul Rubens",
      "Leonardo da Vinci",
      "Henri de Toulouse-Lautrec",
      "Georges Seurat",
      "Vincent van Gogh",
      "Pieter Bruegel the Elder",
      "Donatello",
      "Pierre-Auguste Renoir",
      "Kehinde Wiley",
      "Piet Mondrian",
      "Johannes Vermeer",
      "Titian",
      "Caravaggio"
    ],
    "hasExhibitions": true,
    "exhibitions": [
      {
        "title": "Sculptures of Movement",
        "description": "Three-dimensional artworks that embody the fluid motion of waves and the dynamic energy of maritime life.",
        "duration": "4 months",
        "type": "Sculpture Exhibition",
        "featured": true,
        "ticketPrice": 25
      },
      {
        "title": "Photography at Sea",
        "description": "Stunning maritime photography collection featuring both historical and contemporary works capturing life on the ocean.",
        "duration": "2 months",
        "type": "Photography Exhibition",
        "featured": true,
        "ticketPrice": 24
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
        "question": "How often do you change exhibitions?",
        "answer": "We regularly rotate our exhibitions to provide fresh experiences for our guests. Major exhibitions typically change every 3-6 months."
      },
      {
        "question": "Can I purchase artwork displayed in the gallery?",
        "answer": "Selected pieces in our gallery are available for purchase. Please speak with our gallery staff for information about acquiring specific artworks."
      }
    ],
    "isPopular": false
  },
  {
    "id": "e0bf1a0b-c3e1-4673-b7d4-5fb7ae0315ce",
    "vesselId": "ss--gale",
    "name": "Seascape Gallery",
    "description": "Seascape Gallery offers a sophisticated artistic experience with carefully selected works that reflect both maritime heritage and contemporary artistic innovation. Join us for a journey through art and culture. We offer expert-led tours to enhance your artistic journey.",
    "imageUrl": "/images/art-galleries/mainstream-cruise-ship-gallery.jpg",
    "hours": {
      "start": "09:00",
      "end": "20:00",
      "duration": "11 hours",
      "description": "Gallery hours may vary based on itinerary and special events"
    },
    "contact": {
      "contactNumber": "+1-525-976-1427",
      "contactEmail": "admin@gallery.velarivoyages.com"
    },
    "artists": [
      "Donatello",
      "Paul Signac",
      "Giotto di Bondone",
      "Damien Hirst",
      "Andy Warhol",
      "Kehinde Wiley",
      "Johannes Vermeer",
      "Raphael Sanzio",
      "Kara Walker",
      "Rembrandt van Rijn",
      "Takashi Murakami"
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
      },
      {
        "question": "Do you offer art classes for beginners?",
        "answer": "Absolutely! We offer art classes for all skill levels, from complete beginners to experienced artists. All necessary materials are typically provided."
      }
    ],
    "isPopular": false
  }
];
