import Link from "next/link";

export const metadata = {
  title: "Reviews — Cipher & Key",
  description: "What players say about Cipher & Key in Springfield — five themed 60-minute escape rooms for families, friends and work teams. Book online.",
  alternates: { canonical: "/reviews.html" },
  openGraph: {
    type: "website",
    siteName: "Cipher & Key",
    url: "https://www.cipherandkey.com/reviews.html",
    title: "Reviews — Cipher & Key Springfield",
    description: "What families, friends and work teams say after an hour at Cipher & Key in Springfield.",
    images: "https://www.cipherandkey.com/images/escape1_orig.webp",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page_reviews() {
  return (
    <>
<section className="page-head">
    <div className="container stack">
      
      <p className="eyebrow" style={{margin: '0'}}>Springfield Escape Room Reviews</p>
      <h1 style={{margin: '0'}}>Reviews</h1>
      <p className="lede" style={{margin: '0'}}>Many Thanks, from all of us here at Cipher & Key!</p>
      <div className="rating-badge" style={{color: 'var(--on-dark)', marginTop: '6px'}}>
        <span className="stars" aria-hidden="true">★★★★★</span>
        
        <span>4.9 average from 300+ player reviews</span>
      </div>
    </div>
  </section>

  <section className="section-tight section-alt">
    <div className="container">
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px'}} className="review-grid">
        <div className="review-card reveal">
          <div className="stars" aria-hidden="true">★★★★★</div>
          <blockquote>10/10 — a brilliant way to spend an hour with the family. Our game master made my youngest feel like the hero of the whole thing.</blockquote>
          <div className="who">Amelia R</div>
        </div>
        <div className="review-card reveal">
          <div className="stars" aria-hidden="true">★★★★★</div>
          <blockquote>The most personable escape room we&rsquo;ve been to. We played Blackout Cabin and had an absolute blast — the set, the codes and the puzzles were all beautifully put together. Afterwards they let us peek into two of the other rooms, so now we have to come back and do them all.</blockquote>
          <div className="who">Daniel K</div>
        </div>
        <div className="review-card reveal">
          <div className="stars" aria-hidden="true">★★★★★</div>
          <blockquote>Best escape room experience we&rsquo;ve had. Friendly, patient staff and a genuinely clever room. We brought our daughters and they loved it as much as we did.</blockquote>
          <div className="who">Sarah M</div>
        </div>
        <div className="review-card reveal">
          <div className="stars" aria-hidden="true">★★★★★</div>
          <blockquote>Loved it! This was my first escape room and it definitely won&rsquo;t be my last.</blockquote>
          <div className="who">Chloe B</div>
        </div>
        <div className="review-card reveal">
          <div className="stars" aria-hidden="true">★★★★★</div>
          <blockquote>Took my daughter and five of her friends for her twelfth birthday. Seven excitable kids is a lot to handle and the staff were endlessly patient. We needed a few hints, but we got out — and they&rsquo;ve talked about it ever since.</blockquote>
          <div className="who">Nicola F</div>
        </div>
        <div className="review-card reveal">
          <div className="stars" aria-hidden="true">★★★★★</div>
          <blockquote>One of the best rooms I&rsquo;ve played. Difficult, but never so difficult that you&rsquo;re stuck staring at a wall. We worked a couple of clues out of order and made life hard for ourselves, and still made it out with time on the clock.</blockquote>
          <div className="who">Tom H</div>
        </div>
        <div className="review-card reveal">
          <div className="stars" aria-hidden="true">★★★★★</div>
          <blockquote>Great local business. Took the kids and had a fantastic time.</blockquote>
          <div className="who">J. A.</div>
        </div>
        <div className="review-card reveal">
          <div className="stars" aria-hidden="true">★★★★★</div>
          <blockquote>Just played Blackout Cabin — first escape room we&rsquo;ve ever done and we&rsquo;re hooked. 10/10.</blockquote>
          <div className="who">Ryan P</div>
        </div>
        <div className="review-card reveal">
          <div className="stars" aria-hidden="true">★★★★★</div>
          <p style={{fontWeight: '700', color: 'var(--ink)', margin: '0'}}>Best escape room in town</p>
          <blockquote>I&rsquo;ve done a fair few escape rooms and this was comfortably the best of them. You can tell the people running it actually love it, and that comes through in every detail of the game.</blockquote>
          <div className="who">Adam W</div>
        </div>
        <div className="review-card reveal">
          <div className="stars" aria-hidden="true">★★★★★</div>
          <p style={{fontWeight: '700', color: 'var(--ink)', margin: '0'}}>Beyond our expectations</p>
          <blockquote>The team went well out of their way to accommodate our group. Everything was spotless, the briefing was clear, and there was coffee and snacks in the lounge afterwards. We played Dinner at Eight and The Vanishing Hour back to back. Worth every penny.</blockquote>
          <div className="who">Elena V</div>
        </div>
        <div className="review-card reveal">
          <div className="stars" aria-hidden="true">★★★★★</div>
          <p style={{fontWeight: '700', color: 'var(--ink)', margin: '0'}}>Just go</p>
          <blockquote>Mixed-age group, from teenagers to grandparents, and everyone found something to do. The staff were superb. If you get the chance, go.</blockquote>
          <div className="who">Michael O</div>
        </div>
        <div className="review-card reveal">
          <div className="stars" aria-hidden="true">★★★★★</div>
          <p style={{fontWeight: '700', color: 'var(--ink)', margin: '0'}}>Best we&rsquo;ve seen</p>
          <blockquote>The best escape room we&rsquo;ve been to so far. Our game master helped whenever we were stuck, sometimes before we&rsquo;d even asked. Perfect for a small group with a free hour.</blockquote>
          <div className="who">Hannah L</div>
        </div>
      </div>
      <p className="section-note" style={{marginTop: '26px'}}>Reviews shown are illustrative examples.</p>
    </div>
  </section>

  <section className="section-tight">
    <div className="container">
      <div className="section-head">
        <h2 className="section-title">Straight from the <span className="hl">Wall of Fame</span></h2>
      </div>
      <div style={{display: 'flex', gap: '18px'}} className="fame-row">
        <div className="polaroid tilt-l" style={{flex: '1'}}><img src="/images/escape1_orig-sm.webp" alt="A team celebrating their escape" loading="lazy" /><div className="caption">Certified geniuses — escaped!</div></div>
        <div className="polaroid tilt-r" style={{flex: '1'}}><img src="/images/escape2_orig-sm.webp" alt="A corporate group after their win" loading="lazy" /><div className="caption">Corporate outing, victorious.</div></div>
        <div className="polaroid tilt-s" style={{flex: '1'}}><img src="/images/team-group_orig-sm.webp" alt="A group who ran out of time, still smiling" loading="lazy" /><div className="caption">So close… we'll get it next time!</div></div>
      </div>
    </div>
  </section>

  <section className="cta-band">
    <div className="container inner">
      <div>
        <div className="title">The clock is already running.</div>
        <div className="sub">Book online, or call (217) 555-0182 — we may be mid-game, so leave a message.</div>
      </div>
      <Link className="btn btn-dark" href="/book-a-game.html" style={{fontSize: '17px', padding: '18px 38px'}}>Book Now</Link>
    </div>
  </section>
    </>
  );
}
