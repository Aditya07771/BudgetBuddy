import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-finance-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/logo.jpg" alt="BudgetBuddy Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold">BudgetBuddy</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Transform your financial life with AI-powered finance management. Smart Money, Simple Life.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-300 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#security" className="text-gray-300 hover:text-white transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#integrations" className="text-gray-300 hover:text-white transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#mobile-app" className="text-gray-300 hover:text-white transition-colors">
                  Mobile App
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#careers" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#press" className="text-gray-300 hover:text-white transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#partners" className="text-gray-300 hover:text-white transition-colors">
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-finance-secondary" />
                <span className="text-gray-300">support@budgetbuddy.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-finance-secondary" />
                <span className="text-gray-300">1-800-BUDGET-1</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-finance-secondary mt-1" />
                <span className="text-gray-300">
                  123 Finance Street
                  <br />
                  San Francisco, CA 94105
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">© 2024 BudgetBuddy. All rights reserved.</div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-300 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
