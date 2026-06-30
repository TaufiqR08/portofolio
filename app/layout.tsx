import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taufiqurrohman | Software Engineer",
  description:
    "Software Engineer experienced in building useful, secure, and accessible digital products.",
  keywords: [
    "Taufiqurrohman",
    "Software Engineer",
    "Frontend Developer",
    "Next.js Developer",
    "Indonesia",
  ],
  openGraph: {
    title: "Taufiqurrohman | Software Engineer",
    description:
      "Building useful, secure, and accessible digital products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
