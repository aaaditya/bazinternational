import type { Metadata } from "next";
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
              <ul className="mt-3 space-y-2 text-ink-soft">
                <li>
                  <a href={site.phoneHref} className="font-medium text-ink hover:text-sea">
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a href={site.emailHref} className="break-all font-medium text-ink hover:text-sea">
                    {site.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
