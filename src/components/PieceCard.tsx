"use client";

import { useCart } from "@/context/CartContext";
import type { ByPieceItem } from "@/data/menu";

export default function PieceCard({ item }: { item: ByPieceItem }) {
  const { addItem } = useCart();

  return (
    <div className="flex items-start justify-between gap-4 border-b border-brass/15 py-5 last:border-b-0">
      <div className="min-w-0">
        <h3 className="font-display text-lg text-cream leading-snug">
          {item.name}
        </h3>
        <p className="mt-1 text-sm text-cream2/70 font-body">
          {item.unit}
          {item.note ? ` · ${item.note}` : ""}
        </p>
      </div>
      <div className="flex shrink-0 flex-col items-end gap-2">
        <span className="font-body text-brass2 tabular-nums">
          ${item.price.toFixed(2)}
        </span>
        <button
          onClick={() =>
            addItem({ id: item.id, name: item.name, price: item.price })
          }
          className="rounded-full border border-brass/40 px-3 py-1 text-xs font-body uppercase tracking-wide text-brass2 transition-colors hover:border-brass2 hover:bg-brass2 hover:text-charcoal"
        >
          Add
        </button>
      </div>
    </div>
  );
}
