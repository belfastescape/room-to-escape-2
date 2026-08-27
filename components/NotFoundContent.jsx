import Link from "next/link";

export default function NotFoundContent() {
  return (
    <>
      <section className="page-head">
        <div className="container stack">
          <p className="eyebrow" style={{ margin: "0" }}>
            404 — page not found
          </p>
          <p className="h1" style={{ margin: "0" }}>
            This page escaped.
          </p>
          <p className="lede" style={{ margin: "0" }}>
            Nicely done, page. For everyone else, the way out is below — five rooms and the booking calendar.
          </p>
        </div>
      </section>
      <section className="section-tight section-alt">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "18px" }} className="post-grid">
            <Link className="room-card" href="/the-vanishing-hour.html">
              <div className="thumb" style={{ height: "150px" }}>
                <img src="/images/vanishing-card-sm.webp" alt="The Vanishing Hour" loading="lazy" />
              </div>
              <div className="body" style={{ padding: "16px 18px 18px" }}>
                <span className="name" style={{ fontSize: "18px" }}>
                  The Vanishing Hour
                </span>
              </div>
            </Link>
            <Link className="room-card" href="/blackout-cabin.html">
              <div className="thumb" style={{ height: "150px" }}>
                <img src="/images/blackout-card-sm.webp" alt="Blackout Cabin" loading="lazy" />
              </div>
              <div className="body" style={{ padding: "16px 18px 18px" }}>
                <span className="name" style={{ fontSize: "18px" }}>
                  Blackout Cabin
                </span>
              </div>
            </Link>
            <Link className="room-card" href="/dinner-at-eight.html">
              <div className="thumb" style={{ height: "150px" }}>
                <img src="/images/dinner-card-sm.webp" alt="Dinner at Eight" loading="lazy" />
              </div>
              <div className="body" style={{ padding: "16px 18px 18px" }}>
                <span className="name" style={{ fontSize: "18px" }}>
                  Dinner at Eight
                </span>
              </div>
            </Link>
            <Link className="room-card" href="/the-gallery-job.html">
              <div className="thumb" style={{ height: "150px" }}>
                <img src="/images/gallery-card-sm.webp" alt="The Gallery Job" loading="lazy" />
              </div>
              <div className="body" style={{ padding: "16px 18px 18px" }}>
                <span className="name" style={{ fontSize: "18px" }}>
                  The Gallery Job
                </span>
              </div>
            </Link>
            <Link className="room-card" href="/last-stand.html">
              <div className="thumb" style={{ height: "150px" }}>
                <img src="/images/laststand-card-sm.webp" alt="Last Stand" loading="lazy" />
              </div>
              <div className="body" style={{ padding: "16px 18px 18px" }}>
                <span className="name" style={{ fontSize: "18px" }}>
                  Last Stand
                </span>
              </div>
            </Link>
            <Link className="promo-card" href="/book-a-game.html">
              <div className="name">Book a game</div>
              <p>Pick a room, pick a time — the clock is waiting.</p>
              <span className="go">Book Now →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container inner">
          <div>
            <div className="title">The clock is already running.</div>
            <div className="sub">Book online, or call (217) 555-0182 — we may be mid-game, so leave a message.</div>
          </div>
          <Link className="btn btn-dark" href="/book-a-game.html" style={{ fontSize: "17px", padding: "18px 38px" }}>
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}
