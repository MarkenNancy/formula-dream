"use client";
import React, { useState, useEffect } from "react";
import { getCookiesPassword, setCookiesPassword } from "@/cookies";
export type Props = {
  children: React.ReactNode;
};

const PasswordProtect: React.FC<Props> = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  const handleCookies = async () => {
    const cookiesPassword = await getCookiesPassword();
    if (
      cookiesPassword === "true" ||
      process.env.NEXT_PUBLIC_ENV === "Production"
    ) {
      setIsAuthorized(true);
    } else {
      const password = "Milli@123"; // Replace with your password
      const userInput = prompt("Enter the password to access the site:");
      if (userInput === password) {
        setIsAuthorized(true);
        setCookiesPassword();
      } else {
        alert("Incorrect password. Reload the page to try again.");
        setIsAuthorized(false);
      }
    }
  };

  useEffect(() => {
    handleCookies();
  }, []);
  // if (!isAuthorized && process.env.NEXT_PUBLIC_ENV !== "Production") {
  if (!isAuthorized) {
    return <div className="bg-black h-screen w-screen">{""}</div>;
  }
  return <>{children}</>;
};

export default PasswordProtect;
