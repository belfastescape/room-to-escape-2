import Link from "next/link";

export default function MobileCta() {
  return (
    <div className="mobile-cta">
      <Link className="book" href="/book-a-game.html">
        Book Now
      </Link>
      <a className="call" href="tel:2606938836">
        Call 260-693-8836
      </a>
    </div>
  );
}
