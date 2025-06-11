"use client";

import "./animations.css";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBookingAuth } from "@/hooks/useBookingAuth";
import { useRouter } from "next/navigation";
import {
  LockClosedIcon,
  EnvelopeIcon,
  UserIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { FaShip } from "react-icons/fa";

export default function LoginPage() {
  const router = useRouter();
  const { login, user, isLoading, error, isAuthenticated } = useBookingAuth();

  const [formData, setFormData] = useState({
    bookingNumber: "",
    email: "",
    lastName: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated && user) {
      setShowSuccess(true);
      setTimeout(() => {
        router.push("/booking/dashboard");
      }, 2000);
    }
  }, [isAuthenticated, user, router]);

  // Validate form in real-time
  useEffect(() => {
    const isValid =
      formData.bookingNumber.length >= 6 &&
      formData.email.includes("@") &&
      formData.lastName.length >= 2;
    setIsFormValid(isValid);
  }, [formData]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear field-specific errors when user starts typing
    if (fieldErrors[field]) {
      setFieldErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateField = (field: string, value: string) => {
    switch (field) {
      case "bookingNumber":
        if (value.length < 6) {
          return "Booking number must be at least 6 characters";
        }
        break;
      case "email":
        if (!value.includes("@") || !value.includes(".")) {
          return "Please enter a valid email address";
        }
        break;
      case "lastName":
        if (value.length < 2) {
          return "Last name must be at least 2 characters";
        }
        break;
    }
    return "";
  };

  const handleBlur = (field: string) => {
    setFocusedField(null);
    const error = validateField(
      field,
      formData[field as keyof typeof formData]
    );
    if (error) {
      setFieldErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const errors: Record<string, string> = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) errors[key] = error;
    });

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    const success = await login(formData);
    if (success) {
      setShowSuccess(true);
    }
  };

  // Background animation variants
  const backgroundVariants = {
    animate: {
      background: [
        "linear-gradient(45deg, #0f172a, #1e293b, #334155)",
        "linear-gradient(45deg, #1e293b, #334155, #475569)",
        "linear-gradient(45deg, #334155, #475569, #64748b)",
        "linear-gradient(45deg, #0f172a, #1e293b, #334155)",
      ],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Floating elements animation
  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      rotate: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="relative flex justify-center items-center min-h-screen overflow-hidden"
      variants={backgroundVariants}
      animate="animate"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating ship icons */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 60 + 40}px`,
            }}
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: i * 0.5 }}
          >
            <FaShip className="w-full h-full" />
          </motion.div>
        ))}

        {/* Gradient orbs */}
        <motion.div
          className="top-1/4 left-1/4 absolute bg-blue-500/10 blur-3xl rounded-full w-96 h-96"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="right-1/4 bottom-1/4 absolute bg-purple-500/10 blur-3xl rounded-full w-96 h-96"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 w-full max-w-md">
        <AnimatePresence mode="wait">
          {showSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="flex justify-center items-center bg-green-500 mx-auto mb-6 rounded-full w-20 h-20"
              >
                <CheckCircleIcon className="w-12 h-12 text-white" />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-2 font-bold text-2xl text-white"
              >
                Welcome Back!
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-gray-300"
              >
                Redirecting to your booking dashboard...
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              {/* Header */}
              <motion.div
                className="mb-8 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="flex justify-center items-center bg-gradient-to-br from-blue-500 to-purple-600 mx-auto mb-6 rounded-full w-16 h-16"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaShip className="w-8 h-8 text-white" />
                </motion.div>
                <h1 className="mb-2 font-bold text-3xl text-white">
                  Access Your Booking
                </h1>
                <p className="text-gray-300">
                  Enter your booking details to manage your cruise
                </p>
              </motion.div>

              {/* Form */}
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {/* Booking Number Field */}
                <div className="relative">
                  <motion.div
                    className={`relative bg-white/10 backdrop-blur-sm rounded-xl border transition-all duration-300 ${
                      focusedField === "bookingNumber"
                        ? "border-blue-400 shadow-lg shadow-blue-500/25"
                        : fieldErrors.bookingNumber
                          ? "border-red-400"
                          : "border-white/20"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileFocus={{ scale: 1.02 }}
                  >
                    <div className="flex items-center p-4">
                      <motion.div
                        animate={{
                          color:
                            focusedField === "bookingNumber"
                              ? "#60a5fa"
                              : "#9ca3af",
                          scale: focusedField === "bookingNumber" ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <LockClosedIcon className="mr-3 w-5 h-5" />
                      </motion.div>
                      <div className="flex-1">
                        <label
                          htmlFor="bookingNumber"
                          className={`block text-xs font-medium transition-colors duration-200 ${
                            focusedField === "bookingNumber" ||
                            formData.bookingNumber
                              ? "text-blue-300"
                              : "text-gray-400"
                          }`}
                        >
                          Booking Number
                        </label>
                        <input
                          type="text"
                          id="bookingNumber"
                          value={formData.bookingNumber}
                          onChange={(e) =>
                            handleInputChange("bookingNumber", e.target.value)
                          }
                          onFocus={() => setFocusedField("bookingNumber")}
                          onBlur={() => handleBlur("bookingNumber")}
                          className="bg-transparent mt-1 border-none w-full text-white placeholder-gray-400 outline-none"
                          placeholder="Enter your booking number"
                        />
                      </div>
                      {formData.bookingNumber && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className={`w-5 h-5 rounded-full flex items-center justify-center ${
                            formData.bookingNumber.length >= 6
                              ? "bg-green-500"
                              : "bg-yellow-500"
                          }`}
                        >
                          <CheckCircleIcon className="w-3 h-3 text-white" />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                  <AnimatePresence>
                    {fieldErrors.bookingNumber && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center mt-2 text-red-400 text-xs"
                      >
                        <ExclamationCircleIcon className="mr-1 w-4 h-4" />
                        {fieldErrors.bookingNumber}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <motion.div
                    className={`relative bg-white/10 backdrop-blur-sm rounded-xl border transition-all duration-300 ${
                      focusedField === "email"
                        ? "border-blue-400 shadow-lg shadow-blue-500/25"
                        : fieldErrors.email
                          ? "border-red-400"
                          : "border-white/20"
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center p-4">
                      <motion.div
                        animate={{
                          color:
                            focusedField === "email" ? "#60a5fa" : "#9ca3af",
                          scale: focusedField === "email" ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <EnvelopeIcon className="mr-3 w-5 h-5" />
                      </motion.div>
                      <div className="flex-1">
                        <label
                          htmlFor="email"
                          className={`block text-xs font-medium transition-colors duration-200 ${
                            focusedField === "email" || formData.email
                              ? "text-blue-300"
                              : "text-gray-400"
                          }`}
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => handleBlur("email")}
                          className="bg-transparent mt-1 border-none w-full text-white placeholder-gray-400 outline-none"
                          placeholder="Enter your email address"
                        />
                      </div>
                      {formData.email && formData.email.includes("@") && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="flex justify-center items-center bg-green-500 rounded-full w-5 h-5"
                        >
                          <CheckCircleIcon className="w-3 h-3 text-white" />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                  <AnimatePresence>
                    {fieldErrors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center mt-2 text-red-400 text-xs"
                      >
                        <ExclamationCircleIcon className="mr-1 w-4 h-4" />
                        {fieldErrors.email}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Last Name Field */}
                <div className="relative">
                  <motion.div
                    className={`relative bg-white/10 backdrop-blur-sm rounded-xl border transition-all duration-300 ${
                      focusedField === "lastName"
                        ? "border-blue-400 shadow-lg shadow-blue-500/25"
                        : fieldErrors.lastName
                          ? "border-red-400"
                          : "border-white/20"
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center p-4">
                      <motion.div
                        animate={{
                          color:
                            focusedField === "lastName" ? "#60a5fa" : "#9ca3af",
                          scale: focusedField === "lastName" ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <UserIcon className="mr-3 w-5 h-5" />
                      </motion.div>
                      <div className="flex-1">
                        <label
                          htmlFor="lastName"
                          className={`block text-xs font-medium transition-colors duration-200 ${
                            focusedField === "lastName" || formData.lastName
                              ? "text-blue-300"
                              : "text-gray-400"
                          }`}
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                          }
                          onFocus={() => setFocusedField("lastName")}
                          onBlur={() => handleBlur("lastName")}
                          className="bg-transparent mt-1 border-none w-full text-white placeholder-gray-400 outline-none"
                          placeholder="Enter your last name"
                        />
                      </div>
                      {formData.lastName && formData.lastName.length >= 2 && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="flex justify-center items-center bg-green-500 rounded-full w-5 h-5"
                        >
                          <CheckCircleIcon className="w-3 h-3 text-white" />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                  <AnimatePresence>
                    {fieldErrors.lastName && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center mt-2 text-red-400 text-xs"
                      >
                        <ExclamationCircleIcon className="mr-1 w-4 h-4" />
                        {fieldErrors.lastName}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Global Error */}
                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="bg-red-500/20 backdrop-blur-sm p-4 border border-red-400/50 rounded-xl"
                    >
                      <div className="flex items-center">
                        <ExclamationCircleIcon className="mr-2 w-5 h-5 text-red-400" />
                        <p className="text-red-300 text-sm">{error}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={!isFormValid || isLoading}
                  className={`w-full relative overflow-hidden rounded-xl py-4 px-6 font-semibold text-white transition-all duration-300 ${
                    isFormValid && !isLoading
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg shadow-blue-500/25"
                      : "bg-gray-600 cursor-not-allowed"
                  }`}
                  whileHover={isFormValid ? { scale: 1.02 } : {}}
                  whileTap={isFormValid ? { scale: 0.98 } : {}}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.div
                    className="flex justify-center items-center"
                    animate={{ x: isLoading ? -20 : 0 }}
                  >
                    {isLoading ? (
                      <>
                        <motion.div
                          className="mr-2 border-2 border-white border-t-transparent rounded-full w-5 h-5"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                        Authenticating...
                      </>
                    ) : (
                      <>
                        Access Booking
                        <motion.div
                          className="ml-2"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRightIcon className="w-5 h-5" />
                        </motion.div>
                      </>
                    )}
                  </motion.div>

                  {/* Button shine effect */}
                  {isFormValid && !isLoading && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    />
                  )}
                </motion.button>
              </motion.form>

              {/* Help Text */}
              <motion.div
                className="mt-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-gray-400 text-sm">
                  Need help?{" "}
                  <span className="text-blue-400 hover:text-blue-300 cursor-pointer">
                    Contact support
                  </span>
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
