"use client";

import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { shipmentModes } from "@/content/site";

const field =
  "w-full bg-transparent px-1 py-1 text-sm font-medium text-white placeholder:text-white/40 outline-none [color-scheme:dark]";

export function HeroQuote() {
  const router = useRouter();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const params = new URLSearchParams();
    for (const key of ["from", "to", "mode"] as const) {
      const value = String(data.get(key) || "").trim();
      if (value) params.set(key, value);
    }
    router.push(`/contact?${params.toString()}#enquiry`);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-px overflow-hidden rounded-sm border border-white/15 bg-white/15 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl md:grid-cols-[1fr_1fr_1fr_auto]"
    >
      <label className="block bg-[#0a1f26]/80 px-4 py-3">
        <span className="block text-[10px] font-semibold tracking-[0.18em] text-amber-300/90 uppercase">From</span>
        <input name="from" defaultValue="Jaipur" placeholder="City or port" className={field} />
      </label>
      <label className="block bg-[#0a1f26]/80 px-4 py-3">
        <span className="block text-[10px] font-semibold tracking-[0.18em] text-amber-300/90 uppercase">To</span>
        <input name="to" placeholder="Destination" className={field} />
      </label>
      <label className="block bg-[#0a1f26]/80 px-4 py-3">
        <span className="block text-[10px] font-semibold tracking-[0.18em] text-amber-300/90 uppercase">Mode</span>
        <select name="mode" defaultValue={shipmentModes[0]} className={`${field} cursor-pointer`}>
          {shipmentModes.map((mode) => (
            <option key={mode} className="text-ink">
              {mode}
            </option>
          ))}
        </select>
      </label>
      <button
        type="submit"
        className="bg-signal px-7 py-4 text-sm font-bold tracking-wide text-white transition-colors hover:bg-amber-500 md:py-0"
      >
        Get a quote →
      </button>
    </form>
  );
}
