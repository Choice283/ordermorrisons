"use client";

import { useCart } from "@/context/CartContext";

export default function PlateCard({
  id,
  name,
  price,
  note,
}: {
  id: string;
  name: string;
  price: number;
  note?: string;
}) {
  const { addItem } = useCart();

  return (
    <div className="group flex items-start justify-between gap-4 border-b border-brass/15 py-5 last:border-b-0">
      <div className="min-w-0">
        <h3 className="font-display text-lg text-cream leading-snug">
          {name}
        </h3>
        {note && (
          <p className="mt-1 text-sm text-cream2/70 font-body leading-relaxed">
            {note}
          </p>
        )}
      </div>
      <div className="flex shrink-0 flex-col items-end gap-2">
        <span className="font-body text-brass2 tabular-nums">
          ${price.toFixed(2)}
        </span>
        <button
          onClick={() => addItem({ id, name, price, note })}
          className="rounded-full border border-brass/40 px-3 py-1 text-xs font-body uppercase tracking-wide text-brass2 transition-colors hover:border-brass2 hover:bg-brass2 hover:text-charcoal"
        >
          Add
        </button>
      </div>
    </div>
  );
}
