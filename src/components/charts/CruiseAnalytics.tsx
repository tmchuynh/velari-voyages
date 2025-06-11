"use client";

import React from "react";
import { motion } from "framer-motion";
import ChartBase, { createOceanDataset, oceanColors } from "./ChartBase";

interface CruiseAnalyticsProps {
  className?: string;
}

export default function CruiseAnalytics({
  className = "",
}: CruiseAnalyticsProps) {
  // Sample data - replace with real data from your API
  const priceData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      createOceanDataset(
        "Interior Cabin",
        [1200, 1100, 1300, 1400, 1600, 1500],
        "line",
        0
      ),
      createOceanDataset(
        "Ocean View",
        [1800, 1700, 1900, 2000, 2200, 2100],
        "line",
        1
      ),
      createOceanDataset(
        "Balcony",
        [2400, 2300, 2500, 2600, 2800, 2700],
        "line",
        2
      ),
      createOceanDataset(
        "Suite",
        [3500, 3400, 3600, 3700, 3900, 3800],
        "line",
        3
      ),
    ],
  };

  const popularDestinationsData = {
    labels: ["Caribbean", "Mediterranean", "Alaska", "Northern Europe", "Asia"],
    datasets: [
      {
        data: [35, 25, 15, 15, 10],
        backgroundColor: [
          oceanColors.primary,
          oceanColors.secondary,
          oceanColors.tertiary,
          oceanColors.accent,
          oceanColors.light,
        ].map((color) => color.replace("rgb", "rgba").replace(")", ", 0.8)")),
        borderColor: [
          oceanColors.primary,
          oceanColors.secondary,
          oceanColors.tertiary,
          oceanColors.accent,
          oceanColors.light,
        ],
        borderWidth: 2,
      },
    ],
  };

  const bookingTrendsData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      createOceanDataset("2023", [2400, 3200, 4100, 3800], "bar", 0),
      createOceanDataset("2024", [2800, 3600, 4500, 4200], "bar", 1),
    ],
  };

  const chartOptions = {
    line: {
      plugins: {
        title: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: false,
          title: {
            display: true,
            text: "Price ($)",
            color: "rgb(107, 114, 128)",
            font: {
              family: "Figtree",
              size: 12,
              weight: "500",
            },
          },
        },
        x: {
          title: {
            display: true,
            text: "Month",
            color: "rgb(107, 114, 128)",
            font: {
              family: "Figtree",
              size: 12,
              weight: "500",
            },
          },
        },
      },
    },
    doughnut: {
      plugins: {
        legend: {
          position: "right" as const,
        },
      },
      cutout: "60%",
    },
    bar: {
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Bookings",
            color: "rgb(107, 114, 128)",
            font: {
              family: "Figtree",
              size: 12,
              weight: "500",
            },
          },
        },
      },
    },
  };

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="gradient-ocean">Cruise Analytics Dashboard</h2>
        <p className="mt-2 text-muted-foreground">
          Insights into pricing trends, popular destinations, and booking
          patterns
        </p>
      </motion.div>

      {/* Charts Grid */}
      <div className="gap-8 grid grid-cols-1 lg:grid-cols-2">
        {/* Price Trends */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <ChartBase
            type="line"
            data={priceData}
            options={chartOptions.line}
            height={350}
            title="Cabin Price Trends"
            description="Monthly pricing trends by cabin type"
            className="interactive-subtle"
          />
        </motion.div>

        {/* Popular Destinations */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ChartBase
            type="doughnut"
            data={popularDestinationsData}
            options={chartOptions.doughnut}
            height={350}
            title="Popular Destinations"
            description="Distribution of cruise bookings by region"
            className="interactive-subtle"
          />
        </motion.div>
      </div>

      {/* Booking Trends - Full Width */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <ChartBase
          type="bar"
          data={bookingTrendsData}
          options={chartOptions.bar}
          height={300}
          title="Quarterly Booking Trends"
          description="Year-over-year comparison of cruise bookings"
          className="interactive-subtle"
        />
      </motion.div>

      {/* Key Metrics Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="gap-4 grid grid-cols-1 md:grid-cols-4"
      >
        {[
          { label: "Average Price", value: "$2,450", change: "+12%" },
          { label: "Total Bookings", value: "15,247", change: "+8%" },
          { label: "Occupancy Rate", value: "87%", change: "+3%" },
          { label: "Customer Satisfaction", value: "4.6/5", change: "+0.2" },
        ].map((metric, index) => (
          <div
            key={metric.label}
            className="p-4 rounded-lg text-center glass micro-interaction"
          >
            <div className="mb-1 font-bold text-2xl gradient-ocean">
              {metric.value}
            </div>
            <div className="mb-1 text-muted-foreground text-sm">
              {metric.label}
            </div>
            <div className="font-medium text-tertiary text-xs">
              {metric.change}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
