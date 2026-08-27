"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="form-thanks" role="status">
        <p style={{ fontSize: "16px", lineHeight: "1.65", margin: 0, color: "var(--ink)" }}>
          Thanks — this is a demonstration site, so nothing was sent. On a live venue this
          message would go to the team.
        </p>
        <p style={{ fontSize: "14.5px", lineHeight: "1.6", margin: 0 }}>
          Call{" "}
          <a className="text-link" href="tel:2175550182">
            (217) 555-0182
          </a>{" "}
          to see how a real venue would take an enquiry.
        </p>
        <button type="button" className="btn btn-outline btn-sm" onClick={() => setSent(false)}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      className="contact-form"
      style={{ display: "flex", flexDirection: "column", gap: "18px" }}
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
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
          <input id="cf-phone" name="phone" type="tel" required placeholder="(217) 555-0182" autoComplete="tel" />
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}
