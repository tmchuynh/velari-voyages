"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler,
} from "chart.js";
import { Line, Bar, Doughnut, Pie } from "react-chartjs-2";
import { motion } from "framer-motion";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler
);

// Ocean-themed color palette
export const oceanColors = {
  primary: "rgb(30, 64, 175)", // Blue
  secondary: "rgb(5, 150, 105)", // Emerald
  tertiary: "rgb(8, 145, 178)", // Cyan
  accent: "rgb(34, 211, 238)", // Bright cyan
  light: "rgb(16, 185, 129)", // Light emerald
  gradients: {
    ocean: "linear-gradient(135deg, rgb(30, 64, 175), rgb(5, 150, 105))",
    wave: "linear-gradient(90deg, rgb(8, 145, 178), rgb(34, 211, 238))",
  },
};

// Default chart options with ocean theme
export const defaultChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        font: {
          family: "Figtree",
          size: 12,
        },
        color: "rgb(10, 79, 76)", // Deep ocean teal
        usePointStyle: true,
        pointStyle: "circle",
      },
    },
    tooltip: {
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      titleColor: "rgb(10, 79, 76)",
      bodyColor: "rgb(10, 79, 76)",
      borderColor: "rgb(34, 211, 238)",
      borderWidth: 1,
      cornerRadius: 8,
      displayColors: true,
      font: {
        family: "Figtree",
      },
    },
  },
  scales: {
    x: {
      grid: {
        color: "rgba(34, 211, 238, 0.1)",
        borderColor: "rgba(34, 211, 238, 0.2)",
      },
      ticks: {
        color: "rgb(107, 114, 128)",
        font: {
          family: "Figtree",
          size: 11,
        },
      },
    },
    y: {
      grid: {
        color: "rgba(34, 211, 238, 0.1)",
        borderColor: "rgba(34, 211, 238, 0.2)",
      },
      ticks: {
        color: "rgb(107, 114, 128)",
        font: {
          family: "Figtree",
          size: 11,
        },
      },
    },
  },
  animation: {
    duration: 1000,
    easing: "easeOutQuart" as const,
  },
};

interface ChartBaseProps {
  type: "line" | "bar" | "doughnut" | "pie";
  data: any;
  options?: any;
  height?: number;
  className?: string;
  title?: string;
  description?: string;
}

export default function ChartBase({
  type,
  data,
  options = {},
  height = 300,
  className = "",
  title,
  description,
}: ChartBaseProps) {
  const chartOptions = {
    ...defaultChartOptions,
    ...options,
  };

  const renderChart = () => {
    const commonProps = {
      data,
      options: chartOptions,
      height,
    };

    switch (type) {
      case "line":
        return <Line {...commonProps} />;
      case "bar":
        return <Bar {...commonProps} />;
      case "doughnut":
        return <Doughnut {...commonProps} />;
      case "pie":
        return <Pie {...commonProps} />;
      default:
        return <Line {...commonProps} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`chart-container ${className}`}
    >
      {title && (
        <div className="mb-4">
          <h3 className="mb-1 font-semibold text-foreground text-lg">
            {title}
          </h3>
          {description && (
            <p className="text-muted-foreground text-sm">{description}</p>
          )}
        </div>
      )}
      <div
        style={{ height: `${height}px` }}
        className="relative"
        role="img"
        aria-label={title || "Chart"}
      >
        {renderChart()}
      </div>
    </motion.div>
  );
}

// Utility function to create ocean-themed datasets
export const createOceanDataset = (
  label: string,
  data: number[],
  type: "line" | "bar" = "line",
  colorIndex: number = 0
) => {
  const colors = [
    oceanColors.primary,
    oceanColors.secondary,
    oceanColors.tertiary,
    oceanColors.accent,
    oceanColors.light,
  ];

  const color = colors[colorIndex % colors.length];

  if (type === "line") {
    return {
      label,
      data,
      borderColor: color,
      backgroundColor: color.replace("rgb", "rgba").replace(")", ", 0.1)"),
      borderWidth: 2,
      fill: true,
      tension: 0.4,
      pointBackgroundColor: color,
      pointBorderColor: "#ffffff",
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6,
    };
  }

  return {
    label,
    data,
    backgroundColor: color.replace("rgb", "rgba").replace(")", ", 0.8)"),
    borderColor: color,
    borderWidth: 1,
    borderRadius: 4,
    borderSkipped: false,
  };
};
