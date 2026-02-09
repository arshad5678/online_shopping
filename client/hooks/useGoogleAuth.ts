import { useCallback } from "react";
import { useAuth, User } from "./useAuth";

/**
 * Google User Response from Google Identity Services
 */
interface GoogleCredentialResponse {
  credential: string;
  select_by: string;
}

/**
 * Decoded Google JWT payload
 */
interface GoogleUserInfo {
  email: string;
  name: string;
  picture: string;
  sub: string; // Google user ID
}

/**
 * Decode JWT token (base64 decode the payload)
 */
function decodeJwt(token: string): GoogleUserInfo | null {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("Failed to decode JWT:", error);
    return null;
  }
}

/**
 * Google Client ID - Replace with your actual Google OAuth Client ID
 * To get one: https://console.cloud.google.com/apis/credentials
 */
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || "";

// Store callback for use in handleGoogleResponse
let globalOnSuccess: (() => void) | undefined;
let globalSetUser: ((user: User) => void) | undefined;

// DEBUG: Log when this file is loaded
console.log('[GoogleAuth] Loaded useGoogleAuth');

/**
 * Handle Google Sign-In response
 */
const handleGoogleResponse = (response: GoogleCredentialResponse) => {
  const userInfo = decodeJwt(response.credential);
  console.log('[GoogleAuth] handleGoogleResponse', { userInfo, globalSetUser });
  if (userInfo && globalSetUser) {
    // Load all users
    let allUsers = [];
    try {
      allUsers = JSON.parse(localStorage.getItem("all_users") || "[]");
    } catch (e) {
      allUsers = [];
    }
    // Check if user already exists
    const existing = allUsers.find((u: any) => u.id === `google-${userInfo.sub}`);
    const createdAt = existing ? existing.createdAt : new Date().toISOString();
    const user: User = {
      id: `google-${userInfo.sub}`,
      email: userInfo.email,
      name: userInfo.name,
      createdAt,
    };
    // Save to localStorage
    localStorage.setItem("auth_user", JSON.stringify(user));
    localStorage.setItem("google_user_picture", userInfo.picture);

    // Add to all_users if not present
    if (!existing) {
      allUsers.push(user);
      localStorage.setItem("all_users", JSON.stringify(allUsers));
    }

    console.log('[GoogleAuth] setUser and localStorage', user);
    globalSetUser(user);
    // Force React to update by dispatching a storage event
    window.dispatchEvent(new Event("storage"));
    if (globalOnSuccess) {
      globalOnSuccess();
    }
  } else {
    console.warn('[GoogleAuth] Google login failed: userInfo or globalSetUser missing', { userInfo, globalSetUser });
  }
};

/**
 * Custom Hook: useGoogleAuth
 * Handles Google Sign-In integration
 */
export function useGoogleAuth() {
  const { setUser } = useAuth();
  
  // Store setUser globally for the callback
  globalSetUser = setUser;

  /**
   * Initialize Google Sign-In
   * Call this on component mount
   */
  const initializeGoogle = useCallback(
    (buttonElementId: string, onSuccess?: () => void) => {
      if (!GOOGLE_CLIENT_ID) {
        console.warn("Google Client ID not configured. Using demo mode.");
        return;
      }

      // Store callback globally
      globalOnSuccess = onSuccess;

      // Wait for Google Identity Services to load
      const checkGoogle = setInterval(() => {
        if (window.google?.accounts?.id) {
          clearInterval(checkGoogle);

          window.google.accounts.id.initialize({
            client_id: GOOGLE_CLIENT_ID,
            callback: handleGoogleResponse,
          });

          const buttonElement = document.getElementById(buttonElementId);
          if (buttonElement) {
            window.google.accounts.id.renderButton(buttonElement, {
              theme: "outline",
              size: "large",
              width: "100%",
              text: "signin_with",
              shape: "rectangular",
            });
          }
        }
      }, 100);

      // Cleanup after 5 seconds if Google doesn't load
      setTimeout(() => clearInterval(checkGoogle), 5000);
    },
    []
  );

  /**
   * Trigger Google Sign-In popup manually
   */
  const triggerGoogleSignIn = useCallback(
    (onSuccess?: () => void) => {
      if (!GOOGLE_CLIENT_ID || !window.google?.accounts?.id) {
        console.warn("Google Sign-In not available");
        return;
      }

      // Store callback globally
      globalOnSuccess = onSuccess;

      // Initialize and prompt
      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: handleGoogleResponse,
      });

      // Show the One Tap prompt
      window.google.accounts.id.prompt();
    },
    []
  );

  /**
   * Demo Google Sign-In (when no Client ID is configured)
   * Simulates Google authentication for testing
   */
  const demoGoogleSignIn = useCallback(
    (onSuccess?: () => void) => {
      // Create a demo Google user
      const demoUser: User = {
        id: `google-demo-${Date.now()}`,
        email: "shopper@gmail.com",
        name: "Google Shopper",
        createdAt: new Date().toISOString(),
      };

      // Save to localStorage
      localStorage.setItem("auth_user", JSON.stringify(demoUser));
      localStorage.setItem(
        "google_user_picture",
        "https://ui-avatars.com/api/?name=Google+Shopper&background=4285f4&color=fff"
      );
      setUser(demoUser);

      if (onSuccess) {
        onSuccess();
      }
    },
    [setUser]
  );

  /**
   * Check if Google Sign-In is available
   */
  const isGoogleAvailable = Boolean(GOOGLE_CLIENT_ID);

  return {
    initializeGoogle,
    triggerGoogleSignIn,
    demoGoogleSignIn,
    isGoogleAvailable,
    GOOGLE_CLIENT_ID,
  };
}

/**
 * Extend Window interface for Google Identity Services
 */
declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: {
            client_id: string;
            callback: (response: GoogleCredentialResponse) => void;
          }) => void;
          renderButton: (
            element: HTMLElement,
            options: {
              theme?: "outline" | "filled_blue" | "filled_black";
              size?: "large" | "medium" | "small";
              width?: string;
              text?: "signin_with" | "signup_with" | "continue_with" | "signin";
              shape?: "rectangular" | "pill" | "circle" | "square";
            }
          ) => void;
          prompt: () => void;
          revoke: (email: string, callback: () => void) => void;
        };
      };
    };
  }
}
