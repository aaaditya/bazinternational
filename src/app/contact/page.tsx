import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} in Jaipur for freight quotes, customs support, and shipment planning.`,
};

export default function ContactPage() {
  return (
    <section className="atmosphere py-16 md:py-24">
      <div className="site-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-sea uppercase">Contact</p>
          <h1 className="mt-3 font-display text-4xl tracking-wide text-sea-deep uppercase md:text-5xl">
            Let&apos;s plan your shipment
          </h1>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            Share your lane, cargo type, and timeline. Our team will respond with a practical next
            step for ocean, air, inland, or customs support.
          </p>

          <div className="mt-10 space-y-8">
            <div>
              <h2 className="font-display text-xl tracking-wide text-sea-deep uppercase">Office</h2>
              <address className="mt-3 not-italic text-ink-soft leading-relaxed">
                <p className="font-semibold text-ink">{site.name}</p>
                {site.address.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </address>
            </div>

            <div>
              <h2 className="font-display text-xl tracking-wide text-sea-deep uppercase">Reach us</h2>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={site.phoneHref}
                    className="group flex items-center gap-4 border border-line bg-white/70 px-4 py-3.5 transition hover:border-sea hover:bg-white"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-sea-deep text-white">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
                      </svg>
                    </span>
                    <span>
                      <span className="block text-xs font-semibold tracking-[0.14em] text-sea uppercase">Tap to call</span>
                      <span className="block text-lg font-semibold text-ink underline decoration-signal decoration-2 underline-offset-4 group-hover:text-sea">
                        {site.phone}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={site.emailHref}
                    className="group flex items-center gap-4 border border-line bg-white/70 px-4 py-3.5 transition hover:border-sea hover:bg-white"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-sea-deep text-white">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="m3 7 9 6 9-6" />
                      </svg>
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold tracking-[0.14em] text-sea uppercase">Tap to email</span>
                      <span className="block break-all text-base font-semibold text-ink underline decoration-signal decoration-2 underline-offset-4 group-hover:text-sea">
                        {site.email}
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="enquiry" className="scroll-mt-28">
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
