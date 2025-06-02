export const navbarItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    dropdown: [
      {
        label: "Our Company",
        href: "/about-velari-voyages",
      },
      {
        label: "Our History & Mission",
        href: "/about-velari-voyages/company-history-and-mission",
      },
      {
        label: "Our Values & Commitment",
        href: "/about-velari-voyages/values-and-commitment",
      },
      {
        label: "Our Fleet & Vessels",
        href: "/about-velari-voyages/fleet-and-vessels",
      },
      {
        label: "Our Amazing Team",
        href: "/cruises/crew-members",
      },
      {
        label: "Our Team & Partnerships",
        href: "/about-velari-voyages/core-team-and-partnerships",
      },
    ],
  },
  {
    label: "Destinations",
    dropdown: [
      {
        label: "All Destinations",
        href: "/cruises/cruise-categories/velari-voyages-cruises",
      },
      {
        label: "Popular Destinations",
        href: "/cruises/cruise-categories/popular-destinations",
      },
      {
        label: "Types of Cruises",
        href: "/cruises/cruise-categories",
      },
    ],
  },
  {
    label: "Info",
    dropdown: [
      {
        label: "FAQs",
        href: "/cruises/information/frequently-asked-questions",
      },
      {
        label: "Accommodations Policy",
        href: "/cruises/information/accommodations-policy",
      },
      {
        label: "Travel Insurance Policy",
        href: "/cruises/information/travel-insurance-policy",
      },
      {
        label: "Cancellation & Refund Policy",
        href: "/cruises/information/cancellation-and-refund-policy",
      },
      {
        label: "Travel Safety Information",
        href: "/cruises/information/travel-safety-information",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact-information",
  },
  {
    label: "Book Now",
    href: "/book-your-trip-today",
  },
];

export const dockNavigationMenu = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Tours",
    href: "/tours",
    activeIcon: "TourActiveIcon", // Replace with actual icon component
    inactiveIcon: "TourInactiveIcon", // Replace with actual icon component
  },
  {
    name: "Destinations",
    href: "/luxurious-destinations",
    activeIcon: "DestinationActiveIcon", // Replace with actual icon component
    inactiveIcon: "DestinationInactiveIcon", // Replace with actual icon component
  },
  {
    name: "Contact",
    href: "/contact-information",
    activeIcon: "ContactActiveIcon", // Replace with actual icon component
    inactiveIcon: "ContactInactiveIcon", // Replace with actual icon component
  },
  {
    name: "Services",
    href: "/services",
    activeIcon: "ServiceActiveIcon", // Replace with actual icon component
    inactiveIcon: "ServiceInactiveIcon", // Replace with actual icon component
  },
];
