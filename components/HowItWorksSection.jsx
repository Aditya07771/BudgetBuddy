import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

const steps = [
  {
    step: "01",
    title: "Connect Your Accounts",
    description: "Securely link your bank accounts, credit cards, and investment accounts in under 2 minutes.",
    features: ["Bank-level encryption", "Read-only access", "Auto-sync transactions"],
  },
  {
    step: "02",
    title: "Set Your Goals",
    description: "Tell BudgetBuddy about your financial goals and let our AI create a personalized plan.",
    features: ["Smart goal suggestions", "Custom milestones", "Progress tracking"],
  },
  {
    step: "03",
    title: "Watch the Magic",
    description: "Get AI-powered insights, automated budgeting, and actionable recommendations daily.",
    features: ["Daily insights", "Smart notifications", "Automated savings"],
  },
]

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-finance-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-finance-dark mb-4 shadow-sm">
            🚀 Getting Started
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get started in <span className="gradient-text">3 simple steps</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of users who've transformed their financial lives with BudgetBuddy. It's easier than you
            think.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-primary transform translate-x-8 -translate-y-1/2 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="h-4 w-4 text-finance-primary" />
                  </div>
                </div>
              )}

              <div className="relative z-10 text-center lg:text-left">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-white font-bold text-xl mb-6 shadow-finance">
                  {step.step}
                </div>

                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>

                {/* Features List */}
                <ul className="space-y-2">
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-finance-secondary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="xl" className="group">
            Start Your Free Trial
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
