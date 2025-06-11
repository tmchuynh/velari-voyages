"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeftIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { FaShip } from "react-icons/fa";
import {
  getCruiseLineDetails,
  getCruiseLineShips,
} from "@/lib/utils/api/vecto-cruise-api";
import { type CruiseLine, type Ship } from "@/lib/utils/api/vecto-cruise-api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

export default function CruiseLineDetailPage() {
  const params = useParams();
  const router = useRouter();
  const cruiseLineId = params.id as string;

  const [cruiseLine, setCruiseLine] = useState<CruiseLine | null>(null);
  const [ships, setShips] = useState<Ship[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCruiseLineData = async () => {
      try {
        setLoading(true);
        const [lineDetails, shipsList] = await Promise.all([
          getCruiseLineDetails(cruiseLineId),
          getCruiseLineShips(cruiseLineId),
        ]);

        if (lineDetails.success && lineDetails.data) {
          setCruiseLine(lineDetails.data);
        }
        if (shipsList.success && shipsList.data) {
          setShips(shipsList.data);
        }
      } catch (err) {
        setError("Failed to load cruise line details. Please try again.");
        console.error("Error loading cruise line details:", err);
      } finally {
        setLoading(false);
      }
    };

    if (cruiseLineId) {
      loadCruiseLineData();
    }
  }, [cruiseLineId]);

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
      <motion.div
        className="flex justify-center items-center min-h-screen"
        variants={backgroundVariants}
        animate="animate"
      >
        <div className="text-center">
          <motion.div
            className="mx-auto mb-4 border-4 border-t-transparent border-blue-500 rounded-full w-16 h-16"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <p className="text-lg text-white">Loading cruise line details...</p>
        </div>
      </motion.div>
    );
  }

  if (error || !cruiseLine) {
    return (
      <motion.div
        className="flex justify-center items-center min-h-screen"
        variants={backgroundVariants}
        animate="animate"
      >
        <div className="max-w-md text-center">
          <div className="bg-red-500/20 backdrop-blur-sm p-6 border border-red-400/50 rounded-xl">
            <p className="mb-4 text-red-300">
              {error || "Cruise line not found"}
            </p>
            <button
              onClick={() => router.back()}
              className="bg-red-500/20 hover:bg-red-500/30 px-4 py-2 rounded-lg text-red-300 hover:text-red-200 transition-colors"
            >
              Go Back
            </button>
          </div>
        </div>
      </motion.div>
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
          className="top-1/4 left-1/4 absolute bg-blue-500/10 blur-3xl rounded-full w-96 h-96"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="right-1/4 bottom-1/4 absolute bg-purple-500/10 blur-3xl rounded-full w-96 h-96"
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
          <div className="flex items-center space-x-4">
            <button
              onClick={() => router.back()}
              className="flex items-center text-white hover:text-blue-300 transition-colors"
            >
              <ArrowLeftIcon className="mr-2 w-5 h-5" />
              <span className="font-medium">Back to Cruise Lines</span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        {/* Cruise Line Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardContent className="p-8">
              <div className="flex items-start space-x-6">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <div className="flex justify-center items-center bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl w-24 h-24">
                    {cruiseLine.cruise_line_logo_thumb ||
                    cruiseLine.cruise_line_logo ? (
                      <Image
                        src={
                          cruiseLine.cruise_line_logo_thumb ||
                          cruiseLine.cruise_line_logo
                        }
                        alt={`${cruiseLine.cruise_line_name} logo`}
                        width={80}
                        height={80}
                        className="rounded-xl object-cover"
                      />
                    ) : (
                      <span className="font-bold text-2xl text-white">
                        {cruiseLine.cruise_line_name.charAt(0)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h1 className="mb-2 font-bold text-4xl text-white">
                    {cruiseLine.cruise_line_name}
                  </h1>
                  <p className="mb-4 text-gray-300 text-lg">
                    {cruiseLine.cruise_line_description ||
                      "Premium cruise experiences with exceptional service and destinations."}
                  </p>

                  <div className="flex items-center space-x-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400">ID:</span>
                      <span className="font-medium text-blue-300">
                        {cruiseLine.cruise_line_id}
                      </span>
                    </div>
                    {ships.length > 0 && (
                      <div className="flex items-center space-x-2">
                        <FaShip className="w-4 h-4 text-gray-400" />
                        <span className="text-white">{ships.length} Ships</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Contact Info */}
                {cruiseLine.cruise_line_url && (
                  <div className="flex-shrink-0 space-y-2">
                    <a
                      href={cruiseLine.cruise_line_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <GlobeAltIcon className="w-4 h-4" />
                      <span className="text-sm">Website</span>
                    </a>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="bg-white/10 backdrop-blur-md border-white/20">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-blue-500/30 text-white data-[state=active]:text-blue-300"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="fleet"
                className="data-[state=active]:bg-blue-500/30 text-white data-[state=active]:text-blue-300"
              >
                Fleet ({ships.length})
              </TabsTrigger>
              <TabsTrigger
                value="contact"
                className="data-[state=active]:bg-blue-500/30 text-white data-[state=active]:text-blue-300"
              >
                Contact
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
                <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-white">
                      About {cruiseLine.cruise_line_name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed">
                      {cruiseLine.cruise_line_description ||
                        `${cruiseLine.cruise_line_name} offers premium cruise experiences with world-class amenities, 
                        exceptional dining, and carefully curated itineraries to the most sought-after 
                        destinations around the globe. Our commitment to excellence ensures every guest 
                        enjoys an unforgettable voyage.`}
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-white">
                      Fleet Highlights
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Total Ships:</span>
                        <span className="font-medium text-white">
                          {ships.length}
                        </span>
                      </div>
                      {ships.length > 0 && (
                        <>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Latest Ship:</span>
                            <span className="font-medium text-white">
                              {ships[0]?.ship_name || "N/A"}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Fleet Size:</span>
                            <span className="font-medium text-white">
                              {ships.length} ships
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Fleet Tab */}
            <TabsContent value="fleet" className="space-y-6">
              {ships.length > 0 ? (
                <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {ships.map((ship, index) => (
                    <motion.div
                      key={ship.ship_id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="bg-white/10 hover:bg-white/15 backdrop-blur-md border-white/20 text-white transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="mb-4">
                            <div className="flex justify-center items-center bg-gradient-to-br from-blue-500 to-purple-600 mb-3 rounded-lg w-full h-32">
                              <FaShip className="w-12 h-12 text-white" />
                            </div>
                          </div>

                          <h3 className="mb-2 font-semibold text-lg text-white">
                            {ship.ship_name}
                          </h3>

                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-400">Ship ID:</span>
                              <span className="text-white">{ship.ship_id}</span>
                            </div>
                          </div>

                          <div className="mt-4">
                            <Link
                              href={`/cruise-lines/cruise-ships/${ship.ship_id}`}
                              className="inline-flex items-center text-blue-400 text-sm hover:text-blue-300 transition-colors"
                            >
                              View Details →
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                  <CardContent className="p-8 text-center">
                    <FaShip className="mx-auto mb-4 w-16 h-16 text-gray-400" />
                    <h3 className="mb-2 font-semibold text-white text-xl">
                      No Ships Available
                    </h3>
                    <p className="text-gray-300">
                      Fleet information is currently not available for this
                      cruise line.
                    </p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>
    </motion.div>
  );
}
