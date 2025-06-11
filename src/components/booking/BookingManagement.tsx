/**
 * Sample React Components for Booking Authentication and Management
 *
 * These components demonstrate how to use the booking authentication
 * and management functionality in a React application.
 */

"use client";

import React, { useState } from "react";
import {
  useBookingAuth,
  useBookingStatus,
  useBookingHistory,
  useCancellation,
  useBookingUpdate,
  useBookingPricing,
} from "@/hooks/useBookingAuth";
import {
  type BookingCredentials,
  type BookingUpdateRequest,
} from "@/lib/utils/booking/booking-auth";

/**
 * Login Form Component
 */
export function BookingLoginForm() {
  const { login, logout, user, isLoading, error, isAuthenticated } =
    useBookingAuth();
  const [credentials, setCredentials] = useState<BookingCredentials>({
    bookingNumber: "",
    email: "",
    lastName: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(credentials);
  };

  if (isAuthenticated && user) {
    return (
      <div className="bg-green-50 p-6 border border-green-200 rounded-lg">
        <h2 className="mb-4 font-semibold text-green-800 text-xl">
          Welcome back, {user.firstName} {user.lastName}!
        </h2>
        <p className="mb-4 text-green-700">You are successfully logged in.</p>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white mx-auto p-6 border border-gray-200 rounded-lg max-w-md">
      <h2 className="mb-6 font-semibold text-2xl">Access Your Booking</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="bookingNumber"
            className="block mb-1 font-medium text-gray-700 text-sm"
          >
            Booking Number
          </label>
          <input
            type="text"
            id="bookingNumber"
            value={credentials.bookingNumber}
            onChange={(e) =>
              setCredentials((prev) => ({
                ...prev,
                bookingNumber: e.target.value,
              }))
            }
            className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 w-full focus:outline-none"
            placeholder="Enter your booking number"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-1 font-medium text-gray-700 text-sm"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={credentials.email}
            onChange={(e) =>
              setCredentials((prev) => ({ ...prev, email: e.target.value }))
            }
            className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 w-full focus:outline-none"
            placeholder="Enter your email address"
            required
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block mb-1 font-medium text-gray-700 text-sm"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={credentials.lastName}
            onChange={(e) =>
              setCredentials((prev) => ({ ...prev, lastName: e.target.value }))
            }
            className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 w-full focus:outline-none"
            placeholder="Enter your last name"
            required
          />
        </div>

        {error && (
          <div className="bg-red-50 p-3 border border-red-200 rounded-md">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50 px-4 py-2 rounded-md w-full text-white disabled:cursor-not-allowed"
        >
          {isLoading ? "Logging in..." : "Access Booking"}
        </button>
      </form>
    </div>
  );
}

/**
 * Booking Status Display Component
 */
export function BookingStatusDisplay({ bookingId }: { bookingId: string }) {
  const { statusInfo, isLoading, error, refreshStatus } =
    useBookingStatus(bookingId);

  if (isLoading) {
    return <div className="py-4 text-center">Loading booking status...</div>;
  }

  if (error) {
    return (
      <div className="bg-red-50 p-4 border border-red-200 rounded-lg">
        <p className="text-red-700">{error}</p>
        <button
          onClick={refreshStatus}
          className="mt-2 text-blue-500 hover:text-blue-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!statusInfo) {
    return <div>No booking information available.</div>;
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "text-green-600 bg-green-50 border-green-200";
      case "pending":
        return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "cancelled":
        return "text-red-600 bg-red-50 border-red-200";
      case "completed":
        return "text-blue-600 bg-blue-50 border-blue-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  return (
    <div className="bg-white p-6 border border-gray-200 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-xl">Booking Status</h3>
        <button
          onClick={refreshStatus}
          className="text-blue-500 text-sm hover:text-blue-700"
        >
          Refresh
        </button>
      </div>

      <div
        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(statusInfo.status)}`}
      >
        {statusInfo.status.toUpperCase()}
      </div>

      <p className="mt-3 text-gray-700">{statusInfo.statusDescription}</p>

      <div className="gap-4 grid grid-cols-2 mt-4">
        <div>
          <span className="text-gray-500 text-sm">Can Cancel:</span>
          <span
            className={`ml-2 font-medium ${statusInfo.canCancel ? "text-green-600" : "text-red-600"}`}
          >
            {statusInfo.canCancel ? "Yes" : "No"}
          </span>
        </div>
        <div>
          <span className="text-gray-500 text-sm">Can Modify:</span>
          <span
            className={`ml-2 font-medium ${statusInfo.canModify ? "text-green-600" : "text-red-600"}`}
          >
            {statusInfo.canModify ? "Yes" : "No"}
          </span>
        </div>
      </div>

      {statusInfo.cancellationPenalty && (
        <div className="bg-yellow-50 mt-4 p-3 border border-yellow-200 rounded-md">
          <p className="text-sm text-yellow-800">
            Current cancellation penalty: ${statusInfo.cancellationPenalty}
          </p>
        </div>
      )}
    </div>
  );
}

/**
 * Booking History Component
 */
export function BookingHistoryDisplay({ bookingId }: { bookingId: string }) {
  const { history, isLoading, error, refreshHistory } =
    useBookingHistory(bookingId);

  if (isLoading) {
    return <div className="py-4 text-center">Loading booking history...</div>;
  }

  if (error) {
    return (
      <div className="bg-red-50 p-4 border border-red-200 rounded-lg">
        <p className="text-red-700">{error}</p>
        <button
          onClick={refreshHistory}
          className="mt-2 text-blue-500 hover:text-blue-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 border border-gray-200 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-xl">Booking History</h3>
        <button
          onClick={refreshHistory}
          className="text-blue-500 text-sm hover:text-blue-700"
        >
          Refresh
        </button>
      </div>

      {history.length === 0 ? (
        <p className="text-gray-500">No history available.</p>
      ) : (
        <div className="space-y-3">
          {history.map((entry, index) => (
            <div key={index} className="py-2 pl-4 border-blue-200 border-l-4">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900">
                  {entry.actions.join(", ")}
                </span>
                <span className="text-gray-500 text-sm">
                  {entry.entry_date_time.toLocaleDateString()}
                </span>
              </div>
              <p className="mt-1 text-gray-600 text-sm">
                Type: {entry.actionType ?? "N/A"}
              </p>
              {/* User information is not available in BookingHistoryEntry type */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Booking Cancellation Component
 */
export function BookingCancellation({ bookingId }: { bookingId: string }) {
  const { cancellationInfo, isLoading, error, canCancel, cancelBooking } =
    useCancellation(bookingId);
  const [reason, setReason] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleCancel = async () => {
    const success = await cancelBooking(reason);
    if (success) {
      setShowConfirmation(false);
      setReason("");
      alert("Booking cancelled successfully!");
    }
  };

  if (isLoading) {
    return (
      <div className="py-4 text-center">
        Loading cancellation information...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 p-4 border border-red-200 rounded-lg">
        <p className="text-red-700">{error}</p>
      </div>
    );
  }

  if (!canCancel) {
    return (
      <div className="bg-gray-50 p-4 border border-gray-200 rounded-lg">
        <p className="text-gray-700">
          This booking cannot be cancelled at this time.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 border border-gray-200 rounded-lg">
      <h3 className="mb-4 font-semibold text-xl">Cancel Booking</h3>

      {cancellationInfo && (
        <div className="space-y-4">
          <div className="bg-yellow-50 p-4 border border-yellow-200 rounded-md">
            <h4 className="mb-2 font-medium text-yellow-800">
              Cancellation Details
            </h4>
            <p className="text-sm text-yellow-700">
              Cancellation penalty: ${cancellationInfo.currentPenalty}
            </p>
            <p className="text-sm text-yellow-700">
              Refund amount: ${cancellationInfo.refundAmount}
            </p>
          </div>

          {!showConfirmation ? (
            <button
              onClick={() => setShowConfirmation(true)}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white"
            >
              Cancel Booking
            </button>
          ) : (
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="reason"
                  className="block mb-1 font-medium text-gray-700 text-sm"
                >
                  Reason for cancellation (optional)
                </label>
                <textarea
                  id="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 w-full focus:outline-none"
                  rows={3}
                  placeholder="Please provide a reason for cancellation..."
                />
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={handleCancel}
                  disabled={isLoading}
                  className="bg-red-500 hover:bg-red-600 disabled:opacity-50 px-4 py-2 rounded text-white"
                >
                  {isLoading ? "Cancelling..." : "Confirm Cancellation"}
                </button>
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded text-gray-700"
                >
                  Keep Booking
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * Booking Management Dashboard
 */
export function BookingManagementDashboard() {
  const { user, isAuthenticated } = useBookingAuth();
  const [activeTab, setActiveTab] = useState<"status" | "history" | "cancel">(
    "status"
  );

  if (!isAuthenticated || !user) {
    return <BookingLoginForm />;
  }

  // In a real app, you'd get the booking ID from props or routing
  const bookingId = "example-booking-id";

  const tabs = [
    { id: "status", label: "Status", component: BookingStatusDisplay },
    { id: "history", label: "History", component: BookingHistoryDisplay },
    { id: "cancel", label: "Cancel", component: BookingCancellation },
  ];

  return (
    <div className="mx-auto max-w-4xl">
      <div className="bg-white border border-gray-200 rounded-lg">
        <div className="border-gray-200 border-b">
          <nav className="flex space-x-8 px-6 py-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === "status" && (
            <BookingStatusDisplay bookingId={bookingId} />
          )}
          {activeTab === "history" && (
            <BookingHistoryDisplay bookingId={bookingId} />
          )}
          {activeTab === "cancel" && (
            <BookingCancellation bookingId={bookingId} />
          )}
        </div>
      </div>
    </div>
  );
}
