import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1000&auto=format&fit=crop" 
                alt="Inside our boutique" 
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
            {/* Decorative background box */}
            <div className="absolute top-12 -left-12 w-full h-full border border-accent/30 -z-0 hidden md:block" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary flex items-center justify-center p-4 z-20">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-center leading-tight">
                Crafting the future of fashion
              </p>
            </div>
          </div>

          <div className="lg:pl-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-6 inline-block">Our Heritage</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 tracking-tight text-primary leading-tight">
              Where Elegance Meets <br />
              <span className="italic font-normal">Digital Innovation</span>
            </h2>
            <div className="space-y-6 mb-12">
              <p className="text-muted-foreground leading-relaxed text-lg">
                L'ÉLÉGANCE is not just a boutique; it's a smart fashion ecosystem. By integrating cutting-edge digital technology into our design and inventory processes, we ensure that every piece is both a statement of style and a masterpiece of precision.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From AI-driven style recommendations to a seamless digital-first shopping experience, we are redefining what it means to be a premium clothier in the 21st century. Our story is one of tradition meeting technology, resulting in a wardrobe that is perfectly tailored to your lifestyle.
              </p>
            </div>
            <Button className="rounded-none bg-primary hover:bg-primary/90 text-white uppercase text-[10px] font-bold tracking-widest h-14 px-12 transition-all hover:px-14">
              Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
