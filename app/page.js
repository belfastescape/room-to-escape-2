import Link from "next/link";

export const metadata = {
  title: "Room to Escape | Fort Wayne Room to Escape - Fort Waynes Escape Room",
  description:
    "Book our Fort Wayne escape room today! Solve codes, puzzles, and explore hidden chambers for your next party or teambuilding event.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Room to Escape",
    url: "https://www.roomtoescape.com/",
    title: "Room to Escape | Fort Wayne Escape Room",
    description:
      "Book our Fort Wayne escape room today! Solve codes, puzzles, and explore hidden chambers for your next party or teambuilding event.",
    images: ["https://www.roomtoescape.com/images/home-hero.webp"],
  },
  twitter: { card: "summary_large_image" },
};

export default function HomePage() {
  return (
    <>
      <section style={{ background: "var(--bg)" }}>
        <div
          className="container"
          style={{ display: "flex", paddingTop: "64px", paddingBottom: "84px", gap: "56px", alignItems: "center" }}
          data-split
        >
          <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "18px" }}>
            <p className="eyebrow" style={{ margin: "0" }}>
              One hour. One way out.
            </p>
            <h1 className="display" style={{ fontSize: "clamp(44px,6vw,68px)", maxWidth: "520px" }}>
              escape room fort wayne
            </h1>
            <p style={{ fontSize: "18px", maxWidth: "470px", textWrap: "pretty", margin: "0" }}>
              Five themed rooms built for families, friends and co-workers. Work together, crack the codes and beat
              the clock.
            </p>
            <div style={{ display: "flex", gap: "14px", marginTop: "8px", flexWrap: "wrap" }}>
              <Link className="btn btn-primary" href="/book-a-game.html">
                Book Now
              </Link>
              <a className="btn btn-outline" href="#rooms">
                Explore the Rooms
              </a>
            </div>
            <p style={{ fontSize: "14px", color: "var(--muted)", margin: "0" }}>
              <strong style={{ color: "var(--ink)" }}>$29.95</strong> per person · $89.85 minimum covers up to 3
              players
            </p>
            <div className="rating-badge">
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
            <div
              style={{ display: "flex", gap: "30px", marginTop: "10px", fontSize: "14px", color: "var(--muted)", flexWrap: "wrap" }}
            >
              <span>
                <strong style={{ color: "var(--ink)" }}>60</strong> minutes on the clock
              </span>
              <span>
                <strong style={{ color: "var(--ink)" }}>5</strong> themed rooms
              </span>
              <span>
                <strong style={{ color: "var(--ink)" }}>2–8</strong> players per game
              </span>
            </div>
          </div>
          <div style={{ width: "540px", flexShrink: "0", position: "relative" }} className="hero-media">
            <div
              style={{ height: "440px", borderRadius: "var(--radius)", overflow: "hidden", boxShadow: "var(--shadow-hero)" }}
            >
              <img
                src="/images/home-hero-1600.webp"
                width="1600"
                height="900"
                alt="Inside a Room to Escape game room in Fort Wayne"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                fetchPriority="high"
              />
            </div>
            <div
              style={{
                position: "absolute",
                left: "-28px",
                bottom: "-24px",
                background: "#fff",
                borderRadius: "10px",
                padding: "10px",
                boxShadow: "0 16px 34px rgba(0,0,0,0.5)",
                transform: "rotate(-3deg)",
              }}
            >
              <img
                src="/images/escape1_orig-sm.webp"
                alt="A winning team celebrating their escape"
                style={{ width: "200px", height: "140px", objectFit: "cover", borderRadius: "6px" }}
                loading="lazy"
              />
              <div style={{ fontWeight: "700", fontSize: "12px", color: "#171514", padding: "8px 4px 2px" }}>
                They escaped! <span style={{ color: "#8f8a80", fontWeight: "500" }}>— Saturday, 7:14pm</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight section-alt">
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: "36px" }}>
            How it <span className="hl">works</span>
          </h2>
          <div className="steps">
            <div className="step reveal">
              <div className="num">01</div>
              <div className="t">Pick your room</div>
              <p>Five stories, from an isolated cabin to a mystery dinner party. First-timers and veterans both welcome.</p>
            </div>
            <div className="step reveal">
              <div className="num">02</div>
              <div className="t">Get briefed, get locked in</div>
              <p>Your game master sets the scene, starts the clock — and keeps an eye out with hints if you need them.</p>
            </div>
            <div className="step reveal">
              <div className="num">03</div>
              <div className="t">Beat the clock</div>
              <p>Crack codes, solve ciphers and work together. Communication is your key to getting out in under 60.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="rooms" className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">
              The <span className="hl">rooms</span>
            </h2>
            <span className="section-note">All games are 60 minutes · $29.95 per person</span>
          </div>
          <div className="room-grid">
            <article className="room-card reveal">
              <Link href="/the-disappearing-act.html" className="thumb" aria-label="The Disappearing Act — room details">
                <img
                  src="/images/disappearing-card-sm.webp"
                  alt="The Disappearing Act escape room — the magician's stage"
                  loading="lazy"
                />
                <span className="badge">Low difficulty</span>
              </Link>
              <div className="body">
                <h3 className="name">
                  <Link href="/the-disappearing-act.html">The Disappearing Act</Link>
                </h3>
                <div className="meta">
                  <span>Up to 8 players</span>
                  <span>·</span>
                  <span>60 min</span>
                </div>
                <p className="hook">The magician is missing — and the show starts in one hour.</p>
                <p className="price">
                  $29.95 <small>/ person</small>
                </p>
                <div className="actions">
                  <Link className="text-link" href="/the-disappearing-act.html">
                    Room details →
                  </Link>
                  <Link className="btn btn-primary btn-sm" href="/book-a-game.html?room=the-disappearing-act">
                    Book Now
                  </Link>
                </div>
              </div>
            </article>

            <article className="room-card reveal">
              <Link href="/cabin-in-the-storm.html" className="thumb" aria-label="Cabin In The Storm — room details">
                <img
                  src="/images/cabin-card-sm.webp"
                  alt="Cabin In The Storm escape room — a lantern-lit cabin"
                  loading="lazy"
                />
                <span className="badge">High difficulty</span>
              </Link>
              <div className="body">
                <h3 className="name">
                  <Link href="/cabin-in-the-storm.html">Cabin In The Storm</Link>
                </h3>
                <div className="meta">
                  <span>Up to 6 players</span>
                  <span>·</span>
                  <span>60 min</span>
                </div>
                <p className="hook">Stranded in an isolated cabin as the storm closes in.</p>
                <p className="price">
                  $29.95 <small>/ person</small>
                </p>
                <div className="actions">
                  <Link className="text-link" href="/cabin-in-the-storm.html">
                    Room details →
                  </Link>
                  <Link className="btn btn-primary btn-sm" href="/book-a-game.html?room=cabin-in-the-storm">
                    Book Now
                  </Link>
                </div>
              </div>
            </article>

            <article className="room-card reveal">
              <Link href="/dining-room-caper.html" className="thumb" aria-label="Dining Room Caper — room details">
                <img
                  src="/images/dining-card-sm.webp"
                  alt="Dining Room Caper escape room — a formal dining table"
                  loading="lazy"
                />
                <span className="badge">Medium difficulty</span>
              </Link>
              <div className="body">
                <h3 className="name">
                  <Link href="/dining-room-caper.html">Dining Room Caper</Link>
                </h3>
                <div className="meta">
                  <span>Up to 8 players</span>
                  <span>·</span>
                  <span>60 min</span>
                </div>
                <p className="hook">A mystery dinner party where nothing is quite as it seems.</p>
                <p className="price">
                  $29.95 <small>/ person</small>
                </p>
                <div className="actions">
                  <Link className="text-link" href="/dining-room-caper.html">
                    Room details →
                  </Link>
                  <Link className="btn btn-primary btn-sm" href="/book-a-game.html?room=dining-room-caper">
                    Book Now
                  </Link>
                </div>
              </div>
            </article>

            <article className="room-card reveal">
              <Link href="/museum-heist.html" className="thumb" aria-label="Museum Heist — room details">
                <img
                  src="/images/museum-card-sm.webp"
                  alt="Museum Heist escape room — gallery display cases"
                  loading="lazy"
                />
                <span className="badge">Low difficulty</span>
              </Link>
              <div className="body">
                <h3 className="name">
                  <Link href="/museum-heist.html">Museum Heist</Link>
                </h3>
                <div className="meta">
                  <span>Up to 6 players</span>
                  <span>·</span>
                  <span>60 min</span>
                </div>
                <p className="hook">Slip past security and pull off the heist of the century.</p>
                <p className="price">
                  $29.95 <small>/ person</small>
                </p>
                <div className="actions">
                  <Link className="text-link" href="/museum-heist.html">
                    Room details →
                  </Link>
                  <Link className="btn btn-primary btn-sm" href="/book-a-game.html?room=museum-heist">
                    Book Now
                  </Link>
                </div>
              </div>
            </article>

            <article className="room-card reveal">
              <Link href="/triumph-over-evil.html" className="thumb" aria-label="Triumph Over Evil — room details">
                <img
                  src="/images/triumph-card-sm.webp"
                  alt="Triumph Over Evil escape room — the séance table"
                  loading="lazy"
                />
                <span className="badge badge-dark">Game Master–controlled</span>
              </Link>
              <div className="body">
                <h3 className="name">
                  <Link href="/triumph-over-evil.html">Triumph Over Evil</Link>
                </h3>
                <div className="meta">
                  <span>Up to 6 players</span>
                  <span>·</span>
                  <span>60 min</span>
                </div>
                <p className="hook">Face down a dark force before your hour runs out.</p>
                <p className="price">
                  $29.95 <small>/ person</small>
                </p>
                <div className="actions">
                  <Link className="text-link" href="/triumph-over-evil.html">
                    Room details →
                  </Link>
                  <Link className="btn btn-primary btn-sm" href="/book-a-game.html?room=triumph-over-evil">
                    Book Now
                  </Link>
                </div>
              </div>
            </article>

            <Link className="promo-card reveal" href="/book-a-game.html">
              <div className="name">Can't decide?</div>
              <p>Call us at 260-693-8836 and we'll match a room to your group — or compare all five below.</p>
              <span className="go">Check availability →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-tight section-alt">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">
              Which room is <span className="hl">right for us?</span>
            </h2>
            <span className="section-note">Every room: $29.95/person · 60 minutes</span>
          </div>
          <div className="compare-wrap reveal">
            <table className="compare">
              <thead>
                <tr>
                  <th scope="col">Room</th>
                  <th scope="col">Difficulty</th>
                  <th scope="col">Players</th>
                  <th scope="col">Best for</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="room-name">
                    <Link href="/the-disappearing-act.html">The Disappearing Act</Link>
                  </td>
                  <td>
                    <span className="locks" role="img" aria-label="Difficulty 2 of 5">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path className="on" d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z" />
                      </svg>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path className="on" d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z" />
                      </svg>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path className="off" d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z" />
                      </svg>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path className="off" d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z" />
                      </svg>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path className="off" d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z" />
                      </svg>
                    </span>
                  </td>
                  <td>Up to 8</td>
                  <td>First-timers &amp; big groups</td>
                  <td>
                    <Link className="btn btn-primary btn-sm" href="/book-a-game.html?room=the-disappearing-act">
                      Book Now
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="room-name">
                    <Link href="/museum-heist.html">Museum Heist</Link>
                  </td>
                  <td>
                    <span className="locks" role="img" aria-label="Difficulty 2 of 5">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path className="on" d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z" />
                      </svg>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path className="on" d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z" />
                      </svg>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path className="off" d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z" />
                      </svg>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path className="off" d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z" />
                      </svg>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path className="off" d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z" />
                      </svg>
                    </span>
                  </td>
                  <td>Up to 6</td>
                  <td>First-timers</td>
                  <td>
                    <Link className="btn btn-primary btn-sm" href="/book-a-game.html?room=museum-heist">
                      Book Now
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="room-name">
                    <Link href="/dining-room-caper.html">Dining Room Caper</Link>
                  </td>
                  <td>
                    <span className="locks" role="img" aria-label="Difficulty 3 of 5">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path className="on" d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z" />
                      </svg>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path className="on" d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z" />
                      </svg>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path className="on" d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z" />
                      </svg>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path className="off" d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z" />
                      </svg>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path className="off" d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z" />
                      </svg>
                    </span>
                  </td>
                  <td>Up to 8</td>
                  <td>Groups of 7–8</td>
                  <td>
                    <Link className="btn btn-primary btn-sm" href="/book-a-game.html?room=dining-room-caper">
                      Book Now
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="room-name">
                    <Link href="/cabin-in-the-storm.html">Cabin In The Storm</Link>
                  </td>
                  <td>
                    <span className="locks" role="img" aria-label="Difficulty 4 of 5">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path className="on" d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z" />
                      </svg>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path className="on" d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z" />
                      </svg>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path className="on" d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z" />
                      </svg>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path className="on" d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z" />
                      </svg>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path className="off" d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z" />
                      </svg>
                    </span>
                  </td>
                  <td>Up to 6</td>
                  <td>Escape room veterans</td>
                  <td>
                    <Link className="btn btn-primary btn-sm" href="/book-a-game.html?room=cabin-in-the-storm">
                      Book Now
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="room-name">
                    <Link href="/triumph-over-evil.html">Triumph Over Evil</Link>
                  </td>
                  <td>
                    <span
                      className="chip"
                      style={{ background: "var(--bg-alt)", borderColor: "var(--border)", color: "var(--ink-soft)", fontSize: "12px" }}
                    >
                      Game Master–controlled
                    </span>
                  </td>
                  <td>Up to 6</td>
                  <td>Flexible — families &amp; mixed groups</td>
                  <td>
                    <Link className="btn btn-primary btn-sm" href="/book-a-game.html?room=triumph-over-evil">
                      Book Now
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">
              Fresh from the <span className="hl">Wall of Fame</span>
            </h2>
            <Link className="text-link" href="/reviews.html">
              More happy teams →
            </Link>
          </div>
          <div style={{ display: "flex", gap: "18px" }} className="fame-row">
            <div className="polaroid tilt-l reveal" style={{ flex: "1" }}>
              <img src="/images/escape1_orig-sm.webp" alt="A team celebrating their escape" loading="lazy" />
              <div className="caption">Certified geniuses — escaped!</div>
            </div>
            <div className="polaroid tilt-r reveal" style={{ flex: "1" }}>
              <img src="/images/escape2_orig-sm.webp" alt="A corporate group after winning their game" loading="lazy" />
              <div className="caption">Corporate outing, victorious.</div>
            </div>
            <div className="polaroid tilt-s reveal" style={{ flex: "1" }}>
              <img
                src="/images/team-bohila-didn-t-escape_orig-sm.webp"
                alt="Team Bohila — they didn't escape, still smiling"
                loading="lazy"
              />
              <div className="caption">So close… we'll get it next time!</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight section-alt">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">
              Don't take <span className="hl">our word for it</span>
            </h2>
            <Link className="text-link" href="/reviews.html">
              Read all reviews →
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="review-row">
            <div className="review-card reveal">
              <div className="stars" aria-hidden="true">
                ★★★★★
              </div>
              <p style={{ fontWeight: "700", color: "var(--ink)", margin: "0" }}>
                Great family experience! Challenging and fun!
              </p>
              <blockquote>
                My family and I (7 people) tried the &quot;Dining Room Caper&quot; room. We had a wonderful time! The
                puzzles were challenging and surprising and well crafted. Our host, Cameron, was gracious and
                generous. The facility looks small from the outside, but the space is smartly utilized and decorated.
                We highly recommend!
              </blockquote>
              <div className="who">
                Spencer{" "}
                <span>
                  · Jan 2024 · Family · via{" "}
                  <a
                    href="https://www.tripadvisor.com/Attraction_Review-g37014-d10360118-Reviews-Room_to_Escape-Fort_Wayne_Indiana.html"
                    rel="noopener"
                    style={{ textDecoration: "underline" }}
                  >
                    TripAdvisor
                  </a>
                </span>
              </div>
            </div>
            <div className="review-card reveal">
              <div className="stars" aria-hidden="true">
                ★★★★★
              </div>
              <p style={{ fontWeight: "700", color: "var(--ink)", margin: "0" }}>Family run = better experience</p>
              <blockquote>
                Booked an escape room to do with several coworkers after a Christmas lunch. Cameron was an amazing
                game master - you could tell he really wanted to make sure we had a great experience. We had to get
                more hints than we thought we would, which means it was not easy! Thank you for a great 56 minutes!
                This was better than other places I&apos;ve been for sure!
              </blockquote>
              <div className="who">
                Rachel D{" "}
                <span>
                  · Dec 2023 · via{" "}
                  <a
                    href="https://www.tripadvisor.com/Attraction_Review-g37014-d10360118-Reviews-Room_to_Escape-Fort_Wayne_Indiana.html"
                    rel="noopener"
                    style={{ textDecoration: "underline" }}
                  >
                    TripAdvisor
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="groups" className="section">
        <div className="container" style={{ display: "flex", gap: "52px", alignItems: "center" }} data-split>
          <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "16px" }}>
            <h2 className="section-title" style={{ lineHeight: "1.1" }}>
              Parties, teams &amp; <span className="hl">big nights out</span>
            </h2>
            <p style={{ fontSize: "16.5px", lineHeight: "1.65", textWrap: "pretty", margin: "0" }}>
              Birthdays, bachelor and bachelorette parties, youth groups, corporate outings, date nights,
              anniversaries, family gatherings — working together is your &quot;key&quot; to escaping and claiming
              victory.
            </p>
            <div style={{ display: "flex", gap: "14px", marginTop: "6px", flexWrap: "wrap" }}>
              <Link className="btn btn-primary" href="/parties-and-events.html">
                Plan your event
              </Link>
              <Link className="btn btn-outline" href="/contact.html">
                Ask a question
              </Link>
            </div>
          </div>
          <div style={{ display: "flex", gap: "16px", width: "560px", flexShrink: "0" }} className="groups-media">
            <div style={{ flex: "1", height: "340px", borderRadius: "var(--radius)", overflow: "hidden", marginTop: "24px" }}>
              <img
                src="/images/groups-birthday-sm.webp"
                alt="A birthday group at Room to Escape"
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ flex: "1", height: "340px", borderRadius: "var(--radius)", overflow: "hidden" }}>
              <img
                src="/images/groups-corporate-sm.webp"
                alt="A corporate team-building group"
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight section-alt">
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "920px" }}>
          <h2 className="section-title">
            Will you <span className="hl">&quot;escape&quot;</span> Room to Escape?
          </h2>
          <p style={{ fontSize: "16.5px", lineHeight: "1.7", margin: "0" }}>
            Room to Escape is Fort Wayne&apos;s premier escape room. Think you can escape a room at Fort
            Wayne&apos;s Room to Escape? We welcome you to book your escape experience online today. Room to Escape
            offers its guests thrilling, fun-filled, and themed puzzle rooms! Guests must find hidden clues, solve
            challenges, and secure their escape, all before the 60-minute countdown buzzer! Effortlessly reserve your
            Fort Wayne escape room for parties, team building, and more!
          </p>
          <p style={{ fontSize: "15.5px", lineHeight: "1.7", margin: "0", color: "var(--body)" }}>
            While we do have a schedule, we also have more flexibility than many of our competitors. RTE is a small
            local business with most of its Game Masters living close by. This means that with enough notice we can
            often accommodate off-hour requests for games — including days when we are not normally open. If you are
            interested or have questions about scheduling, it is best to call{" "}
            <a className="text-link" href="tel:2606938836">
              260-693-8836
            </a>
            .
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              background: "var(--bg)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              padding: "16px 22px",
            }}
          >
            <span style={{ fontFamily: "var(--display)", fontSize: "22px", color: "var(--gold)" }} aria-hidden="true">
              ★
            </span>
            <p style={{ fontSize: "15px", margin: "0", color: "var(--ink-soft)" }}>
              We are excited to be awarded <strong>&quot;Editor&apos;s Choice&quot;</strong> among the{" "}
              <strong>&quot;75+ Fun Things to do in Fort Wayne.&quot;</strong> Come in and check out why!
            </p>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="steps">
            <div className="step reveal" style={{ background: "var(--bg-alt)" }}>
              <div className="t" style={{ fontFamily: "var(--display)", fontSize: "20px", textTransform: "uppercase" }}>
                Gamers <span style={{ color: "var(--red)" }}>&amp; Groups</span>
              </div>
              <p>
                If you think you&apos;ve got what it takes in the virtual world and want to test your clue-cracking
                skills in the real world, then Room to Escape is for you. Room To Escape provides sophisticated,
                high-level Fort Wayne escape room games that will challenge even the most hardcore gamers.
              </p>
              <p>
                Crack codes, solve ciphers and decode clues all in under 60 minutes for an immersive experience you
                won&apos;t soon forget. Is winning not enough? Go for the record!
              </p>
            </div>
            <div className="step reveal" style={{ background: "var(--bg-alt)" }}>
              <div className="t" style={{ fontFamily: "var(--display)", fontSize: "20px", textTransform: "uppercase" }}>
                Friends <span style={{ color: "var(--red)" }}>&amp; Families</span>
              </div>
              <p>
                One of the best ways to make a memory in Fort Wayne is by doing something out of the box! Whether
                you&apos;re looking for a new adventure with your family, or you&apos;re just tired of staring at
                screens with your friends, let Room To Escape get you out of your comfort zone.
              </p>
              <p>
                Each of Room to Escape&apos;s themed escape rooms are immersive experiences that will transport you
                and your family or friends out of Fort Wayne and into an adventure you will never forget.
              </p>
            </div>
            <div className="step reveal" style={{ background: "var(--bg-alt)" }}>
              <div className="t" style={{ fontFamily: "var(--display)", fontSize: "20px", textTransform: "uppercase" }}>
                Companies <span style={{ color: "var(--red)" }}>&amp; Events</span>
              </div>
              <p>
                Teamwork makes the dream work, so spend one action-packed hour at Room To Escape solving clues,
                working on puzzles, and communicating in a way you just can&apos;t at the office.
              </p>
              <p>
                After playing one of our games your team will work together in ways you never thought possible! Room
                To Escape in Fort Wayne is a great way to build relational equity among co-workers and is much safer
                than a trust fall exercise.
              </p>
            </div>
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
