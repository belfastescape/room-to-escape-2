"use client";

import { useState } from "react";

export default function EventEnquiryForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="form-thanks" role="status">
        <p style={{ fontSize: "16px", lineHeight: "1.65", margin: 0, color: "var(--ink)" }}>
          Thanks — this is a demonstration site, so nothing was sent. On a live venue this
          enquiry would go to the event planner.
        </p>
        <p style={{ fontSize: "14.5px", lineHeight: "1.6", margin: 0 }}>
          Call{" "}
          <a className="text-link" href="tel:2175550182">
            (217) 555-0182
          </a>{" "}
          to see how a real venue would take a group booking.
        </p>
        <button type="button" className="btn btn-outline btn-sm" onClick={() => setSent(false)}>
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="form-grid">
        <div className="field">
          <label htmlFor="ev-name">Name *</label>
          <input id="ev-name" name="name" required placeholder="Your name" />
        </div>
        <div className="field">
          <label htmlFor="ev-email">Email *</label>
          <input id="ev-email" name="email" type="email" required placeholder="you@example.com" />
        </div>
        <div className="field">
          <label htmlFor="ev-phone">Phone</label>
          <input id="ev-phone" name="phone" type="tel" placeholder="(217) 555-0182" />
        </div>
        <div className="field">
          <label htmlFor="ev-date">Preferred date</label>
          <input id="ev-date" name="date" type="date" />
        </div>
        <div className="field">
          <label htmlFor="ev-size">Group size *</label>
          <select id="ev-size" name="group_size" required>
            <option value="">Select…</option>
            <option>2–3</option>
            <option>4–6</option>
            <option>7–8</option>
            <option>9–12</option>
            <option>13–24</option>
            <option>25+ / full facility</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="ev-occasion">Occasion *</label>
          <select id="ev-occasion" name="occasion" required>
            <option value="">Select…</option>
            <option>Birthday</option>
            <option>Corporate / team building</option>
            <option>Youth or church group</option>
            <option>Bachelor / bachelorette</option>
            <option>Reunion</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="ev-notes">Anything else?</label>
        <textarea id="ev-notes" name="notes" rows="3" placeholder="Tell us about your group"></textarea>
      </div>
      <div>
        <button type="submit" className="btn btn-primary">
          Send enquiry
        </button>
      </div>
    </form>
  );
}
