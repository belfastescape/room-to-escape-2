import Link from "next/link";

export const metadata = {
  title: "Room to Escape Game | About Us - Room to Escape | Fort Wayne Room to Escape",
  description: "​Find out why Room to Escape is one of the top things to do in Fort Wayne! We offer four exciting game themes for your next celebration or teambuilding.",
  alternates: { canonical: "/about-us.html" },
  openGraph: {
    type: "website",
    siteName: "Room to Escape",
    url: "https://www.roomtoescape.com/about-us.html",
    title: "About Us — Room to Escape Fort Wayne",
    description: "Find out why Room to Escape is one of the top things to do in Fort Wayne! We offer four exciting game themes for your next celebration or teambuilding.",
    images: "https://www.roomtoescape.com/images/home-joy.webp",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page_about_us() {
  return (
    <>
<section className="page-head">
    <div className="container stack">
      
      <h1 className="eyebrow" style={{margin: '0'}}>things to do in fort wayne</h1>
      <p className="h1" style={{margin: '0'}}>About Us</p>
      <p className="lede" style={{margin: '0'}}>ONE ROOM. Your group. SIXTY MINUTES.</p>
    </div>
  </section>

  <section className="section-tight section-alt">
    <div className="container" style={{display: 'flex', gap: '52px', alignItems: 'flex-start'}} data-split>
      <div style={{flex: '1.3', display: 'flex', flexDirection: 'column', gap: '18px'}}>
        <h2 className="section-title">A family-run <span className="hl">Fort Wayne original</span></h2>
        <p style={{fontSize: '16.5px', lineHeight: '1.7', margin: '0'}}>Room To Escape is a fun, new entertainment concept located at 3734 Allen Ave, Fort Wayne, Indiana, 46805. Room To Escape is a real life adventure game designed for small to medium groups. Whether you're a group of friends, family members, or coworkers, your goal is simple: You have one hour to work together, crack codes and solve ciphers to escape. Book today and see if you have what it takes to escape in under 60 minutes!</p>
        <p style={{fontSize: '16px', lineHeight: '1.7', margin: '0'}}>We have upgraded, reworked, and added some fun new challenges to make your experience here at Room To Escape even more fun and enjoyable. One area we have expanded into, and are very excited about, is the addition of an in-house party and event planner. Her goal will be to make your job of putting together that special gathering less stressful and seamless.</p>
        
        <div className="notice">
          <strong>Family-run, and it shows.</strong> As one guest put it: "It's a family-owned business, and you can tell they put their hearts into every aspect." — <Link className="text-link" href="/reviews.html">read the reviews</Link>
        </div>
        <div style={{display: 'flex', gap: '14px', marginTop: '6px', flexWrap: 'wrap'}}>
          <Link className="btn btn-primary" href="/book-a-game.html">Book Now</Link>
          <Link className="btn btn-outline" href="/parties-and-events.html">Parties &amp; Events</Link>
        </div>
      </div>
      <div style={{width: '440px', flexShrink: '0', display: 'flex', flexDirection: 'column', gap: '16px'}}>
        <div style={{borderRadius: 'var(--radius)', overflow: 'hidden'}}><img src="/images/home-venue.webp" alt="Inside the Room to Escape venue" loading="lazy" /></div>
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
          <p>RTE is a small local business with most of its Game Masters living close by — with enough notice we can often accommodate off-hour requests, including days we're not normally open.</p>
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
      <Link className="btn btn-dark" href="/book-a-game.html" style={{fontSize: '17px', padding: '18px 38px'}}>Book Now</Link>
    </div>
  </section>
    </>
  );
}
