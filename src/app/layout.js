import { IBM_Plex_Mono, Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import NoiseOverlay from "@/components/NoiseOverlay";
import "./globals.css";

/* ─── Typography Setup ─── */

// Display / Body — Inter is a high-quality Swiss-style sans-serif,
// closest available match to "Neue Haas Grotesk Display" / "Suisse Int'l"
const displaySans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "700", "900"],
});

// Technical / Metadata — IBM Plex Mono (exact match from design spec)
const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500", "700"],
});

/* ─── Metadata ─── */
export const metadata = {
  title: "Portfolio — AI Engineer",
  description:
    "Building cognitive systems — RAG architectures, generative AI frameworks, and multi-agent systems.",
  openGraph: {
    title: "Portfolio — AI Engineer",
    description:
      "Building cognitive systems — RAG architectures, generative AI frameworks, and multi-agent systems.",
    type: "website",
  },
};

/* ─── Root Layout ─── */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${displaySans.variable} ${monoFont.variable}`}>
      <body>
        <SmoothScroll>
          <NoiseOverlay />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
