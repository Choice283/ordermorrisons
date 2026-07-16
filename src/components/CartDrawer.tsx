"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { lines, isOpen, closeCart, updateQty, subtotal, clear } = useCart();
  const [placed, setPlaced] = useState(false);

  if (!isOpen) return null;

  const tax = subtotal * 0.1025; // Chicago combined sales tax, approx
  const total = subtotal + tax;

  return (
    <div className="fixed inset-0 z-40 flex justify-end">
      <button
        aria-label="Close cart"
        onClick={closeCart}
        className="absolute inset-0 bg-black/60"
      />
      <div className="relative flex h-full w-full max-w-sm flex-col bg-surface shadow-2xl">
        <div className="flex items-center justify-between border-b border-brass/15 px-5 py-4">
          <h2 className="font-display text-lg text-cream">Your Order</h2>
          <button
            onClick={closeCart}
            className="font-body text-sm text-cream2/70 hover:text-cream"
          >
            Close
          </button>
        </div>

        {placed ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <p className="font-display text-2xl text-brass2">Order placed!</p>
            <p className="font-body text-sm text-cream2/80">
              This is a working demo — no real order was sent to the
              kitchen. On launch, this becomes a live pickup order sent
              straight to Morrison&apos;s.
            </p>
            <button
              onClick={() => {
                setPlaced(false);
                clear();
                closeCart();
              }}
              className="mt-4 rounded-full border border-brass/40 px-4 py-2 font-body text-sm text-brass2 hover:border-brass2"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5">
              {lines.length === 0 ? (
                <p className="py-10 text-center font-body text-sm text-cream2/60">
                  Your cart is empty. Add something from today&apos;s menu.
                </p>
              ) : (
                lines.map((line) => (
                  <div
                    key={line.id}
                    className="flex items-center justify-between gap-3 border-b border-brass/10 py-4"
                  >
                    <div className="min-w-0">
                      <p className="truncate font-body text-sm text-cream">
                        {line.name}
                      </p>
                      <p className="font-body text-xs text-cream2/60">
                        ${line.price.toFixed(2)} each
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <button
                        onClick={() => updateQty(line.id, line.qty - 1)}
                        className="h-6 w-6 rounded-full border border-brass/30 text-cream2 hover:border-brass2"
                      >
                        −
                      </button>
                      <span className="w-4 text-center font-body text-sm text-cream tabular-nums">
                        {line.qty}
                      </span>
                      <button
                        onClick={() => updateQty(line.id, line.qty + 1)}
                        className="h-6 w-6 rounded-full border border-brass/30 text-cream2 hover:border-brass2"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {lines.length > 0 && (
              <div className="border-t border-brass/15 px-5 py-4">
                <div className="mb-1 flex justify-between font-body text-sm text-cream2/80">
                  <span>Subtotal</span>
                  <span className="tabular-nums">${subtotal.toFixed(2)}</span>
                </div>
                <div className="mb-3 flex justify-between font-body text-sm text-cream2/80">
                  <span>Tax</span>
                  <span className="tabular-nums">${tax.toFixed(2)}</span>
                </div>
                <div className="mb-4 flex justify-between font-display text-base text-cream">
                  <span>Total</span>
                  <span className="tabular-nums">${total.toFixed(2)}</span>
                </div>
                <p className="mb-3 font-body text-xs uppercase tracking-wide text-brass2/80">
                  Pickup at 148 W 79th St
                </p>
                <button
                  onClick={() => setPlaced(true)}
                  className="w-full rounded-full bg-brass2 py-3 font-body text-sm font-semibold uppercase tracking-wide text-charcoal transition-opacity hover:opacity-90"
                >
                  Place Pickup Order
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
