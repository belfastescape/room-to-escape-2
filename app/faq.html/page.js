import Link from "next/link";

export const metadata = {
  title: "Escape Room | FAQ - Cipher & Key | Springfield Cipher & Key",
  description: "Located in Springfield, we offer five unique escape rooms with varying levels of difficulty for families, friends, and coworkers to enjoy. Book now!",
  alternates: { canonical: "/faq.html" },
  openGraph: {
    type: "website",
    siteName: "Cipher & Key",
    url: "https://www.cipherandkey.com/faq.html",
    title: "FAQ — Cipher & Key Springfield",
    description: "Located in Springfield, we offer five unique escape rooms with varying levels of difficulty for families, friends, and coworkers to enjoy. Book now!",
    images: "https://www.cipherandkey.com/images/home-venue.webp",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page_faq() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Will there be other people in the room with us?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"No, it is not our policy to ask you to share the room with people you don't know.\"}},{\"@type\":\"Question\",\"name\":\"How do I book a game?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"You can choose the day and room that you want to play by booking our escape room at Cipher & Key , however, if you have any questions about booking a game, please feel free to call us as well. To book a game you must book two hours before the start of the game or call to confirm a game master is available to run the game.\"}},{\"@type\":\"Question\",\"name\":\"How early should I arrive for my game?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Please arrive at least 20 minutes before your 60-minute start time. Games generally begin exactly at their start times and being late might cause you to have less than sixty minutes to play.\"}},{\"@type\":\"Question\",\"name\":\"Where are you located?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"We are located at 1200 Kestrel Street, Springfield, IL 62704. Two blocks east of the Riverside retail park, with free parking on site.\"}},{\"@type\":\"Question\",\"name\":\"How do I pay?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Games are paid online at the time of booking. A person can pay as a \\\"walk-in\\\" but there is no assurance that space will be available to play when you want unless you book online. We suggest one person book the number of slots in the game for the whole group.\"}},{\"@type\":\"Question\",\"name\":\"Can you accommodate large parties or corporate events?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes, we accommodate large parties and corporate groups frequently in our Springfield escape rooms. Please visit our website to book your games. If you would like help booking your large group or would like to rent out our facility at a premium please contact us directly by calling (217) 555-0182 .\"}},{\"@type\":\"Question\",\"name\":\"How many can play at a time?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Each escape room is designed for small groups. Some game rooms can handle up to 8 people per game, and the suggested minimum number is listed per room on the booking page. Please contact us for special requests or about special accommodations. We have a minimum charge of $89.85 which covers up to three people. After that, there is a $29.95 charge for each additional player over three. While one or two people can play, since they will be charged for three we urge them to bring along a friend because it tends to make the game both easier and more fun. \\\"The more the merrier.\\\"\"}},{\"@type\":\"Question\",\"name\":\"Is there an age limit?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Players that are 15 and under must be accompanied by an adult. With that said, we frequently have families come with one or two younger kids and they have a great time. However, the game is designed for people 12 years old and up.\"}},{\"@type\":\"Question\",\"name\":\"How long is each game?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Each game is designed for 60 minutes of intense fun! Plan to spend 20 minutes before each game preparing and briefing and 10 minutes after each game to debrief and take photos.\"}},{\"@type\":\"Question\",\"name\":\"What happens if I can't make it to my scheduled game, can I reschedule or cancel and get a refund?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Unfortunately, due to the coordination and planning involved in preparing each escape room, we are unable to refund appointments, however, we will make every possible attempt to reschedule a future game for you.\"}}]}" }}
      />
<section className="page-head">
    <div className="container stack">
      
      <h1 className="eyebrow" style={{margin: '0'}}>things to do in springfield</h1>
      <p className="h1" style={{margin: '0'}}>Frequently Asked Questions</p>
      <p className="lede" style={{margin: '0'}}>Every answer below is exactly as our team wrote it — group sizes, ages, pricing and policies.</p>
    </div>
  </section>

  <section className="section-tight section-alt">
    <div className="container" style={{maxWidth: '860px'}}>
      <details className="faq-item" open>
        <summary>Will there be other people in the room with us?</summary>
        <div className="answer">No, it is not our policy to ask you to share the room with people you don't know.</div>
      </details>
      <details className="faq-item">
        <summary>How do I book a game?</summary>
        <div className="answer">You can choose the day and room that you want to play by <Link className="text-link" href="/book-a-game.html">booking our escape room at Cipher & Key</Link>, however, if you have any questions about booking a game, please feel free to call us as well.<br /><br />To book a game you must book two hours before the start of the game or call to confirm a game master is available to run the game.</div>
      </details>
      <details className="faq-item">
        <summary>How early should I arrive for my game?</summary>
        <div className="answer">Please arrive at least 20 minutes before your 60-minute start time. Games generally begin exactly at their start times and being late might cause you to have less than sixty minutes to play.</div>
      </details>
      <details className="faq-item">
        <summary>Where are you located?</summary>
        <div className="answer">We are located at 1200 Kestrel Street, Springfield, IL 62704. Two blocks east of the Riverside retail park, with free parking on site.</div>
      </details>
      <details className="faq-item">
        <summary>How do I pay?</summary>
        <div className="answer">Games are paid online at the time of booking. A person can pay as a "walk-in" but there is no assurance that space will be available to play when you want unless you book online. We suggest one person book the number of slots in the game for the whole group.</div>
      </details>
      <details className="faq-item">
        <summary>Can you accommodate large parties or corporate events?</summary>
        <div className="answer">Yes, we accommodate large parties and corporate groups frequently in our Springfield escape rooms. Please visit our website to book your games. If you would like help booking your large group or would like to rent out our facility at a premium please contact us directly by calling <a className="text-link" href="tel:2175550182">(217) 555-0182</a>.</div>
      </details>
      <details className="faq-item">
        <summary>How many can play at a time?</summary>
        <div className="answer">Each escape room is designed for small groups. Some game rooms can handle up to 8 people per game, and the suggested minimum number is listed per room on the booking page. Please contact us for special requests or about special accommodations.<br /><br />We have a minimum charge of $89.85 which covers up to three people. After that, there is a $29.95 charge for each additional player over three. While one or two people can play, since they will be charged for three we urge them to bring along a friend because it tends to make the game both easier and more fun. "The more the merrier."</div>
      </details>
      <details className="faq-item">
        <summary>Is there an age limit?</summary>
        <div className="answer">Players that are 15 and under must be accompanied by an adult. With that said, we frequently have families come with one or two younger kids and they have a great time. However, the game is designed for people 12 years old and up.</div>
      </details>
      <details className="faq-item">
        <summary>How long is each game?</summary>
        <div className="answer">Each game is designed for 60 minutes of intense fun! Plan to spend 20 minutes before each game preparing and briefing and 10 minutes after each game to debrief and take photos.</div>
      </details>
      <details className="faq-item">
        <summary>What happens if I can't make it to my scheduled game, can I reschedule or cancel and get a refund?</summary>
        <div className="answer">Unfortunately, due to the coordination and planning involved in preparing each escape room, we are unable to refund appointments, however, we will make every possible attempt to reschedule a future game for you.</div>
      </details>
      <div className="notice" style={{marginTop: '26px'}}>
        <strong>Still curious?</strong> Call <a className="text-link" href="tel:2175550182">(217) 555-0182</a> or use the <Link className="text-link" href="/contact.html">contact form</Link> — we may be working a game, so please leave a message.
      </div>
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
