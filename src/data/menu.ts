// NOTE ON IMAGES: entries pointing to /images/ai-placeholder/ are AI-generated
// stock-style photos, not real photos of Morrison's actual food. They're here
// to make the demo look complete for pitch purposes. Every one of these should
// be swapped for a real photo (see /images/README.md for the naming pattern)
// before this ever represents itself as showing Morrison's real dishes.

export type Plate = {
  id: string;
  name: string;
  price: number;
  note?: string;
  image?: string;
};

export type DayName =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";

// Daily rotating plates — matches the real week-by-week specials board.
export const dailyPlates: Record<DayName, Plate[]> = {
  Monday: [
    { id: "mon-baked-dress", name: "Baked Chicken with Dressing", price: 23.99 },
    { id: "mon-fried", name: "Fried Chicken", price: 23.99, image: "/images/gallery-3.jpg" },
    { id: "mon-hot-honey", name: "Hot Honey Chicken", price: 24.99 },
    { id: "mon-cajun", name: "Cajun Chicken", price: 24.99 },
    { id: "mon-smothered", name: "Smothered Chicken", price: 24.99 },
    { id: "mon-chopped-steak", name: "Smothered Chopped Steak", price: 23.99 },
    { id: "mon-pork-chops", name: "Smothered Pork Chops", price: 24.99, image: "/images/ai-placeholder/smothered-pork-chops.webp" },
    { id: "mon-veggie", name: "Veggie Plate (4 Sides)", price: 23.99 },
    { id: "mon-tky-dress", name: "Turkey Wing & Dressing", price: 26.99 },
    { id: "mon-corned-beef", name: "Corned Beef & Cabbage", price: 27.99 },
    { id: "mon-catfish", name: "Fried Catfish & Spaghetti", price: 26.99, image: "/images/ai-placeholder/catfish-spaghetti.webp" },
  ],
  Tuesday: [
    { id: "tue-short-ribs", name: "Short Ribs of Beef", price: 34.99, image: "/images/gallery-4.jpg" },
    { id: "tue-baked", name: "Baked Chicken", price: 23.99 },
    { id: "tue-fried", name: "Fried Chicken", price: 23.99, image: "/images/gallery-3.jpg" },
    { id: "tue-hot-honey", name: "Hot Honey Chicken", price: 24.99 },
    { id: "tue-cajun", name: "Cajun Chicken", price: 24.99 },
    { id: "tue-smothered", name: "Smothered Chicken", price: 24.99 },
    { id: "tue-chopped-steak", name: "Smothered Chopped Steak", price: 23.99 },
    { id: "tue-pork-chops", name: "Smothered Pork Chops", price: 24.99, image: "/images/ai-placeholder/smothered-pork-chops.webp" },
    { id: "tue-veggie", name: "Veggie Plate (4 Sides)", price: 23.99 },
    { id: "tue-tky-dress", name: "Turkey Wing & Dressing", price: 26.99 },
    { id: "tue-corned-beef", name: "Corned Beef & Cabbage", price: 27.99 },
    { id: "tue-catfish", name: "Fried Catfish & Spaghetti", price: 26.99, image: "/images/ai-placeholder/catfish-spaghetti.webp" },
  ],
  Wednesday: [
    { id: "wed-baked", name: "Baked Chicken", price: 23.99 },
    { id: "wed-fried", name: "Fried Chicken", price: 23.99, image: "/images/gallery-3.jpg" },
    { id: "wed-hot-honey", name: "Hot Honey Chicken", price: 24.99 },
    { id: "wed-cajun", name: "Cajun Chicken", price: 24.99 },
    { id: "wed-smothered", name: "Smothered Chicken", price: 24.99 },
    { id: "wed-short-ribs", name: "Short Ribs of Beef", price: 34.99, image: "/images/gallery-4.jpg" },
    { id: "wed-chopped-steak", name: "Smothered Chopped Steak", price: 23.99 },
    { id: "wed-pork-chops", name: "Smothered Pork Chops", price: 23.99, image: "/images/ai-placeholder/smothered-pork-chops.webp" },
    { id: "wed-corned-beef", name: "Corned Beef & Cabbage", price: 27.99 },
    { id: "wed-veggie", name: "Veggie Plate (4 Sides)", price: 23.99 },
    { id: "wed-dumplings", name: "Chicken & Dumplings", price: 26.99 },
    { id: "wed-bbq-fried", name: "BBQ Fried Chicken", price: 24.99, note: "Fried chicken smothered in BBQ sauce" },
    { id: "wed-catfish", name: "Fried Catfish & Spaghetti", price: 26.99, image: "/images/ai-placeholder/catfish-spaghetti.webp" },
  ],
  Thursday: [
    { id: "thu-short-ribs", name: "Short Ribs of Beef", price: 34.99, image: "/images/gallery-4.jpg" },
    { id: "thu-baked-dress", name: "Baked Chicken & Dressing", price: 23.99 },
    { id: "thu-fried", name: "Fried Chicken", price: 23.99, image: "/images/gallery-3.jpg" },
    { id: "thu-hot-honey", name: "Hot Honey Chicken", price: 24.99 },
    { id: "thu-cajun", name: "Cajun Chicken", price: 24.99 },
    { id: "thu-smothered", name: "Smothered Chicken", price: 24.99 },
    { id: "thu-pepper-steak", name: "Pepper Steak & Rice", price: 26.99 },
    { id: "thu-chopped-steak", name: "Smothered Chopped Steak", price: 23.99 },
    { id: "thu-pork-chops", name: "Smothered Pork Chops", price: 24.99, image: "/images/ai-placeholder/smothered-pork-chops.webp" },
    { id: "thu-veggie", name: "Veggie Plate (4 Sides)", price: 23.99 },
    { id: "thu-ham-hocks", name: "Ham Hocks", price: 23.99, image: "/images/ai-placeholder/ham-hocks.webp" },
    { id: "thu-rib-tips", name: "BBQ Rib Tips", price: 24.99 },
    { id: "thu-bbq-fried", name: "BBQ Fried Chicken", price: 24.99, note: "Fried chicken smothered in BBQ sauce" },
    { id: "thu-catfish", name: "Fried Catfish & Spaghetti", price: 26.99, image: "/images/ai-placeholder/catfish-spaghetti.webp" },
  ],
  Friday: [
    { id: "fri-short-ribs", name: "Short Ribs of Beef", price: 34.99, image: "/images/gallery-4.jpg" },
    { id: "fri-catfish", name: "Fried Catfish & Spaghetti", price: 26.99, image: "/images/ai-placeholder/catfish-spaghetti.webp" },
    { id: "fri-baked", name: "Baked Chicken", price: 23.99 },
    { id: "fri-fried", name: "Fried Chicken", price: 23.99, image: "/images/gallery-3.jpg" },
    { id: "fri-hot-honey", name: "Hot Honey Chicken", price: 24.99 },
    { id: "fri-cajun", name: "Cajun Chicken", price: 24.99 },
    { id: "fri-smothered", name: "Smothered Chicken", price: 24.99 },
    { id: "fri-rib-tips", name: "BBQ Rib Tips", price: 24.99 },
    { id: "fri-chopped-steak", name: "Smothered Chopped Steak", price: 23.99 },
    { id: "fri-pork-chops", name: "Smothered Pork Chops", price: 24.99, image: "/images/ai-placeholder/smothered-pork-chops.webp" },
    { id: "fri-veggie", name: "Veggie Plate (4 Sides)", price: 23.99 },
    { id: "fri-ham-hocks", name: "Ham Hocks", price: 23.99, image: "/images/ai-placeholder/ham-hocks.webp" },
    { id: "fri-bbq-fried", name: "BBQ Fried Chicken", price: 24.99, note: "Fried chicken smothered in BBQ sauce" },
  ],
  Saturday: [
    { id: "sat-short-ribs", name: "Short Ribs of Beef", price: 34.99, image: "/images/gallery-4.jpg" },
    { id: "sat-baked", name: "Baked Chicken", price: 23.99 },
    { id: "sat-fried", name: "Fried Chicken", price: 23.99, image: "/images/gallery-3.jpg" },
    { id: "sat-hot-honey", name: "Hot Honey Chicken", price: 24.99 },
    { id: "sat-tky-dress", name: "Turkey Wing & Dressing", price: 26.99 },
    { id: "sat-rib-tips", name: "BBQ Rib Tips", price: 24.99 },
    { id: "sat-chopped-steak", name: "Smothered Chopped Steak", price: 23.99 },
    { id: "sat-pork-chops", name: "Smothered Pork Chops", price: 24.99, image: "/images/ai-placeholder/smothered-pork-chops.webp" },
    { id: "sat-veggie", name: "Veggie Plate (4 Sides)", price: 23.99 },
    { id: "sat-ham-hocks", name: "Ham Hocks", price: 23.99, image: "/images/ai-placeholder/ham-hocks.webp" },
    { id: "sat-bbq-fried", name: "BBQ Fried Chicken", price: 24.99, note: "Fried chicken smothered in BBQ sauce" },
    { id: "sat-catfish", name: "Fried Catfish & Spaghetti", price: 26.99, image: "/images/ai-placeholder/catfish-spaghetti.webp" },
  ],
  Sunday: [
    { id: "sun-short-ribs", name: "Short Ribs of Beef", price: 34.99, image: "/images/gallery-4.jpg" },
    { id: "sun-cornish-hen", name: "Cornish Hen & Dressing", price: 28.99 },
    { id: "sun-fried", name: "Fried Chicken", price: 23.99, image: "/images/gallery-3.jpg" },
    { id: "sun-baked", name: "Baked Chicken", price: 23.99 },
    { id: "sun-hot-honey", name: "Hot Honey Chicken", price: 24.99 },
    { id: "sun-smothered", name: "Smothered Chicken", price: 24.99 },
    { id: "sun-tky-dress", name: "Turkey Wings & Dressing", price: 28.99 },
    { id: "sun-rib-tips", name: "BBQ Rib Tips", price: 24.99 },
    { id: "sun-oxtails", name: "Braised Ox Tails", price: 28.99 },
    { id: "sun-chopped-steak", name: "Smothered Chopped Steak", price: 23.99 },
    { id: "sun-pork-chops", name: "Smothered Pork Chops", price: 24.99, image: "/images/ai-placeholder/smothered-pork-chops.webp" },
    { id: "sun-veggie", name: "Veggie Plate (4 Sides)", price: 23.99 },
    { id: "sun-ham-hocks", name: "Ham Hocks", price: 23.99, image: "/images/ai-placeholder/ham-hocks.webp" },
    { id: "sun-bbq-fried", name: "BBQ Fried Chicken", price: 24.99, note: "Fried chicken smothered in BBQ sauce" },
    { id: "sun-catfish", name: "Fried Catfish & Spaghetti", price: 26.99, image: "/images/ai-placeholder/catfish-spaghetti.webp" },
  ],
};

export const sides: Plate[] = [
  { id: "side-black-eyed-peas", name: "Black Eyed Peas (with or without Rice)", price: 6.5, image: "/images/ai-placeholder/black-eyed-peas.webp" },
  { id: "side-red-beans", name: "Red Beans (with or without Rice)", price: 6.5, image: "/images/ai-placeholder/red-beans-rice.webp" },
  { id: "side-string-beans", name: "String Beans with White Potatoes", price: 6.5, image: "/images/ai-placeholder/string-beans-potatoes.webp" },
  { id: "side-dressing", name: "Cornbread Dressing", price: 6.5, image: "/images/ai-placeholder/cornbread-dressing.webp" },
  { id: "side-mashed", name: "Garlic Mashed Potatoes", price: 6.5, image: "/images/ai-placeholder/garlic-mashed-potatoes.webp" },
  { id: "side-yams", name: "Candied Sweet Potatoes", price: 6.5, image: "/images/ai-placeholder/candied-sweet-potatoes.webp" },
  { id: "side-rice", name: "Steamed White Rice", price: 6.5, image: "/images/ai-placeholder/white-rice.webp" },
  { id: "side-corn", name: "Sweet Buttery Corn", price: 6.5 },
  { id: "side-cabbage", name: "Cabbage", price: 6.5, image: "/images/ai-placeholder/cabbage.webp" },
  { id: "side-mac", name: "Macaroni & Cheese", price: 6.5, image: "/images/ai-placeholder/mac-cheese.webp" },
  { id: "side-spaghetti", name: "Spaghetti", price: 6.5 },
];

export const desserts: Plate[] = [
  { id: "dessert-banana-pudding", name: "Banana Pudding", price: 8.5, note: "Homemade, made with wafers & Chessman cookies" },
  { id: "dessert-chocolate-cake", name: "Chocolate Cake Slice", price: 7.5 },
  { id: "dessert-lemon-cake", name: "Lemon Cake Slice (Homemade!)", price: 7.5 },
  { id: "dessert-pineapple-cake", name: "Pineapple Coconut Cake", price: 7.5 },
  { id: "dessert-sour-cream-pound", name: "Sour Cream Pound Cake", price: 5.5 },
  { id: "dessert-lemon-pound", name: "Lemon Pound Cake (Homemade!)", price: 5.5 },
];

// Hasana's Sweets — the dessert bar operating inside Morrison's
export const hasanasSweets: Plate[] = [
  { id: "hasana-banana-pudding-large", name: "Banana Pudding (Large)", price: 8.5, note: "Premium homemade banana pudding with wafers & Chessman cookies" },
  { id: "hasana-biscoff-pudding", name: "Biscoff Cookie Butter Banana Pudding", price: 10, note: "Layers of fresh banana, cookie butter, wafers & Biscoff cookies", image: "/images/ai-placeholder/biscoff-pudding.webp" },
  { id: "hasana-strawberry-shortcake-pudding", name: "Strawberry Shortcake Banana Pudding", price: 14.5, image: "/images/ai-placeholder/strawberry-shortcake-pudding.webp" },
  { id: "hasana-chessman-pudding", name: "Chessman Banana Pudding", price: 11.5, note: "No bananas" },
  { id: "hasana-peach-cobbler", name: "Peach Cobbler", price: 11.5 },
  { id: "hasana-cherry-cobbler", name: "Cherry Cobbler", price: 11.5 },
  { id: "hasana-caramel-apple-cobbler", name: "Caramel Apple Cobbler", price: 11.5 },
  { id: "hasana-peach-cobbler-shake", name: "Peach Cobbler Shake", price: 10 },
  { id: "hasana-cherry-cobbler-shake", name: "Cherry Cobbler Shake", price: 10 },
  { id: "hasana-strawberry-cookie", name: "Strawberry Cookie", price: 5.5 },
  { id: "hasana-banana-pudding-cookie", name: "Banana Pudding Cookie", price: 5.5 },
  { id: "hasana-red-velvet-oreo", name: "Red Velvet Oreo Cookie", price: 5.5 },
  { id: "hasana-snickerdoodle-lucky-charm", name: "Snickerdoodle x Lucky Charm Cookie", price: 5.5, image: "/images/ai-placeholder/snickerdoodle-lucky-charms.webp" },
];

export type ByPieceItem = { id: string; name: string; price: number; unit: string; note?: string };

// Catering: sold by the piece, minimum 20 pieces
export const byThePiece: ByPieceItem[] = [
  { id: "piece-short-ribs", name: "Short Ribs of Beef", price: 11.5, unit: "per piece" },
  { id: "piece-pork-chop", name: "Smothered Pork Chop", price: 6, unit: "per piece" },
  { id: "piece-chopped-steak", name: "Smothered Chopped Steak", price: 6, unit: "per piece" },
  { id: "piece-turkey-wing", name: "Turkey Wing", price: 10, unit: "per piece" },
  { id: "piece-cornish-hen", name: "Cornish Hen", price: 10, unit: "per piece" },
  { id: "piece-catfish", name: "Fried Catfish Fillet", price: 8, unit: "per piece" },
  { id: "piece-salmon", name: "Stuffed Salmon", price: 12, unit: "per piece", note: "72 hour notice required" },
  { id: "piece-turkey-leg", name: "Smoked BBQ Turkey Leg", price: 8, unit: "per piece" },
  { id: "piece-baked-chicken", name: "Baked Chicken", price: 1.75, unit: "per piece" },
  { id: "piece-cajun-chicken", name: "Cajun Chicken", price: 1.85, unit: "per piece" },
  { id: "piece-fried-chicken", name: "Fried Chicken", price: 2.5, unit: "per piece" },
  { id: "piece-wings", name: "Fried Chicken Wings", price: 2.25, unit: "per piece" },
  { id: "piece-hot-honey", name: "Hot Honey Chicken", price: 1.85, unit: "per piece" },
  { id: "piece-smothered-chicken", name: "Smothered Chicken", price: 1.85, unit: "per piece" },
  { id: "piece-muffins", name: "Cornbread Muffins", price: 15, unit: "per dozen" },
  { id: "piece-turkey", name: "Deep Fried Turkey (10-12 lbs.)", price: 75, unit: "whole" },
  { id: "piece-ham", name: "Spiral Cut Ham (9-10 lbs.)", price: 85, unit: "whole" },
];

export type PanItem = {
  id: string;
  name: string;
  prices: { size: "X-Small" | "Small" | "Medium" | "Large"; price: number }[];
  servesNote?: string;
};

// Catering: sold by the pan. Serves — X-Small 12-15 | Small 20-25 | Medium 30-40 | Large 45-50
export const byThePan: PanItem[] = [
  {
    id: "pan-rib-tips",
    name: "Rib Tips",
    prices: [
      { size: "X-Small", price: 100 },
      { size: "Small", price: 120 },
      { size: "Medium", price: 125 },
      { size: "Large", price: 140 },
    ],
  },
  {
    id: "pan-pot-roast",
    name: "Pot Roast",
    prices: [
      { size: "X-Small", price: 100 },
      { size: "Small", price: 120 },
      { size: "Medium", price: 125 },
      { size: "Large", price: 140 },
    ],
  },
  {
    id: "pan-corned-beef",
    name: "Corned Beef & Cabbage",
    prices: [
      { size: "X-Small", price: 115 },
      { size: "Small", price: 125 },
      { size: "Medium", price: 145 },
      { size: "Large", price: 160 },
    ],
  },
  {
    id: "pan-mac",
    name: "Macaroni & Cheese",
    prices: [
      { size: "X-Small", price: 90 },
      { size: "Small", price: 110 },
      { size: "Medium", price: 120 },
      { size: "Large", price: 140 },
    ],
  },
  {
    id: "pan-yams",
    name: "Candied Sweet Potatoes",
    prices: [
      { size: "X-Small", price: 80 },
      { size: "Small", price: 90 },
      { size: "Medium", price: 100 },
      { size: "Large", price: 120 },
    ],
  },
  {
    id: "pan-dressing",
    name: "Cornbread Dressing",
    prices: [
      { size: "X-Small", price: 80 },
      { size: "Small", price: 90 },
      { size: "Medium", price: 100 },
      { size: "Large", price: 120 },
    ],
  },
  {
    id: "pan-rice",
    name: "Steamed Rice",
    prices: [
      { size: "X-Small", price: 65 },
      { size: "Small", price: 80 },
      { size: "Medium", price: 95 },
      { size: "Large", price: 110 },
    ],
  },
  {
    id: "pan-red-beans",
    name: "Red Beans & Rice",
    prices: [
      { size: "X-Small", price: 80 },
      { size: "Small", price: 90 },
      { size: "Medium", price: 100 },
      { size: "Large", price: 120 },
    ],
  },
  {
    id: "pan-black-eyed-peas",
    name: "Black Eyed Peas",
    prices: [
      { size: "X-Small", price: 80 },
      { size: "Small", price: 90 },
      { size: "Medium", price: 100 },
      { size: "Large", price: 120 },
    ],
  },
  {
    id: "pan-corn",
    name: "Sweet Buttery Corn",
    prices: [
      { size: "X-Small", price: 70 },
      { size: "Small", price: 80 },
      { size: "Medium", price: 90 },
      { size: "Large", price: 100 },
    ],
  },
  {
    id: "pan-string-beans",
    name: "String Beans & Potatoes",
    prices: [
      { size: "X-Small", price: 70 },
      { size: "Small", price: 80 },
      { size: "Medium", price: 90 },
      { size: "Large", price: 100 },
    ],
  },
  {
    id: "pan-spaghetti",
    name: "Spaghetti",
    prices: [
      { size: "X-Small", price: 80 },
      { size: "Small", price: 90 },
      { size: "Medium", price: 100 },
      { size: "Large", price: 120 },
    ],
  },
  {
    id: "pan-mashed",
    name: "Garlic Mashed Potatoes",
    prices: [
      { size: "X-Small", price: 70 },
      { size: "Small", price: 80 },
      { size: "Medium", price: 90 },
      { size: "Large", price: 100 },
    ],
  },
  {
    id: "pan-collards",
    name: "Collard Greens",
    prices: [
      { size: "X-Small", price: 80 },
      { size: "Small", price: 90 },
      { size: "Medium", price: 100 },
      { size: "Large", price: 120 },
    ],
  },
  {
    id: "pan-cabbage",
    name: "Cabbage",
    prices: [
      { size: "X-Small", price: 80 },
      { size: "Small", price: 90 },
      { size: "Medium", price: 100 },
      { size: "Large", price: 120 },
    ],
  },
  {
    id: "pan-gravy",
    name: "Gravy",
    prices: [
      { size: "X-Small", price: 50 },
      { size: "Small", price: 60 },
      { size: "Medium", price: 70 },
      { size: "Large", price: 80 },
    ],
  },
  {
    id: "pan-peach-cobbler",
    name: "Peach Cobbler",
    prices: [
      { size: "X-Small", price: 90 },
      { size: "Small", price: 110 },
      { size: "Medium", price: 120 },
      { size: "Large", price: 140 },
    ],
  },
  {
    id: "pan-banana-pudding",
    name: "Hasana's Sweets Banana Pudding",
    prices: [
      { size: "X-Small", price: 90 },
      { size: "Small", price: 110 },
      { size: "Medium", price: 120 },
      { size: "Large", price: 140 },
    ],
  },
];

export const restaurant = {
  name: "Morrison's Soul Food",
  tagline: "Home of the Heavy Plate",
  address: "148 W 79th St, Chicago, IL 60620",
  phone: "(872) 600-8243",
  email: "morrisonsoulfood@gmail.com",
  hours: {
    weekday: "11:00 AM – 8:00 PM (Mon–Fri)",
    weekend: "11:00 AM – 9:00 PM (Sat–Sun)",
  },
  since: 2002,
  founders: "Cookie & Eddie Morrison",
  story:
    "Started in 2002 by Cookie and Eddie Morrison, this Auburn Gresham kitchen has been run by their daughter Sheila since she was a kid working the counter alongside them. The line has stretched down Ashland Avenue in every kind of Chicago weather, and the restaurant has kept the neighborhood fed — and its young people employed — for over two decades.",
  neighborhood: "Auburn Gresham",
};

export const reviews = [
  {
    name: "Wilbert J.",
    source: "Google",
    quote:
      "Reminds me of being in the Deep South — tasty, flavorful, and seasoned so well.",
  },
  {
    name: "Brenda S.",
    source: "Google",
    quote: "Glad I gave it a shot — the short rib and service were both on point.",
  },
  {
    name: "Briana L.",
    source: "Google",
    quote: "The food here is amazing, customer service is great, I'll be back.",
  },
  {
    name: "Sheila M.",
    source: "Google",
    quote: "Delicious, hot and fresh — and the plates were heavy.",
  },
];

export function getTodayName(): DayName {
  const days: DayName[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[new Date().getDay()];
}
