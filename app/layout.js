import { Big_Shoulders, Archivo } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCta from "@/components/MobileCta";
import ScrollEffects from "@/components/ScrollEffects";

const bigShoulders = Big_Shoulders({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-big-shoulders",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.cipherandkey.com"),
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  additionalType: "https://schema.org/LocalBusiness",
  name: "Cipher & Key",
  description:
    "Springfield escape room with five themed 60-minute games for families, friends and co-workers.",
  url: "https://www.cipherandkey.com/",
  telephone: "+1-217-555-0182",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1200 Kestrel Street",
    addressLocality: "Springfield",
    addressRegion: "IL",
    postalCode: "62704",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday"],
      opens: "11:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "11:00",
      closes: "21:00",
    },
  ],
  priceRange: "$29.95 per person",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bigShoulders.variable} ${archivo.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <MobileCta />
        <Footer />
        <ScrollEffects />
        <Analytics />
      </body>
    </html>
  );
}
