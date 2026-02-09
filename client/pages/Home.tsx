import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import TrendingCollections from "@/components/TrendingCollections";
import AboutSection from "@/components/AboutSection";
import SmartFeatures from "@/components/SmartFeatures";
import Testimonials from "@/components/Testimonials";
import { useAuth } from "@/hooks/useAuth";
import { useMode } from "@/hooks/useMode";

/**
 * Home Page - L'ÉLÉGANCE Fashion Boutique Homepage
 * Modern, responsive fashion boutique integrating high-end aesthetics
 * with smart technology highlights and complete navigation routing.
 */
export default function Home() {
  // Ref to FeaturedProducts section for scroll navigation
  const featuredRef = useRef<HTMLDivElement>(null);

  // Navigation hook for routing
  const navigate = useNavigate();
  
  // Auth and mode hooks for protection
  const { isAuthenticated, isLoading: authLoading } = useAuth();
  const { hasSelectedMode, isLoading: modeLoading } = useMode();

  // Redirect if not authenticated or no mode selected
  useEffect(() => {
    if (modeLoading || authLoading) return;
    if (!hasSelectedMode) {
      navigate("/mode-selection", { replace: true });
      return;
    }
    // Do not redirect to /shopping-login if not authenticated; stay on /home
  }, [isAuthenticated, hasSelectedMode, modeLoading, authLoading, navigate]);

  /**
   * Scroll to featured products section
   * Used by "Explore Collection" button in Hero
   */
  const scrollToFeatured = () => {
    featuredRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  /**
   * Navigate to products page
   * Used by "Shop Now" button in Hero
   */
  const handleShopNow = () => {
    navigate("/products");
  };

  // Show loading while checking auth status
  if (modeLoading || authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-accent/20 border-t-accent rounded-full animate-spin" />
      </div>
    );
  }

  // Don't render if mode is not selected
  if (!hasSelectedMode) {
    return null;
  }

  return (
    <>
      {/* 1. Hero Section: Large banner with stylish models and brand call to actions */}
      <Hero
        onShopNow={handleShopNow}
        onExploreCollection={scrollToFeatured}
      />

      {/* 2. Featured Products Section: Grid layout showing 6 items with add-to-cart buttons */}
      <div ref={featuredRef}>
        <FeaturedProducts />
      </div>

      {/* 3. Trending Collections Section: Seasonal outfits with modern hover effects */}
      <TrendingCollections />

      {/* 4. About the Boutique Section: Narrative describing the blend of style and digital tech */}
      <AboutSection />

      {/* 5. Smart Features Highlight Section: Showcasing AI and digital innovation in fashion */}
      <SmartFeatures />

      {/* 6. Customer Testimonials Section: Reviews from our elegant community */}
      <Testimonials />
    </>
  );
}
