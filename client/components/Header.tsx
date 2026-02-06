import { Link } from "react-router-dom";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Brand Name */}
        <Link to="/" className="text-2xl font-serif font-bold tracking-tighter">
          L'ÉLÉGANCE
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors">Home</Link>
          <Link to="/collections" className="text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors">Collections</Link>
          <Link to="/about" className="text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors">About</Link>
          <Link to="/contact" className="text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors">Contact</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button aria-label="Search" className="hover:text-accent transition-colors">
            <Search size={20} />
          </button>
          <button aria-label="Cart" className="hover:text-accent transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-b absolute top-20 left-0 right-0 py-8 px-4 flex flex-col space-y-6">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium uppercase tracking-widest">Home</Link>
          <Link to="/collections" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium uppercase tracking-widest">Collections</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium uppercase tracking-widest">About</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium uppercase tracking-widest">Contact</Link>
        </div>
      )}
    </header>
  );
}
