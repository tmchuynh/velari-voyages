'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useBookingAuth } from '@/hooks/useBookingAuth';
import { BookingManagementDashboard } from '@/components/booking/BookingManagement';
import { useRouter } from 'next/navigation';
import {
  ArrowLeftIcon,
  UserCircleIcon,
  CalendarDaysIcon,
  MapPinIcon,
  CreditCardIcon,
  ClockIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export default function BookingDashboardPage() {
  const router = useRouter();
  const { user, logout, isAuthenticated } = useBookingAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'status' | 'history' | 'manage'>('overview');

  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated || !user) {
    return (
      <div className="flex justify-center items-center bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen">
        <div className="text-center text-white">
          <div className="mx-auto mb-4 border-white border-b-2 rounded-full w-12 h-12 animate-spin"></div>
          <p>Loading your booking dashboard...</p>
        </div>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 backdrop-blur-md border-white/20 border-b"
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={() => router.push('/')}
                className="flex items-center text-white hover:text-blue-300 transition-colors"
              >
                <ArrowLeftIcon className="mr-2 w-5 h-5" />
                <span className="font-medium">Back to Home</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-white">
                <UserCircleIcon className="mr-2 w-8 h-8" />
                <div>
                  <p className="font-medium text-sm">{user.firstName} {user.lastName}</p>
                  <p className="text-gray-300 text-xs">{user.email}</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-500/20 hover:bg-red-500/30 px-4 py-2 rounded-lg text-red-300 hover:text-red-200 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="mb-2 font-bold text-3xl text-white">
            Welcome back, {user.firstName}!
          </h1>
          <p className="text-gray-300">
            Manage your cruise booking and explore your upcoming adventure.
          </p>
        </motion.div>

        {/* Quick Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-8"
        >
          <StatsCard
            icon={<CheckCircleIcon className="w-6 h-6" />}
            title="Booking Status"
            value="Confirmed"
            color="green"
          />
          <StatsCard
            icon={<CalendarDaysIcon className="w-6 h-6" />}
            title="Departure Date"
            value="Jul 15, 2025"
            color="blue"
          />
          <StatsCard
            icon={<MapPinIcon className="w-6 h-6" />}
            title="Destination"
            value="Caribbean"
            color="purple"
          />
          <StatsCard
            icon={<ClockIcon className="w-6 h-6" />}
            title="Days Until Cruise"
            value="35 days"
            color="orange"
          />
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <nav className="flex space-x-1 bg-white/10 backdrop-blur-md p-1 rounded-xl">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'status', label: 'Booking Status' },
              { id: 'history', label: 'History' },
              { id: 'manage', label: 'Manage Booking' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-white text-slate-900 shadow-lg'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && <OverviewTab />}
          {activeTab === 'status' && <BookingManagementDashboard />}
          {activeTab === 'history' && <BookingManagementDashboard />}
          {activeTab === 'manage' && <BookingManagementDashboard />}
        </motion.div>
      </main>
    </div>
  );
}

// Stats Card Component
function StatsCard({ 
  icon, 
  title, 
  value, 
  color 
}: { 
  icon: React.ReactNode; 
  title: string; 
  value: string; 
  color: 'green' | 'blue' | 'purple' | 'orange';
}) {
  const colorClasses = {
    green: 'from-green-500/20 to-emerald-500/20 border-green-400/30 text-green-300',
    blue: 'from-blue-500/20 to-cyan-500/20 border-blue-400/30 text-blue-300',
    purple: 'from-purple-500/20 to-pink-500/20 border-purple-400/30 text-purple-300',
    orange: 'from-orange-500/20 to-yellow-500/20 border-orange-400/30 text-orange-300'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      className={`bg-gradient-to-br ${colorClasses[color]} backdrop-blur-md border rounded-xl p-6`}
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="opacity-80 mb-1 text-sm">{title}</p>
          <p className="font-bold text-xl">{value}</p>
        </div>
        <div className="opacity-60">
          {icon}
        </div>
      </div>
    </motion.div>
  );
}

// Overview Tab Component
function OverviewTab() {
  return (
    <div className="gap-8 grid grid-cols-1 lg:grid-cols-2">
      {/* Cruise Details Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 backdrop-blur-md p-6 border border-white/20 rounded-xl"
      >
        <h3 className="mb-4 font-semibold text-white text-xl">Your Cruise Details</h3>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-300">Cruise Line:</span>
            <span className="font-medium text-white">Velari Voyages</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Ship:</span>
            <span className="font-medium text-white">Velari Explorer</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Duration:</span>
            <span className="font-medium text-white">7 Days</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Cabin:</span>
            <span className="font-medium text-white">Oceanview - Deck 8</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Passengers:</span>
            <span className="font-medium text-white">2 Adults</span>
          </div>
        </div>
      </motion.div>

      {/* Itinerary Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white/10 backdrop-blur-md p-6 border border-white/20 rounded-xl"
      >
        <h3 className="mb-4 font-semibold text-white text-xl">Itinerary Highlights</h3>
        <div className="space-y-3">
          {[
            { day: 'Day 1', port: 'Miami, FL', activity: 'Departure' },
            { day: 'Day 2', port: 'At Sea', activity: 'Relaxation Day' },
            { day: 'Day 3', port: 'Cozumel, Mexico', activity: 'Shore Excursion' },
            { day: 'Day 4', port: 'Jamaica', activity: 'Beach Day' },
            { day: 'Day 5', port: 'Cayman Islands', activity: 'Snorkeling' }
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="bg-blue-400 rounded-full w-2 h-2"></div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <span className="font-medium text-blue-300">{item.day}</span>
                  <span className="text-gray-300 text-sm">{item.activity}</span>
                </div>
                <p className="text-sm text-white">{item.port}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Payment Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white/10 backdrop-blur-md p-6 border border-white/20 rounded-xl"
      >
        <h3 className="mb-4 font-semibold text-white text-xl">Payment Summary</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-300">Cruise Fare:</span>
            <span className="text-white">$2,498.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Taxes & Fees:</span>
            <span className="text-white">$312.50</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Gratuities:</span>
            <span className="text-white">$168.00</span>
          </div>
          <hr className="border-white/20" />
          <div className="flex justify-between font-semibold">
            <span className="text-white">Total Paid:</span>
            <span className="text-green-400">$2,978.50</span>
          </div>
          <div className="mt-4 text-center">
            <span className="inline-flex items-center bg-green-500/20 px-3 py-1 rounded-full text-green-300 text-sm">
              <CheckCircleIcon className="mr-1 w-4 h-4" />
              Payment Complete
            </span>
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white/10 backdrop-blur-md p-6 border border-white/20 rounded-xl"
      >
        <h3 className="mb-4 font-semibold text-white text-xl">Quick Actions</h3>
        <div className="space-y-3">
          <button className="flex justify-center items-center bg-blue-500/20 hover:bg-blue-500/30 py-3 rounded-lg w-full text-blue-300 transition-colors">
            <CalendarDaysIcon className="mr-2 w-5 h-5" />
            View Full Itinerary
          </button>
          <button className="flex justify-center items-center bg-purple-500/20 hover:bg-purple-500/30 py-3 rounded-lg w-full text-purple-300 transition-colors">
            <CreditCardIcon className="mr-2 w-5 h-5" />
            Download Documents
          </button>
          <button className="flex justify-center items-center bg-green-500/20 hover:bg-green-500/30 py-3 rounded-lg w-full text-green-300 transition-colors">
            <MapPinIcon className="mr-2 w-5 h-5" />
            Shore Excursions
          </button>
        </div>
      </motion.div>
    </div>
  );
}
