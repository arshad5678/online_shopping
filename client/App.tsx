import React from "react";
import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import ModeSelection from "./pages/ModeSelection";
import ShoppingLogin from "./pages/ShoppingLogin";
import Orders from "./pages/Orders";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useAuth } from "./hooks/useAuth";
import { useMode } from "@/hooks/useMode";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

/**
 * App Layout - Conditionally shows header/footer based on auth status  
 */
function AppLayout() {
  const { isAuthenticated, isLoading: authLoading, user } = useAuth();
  const { isShoppingMode, isEnterpriseMode, hasSelectedMode } = useMode();
  const location = useLocation();
  const isModeSelection = location.pathname === '/';
  const isShoppingLogin = location.pathname === '/shopping-login';
  const hideHeaderFooter = isModeSelection || isShoppingLogin;

  // Always show header except on mode selection and login
  const shouldShowHeader = !hideHeaderFooter;
  const shouldShowFooter = !hideHeaderFooter;

  return (
    <div className="flex flex-col min-h-screen">
      {shouldShowHeader && <Header />}
      <main className={`flex-grow ${shouldShowHeader ? 'pt-20' : ''}`}>
        <Routes>
          <Route path="/" element={<ModeSelection />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shopping-login" element={<ShoppingLogin />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/settings" element={<Settings />} />
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
