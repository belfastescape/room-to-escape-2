import Link from "next/link";

export const metadata = {
  title: "About Us — Cipher & Key",
  description: "Find out why Cipher & Key is one of the top things to do in Springfield! We offer five exciting game themes for your next celebration or teambuilding.",
  alternates: { canonical: "/about-us.html" },
  openGraph: {
    type: "website",
    siteName: "Cipher & Key",
    url: "https://www.cipherandkey.com/about-us.html",
    title: "About Us — Cipher & Key Springfield",
    description: "Find out why Cipher & Key is one of the top things to do in Springfield! We offer five exciting game themes for your next celebration or teambuilding.",
    images: "https://www.cipherandkey.com/images/home-joy.webp",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page_about_us() {
  return (
    <>
<section className="page-head">
    <div className="container stack">
      
      <p className="eyebrow" style={{margin: '0'}}>things to do in springfield</p>
      <h1 style={{margin: '0'}}>About Us</h1>
      <p className="lede" style={{margin: '0'}}>ONE ROOM. Your group. SIXTY MINUTES.</p>
    </div>
  </section>

  <section className="section-tight section-alt">
    <div className="container" style={{display: 'flex', gap: '52px', alignItems: 'flex-start'}} data-split>
      <div style={{flex: '1.3', display: 'flex', flexDirection: 'column', gap: '18px'}}>
        <h2 className="section-title">An independent <span className="hl">Springfield original</span></h2>
        <p style={{fontSize: '16.5px', lineHeight: '1.7', margin: '0'}}>Cipher & Key is a fun, new entertainment concept located at 1200 Kestrel Street, Springfield, Illinois, 62704. Cipher & Key is a real life adventure game designed for small to medium groups. Whether you're a group of friends, family members, or coworkers, your goal is simple: You have one hour to work together, crack codes and solve ciphers to escape. Book today and see if you have what it takes to escape in under 60 minutes!</p>
        <p style={{fontSize: '16px', lineHeight: '1.7', margin: '0'}}>We have upgraded, reworked, and added some fun new challenges to make your experience here at Cipher & Key even more fun and enjoyable. One area we have expanded into, and are very excited about, is the addition of an in-house party and event planner. Her goal will be to make your job of putting together that special gathering less stressful and seamless.</p>
        
        <div className="notice">
          <strong>Independently run, and it shows.</strong> Every room here was designed, built and tested in-house — and every game is run by someone who has played it a hundred times. — <Link className="text-link" href="/reviews.html">read the reviews</Link>
        </div>
        <div style={{display: 'flex', gap: '14px', marginTop: '6px', flexWrap: 'wrap'}}>
          <Link className="btn btn-primary" href="/book-a-game.html">Book Now</Link>
          <Link className="btn btn-outline" href="/parties-and-events.html">Parties &amp; Events</Link>
        </div>
      </div>
      <div style={{width: '440px', flexShrink: '0', display: 'flex', flexDirection: 'column', gap: '16px'}}>
        <div style={{borderRadius: 'var(--radius)', overflow: 'hidden'}}><img src="/images/home-venue.webp" alt="Inside the Cipher & Key venue" loading="lazy" /></div>
        <div className="polaroid tilt-r"><img src="/images/home-joy.webp" alt="A happy team after their game" loading="lazy" style={{height: '220px'}} /><div className="caption">The post-game photo — win or lose, everyone gets one.</div></div>
      </div>
    </div>
  </section>

  <section className="section-tight">
    <div className="container">
      <h2 className="section-title" style={{marginBottom: '30px'}}>What makes a game <span className="hl">here different</span></h2>
      <div className="steps">
        <div className="step reveal" style={{background: 'var(--bg-alt)'}}>
          <div className="t">Your room is yours</div>
          <p>It is not our policy to ask you to share the room with people you don't know — every game is private to your group.</p>
        </div>
        <div className="step reveal" style={{background: 'var(--bg-alt)'}}>
          <div className="t">A game master who cares</div>
          <p>Your game master briefs you, watches the game, and offers hints when you need them — guests mention them by name in reviews.</p>
        </div>
        <div className="step reveal" style={{background: 'var(--bg-alt)'}}>
          <div className="t">Flexible for groups</div>
          <p>Cipher &amp; Key is a small local business with most of its Game Masters living close by — with enough notice we can often accommodate off-hour requests, including days we're not normally open.</p>
        </div>
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
