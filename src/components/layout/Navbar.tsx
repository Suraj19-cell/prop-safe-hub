
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-brand-600">CompliantProp</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-sm font-medium text-foreground hover:text-brand-600">
                Home
              </Link>
              <div className="relative">
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center text-sm font-medium text-foreground hover:text-brand-600"
                >
                  Solutions
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Link
                        to="/solutions/landlords"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        For Landlords
                      </Link>
                      <Link
                        to="/solutions/property-managers"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        For Property Managers
                      </Link>
                      <Link
                        to="/solutions/inspectors"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        For Inspectors
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link to="/pricing" className="text-sm font-medium text-foreground hover:text-brand-600">
                Pricing
              </Link>
              <Link to="/contact" className="text-sm font-medium text-foreground hover:text-brand-600">
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link to="/register">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-secondary hover:text-foreground"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link
              to="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-secondary hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <button
              className="flex w-full items-center rounded-md px-3 py-2 text-left text-base font-medium text-foreground hover:bg-secondary hover:text-foreground"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Solutions
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {isDropdownOpen && (
              <div className="ml-4 space-y-1">
                <Link
                  to="/solutions/landlords"
                  className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-secondary hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  For Landlords
                </Link>
                <Link
                  to="/solutions/property-managers"
                  className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-secondary hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  For Property Managers
                </Link>
                <Link
                  to="/solutions/inspectors"
                  className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-secondary hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  For Inspectors
                </Link>
              </div>
            )}
            <Link
              to="/pricing"
              className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-secondary hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-secondary hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="mt-4 space-y-2">
              <Link
                to="/login"
                className="block w-full rounded-md bg-secondary px-3 py-2 text-center text-base font-medium text-foreground hover:bg-secondary/80"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="block w-full rounded-md bg-primary px-3 py-2 text-center text-base font-medium text-white hover:bg-primary/90"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
