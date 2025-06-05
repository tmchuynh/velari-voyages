"use client";

// Removed unused import
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
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
import { useMemo, useState } from "react";
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

// Define available cruises
const cruises = [
  {
    id: "amsterdam-nordic",
    name: "Amsterdam Nordic Explorer",
    duration: "7 days",
    departureCity: "Amsterdam",
    price: 2499,
  },
  {
    id: "barcelona-med",
    name: "Barcelona Mediterranean Adventure",
    duration: "10 days",
    departureCity: "Barcelona",
    price: 2999,
  },
  {
    id: "venice-adriatic",
    name: "Venice Adriatic Journey",
    duration: "8 days",
    departureCity: "Venice",
    price: 2799,
  },
  {
    id: "stockholm-baltic",
    name: "Stockholm Baltic Discovery",
    duration: "9 days",
    departureCity: "Stockholm",
    price: 2899,
  },
];

// Create a lookup map for cruises
const cruiseMap = cruises.reduce( ( map, cruise ) => {
  map[cruise.id] = cruise;
  return map;
}, {} as Record<string, typeof cruises[0]> );

// Define package add-ons
const packages = [
  {
    id: "premium-dining",
    name: "Premium Dining Package",
    description:
      "Exclusive access to specialty restaurants and premium beverages",
    price: 299,
  },
  {
    id: "spa-wellness",
    name: "Spa & Wellness Package",
    description: "Daily spa treatments and wellness activities",
    price: 399,
  },
  {
    id: "excursion-bundle",
    name: "Shore Excursion Bundle",
    description:
      "Priority booking for all shore excursions with private guides",
    price: 499,
  },
  {
    id: "premium-wifi",
    name: "Premium WiFi Package",
    description: "High-speed internet access throughout your voyage",
    price: 149,
  },
];

// Create a lookup map for packages
const packageMap = packages.reduce( ( map, pkg ) => {
  map[pkg.id] = pkg;
  return map;
}, {} as Record<string, typeof packages[0]> );

// Form validation schema
const formSchema = z.object( {
  // First name of the passenger, must be at least 2 characters
  firstName: z
    .string()
    .min( 2, { message: "First name must be at least 2 characters" } ),

  // Last name of the passenger, must be at least 2 characters
  lastName: z
    .string()
    .min( 2, { message: "Last name must be at least 2 characters" } ),

  // Email address of the passenger, must be a valid email
  email: z.string().email( { message: "Please enter a valid email address" } ),

  // Phone number of the passenger, must be at least 10 characters
  phone: z.string().min( 10, { message: "Please enter a valid phone number" } ),

  // ID of the selected cruise, must be provided
  cruiseId: z.string().min( 1, { message: "Please select a cruise" } ),

  // Travel date for the cruise, must be provided
  travelDate: z.string().min( 1, { message: "Please select a travel date" } ),

  // Number of passengers, must be between 1 and 10
  passengers: z
    .number()
    .min( 1, { message: "Passengers must be at least 1" } )
    .max( 10, { message: "Passengers cannot exceed 10" } ),

  // Optional field for any special requests or requirements
  specialRequests: z.string().optional(),

  // Optional array of selected package IDs
  selectedPackages: z.array( z.string() ).optional(),
} );

export default function BookYourTripPage() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>( false );
  const [selectedCruise, setSelectedCruise] = useState<typeof cruises[0] | null>( null );

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>( {
    resolver: zodResolver( formSchema ),
    defaultValues: {
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
  } );

  // Handle cruise selection change
  const handleCruiseChange = ( cruiseId: string ) => {
    const cruise = cruises.find( ( c ) => c.id === cruiseId );
    setSelectedCruise( cruise );
  };

  // Calculate total price
  const calculateTotal = ( values: z.infer<typeof formSchema> ) => {
    const cruise = cruiseMap[values.cruiseId];
    const cruisePrice = cruise
      ? cruise.price * parseInt( values.passengers.toString() )
      : 0;

    const packagesPrice = values.selectedPackages
      ? values.selectedPackages.reduce( ( total, packageId ) => {
        const pkg = packageMap[packageId];
        return total + ( pkg ? pkg.price : 0 );
      }, 0 )
      : 0;

    return cruisePrice + packagesPrice;
  };

  // Memoize total price calculation
  const totalPrice = useMemo( () => calculateTotal( form.getValues() ), [
    form.watch( "cruiseId" ),
    form.watch( "passengers" ),
    form.watch( "selectedPackages" ),
  ] );

  // Handle form submission
  const onSubmit = async ( values: z.infer<typeof formSchema> ) => {
    setLoading( true );

    try {
      // In a real app, you would call an API to save the booking
      // For now, we'll simulate a delay and redirect to the confirmation page
      await new Promise( ( resolve ) => setTimeout( resolve, 1000 ) );

      // Get the selected cruise details
      const cruise = cruises.find( ( c ) => c.id === values.cruiseId );

      // Get selected packages details
      const selectedPackagesDetails = packages.filter( ( p ) =>
        values.selectedPackages?.includes( p.id )
      );

      const totalPrice = calculateTotal( values );

      // Create the booking data object to pass to the confirmation page
      const bookingData = {
        ...values,
        cruiseName: cruise?.name,
        departureCity: cruise?.departureCity,
        cruiseDuration: cruise?.duration,
        cruisePrice: cruise?.price,
        selectedPackagesDetails,
        totalPrice,
        bookingNumber: `VV-${ Math.floor( 100000 + Math.random() * 900000 ) }`,
        bookingDate: new Date().toISOString(),
      };

      const encryptedData = btoa( JSON.stringify( bookingData ) ); // Base64 encode the data
      sessionStorage.setItem( "bookingData", encryptedData );


      // Save booking data to sessionStorage for the confirmation page to access
      sessionStorage.setItem( "bookingData", JSON.stringify( bookingData ) );

      toast( "Your cruise has been booked successfully!" );
      // Redirect to confirmation page
      router.push( "/book-your-trip-today/booking-confirmation" );
    } catch ( error ) {
      const travelDates = useMemo( () => {
        const dates = [];
        const currentDate = new Date();

        for ( let i = 1; i <= 12; i++ ) {
          const futureDate = new Date( currentDate );
          futureDate.setMonth( currentDate.getMonth() + i );

          const month = futureDate.toLocaleString( "default", { month: "long" } );
          const year = futureDate.getFullYear();
          const value = futureDate.toISOString().split( "T" )[0];

          dates.push( { label: `${ month } ${ year }`, value } );
        }

        return dates;
      }, [] );

      const month = futureDate.toLocaleString( "default", { month: "long" } );
      const year = futureDate.getFullYear();
      const value = futureDate.toISOString().split( "T" )[0];

      dates.push( { label: `${ month } ${ year }`, value } );
    }

    return dates;
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
                    onSubmit={form.handleSubmit( onSubmit )}
                    className="space-y-8"
                    onSubmit={form.handleSubmit( onSubmit )}
                    onSubmit={form.handleSubmit( onSubmit as SubmitHandler<z.infer<typeof formSchema>> )}>
                    <div>
                      <FaShip className="text-primary" size={20} />
                      <h2 className="font-semibold text-xl">
                        Select Your Cruise
                      </h2>
                    </div>

                    <FormField
                      control={form.control}
                      name="cruiseId"
                      render={( { field } ) => (
                        <FormItem>
                          <FormLabel>Choose a Cruise</FormLabel>
                          <Select
                            onValueChange={( value ) => {
                              field.onChange( value );
                              handleCruiseChange( value );
                            }}
                            defaultValue={field.value}
                          >
                            <FormControl defaultValue={field.value?.toString()}>

                              <SelectValue placeholder="Select a cruise" />
                              <SelectContent>
                                {cruises.map( ( cruise ) => (
                                  <SelectItem key={cruise.id} value={cruise.id}>
                                    {cruise.name} ({cruise.duration}) - $
                                    {cruise.price}
                                  </SelectItem>
                                ) )}
                              </SelectContent>
                          </Select>
                          <FormDescription>
                            Departing from{" "}
                            {selectedCruise?.departureCity ||
                              "select a cruise"}
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="gap-4 grid md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="travelDate"
                        render={( { field } ) => (
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
                                {travelDates.map( ( date, index ) => (
                                  <SelectItem key={index} value={date.value}>
                                    {date.label}
                                  </SelectItem>
                                ) )}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="passengers"
                        render={( { field } ) => (
                          <FormItem>
                            <FormLabel>Number of Passengers</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select number" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                                  ( num ) => (
                                    <SelectItem
                                      key={num}
                                      value={num.toString()}
                                    >
                                      {num}{" "}
                                      {num === 1 ? "passenger" : "passengers"}
                                    </SelectItem>
                                  )
                                )}
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
                        render={( { field } ) => (
                          <FormItem>
                            <div className="gap-4 grid md:grid-cols-2">
                              {packages.map( ( pkg ) => (
                                <div
                                  key={pkg.id}
                                  className="flex items-start space-x-3 hover:bg-accent/20 p-4 border rounded-md transition-colors"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes( pkg.id )}
                                      onCheckedChange={( checked ) => {
                                        if ( checked ) {
                                          field.onChange( [
                                            ...( field.value || [] ),
                                            pkg.id,
                                          ] );
                                        } else {
                                          field.onChange(
                                            field.value?.filter(
                                              ( value ) => value !== pkg.id
                                            ) || []
                                          );
                                        }
                                      }}
                                    />
                                  </FormControl>
                                  <div>
                                    <div className="flex justify-between items-center">
                                      <FormLabel className="font-medium text-base">
                                        {pkg.name}
                                      </FormLabel>
                                      <Badge
                                        variant="secondary"
                                        className="ml-2"
                                      >
                                        ${pkg.price}
                                      </Badge>
                                    </div>
                                    <FormDescription className="mt-1 text-sm">
                                      {pkg.description}
                                    </FormDescription>
                                  </div>
                                </div>
                              ) )}
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
                          render={( { field } ) => (
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
                          render={( { field } ) => (
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
                          render={( { field } ) => (
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
                          render={( { field } ) => (
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
                        render={( { field } ) => (
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
                          {selectedCruise.name}
                        </h3>
                        <p className="text-muted-foreground">
                          {selectedCruise.duration} • Departing from{" "}
                          {selectedCruise.departureCity}
                        </p>
                        <p className="mt-1 font-medium">
                          ${selectedCruise.price} per person
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
                              {selectedCruise.name}
                              <br />
                              <span className="text-muted-foreground text-sm">
                                ({form.watch( "passengers" ) ?? 1}{" "}
                                {parseInt( form.watch( "passengers" ) ?? "1" ) === 1
                                  ? "person"
                                  : "people"}
                                )
                              </span>
                            </TableCell>
                            <TableCell className="text-right">
                              $
                              {selectedCruise.price *
                                parseInt( form.watch( "passengers" ) || "1" )}
                            </TableCell>
                          </TableRow>
                          {form.watch( "selectedPackages" )?.map( ( pkgId ) => {
                            const pkg = packages.find( ( p ) => p.id === pkgId );
                            return pkg ? (
                              <TableRow key={pkg.id}>
                                <TableCell>{pkg.name}</TableCell>
                                <TableCell className="text-right">
                                  ${pkg.price}
                                </TableCell>
                              </TableRow>
                            ) : null;
                          } )}
                          <TableRow> <TableCell className="font-bold">Total</TableCell>
                            <TableCell className="text-right font-bold">
                              ${calculateTotal( form.getValues() )}
                            </TableCell>
                            <TableCell> ${totalPrice}</TableCell>
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
  );
}
