import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import ModeSelection from "./pages/ModeSelection";
import ShoppingLogin from "./pages/ShoppingLogin";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useAuth } from "./hooks/useAuth";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

/**
 * App Layout - Conditionally shows header/footer based on auth status  
 */
function AppLayout() {
  const { isAuthenticated, isLoading: authLoading, user } = useAuth();

  // Show header/footer when user is authenticated
  const shouldShowHeader = isAuthenticated && !authLoading;
  const shouldShowFooter = isAuthenticated && !authLoading;

  // Debug output
  // Remove this after debugging
  const debug = (
    <div style={{ background: '#fee', color: '#900', padding: 8, fontSize: 12 }}>
      <strong>DEBUG:</strong> isAuthenticated: {String(isAuthenticated)} | authLoading: {String(authLoading)} | user: {user ? JSON.stringify(user) : 'null'}
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">
      {debug}
      {shouldShowHeader && <Header />}
      <main className={`flex-grow ${shouldShowHeader ? 'pt-20' : ''}`}>
        <Routes>
          {/* Default route now shows Mode Selection directly */}
          <Route path="/" element={<ModeSelection />} />

          {/* Home Route - Accessible after login */}
          <Route path="/home" element={<Home />} />

          {/* Google Sign-In Route */}
          <Route path="/shopping-login" element={<ShoppingLogin />} />

          {/* Products Routes */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />

          {/* Dashboard Route */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Cart Route */}
          <Route path="/cart" element={<Cart />} />

          {/* Settings Route */}
          <Route path="/settings" element={<Settings />} />

          {/* Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {shouldShowFooter && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppLayout />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
