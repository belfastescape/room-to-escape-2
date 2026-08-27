import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="cols">
          <div className="col brand">
            <div className="logo">
              CIPHER <span className="red">& KEY</span>
            </div>
            <div>
              1200 Kestrel Street
              <br />
              Springfield, IL 62704
            </div>
            <div>
              Call us:{" "}
              <a className="phone" href="tel:2175550182">
                (217) 555-0182
              </a>
            </div>
            <div className="rating-badge" style={{ color: "var(--on-dark)" }}>
              <span className="stars" aria-hidden="true">
                ★★★★★
              </span>
              <span>4.9 average player rating</span>
            </div>
          </div>
          <div className="col">
            <div className="label">Hours</div>
            <div>
              Tuesday–Thursday · 11:00–7:00
              <br />
              Friday · 11:00–9:00
              <br />
              Saturday · 11:00–9:00
            </div>
            <div className="fine">Last games begin 1 hour before closing.</div>
          </div>
          <div className="col">
            <div className="label">The Rooms</div>
            <div className="links">
              <Link href="/the-vanishing-hour.html">The Vanishing Hour</Link>
              <Link href="/blackout-cabin.html">Blackout Cabin</Link>
              <Link href="/dinner-at-eight.html">Dinner at Eight</Link>
              <Link href="/the-gallery-job.html">The Gallery Job</Link>
              <Link href="/last-stand.html">Last Stand</Link>
            </div>
          </div>
          <div className="col">
            <div className="label">Explore</div>
            <div className="links">
              <Link href="/book-a-game.html">Book a Game</Link>
              <Link href="/parties-and-events.html">Parties &amp; Events</Link>
              <Link href="/events.html">Events</Link>
              <Link href="/faq.html">FAQ</Link>
              <Link href="/reviews.html">Reviews</Link>
              <Link href="/contact.html">Contact</Link>
            </div>
          </div>
        </div>
        <div className="bottom">
          <span>Cipher & Key · Springfield, Illinois</span>
          <div style={{ display: "flex", gap: "22px" }}>
            <span>Demonstration site — not a real business.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
