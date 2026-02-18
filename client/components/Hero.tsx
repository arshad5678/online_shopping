import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

/**
 * Hero Component Props
 * @param onShopNow - Callback when "Shop Now" button is clicked
 * @param onExploreCollection - Callback when "Explore Collection" button is clicked
 */
interface HeroProps {
  onShopNow?: () => void;
  onExploreCollection?: () => void;
}

export default function Hero({
  onShopNow,
  onExploreCollection,
}: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
          alt="Stylish models in elegant clothing"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-start">
        <div className="max-w-2xl text-white">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block text-sm uppercase tracking-[0.3em] font-medium mb-6"
          >
            Est. 2024
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl font-serif font-bold mb-8 tracking-tighter"
          >
            L'ÉLÉGANCE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl font-light mb-12 leading-relaxed"
          >
            Redefining modern luxury through smart craftsmanship and timeless
            design.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 rounded-none h-14 px-10 text-xs font-bold uppercase tracking-widest"
              onClick={onShopNow}
            >
              Shop Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-black rounded-none h-14 px-10 text-xs font-bold uppercase tracking-widest"
              onClick={onExploreCollection}
            >
              Explore Collection
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/60 text-[10px] uppercase tracking-widest mb-2">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}
