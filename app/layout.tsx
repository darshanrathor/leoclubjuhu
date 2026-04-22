import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Using Inter and Outfit for a premium look
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LEO Club Of Juhu | Dream Dedicate Develop",
  description: "A collective of young minds in Juhu driven by service, leadership, and the belief that small actions create lasting change.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
