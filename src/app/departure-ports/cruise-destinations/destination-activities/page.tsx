"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  XMarkIcon,
  ChevronRightIcon,
  EyeIcon,
  MapPinIcon,
  ClockIcon,
  CurrencyDollarIcon,
  StarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { fetchDestinationActivitiesFromExpedia } from "@/lib/utils/get/expedia-cruises";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface DestinationActivity {
  id: string;
  name: string;
  description: string;
  category:
    | "sightseeing"
    | "adventure"
    | "cultural"
    | "food"
    | "shopping"
    | "nature"
    | "entertainment";
  durationHours: number;
  priceRange: {
    min: number;
    max: number;
    currency: string;
  };
  difficultyLevel: "easy" | "moderate" | "challenging";
  ageSuitability: {
    minAge?: number;
    familyFriendly: boolean;
  };
  bookingRequired: boolean;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  location: {
    latitude: number;
    longitude: number;
  };
}

export default function DestinationActivitiesPage() {
  const [activities, setActivities] = useState<DestinationActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter and sort states
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [sortBy, setSortBy] = useState<
    "name" | "rating" | "price" | "duration"
  >("rating");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [difficultyFilter, setDifficultyFilter] = useState<string>("all");
  const [familyFriendlyFilter, setFamilyFriendlyFilter] =
    useState<string>("all");
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  // Load activities on mount
  useEffect(() => {
    const loadActivities = async () => {
      try {
        setLoading(true);
        // Using a sample destination ID for demonstration
        const activitiesData =
          await fetchDestinationActivitiesFromExpedia("caribbean");
        // Transform the data to match our interface
        const transformedData = activitiesData.map((activity) => ({
          ...activity,
          ageSuitability: {
            minAge: activity.ageSuitability.min_age,
            familyFriendly: activity.ageSuitability.family_friendly,
          },
        }));
        setActivities(transformedData);
      } catch (err) {
        setError("Failed to load destination activities. Please try again.");
        console.error("Error loading destination activities:", err);
      } finally {
        setLoading(false);
      }
    };

    loadActivities();
  }, []);

  // Filter and sort activities
  const filteredAndSortedActivities = useMemo(() => {
    const filtered = activities.filter((activity) => {
      const matchesSearch =
        activity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        activity.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        activity.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        categoryFilter === "all" || activity.category === categoryFilter;
      const matchesDifficulty =
        difficultyFilter === "all" ||
        activity.difficultyLevel === difficultyFilter;
      const matchesFamilyFriendly =
        familyFriendlyFilter === "all" ||
        (familyFriendlyFilter === "yes" &&
          activity.ageSuitability.familyFriendly) ||
        (familyFriendlyFilter === "no" &&
          !activity.ageSuitability.familyFriendly);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesDifficulty &&
        matchesFamilyFriendly
      );
    });

    // Sort activities
    filtered.sort((a, b) => {
      let comparison = 0;

      if (sortBy === "name") {
        comparison = a.name.localeCompare(b.name);
      } else if (sortBy === "rating") {
        comparison = a.rating - b.rating;
      } else if (sortBy === "price") {
        comparison = a.priceRange.min - b.priceRange.min;
      } else if (sortBy === "duration") {
        comparison = a.durationHours - b.durationHours;
      }

      return sortOrder === "asc" ? comparison : -comparison;
    });

    return filtered;
  }, [
    activities,
    searchTerm,
    sortOrder,
    sortBy,
    categoryFilter,
    difficultyFilter,
    familyFriendlyFilter,
  ]);

  // Pagination
  const totalPages = Math.ceil(
    filteredAndSortedActivities.length / itemsPerPage
  );
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredAndSortedActivities.slice(startIndex, endIndex);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [
    searchTerm,
    sortOrder,
    sortBy,
    categoryFilter,
    difficultyFilter,
    familyFriendlyFilter,
    itemsPerPage,
  ]);

  // Category options
  const categories = [
    { value: "all", label: "All Categories" },
    { value: "sightseeing", label: "Sightseeing" },
    { value: "adventure", label: "Adventure" },
    { value: "cultural", label: "Cultural" },
    { value: "food", label: "Food & Dining" },
    { value: "shopping", label: "Shopping" },
    { value: "nature", label: "Nature" },
    { value: "entertainment", label: "Entertainment" },
  ];

  const difficultyLevels = [
    { value: "all", label: "All Levels" },
    { value: "easy", label: "Easy" },
    { value: "moderate", label: "Moderate" },
    { value: "challenging", label: "Challenging" },
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      sightseeing: "bg-blue-100 text-blue-800",
      adventure: "bg-red-100 text-red-800",
      cultural: "bg-purple-100 text-purple-800",
      food: "bg-orange-100 text-orange-800",
      shopping: "bg-pink-100 text-pink-800",
      nature: "bg-green-100 text-green-800",
      entertainment: "bg-yellow-100 text-yellow-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors: Record<string, string> = {
      easy: "bg-green-100 text-green-800",
      moderate: "bg-yellow-100 text-yellow-800",
      challenging: "bg-red-100 text-red-800",
    };
    return colors[difficulty] || "bg-gray-100 text-gray-800";
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="mx-auto border-b-2 border-blue-600 rounded-full w-32 h-32 animate-spin"></div>
          <p className="mt-4 text-gray-600 text-lg">
            Loading destination activities...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h1 className="mb-4 font-bold text-2xl text-red-600">Error</h1>
          <p className="mb-4 text-gray-600">{error}</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
          <div className="text-center">
            <h1 className="mb-4 font-bold text-4xl text-gray-900">
              Destination Activities & Excursions
            </h1>
            <p className="mx-auto max-w-3xl text-gray-600 text-xl">
              Discover amazing activities and shore excursions available at
              cruise destinations. From cultural tours to adventure sports, find
              the perfect way to explore each port.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        {/* Search and Filter Controls */}
        <div className="mb-8">
          <div className="flex lg:flex-row flex-col justify-between items-center gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <MagnifyingGlassIcon className="top-1/2 left-3 absolute w-5 h-5 text-gray-400 transform -translate-y-1/2" />
              <Input
                type="text"
                placeholder="Search activities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filter Toggle */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <AdjustmentsHorizontalIcon className="w-4 h-4" />
              Filters
              {showFilters ? (
                <XMarkIcon className="w-4 h-4" />
              ) : (
                <ChevronRightIcon className="w-4 h-4" />
              )}
            </Button>
          </div>

          {/* Filter Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-white shadow-sm mt-4 p-4 border rounded-lg"
              >
                <div className="gap-4 grid grid-cols-1 md:grid-cols-6">
                  {/* Category Filter */}
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select
                      value={categoryFilter}
                      onValueChange={setCategoryFilter}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem
                            key={category.value}
                            value={category.value}
                          >
                            {category.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Difficulty Filter */}
                  <div>
                    <Label htmlFor="difficulty">Difficulty</Label>
                    <Select
                      value={difficultyFilter}
                      onValueChange={setDifficultyFilter}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All Levels" />
                      </SelectTrigger>
                      <SelectContent>
                        {difficultyLevels.map((level) => (
                          <SelectItem key={level.value} value={level.value}>
                            {level.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Family Friendly Filter */}
                  <div>
                    <Label htmlFor="familyFriendly">Family Friendly</Label>
                    <Select
                      value={familyFriendlyFilter}
                      onValueChange={setFamilyFriendlyFilter}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Activities</SelectItem>
                        <SelectItem value="yes">Family Friendly</SelectItem>
                        <SelectItem value="no">Adults Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Sort By */}
                  <div>
                    <Label htmlFor="sortBy">Sort By</Label>
                    <Select
                      value={sortBy}
                      onValueChange={(
                        value: "name" | "rating" | "price" | "duration"
                      ) => setSortBy(value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rating">Rating</SelectItem>
                        <SelectItem value="name">Name</SelectItem>
                        <SelectItem value="price">Price</SelectItem>
                        <SelectItem value="duration">Duration</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Sort Order */}
                  <div>
                    <Label htmlFor="sortOrder">Order</Label>
                    <Select
                      value={sortOrder}
                      onValueChange={(value: "asc" | "desc") =>
                        setSortOrder(value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="desc">
                          {sortBy === "rating"
                            ? "Highest"
                            : sortBy === "price"
                              ? "Highest"
                              : "Z to A"}
                        </SelectItem>
                        <SelectItem value="asc">
                          {sortBy === "rating"
                            ? "Lowest"
                            : sortBy === "price"
                              ? "Lowest"
                              : "A to Z"}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Items Per Page */}
                  <div>
                    <Label htmlFor="itemsPerPage">Per Page</Label>
                    <Select
                      value={itemsPerPage.toString()}
                      onValueChange={(value) => setItemsPerPage(Number(value))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="6">6</SelectItem>
                        <SelectItem value="12">12</SelectItem>
                        <SelectItem value="24">24</SelectItem>
                        <SelectItem value="48">48</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {startIndex + 1}-
            {Math.min(endIndex, filteredAndSortedActivities.length)} of{" "}
            {filteredAndSortedActivities.length} activities
          </p>
        </div>

        {/* Activities Grid */}
        {currentItems.length === 0 ? (
          <div className="py-12 text-center">
            <MapPinIcon className="mx-auto mb-4 w-16 h-16 text-gray-300" />
            <h3 className="mb-2 font-medium text-gray-900 text-lg">
              No activities found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search criteria or filters.
            </p>
          </div>
        ) : (
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {currentItems.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-lg h-full transition-shadow duration-300 cursor-pointer">
                  <div className="relative rounded-t-lg h-48 overflow-hidden">
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
                      <Badge className={getCategoryColor(activity.category)}>
                        {activity.category.charAt(0).toUpperCase() +
                          activity.category.slice(1)}
                      </Badge>
                    </div>
                    <div className="top-2 left-2 absolute">
                      <Badge
                        className={getDifficultyColor(activity.difficultyLevel)}
                      >
                        {activity.difficultyLevel.charAt(0).toUpperCase() +
                          activity.difficultyLevel.slice(1)}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle className="mb-2 text-xl group-hover:text-blue-600 transition-colors">
                      {activity.name}
                    </CardTitle>
                    <div className="flex items-center mb-2 text-sm text-yellow-600">
                      <StarIcon className="mr-1 w-4 h-4 fill-current" />
                      {activity.rating.toFixed(1)} (
                      {activity.reviewCount.toLocaleString()} reviews)
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="mb-4 text-gray-600 text-sm line-clamp-2">
                      {activity.description}
                    </p>

                    {/* Duration and Price */}
                    <div className="gap-4 grid grid-cols-2 mb-4">
                      <div className="flex items-center text-gray-600 text-sm">
                        <ClockIcon className="mr-1 w-4 h-4" />
                        {activity.durationHours}h
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <CurrencyDollarIcon className="mr-1 w-4 h-4" />$
                        {activity.priceRange.min}-${activity.priceRange.max}
                      </div>
                    </div>

                    {/* Family Friendly & Booking Required */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {activity.ageSuitability.familyFriendly && (
                        <Badge variant="outline" className="text-xs">
                          <UserGroupIcon className="mr-1 w-3 h-3" />
                          Family Friendly
                        </Badge>
                      )}
                      {activity.bookingRequired && (
                        <Badge
                          variant="outline"
                          className="text-orange-600 text-xs"
                        >
                          Booking Required
                        </Badge>
                      )}
                      {activity.ageSuitability.minAge && (
                        <Badge variant="outline" className="text-xs">
                          Age {activity.ageSuitability.minAge}+
                        </Badge>
                      )}
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-gray-500 text-xs">
                        <EyeIcon className="mr-1 w-3 h-3" />
                        {activity.reviewCount.toLocaleString()} reviews
                      </div>
                      <Link
                        href={`/activities/${activity.id}`}
                        className="flex items-center font-medium text-blue-600 text-sm hover:text-blue-800"
                      >
                        Book Now
                        <ChevronRightIcon className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) setCurrentPage(currentPage - 1);
                    }}
                    className={
                      currentPage === 1 ? "pointer-events-none opacity-50" : ""
                    }
                  />
                </PaginationItem>

                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const pageNumber =
                    Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i;
                  if (pageNumber > totalPages) return null;

                  return (
                    <PaginationItem key={pageNumber}>
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(pageNumber);
                        }}
                        isActive={currentPage === pageNumber}
                      >
                        {pageNumber}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages)
                        setCurrentPage(currentPage + 1);
                    }}
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none opacity-50"
                        : ""
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </div>
  );
}
