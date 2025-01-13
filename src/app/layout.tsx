import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "800", "900", "700"] // Add the weights you need
});

export const metadata: Metadata = {
  title: "Dezrek Technologies ⎯ Innovative Digital Solutions",
  description:
    "Empowering businesses with professional websites, mobile apps, and web app development tailored to drive growth and efficiency."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
