import { PaymentInfo } from "./payment";

export interface Booking {
  id: string;
  user_id: string;
  itinerary_id: string;
  cruise_line_id: string;
  ship_id: string;
  booking_reference: string;
  booking_date: string;
  departure_date: string;
  return_date: string;
  status: "confirmed" | "pending" | "cancelled" | "completed";
  total_price: number;
  currency: string;
  passengers: BookingPassenger[];
  cabin_details: CabinBooking;
  special_requests?: string[];
  payment_info: PaymentInfo;
  created_at: string;
  updated_at: string;
}

export interface BookingPassenger {
  id: string;
  first_name: string;
  middle_name?: string;
  last_name: string;
  date_of_birth: string;
  gender: "M" | "F" | "Other";
  nationality: string;
  passport_number?: string;
  passport_expiry?: string;
  dietary_requirements?: string[];
  special_assistance?: string[];
  is_primary_contact: boolean;
  contact_email?: string;
  contact_phone?: string;
}

export interface CabinBooking {
  cabin_id: string;
  cabin_number?: string;
  cabin_type: "interior" | "oceanview" | "balcony" | "suite";
  cabin_category: string;
  deck: number;
  price_per_person: number;
  occupancy: number;
  bed_configuration: string;
  amenities: string[];
}
