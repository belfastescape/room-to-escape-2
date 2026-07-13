import NotFoundContent from "@/components/NotFoundContent";

export const metadata = {
  title: "Page not found - Room to Escape | Fort Wayne Room to Escape",
  description: "That page escaped. Find our five Fort Wayne escape rooms and book a game.",
  alternates: { canonical: "/404.html" },
  openGraph: {
    type: "website",
    siteName: "Room to Escape",
    url: "https://www.roomtoescape.com/404.html",
    title: "Page Not Found — Room to Escape",
    description: "That page escaped. Find our five Fort Wayne escape rooms and book a game.",
    images: "https://www.roomtoescape.com/images/home-hero.webp",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page_404() {
  return <NotFoundContent />;
}
