import React from "react";
import { Cruise } from "@/lib/interfaces/services/cruises";

export interface BookingStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PassengerInfo {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
  passportNumber: string;
  passportExpiry: string;
  emergencyContact: {
    name: string;
    phone: string;
    relationship: string;
  };
}

export interface CabinSelection {
  id: string;
  type: string;
  level: string;
  price: number;
  description: string;
  amenities: string[];
  maxOccupancy: number;
}

export interface GuestCount {
  adults: number;
  children: number;
  seniors: number;
  infants: number;
}

export interface GuestResidency {
  country: string;
  state?: string;
  isResident: boolean;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}

export interface PaymentInfo {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardholderName: string;
  billingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}

export interface BookingFormData {
  passengers: PassengerInfo[];
  cabin: CabinSelection | null;
  guestCount: GuestCount;
  guestResidency: GuestResidency;
  promotionCode: string;
  diningPreferences: string[];
  excursions: string[];
  specialRequests: string;
  contactInfo: ContactInfo;
  payment: PaymentInfo;
}

// Step component prop types
export interface GuestInformationStepProps {
  guestCount: GuestCount;
  guestResidency: GuestResidency;
  promotionCode: string;
  cruise: Cruise | null;
  onUpdateGuestCount: (guestCount: GuestCount) => void;
  onUpdateGuestResidency: (guestResidency: GuestResidency) => void;
  onUpdatePromotionCode: (promotionCode: string) => void;
  errors: Record<string, string>;
}

export interface PassengerInformationStepProps {
  passengers: PassengerInfo[];
  onUpdatePassenger: (id: string, field: string, value: string) => void;
  onAddPassenger: () => void;
  onRemovePassenger: (id: string) => void;
  errors: Record<string, string>;
}

export interface CabinSelectionStepProps {
  cabins: CabinSelection[];
  selectedCabin: CabinSelection | null;
  onSelectCabin: (cabin: CabinSelection) => void;
  passengerCount: number;
  errors: Record<string, string>;
}

export interface PreferencesStepProps {
  contactInfo: ContactInfo;
  specialRequests: string;
  onUpdateContactInfo: (contactInfo: ContactInfo) => void;
  onUpdateSpecialRequests: (requests: string) => void;
  errors: Record<string, string>;
}

export interface PaymentStepProps {
  payment: PaymentInfo;
  onUpdatePayment: (payment: PaymentInfo) => void;
  errors: Record<string, string>;
}

export interface ConfirmationStepProps {
  cruise: Cruise;
  bookingData: BookingFormData;
  totalPrice: number;
}
