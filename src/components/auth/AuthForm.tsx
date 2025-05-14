
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

interface AuthFormProps {
  mode: "login" | "register";
}

const AuthForm: React.FC<AuthFormProps> = ({ mode }) => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [userType, setUserType] = useState("property-manager");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate authentication process
    setTimeout(() => {
      setLoading(false);
      
      if (mode === "login") {
        toast({
          title: "Login Successful",
          description: "Welcome back to CompliantProp!",
        });
        // In a real app, we would redirect to dashboard or handle authentication
      } else {
        toast({
          title: "Registration Successful",
          description: "Your account has been created. Welcome to CompliantProp!",
        });
        // In a real app, we would redirect to dashboard or handle account creation
      }
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {mode === "login" ? "Sign in to your account" : "Create your account"}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {mode === "login" ? (
              <>
                Or{" "}
                <Link to="/register" className="font-medium text-brand-600 hover:text-brand-500">
                  create a new account
                </Link>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <Link to="/login" className="font-medium text-brand-600 hover:text-brand-500">
                  Sign in
                </Link>
              </>
            )}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {mode === "register" && (
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full"
                placeholder="John Doe"
              />
            </div>
          )}

          <div>
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full"
              placeholder={mode === "login" ? "Enter your password" : "Create a strong password"}
            />
          </div>

          {mode === "register" && (
            <div>
              <Label htmlFor="userType">I am a</Label>
              <div className="mt-1">
                <select
                  id="userType"
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none sm:text-sm rounded-md border"
                >
                  <option value="property-manager">Property Manager</option>
                  <option value="landlord">Landlord</option>
                  <option value="inspector">Inspector</option>
                </select>
              </div>
            </div>
          )}

          {mode === "login" && (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-brand-600 focus:ring-brand-500 border-gray-300 rounded"
                />
                <Label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </Label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-brand-600 hover:text-brand-500">
                  Forgot your password?
                </a>
              </div>
            </div>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-brand-600 hover:bg-brand-700"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {mode === "login" ? "Signing in..." : "Creating account..."}
              </span>
            ) : (
              <>{mode === "login" ? "Sign in" : "Create account"}</>
            )}
          </Button>
        </form>

        {mode === "register" && (
          <p className="mt-4 text-xs text-gray-500">
            By creating an account, you agree to our{" "}
            <a href="#" className="text-brand-600 hover:text-brand-500">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-brand-600 hover:text-brand-500">
              Privacy Policy
            </a>
            .
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
