"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { 
  convertCurrency, 
  convertToMultipleCurrencies, 
  formatCurrency, 
  getSupportedCurrencies,
  CurrencyConversionResult 
} from "@/lib/utils/api/currency-api";

export interface CurrencyConverterProps {
  defaultFromCurrency?: string;
  defaultToCurrency?: string;
  defaultAmount?: number;
  showMultipleConversions?: boolean;
  popularCurrencies?: string[];
  className?: string;
}

export default function CurrencyConverter({
  defaultFromCurrency = "USD",
  defaultToCurrency = "EUR",
  defaultAmount = 100,
  showMultipleConversions = false,
  popularCurrencies = ["EUR", "GBP", "JPY", "CAD", "AUD"],
  className = "",
}: CurrencyConverterProps) {
  const [fromCurrency, setFromCurrency] = useState(defaultFromCurrency);
  const [toCurrency, setToCurrency] = useState(defaultToCurrency);
  const [amount, setAmount] = useState(defaultAmount);
  const [conversionResult, setConversionResult] = useState<CurrencyConversionResult | null>(null);
  const [multipleConversions, setMultipleConversions] = useState<CurrencyConversionResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [supportedCurrencies] = useState(getSupportedCurrencies());

  const handleConvert = async () => {
    if (!amount || amount <= 0) {
      setError("Please enter a valid amount");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      if (showMultipleConversions) {
        const results = await convertToMultipleCurrencies(fromCurrency, amount, popularCurrencies);
        setMultipleConversions(results);
      } else {
        const result = await convertCurrency(fromCurrency, toCurrency, amount);
        if (result) {
          setConversionResult(result);
        } else {
          setError("Failed to convert currency");
        }
      }
    } catch (err) {
      setError("Failed to convert currency");
      console.error("Currency conversion error:", err);
    } finally {
      setLoading(false);
    }
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConversionResult(null);
    setError(null);
  };

  useEffect(() => {
    if (amount > 0) {
      const timeoutId = setTimeout(() => {
        handleConvert();
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="mb-4 font-bold text-gray-900 text-xl">Currency Converter</h3>

      <div className="space-y-4">
        {/* Amount Input */}
        <div>
          <label className="block mb-1 font-medium text-gray-700 text-sm">
            Amount
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
            className="px-3 py-2 border border-gray-300 focus:border-transparent rounded-md focus:ring-2 focus:ring-blue-500 w-full focus:outline-none"
            placeholder="Enter amount"
            min="0"
            step="0.01"
          />
        </div>

        {/* Currency Selection */}
        <div className="items-end gap-4 grid grid-cols-1 md:grid-cols-3">
          <div>
            <label className="block mb-1 font-medium text-gray-700 text-sm">
              From
            </label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="px-3 py-2 border border-gray-300 focus:border-transparent rounded-md focus:ring-2 focus:ring-blue-500 w-full focus:outline-none"
            >
              {supportedCurrencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-center">
            <button
              onClick={swapCurrencies}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              disabled={loading}
            >
              <ArrowsRightLeftIcon className="w-5 h-5" />
            </button>
          </div>

          {!showMultipleConversions && (
            <div>
              <label className="block mb-1 font-medium text-gray-700 text-sm">
                To
              </label>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="px-3 py-2 border border-gray-300 focus:border-transparent rounded-md focus:ring-2 focus:ring-blue-500 w-full focus:outline-none"
              >
                {supportedCurrencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-50 p-3 border border-red-200 rounded-md text-red-600 text-sm">
            {error}
          </div>
        )}

        {/* Loading Indicator */}
        {loading && (
          <div className="flex justify-center items-center py-4">
            <div className="border-b-2 border-blue-600 rounded-full w-6 h-6 animate-spin"></div>
            <span className="ml-2 text-gray-600">Converting...</span>
          </div>
        )}

        {/* Single Conversion Result */}
        {!showMultipleConversions && conversionResult && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-blue-50 p-4 border border-blue-200 rounded-md"
          >
            <div className="text-center">
              <p className="font-bold text-2xl text-blue-900">
                {formatCurrency(conversionResult.convertedAmount, conversionResult.to)}
              </p>
              <p className="mt-1 text-blue-700 text-sm">
                {formatCurrency(amount, fromCurrency)} = {formatCurrency(conversionResult.convertedAmount, conversionResult.to)}
              </p>
              <p className="mt-1 text-blue-600 text-xs">
                Exchange rate: 1 {conversionResult.from} = {conversionResult.rate.toFixed(4)} {conversionResult.to}
              </p>
              <p className="mt-1 text-blue-500 text-xs">
                Source: {conversionResult.source === "apyhub" ? "APYHub" : "CurrencyFreaks"}
              </p>
            </div>
          </motion.div>
        )}

        {/* Multiple Conversions Result */}
        {showMultipleConversions && multipleConversions.length > 0 && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-2"
          >
            <h4 className="font-medium text-gray-900">
              {formatCurrency(amount, fromCurrency)} converts to:
            </h4>
            <div className="gap-3 grid grid-cols-1 sm:grid-cols-2">
              {multipleConversions.map((conversion) => (
                <div
                  key={conversion.to}
                  className="bg-gray-50 p-3 border border-gray-200 rounded-md"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">
                      {conversion.to}
                    </span>
                    <span className="font-bold text-gray-900 text-lg">
                      {formatCurrency(conversion.convertedAmount, conversion.to)}
                    </span>
                  </div>
                  <p className="mt-1 text-gray-500 text-xs">
                    Rate: {conversion.rate.toFixed(4)}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
