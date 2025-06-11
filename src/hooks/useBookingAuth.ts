/**
 * React Hooks for Booking Authentication and Management
 *
 * This module provides React hooks for easy integration of booking
 * authentication and management functionality in React components.
 */

"use client";

import { useCallback, useEffect, useState } from "react";
import {
  authenticateBooking,
  cancelUserBooking,
  getAuthenticatedUser,
  getBookingCancellationInfo,
  getBookingPricing,
  getBookingStatus,
  getCompleteBookingHistory,
  getUserBookings,
  logoutBookingUser,
  updateUserBooking,
  validateBookingCredentials,
  type BookingCredentials,
  type BookingHistoryEntry,
  type BookingStatusInfo,
  type BookingUpdateRequest,
  type BookingUser,
  type CancellationInfo,
} from "../lib/utils/booking/booking-auth";

import { type Booking } from "../lib/utils/api/vecto-cruise-api";

// Hook return types
interface UseBookingAuthReturn {
  user: BookingUser | null;
  isLoading: boolean;
  error: string | null;
  login: (credentials: BookingCredentials) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

interface UseBookingStatusReturn {
  statusInfo: BookingStatusInfo | null;
  isLoading: boolean;
  error: string | null;
  refreshStatus: () => Promise<void>;
}

interface UseBookingHistoryReturn {
  history: BookingHistoryEntry[];
  isLoading: boolean;
  error: string | null;
  refreshHistory: () => Promise<void>;
}

interface UseCancellationReturn {
  cancellationInfo: CancellationInfo | null;
  isLoading: boolean;
  error: string | null;
  canCancel: boolean;
  cancelBooking: (reason?: string) => Promise<boolean>;
}

interface UseBookingUpdateReturn {
  isLoading: boolean;
  error: string | null;
  updateBooking: (updateRequest: BookingUpdateRequest) => Promise<boolean>;
}

/**
 * Hook for managing booking authentication
 *
 * @param sessionStorageKey - Key for storing session token in localStorage
 * @returns Authentication state and methods
 */
export function useBookingAuth(
  sessionStorageKey = "booking_session"
): UseBookingAuthReturn {
  const [user, setUser] = useState<BookingUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check for existing session on mount
  useEffect(() => {
    const sessionToken = localStorage.getItem(sessionStorageKey);
    if (sessionToken) {
      const authenticatedUser = getAuthenticatedUser(sessionToken);
      if (authenticatedUser) {
        setUser(authenticatedUser);
      } else {
        // Invalid session, remove from storage
        localStorage.removeItem(sessionStorageKey);
      }
    }
  }, [sessionStorageKey]);

  const login = useCallback(
    async (credentials: BookingCredentials): Promise<boolean> => {
      setIsLoading(true);
      setError(null);

      try {
        // Validate credentials format
        const validation = validateBookingCredentials(credentials);
        if (!validation.isValid) {
          setError(validation.errors.join(", "));
          return false;
        }

        // Attempt authentication
        const result = await authenticateBooking(credentials);

        if (result.success && result.user) {
          setUser(result.user);
          // Store session token (in production, use secure storage)
          const sessionToken = `booking_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
          localStorage.setItem(sessionStorageKey, sessionToken);
          return true;
        } else {
          setError(result.error || "Authentication failed");
          return false;
        }
      } catch (err) {
        setError("An unexpected error occurred during login");
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    [sessionStorageKey]
  );

  const logout = useCallback(() => {
    const sessionToken = localStorage.getItem(sessionStorageKey);
    if (sessionToken) {
      logoutBookingUser(sessionToken);
      localStorage.removeItem(sessionStorageKey);
    }
    setUser(null);
    setError(null);
  }, [sessionStorageKey]);

  return {
    user,
    isLoading,
    error,
    login,
    logout,
    isAuthenticated: !!user?.isAuthenticated,
  };
}

/**
 * Hook for managing booking status
 *
 * @param bookingId - The booking ID to check status for
 * @returns Booking status information and refresh method
 */
export function useBookingStatus(
  bookingId: string | null
): UseBookingStatusReturn {
  const [statusInfo, setStatusInfo] = useState<BookingStatusInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refreshStatus = useCallback(async () => {
    if (!bookingId) return;

    setIsLoading(true);
    setError(null);

    try {
      const status = await getBookingStatus(bookingId);
      if (status) {
        setStatusInfo(status);
      } else {
        setError("Failed to load booking status");
      }
    } catch (err) {
      setError("An error occurred while loading booking status");
    } finally {
      setIsLoading(false);
    }
  }, [bookingId]);

  // Load status when bookingId changes
  useEffect(() => {
    refreshStatus();
  }, [refreshStatus]);

  return {
    statusInfo,
    isLoading,
    error,
    refreshStatus,
  };
}

/**
 * Hook for managing booking history
 *
 * @param bookingId - The booking ID to get history for
 * @returns Booking history and refresh method
 */
export function useBookingHistory(
  bookingId: string | null
): UseBookingHistoryReturn {
  const [history, setHistory] = useState<BookingHistoryEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refreshHistory = useCallback(async () => {
    if (!bookingId) return;

    setIsLoading(true);
    setError(null);

    try {
      const historyData = await getCompleteBookingHistory(bookingId);
      setHistory(historyData);
    } catch (err) {
      setError("An error occurred while loading booking history");
    } finally {
      setIsLoading(false);
    }
  }, [bookingId]);

  // Load history when bookingId changes
  useEffect(() => {
    refreshHistory();
  }, [refreshHistory]);

  return {
    history,
    isLoading,
    error,
    refreshHistory,
  };
}

/**
 * Hook for managing booking cancellation
 *
 * @param bookingId - The booking ID for cancellation
 * @returns Cancellation information and cancel method
 */
export function useCancellation(
  bookingId: string | null
): UseCancellationReturn {
  const [cancellationInfo, setCancellationInfo] =
    useState<CancellationInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load cancellation info
  useEffect(() => {
    if (!bookingId) return;

    const loadCancellationInfo = async () => {
      setIsLoading(true);
      try {
        const info = await getBookingCancellationInfo(bookingId);
        setCancellationInfo(info);
      } catch (err) {
        setError("Failed to load cancellation information");
      } finally {
        setIsLoading(false);
      }
    };

    loadCancellationInfo();
  }, [bookingId]);

  const cancelBooking = useCallback(
    async (reason?: string): Promise<boolean> => {
      if (!bookingId) return false;

      setIsLoading(true);
      setError(null);

      try {
        const sessionToken = localStorage.getItem("booking_session");
        const result = await cancelUserBooking(
          bookingId,
          reason,
          sessionToken || undefined
        );

        if (result.success) {
          // Refresh cancellation info
          const info = await getBookingCancellationInfo(bookingId);
          setCancellationInfo(info);
          return true;
        } else {
          setError(result.error || "Failed to cancel booking");
          return false;
        }
      } catch (err) {
        setError("An error occurred while cancelling booking");
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    [bookingId]
  );

  return {
    cancellationInfo,
    isLoading,
    error,
    canCancel: cancellationInfo?.canCancel || false,
    cancelBooking,
  };
}

/**
 * Hook for managing booking updates
 *
 * @returns Update methods and state
 */
export function useBookingUpdate(): UseBookingUpdateReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateBooking = useCallback(
    async (updateRequest: BookingUpdateRequest): Promise<boolean> => {
      setIsLoading(true);
      setError(null);

      try {
        const sessionToken = localStorage.getItem("booking_session");
        const result = await updateUserBooking(
          updateRequest,
          sessionToken || undefined
        );

        if (result.success) {
          return true;
        } else {
          setError(result.error || "Failed to update booking");
          return false;
        }
      } catch (err) {
        setError("An error occurred while updating booking");
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return {
    isLoading,
    error,
    updateBooking,
  };
}

/**
 * Hook for getting booking pricing information
 *
 * @param bookingId - The booking ID to get pricing for
 * @returns Pricing information and loading state
 */
export function useBookingPricing(bookingId: string | null) {
  const [pricing, setPricing] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!bookingId) return;

    const loadPricing = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const pricingData = await getBookingPricing(bookingId);
        if (pricingData) {
          setPricing(pricingData);
        } else {
          setError("Failed to load pricing information");
        }
      } catch (err) {
        setError("An error occurred while loading pricing");
      } finally {
        setIsLoading(false);
      }
    };

    loadPricing();
  }, [bookingId]);

  return {
    pricing,
    isLoading,
    error,
  };
}

/**
 * Hook for getting all user bookings
 *
 * @param email - User's email address
 * @returns Array of user bookings and loading state
 */
export function useUserBookings(email: string | null) {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refreshBookings = useCallback(async () => {
    if (!email) return;

    setIsLoading(true);
    setError(null);

    try {
      const userBookings = await getUserBookings(email);
      setBookings(userBookings);
    } catch (err) {
      setError("An error occurred while loading bookings");
    } finally {
      setIsLoading(false);
    }
  }, [email]);

  useEffect(() => {
    refreshBookings();
  }, [refreshBookings]);

  return {
    bookings,
    isLoading,
    error,
    refreshBookings,
  };
}
