import { Button } from "@/components/ui/button";

const COLLECTIONS = [
  {
    title: "Minimalist Autumn",
    description:
      "Embrace the beauty of simplicity with our earth-toned essentials.",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
    tag: "Trending",
  },
  {
    title: "Urban Nocturne",
    description: "Sleek, sophisticated evening wear for the city dweller.",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop",
    tag: "New Arrival",
  },
  {
    title: "Ethereal Silk",
    description:
      "Flowing silhouettes and luxurious fabrics for effortless grace.",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop",
    tag: "Exclusives",
  },
  {
    title: "Diamond & Gold",
    description: "Timeless elegance with our premium jewelry selection.",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop",
    tag: "Luxury",
  },
];

export default function TrendingCollections() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-serif font-bold mb-4 tracking-tight text-primary">
              Trending Collections
            </h2>
            <p className="text-muted-foreground">
              Our latest curations define the contemporary fashion landscape,
              blending innovation with heritage.
            </p>
          </div>
          <Button
            variant="link"
            className="text-primary font-bold uppercase tracking-widest text-[10px] p-0 h-auto group"
          >
            Discover More{" "}
            <span className="ml-2 transition-transform group-hover:translate-x-1">
              →
            </span>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COLLECTIONS.map((item, idx) => (
            <div
              key={idx}
              className="group relative aspect-[3/4] overflow-hidden bg-muted"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-[10px] uppercase tracking-widest text-accent font-bold mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {item.tag}
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm mb-6 max-w-xs transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {item.description}
                </p>
                <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                  <Button
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-black rounded-none text-[10px] font-bold uppercase tracking-widest px-6 h-10 transition-colors"
                    onClick={() => window.location.href = '/products'}
                  >
                    Shop Collection
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
