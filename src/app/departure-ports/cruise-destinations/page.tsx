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
  SunIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { fetchPopularCruiseDestinationsFromExpedia } from "@/lib/utils/get/expedia-cruises";
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

interface CruiseDestination {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  country: string;
  region: string;
  popularityScore: number;
  bestTimeToVisit: string[];
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export default function CruiseDestinationsPage() {
  const [destinations, setDestinations] = useState<CruiseDestination[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter and sort states
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [sortBy, setSortBy] = useState<"name" | "popularity">("popularity");
  const [regionFilter, setRegionFilter] = useState<string>("all");
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  // Load cruise destinations on mount
  useEffect(() => {
    const loadDestinations = async () => {
      try {
        setLoading(true);
        const destinationsData =
          await fetchPopularCruiseDestinationsFromExpedia();
        setDestinations(destinationsData);
      } catch (err) {
        setError("Failed to load cruise destinations. Please try again.");
        console.error("Error loading cruise destinations:", err);
      } finally {
        setLoading(false);
      }
    };

    loadDestinations();
  }, []);

  // Filter and sort destinations
  const filteredAndSortedDestinations = useMemo(() => {
    const filtered = destinations.filter((destination) => {
      const matchesSearch =
        destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        destination.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        destination.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        destination.region.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesRegion =
        regionFilter === "all" || destination.region === regionFilter;

      return matchesSearch && matchesRegion;
    });

    // Sort destinations
    filtered.sort((a, b) => {
      let comparison = 0;

      if (sortBy === "name") {
        comparison = a.name.localeCompare(b.name);
      } else if (sortBy === "popularity") {
        comparison = a.popularityScore - b.popularityScore;
      }

      return sortOrder === "asc" ? comparison : -comparison;
    });

    return filtered;
  }, [destinations, searchTerm, sortOrder, sortBy, regionFilter]);

  // Get unique regions for filter dropdown
  const availableRegions = useMemo(() => {
    const regions = [...new Set(destinations.map((dest) => dest.region))];
    return regions.sort();
  }, [destinations]);

  // Pagination
  const totalPages = Math.ceil(
    filteredAndSortedDestinations.length / itemsPerPage
  );
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredAndSortedDestinations.slice(
    startIndex,
    endIndex
  );

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, sortOrder, sortBy, regionFilter, itemsPerPage]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="mx-auto border-b-2 border-blue-600 rounded-full w-32 h-32 animate-spin"></div>
          <p className="mt-4 text-gray-600 text-lg">
            Loading cruise destinations...
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
              Popular Cruise Destinations
            </h1>
            <p className="mx-auto max-w-3xl text-gray-600 text-xl">
              Discover the world's most sought-after cruise destinations, from
              tropical paradises to historic Mediterranean ports and pristine
              wilderness.
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
                placeholder="Search destinations..."
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
                <div className="gap-4 grid grid-cols-1 md:grid-cols-4">
                  {/* Region Filter */}
                  <div>
                    <Label htmlFor="region">Region</Label>
                    <Select
                      value={regionFilter}
                      onValueChange={setRegionFilter}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All Regions" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Regions</SelectItem>
                        {availableRegions.map((region) => (
                          <SelectItem key={region} value={region}>
                            {region}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Sort By */}
                  <div>
                    <Label htmlFor="sortBy">Sort By</Label>
                    <Select
                      value={sortBy}
                      onValueChange={(value: "name" | "popularity") =>
                        setSortBy(value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="popularity">Popularity</SelectItem>
                        <SelectItem value="name">Name</SelectItem>
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
                          {sortBy === "popularity" ? "Most Popular" : "Z to A"}
                        </SelectItem>
                        <SelectItem value="asc">
                          {sortBy === "popularity" ? "Least Popular" : "A to Z"}
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
            {Math.min(endIndex, filteredAndSortedDestinations.length)} of{" "}
            {filteredAndSortedDestinations.length} destinations
          </p>
        </div>

        {/* Destinations Grid */}
        {currentItems.length === 0 ? (
          <div className="py-12 text-center">
            <GlobeAltIcon className="mx-auto mb-4 w-16 h-16 text-gray-300" />
            <h3 className="mb-2 font-medium text-gray-900 text-lg">
              No destinations found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search criteria or filters.
            </p>
          </div>
        ) : (
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {currentItems.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-lg h-full transition-shadow duration-300 cursor-pointer">
                  <div className="relative rounded-t-lg h-48 overflow-hidden">
                    <Image
                      src={destination.imageUrl}
                      alt={destination.name}
                      fill
                      className="transition-transform duration-500 object-cover group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src =
                          "/images/destinations/default.jpg";
                      }}
                    />
                    <div className="top-2 right-2 absolute">
                      <Badge
                        variant="secondary"
                        className="bg-black/60 border-none text-white"
                      >
                        <SunIcon className="mr-1 w-3 h-3" />
                        {destination.popularityScore}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle className="mb-2 text-xl group-hover:text-blue-600 transition-colors">
                      {destination.name}
                    </CardTitle>
                    <div className="flex items-center mb-2 text-gray-600 text-sm">
                      <MapPinIcon className="mr-1 w-4 h-4" />
                      {destination.country} • {destination.region}
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="mb-4 text-gray-600 text-sm line-clamp-3">
                      {destination.description}
                    </p>

                    {destination.bestTimeToVisit?.length > 0 && (
                      <div className="mb-4">
                        <p className="mb-2 font-medium text-gray-700 text-xs">
                          Best Time to Visit:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {destination.bestTimeToVisit
                            .slice(0, 3)
                            .map((month) => (
                              <Badge
                                key={month}
                                variant="outline"
                                className="text-xs"
                              >
                                {month}
                              </Badge>
                            ))}
                          {destination.bestTimeToVisit.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{destination.bestTimeToVisit.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-gray-500 text-xs">
                        <EyeIcon className="mr-1 w-3 h-3" />
                        Popularity: {destination.popularityScore}/100
                      </div>
                      <Link
                        href={`/cruise-destinations/${destination.id}`}
                        className="flex items-center font-medium text-blue-600 text-sm hover:text-blue-800"
                      >
                        Explore
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
