import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FeaturedProducts() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState<number[]>([]);

  // Show only first 6 products as featured
  const featuredProducts = products.slice(0, 6);

  const handleAddToCart = (e: React.MouseEvent, product: typeof products[0]) => {
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    setAddedItems([...addedItems, product.id]);
    setTimeout(() => {
      setAddedItems((prev) => prev.filter((id) => id !== product.id));
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-serif font-bold mb-4 tracking-tight"
          >
            Featured Products
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-[2px] bg-accent mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground max-w-lg mx-auto"
          >
            Discover our hand-picked selection of the season's finest pieces,
            crafted for the discerning individual.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="group flex flex-col cursor-pointer bg-white"
              onClick={() => navigate(`/products/${product.id}`)}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                {/* Discount Badge */}
                {product.discount && (
                  <div className="absolute top-4 left-4 bg-rose-500 text-white px-2 py-1 text-xs font-semibold rounded z-10">
                    {product.discount}
                  </div>
                )}

                <Button
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 rounded-none bg-white text-black hover:bg-black hover:text-white uppercase text-[10px] font-bold tracking-widest px-8 z-10"
                  onClick={(e) => handleAddToCart(e, product)}
                >
                  <ShoppingCart size={14} className="mr-2" />
                  {addedItems.includes(product.id) ? "Added!" : "Add to Cart"}
                </Button>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                  {product.category}
                </span>
                <h3 className="text-lg font-serif mb-1 group-hover:text-accent transition-colors">
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
                <div className="flex items-center gap-2">
                  <p className="font-medium text-sm">{product.price}</p>
                  {product.originalPrice && (
                    <p className="text-xs text-muted-foreground line-through">
                      {product.originalPrice}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <Button
            variant="outline"
            className="rounded-none px-12 uppercase text-xs font-bold tracking-widest hover:bg-black hover:text-white transition-all"
            onClick={() => navigate("/products")}
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
