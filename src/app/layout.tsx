import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Viral | The All-in-One AI Co-Pilot for Influencers & Creators",
  description: "Automate content creation, track competitors, find viral trends, and land brand deals. Viral is the AI platform built to turn your influence into an empire. Start your free trial today.",
  keywords: ["influencer marketing", "content creation", "AI", "social media tools", "creator economy"],
  openGraph: {
    title: "Viral | AI Co-Pilot for Content Creators",
    description: "The all-in-one AI platform for influencers and content creators",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
