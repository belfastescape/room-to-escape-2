import NotFoundContent from "@/components/NotFoundContent";

export const metadata = {
  title: "Page not found - Cipher & Key | Springfield Cipher & Key",
  description: "That page escaped. Find our five Springfield escape rooms and book a game.",
  alternates: { canonical: "/404.html" },
  openGraph: {
    type: "website",
    siteName: "Cipher & Key",
    url: "https://www.cipherandkey.com/404.html",
    title: "Page Not Found — Cipher & Key",
    description: "That page escaped. Find our five Springfield escape rooms and book a game.",
    images: "https://www.cipherandkey.com/images/home-hero.webp",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page_404() {
  return <NotFoundContent />;
}
