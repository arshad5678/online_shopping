import { Button } from "@/components/ui/button";

export default function Hero() {
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
          <span className="inline-block text-sm uppercase tracking-[0.3em] font-medium mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Est. 2024
          </span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 tracking-tighter animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            L'ÉLÉGANCE
          </h1>
          <p className="text-xl md:text-2xl font-light mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            Redefining modern luxury through smart craftsmanship and timeless
            design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-700">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 rounded-none h-14 px-10 text-xs font-bold uppercase tracking-widest"
            >
              Shop Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-black rounded-none h-14 px-10 text-xs font-bold uppercase tracking-widest"
            >
              Explore Collection
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/60 text-[10px] uppercase tracking-widest mb-2">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
