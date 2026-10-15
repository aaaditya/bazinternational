"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/content/site";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const mode = String(data.get("mode") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Freight enquiry from ${name || "website"}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Mode: ${mode}`,
        "",
        message,
      ].join("\n"),
    );

    // Opens the visitor's mail client with a prefilled enquiry (not an in-app route).
    window.location.assign(`mailto:${site.email}?subject=${subject}&body=${body}`);
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 border border-line bg-white/70 p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-2 block font-medium text-ink">Name</span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            className="w-full border border-line bg-paper px-3 py-2.5 outline-none transition focus:border-sea"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-2 block font-medium text-ink">Email</span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="w-full border border-line bg-paper px-3 py-2.5 outline-none transition focus:border-sea"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-2 block font-medium text-ink">Phone</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full border border-line bg-paper px-3 py-2.5 outline-none transition focus:border-sea"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-2 block font-medium text-ink">Shipment mode</span>
          <select
            name="mode"
            className="w-full border border-line bg-paper px-3 py-2.5 outline-none transition focus:border-sea"
            defaultValue="Ocean freight"
          >
            <option>Ocean freight</option>
            <option>Air freight</option>
            <option>Road & inland</option>
            <option>Customs clearance</option>
            <option>Multimodal / door-to-door</option>
          </select>
        </label>
      </div>

      <label className="block text-sm">
        <span className="mb-2 block font-medium text-ink">Cargo details</span>
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Origin, destination, cargo type, and preferred timeline"
          className="w-full resize-y border border-line bg-paper px-3 py-2.5 outline-none transition focus:border-sea"
        />
      </label>

      <button
        type="submit"
        className="inline-flex items-center justify-center bg-signal px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-signal-hover"
      >
        Send enquiry
      </button>

      {submitted ? (
        <p className="text-sm text-sea-deep">
          Opening your email client to reach {site.email}. If nothing opens, email us directly.
        </p>
      ) : null}
    </form>
  );
}
