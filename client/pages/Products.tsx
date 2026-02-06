import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { useState } from "react";
import { ShoppingBag } from "lucide-react";

/**
 * Products Page
 * Displays the full product catalog with add-to-cart functionality
 */
export default function Products() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState<number[]>([]);

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Classic White Blazer",
      price: "$299.00",
      image:
        "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Designer Jeans",
      price: "$199.00",
      image:
        "https://images.unsplash.com/photo-1542272604-787c62d465d1?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Silk Evening Gown",
      price: "$599.00",
      image:
        "https://images.unsplash.com/photo-1595777707802-18b27be3c3ce?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Leather Handbag",
      price: "$399.00",
      image:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Gold Heels",
      price: "$249.00",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "Pearl Necklace",
      price: "$179.00",
      image:
        "https://images.unsplash.com/photo-1599643478185-b0f29208617b?q=80&w=1000&auto=format&fit=crop",
    },
  ];

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
              className="group cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <div className="overflow-hidden bg-muted rounded-lg mb-4 h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-accent text-lg font-medium mb-4">
                {product.price}
              </p>
              <Button
                variant={addedItems.includes(product.id) ? "default" : "outline"}
                className="w-full rounded-none transition-all"
                onClick={() => handleAddToCart(product)}
              >
                {addedItems.includes(product.id) ? (
                  <>
                    <ShoppingBag size={18} className="mr-2" />
                    Added to Cart!
                  </>
                ) : (
                  "Add to Cart"
                )}
              </Button>
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
