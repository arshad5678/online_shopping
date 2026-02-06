import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import { AlertCircle } from "lucide-react";

/**
 * Login Page
 * User authentication with email and password
 */
export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Handle login form submission
   */
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Validate inputs
      if (!email || !password) {
        setError("Please fill in all fields");
        setIsLoading(false);
        return;
      }

      if (!email.includes("@")) {
        setError("Please enter a valid email");
        setIsLoading(false);
        return;
      }

      // Attempt login
      login(email, password);

      // Navigate to home on success
      navigate("/home");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Login failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif font-bold mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">
            Sign in to your L'ÉLÉGANCE account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Error Alert */}
          {error && (
            <div className="bg-destructive/10 border border-destructive text-destructive px-4 py-3 rounded-lg flex items-start gap-3">
              <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Error</p>
                <p className="text-sm">{error}</p>
              </div>
            </div>
          )}

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className="rounded-none h-11"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              className="rounded-none h-11"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Demo: Use any email and password you created during registration
            </p>
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            className="w-full rounded-none h-12 font-semibold"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-4">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground">OR</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Demo Credentials */}
        <div className="bg-muted p-4 rounded-lg mb-6">
          <p className="text-sm font-medium mb-2">Demo Credentials</p>
          <p className="text-xs text-muted-foreground">
            Email: <span className="font-mono">demo@example.com</span>
          </p>
          <p className="text-xs text-muted-foreground">
            Password: <span className="font-mono">DemoPass@2024Secure</span>
          </p>
          <button
            type="button"
            onClick={() => {
              setEmail("demo@example.com");
              setPassword("DemoPass@2024Secure");
            }}
            className="text-xs text-accent hover:text-accent/80 mt-3 font-medium"
          >
            Fill Demo Credentials
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-muted-foreground">
          Don't have an account?{" "}
          <Link to="/register" className="text-accent hover:text-accent/80 font-medium">
            Sign up
          </Link>
        </p>

        {/* Back to Home */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="w-full mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to Login
        </button>
      </div>
    </div>
  );
}
