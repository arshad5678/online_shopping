import { useNavigate } from "react-router-dom";
import { Building2, ShoppingBag, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMode, AppMode } from "@/hooks/useMode";

/**
 * Mode Selection Page
 * Allows users to choose between Enterprise mode and Shopping mode
 * before proceeding to login
 */
export default function ModeSelection() {
  const navigate = useNavigate();
  const { setMode } = useMode();

  const handleModeSelect = (selectedMode: AppMode) => {
    setMode(selectedMode);
    if (selectedMode === "shopping") {
      navigate("/shopping-login");
    } else if (selectedMode === "enterprise") {
      // Enterprise mode can navigate to a different login or dashboard
      navigate("/shopping-login"); // Using same login for now
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 mt-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-accent" />
            <h1 className="text-5xl font-serif font-bold tracking-tight">L'ÉLÉGANCE</h1>
            <Sparkles className="w-8 h-8 text-accent" />
          </div>
          <p className="text-xl text-muted-foreground max-w-lg mx-auto">
            Welcome to our exclusive fashion experience. How would you like to explore today?
          </p>
        </div>

        {/* Mode Selection Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Enterprise Mode Card */}
          <button
            onClick={() => handleModeSelect("enterprise")}
            className="group relative bg-card rounded-2xl border-2 border-border hover:border-accent transition-all duration-300 p-8 text-left overflow-hidden"
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <Building2 className="w-8 h-8 text-accent" />
              </div>

              {/* Title & Description */}
              <h2 className="text-2xl font-serif font-bold mb-3">Enterprise Mode</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                For businesses and bulk orders. Access wholesale pricing, corporate accounts, 
                and dedicated support for your organization's fashion needs.
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Bulk ordering discounts
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Corporate billing options
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Dedicated account manager
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Priority shipping
                </li>
              </ul>

              {/* CTA Button */}
              <div className="flex items-center gap-2 text-accent font-medium">
                <span>Enter Enterprise</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-accent/5 group-hover:bg-accent/10 transition-colors duration-300" />
          </button>

          {/* Shopping Mode Card */}
          <button
            onClick={() => handleModeSelect("shopping")}
            className="group relative bg-card rounded-2xl border-2 border-border hover:border-accent transition-all duration-300 p-8 text-left overflow-hidden"
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <ShoppingBag className="w-8 h-8 text-accent" />
              </div>

              {/* Title & Description */}
              <h2 className="text-2xl font-serif font-bold mb-3">Shopping Mode</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                For individual shoppers. Browse our curated collections, discover new arrivals, 
                and enjoy personalized recommendations just for you.
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Personalized recommendations
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Exclusive member deals
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Wishlist & favorites
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Easy returns & exchanges
                </li>
              </ul>

              {/* CTA Button */}
              <div className="flex items-center gap-2 text-accent font-medium">
                <span>Start Shopping</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-accent/5 group-hover:bg-accent/10 transition-colors duration-300" />
          </button>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          You can switch modes anytime from your account settings
        </p>
      </div>
    </div>
  );
}
