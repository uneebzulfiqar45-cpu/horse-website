import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Outfit } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import PageLoader from "@/components/ui/PageLoader";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-accent",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | EquiVet Practice",
    default: "EquiVet Practice — Specialist Equine Veterinary Care",
  },
  description:
    "Premium specialist equine veterinary care. Expert horse health services including sports medicine, lameness evaluation, diagnostic imaging, dentistry, and emergency care. Serving Germany and surrounding regions.",
  keywords: [
    "horse vet",
    "equine veterinarian",
    "horse veterinary",
    "Pferdearzt",
    "equine specialist",
    "horse medical care",
    "lameness evaluation",
    "equine sports medicine",
    "horse dentistry",
  ],
  authors: [{ name: "EquiVet Practice" }],
  creator: "EquiVet Practice",
  publisher: "EquiVet Practice",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "de_DE",
    url: "https://equivet-practice.de",
    siteName: "EquiVet Practice",
    title: "EquiVet Practice — Specialist Equine Veterinary Care",
    description:
      "Premium specialist equine veterinary care in Germany. Expert horse health services including sports medicine, lameness evaluation, and emergency care.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EquiVet Practice — Specialist Equine Veterinary Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EquiVet Practice — Specialist Equine Veterinary Care",
    description: "Premium specialist equine veterinary care in Germany.",
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#F4F1E9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <PageLoader />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
