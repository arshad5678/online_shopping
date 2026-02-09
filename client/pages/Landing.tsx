import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useMode } from "@/hooks/useMode";

/**
 * Landing Page
 * Flow: Mode Selection -> Shopping Login -> Home
 * Redirects to appropriate page based on current state
 */
export default function Landing() {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading: authLoading } = useAuth();
  const { hasSelectedMode, isLoading: modeLoading } = useMode();

  useEffect(() => {
    // Wait for loading to complete
    if (modeLoading || authLoading) return;

    // Step 3: If authenticated, go to home
    if (isAuthenticated) {
      navigate("/home", { replace: true });
      return;
    }

    // Step 2: If mode selected but not authenticated, go to login
    if (hasSelectedMode && !isAuthenticated) {
      navigate("/shopping-login", { replace: true });
      return;
    }

    // Step 1: If no mode selected, go to mode selection
    if (!hasSelectedMode) {
      navigate("/mode-selection", { replace: true });
      return;
    }
  }, [isAuthenticated, hasSelectedMode, modeLoading, authLoading, navigate]);

  // Show loading while determining where to navigate
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-accent/20 border-t-accent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}
