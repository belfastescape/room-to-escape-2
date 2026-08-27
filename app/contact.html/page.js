import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us — Cipher & Key",
  description: "Do you have questions about our escape room challenges in Springfield? Contact us via online form or give us a call at (217) 555-0182. Or, book online!",
  alternates: { canonical: "/contact.html" },
  openGraph: {
    type: "website",
    siteName: "Cipher & Key",
    url: "https://www.cipherandkey.com/contact.html",
    title: "Contact Us — Cipher & Key Springfield",
    description: "Do you have questions about our escape room challenges in Springfield? Contact us via online form or give us a call at (217) 555-0182. Or, book online!",
    images: "https://www.cipherandkey.com/images/contact-exterior.webp",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page_contact() {
  return (
    <>
<section className="page-head">
    <div className="container stack">
      <p className="eyebrow" style={{margin: '0'}}>We're happy to help</p>
      
      <h1>Contact Us</h1>
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
        
        <ContactForm />
      </div>

      
      <aside style={{width: '400px', flexShrink: '0', display: 'flex', flexDirection: 'column', gap: '16px'}}>
        <div className="panel">
          <div style={{height: '200px'}}><img src="/images/contact-exterior.webp" alt="The Cipher & Key building at 1200 Kestrel Street, Springfield" loading="lazy" style={{width: '100%', height: '100%', objectFit: 'cover'}} /></div>
          <div className="panel-pad" style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
            <div className="panel-title">Come find us</div>
            <div style={{fontSize: '15px', lineHeight: '1.7'}}>1200 Kestrel Street<br />Springfield, IL 62704</div>
            <p style={{fontSize: '15px', lineHeight: '1.6', margin: '0'}}>Call <a className="text-link" href="tel:2175550182">(217) 555-0182</a> — we may be working a game and unable to answer, so please leave us a message.</p>
            <div style={{fontSize: '15px'}}>Email: <a className="text-link" href="mailto:hello@cipherandkey.com">hello@cipherandkey.com</a></div>
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
