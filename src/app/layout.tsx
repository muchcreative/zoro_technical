// Next.js
import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { muktaMahee } from '@/styles/fonts';

export const metadata: Metadata = {
  title: "RentZoro - RSVP Page",
  description: "Collision Boat After-Party RSVP",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#7478d2',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={muktaMahee.className}>{children}</body>
    </html>
  );
}
