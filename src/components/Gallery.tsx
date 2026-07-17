import PhotoTile from "./PhotoTile";

const photos = [
  { src: "/images/gallery-1.jpg", alt: "Inside Morrison's Soul Food" },
  { src: "/images/gallery-2.jpg", alt: "A plate from Morrison's Soul Food" },
  { src: "/images/gallery-3.jpg", alt: "Morrison's Soul Food kitchen" },
  { src: "/images/gallery-4.jpg", alt: "Morrison's Soul Food dining room" },
];

export default function Gallery() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {photos.map((p) => (
        <PhotoTile key={p.src} src={p.src} alt={p.alt} className="aspect-square w-full rounded-sm" />
      ))}
    </div>
  );
}
