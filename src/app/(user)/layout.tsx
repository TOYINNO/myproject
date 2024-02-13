import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../../styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "toyinno beautyhub||Elevating Beauty in Every Detail!",
  description: "Your trusted online shopping store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-display">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
