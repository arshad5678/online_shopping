import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { useState } from "react";
import { ShoppingBag, Star } from "lucide-react";
import { products } from "@/data/products";

/**
 * Products Page
 * Displays the full product catalog with add-to-cart functionality
 */
export default function Products() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState<number[]>([]);

  /**
   * Handle Add to Cart click
   * Adds product to cart and shows visual feedback
   */
  const handleAddToCart = (product: (typeof products)[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });

    // Show visual feedback
    setAddedItems([...addedItems, product.id]);
    setTimeout(() => {
      setAddedItems((prev) => prev.filter((id) => id !== product.id));
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Products Header */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Our Collections
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse our curated selection of premium fashion pieces designed for
            the modern elegance enthusiast.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-xl rounded-lg overflow-hidden bg-card"
            >
              {/* Clickable Image Area */}
              <div
                className="relative overflow-hidden bg-muted h-72"
                onClick={() => navigate(`/products/${product.id}`)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Discount Badge */}
                {product.discount && (
                  <div className="absolute top-3 left-3 bg-rose-500 text-white px-2 py-1 text-xs font-semibold rounded">
                    {product.discount}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4">
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide mb-1">
                  {product.brand}
                </p>
                <h3
                  className="text-lg font-semibold mb-2 hover:text-rose-500 transition-colors cursor-pointer truncate"
                  onClick={() => navigate(`/products/${product.id}`)}
                >
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1 bg-green-600 text-white px-1.5 py-0.5 rounded text-xs font-semibold">
                    {product.rating}
                    <Star size={10} fill="currentColor" />
                  </div>
                  <span className="text-xs text-muted-foreground">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-lg font-bold">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>

                <Button
                  variant={addedItems.includes(product.id) ? "default" : "outline"}
                  className="w-full transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(product);
                  }}
                >
                  {addedItems.includes(product.id) ? (
                    <>
                      <ShoppingBag size={18} className="mr-2" />
                      Added to Cart!
                    </>
                  ) : (
                    "Add to Bag"
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-accent hover:text-accent/80"
          >
            ← Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
