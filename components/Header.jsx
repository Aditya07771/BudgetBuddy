"use client"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X, LayoutDashboard, PenBox } from "lucide-react"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import Image from "next/image"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/logo.jpg" 
              alt="BudgetBuddy Logo" 
              width={32}
              height={32}
              className="h-8 w-auto" 
            />
            <span className="text-xl font-bold gradient-text">BudgetBuddy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <SignedOut>
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
            </SignedOut>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <SignedOut>
              <SignInButton forceRedirectUrl="/dashboard">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </SignInButton>
              <SignInButton forceRedirectUrl="/dashboard">
                <Button size="lg" className="group btn-hero">
                  Get Started
                </Button>
              </SignInButton>
            </SignedOut>
            
            <SignedIn>
              <Link href="/dashboard">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <LayoutDashboard size={16} />
                  <span>Dashboard</span>
                </Button>
              </Link>
              <Link href="/transaction/create">
                <Button size="sm" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white">
                  <PenBox size={16} />
                  <span>Add Transaction</span>
                </Button>
              </Link>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8",
                  },
                }}
              />
            </SignedIn>
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
              <SignedOut>
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
                  <SignInButton forceRedirectUrl="/dashboard">
                    <Button variant="ghost" size="sm">
                      Sign In
                    </Button>
                  </SignInButton>
                  <SignInButton forceRedirectUrl="/dashboard">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                      Get Started
                    </Button>
                  </SignInButton>
                </div>
              </SignedOut>

              <SignedIn>
                <Link href="/dashboard" className="flex items-center gap-2 text-sm font-medium hover:text-finance-primary transition-colors">
                  <LayoutDashboard size={16} />
                  Dashboard
                </Link>
                <Link href="/transaction/create" className="flex items-center gap-2 text-sm font-medium hover:text-finance-primary transition-colors">
                  <PenBox size={16} />
                  Add Transaction
                </Link>
                <div className="pt-4">
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "w-10 h-10",
                      },
                    }}
                  />
                </div>
              </SignedIn>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header