import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "King Of Games | Premium Gaming & Entertainment",
  description: "India's Ultimate Gaming & Entertainment Experience. Inflatable games, arcade zones, VR experiences, carnival setups, and unforgettable events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-[#050505] text-[#ededed]" suppressHydrationWarning>
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
