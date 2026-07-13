import Link from "next/link";

export const metadata = {
  title: "Book a Game | Escape Room - Room to Escape | Fort Wayne Room to Escape",
  description: "Whether it's a birthday party, corporate event, or a fun night out, our four escape rooms in Fort Wayne are available for booking 6 days a week.",
  alternates: { canonical: "/book-a-game.html" },
  openGraph: {
    type: "website",
    siteName: "Room to Escape",
    url: "https://www.roomtoescape.com/book-a-game.html",
    title: "Book a Game — Room to Escape Fort Wayne",
    description: "Whether it's a birthday party, corporate event, or a fun night out, our four escape rooms in Fort Wayne are available for booking 6 days a week.",
    images: "https://www.roomtoescape.com/images/home-hero.webp",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page_book_a_game() {
  return (
    <>
<section className="page-head">
    <div className="container stack">
      
      <h1 className="eyebrow" style={{margin: '0'}}>escape room in fort wayne</h1>
      <p className="h1" style={{margin: '0'}}>Book A Game</p>
      <p className="lede" style={{margin: '0'}}>Pick your room. Pick your time. Done. Are you ready for thrilling, exciting, non-stop, adrenaline pumping action? Our rooms are perfect for first-time guests and for the hardened escape artist veteran.</p>
      <div style={{display: 'flex', gap: '26px', flexWrap: 'wrap', alignItems: 'center', marginTop: '6px', fontSize: '14.5px', color: 'var(--on-dark)'}}>
        <span>Questions? Call <a href="tel:2606938836" style={{color: 'var(--red-bright)', fontWeight: '700'}}>260-693-8836</a></span>
        <span>Tue–Thu 11–7 · Fri &amp; Sat 11–9</span>
        <span className="rating-badge" style={{color: 'var(--on-dark)'}}>
          <span className="stars" aria-hidden="true">★★★★★</span>
          
          <a href="https://www.tripadvisor.com/Attraction_Review-g37014-d10360118-Reviews-Room_to_Escape-Fort_Wayne_Indiana.html" rel="noopener" style={{color: 'var(--on-dark)'}}>[RATING] · [N] TripAdvisor reviews</a>
        </span>
      </div>
    </div>
  </section>

  
  <section className="section-tight section-alt">
    <div className="container" style={{display: 'flex', gap: '32px', alignItems: 'flex-start'}} data-split>
      <div style={{flex: '1.5', display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '0'}}>

        
        <div className="price-block">
          <div className="big">$29.95 <small>per person</small></div>
          <div className="split"></div>
          <div className="fine"><strong>$89.85 minimum</strong> — covers up to 3 players<br />Every game: <strong>60 minutes</strong> · private to your group</div>
        </div>

        
        <div className="notice">
          <strong>Please note:</strong> to book a game you must book two hours before the start of the game, or call us at <a className="text-link" href="tel:2606938836">260-693-8836</a> to confirm a game master is available to run the game.
        </div>

        
        <div className="widget-shell">
          <div className="widget-skeleton" aria-hidden="true">
            <div className="clock">60</div>
            <div className="t">Loading the booking calendar…</div>
            <div className="shimmer"></div>
            <div className="shimmer" style={{width: 'min(320px,60%)'}}></div>
          </div>
          <iframe src="https://roomtoescape.resova.us/widget" title="Room to Escape booking calendar" loading="lazy"></iframe>
        </div>

        
        <div className="steps" style={{marginTop: '10px'}}>
          <div className="step">
            <div className="num">01</div>
            <div className="t">Choose a room</div>
            <p>Five rooms, one price — $29.95 per person, 60 minutes on the clock.</p>
          </div>
          <div className="step">
            <div className="num">02</div>
            <div className="t">Pick a time</div>
            <p>Last games begin 1 hour before closing. Book at least 2 hours ahead.</p>
          </div>
          <div className="step">
            <div className="num">03</div>
            <div className="t">Get your confirmation</div>
            <p>A confirmation email lands right away. Arrive 20 minutes early for your briefing.</p>
          </div>
        </div>

        
        <p style={{fontSize: '15px', lineHeight: '1.7', color: 'var(--body)', margin: '6px 4px 0'}}>Room to Escape rooms in Fort Wayne are designed for many room escape enthusiasts. Perfect for first-time guests or for the hardened escape artist veteran. Book today to reserve your spot in one of our themed rooms. Ideal for birthday parties, youth group activity, bachelor party, bachelorette party, corporate outing, date nights, anniversaries, family gatherings. Working together is your "key" to escaping and claiming victory.</p>
      </div>

      
      <aside style={{width: '380px', flexShrink: '0', display: 'flex', flexDirection: 'column', gap: '16px'}}>
        <div className="panel">
          <div style={{height: '180px'}}><img src="/images/booking-reassure-sm.webp" alt="A game master welcoming guests" loading="lazy" style={{width: '100%', height: '100%', objectFit: 'cover'}} /></div>
          <div className="panel-pad" style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
            <div className="panel-title">First time? You'll be fine.</div>
            <p style={{fontSize: '14.5px', lineHeight: '1.6', margin: '0'}}>Our rooms are designed for first-time guests and veteran escape artists alike. Your game master briefs you before the clock starts and can offer hints along the way.</p>
            
            <p style={{fontSize: '14px', lineHeight: '1.6', margin: '0', color: 'var(--muted)'}}>Can't make it? We're unable to refund appointments, but we will make every possible attempt to reschedule a future game for you — just call us. <Link className="text-link" href="/faq.html">Full policy in the FAQ</Link>.</p>
          </div>
        </div>
        <div className="panel panel-dark panel-pad" style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
          <div className="label">Find us</div>
          <div style={{fontSize: '15px', lineHeight: '1.7'}}>Room To Escape<br />3734 Allen Ave, Fort Wayne, IN 46805</div>
          <div style={{fontSize: '15px'}}>Questions? Call <a href="tel:2606938836" style={{color: 'var(--red-bright)', fontWeight: '700'}}>260-693-8836</a></div>
          <hr />
          <div style={{fontSize: '14px', lineHeight: '1.8'}}>Tue–Thu · 11:00–7:00<br />Fri · 11:00–9:00<br />Sat · 11:00–9:00<br /><span style={{color: 'var(--muted)', fontSize: '13px'}}>Last games begin 1 hour before closing.</span></div>
        </div>
        <div className="panel panel-pad" style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
          <div className="label">Great for</div>
          <p style={{fontSize: '14.5px', lineHeight: '1.75', margin: '0'}}>Birthday parties · youth groups · bachelor &amp; bachelorette parties · corporate outings · date nights · anniversaries · family gatherings</p>
          <Link className="text-link" href="/parties-and-events.html" style={{fontSize: '14.5px'}}>Planning a group event? →</Link>
        </div>
      </aside>
    </div>
  </section>
    </>
  );
}
