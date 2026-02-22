import { Link, useNavigate } from "react-router-dom";
import { ShoppingBag, Search, Menu, LogOut, User, Building2, ShoppingBag as ShoppingMode, RefreshCw, Settings, ChevronDown, Package } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/hooks/useAuth";
import { useMode } from "@/hooks/useMode";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";

export default function Header() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { cartItemCount } = useCart();
  const { user, logout, isAuthenticated } = useAuth();
  const { clearMode, isEnterpriseMode, isShoppingMode, hasSelectedMode } = useMode();
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
    navigate("/"); // Redirect to mode selection
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

        {/* Left Side: Hamburger & Brand */}
        <div className="flex items-center gap-4">
          {/* Hamburger Menu (Sidebar Trigger) */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="p-2 hover:bg-accent/10 rounded-full transition-colors"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px] overflow-y-auto">
              <SheetHeader className="mb-6 text-left">
                <SheetTitle className="text-2xl font-serif font-bold tracking-tighter">
                  L'ÉLÉGANCE
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col space-y-6">
                {/* Main Categories */}
                <div className="flex flex-col space-y-4">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Categories
                  </h3>
                  <div className="flex flex-col space-y-2">
                    <SheetClose asChild>
                      <Link
                        to="/category/men"
                        onClick={scrollToTop}
                        className="text-lg font-medium hover:text-accent transition-colors py-1"
                      >
                        Men
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        to="/category/women"
                        onClick={scrollToTop}
                        className="text-lg font-medium hover:text-accent transition-colors py-1"
                      >
                        Women
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        to="/category/kids"
                        onClick={scrollToTop}
                        className="text-lg font-medium hover:text-accent transition-colors py-1"
                      >
                        Kids
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        to="/discounts"
                        onClick={scrollToTop}
                        className="text-lg font-medium hover:text-accent transition-colors py-1 text-rose-500"
                      >
                        Discounts
                      </Link>
                    </SheetClose>
                  </div>
                </div>

                {/* Account & Orders */}
                <div className="flex flex-col space-y-4 pt-4 border-t">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    My Account
                  </h3>
                  <div className="flex flex-col space-y-2">
                    {isAuthenticated ? (
                      <>
                        <SheetClose asChild>
                          <Link
                            to="/orders"
                            onClick={scrollToTop}
                            className="text-lg font-medium hover:text-accent transition-colors py-1 flex items-center gap-2"
                          >
                            <Package size={18} />
                            Orders
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link
                            to="/dashboard"
                            onClick={scrollToTop}
                            className="text-lg font-medium hover:text-accent transition-colors py-1"
                          >
                            Dashboard
                          </Link>
                        </SheetClose>
                      </>
                    ) : (
                      <div className="pb-2">
                        <p className="text-sm text-muted-foreground mb-2">Sign in to view orders</p>
                        {isShoppingMode && (
                          <SheetClose asChild>
                            <Button
                              variant="outline"
                              onClick={() => navigate("/shopping-login")}
                              className="w-full"
                            >
                              Login
                            </Button>
                          </SheetClose>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Navigation Links (Mobile Backup) */}
                <div className="flex flex-col space-y-4 pt-4 border-t lg:hidden">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Menu
                  </h3>
                  <SheetClose asChild>
                    <Link
                      to="/home"
                      onClick={scrollToTop}
                      className="text-lg font-medium hover:text-accent transition-colors"
                    >
                      Home
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      to="/products"
                      onClick={scrollToTop}
                      className="text-lg font-medium hover:text-accent transition-colors"
                    >
                      All Products
                    </Link>
                  </SheetClose>
                </div>

                {/* Footer / User Info */}
                {user && (
                  <div className="mt-auto pt-6 border-t space-y-4">
                    <div className="text-sm">
                      <p className="font-medium">{user.name}</p>
                      <p className="text-muted-foreground text-xs">{user.email}</p>
                    </div>
                    <div className="flex gap-2">
                      <SheetClose asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          onClick={handleSwitchMode}
                        >
                          <RefreshCw size={14} className="mr-2" />
                          Switch
                        </Button>
                      </SheetClose>
                      <SheetClose asChild>
                        <Button
                          variant="destructive"
                          size="sm"
                          className="flex-1"
                          onClick={handleLogout}
                        >
                          <LogOut size={14} className="mr-2" />
                          Logout
                        </Button>
                      </SheetClose>
                    </div>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>

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
            {isAuthenticated && cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartItemCount}
              </span>
            )}
          </Link>

          {/* Orders Link - Visible when logged in */}
          {isAuthenticated && (
            <Link
              to="/orders"
              onClick={scrollToTop}
              aria-label="My Orders"
              className="hover:text-accent transition-colors"
              title="My Orders"
            >
              <Package size={20} />
            </Link>
          )}

          {/* User Menu or Login Button */}
          {isShoppingMode && !isAuthenticated && (
            <Button
              variant="outline"
              onClick={() => navigate("/shopping-login")}
              className="rounded-none hidden sm:flex"
            >
              Login
            </Button>
          )}
          {isAuthenticated && user && (
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
                      to="/orders"
                      onClick={() => { setShowUserMenu(false); scrollToTop(); }}
                      className="w-full text-left px-3 py-2 text-sm hover:bg-muted rounded transition-colors flex items-center gap-2"
                    >
                      <ShoppingBag size={16} />
                      My Orders
                    </Link>
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
    </header>
  );
}
