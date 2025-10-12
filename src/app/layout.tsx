import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";
import Providers from "@/providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background">
        <Providers>
          <div>
            <Appbar />
            {children}
          </div>
          {/* <footer className="bg-secondary-background">
            <Footer />
          </footer> */}
        </Providers>
      </body>
    </html>
  );
}
