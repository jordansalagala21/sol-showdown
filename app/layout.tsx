import type { Metadata } from "next";
import { Outfit, Figtree, Caveat } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-outfit" });
const figtree = Figtree({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-figtree" });
const caveat = Caveat({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-caveat" });

const description =
  "Use Sol for two weeks, find what's broken, pitch a fix. Submissions due Mon, Nov 2. Event Tue, Nov 3, 6:00 PM at the Pub.";

export const metadata: Metadata = {
  title: "Sol Showdown",
  description,
  // Social preview: add the flyer art at public/flyer.png once the site URL is set
  openGraph: { title: "Sol Showdown", description, images: ["/flyer.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${figtree.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
