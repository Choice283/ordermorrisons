"use client";

import { useState } from "react";
import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";
import PlateCard from "@/components/PlateCard";
import PanCard from "@/components/PanCard";
import PieceCard from "@/components/PieceCard";
import Story from "@/components/Story";
import {
  dailyPlates,
  sides,
  desserts,
  byThePiece,
  byThePan,
  restaurant,
  getTodayName,
} from "@/data/menu";

type Tab = "today" | "sides" | "desserts" | "catering";

const tabs: { id: Tab; label: string }[] = [
  { id: "today", label: "Today's Plates" },
  { id: "sides", label: "Sides" },
  { id: "desserts", label: "Desserts" },
  { id: "catering", label: "Catering" },
];

export default function Home() {
  const today = getTodayName();
  const [tab, setTab] = useState<Tab>("today");
  const plates = dailyPlates[today];

  const dateStr = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(new Date());

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero — kitchen ticket motif: the specials board is punched fresh every day */}
      <section className="relative overflow-hidden border-b border-brass/15 bg-surface">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero.jpg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-25"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/70 via-surface/90 to-surface" />
        </div>
        <div className="relative mx-auto max-w-3xl px-5 py-14 sm:py-20">
          <div className="grid gap-10 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.25em] text-brass2/80">
                {restaurant.tagline}
              </p>
              <h1 className="mt-3 font-display text-4xl italic text-cream sm:text-5xl">
                {restaurant.name}
              </h1>
              <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-cream2/80">
                Southern cooking out of the Auburn Gresham kitchen since{" "}
                {restaurant.since} — heavy plates, made fresh, ready for
                pickup.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1 font-body text-xs text-cream2/60">
                <span>{restaurant.address}</span>
                <span>{restaurant.phone}</span>
              </div>
            </div>

            {/* Ticket stub */}
            <div className="relative -rotate-2 self-start justify-self-start rounded-sm border-2 border-dashed border-brass2/50 bg-charcoal px-6 py-5 sm:justify-self-end">
              <p className="font-body text-[10px] uppercase tracking-[0.3em] text-oxblood2">
                Order Up
              </p>
              <p className="mt-1 font-display text-3xl text-brass2">
                {today}
              </p>
              <p className="font-body text-xs text-cream2/60">{dateStr}</p>
              <p className="mt-3 border-t border-brass/20 pt-2 font-body text-[11px] text-cream2/50">
                {plates.length} plates on today&apos;s board
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <nav className="sticky top-[65px] z-20 border-b border-brass/15 bg-charcoal/95 backdrop-blur">
        <div className="mx-auto flex max-w-3xl gap-1 overflow-x-auto px-5">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`whitespace-nowrap border-b-2 px-3 py-3 font-body text-sm transition-colors ${
                tab === t.id
                  ? "border-brass2 text-cream"
                  : "border-transparent text-cream2/50 hover:text-cream2"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </nav>

      <section className="mx-auto max-w-3xl px-5 py-10">
        {tab === "today" && (
          <div>
            <h2 className="mb-1 font-display text-2xl text-cream">
              {today}&apos;s Menu
            </h2>
            <p className="mb-6 font-body text-sm text-cream2/60">
              Every plate comes with 2 sides and 2 muffins.
            </p>
            <div>
              {plates.map((p) => (
                <PlateCard key={p.id} {...p} />
              ))}
            </div>
          </div>
        )}

        {tab === "sides" && (
          <div>
            <h2 className="mb-6 font-display text-2xl text-cream">
              A La Carte Sides
            </h2>
            <div>
              {sides.map((s) => (
                <PlateCard key={s.id} {...s} />
              ))}
            </div>
          </div>
        )}

        {tab === "desserts" && (
          <div>
            <h2 className="mb-6 font-display text-2xl text-cream">
              Desserts
            </h2>
            <div>
              {desserts.map((d) => (
                <PlateCard key={d.id} {...d} />
              ))}
            </div>
          </div>
        )}

        {tab === "catering" && (
          <div>
            <h2 className="mb-1 font-display text-2xl text-cream">
              Catering
            </h2>
            <p className="mb-6 font-body text-sm text-cream2/60">
              By the piece (20 piece minimum) and by the pan — perfect for
              parties, holidays and corporate events.
            </p>

            <h3 className="mb-2 font-display text-lg text-brass2">
              By the Piece
            </h3>
            <div className="mb-8">
              {byThePiece.map((p) => (
                <PieceCard key={p.id} item={p} />
              ))}
            </div>

            <h3 className="mb-2 font-display text-lg text-brass2">
              By the Pan
            </h3>
            <p className="mb-4 font-body text-xs text-cream2/50">
              Serves: X-Small 12–15 · Small 20–25 · Medium 30–40 · Large
              45–50
            </p>
            <div>
              {byThePan.map((p) => (
                <PanCard key={p.id} item={p} />
              ))}
            </div>
          </div>
        )}
      </section>

      <Story />

      <footer className="border-t border-brass/15 px-5 py-8 text-center font-body text-xs text-cream2/40">
        <p>
          {restaurant.name} · {restaurant.address} · {restaurant.phone}
        </p>
        <p className="mt-2 text-cream2/25">
          Ordering by{" "}
          <span className="text-brass2/50">Local Order App</span>
        </p>
      </footer>

      <CartDrawer />
    </main>
  );
}
