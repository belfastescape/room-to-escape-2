import { Anton, Archivo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCta from "@/components/MobileCta";
import ScrollEffects from "@/components/ScrollEffects";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.roomtoescape.com"),
  icons: {
    icon: "/favicon.svg",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  additionalType: "https://schema.org/LocalBusiness",
  name: "Room to Escape",
  description:
    "Fort Wayne escape room with five themed 60-minute games for families, friends and co-workers.",
  url: "https://www.roomtoescape.com/",
  telephone: "+1-260-693-8836",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3734 Allen Ave",
    addressLocality: "Fort Wayne",
    addressRegion: "IN",
    postalCode: "46805",
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
    <html lang="en" className={`${anton.variable} ${archivo.variable}`}>
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
      </body>
    </html>
  );
}
