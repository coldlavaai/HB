import type { Metadata, Viewport } from "next";
import "./globals.css";
import BackgroundAnimation from "@/components/BackgroundAnimation";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://harry-bennett-cv.vercel.app"),
  title: "Harry Bennett | Cotton Trading Specialist",
  description: "Partner at Liverpool Cotton Brokers - Cotton industry professional with 8 years' experience spanning physical procurement, origination, trading strategy, and mill relationship management across global markets.",
  keywords: "cotton trading, commodity broker, Liverpool Cotton Brokers, Harry Bennett, commodity trading, procurement",
  authors: [{ name: "Harry Bennett" }],
  icons: {
    icon: "/logos/lcb-logo.png",
    shortcut: "/logos/lcb-logo.png",
    apple: "/logos/lcb-logo.png",
  },
  openGraph: {
    title: "Harry Bennett | Cotton Trading Specialist",
    description: "Partner at Liverpool Cotton Brokers - Global cotton trading and procurement specialist",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Harry Bennett - Cotton Trading Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harry Bennett | Cotton Trading Specialist",
    description: "Partner at Liverpool Cotton Brokers - Global cotton trading and procurement specialist",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-inter antialiased relative">
        <BackgroundAnimation />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
