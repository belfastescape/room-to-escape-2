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
            <Link className="room-card" href="/the-disappearing-act.html">
              <div className="thumb" style={{ height: "150px" }}>
                <img src="/images/disappearing-card-sm.webp" alt="The Disappearing Act" loading="lazy" />
              </div>
              <div className="body" style={{ padding: "16px 18px 18px" }}>
                <span className="name" style={{ fontSize: "18px" }}>
                  The Disappearing Act
                </span>
              </div>
            </Link>
            <Link className="room-card" href="/cabin-in-the-storm.html">
              <div className="thumb" style={{ height: "150px" }}>
                <img src="/images/cabin-card-sm.webp" alt="Cabin In The Storm" loading="lazy" />
              </div>
              <div className="body" style={{ padding: "16px 18px 18px" }}>
                <span className="name" style={{ fontSize: "18px" }}>
                  Cabin In The Storm
                </span>
              </div>
            </Link>
            <Link className="room-card" href="/dining-room-caper.html">
              <div className="thumb" style={{ height: "150px" }}>
                <img src="/images/dining-card-sm.webp" alt="Dining Room Caper" loading="lazy" />
              </div>
              <div className="body" style={{ padding: "16px 18px 18px" }}>
                <span className="name" style={{ fontSize: "18px" }}>
                  Dining Room Caper
                </span>
              </div>
            </Link>
            <Link className="room-card" href="/museum-heist.html">
              <div className="thumb" style={{ height: "150px" }}>
                <img src="/images/museum-card-sm.webp" alt="Museum Heist" loading="lazy" />
              </div>
              <div className="body" style={{ padding: "16px 18px 18px" }}>
                <span className="name" style={{ fontSize: "18px" }}>
                  Museum Heist
                </span>
              </div>
            </Link>
            <Link className="room-card" href="/triumph-over-evil.html">
              <div className="thumb" style={{ height: "150px" }}>
                <img src="/images/triumph-card-sm.webp" alt="Triumph Over Evil" loading="lazy" />
              </div>
              <div className="body" style={{ padding: "16px 18px 18px" }}>
                <span className="name" style={{ fontSize: "18px" }}>
                  Triumph Over Evil
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
            <div className="sub">Book online, or call 260-693-8836 — we may be mid-game, so leave a message.</div>
          </div>
          <Link className="btn btn-dark" href="/book-a-game.html" style={{ fontSize: "17px", padding: "18px 38px" }}>
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}
