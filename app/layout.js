import Header from "@/components/layout/header";
import LenisProvider from "@/components/providers/lenis-provider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Stanford Capital | Corporate Services",
  description: "Start, Protect, Manage, and Grow your business in India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LenisProvider>
          <Header />
            <main style={{ paddingTop: '80px', minHeight: 'calc(100vh - 300px)' }}>
              {children}
            </main>
          {/* Footer will go here */}
        </LenisProvider>
      </body>
    </html>
  );
}
