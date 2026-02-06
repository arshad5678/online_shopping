import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    name: "Silk Evening Gown",
    price: "$299.00",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800&auto=format&fit=crop",
    category: "Dresses"
  },
  {
    id: 2,
    name: "Tailored Wool Blazer",
    price: "$185.00",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
    category: "Outerwear"
  },
  {
    id: 3,
    name: "Cashmere Turtleneck",
    price: "$120.00",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop",
    category: "Knitwear"
  },
  {
    id: 4,
    name: "Leather Chelsea Boots",
    price: "$210.00",
    image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=800&auto=format&fit=crop",
    category: "Footwear"
  },
  {
    id: 5,
    name: "Pleated Midi Skirt",
    price: "$89.00",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop",
    category: "Skirts"
  },
  {
    id: 6,
    name: "Structured Handbag",
    price: "$155.00",
    image: "https://images.unsplash.com/photo-1584917033904-491a84b2efbd?q=80&w=800&auto=format&fit=crop",
    category: "Accessories"
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4 tracking-tight">Featured Products</h2>
          <div className="w-16 h-[2px] bg-accent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-lg mx-auto">
            Discover our hand-picked selection of the season's finest pieces, crafted for the discerning individual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted mb-6">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <Button 
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 rounded-none bg-white text-black hover:bg-black hover:text-white uppercase text-[10px] font-bold tracking-widest px-8"
                >
                  <ShoppingCart size={14} className="mr-2" />
                  Add to Cart
                </Button>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">{product.category}</span>
                <h3 className="text-lg font-serif mb-1 group-hover:text-accent transition-colors">{product.name}</h3>
                <p className="font-medium text-sm">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="outline" className="rounded-none px-12 uppercase text-xs font-bold tracking-widest hover:bg-black hover:text-white transition-all">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
