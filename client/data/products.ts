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
    name: "Classic Blazer",
    price: "$299.00",
    originalPrice: "$399.00",
    discount: "25% OFF",
    image:
      "https://images.unsplash.com/photo-1593030103066-0093718efeb9?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1593030103066-0093718efeb9?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617153767585-c8f5a6c167e5?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop",
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
  {
    id: 7,
    name: "Velvet Evening Dress",
    price: "$459.00",
    originalPrice: "$599.00",
    discount: "23% OFF",
    image:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop",
    ],
    description:
      "Exude elegance in this stunning Velvet Evening Dress. The deep emerald hue and soft velvet texture make it an unforgettable choice for formal galas and winter weddings.",
    details: [
      "Premium stretch velvet fabric",
      "V-neckline with wrap-style bodice",
      "Full-length skirt with side slit",
      "Long sleeves for elegant coverage",
      "Hidden back zipper",
      "Dry clean only",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Emerald Green", hex: "#50C878" },
      { name: "Midnight Blue", hex: "#191970" },
      { name: "Burgundy", hex: "#800020" },
    ],
    rating: 4.9,
    reviews: 156,
    brand: "LUXE COUTURE",
    category: "Evening Wear",
    inStock: true,
    deliveryInfo: "Free delivery by Feb 12-14",
  },
  {
    id: 8,
    name: "Leather Aviator Jacket",
    price: "$349.00",
    originalPrice: "$449.00",
    discount: "22% OFF",
    image:
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&w=1000&auto=format&fit=crop",
    ],
    description:
      "Channel vintage cool with this genuine Leather Aviator Jacket. Featuring a shearling collar and rugged finish, it's the perfect statement piece for any casual outfit.",
    details: [
      "100% Genuine leather outer",
      "Faux shearling collar (detachable)",
      "Ribbed cuffs and hem for warmth",
      "Two front patch pockets with side entry",
      "Quilted lining for extra insulation",
      "Professional leather clean only",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Dark Brown", hex: "#654321" },
      { name: "Black", hex: "#000000" },
    ],
    rating: 4.7,
    reviews: 210,
    brand: "URBAN LEGEND",
    category: "Blazers & Jackets",
    inStock: true,
    deliveryInfo: "Free delivery by Feb 11-13",
  },
  {
    id: 9,
    name: "Diamond Stud Earrings",
    price: "$899.00",
    originalPrice: "$1200.00",
    discount: "25% OFF",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1630019852942-f89202989a51?q=80&w=1000&auto=format&fit=crop",
    ],
    description:
      "Timeless and elegant, these Diamond Stud Earrings are a must-have for every jewelry collection. Set in 14k white gold, they add a touch of sparkle to any look.",
    details: [
      "0.5 carat total weight diamonds",
      "Round brilliant cut",
      "14k White Gold setting",
      "Screw-back posts for security",
      "Conflict-free diamonds",
      "Includes certificate of authenticity",
    ],
    sizes: ["One Size"],
    colors: [
      { name: "White Gold", hex: "#E8E8E8" },
      { name: "Yellow Gold", hex: "#FFD700" },
      { name: "Rose Gold", hex: "#B76E79" },
    ],
    rating: 4.8,
    reviews: 95,
    brand: "SPARKLE & SHINE",
    category: "Jewelry",
    inStock: true,
    deliveryInfo: "Free delivery by Feb 13-15",
  },
  {
    id: 10,
    name: "Suede Loafers",
    price: "$159.00",
    originalPrice: "$199.00",
    discount: "20% OFF",
    image:
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?q=80&w=1000&auto=format&fit=crop",
    ],
    description:
      "Experience unmatched comfort and style with these Italian Suede Loafers. Perfect for driving or casual Fridays, they feature a soft suede upper and flexible rubber sole.",
    details: [
      "Premium Italian suede leather upper",
      "Slip-on penny loafer design",
      "Leather lining for breathability",
      "Cushioned footbed with arch support",
      "Flexible rubber driving sole",
      "Hand-stitched moccasin toe",
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: [
      { name: "Navy Blue", hex: "#000080" },
      { name: "Tan", hex: "#D2691E" },
      { name: "Grey", hex: "#808080" },
    ],
    rating: 4.5,
    reviews: 142,
    brand: "VENEZIA",
    category: "Footwear",
    inStock: true,
    deliveryInfo: "Free delivery by Feb 10-12",
  },
  {
    id: 11,
    name: "Wool Trench Coat",
    price: "$299.00",
    originalPrice: "$399.00",
    discount: "25% OFF",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544923246-77307dd654cb?q=80&w=1000&auto=format&fit=crop",
    ],
    description:
      "A timeless classic, this Wool Trench Coat is perfect for the minimalist autumn wardrobe. Featuring a double-breasted front and belted waist, it combines warmth with effortless chic.",
    details: [
      "80% Wool, 20% Polyester blend",
      "Double-breasted button closure",
      "Belted waist for adjustable fit",
      "Two side pockets",
      "Fully lined",
      "Dry clean recommended",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Camel", hex: "#C19A6B" },
      { name: "Black", hex: "#000000" },
      { name: "Grey", hex: "#808080" },
    ],
    rating: 4.8,
    reviews: 89,
    brand: "NORDIC MINIMAL",
    category: "Outerwear",
    inStock: true,
    deliveryInfo: "Free delivery by Feb 14-16",
  },
  {
    id: 12,
    name: "Chunky Knit Sweater",
    price: "$129.00",
    originalPrice: "$169.00",
    discount: "24% OFF",
    image:
      "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1000&auto=format&fit=crop",
    ],
    description:
      "Stay cozy and stylish with this oversized Chunky Knit Sweater. Made from soft merino wool, it's the ultimate layering piece for crisp autumn days.",
    details: [
      "100% Merino Wool",
      "Oversized fit",
      "Ribbed neck, cuffs, and hem",
      "Drop shoulder design",
      "Soft and breathable",
      "Hand wash cold",
    ],
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Cream", hex: "#FFFDD0" },
      { name: "Oatmeal", hex: "#E3CAA5" },
      { name: "Sage", hex: "#9DC183" },
    ],
    rating: 4.6,
    reviews: 210,
    brand: "EARTH & THREAD",
    category: "Knitwear",
    inStock: true,
    deliveryInfo: "Free delivery by Feb 13-15",
  },
  {
    id: 13,
    name: "Midnight Tuxedo Blazer",
    price: "$399.00",
    originalPrice: "$549.00",
    discount: "27% OFF",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1000&auto=format&fit=crop",
    ],
    description:
      "Command the room with this sleek Midnight Tuxedo Blazer. Tailored to perfection, it features satin lapels and a modern slim fit, ideal for urban evening wear.",
    details: [
      "Premium wool blend",
      "Satin peak lapels",
      "Single button closure",
      "Slim fit silhouette",
      "Functional pockets",
      "Dry clean only",
    ],
    sizes: ["36", "38", "40", "42", "44"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Midnight Blue", hex: "#191970" },
    ],
    rating: 4.9,
    reviews: 75,
    brand: "URBAN TAILOR",
    category: "Blazers & Jackets",
    inStock: true,
    deliveryInfo: "Free delivery by Feb 12-14",
  },
  {
    id: 14,
    name: "Noir Chelsea Boots",
    price: "$210.00",
    originalPrice: "$280.00",
    discount: "25% OFF",
    image:
      "https://images.unsplash.com/photo-1628253747716-0c4f5c90fdda?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1628253747716-0c4f5c90fdda?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b69f?q=80&w=1000&auto=format&fit=crop",
    ],
    description:
      "Essential for the modern city dweller, these Noir Chelsea Boots offer both durability and style. Crafted from high-grade leather with a comfortable elastic gusset.",
    details: [
      "Full-grain leather upper",
      "Durable rubber outsole",
      "Elastic side panels for easy on/off",
      "Pull tab at heel",
      "Leather lining",
      "Weather-resistant finish",
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: [
      { name: "Black", hex: "#000000" },
    ],
    rating: 4.7,
    reviews: 134,
    brand: "METRO WALK",
    category: "Footwear",
    inStock: true,
    deliveryInfo: "Free delivery by Feb 11-13",
  },
  {
    id: 15,
    name: "Satin Slip Dress",
    price: "$180.00",
    originalPrice: "$240.00",
    discount: "25% OFF",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605763240004-7d93b172d7db?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop",
    ],
    description:
      "Graceful and alluring, the Satin Slip Dress drapes beautifully over the figure. Its minimalist design and luxurious sheen make it a versatile piece for elegant evenings.",
    details: [
      "High-quality satin fabric",
      "Cowl neckline",
      "Adjustable spaghetti straps",
      "Midi length",
      "Bias cut for a flattering fit",
      "Hand wash cold or dry clean",
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Champagne", hex: "#F7E7CE" },
      { name: "Silver", hex: "#C0C0C0" },
      { name: "Black", hex: "#000000" },
    ],
    rating: 4.5,
    reviews: 98,
    brand: "SILK & SATIN",
    category: "Dresses",
    inStock: true,
    deliveryInfo: "Free delivery by Feb 12-14",
  },
  {
    id: 16,
    name: "Silk Chiffon Scarf",
    price: "$95.00",
    originalPrice: "$120.00",
    discount: "21% OFF",
    image:
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601924638867-45e4e76a7d00?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1000&auto=format&fit=crop",
    ],
    description:
      "Add a touch of ethereal beauty to your outfit with this translucent Silk Chiffon Scarf. Lightweight and airy, it features a delicate floral print.",
    details: [
      "100% Silk Chiffon",
      "Translucent and lightweight",
      "Hand-rolled edges",
      "Digitally printed floral design",
      "Generous size for versatile styling",
      "Dry clean only",
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Blush Pink", hex: "#FFB6C1" },
      { name: "Ivory", hex: "#FFFFF0" },
    ],
    rating: 4.8,
    reviews: 56,
    brand: "ETHEREAL ACCESSORIES",
    category: "Accessories",
    inStock: true,
    deliveryInfo: "Free delivery by Feb 10-12",
  },
];

export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id);
}
