import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6 tracking-tighter">L'ÉLÉGANCE</h3>
            <p className="text-sm text-primary-foreground/60 leading-relaxed mb-6">
              A modern, smart fashion boutique dedicated to bringing you the most elegant and technologically curated collections.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/collections" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Collections</Link></li>
              <li><Link to="/about" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 text-accent" />
                <span className="text-sm text-primary-foreground/60">123 Fashion Ave, Paris, France</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-accent" />
                <span className="text-sm text-primary-foreground/60">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-accent" />
                <span className="text-sm text-primary-foreground/60">hello@lelegance.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="text-sm text-primary-foreground/60 mb-6">Subscribe to get the latest trends and exclusive offers.</p>
            <form className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-transparent border-b border-primary-foreground/20 py-2 text-sm focus:border-accent outline-none flex-grow"
              />
              <button type="submit" className="text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors">Join</button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-primary-foreground/40 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} L'ÉLÉGANCE. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-primary-foreground/40">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
