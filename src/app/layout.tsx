"use client";

import { Navbar } from "@/components/Navbar";
import "./globals.css";
import { WalletContextProvider } from "@/providers/context";
import { Footer } from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="p-8 lg:p-20">
        <WalletContextProvider>
          <Navbar />
          {children}
          <Footer />
        </WalletContextProvider>
      </body>
    </html>
  );
}
