"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MapPinIcon,
  BuildingOffice2Icon,
  GlobeAltIcon,
  PlayCircleIcon,
  ChevronRightIcon,
  StarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import {
  fetchPopularCruiseDestinationsFromExpedia,
  fetchPopularCruiseLinesFromExpedia,
  fetchPopularDeparturePortsFromExpedia,
  fetchDestinationActivitiesFromExpedia,
} from "@/lib/utils/get/expedia-cruises";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/cards/Card";
import { Button, OceanButton, WaveButton } from "@/components/button/Button";
import { Badge } from "@/components/ui/badge";
import { OceanLoading } from "@/components/Loading";
import Link from "next/link";
import Image from "next/image";

interface DashboardData {
  destinations: any[];
  cruiseLines: any[];
  departurePorts: any[];
  activities: any[];
}

export default function ExpediaCruiseDashboard() {
  const [data, setData] = useState<DashboardData>({
    destinations: [],
    cruiseLines: [],
    departurePorts: [],
    activities: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAllData = async () => {
      try {
        setLoading(true);

        // Load all data in parallel
        const [destinations, cruiseLines, departurePorts, activities] =
          await Promise.all([
            fetchPopularCruiseDestinationsFromExpedia(6),
            fetchPopularCruiseLinesFromExpedia(6),
            fetchPopularDeparturePortsFromExpedia(6),
            fetchDestinationActivitiesFromExpedia("caribbean"),
          ]);

        setData({
          destinations,
          cruiseLines,
          departurePorts,
          activities: activities.slice(0, 6), // Limit to 6 for display
        });
      } catch (err) {
        setError("Failed to load cruise data. Please try again.");
        console.error("Error loading cruise data:", err);
      } finally {
        setLoading(false);
      }
    };

    loadAllData();
  }, []);

  if (loading) {
    return <OceanLoading text="Loading cruise destinations..." />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Card variant="glass" className="p-8 max-w-md text-center">
          <div className="flex justify-center items-center bg-destructive/10 mx-auto mb-4 rounded-full w-16 h-16">
            <svg
              className="w-8 h-8 text-destructive"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <CardTitle className="mb-2">Unable to Load Data</CardTitle>
          <p className="mb-4 text-muted-foreground text-sm">{error}</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-background to-muted/30 min-h-screen">
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
        <div className="relative mx-auto px-4 container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className="mb-6 gradient-ocean">
              Discover Your Perfect Ocean Adventure
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground text-xl">
              Explore the world's most beautiful destinations with premium
              cruise experiences. From tropical paradises to arctic wonders,
              your next adventure awaits.
            </p>
            <div className="flex sm:flex-row flex-col justify-center gap-4">
              <OceanButton size="lg" className="wave-animation">
                Explore Cruises
              </OceanButton>
              <WaveButton size="lg" variant="outline">
                View Destinations
              </WaveButton>
            </div>
          </motion.div>
        </div>
      </section>

      <main id="main-content" className="mx-auto px-4 pb-16 container">
        {/* Popular Destinations */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4">Popular Destinations</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Discover the most sought-after cruise destinations around the
              world
            </p>
          </motion.div>

          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data.destinations.slice(0, 6).map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Card variant="ocean" interactive className="h-full">
                  <CardHeader>
                    <div className="flex justify-center items-center bg-primary/10 mb-3 rounded-full w-12 h-12">
                      <MapPinIcon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">
                      {destination.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-muted-foreground text-sm">
                      {destination.description ||
                        "Explore this amazing destination"}
                    </p>
                    <div className="flex justify-between items-center">
                      <Badge variant="secondary" className="text-xs">
                        {destination.region || "Popular"}
                      </Badge>
                      <Button variant="ghost" size="sm" className="p-0">
                        <ChevronRightIcon className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Popular Cruise Lines */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="flex items-center mb-2 font-bold text-3xl text-gray-900">
                <svg
                  className="mr-3 w-8 h-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Most Popular Cruise Lines
              </h2>
              <p className="text-gray-600">
                Top-rated cruise lines with excellent service and amenities
              </p>
            </div>
            <Link href="/cruise-lines">
              <Button variant="outline" className="flex items-center">
                View All
                <ChevronRightIcon className="ml-1 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data.cruiseLines.map((line, index) => (
              <motion.div
                key={line.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-lg h-full transition-shadow duration-300 cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="relative flex-shrink-0 w-16 h-16">
                        <Image
                          src={line.logoUrl}
                          alt={line.name}
                          fill
                          className="rounded-lg object-contain"
                          onError={(e) => {
                            e.currentTarget.src =
                              "/images/cruise-lines/default-logo.png";
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                          {line.name}
                        </CardTitle>
                        <div className="flex items-center text-sm text-yellow-600">
                          <StarIcon className="mr-1 w-4 h-4 fill-current" />
                          {line.rating} ({line.reviewCount.toLocaleString()}{" "}
                          reviews)
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3 text-gray-600 text-sm line-clamp-2">
                      {line.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Fleet Size:</span>
                        <span className="font-medium">
                          {line.fleetSize} ships
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Price Range:</span>
                        <Badge
                          variant={
                            line.priceRange === "luxury"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {line.priceRange.charAt(0).toUpperCase() +
                            line.priceRange.slice(1)}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {line.specialties.slice(0, 2).map((specialty: string) => (
                        <Badge
                          key={specialty}
                          variant="outline"
                          className="text-xs"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Popular Departure Ports */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="flex items-center mb-2 font-bold text-3xl text-gray-900">
                <BuildingOffice2Icon className="mr-3 w-8 h-8 text-blue-600" />
                Popular Departure Ports
              </h2>
              <p className="text-gray-600">
                Convenient ports with modern facilities and great connections
              </p>
            </div>
            <Link href="/departure-ports">
              <Button variant="outline" className="flex items-center">
                View All
                <ChevronRightIcon className="ml-1 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data.departurePorts.map((port, index) => (
              <motion.div
                key={port.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-lg h-full transition-shadow duration-300 cursor-pointer">
                  <div className="relative rounded-t-lg h-32 overflow-hidden">
                    <Image
                      src={port.portImage}
                      alt={port.name}
                      fill
                      className="transition-transform duration-500 object-cover group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src = "/images/ports/default.jpg";
                      }}
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      {port.name}
                    </CardTitle>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPinIcon className="mr-1 w-4 h-4" />
                      {port.city}, {port.country}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2 mb-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Avg. Docking:</span>
                        <span className="font-medium">
                          {port.averageDockingDuration}h
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Type:</span>
                        <Badge variant="outline" className="text-xs">
                          {port.portType.charAt(0).toUpperCase() +
                            port.portType.slice(1)}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {port.facilities.slice(0, 2).map((facility: string) => (
                        <Badge
                          key={facility}
                          variant="outline"
                          className="text-xs"
                        >
                          {facility}
                        </Badge>
                      ))}
                      {port.facilities.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{port.facilities.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Featured Activities */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="flex items-center mb-2 font-bold text-3xl text-gray-900">
                <PlayCircleIcon className="mr-3 w-8 h-8 text-blue-600" />
                Featured Destination Activities
              </h2>
              <p className="text-gray-600">
                Amazing experiences and excursions at cruise destinations
              </p>
            </div>
            <Link href="/destination-activities">
              <Button variant="outline" className="flex items-center">
                View All
                <ChevronRightIcon className="ml-1 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data.activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-lg h-full transition-shadow duration-300 cursor-pointer">
                  <div className="relative rounded-t-lg h-32 overflow-hidden">
                    <Image
                      src={activity.imageUrl}
                      alt={activity.name}
                      fill
                      className="transition-transform duration-500 object-cover group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src = "/images/activities/default.jpg";
                      }}
                    />
                    <div className="top-2 right-2 absolute">
                      <Badge className="bg-black/60 border-none text-white">
                        {activity.category.charAt(0).toUpperCase() +
                          activity.category.slice(1)}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      {activity.name}
                    </CardTitle>
                    <div className="flex items-center text-sm text-yellow-600">
                      <StarIcon className="mr-1 w-4 h-4 fill-current" />
                      {activity.rating} ({activity.reviewCount.toLocaleString()}
                      )
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="mb-3 text-gray-600 text-sm line-clamp-2">
                      {activity.description}
                    </p>
                    <div className="gap-2 grid grid-cols-2 mb-3 text-sm">
                      <div className="flex items-center text-gray-600">
                        <ClockIcon className="mr-1 w-3 h-3" />
                        {activity.durationHours}h
                      </div>
                      <div className="flex items-center text-gray-600">
                        <CurrencyDollarIcon className="mr-1 w-3 h-3" />$
                        {activity.priceRange.min}-{activity.priceRange.max}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      {activity.ageSuitability.family_friendly && (
                        <Badge variant="outline" className="text-xs">
                          <UserGroupIcon className="mr-1 w-3 h-3" />
                          Family
                        </Badge>
                      )}
                      <Badge variant="outline" className="text-xs">
                        {activity.difficultyLevel.charAt(0).toUpperCase() +
                          activity.difficultyLevel.slice(1)}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-2xl text-center text-white"
        >
          <h2 className="mb-4 font-bold text-3xl">
            Ready to Start Your Cruise Adventure?
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-blue-100">
            Explore our comprehensive collection of cruise destinations, lines,
            and activities. Find the perfect cruise that matches your travel
            dreams and create memories that will last a lifetime.
          </p>
          <div className="flex sm:flex-row flex-col justify-center gap-4">
            <Link href="/cruise-destinations">
              <Button
                size="lg"
                className="bg-white hover:bg-blue-50 text-blue-600"
              >
                Browse Destinations
              </Button>
            </Link>
            <Link href="/cruise-lines">
              <Button
                size="lg"
                variant="outline"
                className="hover:bg-white border-white text-white hover:text-blue-600"
              >
                Compare Cruise Lines
              </Button>
            </Link>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
