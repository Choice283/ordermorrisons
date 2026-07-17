"use client";

import { useState } from "react";

export default function PhotoTile({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={`flex items-center justify-center border border-dashed border-brass/25 bg-surface ${className}`}
      >
        <span className="px-3 text-center font-body text-[10px] uppercase tracking-[0.2em] text-cream2/30">
          Photo coming soon
        </span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      onError={() => setErrored(true)}
      className={`object-cover ${className}`}
    />
  );
}
