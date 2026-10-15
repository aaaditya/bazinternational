import Link from "next/link";
import { nav, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-sea-deep text-white">
      <div className="site-shell grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl tracking-[0.04em] uppercase">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/75">{site.tagline}</p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-white/55 uppercase">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/85 transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-white/55 uppercase">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            {site.address.lines.map((line) => (
              <li key={line}>{line}</li>
            ))}
            <li className="pt-2">
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="break-all hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="site-shell flex flex-col gap-2 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>{site.domain}</p>
        </div>
      </div>
    </footer>
  );
}
