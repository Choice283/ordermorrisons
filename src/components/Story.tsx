import { restaurant, reviews } from "@/data/menu";
import Gallery from "./Gallery";

export default function Story() {
  return (
    <section className="border-t border-brass/15 bg-surface">
      <div className="mx-auto max-w-3xl px-5 py-14">
        <p className="font-body text-xs uppercase tracking-[0.25em] text-brass2/80">
          Since {restaurant.since} &middot; {restaurant.neighborhood}
        </p>
        <h2 className="mt-2 font-display text-3xl italic text-cream">
          Good Food, No Compromises
        </h2>
        <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-cream2/70">
          {restaurant.story}
        </p>

        <div className="mt-8">
          <Gallery />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-sm border border-brass/20 bg-surface2 p-5 shadow-sm"
            >
              <p className="font-body text-sm italic leading-relaxed text-cream2/80">
                &ldquo;{r.quote}&rdquo;
              </p>
              <p className="mt-3 font-body text-xs uppercase tracking-[0.15em] text-brass2/70">
                {r.name} &middot; {r.source}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
