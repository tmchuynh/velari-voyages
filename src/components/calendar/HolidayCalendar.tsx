"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { 
  getHolidayCalendarData, 
  CalendarificHoliday, 
  getCountryCode 
} from "@/lib/utils/api/calendarific-api";

export interface HolidayCalendarProps {
  selectedDate?: Date;
  onDateSelect?: (date: Date) => void;
  country?: string;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
  className?: string;
  showHolidayTooltip?: boolean;
}

export default function HolidayCalendar({
  selectedDate,
  onDateSelect,
  country = "United States",
  minDate,
  maxDate,
  disabledDates = [],
  className = "",
  showHolidayTooltip = true,
}: HolidayCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [holidayData, setHolidayData] = useState<Map<string, CalendarificHoliday[]>>(new Map());
  const [loading, setLoading] = useState(false);
  const [hoveredDate, setHoveredDate] = useState<string | null>(null);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    const fetchHolidays = async () => {
      setLoading(true);
      try {
        const countryCode = getCountryCode(country);
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        
        const holidays = await getHolidayCalendarData(countryCode, year, month);
        setHolidayData(holidays);
      } catch (error) {
        console.error("Error fetching holidays:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHolidays();
  }, [currentDate, country]);

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate);
    if (direction === "prev") {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const formatDateKey = (year: number, month: number, day: number) => {
    return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  };

  const isDateDisabled = (date: Date) => {
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return disabledDates.some(disabledDate => 
      disabledDate.toDateString() === date.toDateString()
    );
  };

  const isDateSelected = (date: Date) => {
    return selectedDate && date.toDateString() === selectedDate.toDateString();
  };

  const handleDateClick = (day: number) => {
    const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    if (!isDateDisabled(clickedDate) && onDateSelect) {
      onDateSelect(clickedDate);
    }
  };

  const getHolidaysForDate = (day: number): CalendarificHoliday[] => {
    const dateKey = formatDateKey(currentDate.getFullYear(), currentDate.getMonth() + 1, day);
    return holidayData.get(dateKey) || [];
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="h-10 w-10"></div>
      );
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const holidays = getHolidaysForDate(day);
      const isDisabled = isDateDisabled(date);
      const isSelected = isDateSelected(date);
      const dateKey = formatDateKey(currentDate.getFullYear(), currentDate.getMonth() + 1, day);

      days.push(
        <div
          key={day}
          className="relative h-10 w-10"
          onMouseEnter={() => setHoveredDate(dateKey)}
          onMouseLeave={() => setHoveredDate(null)}
        >
          <button
            onClick={() => handleDateClick(day)}
            disabled={isDisabled}
            className={`
              w-full h-full rounded-md text-sm font-medium transition-colors duration-200
              ${isSelected 
                ? "bg-blue-600 text-white" 
                : isDisabled 
                ? "text-gray-300 cursor-not-allowed" 
                : "text-gray-700 hover:bg-blue-100"
              }
              ${!isDisabled && !isSelected ? "hover:text-blue-600" : ""}
            `}
          >
            {day}
          </button>
          
          {/* Holiday indicator */}
          {holidays.length > 0 && (
            <div className="absolute top-0.5 right-0.5 w-2 h-2 bg-red-500 rounded-full"></div>
          )}

          {/* Holiday tooltip */}
          {showHolidayTooltip && hoveredDate === dateKey && holidays.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-12 left-1/2 transform -translate-x-1/2 z-10 bg-gray-900 text-white text-xs rounded-md py-2 px-3 max-w-48"
            >
              <div className="space-y-1">
                {holidays.map((holiday, index) => (
                  <div key={index} className="whitespace-nowrap">
                    🎉 {holiday.name}
                  </div>
                ))}
              </div>
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
            </motion.div>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <div className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => navigateMonth("prev")}
          className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          disabled={loading}
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>

        <h3 className="text-lg font-semibold text-gray-900">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>

        <button
          onClick={() => navigateMonth("next")}
          className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          disabled={loading}
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>

      {/* Loading indicator */}
      {loading && (
        <div className="flex items-center justify-center py-4">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
          <span className="ml-2 text-sm text-gray-600">Loading holidays...</span>
        </div>
      )}

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {/* Day headers */}
        {dayNames.map((day) => (
          <div key={day} className="h-10 flex items-center justify-center">
            <span className="text-xs font-medium text-gray-500">{day}</span>
          </div>
        ))}

        {/* Calendar days */}
        {renderCalendarDays()}
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center justify-center space-x-4 text-xs text-gray-600">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
          <span>Holiday</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-blue-600 rounded-full mr-1"></div>
          <span>Selected</span>
        </div>
      </div>
    </div>
  );
}
