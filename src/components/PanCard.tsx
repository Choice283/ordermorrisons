"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import type { PanItem } from "@/data/menu";

export default function PanCard({ item }: { item: PanItem }) {
  const { addItem } = useCart();
  const [sizeIdx, setSizeIdx] = useState(0);
  const selected = item.prices[sizeIdx];

  return (
    <div className="border-b border-brass/15 py-5 last:border-b-0">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-lg text-cream leading-snug">
          {item.name}
        </h3>
        <span className="shrink-0 font-body text-brass2 tabular-nums">
          ${selected.price.toFixed(2)}
        </span>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {item.prices.map((p, i) => (
          <button
            key={p.size}
            onClick={() => setSizeIdx(i)}
            className={`rounded-full border px-3 py-1 text-xs font-body uppercase tracking-wide transition-colors ${
              i === sizeIdx
                ? "border-brass2 bg-brass2 text-charcoal"
                : "border-brass/30 text-cream2/80 hover:border-brass/60"
            }`}
          >
            {p.size}
          </button>
        ))}
        <button
          onClick={() =>
            addItem({
              id: `${item.id}-${selected.size}`,
              name: `${item.name} (${selected.size} Pan)`,
              price: selected.price,
            })
          }
          className="ml-auto rounded-full border border-brass/40 px-3 py-1 text-xs font-body uppercase tracking-wide text-brass2 transition-colors hover:border-brass2 hover:bg-brass2 hover:text-charcoal"
        >
          Add
        </button>
      </div>
    </div>
  );
}
