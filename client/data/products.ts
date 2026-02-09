/**
 * Shared product data with extended details
 * Used across Products listing and ProductDetail pages
 */

export interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  image: string;
  images?: string[];
  description: string;
  details: string[];
  sizes?: string[];
  colors?: { name: string; hex: string }[];
  rating: number;
  reviews: number;
  brand: string;
  category: string;
  inStock: boolean;
  deliveryInfo: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic White Blazer",
    price: "$299.00",
    originalPrice: "$399.00",
    discount: "25% OFF",
    image:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?q=80&w=1000&auto=format&fit=crop",
    ],
    description:
      "Elevate your professional wardrobe with this timeless Classic White Blazer. Crafted from premium cotton blend fabric, this blazer offers both comfort and sophistication for any occasion.",
    details: [
      "Premium cotton blend fabric (65% Cotton, 35% Polyester)",
      "Single-breasted design with two-button closure",
      "Notched lapels with classic tailoring",
      "Two front flap pockets and one chest pocket",
      "Fully lined interior for smooth wear",
      "Dry clean recommended",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Cream", hex: "#FFFDD0" },
      { name: "Light Gray", hex: "#D3D3D3" },
    ],
    rating: 4.5,
    reviews: 128,
    brand: "ELEGANCE",
    category: "Blazers & Jackets",
    inStock: true,
    deliveryInfo: "Free delivery by Feb 10-12",
  },
  {
    id: 2,
    name: "Designer Jeans",
    price: "$199.00",
    originalPrice: "$249.00",
    discount: "20% OFF",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?q=80&w=1000&auto=format&fit=crop",
    ],
    description:
      "These premium Designer Jeans combine style with comfort. Featuring a modern slim fit and high-quality denim, they're perfect for both casual outings and semi-formal occasions.",
    details: [
      "100% Premium denim cotton",
      "Slim fit with slight stretch for comfort",
      "Classic five-pocket styling",
      "Button fly with branded hardware",
      "Mid-rise waist design",
      "Machine washable - cold water recommended",
    ],
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: [
      { name: "Indigo Blue", hex: "#3F51B5" },
      { name: "Dark Wash", hex: "#1A237E" },
      { name: "Light Blue", hex: "#64B5F6" },
    ],
    rating: 4.3,
    reviews: 256,
    brand: "DENIM CO",
    category: "Jeans",
    inStock: true,
    deliveryInfo: "Free delivery by Feb 9-11",
  },
  {
    id: 3,
    name: "Silk Evening Gown",
    price: "$599.00",
    originalPrice: "$799.00",
    discount: "25% OFF",
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop",
    ],
    description:
      "Make a stunning entrance with this luxurious Silk Evening Gown. The flowing silhouette and premium silk fabric create an elegant look perfect for galas, weddings, and special occasions.",
    details: [
      "100% Pure mulberry silk",
      "Floor-length flowing silhouette",
      "Concealed back zipper closure",
      "Fully lined with silk lining",
      "Sweetheart neckline with delicate draping",
      "Professional dry clean only",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Burgundy", hex: "#800020" },
      { name: "Midnight Blue", hex: "#191970" },
      { name: "Emerald", hex: "#50C878" },
    ],
    rating: 4.8,
    reviews: 89,
    brand: "LUXE COUTURE",
    category: "Evening Wear",
    inStock: true,
    deliveryInfo: "Free delivery by Feb 11-13",
  },
  {
    id: 4,
    name: "Leather Handbag",
    price: "$399.00",
    originalPrice: "$499.00",
    discount: "20% OFF",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000&auto=format&fit=crop",
    ],
    description:
      "This sophisticated Leather Handbag is the perfect accessory for the modern woman. Handcrafted from genuine Italian leather, it combines timeless elegance with practical functionality.",
    details: [
      "100% Genuine Italian leather",
      "Gold-tone hardware accents",
      "Spacious main compartment with zip closure",
      "Interior zip pocket and two slip pockets",
      "Adjustable and detachable shoulder strap",
      "Dust bag included for storage",
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Tan", hex: "#D2691E" },
      { name: "Black", hex: "#000000" },
      { name: "Burgundy", hex: "#800020" },
    ],
    rating: 4.6,
    reviews: 312,
    brand: "MILANO",
    category: "Bags & Accessories",
    inStock: true,
    deliveryInfo: "Free delivery by Feb 10-12",
  },
  {
    id: 5,
    name: "Gold Heels",
    price: "$249.00",
    originalPrice: "$299.00",
    discount: "17% OFF",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?q=80&w=1000&auto=format&fit=crop",
    ],
    description:
      "Step out in style with these stunning Gold Heels. Featuring a sleek metallic finish and comfortable block heel, they're designed to make you shine at any event.",
    details: [
      "Metallic gold synthetic upper",
      "3.5 inch block heel for stability",
      "Cushioned insole for all-day comfort",
      "Adjustable ankle strap with buckle",
      "Non-slip rubber sole",
      "Comes in branded shoe box",
    ],
    sizes: ["5", "6", "7", "8", "9", "10"],
    colors: [
      { name: "Gold", hex: "#FFD700" },
      { name: "Silver", hex: "#C0C0C0" },
      { name: "Rose Gold", hex: "#B76E79" },
    ],
    rating: 4.4,
    reviews: 178,
    brand: "STILETTO",
    category: "Footwear",
    inStock: true,
    deliveryInfo: "Free delivery by Feb 9-11",
  },
  {
    id: 6,
    name: "Pearl Necklace",
    price: "$179.00",
    originalPrice: "$229.00",
    discount: "22% OFF",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1000&auto=format&fit=crop",
    ],
    description:
      "Add timeless elegance to any outfit with this exquisite Pearl Necklace. Featuring hand-selected freshwater pearls with a beautiful lustrous finish, it's a piece that transcends trends.",
    details: [
      "Genuine freshwater cultured pearls",
      "Pearl size: 7-8mm",
      "18-inch length with 2-inch extender",
      "Sterling silver clasp",
      "Individually knotted for security",
      "Comes in velvet jewelry box",
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Classic White", hex: "#FFFAF0" },
      { name: "Pink Pearl", hex: "#FFB6C1" },
      { name: "Cream", hex: "#FFFDD0" },
    ],
    rating: 4.7,
    reviews: 203,
    brand: "PEARL ESSENCE",
    category: "Jewelry",
    inStock: true,
    deliveryInfo: "Free delivery by Feb 10-12",
  },
];

export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id);
}
