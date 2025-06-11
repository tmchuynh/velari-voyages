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
        <div key={`empty-${i}`} className="w-10 h-10"></div>
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
          className="relative w-10 h-10"
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
            <div className="top-0.5 right-0.5 absolute bg-red-500 rounded-full w-2 h-2"></div>
          )}

          {/* Holiday tooltip */}
          {showHolidayTooltip && hoveredDate === dateKey && holidays.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="top-12 left-1/2 z-10 absolute bg-gray-900 px-3 py-2 rounded-md max-w-48 text-white text-xs transform -translate-x-1/2"
            >
              <div className="space-y-1">
                {holidays.map((holiday, index) => (
                  <div key={index} className="whitespace-nowrap">
                    🎉 {holiday.name}
                  </div>
                ))}
              </div>
              <div className="-top-1 left-1/2 absolute bg-gray-900 w-2 h-2 transform -translate-x-1/2 rotate-45"></div>
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
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => navigateMonth("prev")}
          className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          disabled={loading}
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>

        <h3 className="font-semibold text-gray-900 text-lg">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>

        <button
          onClick={() => navigateMonth("next")}
          className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          disabled={loading}
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Loading indicator */}
      {loading && (
        <div className="flex justify-center items-center py-4">
          <div className="border-b-2 border-blue-600 rounded-full w-6 h-6 animate-spin"></div>
          <span className="ml-2 text-gray-600 text-sm">Loading holidays...</span>
        </div>
      )}

      {/* Calendar Grid */}
      <div className="gap-1 grid grid-cols-7">
        {/* Day headers */}
        {dayNames.map((day) => (
          <div key={day} className="flex justify-center items-center h-10">
            <span className="font-medium text-gray-500 text-xs">{day}</span>
          </div>
        ))}

        {/* Calendar days */}
        {renderCalendarDays()}
      </div>

      {/* Legend */}
      <div className="flex justify-center items-center space-x-4 mt-4 text-gray-600 text-xs">
        <div className="flex items-center">
          <div className="bg-red-500 mr-1 rounded-full w-2 h-2"></div>
          <span>Holiday</span>
        </div>
        <div className="flex items-center">
          <div className="bg-blue-600 mr-1 rounded-full w-2 h-2"></div>
          <span>Selected</span>
        </div>
      </div>
    </div>
  );
}
