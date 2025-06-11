# API Integration Environment Variables

This project integrates with several APIs. You'll need to set up the following environment variables in your `.env.local` file:

## Required API Keys

### Mapbox API
- **Variable**: `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN`
- **Purpose**: Map rendering and geocoding
- **Get your key**: https://account.mapbox.com/
- **Usage**: Used in MapComponent for rendering interactive maps

### Ticketmaster Discovery API
- **Variable**: `NEXT_PUBLIC_TICKETMASTER_API_KEY`
- **Purpose**: Finding events in cruise cities
- **Get your key**: https://developer.ticketmaster.com/
- **Usage**: Used in EventsComponent to display local events

### APYHub Currency API
- **Variable**: `NEXT_PUBLIC_APYHUB_API_KEY`
- **Purpose**: Primary currency conversion service
- **Get your key**: https://apyhub.com/
- **Usage**: Used in CurrencyConverter as primary currency conversion service

### CurrencyFreaks API (Fallback)
- **Variable**: `NEXT_PUBLIC_CURRENCYFREAKS_API_KEY`
- **Purpose**: Fallback currency conversion when APYHub doesn't support a currency
- **Get your key**: https://currencyfreaks.com/
- **Usage**: Used in CurrencyConverter as fallback service

### Calendarific API
- **Variable**: `NEXT_PUBLIC_CALENDARIFIC_API_KEY`
- **Purpose**: Holiday information for calendar
- **Get your key**: https://calendarific.com/
- **Usage**: Used in HolidayCalendar to show holiday indicators

## Example .env.local file

```bash
# Mapbox
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=pk.your_mapbox_token_here

# Ticketmaster
NEXT_PUBLIC_TICKETMASTER_API_KEY=your_ticketmaster_key_here

# Currency APIs
NEXT_PUBLIC_APYHUB_API_KEY=your_apyhub_key_here
NEXT_PUBLIC_CURRENCYFREAKS_API_KEY=your_currencyfreaks_key_here

# Holidays
NEXT_PUBLIC_CALENDARIFIC_API_KEY=your_calendarific_key_here
```

## API Integration Features

### Mapbox Integration
- Interactive maps on cruise details pages
- Geocoding for departure locations
- Custom markers for ports and destinations

### Ticketmaster Integration
- Local events near cruise departure cities
- Event details, images, and booking links
- Filtered by location and date

### Currency Conversion
- Real-time currency conversion
- Support for 60+ currencies
- Automatic fallback between APIs
- Multiple currency display options

### Holiday Calendar
- Holiday indicators on date selection calendar
- Country-specific holiday information
- Visual icons for holiday dates
- Tooltip with holiday details

## Implementation Details

All API integrations are implemented as reusable components:

- `MapComponent` - Interactive maps with Mapbox
- `EventsComponent` - Event listings with Ticketmaster
- `CurrencyConverter` - Currency conversion with APYHub/CurrencyFreaks
- `HolidayCalendar` - Date picker with holiday indicators

The cruise details page (`/cruises/[cruise]/page.tsx`) integrates all these components to provide a comprehensive booking experience.
