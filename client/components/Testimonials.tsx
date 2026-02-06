import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    content: "The personalized styling service suggested a gown for my gala that I would have never picked myself, but it was absolutely perfect. The smart boutique concept is truly revolutionary.",
    author: "Sophie Laurent",
    role: "Art Director"
  },
  {
    content: "I love the quality of the fabrics and the precision of the fit. Knowing that they use AI for inventory to reduce waste makes me feel much better about my luxury purchases.",
    author: "Julian Thorne",
    role: "Architect"
  },
  {
    content: "L'ÉLÉGANCE has transformed my shopping experience. The dashboard is so helpful for tracking my purchases and seeing how my wardrobe works together. Highly recommended!",
    author: "Emma Sinclair",
    role: "Fashion Journalist"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4 tracking-tight">What Our Clients Say</h2>
          <div className="w-16 h-[2px] bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-white p-12 shadow-sm relative group hover:shadow-xl transition-shadow duration-500">
              <Quote className="absolute top-8 left-8 w-8 h-8 text-accent/20 group-hover:text-accent transition-colors duration-500" />
              <div className="relative z-10">
                <p className="text-muted-foreground italic mb-8 leading-relaxed">
                  "{t.content}"
                </p>
                <div>
                  <h4 className="font-serif font-bold text-lg">{t.author}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-accent font-bold mt-1">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
