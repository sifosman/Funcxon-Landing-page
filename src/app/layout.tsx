import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Funcxon | Connect, Collaborate & Celebrate",
  description:
    "Funcxon is the ultimate event planning marketplace. Discover top-tier vendors, venues, and service professionals. Plan your perfect event — available on Android, iOS, and Web.",
  keywords: [
    "event planning",
    "vendor marketplace",
    "venues",
    "catering",
    "wedding planning",
    "corporate events",
    "South Africa",
    "Funcxon",
  ],
  openGraph: {
    title: "Funcxon | Connect, Collaborate & Celebrate",
    description:
      "Discover top-tier vendors, venues, and service professionals. Plan your perfect event.",
    type: "website",
    url: "https://funcxon.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Funcxon | Connect, Collaborate & Celebrate",
    description:
      "Discover top-tier vendors, venues, and service professionals. Plan your perfect event.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
