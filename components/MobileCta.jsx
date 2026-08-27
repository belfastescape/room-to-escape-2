import Link from "next/link";

export default function MobileCta() {
  return (
    <div className="mobile-cta">
      <Link className="book" href="/book-a-game.html">
        Book Now
      </Link>
      <a className="call" href="tel:2175550182">
        Call (217) 555-0182
      </a>
    </div>
  );
}
