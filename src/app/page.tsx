import Image from "next/image";
import Link from "next/link";
import { HeroMap } from "@/components/HeroMap";
import { HeroQuote } from "@/components/HeroQuote";
import {
  cargoTypes,
  homeCopy,
  images,
  pillars,
  services,
  site,
} from "@/content/site";

const marqueeItems = ["FCL", "LCL", "Air cargo", "Customs clearance", "Door-to-door", ...cargoTypes];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#e6f1f3_0%,#f1f7f8_55%,#f7fafb_100%)] text-ink">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(26,107,122,0.22),transparent_65%)] blur-2xl" />
          <div className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.22),transparent_65%)] blur-2xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(16,38,47,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,38,47,0.05)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_50%_30%,#000_20%,transparent_75%)]" />
        </div>

        <div className="site-shell pt-14 md:pt-20">
          <p className="animate-rise inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-3.5 py-1.5 text-xs font-semibold tracking-[0.16em] text-sea-deep uppercase shadow-sm backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-amber-500" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
            </span>
            {homeCopy.heroEyebrow}
          </p>

          <h1 className="animate-rise-delay-1 mt-6 max-w-4xl font-display text-[2.6rem] leading-[1.02] font-semibold tracking-tight uppercase sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            <span className="block text-sea-deep">{homeCopy.heroHeadlineLead}</span>
            <span className="text-shimmer block">{homeCopy.heroHeadlineAccent}</span>
            <span className="block text-sea/55">{homeCopy.heroHeadlineTail}</span>
          </h1>

          <div className="animate-rise-delay-2 mt-7 grid gap-6 md:grid-cols-[minmax(0,34rem)_1fr] md:items-end">
            <p className="text-base leading-relaxed text-ink-soft sm:text-lg">{homeCopy.heroSupport}</p>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                href="/services"
                className="rounded-sm border border-sea-deep/35 bg-white/60 px-5 py-3 text-sm font-semibold text-sea-deep backdrop-blur transition hover:border-sea-deep hover:bg-white"
              >
                {homeCopy.heroCtaSecondary}
              </Link>
              <a
                href={site.phoneHref}
                className="rounded-sm bg-sea-deep px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-10px_rgba(13,61,72,0.7)] transition hover:bg-sea"
              >
                Call us now
              </a>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-6 max-w-[1400px] px-2 sm:px-6 md:mt-0">
          <div className="float-slow">
            <HeroMap />
          </div>
        </div>

        <div className="site-shell relative z-10 -mt-4 pb-10 md:-mt-14 md:pb-14">
          <HeroQuote />
          <p className="mt-3 text-center text-xs text-ink-soft/80">
            Tell us the lane — we reply with a practical plan, not a template.
          </p>
        </div>

        <div className="border-y border-line bg-white/60 py-3.5 backdrop-blur">
          <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
            <ul className="marquee-track gap-10 pr-10 text-sm font-semibold tracking-[0.14em] text-sea-deep/75 uppercase">
              {[...marqueeItems, ...marqueeItems].map((item, index) => (
                <li key={`${item}-${index}`} className="flex items-center gap-10 whitespace-nowrap">
                  {item}
                  <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-signal" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="atmosphere py-20 md:py-28">
        <div className="site-shell">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-sea uppercase">Services</p>
            <h2 className="mt-3 font-display text-3xl tracking-wide text-sea-deep uppercase md:text-4xl">
              Modes that keep cargo moving
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">{homeCopy.servicesIntro}</p>
          </div>

          <div className="mt-12 divide-y divide-line border-y border-line">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="group grid gap-6 py-8 transition hover:bg-white/50 md:grid-cols-[140px_1fr_auto] md:items-center md:gap-10"
              >
                <span className="font-display text-4xl text-sea/35 transition group-hover:text-signal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl tracking-wide text-sea-deep uppercase">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-ink-soft">{service.short}</p>
                </div>
                <span className="text-sm font-semibold text-sea transition group-hover:text-signal">
                  View details →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="site-shell grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative min-h-[320px] overflow-hidden md:min-h-[420px]">
            <Image
              src={images.about}
              alt="Cargo vessel underway with containers stacked on deck"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-sea uppercase">Why Baz</p>
            <h2 className="mt-3 font-display text-3xl tracking-wide text-sea-deep uppercase md:text-4xl">
              You stay ahead with us
            </h2>
            <div className="mt-8 space-y-6">
              {pillars.map((pillar) => (
                <div key={pillar.title}>
                  <h3 className="font-display text-xl tracking-wide text-ink uppercase">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-ink-soft leading-relaxed">{pillar.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-mist/70 py-20 md:py-24">
        <div className="site-shell grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl tracking-wide text-sea-deep uppercase md:text-4xl">
              {homeCopy.coverageTitle}
            </h2>
            <p className="mt-4 max-w-xl text-ink-soft leading-relaxed">{homeCopy.coverageBody}</p>
          </div>
          <div>
            <h2 className="font-display text-3xl tracking-wide text-sea-deep uppercase md:text-4xl">
              {homeCopy.doorTitle}
            </h2>
            <p className="mt-4 max-w-xl text-ink-soft leading-relaxed">{homeCopy.doorBody}</p>
          </div>
        </div>

        <div className="site-shell mt-12">
          <p className="text-xs font-semibold tracking-[0.18em] text-sea uppercase">Cargo we move</p>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-ink">
            {cargoTypes.map((item) => (
              <li key={item} className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:bg-signal">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="site-shell flex flex-col items-start justify-between gap-8 border border-line bg-white/60 px-6 py-10 md:flex-row md:items-center md:px-10">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl tracking-wide text-sea-deep uppercase">
              Ready to move your next shipment?
            </h2>
            <p className="mt-3 text-ink-soft">
              Call{" "}
              <a href={site.phoneHref} className="font-semibold text-sea-deep underline decoration-signal decoration-2 underline-offset-4 hover:text-sea">
                {site.phone}
              </a>{" "}
              or write to{" "}
              <a href={site.emailHref} className="font-semibold break-all text-sea-deep underline decoration-signal decoration-2 underline-offset-4 hover:text-sea">
                {site.email}
              </a>{" "}
              — we will help you plan the route.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={site.phoneHref}
              className="bg-sea-deep px-5 py-3 text-sm font-semibold text-white transition hover:bg-sea"
            >
              Call now
            </a>
            <Link
              href="/contact"
              className="border border-sea-deep px-5 py-3 text-sm font-semibold text-sea-deep transition hover:bg-sea-deep hover:text-white"
            >
              Contact form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
