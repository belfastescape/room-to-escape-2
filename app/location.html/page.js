import Link from "next/link";

export const metadata = {
  title: "Location — Cipher & Key",
  description: "Cipher & Key is located in central Springfield with free on-site parking — great for birthday parties, team building and other group outings. Book online now!",
  alternates: { canonical: "/location.html" },
  openGraph: {
    type: "website",
    siteName: "Cipher & Key",
    url: "https://www.cipherandkey.com/location.html",
    title: "Location & Hours — Cipher & Key Springfield",
    description: "Cipher & Key is located in central Springfield with free on-site parking — great for birthday parties, team building and other group outings. Book online now!",
    images: "https://www.cipherandkey.com/images/contact-exterior.webp",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page_location() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"LocalBusiness\",\"name\":\"Cipher & Key\",\"url\":\"https://www.cipherandkey.com/\",\"telephone\":\"+1-217-555-0182\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"1200 Kestrel Street\",\"addressLocality\":\"Springfield\",\"addressRegion\":\"IL\",\"postalCode\":\"62704\",\"addressCountry\":\"US\"},\"openingHoursSpecification\":[{\"@type\":\"OpeningHoursSpecification\",\"dayOfWeek\":[\"Tuesday\",\"Wednesday\",\"Thursday\"],\"opens\":\"11:00\",\"closes\":\"19:00\"},{\"@type\":\"OpeningHoursSpecification\",\"dayOfWeek\":[\"Friday\",\"Saturday\"],\"opens\":\"11:00\",\"closes\":\"21:00\"}]}" }}
      />
<section className="page-head">
    <div className="container stack">
      
      <p className="eyebrow" style={{margin: '0'}}>escape room springfield location</p>
      <h1 style={{margin: '0'}}>Location</h1>
      <p className="lede" style={{margin: '0'}}>Cipher & Key is located at 1200 Kestrel Street, Springfield, IL 62704, two blocks east of the Riverside retail park.</p>
    </div>
  </section>

  <section className="section-tight section-alt">
    <div className="container" style={{display: 'flex', gap: '32px', alignItems: 'stretch', flexWrap: 'wrap'}}>
      <div style={{flex: '1.5', minWidth: '320px', borderRadius: 'var(--radius)', overflow: 'hidden', background: 'var(--bg)', minHeight: '420px'}}>
        <iframe src="https://www.google.com/maps?q=1200+Kestrel+Street,+Springfield,+IL+62704&output=embed" title="Map to Cipher & Key, 1200 Kestrel Street, Springfield" style={{width: '100%', height: '100%', minHeight: '420px', border: '0'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <aside className="location-aside" style={{width: '380px', flexShrink: '0', display: 'flex', flexDirection: 'column', gap: '16px'}}>
        <div className="panel panel-pad" style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
          <div className="panel-title">Finding us is the easy puzzle</div>
          <p style={{fontSize: '15px', lineHeight: '1.7', margin: '0'}}>1200 Kestrel Street, Springfield, IL 62704.<br />Two blocks east of the Riverside retail park, with free parking on site.</p>
          <a className="btn btn-outline btn-sm" href="https://www.google.com/maps/dir/?api=1&destination=1200+Kestrel+Street,+Springfield,+IL+62704" rel="noopener" style={{alignSelf: 'flex-start'}}>Get directions</a>
        </div>
        <div className="panel panel-dark panel-pad" style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
          <div className="label">Hours of operation</div>
          <div style={{fontSize: '15px', lineHeight: '1.9'}}>Tuesday–Thursday · 11:00–7:00<br />Friday · 11:00–9:00<br />Saturday · 11:00–9:00</div>
          <div style={{fontSize: '13px', color: 'var(--muted)'}}>Last games begin 1 hour before closing.</div>
          <hr />
          <div style={{fontSize: '15px'}}>Call <a href="tel:2175550182" style={{color: 'var(--red-bright)', fontWeight: '700'}}>(217) 555-0182</a></div>
        </div>
        <div className="panel panel-pad" style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
          <div className="label">Arriving for a game?</div>
          <p style={{fontSize: '14.5px', lineHeight: '1.65', margin: '0'}}>Please arrive at least 20 minutes before your start time for your briefing — games begin exactly on the clock.</p>
        </div>
      </aside>
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
