"use client";

import { useCart } from "@/context/CartContext";
import type { Plate } from "@/data/menu";
import PhotoTile from "./PhotoTile";

export default function FeaturedGrid({ items }: { items: Plate[] }) {
  const { addItem } = useCart();

  if (items.length === 0) return null;

  return (
    <div className="mb-10">
      <h3 className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brass2/80">
        Most Ordered
      </h3>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {items.map((item) => (
          <div key={item.id} className="w-36 shrink-0 sm:w-44">
            <div className="relative">
              <PhotoTile
                src={item.image!}
                alt={item.name}
                className="aspect-square w-full rounded-md"
              />
              <button
                onClick={() => addItem(item)}
                aria-label={`Add ${item.name}`}
                className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-cream text-lg font-bold text-charcoal shadow-md transition-transform hover:scale-105"
              >
                +
              </button>
            </div>
            <p className="mt-2 font-display text-sm leading-snug text-cream">
              {item.name}
            </p>
            <p className="font-body text-xs text-brass2">
              ${item.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
