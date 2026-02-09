import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { useState } from "react";
import {
  ShoppingBag,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  Star,
  Truck,
  RotateCcw,
  Shield,
  Check,
} from "lucide-react";
import { getProductById, Product } from "@/data/products";

/**
 * Product Detail Page
 * Full-screen product view similar to Myntra with detailed information
 */
export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const product = getProductById(Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => navigate("/products")}>
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  const images = product.images || [product.image];

  const handleAddToCart = () => {
    if (product.sizes && product.sizes.length > 1 && !selectedSize) {
      alert("Please select a size");
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });

    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 3000);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/cart");
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300"
        }
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <button
            onClick={() => navigate("/")}
            className="hover:text-foreground transition-colors"
          >
            Home
          </button>
          <ChevronRight size={14} className="mx-2" />
          <button
            onClick={() => navigate("/products")}
            className="hover:text-foreground transition-colors"
          >
            Products
          </button>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-[3/4] bg-muted rounded-lg overflow-hidden group">
              <img
                src={images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* Image Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              {/* Discount Badge */}
              {product.discount && (
                <div className="absolute top-4 left-4 bg-rose-500 text-white px-3 py-1 rounded-sm text-sm font-semibold">
                  {product.discount}
                </div>
              )}

              {/* Wishlist & Share */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors ${
                    isWishlisted
                      ? "bg-rose-500 text-white"
                      : "bg-white/90 text-gray-600 hover:bg-white"
                  }`}
                >
                  <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
                </button>
                <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white text-gray-600">
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-24 rounded-md overflow-hidden border-2 transition-colors ${
                      selectedImageIndex === index
                        ? "border-primary"
                        : "border-transparent hover:border-muted-foreground/30"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Side - Product Details */}
          <div className="lg:sticky lg:top-24 lg:self-start space-y-6">
            {/* Brand & Title */}
            <div>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                {product.brand}
              </p>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                {product.name}
              </h1>
              <p className="text-muted-foreground">{product.category}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-1 rounded text-sm font-semibold">
                {product.rating}
                <Star size={12} fill="currentColor" />
              </div>
              <span className="text-muted-foreground">
                {product.reviews.toLocaleString()} Reviews
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold">{product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-muted-foreground line-through">
                    {product.originalPrice}
                  </span>
                  <span className="text-rose-500 font-semibold">
                    {product.discount}
                  </span>
                </>
              )}
            </div>
            <p className="text-sm text-green-600 font-medium">
              Inclusive of all taxes
            </p>

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <h3 className="font-semibold mb-3">
                  Select Color:{" "}
                  <span className="font-normal text-muted-foreground">
                    {selectedColor || "Choose a color"}
                  </span>
                </h3>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${
                        selectedColor === color.name
                          ? "border-primary scale-110"
                          : "border-gray-200 hover:scale-105"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {selectedColor === color.name && (
                        <Check
                          size={16}
                          className={`mx-auto ${
                            color.hex === "#FFFFFF" || color.hex === "#FFFAF0" || color.hex === "#FFFDD0"
                              ? "text-gray-800"
                              : "text-white"
                          }`}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 1 && (
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold">Select Size</h3>
                  <button className="text-sm text-rose-500 font-medium hover:underline">
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[50px] h-12 px-4 rounded-md border-2 font-medium transition-all ${
                        selectedSize === size
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-gray-200 hover:border-primary/50"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Button
                size="lg"
                variant="outline"
                className="flex-1 h-14 text-lg font-semibold rounded-md border-2"
                onClick={handleAddToCart}
                disabled={isAddedToCart}
              >
                {isAddedToCart ? (
                  <>
                    <Check size={20} className="mr-2" />
                    Added to Bag
                  </>
                ) : (
                  <>
                    <ShoppingBag size={20} className="mr-2" />
                    Add to Bag
                  </>
                )}
              </Button>
              <Button
                size="lg"
                className="flex-1 h-14 text-lg font-semibold rounded-md bg-rose-500 hover:bg-rose-600"
                onClick={handleBuyNow}
              >
                Buy Now
              </Button>
            </div>

            {/* Delivery Info */}
            <div className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-3">
                <Truck size={20} className="text-muted-foreground" />
                <div>
                  <p className="font-medium">{product.deliveryInfo}</p>
                  <p className="text-sm text-muted-foreground">
                    Enter pincode for exact delivery dates
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw size={20} className="text-muted-foreground" />
                <div>
                  <p className="font-medium">Easy 30 days return & exchange</p>
                  <p className="text-sm text-muted-foreground">
                    Choose to return or exchange if not satisfied
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield size={20} className="text-muted-foreground" />
                <div>
                  <p className="font-medium">100% Authentic Products</p>
                  <p className="text-sm text-muted-foreground">
                    Shop with confidence - All products are genuine
                  </p>
                </div>
              </div>
            </div>

            {/* Product Description */}
            <div className="border-t pt-6">
              <h3 className="font-semibold text-lg mb-3">Product Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Product Details */}
            <div className="border-t pt-6">
              <h3 className="font-semibold text-lg mb-3">Product Details</h3>
              <ul className="space-y-2">
                {product.details.map((detail, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <Check size={16} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
