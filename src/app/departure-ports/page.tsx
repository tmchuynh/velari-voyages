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
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";
import { fetchPopularDeparturePortsFromExpedia } from "@/lib/utils/get/expedia-cruises";
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

interface CruisePort {
  id: string;
  name: string;
  city: string;
  country: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  portType: "departure" | "destination" | "both";
  facilities: string[];
  popularCruiseLines: string[];
  averageDockingDuration: number;
  portImage: string;
}

export default function DeparturePortsPage() {
  const [ports, setPorts] = useState<CruisePort[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter and sort states
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortBy, setSortBy] = useState<"name" | "country" | "city">("name");
  const [countryFilter, setCountryFilter] = useState<string>("all");
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  // Load departure ports on mount
  useEffect(() => {
    const loadPorts = async () => {
      try {
        setLoading(true);
        const portsData = await fetchPopularDeparturePortsFromExpedia();
        setPorts(portsData);
      } catch (err) {
        setError("Failed to load departure ports. Please try again.");
        console.error("Error loading departure ports:", err);
      } finally {
        setLoading(false);
      }
    };

    loadPorts();
  }, []);

  // Filter and sort ports
  const filteredAndSortedPorts = useMemo(() => {
    const filtered = ports.filter((port) => {
      const matchesSearch =
        port.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        port.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        port.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        port.facilities.some((facility) =>
          facility.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCountry =
        countryFilter === "all" || port.country === countryFilter;

      return matchesSearch && matchesCountry;
    });

    // Sort ports
    filtered.sort((a, b) => {
      let comparison = 0;

      if (sortBy === "name") {
        comparison = a.name.localeCompare(b.name);
      } else if (sortBy === "city") {
        comparison = a.city.localeCompare(b.city);
      } else if (sortBy === "country") {
        comparison = a.country.localeCompare(b.country);
      }

      return sortOrder === "asc" ? comparison : -comparison;
    });

    return filtered;
  }, [ports, searchTerm, sortOrder, sortBy, countryFilter]);

  // Get unique countries for filter dropdown
  const availableCountries = useMemo(() => {
    const countries = [...new Set(ports.map((port) => port.country))];
    return countries.sort();
  }, [ports]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedPorts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredAndSortedPorts.slice(startIndex, endIndex);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, sortOrder, sortBy, countryFilter, itemsPerPage]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="mx-auto border-b-2 border-blue-600 rounded-full w-32 h-32 animate-spin"></div>
          <p className="mt-4 text-gray-600 text-lg">
            Loading departure ports...
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
              Popular Departure Ports
            </h1>
            <p className="mx-auto max-w-3xl text-gray-600 text-xl">
              Explore the world's busiest and most convenient cruise departure
              ports, featuring modern facilities and access to amazing cruise
              itineraries.
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
                placeholder="Search ports, cities, or facilities..."
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
                  {/* Country Filter */}
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Select
                      value={countryFilter}
                      onValueChange={setCountryFilter}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All Countries" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Countries</SelectItem>
                        {availableCountries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
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
                      onValueChange={(value: "name" | "country" | "city") =>
                        setSortBy(value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="name">Port Name</SelectItem>
                        <SelectItem value="city">City</SelectItem>
                        <SelectItem value="country">Country</SelectItem>
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
                        <SelectItem value="asc">A to Z</SelectItem>
                        <SelectItem value="desc">Z to A</SelectItem>
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
            {Math.min(endIndex, filteredAndSortedPorts.length)} of{" "}
            {filteredAndSortedPorts.length} departure ports
          </p>
        </div>

        {/* Ports Grid */}
        {currentItems.length === 0 ? (
          <div className="py-12 text-center">
            <BuildingOffice2Icon className="mx-auto mb-4 w-16 h-16 text-gray-300" />
            <h3 className="mb-2 font-medium text-gray-900 text-lg">
              No ports found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search criteria or filters.
            </p>
          </div>
        ) : (
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {currentItems.map((port, index) => (
              <motion.div
                key={port.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-lg h-full transition-shadow duration-300 cursor-pointer">
                  <div className="relative rounded-t-lg h-48 overflow-hidden">
                    <Image
                      src={port.portImage}
                      alt={port.name}
                      fill
                      className="transition-transform duration-500 object-cover group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src = "/images/ports/default.jpg";
                      }}
                    />
                    <div className="top-2 right-2 absolute">
                      <Badge
                        variant="secondary"
                        className="bg-black/60 border-none text-white"
                      >
                        {port.portType === "departure"
                          ? "Departure"
                          : port.portType === "destination"
                            ? "Destination"
                            : "Both"}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle className="mb-2 text-xl group-hover:text-blue-600 transition-colors">
                      {port.name}
                    </CardTitle>
                    <div className="flex items-center mb-2 text-gray-600 text-sm">
                      <MapPinIcon className="mr-1 w-4 h-4" />
                      {port.city}, {port.country}
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Average Docking Duration */}
                    <div className="flex items-center mb-3 text-gray-600 text-sm">
                      <ClockIcon className="mr-1 w-4 h-4" />
                      Avg. docking: {port.averageDockingDuration} hours
                    </div>

                    {/* Facilities */}
                    {port.facilities?.length > 0 && (
                      <div className="mb-4">
                        <p className="mb-2 font-medium text-gray-700 text-xs">
                          Facilities:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {port.facilities.slice(0, 3).map((facility) => (
                            <Badge
                              key={facility}
                              variant="outline"
                              className="text-xs"
                            >
                              {facility}
                            </Badge>
                          ))}
                          {port.facilities.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{port.facilities.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Popular Cruise Lines */}
                    {port.popularCruiseLines?.length > 0 && (
                      <div className="mb-4">
                        <p className="mb-2 font-medium text-gray-700 text-xs">
                          Popular Cruise Lines:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {port.popularCruiseLines.slice(0, 2).map((line) => (
                            <Badge
                              key={line}
                              variant="secondary"
                              className="text-xs"
                            >
                              {line}
                            </Badge>
                          ))}
                          {port.popularCruiseLines.length > 2 && (
                            <Badge variant="secondary" className="text-xs">
                              +{port.popularCruiseLines.length - 2} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-gray-500 text-xs">
                        <EyeIcon className="mr-1 w-3 h-3" />
                        {port.coordinates.latitude.toFixed(4)},{" "}
                        {port.coordinates.longitude.toFixed(4)}
                      </div>
                      <Link
                        href={`/departure-ports/${port.id}`}
                        className="flex items-center font-medium text-blue-600 text-sm hover:text-blue-800"
                      >
                        View Cruises
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
