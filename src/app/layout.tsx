import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";
import Providers from "@/providers";
import { NavigationProvider } from "./hooks/NavigationContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background ">
        <div>
          <Providers>
            <Appbar />
            <div className="min-h-screen">
              <NavigationProvider>{children}</NavigationProvider>
            </div>
          </Providers>

          <footer className="bg-secondary-background">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
