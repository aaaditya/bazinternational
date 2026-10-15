import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Ocean freight, air freight, road and inland connections, and customs clearance from Baz International.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="atmosphere border-b border-line py-16 md:py-24">
        <div className="site-shell max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-sea uppercase">Services</p>
          <h1 className="mt-3 font-display text-4xl tracking-wide text-sea-deep uppercase md:text-5xl">
            Freight solutions across sea, air, and land
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            {site.name} organises FCL, LCL, and air shipments at competitive rates, with customs
            support and door-to-door inland connections when your cargo needs more than one mode.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="site-shell space-y-20">
          {services.map((service, index) => {
            const reverse = index % 2 === 1;
            return (
              <article
                key={service.slug}
                id={service.slug}
                className="scroll-mt-28 grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                <div className={`relative min-h-[280px] overflow-hidden md:min-h-[360px] ${reverse ? "lg:order-2" : ""}`}>
                  <Image
                    src={service.image}
                    alt={`${service.title} operations`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className={reverse ? "lg:order-1" : ""}>
                  <p className="font-display text-5xl text-sea/25">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-2 font-display text-3xl tracking-wide text-sea-deep uppercase">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-ink-soft">{service.body}</p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex bg-signal px-5 py-3 text-sm font-semibold text-white transition hover:bg-signal-hover"
                  >
                    Ask about {service.title.toLowerCase()}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
