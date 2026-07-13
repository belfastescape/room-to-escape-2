import Link from "next/link";
import RoomSubbar from "@/components/RoomSubbar";

export const metadata = {
  title: "Triumph Over Evil — Fort Wayne Mystery & Puzzle Room: Escape Themes & Challenges - Room to Escape | Fort Wayne Room to Escape",
  description: "Choose from four epic adventures at the Room to Escape puzzle room experience in Fort Wayne. Themes range from an isolated cabin to a mystery dinner party.",
  alternates: { canonical: "/triumph-over-evil.html" },
  openGraph: {
    type: "website",
    siteName: "Room to Escape",
    url: "https://www.roomtoescape.com/triumph-over-evil.html",
    title: "Triumph Over Evil — Room to Escape Fort Wayne",
    description: "Choose from four epic adventures at the Room to Escape puzzle room experience in Fort Wayne. Themes range from an isolated cabin to a mystery dinner party.",
    images: "https://www.roomtoescape.com/images/triumph-hero.webp",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page_triumph_over_evil() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Product\",\"name\":\"Triumph Over Evil — Escape Room\",\"description\":\"60-minute escape room for up to 6 players at Room to Escape, Fort Wayne, IN.\",\"brand\":{\"@type\":\"Brand\",\"name\":\"Room to Escape\"},\"offers\":{\"@type\":\"Offer\",\"price\":\"29.95\",\"priceCurrency\":\"USD\",\"url\":\"https://www.roomtoescape.com/book-a-game.html\",\"availability\":\"https://schema.org/InStock\"}}" }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://www.roomtoescape.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Triumph Over Evil\",\"item\":\"https://www.roomtoescape.com/triumph-over-evil.html\"}]}" }}
      />
      <RoomSubbar name="Triumph Over Evil" slug="triumph-over-evil" />
<section className="room-hero">
    <img src="/images/triumph-hero.webp" alt="Ardina's candle-lit séance chamber in the Triumph Over Evil escape room" fetchPriority="high" />
    <div className="scrim"></div>
    <div className="container content">
      
      <h1 className="h1" style={{margin: '0'}}>Triumph Over Evil <span style={{display: 'block', fontFamily: 'var(--sans)', fontWeight: '700', fontSize: '15px', letterSpacing: '2.5px', color: 'var(--red-bright)', marginTop: '8px'}}>— FORT WAYNE ESCAPE ROOM</span></h1>
      <div className="chips">
        <span className="chip">Up to 6 players</span>
        <span className="chip">60 minutes</span>
        <span className="chip chip-gold">Game Master–controlled difficulty</span>
      </div>
    </div>
  </section>

  
  <section className="section">
    <div className="container" style={{display: 'flex', gap: '60px'}} data-split>
      <div style={{flex: '1.3', display: 'flex', flexDirection: 'column', gap: '18px'}}>
        <h2 className="section-title">The <span className="hl">story</span></h2>
        <p style={{fontSize: '17.5px', lineHeight: '1.75', color: 'var(--ink-soft)', textWrap: 'pretty', margin: '0'}}>Working together, a famous Harvard historian, a symbologist, and an archeologist discovered the lair of the powerful fabled sorceress Ardina. She had predicted a horrible future for the world even giving an exact time, down to the minute, when the evil and destruction would be unleashed.</p>
        <p style={{fontSize: '17.5px', lineHeight: '1.75', color: 'var(--ink-soft)', textWrap: 'pretty', margin: '0'}}>Ardina's work has always been considered an important bridge from the past, when magic held great power, to the future. This is why the room was meticulously moved piece by piece to this secure location near Washington for further study. Sadly, just after the move, all the scientists involved were found dead.</p>
        <p style={{fontSize: '17.5px', lineHeight: '1.75', color: 'var(--ink-soft)', textWrap: 'pretty', margin: '0'}}>The room has sat undisturbed for decades. This morning it was discovered that the evil and doom predicted was to be soon upon us. As you enter the room, you have 60 minutes to race through a labyrinth of codes and puzzles to discover and unleash the force Ardina created to triumph over the coming evil. If you fail in your effort the world as we know it will come to an end. That is your challenge, it is game on!</p>

        
        <div className="price-block reveal">
          <div className="big">$29.95 <small>per person</small></div>
          <div className="split"></div>
          <div className="fine"><strong>$89.85 minimum</strong> — covers up to 3 players<br /><strong>60 minutes</strong> on the clock · up to 6 players</div>
        </div>

        <div style={{display: 'flex', gap: '14px', marginTop: '10px', flexWrap: 'wrap'}}>
          <Link className="btn btn-primary" href="/book-a-game.html?room=triumph-over-evil">Book Now</Link>
          <Link className="btn btn-outline" href="/index.html#rooms">See all rooms</Link>
        </div>
      </div>
      <aside style={{width: '380px', flexShrink: '0', alignSelf: 'flex-start'}} className="panel panel-alt panel-pad reveal">
        <div className="label" style={{marginBottom: '18px'}}>Good to know</div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '13px', fontSize: '15px', lineHeight: '1.55', color: 'var(--ink-soft)'}}>
          <div><strong style={{color: 'var(--red)'}}>Flexible difficulty.</strong> This room is game master–controlled — the challenge adjusts to your group, from families to fanatics.</div>
          <div><strong style={{color: 'var(--red)'}}>Book 2 hours ahead</strong> — or call <a className="text-link" href="tel:2606938836">260-693-8836</a> to confirm a game master is available.</div>
          <div><strong style={{color: 'var(--red)'}}>Hints included.</strong> Your game master is watching and will nudge you if you get stuck.</div>
        </div>
      </aside>
    </div>
  </section>

  
  <section className="section-tight section-alt">
    <div className="container">
      <h2 className="section-title" style={{marginBottom: '26px'}}>Inside the <span className="hl">room</span></h2>
      <div className="gallery reveal">
        <div><img src="/images/triumph-feature.webp" alt="Ardina's séance table" loading="lazy" /></div>
        <div><img src="/images/triumph-gallery-1.webp" alt="Symbols and codes in the sorceress's lair" loading="lazy" /></div>
        <div><img src="/images/triumph-gallery-2.webp" alt="Candle-lit details of Ardina's chamber" loading="lazy" /></div>
      </div>
      <p className="section-note" style={{marginTop: '20px'}}>No spoilers — these glimpses are all you get before the clock starts.</p>
    </div>
  </section>

  
  <section className="section-tight">
    <div className="container" style={{display: 'flex', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap'}}>
      <div style={{flex: '1', minWidth: '280px'}}>
        <h2 className="section-title" style={{marginBottom: '16px'}}>First time? <span className="hl">What to expect</span></h2>
        <ul style={{margin: '0', paddingLeft: '20px', fontSize: '15.5px', lineHeight: '1.9', color: 'var(--body)'}}>
          <li><strong style={{color: 'var(--ink)'}}>60 minutes</strong> on the clock, with a game master watching and ready with hints.</li>
          
          <li>You are <strong style={{color: 'var(--ink)'}}>never actually locked in</strong>.</li>
          <li>Ages <strong style={{color: 'var(--ink)'}}>12+</strong> — see the <Link className="text-link" href="/faq.html">FAQ</Link> for age guidance.</li>
          <li>Arrive <strong style={{color: 'var(--ink)'}}>20 minutes early</strong> for your briefing.</li>
        </ul>
      </div>
      <div style={{flex: '1', minWidth: '280px'}} className="panel panel-dark panel-pad">
        <div className="label" style={{marginBottom: '12px'}}>Not this one?</div>
        <p style={{fontSize: '15px', lineHeight: '1.65'}}>After a fixed challenge instead? First-timers love <Link className="text-link" style={{color: 'var(--red-bright)'}} href="/museum-heist.html">Museum Heist</Link>; veterans should face <Link className="text-link" style={{color: 'var(--red-bright)'}} href="/cabin-in-the-storm.html">Cabin In The Storm</Link>.</p>
        <Link className="btn btn-outline-dark btn-sm" href="/index.html#rooms" style={{marginTop: '10px', display: 'inline-block'}}>Compare all five rooms</Link>
      </div>
    </div>
  </section>

  
  <section className="section-tight section-alt">
    <div className="container">
      <h2 className="section-title" style={{marginBottom: '30px'}}>More <span className="hl">rooms</span></h2>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '18px'}} className="more-rooms">
        <Link className="room-card" href="/cabin-in-the-storm.html">
          <div className="thumb" style={{height: '150px'}}><img src="/images/cabin-card-sm.webp" alt="Cabin In The Storm" loading="lazy" /></div>
          <div className="body" style={{padding: '16px 18px 18px'}}><span className="name" style={{fontSize: '18px'}}>Cabin In The Storm</span></div>
        </Link>
        <Link className="room-card" href="/dining-room-caper.html">
          <div className="thumb" style={{height: '150px'}}><img src="/images/dining-card-sm.webp" alt="Dining Room Caper" loading="lazy" /></div>
          <div className="body" style={{padding: '16px 18px 18px'}}><span className="name" style={{fontSize: '18px'}}>Dining Room Caper</span></div>
        </Link>
        <Link className="room-card" href="/museum-heist.html">
          <div className="thumb" style={{height: '150px'}}><img src="/images/museum-card-sm.webp" alt="Museum Heist" loading="lazy" /></div>
          <div className="body" style={{padding: '16px 18px 18px'}}><span className="name" style={{fontSize: '18px'}}>Museum Heist</span></div>
        </Link>
        <Link className="room-card" href="/the-disappearing-act.html">
          <div className="thumb" style={{height: '150px'}}><img src="/images/disappearing-card-sm.webp" alt="The Disappearing Act" loading="lazy" /></div>
          <div className="body" style={{padding: '16px 18px 18px'}}><span className="name" style={{fontSize: '18px'}}>The Disappearing Act</span></div>
        </Link>
      </div>
    </div>
  </section>

  
  <section className="cta-band">
    <div className="container inner">
      <div className="title">Ardina's prophecy is counting down.</div>
      <Link className="btn btn-dark" href="/book-a-game.html?room=triumph-over-evil" style={{fontSize: '17px', padding: '18px 38px'}}>Book Now</Link>
    </div>
  </section>
    </>
  );
}
