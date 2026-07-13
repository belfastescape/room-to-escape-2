import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="cols">
          <div className="col brand">
            <div className="logo">
              ROOM TO <span className="red">ESCAPE</span>
            </div>
            <div>
              3734 Allen Ave
              <br />
              Fort Wayne, IN 46805
            </div>
            <div>
              Call us:{" "}
              <a className="phone" href="tel:2606938836">
                260-693-8836
              </a>
            </div>
            <div className="rating-badge" style={{ color: "var(--on-dark)" }}>
              <span className="stars" aria-hidden="true">
                ★★★★★
              </span>
              <a
                href="https://www.tripadvisor.com/Attraction_Review-g37014-d10360118-Reviews-Room_to_Escape-Fort_Wayne_Indiana.html"
                rel="noopener"
              >
                5.0/5.0 TripAdvisor reviews
              </a>
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
              <Link href="/the-disappearing-act.html">The Disappearing Act</Link>
              <Link href="/cabin-in-the-storm.html">Cabin In The Storm</Link>
              <Link href="/dining-room-caper.html">Dining Room Caper</Link>
              <Link href="/museum-heist.html">Museum Heist</Link>
              <Link href="/triumph-over-evil.html">Triumph Over Evil</Link>
            </div>
          </div>
          <div className="col">
            <div className="label">Explore</div>
            <div className="links">
              <Link href="/book-a-game.html">Book a Game</Link>
              <Link href="/parties-and-events.html">Parties &amp; Events</Link>
              <Link href="/faq.html">FAQ</Link>
              <Link href="/reviews.html">Reviews</Link>
              <Link href="/blog.html">RTE News Blog</Link>
              <Link href="/contact.html">Contact</Link>
            </div>
          </div>
        </div>
        <div className="bottom">
          <span>Room to Escape · Fort Wayne, Indiana</span>
          <div style={{ display: "flex", gap: "22px" }}>
            <a
              href="https://www.tripadvisor.com/Attraction_Review-g37014-d10360118-Reviews-Room_to_Escape-Fort_Wayne_Indiana.html"
              rel="noopener"
            >
              TripAdvisor
            </a>
            <a href="https://www.youtube.com/" rel="noopener">
              YouTube
            </a>
            {/* not rebuilt in this pass — see PROJECT-STATUS.md */}
            <a href="/cookie-policy.html">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
