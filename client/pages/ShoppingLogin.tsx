import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useGoogleAuth } from "@/hooks/useGoogleAuth";
import { useMode } from "@/hooks/useMode";
import { ShoppingBag, ArrowLeft, Sparkles } from "lucide-react";

/**
 * Google Icon SVG Component
 */
function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

/**
 * Shopping Login Page
 * Google Sign-In ONLY for Shopping mode
 */
export default function ShoppingLogin() {
  const navigate = useNavigate();
  const { demoGoogleSignIn, initializeGoogle, isGoogleAvailable } = useGoogleAuth();
  const { clearMode } = useMode();
  const [isLoading, setIsLoading] = useState(false);
  const [googleButtonReady, setGoogleButtonReady] = useState(false);
  const googleButtonRef = useRef<HTMLDivElement>(null);

  // Initialize Google Sign-In on mount
  useEffect(() => {
    if (isGoogleAvailable) {
      initializeGoogle("google-signin-button", () => {
        navigate("/home");
      });
      
      // Check when button is ready
      const checkButton = setInterval(() => {
        const button = document.querySelector('#google-signin-button iframe, #google-signin-button button');
        if (button) {
          setGoogleButtonReady(true);
          clearInterval(checkButton);
        }
      }, 100);
      
      // Cleanup
      return () => clearInterval(checkButton);
    }
  }, [initializeGoogle, isGoogleAvailable, navigate]);

  /**
   * Handle Google Sign-In button click
   * Clicks the actual Google button or falls back to demo mode
   */
  const handleGoogleSignIn = () => {
    if (isGoogleAvailable && googleButtonReady) {
      // Click the actual Google button
      const googleButton = document.querySelector('#google-signin-button div[role="button"]') as HTMLElement 
        || document.querySelector('#google-signin-button iframe') as HTMLIFrameElement;
      if (googleButton) {
        googleButton.click();
        return;
      }
    }
    
    // Fallback to demo mode
    setIsLoading(true);
    setTimeout(() => {
      demoGoogleSignIn(() => {
        navigate("/home");
      });
      setIsLoading(false);
    }, 800);
  };

  /**
   * Go back to mode selection
   */
  const handleBackToModeSelection = () => {
    clearMode();
    navigate("/mode-selection");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <button
          onClick={handleBackToModeSelection}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft size={18} />
          <span className="text-sm">Back to Mode Selection</span>
        </button>

        {/* Card */}
        <div className="bg-card rounded-2xl border shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-10 h-10 text-accent" />
            </div>
            <h1 className="text-3xl font-serif font-bold mb-3">Welcome Shopper</h1>
            <p className="text-muted-foreground">
              Sign in with your Google account to start your personalized shopping experience
            </p>
          </div>

          {/* Google Sign-In Button */}
          <div className="space-y-4">
            {/* Real Google Button (rendered by Google Identity Services) */}
            <div 
              id="google-signin-button" 
              ref={googleButtonRef}
              className="w-full flex justify-center min-h-[50px]"
            />
            
            {/* Fallback button when Google button is not ready */}
            {!googleButtonReady && (
              <Button
                type="button"
                variant="outline"
                className="w-full h-14 rounded-xl font-medium flex items-center justify-center gap-3 hover:bg-muted border-2 transition-all hover:border-accent/50"
                onClick={handleGoogleSignIn}
                disabled={isLoading}
              >
                <GoogleIcon className="w-6 h-6" />
                <span className="text-base">{isLoading ? "Signing in..." : "Sign in with Google"}</span>
              </Button>
            )}
          </div>

          {/* Features */}
          <div className="mt-8 pt-6 border-t">
            <p className="text-xs text-muted-foreground text-center mb-4 uppercase tracking-wider font-medium">
              Why sign in with Google?
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Sparkles size={16} className="text-accent flex-shrink-0" />
                <span>Quick & secure one-click sign in</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Sparkles size={16} className="text-accent flex-shrink-0" />
                <span>Personalized product recommendations</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Sparkles size={16} className="text-accent flex-shrink-0" />
                <span>Save wishlists & track orders easily</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mode Info */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          You're signing in to <span className="font-medium text-accent">Shopping Mode</span>
        </p>
      </div>
    </div>
  );
}
