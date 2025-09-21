"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/logo.jpg" alt="BudgetBuddy Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold gradient-text">BudgetBuddy</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium hover:text-finance-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-finance-primary transition-colors">
              How It Works
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-finance-primary transition-colors">
              Testimonials
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-finance-primary transition-colors">
              Pricing
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="finance" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-sm font-medium hover:text-finance-primary transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-sm font-medium hover:text-finance-primary transition-colors">
                How It Works
              </a>
              <a href="#testimonials" className="text-sm font-medium hover:text-finance-primary transition-colors">
                Testimonials
              </a>
              <a href="#pricing" className="text-sm font-medium hover:text-finance-primary transition-colors">
                Pricing
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
                <Button variant="finance" size="sm">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
