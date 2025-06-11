"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  UserIcon,
  CreditCardIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  MapPinIcon,
  ClockIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { getCruiseById } from "@/lib/utils/get/cruises";
import { Cruise } from "@/lib/interfaces/services/cruises";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { OceanLoading } from "@/components/Loading";
// Remove ChartBase import as it's not used in the current implementation
import ChartBase from "@/components/charts/ChartBase";

// Types for booking
interface BookingStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface PassengerInfo {
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

interface CabinSelection {
  id: string;
  type: string;
  level: string;
  price: number;
  description: string;
  amenities: string[];
  maxOccupancy: number;
}

interface BookingFormData {
  passengers: PassengerInfo[];
  cabin: CabinSelection | null;
  guestCount: {
    adults: number;
    children: number;
    seniors: number;
    infants: number;
  };
  guestResidency: {
    country: string;
    state?: string;
    isResident: boolean;
  };
  promotionCode: string;
  diningPreferences: string[];
  excursions: string[];
  specialRequests: string;
  contactInfo: {
    email: string;
    phone: string;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
      country: string;
    };
  };
  payment: {
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
  };
}

const bookingSteps: BookingStep[] = [
  {
    id: "guest-info",
    title: "Guest Information",
    description: "Number of guests and residency details",
    icon: <UserGroupIcon className="w-5 h-5" />,
  },
  {
    id: "passengers",
    title: "Passenger Details",
    description: "Add traveler details and documents",
    icon: <UserIcon className="w-5 h-5" />,
  },
  {
    id: "cabin",
    title: "Select Cabin",
    description: "Choose your accommodation",
    icon: <MapPinIcon className="w-5 h-5" />,
  },
  {
    id: "preferences",
    title: "Preferences & Extras",
    description: "Dining, excursions, and special requests",
    icon: <GlobeAltIcon className="w-5 h-5" />,
  },
  {
    id: "payment",
    title: "Payment",
    description: "Secure payment and billing information",
    icon: <CreditCardIcon className="w-5 h-5" />,
  },
  {
    id: "confirmation",
    title: "Confirmation",
    description: "Review and confirm your booking",
    icon: <CheckCircleIcon className="w-5 h-5" />,
  },
];

const cabinTypes: CabinSelection[] = [
  {
    id: "interior",
    type: "Interior Stateroom",
    level: "Essential",
    price: 1299,
    description: "Comfortable interior cabin with modern amenities",
    amenities: [
      "Private bathroom",
      "Air conditioning",
      "TV",
      "Safe",
      "Mini-fridge",
    ],
    maxOccupancy: 2,
  },
  {
    id: "oceanview",
    type: "Ocean View Stateroom",
    level: "Classic",
    price: 1799,
    description: "Enjoy stunning ocean views from your private window",
    amenities: [
      "Ocean view window",
      "Private bathroom",
      "Air conditioning",
      "TV",
      "Safe",
      "Mini-fridge",
      "Sitting area",
    ],
    maxOccupancy: 2,
  },
  {
    id: "balcony",
    type: "Balcony Stateroom",
    level: "Premium",
    price: 2499,
    description: "Spacious cabin with private balcony overlooking the ocean",
    amenities: [
      "Private balcony",
      "Ocean view",
      "Private bathroom",
      "Air conditioning",
      "TV",
      "Safe",
      "Mini-fridge",
      "Sitting area",
      "Premium bedding",
    ],
    maxOccupancy: 4,
  },
  {
    id: "suite",
    type: "Ocean Suite",
    level: "Luxury",
    price: 4299,
    description:
      "Luxurious suite with separate living area and premium amenities",
    amenities: [
      "Large private balcony",
      "Separate living room",
      "Premium bathroom",
      "Butler service",
      "Priority boarding",
      "Specialty dining credits",
      "Premium beverages",
      "Concierge service",
    ],
    maxOccupancy: 4,
  },
];

export default function BookingPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const cruiseId = searchParams.get("cruise");

  const [cruise, setCruise] = useState<Cruise | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [bookingData, setBookingData] = useState<BookingFormData>({
    passengers: [
      {
        id: "passenger-1",
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
        nationality: "",
        passportNumber: "",
        passportExpiry: "",
        emergencyContact: {
          name: "",
          phone: "",
          relationship: "",
        },
      },
    ],
    cabin: null,
    guestCount: {
      adults: 2,
      children: 0,
      seniors: 0,
      infants: 0,
    },
    guestResidency: {
      country: "",
      state: "",
      isResident: false,
    },
    promotionCode: "",
    diningPreferences: [],
    excursions: [],
    specialRequests: "",
    contactInfo: {
      email: "",
      phone: "",
      address: {
        street: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
      },
    },
    payment: {
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      cardholderName: "",
      billingAddress: {
        street: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
      },
    },
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load cruise data
  useEffect(() => {
    const loadCruiseData = async () => {
      if (!cruiseId) {
        router.push("/cruises");
        return;
      }

      try {
        const cruiseData = await getCruiseById(cruiseId);
        if (cruiseData) {
          setCruise(cruiseData);
        } else {
          router.push("/cruises");
        }
      } catch (error) {
        console.error("Error loading cruise:", error);
        router.push("/cruises");
      } finally {
        setLoading(false);
      }
    };

    loadCruiseData();
  }, [cruiseId, router]);

  // Validation functions
  const validateCurrentStep = (): boolean => {
    const newErrors: Record<string, string> = {};

    switch (currentStep) {
      case 0: // Guest Information
        if (bookingData.guestCount.adults < 1)
          newErrors.adults = "At least one adult is required";
        if (!bookingData.guestResidency.country)
          newErrors.country = "Country of residence is required";
        break;
      case 1: // Passenger Information
        bookingData.passengers.forEach((passenger, index) => {
          if (!passenger.firstName)
            newErrors[`passenger-${index}-firstName`] =
              "First name is required";
          if (!passenger.lastName)
            newErrors[`passenger-${index}-lastName`] = "Last name is required";
          if (!passenger.dateOfBirth)
            newErrors[`passenger-${index}-dateOfBirth`] =
              "Date of birth is required";
          if (!passenger.gender)
            newErrors[`passenger-${index}-gender`] = "Gender is required";
          if (!passenger.nationality)
            newErrors[`passenger-${index}-nationality`] =
              "Nationality is required";
          if (!passenger.passportNumber)
            newErrors[`passenger-${index}-passportNumber`] =
              "Passport number is required";
          if (!passenger.passportExpiry)
            newErrors[`passenger-${index}-passportExpiry`] =
              "Passport expiry is required";
        });
        break;
      case 2: // Cabin Selection
        if (!bookingData.cabin) newErrors.cabin = "Please select a cabin";
        break;
      case 3: // Preferences
        if (!bookingData.contactInfo.email)
          newErrors.email = "Email is required";
        if (!bookingData.contactInfo.phone)
          newErrors.phone = "Phone number is required";
        break;
      case 4: // Payment
        if (!bookingData.payment.cardNumber)
          newErrors.cardNumber = "Card number is required";
        if (!bookingData.payment.expiryDate)
          newErrors.expiryDate = "Expiry date is required";
        if (!bookingData.payment.cvv) newErrors.cvv = "CVV is required";
        if (!bookingData.payment.cardholderName)
          newErrors.cardholderName = "Cardholder name is required";
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateCurrentStep() && currentStep < bookingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const addPassenger = () => {
    const newPassenger: PassengerInfo = {
      id: `passenger-${bookingData.passengers.length + 1}`,
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      nationality: "",
      passportNumber: "",
      passportExpiry: "",
      emergencyContact: {
        name: "",
        phone: "",
        relationship: "",
      },
    };
    setBookingData({
      ...bookingData,
      passengers: [...bookingData.passengers, newPassenger],
    });
  };

  const removePassenger = (passengerId: string) => {
    if (bookingData.passengers.length > 1) {
      setBookingData({
        ...bookingData,
        passengers: bookingData.passengers.filter((p) => p.id !== passengerId),
      });
    }
  };

  const updatePassenger = (
    passengerId: string,
    field: string,
    value: string
  ) => {
    setBookingData({
      ...bookingData,
      passengers: bookingData.passengers.map((p) =>
        p.id === passengerId ? { ...p, [field]: value } : p
      ),
    });
  };

  const calculateTotal = () => {
    if (!bookingData.cabin) return 0;
    const basePrice = bookingData.cabin.price * bookingData.passengers.length;
    const taxes = basePrice * 0.12; // 12% taxes and fees
    return basePrice + taxes;
  };

  const submitBooking = async () => {
    if (!validateCurrentStep()) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // In a real app, you would submit the booking data to your API
      console.log("Booking submitted:", bookingData);

      // Move to confirmation step
      setCurrentStep(bookingSteps.length - 1);
    } catch (error) {
      console.error("Booking submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return <OceanLoading text="Loading cruise details..." />;
  }

  if (!cruise) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Card className="backdrop-blur-md bg-card/50 border-white/20 p-8 max-w-md text-center">
          <CardTitle className="mb-4">Cruise Not Found</CardTitle>
          <p className="mb-4 text-muted-foreground">
            The cruise you're trying to book could not be found.
          </p>
          <Button onClick={() => router.push("/cruises")}>
            Browse Cruises
          </Button>
        </Card>
      </div>
    );
  }

  // Price breakdown chart data
  const priceBreakdownData = {
    labels: ["Base Price", "Taxes & Fees"],
    datasets: [
      {
        data: [
          bookingData.cabin
            ? bookingData.cabin.price * bookingData.passengers.length
            : 0,
          bookingData.cabin
            ? bookingData.cabin.price * bookingData.passengers.length * 0.12
            : 0,
        ],
        backgroundColor: ["rgb(30, 64, 175)", "rgb(5, 150, 105)"],
        borderColor: ["rgb(30, 64, 175)", "rgb(5, 150, 105)"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="bg-gradient-to-b from-background to-muted/30 min-h-screen">
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10 border-b border-border/50">
        <div className="mx-auto px-4 py-6 container">
          <div className="flex items-center gap-4 mb-4">
            <Button
              variant="ghost"
              onClick={() => router.back()}
              className="p-2"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="mb-2 text-2xl lg:text-3xl gradient-ocean">
                Book Your Cruise
              </h1>
              <p className="text-muted-foreground">
                {cruise.title} • {cruise.itinerary?.totalDuration || "7 days"}
              </p>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-between items-center max-w-4xl">
            {bookingSteps.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-center ${
                  index < bookingSteps.length - 1 ? "flex-1" : ""
                }`}
              >
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                    index <= currentStep
                      ? "bg-primary border-primary text-primary-foreground"
                      : "bg-background border-border text-muted-foreground"
                  }`}
                >
                  {index < currentStep ? (
                    <CheckCircleIcon className="w-5 h-5" />
                  ) : (
                    step.icon
                  )}
                </div>
                {index < bookingSteps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-4 transition-all duration-300 ${
                      index < currentStep ? "bg-primary" : "bg-border"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <main id="main-content" className="mx-auto px-4 py-8 container">
        <div className="gap-8 grid grid-cols-1 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-accent/20 p-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      {bookingSteps[currentStep].icon}
                      {bookingSteps[currentStep].title}
                    </CardTitle>
                    <p className="text-muted-foreground">
                      {bookingSteps[currentStep].description}
                    </p>
                  </CardHeader>

                  <CardContent>
                    {/* Step Content */}
                    {currentStep === 0 && (
                      <GuestInformationStep
                        guestCount={bookingData.guestCount}
                        guestResidency={bookingData.guestResidency}
                        promotionCode={bookingData.promotionCode}
                        cruise={cruise}
                        onUpdateGuestCount={(guestCount) =>
                          setBookingData({ ...bookingData, guestCount })
                        }
                        onUpdateGuestResidency={(guestResidency) =>
                          setBookingData({ ...bookingData, guestResidency })
                        }
                        onUpdatePromotionCode={(promotionCode) =>
                          setBookingData({ ...bookingData, promotionCode })
                        }
                        errors={errors}
                      />
                    )}

                    {currentStep === 1 && (
                      <PassengerInformationStep
                        passengers={bookingData.passengers}
                        onUpdatePassenger={updatePassenger}
                        onAddPassenger={addPassenger}
                        onRemovePassenger={removePassenger}
                        errors={errors}
                      />
                    )}

                    {currentStep === 2 && (
                      <CabinSelectionStep
                        cabins={cabinTypes}
                        selectedCabin={bookingData.cabin}
                        onSelectCabin={(cabin) =>
                          setBookingData({ ...bookingData, cabin })
                        }
                        passengerCount={bookingData.passengers.length}
                        errors={errors}
                      />
                    )}

                    {currentStep === 3 && (
                      <PreferencesStep
                        contactInfo={bookingData.contactInfo}
                        specialRequests={bookingData.specialRequests}
                        onUpdateContactInfo={(contactInfo) =>
                          setBookingData({ ...bookingData, contactInfo })
                        }
                        onUpdateSpecialRequests={(specialRequests) =>
                          setBookingData({ ...bookingData, specialRequests })
                        }
                        errors={errors}
                      />
                    )}

                    {currentStep === 4 && (
                      <PaymentStep
                        payment={bookingData.payment}
                        onUpdatePayment={(payment) =>
                          setBookingData({ ...bookingData, payment })
                        }
                        errors={errors}
                      />
                    )}

                    {currentStep === 5 && (
                      <ConfirmationStep
                        cruise={cruise}
                        bookingData={bookingData}
                        totalPrice={calculateTotal()}
                      />
                    )}
                  </CardContent>
                </Card>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-6">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 0}
                  >
                    <ChevronLeftIcon className="mr-2 w-4 h-4" />
                    Previous
                  </Button>

                  {currentStep < bookingSteps.length - 2 ? (
                    <Button 
                      className="bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl"
                      onClick={nextStep}
                    >
                      Next
                      <ChevronRightIcon className="ml-2 w-4 h-4" />
                    </Button>
                  ) : currentStep === bookingSteps.length - 2 ? (
                    <Button
                      className="bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl"
                      onClick={submitBooking}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Complete Booking"}
                    </Button>
                  ) : (
                    <Button 
                      className="bg-gradient-to-r from-accent to-tertiary text-white hover:from-accent/90 hover:to-tertiary/90"
                      onClick={() => router.push("/")}
                    >
                      Return Home
                    </Button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Cruise Summary */}
            <Card className="backdrop-blur-md bg-card/50 border-white/20 top-4 sticky">
              <CardHeader>
                <CardTitle className="text-lg">Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">{cruise.title}</h4>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <MapPinIcon className="w-4 h-4" />
                    <span>
                      {cruise.departureLocation?.city},{" "}
                      {cruise.departureLocation?.country}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <ClockIcon className="w-4 h-4" />
                    <span>{cruise.itinerary?.totalDuration || "7 days"}</span>
                  </div>
                </div>

                {bookingData.cabin && (
                  <>
                    <div className="pt-4 border-t">
                      <h5 className="mb-2 font-medium">Selected Cabin</h5>
                      <div className="space-y-1 text-sm">
                        <div>{bookingData.cabin.type}</div>
                        <div className="text-muted-foreground">
                          {bookingData.cabin.level} Level
                        </div>
                        <div className="font-medium">
                          ${bookingData.cabin.price.toLocaleString()} per person
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h5 className="mb-2 font-medium">Passengers</h5>
                      <div className="text-muted-foreground text-sm">
                        {bookingData.passengers.length} traveler
                        {bookingData.passengers.length > 1 ? "s" : ""}
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Cabin ({bookingData.passengers.length}x)</span>
                          <span>
                            $
                            {(
                              bookingData.cabin.price *
                              bookingData.passengers.length
                            ).toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between text-muted-foreground">
                          <span>Taxes & Fees</span>
                          <span>
                            $
                            {Math.round(
                              bookingData.cabin.price *
                                bookingData.passengers.length *
                                0.12
                            ).toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between pt-2 border-t font-medium text-lg">
                          <span>Total</span>
                          <span className="gradient-ocean">
                            ${calculateTotal().toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Price Breakdown Chart */}
                    <div className="pt-4 border-t">
                      <h5 className="mb-3 font-medium">Price Breakdown</h5>
                      <ChartBase
                        type="doughnut"
                        data={priceBreakdownData}
                        height={200}
                        options={{
                          plugins: {
                            legend: {
                              position: "bottom" as const,
                            },
                          },
                          cutout: "60%",
                        }}
                      />
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Security Badge */}
            <Card className="backdrop-blur-md bg-card/50 border-white/20 p-4 text-center">
              <ShieldCheckIcon className="mx-auto mb-2 w-8 h-8 text-primary" />
              <div className="mb-1 font-medium text-sm">Secure Booking</div>
              <div className="text-muted-foreground text-xs">
                Your payment information is encrypted and secure
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

// Step Components
function PassengerInformationStep({
  passengers,
  onUpdatePassenger,
  onAddPassenger,
  onRemovePassenger,
  errors,
}: {
  passengers: PassengerInfo[];
  onUpdatePassenger: (id: string, field: string, value: string) => void;
  onAddPassenger: () => void;
  onRemovePassenger: (id: string) => void;
  errors: Record<string, string>;
}) {
  return (
    <div className="space-y-6">
      {passengers.map((passenger, index) => (
        <Card key={passenger.id} className="backdrop-blur-md bg-card/50 border-white/20 p-4">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-medium">
              Passenger {index + 1}
              {index === 0 && <Badge className="ml-2">Primary</Badge>}
            </h4>
            {passengers.length > 1 && index > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onRemovePassenger(passenger.id)}
                className="text-destructive"
              >
                Remove
              </Button>
            )}
          </div>

          <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
            <div>
              <Label htmlFor={`${passenger.id}-firstName`}>First Name *</Label>
              <Input
                id={`${passenger.id}-firstName`}
                value={passenger.firstName}
                onChange={(e) =>
                  onUpdatePassenger(passenger.id, "firstName", e.target.value)
                }
                className={
                  errors[`passenger-${index}-firstName`]
                    ? "border-destructive"
                    : ""
                }
              />
              {errors[`passenger-${index}-firstName`] && (
                <p className="mt-1 text-destructive text-sm">
                  {errors[`passenger-${index}-firstName`]}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor={`${passenger.id}-lastName`}>Last Name *</Label>
              <Input
                id={`${passenger.id}-lastName`}
                value={passenger.lastName}
                onChange={(e) =>
                  onUpdatePassenger(passenger.id, "lastName", e.target.value)
                }
                className={
                  errors[`passenger-${index}-lastName`]
                    ? "border-destructive"
                    : ""
                }
              />
              {errors[`passenger-${index}-lastName`] && (
                <p className="mt-1 text-destructive text-sm">
                  {errors[`passenger-${index}-lastName`]}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor={`${passenger.id}-dateOfBirth`}>
                Date of Birth *
              </Label>
              <Input
                id={`${passenger.id}-dateOfBirth`}
                type="date"
                value={passenger.dateOfBirth}
                onChange={(e) =>
                  onUpdatePassenger(passenger.id, "dateOfBirth", e.target.value)
                }
                className={
                  errors[`passenger-${index}-dateOfBirth`]
                    ? "border-destructive"
                    : ""
                }
              />
              {errors[`passenger-${index}-dateOfBirth`] && (
                <p className="mt-1 text-destructive text-sm">
                  {errors[`passenger-${index}-dateOfBirth`]}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor={`${passenger.id}-gender`}>Gender *</Label>
              <Select
                value={passenger.gender}
                onValueChange={(value) =>
                  onUpdatePassenger(passenger.id, "gender", value)
                }
              >
                <SelectTrigger
                  className={
                    errors[`passenger-${index}-gender`]
                      ? "border-destructive"
                      : ""
                  }
                >
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                  <SelectItem value="prefer-not-to-say">
                    Prefer not to say
                  </SelectItem>
                </SelectContent>
              </Select>
              {errors[`passenger-${index}-gender`] && (
                <p className="mt-1 text-destructive text-sm">
                  {errors[`passenger-${index}-gender`]}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor={`${passenger.id}-nationality`}>
                Nationality *
              </Label>
              <Input
                id={`${passenger.id}-nationality`}
                value={passenger.nationality}
                onChange={(e) =>
                  onUpdatePassenger(passenger.id, "nationality", e.target.value)
                }
                placeholder="e.g., United States"
                className={
                  errors[`passenger-${index}-nationality`]
                    ? "border-destructive"
                    : ""
                }
              />
              {errors[`passenger-${index}-nationality`] && (
                <p className="mt-1 text-destructive text-sm">
                  {errors[`passenger-${index}-nationality`]}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor={`${passenger.id}-passportNumber`}>
                Passport Number *
              </Label>
              <Input
                id={`${passenger.id}-passportNumber`}
                value={passenger.passportNumber}
                onChange={(e) =>
                  onUpdatePassenger(
                    passenger.id,
                    "passportNumber",
                    e.target.value
                  )
                }
                className={
                  errors[`passenger-${index}-passportNumber`]
                    ? "border-destructive"
                    : ""
                }
              />
              {errors[`passenger-${index}-passportNumber`] && (
                <p className="mt-1 text-destructive text-sm">
                  {errors[`passenger-${index}-passportNumber`]}
                </p>
              )}
            </div>

            <div className="md:col-span-2">
              <Label htmlFor={`${passenger.id}-passportExpiry`}>
                Passport Expiry Date *
              </Label>
              <Input
                id={`${passenger.id}-passportExpiry`}
                type="date"
                value={passenger.passportExpiry}
                onChange={(e) =>
                  onUpdatePassenger(
                    passenger.id,
                    "passportExpiry",
                    e.target.value
                  )
                }
                className={
                  errors[`passenger-${index}-passportExpiry`]
                    ? "border-destructive"
                    : ""
                }
              />
              {errors[`passenger-${index}-passportExpiry`] && (
                <p className="mt-1 text-destructive text-sm">
                  {errors[`passenger-${index}-passportExpiry`]}
                </p>
              )}
            </div>
          </div>
        </Card>
      ))}

      <Button variant="outline" onClick={onAddPassenger} className="w-full">
        <UserIcon className="mr-2 w-4 h-4" />
        Add Another Passenger
      </Button>
    </div>
  );
}

function CabinSelectionStep({
  cabins,
  selectedCabin,
  onSelectCabin,
  passengerCount,
  errors,
}: {
  cabins: CabinSelection[];
  selectedCabin: CabinSelection | null;
  onSelectCabin: (cabin: CabinSelection) => void;
  passengerCount: number;
  errors: Record<string, string>;
}) {
  return (
    <div className="space-y-4">
      {errors.cabin && (
        <div className="flex items-center gap-2 bg-destructive/10 p-3 border border-destructive/20 rounded-lg text-destructive">
          <ExclamationTriangleIcon className="w-5 h-5" />
          <span>{errors.cabin}</span>
        </div>
      )}

      <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
        {cabins.map((cabin) => (
          <Card
            key={cabin.id}
            className={`cursor-pointer transition-all duration-300 ${
              selectedCabin?.id === cabin.id 
                ? "bg-gradient-to-br from-primary/5 to-secondary/5 border-accent/20 ring-2 ring-primary" 
                : "backdrop-blur-md bg-card/50 border-white/20"
            } ${
              cabin.maxOccupancy < passengerCount
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={() => {
              if (cabin.maxOccupancy >= passengerCount) {
                onSelectCabin(cabin);
              }
            }}
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{cabin.type}</CardTitle>
                  <Badge
                    variant={cabin.level === "Luxury" ? "default" : "secondary"}
                    className="mt-1"
                  >
                    {cabin.level}
                  </Badge>
                </div>
                <div className="text-right">
                  <div className="font-bold text-2xl gradient-ocean">
                    ${cabin.price.toLocaleString()}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    per person
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-muted-foreground text-sm">
                {cabin.description}
              </p>

              <div className="space-y-2 mb-3">
                <div className="flex items-center gap-2 text-sm">
                  <UserGroupIcon className="w-4 h-4" />
                  <span>Max {cabin.maxOccupancy} guests</span>
                  {cabin.maxOccupancy < passengerCount && (
                    <Badge variant="destructive" className="text-xs">
                      Too Small
                    </Badge>
                  )}
                </div>
              </div>

              <div className="space-y-1">
                <h5 className="font-medium text-sm">Amenities:</h5>
                <div className="flex flex-wrap gap-1">
                  {cabin.amenities.slice(0, 3).map((amenity) => (
                    <Badge key={amenity} variant="outline" className="text-xs">
                      {amenity}
                    </Badge>
                  ))}
                  {cabin.amenities.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{cabin.amenities.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function PreferencesStep({
  contactInfo,
  specialRequests,
  onUpdateContactInfo,
  onUpdateSpecialRequests,
  errors,
}: {
  contactInfo: any;
  specialRequests: string;
  onUpdateContactInfo: (contactInfo: any) => void;
  onUpdateSpecialRequests: (requests: string) => void;
  errors: Record<string, string>;
}) {
  return (
    <div className="space-y-6">
      <Card className="backdrop-blur-md bg-card/50 border-white/20 p-4">
        <h4 className="mb-4 font-medium">Contact Information</h4>
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={contactInfo.email}
              onChange={(e) =>
                onUpdateContactInfo({ ...contactInfo, email: e.target.value })
              }
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="mt-1 text-destructive text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              value={contactInfo.phone}
              onChange={(e) =>
                onUpdateContactInfo({ ...contactInfo, phone: e.target.value })
              }
              className={errors.phone ? "border-destructive" : ""}
            />
            {errors.phone && (
              <p className="mt-1 text-destructive text-sm">{errors.phone}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="address">Address</Label>
            <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mt-2">
              <Input
                placeholder="Street Address"
                value={contactInfo.address.street}
                onChange={(e) =>
                  onUpdateContactInfo({
                    ...contactInfo,
                    address: { ...contactInfo.address, street: e.target.value },
                  })
                }
              />
              <Input
                placeholder="City"
                value={contactInfo.address.city}
                onChange={(e) =>
                  onUpdateContactInfo({
                    ...contactInfo,
                    address: { ...contactInfo.address, city: e.target.value },
                  })
                }
              />
              <Input
                placeholder="State/Province"
                value={contactInfo.address.state}
                onChange={(e) =>
                  onUpdateContactInfo({
                    ...contactInfo,
                    address: { ...contactInfo.address, state: e.target.value },
                  })
                }
              />
              <Input
                placeholder="ZIP/Postal Code"
                value={contactInfo.address.zipCode}
                onChange={(e) =>
                  onUpdateContactInfo({
                    ...contactInfo,
                    address: {
                      ...contactInfo.address,
                      zipCode: e.target.value,
                    },
                  })
                }
              />
            </div>
          </div>
        </div>
      </Card>

      <Card className="backdrop-blur-md bg-card/50 border-white/20 p-4">
        <h4 className="mb-4 font-medium">Special Requests</h4>
        <Textarea
          placeholder="Any special dietary requirements, accessibility needs, or other requests..."
          value={specialRequests}
          onChange={(e) => onUpdateSpecialRequests(e.target.value)}
          rows={4}
        />
      </Card>
    </div>
  );
}

function PaymentStep({
  payment,
  onUpdatePayment,
  errors,
}: {
  payment: any;
  onUpdatePayment: (payment: any) => void;
  errors: Record<string, string>;
}) {
  return (
    <div className="space-y-6">
      <Card className="backdrop-blur-md bg-card/50 border-white/20 p-4">
        <h4 className="mb-4 font-medium">Payment Information</h4>
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
          <div className="md:col-span-2">
            <Label htmlFor="cardNumber">Card Number *</Label>
            <Input
              id="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={payment.cardNumber}
              onChange={(e) =>
                onUpdatePayment({ ...payment, cardNumber: e.target.value })
              }
              className={errors.cardNumber ? "border-destructive" : ""}
            />
            {errors.cardNumber && (
              <p className="mt-1 text-destructive text-sm">
                {errors.cardNumber}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="expiryDate">Expiry Date *</Label>
            <Input
              id="expiryDate"
              placeholder="MM/YY"
              value={payment.expiryDate}
              onChange={(e) =>
                onUpdatePayment({ ...payment, expiryDate: e.target.value })
              }
              className={errors.expiryDate ? "border-destructive" : ""}
            />
            {errors.expiryDate && (
              <p className="mt-1 text-destructive text-sm">
                {errors.expiryDate}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="cvv">CVV *</Label>
            <Input
              id="cvv"
              placeholder="123"
              value={payment.cvv}
              onChange={(e) =>
                onUpdatePayment({ ...payment, cvv: e.target.value })
              }
              className={errors.cvv ? "border-destructive" : ""}
            />
            {errors.cvv && (
              <p className="mt-1 text-destructive text-sm">{errors.cvv}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="cardholderName">Cardholder Name *</Label>
            <Input
              id="cardholderName"
              placeholder="John Doe"
              value={payment.cardholderName}
              onChange={(e) =>
                onUpdatePayment({ ...payment, cardholderName: e.target.value })
              }
              className={errors.cardholderName ? "border-destructive" : ""}
            />
            {errors.cardholderName && (
              <p className="mt-1 text-destructive text-sm">
                {errors.cardholderName}
              </p>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}

function ConfirmationStep({
  cruise,
  bookingData,
  totalPrice,
}: {
  cruise: Cruise;
  bookingData: BookingFormData;
  totalPrice: number;
}) {
  return (
    <div className="space-y-6 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.6 }}
        className="flex justify-center items-center bg-primary mx-auto rounded-full w-20 h-20"
      >
        <CheckCircleIcon className="w-10 h-10 text-primary-foreground" />
      </motion.div>

      <div>
        <h3 className="mb-2 font-bold text-2xl gradient-ocean">
          Booking Confirmed!
        </h3>
        <p className="text-muted-foreground">
          Your cruise reservation has been successfully processed.
        </p>
      </div>

      <Card className="backdrop-blur-md bg-card/50 border-white/20 p-6 text-left">
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
          <div>
            <h4 className="mb-3 font-medium">Booking Details</h4>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-muted-foreground">Confirmation:</span>
                <span className="ml-2 font-mono">
                  #VV{Date.now().toString().slice(-8)}
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">Cruise:</span>
                <span className="ml-2">{cruise.title}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Duration:</span>
                <span className="ml-2">
                  {cruise.itinerary?.totalDuration || "7 days"}
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">Passengers:</span>
                <span className="ml-2">{bookingData.passengers.length}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Cabin:</span>
                <span className="ml-2">{bookingData.cabin?.type}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-medium">Total Paid</h4>
            <div className="font-bold text-3xl gradient-ocean">
              ${totalPrice.toLocaleString()}
            </div>
            <p className="mt-1 text-muted-foreground text-sm">
              Including all taxes and fees
            </p>
          </div>
        </div>
      </Card>

      <div className="bg-muted/50 p-4 rounded-lg">
        <p className="text-muted-foreground text-sm">
          A confirmation email has been sent to{" "}
          <strong>{bookingData.contactInfo.email}</strong> with your booking
          details and travel documents.
        </p>
      </div>
    </div>
  );
}
