import Link from "next/link";

export const metadata = {
  title: "Room To Escape: Events - Room to Escape | Fort Wayne Room to Escape",
  description: "Interested in booking a team building day or a special event? Contact Us to get rates!",
  alternates: { canonical: "/events.html" },
  openGraph: {
    type: "website",
    siteName: "Room to Escape",
    url: "https://www.roomtoescape.com/events.html",
    title: "Events — Room to Escape Fort Wayne",
    description: "Interested in booking a team building day or a special event? Contact Us to get rates!",
    images: "https://www.roomtoescape.com/images/groups-corporate.webp",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page_events() {
  return (
    <>
<section className="page-head">
    <div className="container stack">
      
      <h1 className="eyebrow" style={{margin: '0'}}>things to do in fort wayne</h1>
      <p className="h1" style={{margin: '0'}}>Events</p>
      <p className="lede" style={{margin: '0'}}>want to play a game?</p>
    </div>
  </section>

  <section className="section-tight section-alt">
    <div className="container">
      <div className="notice" style={{marginBottom: '30px'}}>
        <strong>Special Events:</strong> Interested in booking a room at Room to Escape? This is great for birthday parties, company events, school events, scouting events, church events and more! Please contact us for more information for any event at <a className="text-link" href="tel:2606938836">260-693-8836</a> — or use the <Link className="text-link" href="/parties-and-events.html">event enquiry form</Link>.
      </div>
      <div className="steps" style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
        <div className="step reveal">
          <div className="t">Corporate Events</div>
          <p>Take a break from the daily grind! Reserve the entire facility for a day of company fun! Please call for details.</p>
          <Link className="text-link" href="/contact.html" style={{fontSize: '14px'}}>Contact us →</Link>
        </div>
        <div className="step reveal">
          <div className="t">Birthdays</div>
          <p>Birthday parties at our place! You can bring in cake and drinks if you like! We will work with you to create a birthday party experience you will remember forever!</p>
          <Link className="text-link" href="/contact.html" style={{fontSize: '14px'}}>Contact us →</Link>
        </div>
        <div className="step reveal">
          <div className="t">Family/Scouting Events</div>
          <p>Children ages 10 and up LOVE our Escape Rooms, and are successful!</p>
          <Link className="text-link" href="/contact.html" style={{fontSize: '14px'}}>Contact us →</Link>
        </div>
        <div className="step reveal">
          <div className="t">Team-Building Activities</div>
          <p>Room to Escape is a fun team-building exercise. Teams work together in a close environment to solve complex problems and puzzles with a common end goal in mind.</p>
          <Link className="text-link" href="/contact.html" style={{fontSize: '14px'}}>Contact us →</Link>
        </div>
        <div className="step reveal">
          <div className="t">Reunions</div>
          <p>Skip the traditional park pavilion and opt for something fun and exciting to do with your family at Room To Escape, friends or classmates.</p>
          <Link className="text-link" href="/contact.html" style={{fontSize: '14px'}}>Contact us →</Link>
        </div>
        <div className="step reveal" style={{background: 'var(--dark)'}}>
          <div className="t" style={{color: '#fff'}}>Off-site events</div>
          <p style={{color: 'var(--on-dark)'}}>The Cinema Center Downtown Fort Wayne called Room To Escape with a request to set up at their yearly fundraising event as an entertainment for approximately 200 guests.</p>
          <Link className="text-link" href="/contact.html" style={{fontSize: '14px', color: 'var(--red-bright)'}}>Ask about yours →</Link>
        </div>
      </div>
      <p className="section-note" style={{marginTop: '26px'}}>Group pricing and the event enquiry form live on our <Link className="text-link" href="/parties-and-events.html">Parties &amp; Events page</Link>.</p>
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
