"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  getCruiseLineDetails,
  getPopularCruiseLines,
  type CruiseLine,
} from "../../lib/utils/api/expedia-cruise-api";
import Image from "next/image";

export default function CruiseLinesPage() {
  const [cruiseLines, setCruiseLines] = useState<CruiseLine[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCruiseLines = async () => {
      try {
        setLoading(true);
        const response = await getPopularCruiseLines({ limit: 20 });
        if (response.success && response.data) {
          setCruiseLines(response.data);
        } else {
          setError("Failed to fetch cruise lines");
        }
      } catch (err) {
        setError("An error occurred while fetching cruise lines");
        console.error("Error fetching cruise lines:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCruiseLines();
  }, []);

  if (loading) {
    return (
      <div className="mx-auto px-4 py-8 container">
        <div className="flex justify-center items-center min-h-64">
          <div className="border-b-2 border-blue-600 rounded-full w-12 h-12 animate-spin"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto px-4 py-8 container">
        <div className="text-center text-red-600">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto px-4 py-8 container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="mb-8 font-bold text-4xl text-center">
          Popular Cruise Lines
        </h1>
        <p className="mb-12 text-center text-gray-600 text-xl">
          Discover the world&apos;s leading cruise lines and their unique
          offerings
        </p>
      </motion.div>

      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cruiseLines.map((cruiseLine, index) => (
          <motion.div
            key={cruiseLine.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white shadow-lg hover:shadow-xl rounded-lg transition-shadow duration-300 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Image
                  src={
                    cruiseLine.logo_url ||
                    "/images/cruise-lines/default-logo.png"
                  }
                  alt={`${cruiseLine.name} logo`}
                  className="mr-4 w-16 h-16 object-contain"
                  width={64}
                  height={64}
                />
                <div>
                  <h3 className="font-semibold text-xl">{cruiseLine.name}</h3>
                  <p className="text-gray-600">{cruiseLine.headquarters}</p>
                </div>
              </div>

              <p className="mb-4 text-gray-700 line-clamp-3">
                {cruiseLine.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {cruiseLine.specialties?.slice(0, 3).map((specialty, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 px-3 py-1 rounded-full text-blue-800 text-sm"
                  >
                    {specialty}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center text-gray-600 text-sm">
                <span>Ships: {cruiseLine.fleet_size}</span>
                <span className="flex items-center">
                  ⭐ {cruiseLine.rating?.toFixed(1) || "N/A"}
                </span>
              </div>

              {cruiseLine.price_range && (
                <div className="mt-2">
                  <span className="font-medium text-green-600 text-sm capitalize">
                    {cruiseLine.price_range.replace("-", " ")} Range
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {cruiseLines.length === 0 && !loading && (
        <div className="py-12 text-center">
          <p className="text-gray-600">
            No cruise lines available at the moment.
          </p>
        </div>
      )}
    </div>
  );
}