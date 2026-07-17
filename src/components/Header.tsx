"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { restaurant } from "@/data/menu";

export default function Header() {
  const { itemCount, openCart } = useCart();
  const [logoErrored, setLogoErrored] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-brass/15 bg-charcoal/90 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
        <div className="flex items-baseline gap-3">
          {!logoErrored ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/images/logo.png"
              alt={restaurant.name}
              onError={() => setLogoErrored(true)}
              className="h-8 w-auto"
            />
          ) : (
            <span className="font-display text-xl text-cream tracking-tight">
              {restaurant.name}
            </span>
          )}
          <span className="hidden font-body text-xs uppercase tracking-[0.15em] text-brass2/80 sm:inline">
            Est. {restaurant.since}
          </span>
        </div>
        <button
          onClick={openCart}
          className="relative rounded-full border border-brass/40 px-4 py-2 font-body text-sm text-cream transition-colors hover:border-brass2"
        >
          Cart
          {itemCount > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-morrisonred text-[11px] font-semibold text-cream">
              {itemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
