import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
// import heroImage from "@/assets/hero-finance.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-finance-secondary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-finance-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full bg-finance-light px-4 py-2 text-sm font-medium text-finance-dark">
                🤖 AI-Powered Finance Manager
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Smart Money. <span className="gradient-text">Simple Life.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Transform your financial life with BudgetBuddy's AI-powered insights. Track expenses, set budgets, and
                achieve your financial goals effortlessly.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="finance-outline" size="xl" className="group">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">500K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">$2B+</div>
                <div className="text-sm text-muted-foreground">Money Managed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">4.9★</div>
                <div className="text-sm text-muted-foreground">App Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative animate-float">
              <img
                src="./hero-finance.jpg"
                alt="BudgetBuddy Finance Dashboard"
                className="w-full h-auto rounded-2xl shadow-finance"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-primary/20 rounded-2xl"></div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-finance-secondary rounded-full flex items-center justify-center text-white font-bold animate-bounce">
              💰
            </div>
            <div
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-finance-primary rounded-full flex items-center justify-center text-white font-bold animate-bounce"
              style={{ animationDelay: "1s" }}
            >
              📊
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
