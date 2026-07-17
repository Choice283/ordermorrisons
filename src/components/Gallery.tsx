import PhotoTile from "./PhotoTile";

const photos = [
  { src: "/images/gallery-1.jpg", alt: "The mural inside Morrison's Soul Food" },
  { src: "/images/gallery-2.jpg", alt: "Booth seating by the window at Morrison's Soul Food" },
  { src: "/images/gallery-3.jpg", alt: "Fried chicken plate with rice, gravy and collard greens" },
  { src: "/images/gallery-4.jpg", alt: "Short rib plate with mac and cheese and candied yams" },
  { src: "/images/gallery-5.jpg", alt: "A saucy braised plate from Morrison's Soul Food" },
];

export default function Gallery() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
      {photos.map((p) => (
        <PhotoTile key={p.src} src={p.src} alt={p.alt} className="aspect-square w-full rounded-sm" />
      ))}
    </div>
  );
}
