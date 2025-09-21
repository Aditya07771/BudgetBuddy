import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Small Business Owner",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=100&h=100&fit=crop&crop=face",
    content:
      "BudgetBuddy transformed how I manage both personal and business finances. The AI insights helped me save $5,000 in just 6 months!",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content:
      "Finally, a finance app that actually understands my spending patterns. The automated budgeting is incredibly accurate.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content:
      "I've tried every budgeting app out there. BudgetBuddy's AI recommendations are on another level. It's like having a personal financial advisor.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Teacher",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    content:
      "The family sharing feature is perfect for our household budget. My wife and I can finally stay on the same page with our finances.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Freelance Designer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    content:
      "As a freelancer with irregular income, BudgetBuddy's smart budgeting helped me plan for lean months and save more during good ones.",
    rating: 5,
  },
  {
    name: "Alex Morgan",
    role: "Recent Graduate",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content:
      "Started using BudgetBuddy right after college. It taught me financial discipline and helped me pay off student loans faster than expected.",
    rating: 5,
  },
]

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-finance-light px-4 py-2 text-sm font-medium text-finance-dark mb-4">
            💬 What Our Users Say
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by <span className="gradient-text">500,000+</span> users worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied users who've taken control of their finances with BudgetBuddy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-finance transition-all duration-300 hover:scale-105 border-0 card-gradient"
            >
              <CardContent className="p-6 space-y-4">
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed italic">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center space-x-3 pt-4 border-t border-border/50">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold gradient-text mb-2">500K+</div>
            <div className="text-sm text-muted-foreground">Happy Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text mb-2">$2B+</div>
            <div className="text-sm text-muted-foreground">Money Managed</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text mb-2">4.9★</div>
            <div className="text-sm text-muted-foreground">App Store Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
