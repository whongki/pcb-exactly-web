import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PCB Exactly | Professional PCB Manufacturer",
  description:
    "Anhui Zhenghao Electronics - 20+ years of PCB manufacturing excellence. Single-sided, double-sided, multilayer, aluminum, and HDI PCBs. ISO/TS 16949, UL, ROHS certified. Get a free quote today.",
  keywords: [
    "PCB manufacturer",
    "PCB fabrication",
    "multilayer PCB",
    "aluminum PCB",
    "HDI PCB",
    "PCB prototype",
    "circuit board manufacturer",
    "China PCB factory",
  ],
  openGraph: {
    title: "PCB Exactly | Professional PCB Manufacturer",
    description:
      "20+ years of PCB manufacturing excellence. Get a free quote today.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
