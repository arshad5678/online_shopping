import { Link, useNavigate } from "react-router-dom";
import { ShoppingBag, Search, Menu, X, LogOut, User } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/hooks/useAuth";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { cartItemCount } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  /**
   * Handle logout
   */
  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    navigate("/");
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

        {/* Brand Name */}
        <Link to="/home" className="text-2xl font-serif font-bold tracking-tighter">
          L'ÉLÉGANCE
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link
            to="/home"
            className="text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors"
          >
            Products
          </Link>
          <Link
            to="/dashboard"
            className="text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors"
          >
            Dashboard
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors"
          >
            Contact
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
          {user ? (
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="hover:text-accent transition-colors p-1.5 hover:bg-muted rounded"
                aria-label="User menu"
              >
                <User size={20} />
              </button>

              {/* Dropdown Menu */}
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-background border rounded-lg shadow-lg z-40">
                  <div className="p-4 border-b">
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                  <div className="p-2 space-y-1">
                    <Link
                      to="/dashboard"
                      onClick={() => setShowUserMenu(false)}
                      className="block px-3 py-2 text-sm hover:bg-muted rounded transition-colors"
                    >
                      Dashboard
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
          ) : (
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/login")}
                className="text-xs font-semibold"
              >
                Login
              </Button>
              <Button
                size="sm"
                onClick={() => navigate("/register")}
                className="text-xs font-semibold rounded-none h-8"
              >
                Sign Up
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-b absolute top-20 left-0 right-0 py-8 px-4 flex flex-col space-y-6">
          <Link
            to="/home"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-medium uppercase tracking-widest"
          >
            Home
          </Link>
          <Link
            to="/products"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-medium uppercase tracking-widest"
          >
            Products
          </Link>

          {user && (
            <>
              <Link
                to="/dashboard"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium uppercase tracking-widest"
              >
                Dashboard
              </Link>
            </>
          )}

          <Link
            to="/cart"
            onClick={() => setIsMenuOpen(false)}
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
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-medium uppercase tracking-widest"
          >
            Contact
          </Link>

          {/* Auth Links in Mobile */}
          <div className="border-t pt-6 space-y-4">
            {user ? (
              <>
                <div className="text-sm">
                  <p className="font-medium">{user.name}</p>
                  <p className="text-muted-foreground text-xs">{user.email}</p>
                </div>
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
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  className="w-full rounded-none"
                  onClick={() => {
                    navigate("/login");
                    setIsMenuOpen(false);
                  }}
                >
                  Sign In
                </Button>
                <Button
                  className="w-full rounded-none"
                  onClick={() => {
                    navigate("/register");
                    setIsMenuOpen(false);
                  }}
                >
                  Create Account
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
