/**
 * Currency Conversion API Integration
 * 
 * This module provides functions to convert currencies using APYHub and CurrencyFreaks APIs
 */

const APYHUB_API_BASE_URL = "https://api.apyhub.com";
const APYHUB_API_KEY = process.env.NEXT_PUBLIC_APYHUB_API_KEY;

const CURRENCYFREAKS_API_BASE_URL = "https://api.currencyfreaks.com";
const CURRENCYFREAKS_API_KEY = process.env.NEXT_PUBLIC_CURRENCYFREAKS_API_KEY;

export interface CurrencyConversionResult {
  from: string;
  to: string;
  amount: number;
  convertedAmount: number;
  rate: number;
  timestamp?: number;
  success: boolean;
  source: "apyhub" | "currencyfreaks";
}

export interface APYHubConversionResponse {
  data: {
    [key: string]: number;
  };
}

export interface CurrencyFreaksResponse {
  date: string;
  base: string;
  rates: {
    [key: string]: string;
  };
}

// Common currency codes supported by APYHub
const APYHUB_SUPPORTED_CURRENCIES = [
  "USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF", "CNY", "SEK", "NZD",
  "MXN", "SGD", "HKD", "NOK", "KRW", "TRY", "RUB", "INR", "BRL", "ZAR",
  "AED", "SAR", "QAR", "KWD", "BHD", "OMR", "JOD", "LBP", "EGP", "MAD",
  "DZD", "TND", "ILS", "PKR", "BDT", "LKR", "NPR", "MMK", "THB", "VND",
  "IDR", "MYR", "PHP", "TWD", "CZK", "PLN", "HUF", "RON", "BGN", "HRK",
  "DKK", "ISK", "ALL", "RSD", "MKD", "BAM", "GEL", "AMD", "AZN", "UZS",
  "KZT", "KGS", "TJS", "TMT", "MNT", "AFN", "IRR", "IQD", "SYP", "YER"
];

/**
 * Check if currency is supported by APYHub
 */
function isSupportedByAPYHub(currency: string): boolean {
  return APYHUB_SUPPORTED_CURRENCIES.includes(currency.toUpperCase());
}

/**
 * Convert currency using APYHub API
 */
async function convertWithAPYHub(
  from: string,
  to: string,
  amount: number
): Promise<CurrencyConversionResult | null> {
  if (!APYHUB_API_KEY) {
    console.error("APYHub API key not found");
    return null;
  }

  try {
    const response = await fetch(
      `${APYHUB_API_BASE_URL}/convert/currency-multiple`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apy-token": APYHUB_API_KEY,
        },
        body: JSON.stringify({
          source: from.toUpperCase(),
          targets: [to.toUpperCase()],
          amount: amount,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`APYHub API failed: ${response.statusText}`);
    }

    const data: APYHubConversionResponse = await response.json();
    const convertedAmount = data.data[to.toUpperCase()];

    if (convertedAmount === undefined) {
      throw new Error("Conversion result not found");
    }

    return {
      from: from.toUpperCase(),
      to: to.toUpperCase(),
      amount,
      convertedAmount,
      rate: convertedAmount / amount,
      timestamp: Date.now(),
      success: true,
      source: "apyhub",
    };
  } catch (error) {
    console.error("Error converting with APYHub:", error);
    return null;
  }
}

/**
 * Convert currency using CurrencyFreaks API (fallback)
 */
async function convertWithCurrencyFreaks(
  from: string,
  to: string,
  amount: number
): Promise<CurrencyConversionResult | null> {
  if (!CURRENCYFREAKS_API_KEY) {
    console.error("CurrencyFreaks API key not found");
    return null;
  }

  try {
    const response = await fetch(
      `${CURRENCYFREAKS_API_BASE_URL}/v2.0/rates/latest?apikey=${CURRENCYFREAKS_API_KEY}&base=${from.toUpperCase()}&symbols=${to.toUpperCase()}`
    );

    if (!response.ok) {
      throw new Error(`CurrencyFreaks API failed: ${response.statusText}`);
    }

    const data: CurrencyFreaksResponse = await response.json();
    const rate = parseFloat(data.rates[to.toUpperCase()]);

    if (!rate) {
      throw new Error("Exchange rate not found");
    }

    return {
      from: from.toUpperCase(),
      to: to.toUpperCase(),
      amount,
      convertedAmount: amount * rate,
      rate,
      timestamp: Date.now(),
      success: true,
      source: "currencyfreaks",
    };
  } catch (error) {
    console.error("Error converting with CurrencyFreaks:", error);
    return null;
  }
}

/**
 * Convert currency using the best available API
 */
export async function convertCurrency(
  from: string,
  to: string,
  amount: number
): Promise<CurrencyConversionResult | null> {
  // Normalize currency codes
  const fromCurrency = from.toUpperCase();
  const toCurrency = to.toUpperCase();

  // If same currency, return identity conversion
  if (fromCurrency === toCurrency) {
    return {
      from: fromCurrency,
      to: toCurrency,
      amount,
      convertedAmount: amount,
      rate: 1,
      timestamp: Date.now(),
      success: true,
      source: "apyhub",
    };
  }

  // Try APYHub first if both currencies are supported
  if (isSupportedByAPYHub(fromCurrency) && isSupportedByAPYHub(toCurrency)) {
    const result = await convertWithAPYHub(fromCurrency, toCurrency, amount);
    if (result) {
      return result;
    }
  }

  // Fallback to CurrencyFreaks
  return await convertWithCurrencyFreaks(fromCurrency, toCurrency, amount);
}

/**
 * Get multiple currency conversions for a single amount
 */
export async function convertToMultipleCurrencies(
  from: string,
  amount: number,
  toCurrencies: string[]
): Promise<CurrencyConversionResult[]> {
  const results: CurrencyConversionResult[] = [];

  for (const toCurrency of toCurrencies) {
    const result = await convertCurrency(from, toCurrency, amount);
    if (result) {
      results.push(result);
    }
  }

  return results;
}

/**
 * Get supported currencies list
 */
export function getSupportedCurrencies(): string[] {
  return [...APYHUB_SUPPORTED_CURRENCIES];
}

/**
 * Format currency amount with proper symbol and formatting
 */
export function formatCurrency(amount: number, currency: string, locale?: string): string {
  try {
    return new Intl.NumberFormat(locale || "en-US", {
      style: "currency",
      currency: currency.toUpperCase(),
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch (error) {
    // Fallback formatting if currency is not supported by Intl
    return `${amount.toFixed(2)} ${currency.toUpperCase()}`;
  }
}

/**
 * Get currency symbol for a given currency code
 */
export function getCurrencySymbol(currency: string, locale?: string): string {
  try {
    const formatted = new Intl.NumberFormat(locale || "en-US", {
      style: "currency",
      currency: currency.toUpperCase(),
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(0);
    
    // Extract symbol by removing the numbers
    return formatted.replace(/[0-9,.\s]/g, "");
  } catch (error) {
    return currency.toUpperCase();
  }
}
