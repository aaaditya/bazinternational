import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-sea-deep text-white">
      <div className="site-shell grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image src={site.logoWhite} alt={site.name} width={837} height={160} className="h-11 w-auto" />
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
              <a href={site.phoneHref} className="font-semibold text-white underline decoration-amber-400 decoration-2 underline-offset-4 hover:text-amber-200">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="font-semibold break-all text-white underline decoration-amber-400 decoration-2 underline-offset-4 hover:text-amber-200">
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
