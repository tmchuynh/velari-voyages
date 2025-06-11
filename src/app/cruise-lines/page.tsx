"use client";
import React, { useState, useEffect, useMemo } from "react";
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  XMarkIcon,
  ChevronRightIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import { fetchCruiseLinesFromVecto } from "@/lib/utils/get/cruises";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toggle } from "@/components/ui/toggle";
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

export default function CruiseLinesPage() {
  const [cruiseLines, setCruiseLines] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter and sort states
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Load cruise lines on mount
  useEffect(() => {
    const loadCruiseLines = async () => {
      try {
        setLoading(true);
        const lines = await fetchCruiseLinesFromVecto();
        setCruiseLines(lines);
      } catch (err) {
        setError("Failed to load cruise lines. Please try again.");
        console.error("Error loading cruise lines:", err);
      } finally {
        setLoading(false);
      }
    };

    loadCruiseLines();
  }, []);

  // Filter and sort cruise lines
  const filteredAndSortedLines = useMemo(() => {
    const filtered = cruiseLines.filter(
      (line) =>
        line.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        line.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort alphabetically
    filtered.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (sortOrder === "asc") {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });

    return filtered;
  }, [cruiseLines, searchTerm, sortOrder]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedLines.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredAndSortedLines.slice(startIndex, endIndex);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, sortOrder, itemsPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Background animation variants
  const backgroundVariants = {
    animate: {
      background: [
        "linear-gradient(45deg, #0f172a, #1e293b, #334155)",
        "linear-gradient(45deg, #1e293b, #334155, #475569)",
        "linear-gradient(45deg, #334155, #475569, #64748b)",
        "linear-gradient(45deg, #0f172a, #1e293b, #334155)",
      ],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="mx-auto mb-4 border-4 border-t-transparent border-border rounded-full w-16 h-16 animate-spin" />
          <p className="text-lg">Loading cruise lines...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-md text-center">
          <div className="rounded-xl">
            <p className="mb-4 text-red-300">{error}</p>
            <Button onClick={() => window.location.reload()}>Try Again</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen"
      variants={backgroundVariants}
      animate="animate"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="top-1/4 left-1/4 absolute bg-card blur-3xl rounded-full w-96 h-96"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="right-1/4 bottom-1/4 absolute bg-card/10 blur-3xl rounded-full w-96 h-96"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 bg-white/10 backdrop-blur-md border-white/20 border-b"
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-7xl">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-3xl text-white">Cruise Lines</h1>
              <p className="mt-1 text-gray-300">
                Discover premium cruise lines and their unique experiences
              </p>
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              {/* Items per page selector */}
              <div className="flex items-center space-x-2">
                <Label className="text-sm text-white">Show:</Label>
                <Select
                  value={itemsPerPage.toString()}
                  onValueChange={(value) => setItemsPerPage(Number(value))}
                >
                  <SelectTrigger className="bg-white/10 border-white/20 w-20 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="15">15</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                    <SelectItem value="25">25</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Filter toggle */}
              <motion.button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  showFilters
                    ? "bg-blue-500/30 text-blue-300"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AdjustmentsHorizontalIcon className="w-5 h-5" />
                <span className="sm:block hidden">Filters</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        <div className="flex gap-6">
          {/* Sidebar - Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.aside
                initial={{ opacity: 0, x: -300, width: 0 }}
                animate={{ opacity: 1, x: 0, width: 320 }}
                exit={{ opacity: 0, x: -300, width: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex-shrink-0"
              >
                <Card className="top-8 sticky bg-card/10 backdrop-blur-md border-border/20">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="">Filters & Sorting</CardTitle>
                      <button
                        onClick={() => setShowFilters(false)}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <XMarkIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Search */}
                    <div className="space-y-2">
                      <Label className="text-white">Search Cruise Lines</Label>
                      <div className="relative">
                        <MagnifyingGlassIcon className="top-1/2 left-3 absolute w-4 h-4 text-gray-400 transform -translate-y-1/2" />
                        <Input
                          type="text"
                          placeholder="Search by name or description..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="bg-white/5 pl-10 border-white/20 focus:border-blue-400 text-white placeholder-gray-400"
                        />
                      </div>
                    </div>

                    {/* Sort Order */}
                    <div className="space-y-2">
                      <Label className="text-white">Sort Order</Label>
                      <div className="flex items-center space-x-2">
                        <Toggle
                          pressed={sortOrder === "asc"}
                          onPressedChange={(pressed) =>
                            setSortOrder(pressed ? "asc" : "desc")
                          }
                          className="flex items-center space-x-2 data-[state=on]:bg-blue-500/30 data-[state=on]:text-blue-300"
                        >
                          {sortOrder === "asc" ? (
                            <ArrowUpIcon className="w-4 h-4" />
                          ) : (
                            <ArrowDownIcon className="w-4 h-4" />
                          )}
                          <span>A-Z</span>
                        </Toggle>
                        <span className="text-gray-400 text-sm">
                          {sortOrder === "asc" ? "Ascending" : "Descending"}
                        </span>
                      </div>
                    </div>

                    {/* Results Info */}
                    <div className="bg-blue-500/20 p-3 border border-blue-400/30 rounded-lg">
                      <p className="text-blue-300 text-sm">
                        Showing {currentItems.length} of{" "}
                        {filteredAndSortedLines.length} cruise lines
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            {/* Results Grid */}
            <motion.div
              layout
              className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8"
            >
              <AnimatePresence mode="popLayout">
                {currentItems.map((line, index) => (
                  <motion.div
                    key={line.id}
                    layout
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      layout: { duration: 0.3 },
                    }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="group bg-white/10 hover:bg-white/15 backdrop-blur-md border-white/20 h-full text-white transition-all duration-300">
                      <CardContent className="p-6">
                        {/* Logo */}
                        <div className="mb-4">
                          <div className="flex justify-center items-center bg-gradient-to-br from-blue-500 to-purple-600 mb-3 rounded-xl w-16 h-16">
                            {line.imageUrl ? (
                              <Image
                                src={line.imageUrl}
                                alt={`${line.name} logo`}
                                width={48}
                                height={48}
                                className="rounded-lg object-cover"
                              />
                            ) : (
                              <span className="font-bold text-lg text-white">
                                {line.name.charAt(0)}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Cruise Line Name */}
                        <div className="mb-3">
                          <h3 className="font-semibold text-white text-xl group-hover:text-blue-300 transition-colors">
                            {line.name}
                          </h3>
                          <p className="text-gray-400 text-sm">
                            Code: {line.code}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="mb-4 text-gray-300 text-sm line-clamp-3">
                          {line.description ||
                            "Discover exceptional cruise experiences with premium amenities and destinations."}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex justify-between items-center">
                          <Link
                            href={`/cruise-lines/${line.id}`}
                            className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            <span className="font-medium text-sm">
                              View Details
                            </span>
                            <ChevronRightIcon className="w-4 h-4" />
                          </Link>

                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-blue-500/20 hover:bg-blue-500/30 p-2 rounded-lg transition-colors"
                          >
                            <EyeIcon className="w-4 h-4 text-blue-300" />
                          </motion.button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* No Results */}
            {filteredAndSortedLines.length === 0 && !loading && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-12 text-center"
              >
                <div className="bg-white/10 backdrop-blur-md p-8 border border-white/20 rounded-xl">
                  <MagnifyingGlassIcon className="mx-auto mb-4 w-16 h-16 text-gray-400" />
                  <h3 className="mb-2 font-semibold text-white text-xl">
                    No cruise lines found
                  </h3>
                  <p className="mb-4 text-gray-300">
                    Try adjusting your search terms or filters
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSortOrder("asc");
                    }}
                    className="bg-blue-500/20 hover:bg-blue-500/30 px-4 py-2 rounded-lg text-blue-300 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              </motion.div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="bg-white/10 backdrop-blur-md p-4 border border-white/20 rounded-xl">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          onClick={() =>
                            handlePageChange(Math.max(1, currentPage - 1))
                          }
                          className={`${
                            currentPage === 1
                              ? "pointer-events-none opacity-50"
                              : "text-white hover:bg-white/20"
                          }`}
                        />
                      </PaginationItem>

                      {Array.from({ length: totalPages }, (_, i) => i + 1)
                        .filter((page) => {
                          const distance = Math.abs(page - currentPage);
                          return (
                            distance === 0 ||
                            distance === 1 ||
                            page === 1 ||
                            page === totalPages
                          );
                        })
                        .map((page, index, array) => {
                          const showEllipsis =
                            index > 0 && array[index - 1] !== page - 1;

                          return (
                            <React.Fragment key={page}>
                              {showEllipsis && (
                                <PaginationItem>
                                  <span className="px-3 py-2 text-gray-400">
                                    ...
                                  </span>
                                </PaginationItem>
                              )}
                              <PaginationItem>
                                <PaginationLink
                                  onClick={() => handlePageChange(page)}
                                  isActive={currentPage === page}
                                  className={`${
                                    currentPage === page
                                      ? "bg-blue-500/30 text-blue-300 border-blue-400/50"
                                      : "text-white hover:bg-white/20"
                                  }`}
                                >
                                  {page}
                                </PaginationLink>
                              </PaginationItem>
                            </React.Fragment>
                          );
                        })}

                      <PaginationItem>
                        <PaginationNext
                          onClick={() =>
                            handlePageChange(
                              Math.min(totalPages, currentPage + 1)
                            )
                          }
                          className={`${
                            currentPage === totalPages
                              ? "pointer-events-none opacity-50"
                              : "text-white hover:bg-white/20"
                          }`}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </main>
    </motion.div>
  );
}
