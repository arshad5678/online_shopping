import { useState, useEffect } from "react";

/**
 * User Interface
 */
export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

/**
 * Custom Hook: useAuth
 * Manages user authentication with localStorage persistence
 * Users can register, login, and logout
 */
export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    // Initialize or update demo user
    const existingUsers = JSON.parse(localStorage.getItem("all_users") || "[]");
    const demoUserIndex = existingUsers.findIndex(
      (u: User & { password?: string }) => u.email === "demo@example.com"
    );

    const newDemoUser = {
      id: "demo-user",
      email: "demo@example.com",
      name: "Demo User",
      password: "DemoPass@2024Secure",
      createdAt: new Date().toISOString(),
    };

    if (demoUserIndex === -1) {
      // Demo user doesn't exist, create it
      existingUsers.push(newDemoUser);
    } else {
      // Demo user exists, update password to new secure one
      existingUsers[demoUserIndex] = newDemoUser;
    }

    localStorage.setItem("all_users", JSON.stringify(existingUsers));

    // Load current user
    const savedUser = localStorage.getItem("auth_user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Failed to load user from localStorage:", error);
      }
    }
    setIsLoading(false);
  }, []);

  // Save user to localStorage when it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("auth_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("auth_user");
    }
  }, [user]);

  /**
   * Register a new user
   */
  const register = (email: string, name: string, password: string) => {
    // In a real app, you'd send this to a backend
    // For now, we'll simulate it with localStorage

    // Check if user already exists
    const existingUsers = JSON.parse(localStorage.getItem("all_users") || "[]");
    if (existingUsers.find((u: User) => u.email === email)) {
      throw new Error("User already exists with this email");
    }

    // Create new user
    const newUser: User = {
      id: Date.now().toString(),
      email,
      name,
      createdAt: new Date().toISOString(),
    };

    // Store password (in real app, this would be hashed on backend)
    const users = JSON.parse(localStorage.getItem("all_users") || "[]");
    users.push({
      ...newUser,
      password, // In production, NEVER store plain passwords on client
    });
    localStorage.setItem("all_users", JSON.stringify(users));

    // Set current user
    setUser(newUser);
    return newUser;
  };

  /**
   * Login user with email and password
   */
  const login = (email: string, password: string) => {
    // In a real app, you'd send this to a backend
    const users = JSON.parse(localStorage.getItem("all_users") || "[]");
    
    // Trim inputs and find user
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();
    
    const foundUser = users.find(
      (u: any) =>
        u.email.toLowerCase() === trimmedEmail &&
        u.password === trimmedPassword
    );

    if (!foundUser) {
      // Debug: Show what we're looking for
      console.log("Login failed. Looking for:", { email: trimmedEmail, password: trimmedPassword });
      console.log("Available users:", users.map((u: any) => ({ email: u.email, password: u.password })));
      throw new Error("Invalid email or password");
    }

    const { password: _, ...userWithoutPassword } = foundUser;
    setUser(userWithoutPassword);
    return userWithoutPassword;
  };

  /**
   * Logout current user
   */
  const logout = () => {
    setUser(null);
  };

  /**
   * Update user profile
   */
  const updateProfile = (updates: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      return updatedUser;
    }
    return null;
  };

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    register,
    login,
    logout,
    updateProfile,
  };
}
