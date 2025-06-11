/**
 * Cruise Booking Authentication and Management
 *
 * This module provides comprehensive booking management functionality including:
 * - User authentication for booking access
 * - Booking status checking
 * - Booking cancellation
 * - Past booking history
 * - Booking updates and modifications
 */

import {
  cancelBooking,
  getBooking,
  getBookingHistory,
  getCancellationPenalties,
  getStatementAndPricing,
  updateBooking,
  type Booking,
} from "../api/expedia-cruise-api";

// Types for booking authentication and management
export interface BookingUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  isAuthenticated: boolean;
  lastLogin?: string;
}

export interface BookingCredentials {
  bookingNumber: string;
  email: string;
  lastName: string;
}

export interface BookingLoginResult {
  success: boolean;
  user?: BookingUser;
  booking?: Booking;
  error?: string;
}

export interface BookingStatusInfo {
  booking: Booking;
  status: "confirmed" | "pending" | "cancelled" | "completed" | "modified";
  statusDescription: string;
  canCancel: boolean;
  canModify: boolean;
  cancellationPenalty?: number;
  lastModified?: string;
}

export interface BookingHistoryEntry {
  timestamp: string;
  action: string;
  details: string;
  user?: string;
  actionType: "created" | "modified" | "cancelled" | "payment" | "confirmation";
}

export interface CancellationInfo {
  canCancel: boolean;
  penalties: Array<{
    date: string;
    penalty: number;
    percentage: number;
  }>;
  currentPenalty: number;
  refundAmount: number;
  cancellationDeadline?: string;
}

export interface BookingUpdateRequest {
  bookingId: string;
  updateType: "passenger_info" | "cabin_upgrade" | "services" | "contact_info";
  updates: {
    passengers?: Array<{
      id: string;
      firstName?: string;
      lastName?: string;
      title?: string;
      gender?: string;
      dateOfBirth?: string;
      nationality?: string;
      occupation?: string;
    }>;
    contactInfo?: {
      email?: string;
      phone?: string;
      address?: {
        street?: string;
        city?: string;
        state?: string;
        zipCode?: string;
        country?: string;
      };
    };
    selectedServices?: string[];
    selectedPackages?: string[];
    cabinId?: string;
  };
  reason?: string;
}

// In-memory session storage (in production, use proper session management)
const bookingSessions = new Map<string, BookingUser>();

/**
 * Generates a unique session token for booking authentication
 */
function generateSessionToken(): string {
  return `booking_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Validates booking credentials and authenticates user
 *
 * @param credentials - Booking number, email, and last name for authentication
 * @returns Promise resolving to login result with user and booking info
 */
export async function authenticateBooking(
  credentials: BookingCredentials
): Promise<BookingLoginResult> {
  try {
    // Validate input
    if (
      !credentials.bookingNumber ||
      !credentials.email ||
      !credentials.lastName
    ) {
      return {
        success: false,
        error: "All fields are required: booking number, email, and last name",
      };
    }

    // Fetch booking from API
    const bookingResponse = await getBooking(credentials.bookingNumber);

    if (!bookingResponse.success || !bookingResponse.data) {
      return {
        success: false,
        error: "Booking not found. Please check your booking number.",
      };
    }

    const booking = bookingResponse.data;

    // Find the primary passenger (first passenger is usually the booking contact)
    const primaryPassenger = booking.passengers.find(
      (p: any) => p.is_primary_contact === true
    );
    if (!primaryPassenger) {
      return {
        success: false,
        error: "No passenger information found for this booking.",
      };
    }

    // Verify credentials (case-insensitive comparison)
    const emailMatch =
      primaryPassenger.first_name
        ?.toLowerCase()
        .includes(credentials.email.toLowerCase()) ||
      primaryPassenger.last_name
        .toLowerCase()
        .includes(credentials.email.toLowerCase());
    const nameMatch =
      primaryPassenger.last_name?.toLowerCase() ===
      credentials.lastName.toLowerCase();

    if (!emailMatch && !nameMatch) {
      return {
        success: false,
        error: "The provided information doesn't match our records.",
      };
    }

    // Create authenticated user session
    const user: BookingUser = {
      id: primaryPassenger.first_name,
      email: credentials.email,
      firstName: primaryPassenger.first_name || "",
      lastName: primaryPassenger.last_name || "",
      phone: primaryPassenger.contact_phone || "", // Would need to be fetched from booking contact info
      isAuthenticated: true,
      lastLogin: new Date().toISOString(),
    };

    // Store session (in production, use secure session management)
    const sessionToken = generateSessionToken();
    bookingSessions.set(sessionToken, user);

    return {
      success: true,
      user,
      booking,
    };
  } catch (error) {
    console.error("Error authenticating booking:", error);
    return {
      success: false,
      error: "Authentication failed. Please try again.",
    };
  }
}

/**
 * Logs out a user by invalidating their session
 *
 * @param sessionToken - The session token to invalidate
 */
export function logoutBookingUser(sessionToken: string): void {
  bookingSessions.delete(sessionToken);
}

/**
 * Checks if a session token is valid and returns the associated user
 *
 * @param sessionToken - The session token to validate
 * @returns The authenticated user or null if invalid
 */
export function getAuthenticatedUser(sessionToken: string): BookingUser | null {
  return bookingSessions.get(sessionToken) || null;
}

/**
 * Retrieves comprehensive booking status information
 *
 * @param bookingId - The booking ID to check status for
 * @returns Promise resolving to detailed booking status information
 */
export async function getBookingStatus(
  bookingId: string
): Promise<BookingStatusInfo | null> {
  try {
    const [bookingResponse, cancellationResponse] = await Promise.all([
      getBooking(bookingId),
      getCancellationPenalties(bookingId),
    ]);

    if (!bookingResponse.success || !bookingResponse.data) {
      return null;
    }

    const booking = bookingResponse.data;

    // Determine booking status and capabilities
    const status = determineBookingStatus(booking);
    const canCancel = canCancelBooking(booking, cancellationResponse.data);
    const canModify = canModifyBooking(booking);

    return {
      booking,
      status: status.status,
      statusDescription: status.description,
      canCancel,
      canModify,
      cancellationPenalty: cancellationResponse.data?.penalty,
      lastModified: booking.updated_at,
    };
  } catch (error) {
    console.error("Error getting booking status:", error);
    return null;
  }
}

/**
 * Determines the current status of a booking
 */
function determineBookingStatus(booking: Booking): {
  status: "confirmed" | "pending" | "cancelled" | "completed" | "modified";
  description: string;
} {
  switch (booking.status.toLowerCase()) {
    case "confirmed":
      return {
        status: "confirmed",
        description: "Your booking is confirmed and ready for travel",
      };
    case "pending":
      return {
        status: "pending",
        description: "Your booking is pending confirmation",
      };
    case "cancelled":
      return {
        status: "cancelled",
        description: "This booking has been cancelled",
      };
    case "completed":
      return {
        status: "completed",
        description: "Your cruise has been completed",
      };
    default:
      return {
        status: "modified",
        description: "Your booking has been modified",
      };
  }
}

/**
 * Determines if a booking can be cancelled
 */
function canCancelBooking(booking: Booking, cancellationData: any): boolean {
  if (
    booking.status.toLowerCase() === "cancelled" ||
    booking.status.toLowerCase() === "completed"
  ) {
    return false;
  }

  // Check if we're within the cancellation window
  const now = new Date();
  const createdDate = new Date(booking.created_at);
  const daysSinceBooking =
    (now.getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24);

  // Allow cancellation within reasonable timeframe (this would be based on cruise line policy)
  return daysSinceBooking < 365; // Example: allow cancellation within a year
}

/**
 * Determines if a booking can be modified
 */
function canModifyBooking(booking: Booking): boolean {
  return (
    booking.status.toLowerCase() === "confirmed" ||
    booking.status.toLowerCase() === "pending"
  );
}

/**
 * Retrieves the complete booking history for a booking
 *
 * @param bookingId - The booking ID to get history for
 * @returns Promise resolving to array of booking history entries
 */
export async function getCompleteBookingHistory(
  bookingId: string
): Promise<BookingHistoryEntry[]> {
  try {
    const historyResponse = await getBookingHistory(bookingId);

    if (!historyResponse.success || !historyResponse.data) {
      return [];
    }

    // Transform API response to our internal format
    return historyResponse.data.map((entry: any) => ({
      timestamp: entry.timestamp,
      action: entry.action,
      details: entry.details,
      user: entry.user,
      actionType: determineActionType(entry.action),
    }));
  } catch (error) {
    console.error("Error getting booking history:", error);
    return [];
  }
}

/**
 * Determines the action type based on the action description
 */
function determineActionType(
  action: string
): "created" | "modified" | "cancelled" | "payment" | "confirmation" {
  const actionLower = action.toLowerCase();

  if (actionLower.includes("created") || actionLower.includes("booked")) {
    return "created";
  } else if (actionLower.includes("cancelled")) {
    return "cancelled";
  } else if (actionLower.includes("payment") || actionLower.includes("paid")) {
    return "payment";
  } else if (actionLower.includes("confirmed")) {
    return "confirmation";
  } else {
    return "modified";
  }
}

/**
 * Gets detailed cancellation information for a booking
 *
 * @param bookingId - The booking ID to get cancellation info for
 * @returns Promise resolving to cancellation information
 */
export async function getBookingCancellationInfo(
  bookingId: string
): Promise<CancellationInfo | null> {
  try {
    const [bookingResponse, cancellationResponse] = await Promise.all([
      getBooking(bookingId),
      getCancellationPenalties(bookingId),
    ]);

    if (!bookingResponse.success || !cancellationResponse.success) {
      return null;
    }

    const booking = bookingResponse.data!;
    const cancellationData = cancellationResponse.data!;

    const canCancel = canCancelBooking(booking, cancellationData);
    const refundAmount = booking.total_price - cancellationData.penalty;

    return {
      canCancel,
      penalties: [], // Not available in current API response
      currentPenalty: cancellationData.penalty,
      refundAmount: Math.max(0, refundAmount),
      cancellationDeadline: calculateCancellationDeadline(booking),
    };
  } catch (error) {
    console.error("Error getting cancellation info:", error);
    return null;
  }
}

/**
 * Calculates the cancellation deadline for a booking
 */
function calculateCancellationDeadline(booking: Booking): string | undefined {
  // This would typically be based on cruise line policies
  // For example, 48 hours before departure
  try {
    const itineraryDate = new Date(booking.created_at);
    const deadline = new Date(itineraryDate.getTime() - 48 * 60 * 60 * 1000); // 48 hours before
    return deadline.toISOString();
  } catch {
    return undefined;
  }
}

/**
 * Cancels a booking with optional reason
 *
 * @param bookingId - The booking ID to cancel
 * @param reason - Optional reason for cancellation
 * @param sessionToken - User session token for authentication
 * @returns Promise resolving to cancellation result
 */
export async function cancelUserBooking(
  bookingId: string,
  reason?: string,
  sessionToken?: string
): Promise<{
  success: boolean;
  refundAmount?: number;
  error?: string;
}> {
  try {
    // Verify user authentication if session token provided
    if (sessionToken && !getAuthenticatedUser(sessionToken)) {
      return {
        success: false,
        error: "Authentication required to cancel booking",
      };
    }

    // Check if booking can be cancelled
    const cancellationInfo = await getBookingCancellationInfo(bookingId);
    if (!cancellationInfo?.canCancel) {
      return {
        success: false,
        error: "This booking cannot be cancelled at this time",
      };
    }

    // Proceed with cancellation
    const cancellationResponse = await cancelBooking(bookingId);

    if (!cancellationResponse.success) {
      return {
        success: false,
        error: "Failed to cancel booking. Please contact customer service.",
      };
    }

    return {
      success: true,
      refundAmount: cancellationResponse.data?.refund_amount,
    };
  } catch (error) {
    console.error("Error cancelling booking:", error);
    return {
      success: false,
      error: "An error occurred while cancelling the booking",
    };
  }
}

/**
 * Updates a booking with new information
 *
 * @param updateRequest - The booking update request
 * @param sessionToken - User session token for authentication
 * @returns Promise resolving to update result
 */
export async function updateUserBooking(
  updateRequest: BookingUpdateRequest,
  sessionToken?: string
): Promise<{
  success: boolean;
  updatedBooking?: Booking;
  error?: string;
}> {
  try {
    // Verify user authentication if session token provided
    if (sessionToken && !getAuthenticatedUser(sessionToken)) {
      return {
        success: false,
        error: "Authentication required to update booking",
      };
    }

    // Validate the booking can be modified
    const statusInfo = await getBookingStatus(updateRequest.bookingId);
    if (!statusInfo?.canModify) {
      return {
        success: false,
        error: "This booking cannot be modified at this time",
      };
    }

    // Prepare update data
    const updateData: Partial<Booking> = {};

    if (updateRequest.updates.passengers) {
      updateData.passengers = updateRequest.updates.passengers.map((p) => ({
        id: p.id,
        first_name: p.firstName || "",
        last_name: p.lastName || "",
        date_of_birth: p.dateOfBirth || "",
        gender: (p.gender as "M" | "F" | "Other") || "Other",
        nationality: p.nationality || "",
        is_primary_contact: false,
        contact_email: "",
        contact_phone: "",
      }));
    }

    // Note: Cabin updates would need to be handled through cabin_details
    // if (updateRequest.updates.cabinId) {
    //   updateData.cabin_details = { ...updateData.cabin_details, cabin_id: updateRequest.updates.cabinId };
    // }

    // Update the booking
    const updateResponse = await updateBooking(
      updateRequest.bookingId,
      updateData
    );

    if (!updateResponse.success) {
      return {
        success: false,
        error: "Failed to update booking. Please try again.",
      };
    }

    return {
      success: true,
      updatedBooking: updateResponse.data,
    };
  } catch (error) {
    console.error("Error updating booking:", error);
    return {
      success: false,
      error: "An error occurred while updating the booking",
    };
  }
}

/**
 * Gets the current pricing and statement for a booking
 *
 * @param bookingId - The booking ID to get pricing for
 * @returns Promise resolving to pricing information
 */
export async function getBookingPricing(bookingId: string) {
  try {
    const pricingResponse = await getStatementAndPricing(bookingId);
    return pricingResponse.success ? pricingResponse.data : null;
  } catch (error) {
    console.error("Error getting booking pricing:", error);
    return null;
  }
}

/**
 * Retrieves all bookings for a user (based on email)
 * This would typically require a different API endpoint, but we'll simulate it
 *
 * @param email - User's email address
 * @returns Promise resolving to array of user's bookings
 */
export async function getUserBookings(email: string): Promise<Booking[]> {
  try {
    // In a real implementation, this would call a specific API endpoint
    // For now, we'll return empty array as this functionality would need
    // to be implemented on the API side
    console.log(`Getting bookings for user: ${email}`);
    return [];
  } catch (error) {
    console.error("Error getting user bookings:", error);
    return [];
  }
}

/**
 * Validates booking credentials format
 */
export function validateBookingCredentials(credentials: BookingCredentials): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!credentials.bookingNumber || credentials.bookingNumber.length < 6) {
    errors.push("Booking number must be at least 6 characters long");
  }

  if (!credentials.email || !credentials.email.includes("@")) {
    errors.push("Please provide a valid email address");
  }

  if (!credentials.lastName || credentials.lastName.length < 2) {
    errors.push("Last name must be at least 2 characters long");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
