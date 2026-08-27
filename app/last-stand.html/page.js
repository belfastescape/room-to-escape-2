import Link from "next/link";
import RoomSubbar from "@/components/RoomSubbar";

export const metadata = {
  title: "Last Stand — Springfield Mystery & Puzzle Room: Escape Themes & Challenges - Cipher & Key | Springfield Cipher & Key",
  description: "Last Stand is a 60-minute escape room at Cipher & Key in Springfield with game master-controlled difficulty, for up to 6 players &mdash; families to fanatics.",
  alternates: { canonical: "/last-stand.html" },
  openGraph: {
    type: "website",
    siteName: "Cipher & Key",
    url: "https://www.cipherandkey.com/last-stand.html",
    title: "Last Stand — Cipher & Key Springfield",
    description: "Last Stand is a 60-minute escape room at Cipher & Key in Springfield with game master-controlled difficulty, for up to 6 players &mdash; families to fanatics.",
    images: "https://www.cipherandkey.com/images/laststand-hero.webp",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page_triumph_over_evil() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Product\",\"name\":\"Last Stand — Escape Room\",\"description\":\"60-minute escape room for up to 6 players at Cipher & Key, Springfield, IL.\",\"brand\":{\"@type\":\"Brand\",\"name\":\"Cipher & Key\"},\"offers\":{\"@type\":\"Offer\",\"price\":\"29.95\",\"priceCurrency\":\"USD\",\"url\":\"https://www.cipherandkey.com/book-a-game.html\",\"availability\":\"https://schema.org/InStock\"}}" }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://www.cipherandkey.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Last Stand\",\"item\":\"https://www.cipherandkey.com/last-stand.html\"}]}" }}
      />
      <RoomSubbar name="Last Stand" slug="last-stand" />
<section className="room-hero">
    <img src="/images/laststand-hero.webp" alt="The candle-lit chamber in the Last Stand escape room" fetchPriority="high" />
    <div className="scrim"></div>
    <div className="container content">
      
      <p className="eyebrow" style={{margin: '0'}}>Springfield escape room</p>
      <h1 style={{margin: '0'}}>Last Stand</h1>
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
        <p style={{fontSize: '17.5px', lineHeight: '1.75', color: 'var(--ink-soft)', textWrap: 'pretty', margin: '0'}}>An amateur astronomer spent forty years in a sealed room beneath her house, charting something she was certain was coming back. She fixed a date to it &mdash; to the minute &mdash; and then said nothing more about it to anyone.</p>
        <p style={{fontSize: '17.5px', lineHeight: '1.75', color: 'var(--ink-soft)', textWrap: 'pretty', margin: '0'}}>When the house was cleared, the chamber was crated up and rebuilt here exactly as she left it: instruments, ciphers, candle stubs and all. Nobody has been able to make sense of the sequence she left running.</p>
        <p style={{fontSize: '17.5px', lineHeight: '1.75', color: 'var(--ink-soft)', textWrap: 'pretty', margin: '0'}}>The date she fixed is today. You have sixty minutes to finish the work she started &mdash; read the charts, break the sequence and open whatever this room was built around. She never wrote down what happens if nobody does.</p>

        
        <div className="price-block reveal">
          <div className="big">$29.95 <small>per person</small></div>
          <div className="split"></div>
          <div className="fine"><strong>$89.85 minimum</strong> — covers up to 3 players<br /><strong>60 minutes</strong> on the clock · up to 6 players</div>
        </div>

        <div style={{display: 'flex', gap: '14px', marginTop: '10px', flexWrap: 'wrap'}}>
          <Link className="btn btn-primary" href="/book-a-game.html?room=last-stand">Book Now</Link>
          <Link className="btn btn-outline" href="/#rooms">See all rooms</Link>
        </div>
      </div>
      <aside style={{width: '380px', flexShrink: '0', alignSelf: 'flex-start'}} className="panel panel-alt panel-pad reveal">
        <div className="label" style={{marginBottom: '18px'}}>Good to know</div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '13px', fontSize: '15px', lineHeight: '1.55', color: 'var(--ink-soft)'}}>
          <div><strong style={{color: 'var(--red)'}}>Flexible difficulty.</strong> This room is game master–controlled — the challenge adjusts to your group, from families to fanatics.</div>
          <div><strong style={{color: 'var(--red)'}}>Book 2 hours ahead</strong> — or call <a className="text-link" href="tel:2175550182">(217) 555-0182</a> to confirm a game master is available.</div>
          <div><strong style={{color: 'var(--red)'}}>Hints included.</strong> Your game master is watching and will nudge you if you get stuck.</div>
        </div>
      </aside>
    </div>
  </section>

  
  <section className="section-tight section-alt">
    <div className="container">
      <h2 className="section-title" style={{marginBottom: '26px'}}>Inside the <span className="hl">room</span></h2>
      <div className="gallery reveal">
        <div><img src="/images/laststand-feature.webp" alt="The astronomer's work table" loading="lazy" /></div>
        <div><img src="/images/laststand-gallery-1.webp" alt="Charts and ciphers in the sealed chamber" loading="lazy" /></div>
        <div><img src="/images/laststand-gallery-2.webp" alt="Candle-lit details of the chamber" loading="lazy" /></div>
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
        <p style={{fontSize: '15px', lineHeight: '1.65'}}>After a fixed challenge instead? First-timers love <Link className="text-link" style={{color: 'var(--red-bright)'}} href="/the-gallery-job.html">The Gallery Job</Link>; veterans should face <Link className="text-link" style={{color: 'var(--red-bright)'}} href="/blackout-cabin.html">Blackout Cabin</Link>.</p>
        <Link className="btn btn-outline-dark btn-sm" href="/#rooms" style={{marginTop: '10px', display: 'inline-block'}}>Compare all five rooms</Link>
      </div>
    </div>
  </section>

  
  <section className="section-tight section-alt">
    <div className="container">
      <h2 className="section-title" style={{marginBottom: '30px'}}>More <span className="hl">rooms</span></h2>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '18px'}} className="more-rooms">
        <Link className="room-card" href="/blackout-cabin.html">
          <div className="thumb" style={{height: '150px'}}><img src="/images/blackout-card-sm.webp" alt="Blackout Cabin" loading="lazy" /></div>
          <div className="body" style={{padding: '16px 18px 18px'}}><span className="name" style={{fontSize: '18px'}}>Blackout Cabin</span></div>
        </Link>
        <Link className="room-card" href="/dinner-at-eight.html">
          <div className="thumb" style={{height: '150px'}}><img src="/images/dinner-card-sm.webp" alt="Dinner at Eight" loading="lazy" /></div>
          <div className="body" style={{padding: '16px 18px 18px'}}><span className="name" style={{fontSize: '18px'}}>Dinner at Eight</span></div>
        </Link>
        <Link className="room-card" href="/the-gallery-job.html">
          <div className="thumb" style={{height: '150px'}}><img src="/images/gallery-card-sm.webp" alt="The Gallery Job" loading="lazy" /></div>
          <div className="body" style={{padding: '16px 18px 18px'}}><span className="name" style={{fontSize: '18px'}}>The Gallery Job</span></div>
        </Link>
        <Link className="room-card" href="/the-vanishing-hour.html">
          <div className="thumb" style={{height: '150px'}}><img src="/images/vanishing-card-sm.webp" alt="The Vanishing Hour" loading="lazy" /></div>
          <div className="body" style={{padding: '16px 18px 18px'}}><span className="name" style={{fontSize: '18px'}}>The Vanishing Hour</span></div>
        </Link>
      </div>
    </div>
  </section>

  
  <section className="cta-band">
    <div className="container inner">
      <div className="title">The countdown is already running.</div>
      <Link className="btn btn-dark" href="/book-a-game.html?room=last-stand" style={{fontSize: '17px', padding: '18px 38px'}}>Book Now</Link>
    </div>
  </section>
    </>
  );
}
