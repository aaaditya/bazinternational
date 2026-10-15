import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { aboutCopy, images, pillars, site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: aboutCopy.lead,
};

export default function AboutPage() {
  return (
    <>
      <section className="atmosphere border-b border-line py-16 md:py-24">
        <div className="site-shell grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-sea uppercase">About</p>
            <h1 className="mt-3 font-display text-4xl tracking-wide text-sea-deep uppercase md:text-5xl">
              {aboutCopy.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{aboutCopy.lead}</p>
          </div>
          <div className="relative min-h-[240px] overflow-hidden md:min-h-[280px]">
            <Image
              src={images.customs}
              alt="Warehouse logistics operations supporting freight forwarding"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="site-shell max-w-3xl space-y-6">
          {aboutCopy.story.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-ink-soft md:text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="site-shell mt-16 grid gap-10 border-t border-line pt-12 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title}>
              <h2 className="font-display text-xl tracking-wide text-sea-deep uppercase">
                {pillar.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">{pillar.body}</p>
            </div>
          ))}
        </div>

        <div className="site-shell mt-16 flex flex-col gap-4 border border-line bg-white/60 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10">
          <p className="max-w-xl text-ink-soft">
            Based in {site.address.city}, {site.name} supports exporters and importers who need a
            practical freight partner — not a black box.
          </p>
          <Link
            href="/contact"
            className="inline-flex w-fit bg-sea-deep px-5 py-3 text-sm font-semibold text-white transition hover:bg-sea"
          >
            Talk to our team
          </Link>
        </div>
      </section>
    </>
  );
}
