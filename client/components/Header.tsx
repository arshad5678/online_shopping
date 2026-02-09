import { Link, useNavigate } from "react-router-dom";
import { ShoppingBag, Search, Menu, X, LogOut, User, Building2, ShoppingBag as ShoppingMode, RefreshCw, Settings, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/hooks/useAuth";
import { useMode } from "@/hooks/useMode";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { cartItemCount } = useCart();
  const { user, logout } = useAuth();
  const { mode, clearMode, isEnterpriseMode, isShoppingMode, hasSelectedMode } = useMode();
  const navigate = useNavigate();

  /**
   * Scroll to top of page
   */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /**
   * Handle navigation with scroll to top
   */
  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  /**
   * Handle logout
   */
  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    navigate("/");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  /**
   * Handle mode switch - clears mode and redirects to mode selection
   */
  const handleSwitchMode = () => {
    clearMode();
    logout();
    setShowUserMenu(false);
    navigate("/");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

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

        {/* Brand Name & Mode Badge */}
        <div className="flex items-center gap-3">
          <Link to="/home" onClick={scrollToTop} className="text-2xl font-serif font-bold tracking-tighter">
            L'ÉLÉGANCE
          </Link>
          
          {/* Mode Badge */}
          {hasSelectedMode && (
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20">
              {isEnterpriseMode ? (
                <>
                  <Building2 size={14} className="text-accent" />
                  <span className="text-xs font-medium text-accent">Enterprise</span>
                </>
              ) : (
                <>
                  <ShoppingMode size={14} className="text-accent" />
                  <span className="text-xs font-medium text-accent">Shopping</span>
                </>
              )}
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link
            to="/home"
            onClick={scrollToTop}
            className="text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors"
          >
            Home
          </Link>
          <Link
            to="/products"
            onClick={scrollToTop}
            className="text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors"
          >
            Products
          </Link>
          <Link
            to="/dashboard"
            onClick={scrollToTop}
            className="text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors"
          >
            Dashboard
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button
            aria-label="Search"
            className="hover:text-accent transition-colors"
          >
            <Search size={20} />
          </button>
          <Link
            to="/cart"
            onClick={scrollToTop}
            aria-label="Cart"
            className="hover:text-accent transition-colors relative"
          >
            <ShoppingBag size={20} />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartItemCount}
              </span>
            )}
          </Link>

          {/* User Menu */}
          {user && (
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 px-3 py-2 bg-accent/10 hover:bg-accent/20 rounded-lg transition-colors"
                aria-label="User menu"
              >
                <User size={18} />
                <span className="text-sm font-medium hidden sm:inline">Account</span>
                <ChevronDown size={16} className={`transition-transform ${showUserMenu ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-background border rounded-lg shadow-lg z-40">
                  <div className="p-4 border-b">
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                  <div className="p-2 space-y-1">
                    <Link
                      to="/settings"
                      onClick={() => { setShowUserMenu(false); scrollToTop(); }}
                      className="w-full text-left px-3 py-2 text-sm hover:bg-muted rounded transition-colors flex items-center gap-2"
                    >
                      <Settings size={16} />
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-3 py-2 text-sm hover:bg-muted rounded transition-colors flex items-center gap-2 text-destructive"
                    >
                      <LogOut size={16} />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-b absolute top-20 left-0 right-0 py-8 px-4 flex flex-col space-y-6">
          <Link
            to="/home"
            onClick={() => { setIsMenuOpen(false); scrollToTop(); }}
            className="text-lg font-medium uppercase tracking-widest"
          >
            Home
          </Link>
          <Link
            to="/products"
            onClick={() => { setIsMenuOpen(false); scrollToTop(); }}
            className="text-lg font-medium uppercase tracking-widest"
          >
            Products
          </Link>

          {user && (
            <>
              <Link
                to="/dashboard"
                onClick={() => { setIsMenuOpen(false); scrollToTop(); }}
                className="text-lg font-medium uppercase tracking-widest"
              >
                Dashboard
              </Link>
            </>
          )}

          <Link
            to="/cart"
            onClick={() => { setIsMenuOpen(false); scrollToTop(); }}
            className="text-lg font-medium uppercase tracking-widest flex items-center gap-2"
          >
            Cart
            {cartItemCount > 0 && (
              <span className="bg-accent text-accent-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartItemCount}
              </span>
            )}
          </Link>

          <Link
            to="/contact"
            onClick={() => { setIsMenuOpen(false); scrollToTop(); }}
            className="text-lg font-medium uppercase tracking-widest"
          >
            Contact
          </Link>

          {/* Auth Links in Mobile */}
          {user && (
            <div className="border-t pt-6 space-y-4">
              <div className="text-sm">
                <p className="font-medium">{user.name}</p>
                <p className="text-muted-foreground text-xs">{user.email}</p>
              </div>
              <Button
                variant="outline"
                className="w-full rounded-none"
                onClick={() => {
                  handleSwitchMode();
                  setIsMenuOpen(false);
                }}
              >
                <RefreshCw size={16} className="mr-2" />
                Switch Mode
              </Button>
              <Button
                variant="outline"
                className="w-full rounded-none"
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
              >
                <LogOut size={16} className="mr-2" />
                Logout
              </Button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
