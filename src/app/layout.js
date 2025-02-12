"use client"
import { useState } from "react";
import "./globals.css";
import { ThemeContext } from "@/context/themeContext";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={""}
      >
        {children}
      </body>
    </html>
  );
}