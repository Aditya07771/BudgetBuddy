import { Card, CardContent } from "@/components/ui/card"
import { Brain, PieChart, Shield, Smartphone, TrendingUp, Wallet, Target, Bell, Users } from "lucide-react"

const features = [
  {
    icon: <Brain className="h-8 w-8 text-finance-primary" />,
    title: "AI-Powered Insights",
    description: "Get personalized financial advice and spending predictions powered by advanced AI algorithms.",
  },
  {
    icon: <PieChart className="h-8 w-8 text-finance-secondary" />,
    title: "Smart Budgeting",
    description: "Create and manage budgets that adapt to your lifestyle with intelligent category suggestions.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-finance-primary" />,
    title: "Expense Tracking",
    description: "Automatically categorize and track your expenses with bank-level security and accuracy.",
  },
  {
    icon: <Target className="h-8 w-8 text-finance-secondary" />,
    title: "Goal Setting",
    description: "Set and achieve financial goals with AI-guided milestones and progress tracking.",
  },
  {
    icon: <Shield className="h-8 w-8 text-finance-primary" />,
    title: "Bank-Level Security",
    description: "Your financial data is protected with 256-bit encryption and industry-leading security measures.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-finance-secondary" />,
    title: "Mobile First",
    description: "Access your finances anywhere with our intuitive mobile app available on iOS and Android.",
  },
  {
    icon: <Bell className="h-8 w-8 text-finance-primary" />,
    title: "Smart Notifications",
    description: "Get timely alerts for bill due dates, spending limits, and saving opportunities.",
  },
  {
    icon: <Users className="h-8 w-8 text-finance-secondary" />,
    title: "Family Sharing",
    description: "Share budgets and track family expenses with secure multi-user access controls.",
  },
  {
    icon: <Wallet className="h-8 w-8 text-finance-primary" />,
    title: "Multi-Account Support",
    description: "Connect all your bank accounts, credit cards, and investment accounts in one place.",
  },
]

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-finance-light px-4 py-2 text-sm font-medium text-finance-dark mb-4">
            ✨ Powerful Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to manage your <span className="gradient-text">finances</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            BudgetBuddy combines cutting-edge AI technology with intuitive design to give you complete control over your
            financial life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-finance transition-all duration-300 hover:scale-105 border-0 card-gradient"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-finance-light/50 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
