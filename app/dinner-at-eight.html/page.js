import Link from "next/link";
import RoomSubbar from "@/components/RoomSubbar";

export const metadata = {
  title: "Dinner at Eight — Springfield Mystery & Puzzle Room: Themes & Challenges - Cipher & Key | Springfield Cipher & Key",
  description: "Dinner at Eight is a 60-minute murder-mystery escape room for up to 8 players at Cipher & Key in Springfield. Name the killer, the weapon and the room.",
  alternates: { canonical: "/dinner-at-eight.html" },
  openGraph: {
    type: "website",
    siteName: "Cipher & Key",
    url: "https://www.cipherandkey.com/dinner-at-eight.html",
    title: "Dinner at Eight — Cipher & Key Springfield",
    description: "Dinner at Eight is a 60-minute murder-mystery escape room for up to 8 players at Cipher & Key in Springfield. Name the killer, the weapon and the room.",
    images: "https://www.cipherandkey.com/images/dinner-hero.webp",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page_dining_room_caper() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Product\",\"name\":\"Dinner at Eight — Escape Room\",\"description\":\"60-minute escape room for up to 8 players at Cipher & Key, Springfield, IL.\",\"brand\":{\"@type\":\"Brand\",\"name\":\"Cipher & Key\"},\"offers\":{\"@type\":\"Offer\",\"price\":\"29.95\",\"priceCurrency\":\"USD\",\"url\":\"https://www.cipherandkey.com/book-a-game.html\",\"availability\":\"https://schema.org/InStock\"}}" }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://www.cipherandkey.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Dinner at Eight\",\"item\":\"https://www.cipherandkey.com/dinner-at-eight.html\"}]}" }}
      />
      <RoomSubbar name="Dinner at Eight" slug="dinner-at-eight" />
<section className="room-hero">
    <img src="/images/dinner-hero.webp" alt="The formal dining room in the Dinner at Eight escape room" fetchPriority="high" />
    <div className="scrim"></div>
    <div className="container content">
      
      <h1 className="eyebrow" style={{margin: '0'}}>things to do in springfield</h1>
      <p className="h1" style={{margin: '0'}}>Dinner at Eight</p>
      <div className="chips">
        <span className="chip">Up to 8 players</span>
        <span className="chip">60 minutes</span>
        <span className="chip chip-gold">
          <span className="locks" role="img" aria-label="Difficulty 3 of 5" style={{marginRight: '6px'}}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path className="on" d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z" /></svg>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path className="on" d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z" /></svg>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path className="on" d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z" /></svg>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path className="off" d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z" /></svg>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path className="off" d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z" /></svg>
          </span>
          Medium difficulty
        </span>
      </div>
    </div>
  </section>

  
  <section className="section">
    <div className="container" style={{display: 'flex', gap: '60px'}} data-split>
      <div style={{flex: '1.3', display: 'flex', flexDirection: 'column', gap: '18px'}}>
        <h2 className="section-title">The <span className="hl">story</span></h2>
        <p style={{fontSize: '17.5px', lineHeight: '1.75', color: 'var(--ink-soft)', textWrap: 'pretty', margin: '0'}}><strong>Eight sat down. Seven are still at the table.</strong></p>
        <p style={{fontSize: '17.5px', lineHeight: '1.75', color: 'var(--ink-soft)', textWrap: 'pretty', margin: '0'}}>The host never made it past the study door. The house has been sealed since &mdash; nobody in, nobody out &mdash; and every guest has a version of the evening that does not quite match anyone else's.</p>
        <p style={{fontSize: '17.5px', lineHeight: '1.75', color: 'var(--ink-soft)', textWrap: 'pretty', margin: '0'}}>You have been let in to work the scene before the roads clear and the guests scatter. Sift the place settings, the correspondence and the timings until you can name three things: who, with what, and in which room. One of the seven is counting on you running out of time.</p>

        
        <div className="price-block reveal">
          <div className="big">$29.95 <small>per person</small></div>
          <div className="split"></div>
          <div className="fine"><strong>$89.85 minimum</strong> — covers up to 3 players<br /><strong>60 minutes</strong> on the clock · up to 8 players</div>
        </div>

        <div style={{display: 'flex', gap: '14px', marginTop: '10px', flexWrap: 'wrap'}}>
          <Link className="btn btn-primary" href="/book-a-game.html?room=dinner-at-eight">Book Now</Link>
          <Link className="btn btn-outline" href="/index.html#rooms">See all rooms</Link>
        </div>
      </div>
      <aside style={{width: '380px', flexShrink: '0', alignSelf: 'flex-start'}} className="panel panel-alt panel-pad reveal">
        <div className="label" style={{marginBottom: '18px'}}>Good to know</div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '13px', fontSize: '15px', lineHeight: '1.55', color: 'var(--ink-soft)'}}>
          <div><strong style={{color: 'var(--red)'}}>A classic whodunit.</strong> Medium difficulty — great for mixed groups, and one of two rooms that takes up to 8 players.</div>
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
        <div><img src="/images/dinner-feature.webp" alt="The dining table, still laid for eight" loading="lazy" /></div>
        <div><img src="/images/dinner-gallery-1.webp" alt="Evidence gathered from the dinner party" loading="lazy" /></div>
        <div><img src="/images/dinner-gallery-2.webp" alt="Details of the sealed dining room" loading="lazy" /></div>
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
        <p style={{fontSize: '15px', lineHeight: '1.65'}}>Prefer magic over murder? Try <Link className="text-link" style={{color: 'var(--red-bright)'}} href="/the-vanishing-hour.html">The Vanishing Hour</Link>. Veterans should take on <Link className="text-link" style={{color: 'var(--red-bright)'}} href="/blackout-cabin.html">Blackout Cabin</Link>.</p>
        <Link className="btn btn-outline-dark btn-sm" href="/index.html#rooms" style={{marginTop: '10px', display: 'inline-block'}}>Compare all five rooms</Link>
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
        <Link className="room-card" href="/the-vanishing-hour.html">
          <div className="thumb" style={{height: '150px'}}><img src="/images/vanishing-card-sm.webp" alt="The Vanishing Hour" loading="lazy" /></div>
          <div className="body" style={{padding: '16px 18px 18px'}}><span className="name" style={{fontSize: '18px'}}>The Vanishing Hour</span></div>
        </Link>
        <Link className="room-card" href="/the-gallery-job.html">
          <div className="thumb" style={{height: '150px'}}><img src="/images/gallery-card-sm.webp" alt="The Gallery Job" loading="lazy" /></div>
          <div className="body" style={{padding: '16px 18px 18px'}}><span className="name" style={{fontSize: '18px'}}>The Gallery Job</span></div>
        </Link>
        <Link className="room-card" href="/last-stand.html">
          <div className="thumb" style={{height: '150px'}}><img src="/images/laststand-card-sm.webp" alt="Last Stand" loading="lazy" /></div>
          <div className="body" style={{padding: '16px 18px 18px'}}><span className="name" style={{fontSize: '18px'}}>Last Stand</span></div>
        </Link>
      </div>
    </div>
  </section>

  
  <section className="cta-band">
    <div className="container inner">
      <div className="title">The suspects won't wait forever.</div>
      <Link className="btn btn-dark" href="/book-a-game.html?room=dinner-at-eight" style={{fontSize: '17px', padding: '18px 38px'}}>Book Now</Link>
    </div>
  </section>
    </>
  );
}
