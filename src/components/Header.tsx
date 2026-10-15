"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[rgba(247,250,251,0.86)] backdrop-blur-md">
      <div className="site-shell flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
        <Link href="/" className="group flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-xl tracking-[0.04em] text-sea-deep uppercase md:text-2xl">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative text-sm font-medium tracking-wide transition-colors ${
                  active ? "text-sea-deep" : "text-ink-soft hover:text-sea-deep"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px w-full origin-left bg-signal transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-sm bg-sea-deep px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-sea"
          >
            Get a quote
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-line md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span className={`h-px bg-ink transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-px bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-px bg-ink transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-paper md:hidden">
          <nav className="site-shell flex flex-col gap-1 py-4" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 text-base font-medium text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 bg-sea-deep px-4 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Get a quote
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
