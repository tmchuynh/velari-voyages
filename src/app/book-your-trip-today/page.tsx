"use client";

// Removed unused import
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { cruisePackages } from "@/lib/constants/info/cruisePackages";
import { formatNumberToCurrency } from "@/lib/utils/format";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaShip, FaSuitcase } from "react-icons/fa";
import * as z from "zod";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { getCruisesByLocation } from "@/lib/utils/get/cruises";
import { getVesselForCruise } from "@/lib/utils/get/vessels";
import { Cruise, CruiseVessel } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";
import { Tab } from "@headlessui/react";

// Define available cities
const cities = ["Amsterdam", "Barcelona", "Venice", "Stockholm"];

// Create a lookup map for packages
const packageMap = cruisePackages.reduce(
  (map, pkg) => {
    map[pkg.id] = pkg;
    return map;
  },
  {} as Record<string, (typeof cruisePackages)[0]>
);

// Form validation schema
const formSchema = z.object({
  // Add city selection field
  city: z.string().min(1, { message: "Please select a departure city" }),

  // First name of the passenger, must be at least 2 characters
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" }),

  // Last name of the passenger, must be at least 2 characters
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" }),

  // Email address of the passenger, must be a valid email
  email: z.string().email({ message: "Please enter a valid email address" }),

  // Phone number of the passenger, must be at least 10 characters
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),

  // ID of the selected cruise, must be provided
  cruiseId: z.string().min(1, { message: "Please select a cruise" }),

  // Travel date for the cruise, must be provided
  travelDate: z.string().min(1, { message: "Please select a travel date" }),

  // Number of passengers, must be between 1 and 10
  passengers: z
    .number()
    .min(1, { message: "Passengers must be at least 1" })
    .max(10, { message: "Passengers cannot exceed 10" }),

  // Optional field for any special requests or requirements
  specialRequests: z.string().optional(),

  // Optional array of selected package IDs
  selectedPackages: z.array(z.string()).optional(),
});

// Generate travel dates for the next 12 months
const generateTravelDates = () => {
  const dates = [];
  const currentDate = new Date();

  for (let i = 1; i <= 12; i++) {
    const futureDate = new Date(currentDate);
    futureDate.setMonth(currentDate.getMonth() + i);

    const month = futureDate.toLocaleString("default", { month: "long" });
    const year = futureDate.getFullYear();
    const value = futureDate.toISOString().split("T")[0];

    dates.push({ label: `${month} ${year}`, value });
  }

  return dates;
};

export default function BookYourTripPage() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  // Add state for available cruises
  const [availableCruises, setAvailableCruises] = useState<Cruise[]>([]);
  const [selectedCruise, setSelectedCruise] = useState<Cruise | null>(null);
  const [selectedVessel, setSelectedVessel] = useState<CruiseVessel | null>(
    null
  );

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      city: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      cruiseId: "",
      travelDate: "",
      passengers: 2,
      specialRequests: "",
      selectedPackages: [],
    },
  });

  // Fetch cruises when city changes
  const selectedCity = form.watch("city");

  useEffect(() => {
    async function fetchCruisesForCity() {
      if (selectedCity) {
        try {
          const cityInfo: Location = {
            city: selectedCity,
            country: "",
          };
          const cruises = await getCruisesByLocation(cityInfo);
          setAvailableCruises(cruises);

          // Clear selected cruise when city changes
          setSelectedCruise(null);
          form.setValue("cruiseId", "");
        } catch (error) {
          console.error("Error fetching cruises:", error);
          toast.error("Failed to load cruises for the selected city");
          setAvailableCruises([]);
        }
      }
    }

    fetchCruisesForCity();
  }, [selectedCity, form]);

  // Handle cruise selection change
  const handleCruiseChange = async (cruiseId: string) => {
    const cruise = availableCruises.find((c) => c.title === cruiseId);
    setSelectedCruise(cruise || null);

    if (cruise && cruise.departureLocation.city) {
      // Get vessel information for the selected cruise
      const vessel = await getVesselForCruise(
        cruise.departureLocation.city,
        cruise.tourCategoryId
      );
      setSelectedVessel(vessel);
    }
  };

  // Calculate total price
  const calculateTotal = (values: z.infer<typeof formSchema>) => {
    const cruise = selectedCruise;
    const cruisePrice = cruise
      ? cruise.basePrice * (values.passengers || 0)
      : 0;

    const packagesPrice = values.selectedPackages
      ? values.selectedPackages.reduce((total, packageId) => {
          const pkg = packageMap[packageId];
          return total + (pkg ? pkg.price : 0);
        }, 0)
      : 0;

    return cruisePrice + packagesPrice;
  };

  // Memoize total price calculation
  const totalPrice = useMemo(
    () => calculateTotal(form.getValues()),
    [selectedCruise, form.watch("passengers"), form.watch("selectedPackages")]
  );

  // Handle form submission
  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (
    values
  ) => {
    setLoading(true);

    try {
      // In a real app, you would call an API to save the booking
      // For now, we'll simulate a delay and redirect to the confirmation page
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Get the selected cruise details
      const cruise = selectedCruise;

      // Get selected packages details
      const selectedPackagesDetails = cruisePackages.filter((p) =>
        values.selectedPackages?.includes(p.id)
      );

      const totalPrice = calculateTotal(values);

      // Create the booking data object to pass to the confirmation page
      const bookingData = {
        ...values,
        cruiseName: cruise?.title,
        departureCity: cruise?.departureLocation?.city,
        arrivalCity: cruise?.arrivalLocation?.city,
        cruisePrice: cruise?.basePrice,
        selectedPackagesDetails,
        totalPrice,
        bookingNumber: `VV-${Math.floor(100000 + Math.random() * 900000)}`,
        bookingDate: new Date().toISOString(),
      };

      // Save booking data to sessionStorage for the confirmation page to access
      sessionStorage.setItem("bookingData", JSON.stringify(bookingData));

      toast("Your cruise has been booked successfully!");
      // Redirect to confirmation page
      router.push("/book-your-trip-today/booking-confirmation");
    } catch (error) {
      toast.error("Failed to complete your booking. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const travelDates = generateTravelDates();

  return (
    <div className="mx-auto py-8 container">
      <div className="flex flex-col gap-6">
        <div className="text-center">
          <h1 className="mb-2 font-bold text-3xl">Book Your Dream Cruise</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Select your desired cruise, customize your journey with premium
            packages, and start your unforgettable adventure with Velari
            Voyages.
          </p>
        </div>

        <div className="gap-6 grid md:grid-cols-3">
          <div className="md:col-span-2">
            <Card>
              <CardContent className="pt-6">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    <div>
                      <FaShip className="text-primary" size={20} />
                      <h2 className="font-semibold text-xl">
                        Select Your Cruise
                      </h2>
                    </div>

                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Departure City</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a departure city" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {cities.map((city) => (
                                <SelectItem key={city} value={city}>
                                  {city}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            Choose your departure city first
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="cruiseId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Choose a Cruise</FormLabel>
                          <Select
                            onValueChange={(value) => {
                              field.onChange(value);
                              handleCruiseChange(value);
                            }}
                            defaultValue={field.value}
                            disabled={!selectedCity}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue
                                  placeholder={
                                    selectedCity
                                      ? "Select a cruise"
                                      : "Select a city first"
                                  }
                                />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {availableCruises.map((cruise) => (
                                <SelectItem
                                  key={cruise.title}
                                  value={cruise.title}
                                >
                                  {cruise.title} - ${cruise.basePrice}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            {selectedCity
                              ? `Cruises departing from ${selectedCity}`
                              : "Select a departure city first"}
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {selectedCruise && (
                      <Card className="bg-muted/30">
                        <CardContent className="pt-6">
                          <h3 className="mb-2 font-semibold text-lg">
                            Cruise Details
                          </h3>
                          <div className="space-y-3">
                            <div className="gap-2 grid grid-cols-2">
                              <div>
                                <p className="text-muted-foreground text-sm">
                                  Departure
                                </p>
                                <p className="font-medium">
                                  {selectedCruise.departureLocation.city},{" "}
                                  {selectedCruise.departureLocation.country}
                                </p>
                              </div>
                              <div>
                                <p className="text-muted-foreground text-sm">
                                  Arrival
                                </p>
                                <p className="font-medium">
                                  {selectedCruise.arrivalLocation.city},{" "}
                                  {selectedCruise.arrivalLocation.country}
                                </p>
                              </div>
                            </div>
                            <div>
                              <p className="text-muted-foreground text-sm">
                                Description
                              </p>
                              <p>{selectedCruise.description}</p>
                            </div>
                            {selectedCruise.itinerary && (
                              <div>
                                <p className="text-muted-foreground text-sm">
                                  Itinerary
                                </p>
                                <Table>
                                  <TableHeader>
                                    <TableRow>
                                      <TableHead>City</TableHead>
                                      <TableHead>Country</TableHead>
                                    </TableRow>
                                    {selectedCruise.itinerary.route.map(
                                      (item, index) => (
                                        <TableRow key={index}>
                                          <TableCell>{item.city}</TableCell>
                                          <TableCell>{item.country}</TableCell>
                                        </TableRow>
                                      )
                                    )}
                                  </TableHeader>
                                </Table>
                              </div>
                            )}
                            {selectedVessel && (
                              <div>
                                <p className="text-muted-foreground text-sm">
                                  Vessel
                                </p>
                                <p className="font-medium">
                                  {selectedVessel.name} ({selectedVessel.type})
                                </p>
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    <div className="gap-4 grid md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="travelDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Travel Date</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select travel date" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {travelDates.map((date, index) => (
                                  <SelectItem key={index} value={date.value}>
                                    {date.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="passengers"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Number of Passengers</FormLabel>
                            <Select
                              onValueChange={(value) =>
                                field.onChange(parseInt(value))
                              }
                              defaultValue={field.value?.toString()}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select number" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                  <SelectItem key={num} value={num.toString()}>
                                    {num}{" "}
                                    {num === 1 ? "passenger" : "passengers"}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-center gap-2 mb-4">
                        <FaSuitcase className="text-primary" size={20} />
                        <h2 className="font-semibold text-xl">
                          Enhance Your Experience
                        </h2>
                      </div>

                      <FormField
                        control={form.control}
                        name="selectedPackages"
                        render={({ field }) => (
                          <FormItem>
                            <div className="gap-4 grid md:grid-cols-2">
                              {cruisePackages.map((pkg) => (
                                <div
                                  key={pkg.id}
                                  className="flex items-start space-x-3 hover:bg-accent/20 p-4 border rounded-md transition-colors"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(pkg.id)}
                                      onCheckedChange={(checked) => {
                                        if (checked) {
                                          field.onChange([
                                            ...(field.value || []),
                                            pkg.id,
                                          ]);
                                        } else {
                                          field.onChange(
                                            field.value?.filter(
                                              (value) => value !== pkg.id
                                            ) || []
                                          );
                                        }
                                      }}
                                    />
                                  </FormControl>
                                  <div>
                                    <div className="flex justify-between items-center">
                                      <FormLabel className="font-medium text-base">
                                        {pkg.title}
                                      </FormLabel>
                                      <Badge
                                        variant="secondary"
                                        className="ml-2"
                                      >
                                        {formatNumberToCurrency(pkg.price)}
                                      </Badge>
                                    </div>
                                    <FormDescription className="mt-1 text-sm">
                                      {pkg.description}
                                    </FormDescription>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="space-y-6">
                      <h2 className="font-semibold text-xl">
                        Your Information
                      </h2>

                      <div className="gap-4 grid md:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="gap-4 grid md:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="john.doe@example.com"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="555-123-4567" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="specialRequests"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Special Requests</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Any special requirements or requests? (dietary restrictions, accessibility needs, special occasions, etc.)"
                                className="min-h-[100px] resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={loading}
                      size="lg"
                    >
                      {loading ? "Processing..." : "Complete Booking"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          <div>
            <div className="top-4 sticky">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="mb-4 font-semibold text-xl">
                    Booking Summary
                  </h2>

                  {selectedCruise ? (
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium text-lg">
                          {selectedCruise.title}
                        </h3>
                        <p className="text-muted-foreground">
                          Departing from {selectedCruise.departureLocation.city}
                        </p>
                        <p className="mt-1 font-medium">
                          ${selectedCruise.basePrice} per person
                        </p>
                      </div>

                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Item</TableHead>
                            <TableHead className="text-right">Price</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>
                              {selectedCruise.title}
                              <br />
                              <span className="text-muted-foreground text-sm">
                                ({form.watch("passengers") ?? 1}{" "}
                                {(form.watch("passengers") ?? 1) === 1
                                  ? "person"
                                  : "people"}
                                )
                              </span>
                            </TableCell>
                            <TableCell className="text-right">
                              {formatNumberToCurrency(
                                selectedCruise.basePrice *
                                  (form.watch("passengers") ?? 1)
                              )}
                            </TableCell>
                          </TableRow>
                          {form.watch("selectedPackages")?.map((pkgId) => {
                            const pkg = cruisePackages.find(
                              (p) => p.id === pkgId
                            );
                            return pkg ? (
                              <TableRow key={pkg.id}>
                                <TableCell>{pkg.title}</TableCell>
                                <TableCell className="text-right">
                                  {formatNumberToCurrency(pkg.price)}
                                </TableCell>
                              </TableRow>
                            ) : null;
                          })}
                          <TableRow>
                            <TableCell className="font-bold">Total</TableCell>
                            <TableCell className="text-right font-bold">
                              {formatNumberToCurrency(totalPrice)}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>

                      <div className="bg-muted/50 p-4 rounded-md text-sm">
                        <p className="mb-2 font-medium">
                          Important Information:
                        </p>
                        <ul className="space-y-1 list-disc list-inside">
                          <li>
                            A 20% deposit is required to confirm your booking
                          </li>
                          <li>Full payment is due 60 days before departure</li>
                          <li>
                            Free cancellation up to 90 days before departure
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="py-8 text-center">
                      <p className="mb-4 text-muted-foreground">
                        Please select a cruise to see the booking summary
                      </p>
                      <FaShip
                        className="mx-auto text-muted-foreground/50"
                        size={32}
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
