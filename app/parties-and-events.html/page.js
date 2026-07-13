import Link from "next/link";

export const metadata = {
  title: "Room to Escape Game | Parties and Events - Room to Escape | Fort Wayne Room to Escape",
  description: "Find out why Room to Escape is one of the top things to do in Fort Wayne! Book our escape rooms for birthday parties, celebrations and corporate teambuilding.",
  alternates: { canonical: "/parties-and-events.html" },
  openGraph: {
    type: "website",
    siteName: "Room to Escape",
    url: "https://www.roomtoescape.com/parties-and-events.html",
    title: "Parties & Events — Room to Escape Fort Wayne",
    description: "Find out why Room to Escape is one of the top things to do in Fort Wayne! Book our escape rooms for birthday parties, celebrations and corporate teambuilding.",
    images: "https://www.roomtoescape.com/images/groups-birthday.webp",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page_parties_and_events() {
  return (
    <>
<section className="page-head">
    <div className="container stack">
      
      <h1 className="eyebrow" style={{margin: '0'}}>things to do in fort wayne</h1>
      <p className="h1" style={{margin: '0'}}>Parties and Events</p>
      <p className="lede" style={{margin: '0'}}>Birthdays, corporate teams, youth groups, reunions — we set up, we clean up, and we provide the entertainment.</p>
    </div>
  </section>

  
  <section className="section-tight section-alt">
    <div className="container" style={{display: 'flex', gap: '52px', alignItems: 'flex-start'}} data-split>
      <div style={{flex: '1.3', display: 'flex', flexDirection: 'column', gap: '16px'}}>
        <h2 className="section-title">Parties</h2>
        <p style={{fontSize: '16px', lineHeight: '1.7', margin: '0'}}>We have a great idea for your next birthday party or event. Try an escape room! Whether you're celebrating a "Sweet Sixteen" a "Fabulous at Fifty," or just getting together with friends, make Room to Escape your destination.</p>
        <p style={{fontSize: '16px', lineHeight: '1.7', margin: '0'}}><strong style={{color: 'var(--ink)'}}>#1 Reason to Book With Us: We make it easy.</strong> We set up, we clean up, and we provide the entertainment. All you have to do is show up! From beginning to end, the friendly staff at Room to Escape will be here to help you and your guests have a great time.</p>
        <p style={{fontSize: '16px', lineHeight: '1.7', margin: '0'}}>Room to Escape is an "all-ages" venue. Our escape experiences are kid-friendly, teen-approved, and they're also loads of fun for the grown-ups. Although most of our guests are adults, we welcome kids, too. Our escape experiences are recommended for kids 12 and up but we can also plan activities for younger children.</p>
        <p style={{fontSize: '16px', lineHeight: '1.7', margin: '0'}}>You can choose from several themes. Does the guest of honor like murder mysteries? Our <Link className="text-link" href="/dining-room-caper.html">Dining Room Caper</Link> might be the perfect fit. If they are into magic, <Link className="text-link" href="/the-disappearing-act.html">the disappearing act</Link> is great fun.</p>
        <p style={{fontSize: '16px', lineHeight: '1.7', margin: '0'}}>We can accommodate parties of various sizes. You can book an experience for 2 or book the whole room for 12. Larger groups of up to 24 can book two rooms for a friendly competition. You can even book a "party for one." We'll make it happen!</p>
        <p style={{fontSize: '16px', lineHeight: '1.7', margin: '0'}}>We photograph each group at the end of an escape experience or event and the downloadable photo is yours to save or print.</p>
      </div>
      <div style={{width: '440px', flexShrink: '0', display: 'flex', flexDirection: 'column', gap: '16px'}}>
        <div style={{borderRadius: 'var(--radius)', overflow: 'hidden'}}><img src="/images/groups-birthday-sm.webp" alt="A birthday party group at Room to Escape" loading="lazy" /></div>
        <div style={{borderRadius: 'var(--radius)', overflow: 'hidden'}}><img src="/images/groups-corporate-sm.webp" alt="A corporate team-building group" loading="lazy" /></div>
      </div>
    </div>
  </section>

  
  <section className="section-tight">
    <div className="container">
      <div className="section-head">
        <h2 className="section-title">Group <span className="hl">pricing</span></h2>
        <span className="section-note">$29.95 per person · $89.85 minimum covers up to 3 players</span>
      </div>
      <div className="compare-wrap">
        <table className="compare">
          <thead><tr><th scope="col">Group size</th><th scope="col">Price</th><th scope="col">Works out to</th><th scope="col"></th></tr></thead>
          <tbody>
            <tr><td className="room-name">4 players</td><td><strong>$119.80</strong></td><td>$29.95 per person · one room</td><td><Link className="btn btn-primary btn-sm" href="/book-a-game.html">Book Now</Link></td></tr>
            <tr><td className="room-name">6 players</td><td><strong>$179.70</strong></td><td>$29.95 per person · one room</td><td><Link className="btn btn-primary btn-sm" href="/book-a-game.html">Book Now</Link></td></tr>
            <tr><td className="room-name">8 players</td><td><strong>$239.60</strong></td><td>$29.95 per person · Disappearing Act or Dining Room Caper</td><td><Link className="btn btn-primary btn-sm" href="/book-a-game.html">Book Now</Link></td></tr>
            <tr><td className="room-name">Up to 24</td><td>Two rooms, head-to-head</td><td>A friendly competition across two games</td><td><a className="btn btn-outline btn-sm" href="tel:2606938836">Call to plan</a></td></tr>
            <tr><td className="room-name">Whole facility</td><td>Call for rates</td><td>Private full-facility rental at a premium — <a className="text-link" href="tel:2606938836">260-693-8836</a></td><td><a className="btn btn-outline btn-sm" href="tel:2606938836">Call us</a></td></tr>
          </tbody>
        </table>
      </div>
      <p className="section-note" style={{marginTop: '14px'}}>Age guidance, payment and the 3-player minimum are covered in the <Link className="text-link" href="/faq.html">FAQ</Link>.</p>
    </div>
  </section>

  
  <section className="section-tight section-alt">
    <div className="container" style={{display: 'flex', gap: '32px', alignItems: 'flex-start'}} data-split>
      <div style={{flex: '1', display: 'flex', flexDirection: 'column', gap: '16px'}}>
        <h2 className="section-title">Events</h2>
        <p style={{fontSize: '16px', lineHeight: '1.7', margin: '0'}}>Room To Escape offers, at no cost, an event planner to help you create the perfect party or event. We aim to see that you and your guests have a lot of fun. Contact us and she will get back to you to answer your questions and help you plan the perfect celebration or affair.</p>
        <p style={{fontSize: '16px', lineHeight: '1.7', margin: '0'}}>Planning a team-building day? Teamwork makes the dream work — spend one action-packed hour solving clues, working on puzzles, and communicating in a way you just can't at the office. See our <Link className="text-link" href="/events.html">events page</Link> for occasion ideas.</p>
        <div className="panel panel-dark panel-pad" style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
          <div className="label">Prefer to talk it through?</div>
          <p style={{fontSize: '15px', lineHeight: '1.65', margin: '0'}}>Call <a href="tel:2606938836" style={{color: 'var(--red-bright)', fontWeight: '700'}}>260-693-8836</a> — we may be mid-game, so leave a message and our event planner will call you back.</p>
        </div>
      </div>
      <div className="panel" style={{flex: '1.2', padding: '30px 34px 34px', display: 'flex', flexDirection: 'column', gap: '16px'}}>
        <div>
          <h3 className="panel-title" style={{fontSize: '22px'}}>Plan my event</h3>
          <p style={{fontSize: '13.5px', color: 'var(--muted)', margin: '6px 0 0'}}>Tell us the basics and our event planner will get back to you. This is an enquiry, not a booking.</p>
        </div>
        
        <form method="post" action="#" style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
          <div className="form-grid">
            <div className="field"><label htmlFor="ev-name">Name *</label><input id="ev-name" name="name" required placeholder="Your name" /></div>
            <div className="field"><label htmlFor="ev-email">Email *</label><input id="ev-email" name="email" type="email" required placeholder="you@example.com" /></div>
            <div className="field"><label htmlFor="ev-phone">Phone</label><input id="ev-phone" name="phone" type="tel" placeholder="(260) 555-0123" /></div>
            <div className="field"><label htmlFor="ev-date">Preferred date</label><input id="ev-date" name="date" type="date" /></div>
            <div className="field"><label htmlFor="ev-size">Group size *</label>
              <select id="ev-size" name="group_size" required>
                <option value="">Select…</option><option>2–3</option><option>4–6</option><option>7–8</option><option>9–12</option><option>13–24</option><option>25+ / full facility</option>
              </select>
            </div>
            <div className="field"><label htmlFor="ev-occasion">Occasion *</label>
              <select id="ev-occasion" name="occasion" required>
                <option value="">Select…</option><option>Birthday</option><option>Corporate / team building</option><option>Youth or church group</option><option>Bachelor / bachelorette</option><option>Reunion</option><option>Other</option>
              </select>
            </div>
          </div>
          <div className="field"><label htmlFor="ev-notes">Anything else?</label><textarea id="ev-notes" name="notes" rows="3" placeholder="Tell us about your group"></textarea></div>
          <div><button type="submit" className="btn btn-primary">Send enquiry</button></div>
        </form>
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
