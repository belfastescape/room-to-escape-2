import Link from "next/link";

export const metadata = {
  title: "Try an Escape Room Challenge in Fort Wayne for Parties & More - Room to Escape | Fort Wayne Room to Escape",
  description: "Do you have questions about our escape room challenges in Fort Wayne? Contact us via online form or give us a call at 260-693-8836. Or, book online!",
  alternates: { canonical: "/contact.html" },
  openGraph: {
    type: "website",
    siteName: "Room to Escape",
    url: "https://www.roomtoescape.com/contact.html",
    title: "Contact Us — Room to Escape Fort Wayne",
    description: "Do you have questions about our escape room challenges in Fort Wayne? Contact us via online form or give us a call at 260-693-8836. Or, book online!",
    images: "https://www.roomtoescape.com/images/contact-exterior.webp",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page_contact() {
  return (
    <>
<section className="page-head">
    <div className="container stack">
      <p className="eyebrow" style={{margin: '0'}}>We're happy to help</p>
      
      <h1>Escape Room Contact Us</h1>
      <p className="lede" style={{margin: '0'}}>Questions about rooms, group sizes or events? Check the <Link href="/faq.html" style={{color: 'var(--red-bright)', fontWeight: '700'}}>FAQ</Link> first — then drop us a line or give us a call.</p>
    </div>
  </section>

  <section className="section-tight section-alt">
    <div className="container" style={{display: 'flex', gap: '32px', alignItems: 'flex-start'}} data-split>

      
      <div className="panel" style={{flex: '1.5', padding: '34px 38px 38px', display: 'flex', flexDirection: 'column', gap: '18px', minWidth: '0'}}>
        <div>
          <h2 className="panel-title" style={{fontSize: '24px'}}>Send us a message</h2>
          <p style={{fontSize: '13.5px', color: 'var(--muted)', margin: '6px 0 0'}}>This is a request for info only, not an actual booking. Fields marked * are required.</p>
        </div>
        
        <form method="post" action="#" className="contact-form" style={{display: 'flex', flexDirection: 'column', gap: '18px'}}>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="cf-first">First name *</label>
              <input id="cf-first" name="first_name" required placeholder="First" autoComplete="given-name" />
            </div>
            <div className="field">
              <label htmlFor="cf-last">Last name *</label>
              <input id="cf-last" name="last_name" required placeholder="Last" autoComplete="family-name" />
            </div>
            <div className="field">
              <label htmlFor="cf-email">Email *</label>
              <input id="cf-email" name="email" type="email" required placeholder="you@example.com" autoComplete="email" />
            </div>
            <div className="field">
              <label htmlFor="cf-phone">Phone number *</label>
              <input id="cf-phone" name="phone" type="tel" required placeholder="(260) 555-0123" autoComplete="tel" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="cf-company">Company (if applicable)</label>
            <input id="cf-company" name="company" placeholder="Company name" autoComplete="organization" />
          </div>
          <div className="field">
            <label htmlFor="cf-comment">Comment *</label>
            <textarea id="cf-comment" name="comment" rows="5" required placeholder="How can we help?"></textarea>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>

      
      <aside style={{width: '400px', flexShrink: '0', display: 'flex', flexDirection: 'column', gap: '16px'}}>
        <div className="panel">
          <div style={{height: '200px'}}><img src="/images/contact-exterior.webp" alt="The Room to Escape building at 3734 Allen Ave, Fort Wayne" loading="lazy" style={{width: '100%', height: '100%', objectFit: 'cover'}} /></div>
          <div className="panel-pad" style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
            <div className="panel-title">Come find us</div>
            <div style={{fontSize: '15px', lineHeight: '1.7'}}>3734 Allen Ave<br />Fort Wayne, IN 46805</div>
            <p style={{fontSize: '15px', lineHeight: '1.6', margin: '0'}}>Call <a className="text-link" href="tel:2606938836">260-693-8836</a> — we may be working a game and unable to answer, so please leave us a message.</p>
            <div style={{fontSize: '15px'}}>Email: <a className="text-link" href="mailto:info@roomtoescape.com">info@roomtoescape.com</a></div>
            <Link className="text-link" href="/location.html" style={{fontSize: '14.5px'}}>Directions &amp; parking →</Link>
          </div>
        </div>
        <div className="panel panel-dark panel-pad" style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
          <div className="label">Hours of operation</div>
          <div style={{fontSize: '15px', lineHeight: '1.9'}}>Tuesday–Thursday · 11:00–7:00<br />Friday · 11:00–9:00<br />Saturday · 11:00–9:00</div>
          <div style={{fontSize: '13px', color: 'var(--muted)'}}>Last games begin 1 hour before closing.</div>
        </div>
        <div className="panel panel-pad" style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
          <div className="label">Before you write</div>
          <p style={{fontSize: '14.5px', lineHeight: '1.65', margin: '0'}}>Most questions — group sizes, age guidance, what to expect — are answered on our <Link className="text-link" href="/faq.html">FAQ page</Link>.</p>
        </div>
      </aside>
    </div>
  </section>

  
  <section className="cta-band">
    <div className="container inner">
      <div>
        <div className="title">Ready when you are.</div>
        <div className="sub">Every game is private to your group — 60 minutes, $29.95 per person.</div>
      </div>
      <Link className="btn btn-dark" href="/book-a-game.html" style={{fontSize: '17px', padding: '18px 38px'}}>Book Now</Link>
    </div>
  </section>
    </>
  );
}
