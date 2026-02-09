import { useState, useEffect, useCallback } from "react";

/**
 * Mode types available in the application
 */
export type AppMode = "enterprise" | "shopping" | null;

/**
 * Custom Hook: useMode
 * Manages application mode selection with localStorage persistence
 * Users can choose between Enterprise mode and Shopping mode before logging in
 */
export function useMode() {
  const [mode, setModeState] = useState<AppMode>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load mode from localStorage on mount
  useEffect(() => {
    const savedMode = localStorage.getItem("app_mode") as AppMode;
    if (savedMode === "enterprise" || savedMode === "shopping") {
      setModeState(savedMode);
    }
    setIsLoading(false);
  }, []);

  /**
   * Set the application mode
   */
  const setMode = useCallback((newMode: AppMode) => {
    setModeState(newMode);
    if (newMode) {
      localStorage.setItem("app_mode", newMode);
    } else {
      localStorage.removeItem("app_mode");
    }
  }, []);

  /**
   * Clear the selected mode
   */
  const clearMode = useCallback(() => {
    setModeState(null);
    localStorage.removeItem("app_mode");
  }, []);

  /**
   * Check if mode is selected
   */
  const hasSelectedMode = mode !== null;

  /**
   * Check if in enterprise mode
   */
  const isEnterpriseMode = mode === "enterprise";

  /**
   * Check if in shopping mode
   */
  const isShoppingMode = mode === "shopping";

  return {
    mode,
    setMode,
    clearMode,
    hasSelectedMode,
    isEnterpriseMode,
    isShoppingMode,
    isLoading,
  };
}
