import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import TrendingCollections from "@/components/TrendingCollections";
import AboutSection from "@/components/AboutSection";
import SmartFeatures from "@/components/SmartFeatures";
import Testimonials from "@/components/Testimonials";

/**
 * L'ÉLÉGANCE Fashion Boutique Homepage
 * This page represents a modern, responsive fashion boutique
 * integrating high-end aesthetics with smart technology highlights.
 */
export default function Index() {
  return (
    <>
      {/* 1. Hero Section: Large banner with stylish models and brand call to actions */}
      <Hero />

      {/* 2. Featured Products Section: Grid layout showing 6 items with add-to-cart buttons */}
      <FeaturedProducts />

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
