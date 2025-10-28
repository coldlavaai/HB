import type { Metadata } from "next";
import "./globals.css";
import BackgroundAnimation from "@/components/BackgroundAnimation";

export const metadata: Metadata = {
  title: "Harry Bennett | Cotton Trading Specialist",
  description: "Partner at Liverpool Cotton Brokers - Cotton industry professional with 8 years' experience spanning physical procurement, origination, trading strategy, and mill relationship management across global markets.",
  keywords: "cotton trading, commodity broker, Liverpool Cotton Brokers, Harry Bennett, commodity trading, procurement",
  authors: [{ name: "Harry Bennett" }],
  openGraph: {
    title: "Harry Bennett | Cotton Trading Specialist",
    description: "Partner at Liverpool Cotton Brokers - Global cotton trading and procurement specialist",
    type: "website",
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
