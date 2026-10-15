import Image from "next/image";
import Link from "next/link";
import {
  cargoTypes,
  homeCopy,
  images,
  pillars,
  services,
  site,
} from "@/content/site";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden text-white">
        <Image
          src={images.hero}
          alt="Container ship and port cranes at a busy freight terminal"
          fill
          priority
          className="animate-hero-media object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(8,28,34,0.88)_0%,rgba(8,28,34,0.62)_48%,rgba(8,28,34,0.28)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(217,119,6,0.18),transparent_40%)]" />

        <div className="site-shell relative flex min-h-[100svh] flex-col justify-end pb-16 pt-28 md:pb-24">
          <p className="animate-rise font-display text-4xl tracking-[0.08em] text-white uppercase sm:text-5xl md:text-6xl lg:text-7xl">
            {site.name}
          </p>
          <span className="animate-accent-line mt-4 block h-1 w-24 bg-signal" />
          <h1 className="animate-rise-delay-1 mt-6 max-w-2xl font-display text-3xl leading-tight tracking-wide text-white uppercase sm:text-4xl md:text-5xl">
            {homeCopy.heroHeadline}
          </h1>
          <p className="animate-rise-delay-2 mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            {homeCopy.heroSupport}
          </p>
          <div className="animate-rise-delay-2 mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="bg-signal px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-signal-hover"
            >
              {homeCopy.heroCtaPrimary}
            </Link>
            <Link
              href="/services"
              className="border border-white/45 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
            >
              {homeCopy.heroCtaSecondary}
            </Link>
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
              Call {site.phone} or write to {site.email} — we will help you plan the route.
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
