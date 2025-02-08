import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "../../components/site-header" // Note the double dots

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Get started with basic features",
    features: [
      "100 practice questions per month",
      "Basic progress tracking",
      "Access to 3 subjects",
      "Limited question explanations",
    ],
  },
  {
    name: "Pro",
    price: "$15",
    description: "Perfect for serious students",
    features: [
      "Unlimited practice questions",
      "Detailed analytics and insights",
      "Access to all subjects",
      "Comprehensive explanations",
      "Smart question recommendations",
      "Practice tests and mock exams",
    ],
    popular: true,
  },
  {
    name: "Team",
    price: "$49",
    description: "For educational institutions",
    features: [
      "All Pro features included",
      "Team management dashboard",
      "Progress reports for teachers",
      "Custom question banks",
      "Priority support",
      "Bulk student accounts",
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-8 md:py-12">
          <div className="mx-auto max-w-[64rem] space-y-8">
            <div className="space-y-4 text-center">
              <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h1>
              <p className="mx-auto max-w-[42rem] text-muted-foreground sm:text-xl sm:leading-8">
                Choose the perfect plan for your exam preparation needs
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-lg border bg-background p-6 ${
                    plan.popular ? "border-primary shadow-lg" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
                      Most Popular
                    </div>
                  )}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <div className="space-y-1">
                      <p className="text-3xl font-bold">{plan.price}</p>
                      <p className="text-sm text-muted-foreground">per month</p>
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                    <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                      Get Started
                    </Button>
                  </div>
                  <div className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

