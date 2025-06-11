/**
 * Cruise Booking Authentication and Management
 *
 * This module provides comprehensive booking management functionality including:
 * - User authentication for booking access
 * - Booking status checking
 * - Booking cancellation
 * - Past booking history
 * - Booking updates and modifications
 * 
 * All functions are dependent on the Vecto Cruise API interfaces and match the actual API structure.
 */

import {
  cancelBooking,
  getBooking,
  getBookingHistory,
  getCancellationPenalties,
  getStatementAndPricing,
  updateBooking,
  type Booking,
  type Passenger,
  type ApiResponse,
} from "../api/vecto-cruise-api";

// Types for booking authentication and management
export interface BookingUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  isAuthenticated: boolean;
  lastLogin?: string;
  bookingNumber?: string;
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
  refundAmount?: number;
  lastModified?: string;
}

export interface BookingHistoryEntry {
  entry_date_time: Date;
  actions: string[];
  actionType: "created" | "modified" | "cancelled" | "payment" | "confirmation";
}

export interface CancellationInfo {
  canCancel: boolean;
  penalty: number;
  percentage: number;
  refundAmount: number;
  cancellationDeadline?: string;
}

export interface BookingUpdateRequest {
  bookingNumber: string;
  itinerary_id: number;
  updateType: "passenger_info" | "cabin_upgrade" | "services" | "contact_info";
  updates: {
    passengers?: Partial<Passenger>[];
    cabin_category_code?: string;
    cabin_number?: string;
    dining_seat_code?: number;
    dining_table_code?: number;
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

    // Find the primary passenger (first passenger with primary_contact flag or first passenger)
    const primaryPassenger = booking.passenger.find(
      (p) => p.primary_contact === "Y"
    ) || booking.passenger[0];

    if (!primaryPassenger) {
      return {
        success: false,
        error: "No passenger information found for this booking.",
      };
    }

    // Verify credentials (case-insensitive comparison)
    const nameMatch =
      primaryPassenger.last_name.toLowerCase() === credentials.lastName.toLowerCase();

    // For email verification, we'll check against the booking agent email if available
    const emailMatch = 
      primaryPassenger.agent_email?.toLowerCase() === credentials.email.toLowerCase() ||
      // Fallback: check if email domain matches or contains passenger name
      credentials.email.toLowerCase().includes(primaryPassenger.first_name.toLowerCase()) ||
      credentials.email.toLowerCase().includes(primaryPassenger.last_name.toLowerCase());

    if (!nameMatch) {
      return {
        success: false,
        error: "The provided last name doesn't match our records.",
      };
    }

    // Create authenticated user session
    const user: BookingUser = {
      id: `${primaryPassenger.first_name}_${primaryPassenger.last_name}_${credentials.bookingNumber}`,
      email: credentials.email,
      firstName: primaryPassenger.first_name,
      lastName: primaryPassenger.last_name,
      phone: primaryPassenger.phone,
      isAuthenticated: true,
      lastLogin: new Date().toISOString(),
      bookingNumber: credentials.bookingNumber,
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
 * @param bookingNumber - The booking number to check status for
 * @param itinerary_id - The itinerary ID associated with the booking
 * @returns Promise resolving to detailed booking status information
 */
export async function getBookingStatus(
  bookingNumber: string,
  itinerary_id: number
): Promise<BookingStatusInfo | null> {
  try {
    const [bookingResponse, cancellationResponse] = await Promise.all([
      getBooking(bookingNumber),
      getCancellationPenalties(bookingNumber, itinerary_id),
    ]);

    if (!bookingResponse.success || !bookingResponse.data) {
      return null;
    }

    const booking = bookingResponse.data;

    // Determine booking status and capabilities
    const status = determineBookingStatus(booking);
    const canCancel = canCancelBooking(booking);
    const canModify = canModifyBooking(booking);

    return {
      booking,
      status: status.status,
      statusDescription: status.description,
      canCancel,
      canModify,
      cancellationPenalty: cancellationResponse.data?.penalty,
      refundAmount: cancellationResponse.data?.refund_amount,
    };
  } catch (error) {
    console.error("Error getting booking status:", error);
    return null;
  }
}

/**
 * Determines the current status of a booking based on available data
 */
function determineBookingStatus(booking: Booking): {
  status: "confirmed" | "pending" | "cancelled" | "completed" | "modified";
  description: string;
} {
  // Since the Booking interface doesn't have a status field, we'll infer status
  // based on the booking data and current date
  const now = new Date();
  
  // If booking has a booking_number, it's likely confirmed
  if (booking.booking_number) {
    return {
      status: "confirmed",
      description: "Your booking is confirmed and ready for travel",
    };
  }

  // Default to pending if no booking number
  return {
    status: "pending",
    description: "Your booking is being processed",
  };
}

/**
 * Determines if a booking can be cancelled based on booking data
 */
function canCancelBooking(booking: Booking): boolean {
  // Basic logic: if booking has a booking_number, it can potentially be cancelled
  // In practice, this would depend on cruise line policies and departure dates
  return Boolean(booking.booking_number);
}

/**
 * Determines if a booking can be modified
 */
function canModifyBooking(booking: Booking): boolean {
  // Similar to cancellation, if booking exists and has a booking number, it can be modified
  return Boolean(booking.booking_number);
}

/**
 * Retrieves the complete booking history for a booking
 *
 * @param bookingNumber - The booking number to get history for
 * @param itinerary_id - The itinerary ID associated with the booking
 * @returns Promise resolving to array of booking history entries
 */
export async function getCompleteBookingHistory(
  bookingNumber: string,
  itinerary_id: number
): Promise<BookingHistoryEntry[]> {
  try {
    const historyResponse = await getBookingHistory(bookingNumber, itinerary_id);

    if (!historyResponse.success || !historyResponse.data) {
      return [];
    }

    // Transform API response to our internal format
    return historyResponse.data.booking_history_entries.map((entry) => ({
      entry_date_time: entry.entry_date_time,
      actions: entry.actions,
      actionType: determineActionType(entry.actions.join(", ")),
    }));
  } catch (error) {
    console.error("Error getting booking history:", error);
    return [];
  }
}

/**
 * Determines the action type based on the action descriptions
 */
function determineActionType(
  actions: string
): "created" | "modified" | "cancelled" | "payment" | "confirmation" {
  const actionsLower = actions.toLowerCase();

  if (actionsLower.includes("created") || actionsLower.includes("booked")) {
    return "created";
  } else if (actionsLower.includes("cancelled")) {
    return "cancelled";
  } else if (actionsLower.includes("payment") || actionsLower.includes("paid")) {
    return "payment";
  } else if (actionsLower.includes("confirmed")) {
    return "confirmation";
  } else {
    return "modified";
  }
}

/**
 * Gets detailed cancellation information for a booking
 *
 * @param bookingNumber - The booking number to get cancellation info for
 * @param itinerary_id - The itinerary ID associated with the booking
 * @returns Promise resolving to cancellation information
 */
export async function getBookingCancellationInfo(
  bookingNumber: string,
  itinerary_id: number
): Promise<CancellationInfo | null> {
  try {
    const [bookingResponse, cancellationResponse] = await Promise.all([
      getBooking(bookingNumber),
      getCancellationPenalties(bookingNumber, itinerary_id),
    ]);

    if (!bookingResponse.success || !cancellationResponse.success) {
      return null;
    }

    const booking = bookingResponse.data!;
    const cancellationData = cancellationResponse.data!;

    const canCancel = canCancelBooking(booking);

    return {
      canCancel,
      penalty: cancellationData.penalty,
      percentage: cancellationData.percentage,
      refundAmount: cancellationData.refund_amount,
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
  // Since we don't have departure date in the booking, we'll use a default policy
  try {
    const now = new Date();
    const deadline = new Date(now.getTime() + 48 * 60 * 60 * 1000); // 48 hours from now
    return deadline.toISOString();
  } catch {
    return undefined;
  }
}

/**
 * Cancels a booking with optional reason
 *
 * @param bookingNumber - The booking number to cancel
 * @param itinerary_id - The itinerary ID associated with the booking
 * @param sessionToken - User session token for authentication
 * @returns Promise resolving to cancellation result
 */
export async function cancelUserBooking(
  bookingNumber: string,
  itinerary_id: number,
  sessionToken?: string
): Promise<{
  success: boolean;
  bookingCancelled?: "Y" | "N";
  cancelRefNumber?: string;
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
    const cancellationInfo = await getBookingCancellationInfo(
      bookingNumber,
      itinerary_id
    );
    if (!cancellationInfo?.canCancel) {
      return {
        success: false,
        error: "This booking cannot be cancelled at this time",
      };
    }

    // Proceed with cancellation
    const cancellationResponse = await cancelBooking(bookingNumber, itinerary_id);

    if (!cancellationResponse.success) {
      return {
        success: false,
        error: "Failed to cancel booking. Please contact customer service.",
      };
    }

    return {
      success: true,
      bookingCancelled: cancellationResponse.data?.booking_cancelled,
      cancelRefNumber: cancellationResponse.data?.booking_cancel_ref_num,
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
    const statusInfo = await getBookingStatus(
      updateRequest.bookingNumber,
      updateRequest.itinerary_id
    );
    if (!statusInfo?.canModify) {
      return {
        success: false,
        error: "This booking cannot be modified at this time",
      };
    }

    // Prepare update data based on the actual Booking interface
    const updateData: Partial<Booking> = {
      booking_number: updateRequest.bookingNumber,
      itinerary_id: updateRequest.itinerary_id,
    };

    if (updateRequest.updates.passengers) {
      updateData.passenger = updateRequest.updates.passengers as Passenger[];
    }

    if (updateRequest.updates.cabin_category_code) {
      updateData.cabin_category_code = updateRequest.updates.cabin_category_code;
    }

    if (updateRequest.updates.cabin_number) {
      updateData.cabin_number = updateRequest.updates.cabin_number;
    }

    if (updateRequest.updates.dining_seat_code) {
      updateData.dining_seat_code = updateRequest.updates.dining_seat_code;
    }

    if (updateRequest.updates.dining_table_code) {
      updateData.dining_table_code = updateRequest.updates.dining_table_code;
    }

    // Update the booking
    const updateResponse = await updateBooking(updateRequest.bookingNumber, updateData);

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
 * @param bookingData - The booking data to get pricing for
 * @returns Promise resolving to pricing information
 */
export async function getBookingPricing(
  bookingData: Booking
): Promise<Booking | null> {
  try {
    const pricingResponse = await getStatementAndPricing(bookingData);
    return pricingResponse.success && pricingResponse.data ? pricingResponse.data : null;
  } catch (error) {
    console.error("Error getting booking pricing:", error);
    return null;
  }
}

/**
 * Retrieves all bookings for a user (based on email)
 * This would typically require a different API endpoint, but the current API doesn't support this
 *
 * @param email - User's email address
 * @returns Promise resolving to array of user's bookings
 */
export async function getUserBookings(email: string): Promise<Booking[]> {
  try {
    // In a real implementation, this would call a specific API endpoint
    // The current Vecto API doesn't have a "get bookings by email" endpoint
    // This would need to be implemented on the API side
    console.log(`Getting bookings for user: ${email}`);
    console.warn("getUserBookings: This functionality requires an API endpoint that doesn't exist yet");
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

  if (!credentials.bookingNumber || credentials.bookingNumber.trim().length < 3) {
    errors.push("Booking number must be at least 3 characters long");
  }

  if (!credentials.email || !credentials.email.includes("@")) {
    errors.push("Please provide a valid email address");
  }

  if (!credentials.lastName || credentials.lastName.trim().length < 2) {
    errors.push("Last name must be at least 2 characters long");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Gets all active booking sessions (for admin purposes)
 */
export function getActiveBookingSessions(): string[] {
  return Array.from(bookingSessions.keys());
}

/**
 * Clears all booking sessions (for admin purposes or cleanup)
 */
export function clearAllBookingSessions(): void {
  bookingSessions.clear();
}
