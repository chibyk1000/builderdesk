import React from 'react'
import { Check, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const Page = () => {
      const plans = [
        {
          name: "Administrative Support",
          price: "$1,000",
          period: "/month",
          description: "Perfect for small to medium construction companies",
          features: [
            "Dedicated admin support",
            "Email management",
            "Calendar scheduling",
            "Document organization",
            "Data entry and filing",
            "Phone/email correspondence",
            "Meeting coordination",
            "Travel arrangements",
            "Expense tracking",
            "Client communication",
            "Limited project tracking",
            "Basic reporting",
          ],
          buttonText: "Get Started",
          buttonVariant: "outline" as const,
        },
        {
          name: "Project Management Support",
          price: "$1,500",
          period: "/month",
          description: "Ideal for growing construction businesses",
          popular: true,
          features: [
            "Project plan and schedule",
            "Budget tracking",
            "Resource allocation",
            "Risk management",
            "Quality control",
            "Stakeholder communication",
            "Change order management",
            "Progress reporting",
            "Team coordination",
            "Vendor management",
            "Safety compliance",
            "Document control",
          ],
          buttonText: "Get Started",
          buttonVariant: "default" as const,
        },
      ];
    
      const services = [
        {
          name: "Project Management",
          rate: "$19.25/hour",
          description: "Comprehensive project oversight and coordination",
        },
        {
          name: "Estimating",
          rate: "$18.28/hour",
          description: "Accurate cost estimates and bid preparation",
        },
        {
          name: "Bookkeeping",
          rate: "$12.18/hour",
          description: "Comprehensive financial record management",
        },
        {
          name: "Admin Support",
          rate: "$8.12/hour",
          description: "General administrative assistance",
        },
        {
          name: "Business Development",
          rate: "$20.38/hour",
          description: "Lead generation, proposals, and client outreach",
        },
      ];
    
      const projects = [
        {
          name: "Single Project Estimate",
          price: "$150.00",
          description:
            "Comprehensive project estimate with detailed cost breakdown",
        },
        {
          name: "Monthly Bookkeeping Package",
          price: "$200.00",
          description:
            "Full financial management including reconciliation, invoicing, and reporting",
        },
        {
          name: "Project Setup & Documentation",
          price: "$250.00",
          description:
            "Complete project documentation including plans, permits, and contracts",
        },
        {
          name: "Bid Package Preparation",
          price: "$195.00",
          description:
            "Full bid package with estimates, documentation, and submission",
        },
      ];
  return (
    <div>
      <section className="py-16 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center">
              <div className="text-4xl">👩‍💼</div>
            </div>

            <div className="flex-1 text-center">
              <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
                ⚡ TRANSPARENT PRICING
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Pricing That Scales{" "}
                <span className="text-orange-500">With You</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                Flexible plans designed to grow with your construction business,
                no hidden fees, no surprises
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg">
                  <Check className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium">Pay Per Task</span>
                </div>
                <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">Unlimited</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-lg">
                  <MessageSquare className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium">Custom Quote</span>
                </div>
              </div>
            </div>

            <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center">
              <div className="text-4xl">👨‍💼</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pricing That Scales With You
            </h2>
            <p className="text-muted-foreground">
              Flexible pricing for every stage of your construction business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative shadow-lg ${
                  plan.popular ? "border-[#1e3a5f] border-2" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className={`w-full ${
                      plan.buttonVariant === "default"
                        ? "bg-[#1e3a5f] hover:bg-[#2d5a8c]"
                        : ""
                    }`}
                    variant={plan.buttonVariant}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Need a custom solution?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Let&apos;s build a custom pricing plan
            </a>
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hourly Pricing
            </h2>
            <p className="text-muted-foreground">
              Flexible hourly rates for every stage of your construction
              business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="shadow-md hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <div className="text-3xl font-bold text-[#1e3a5f]">
                    {service.rate}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-orange-50 border-orange-200 max-w-2xl mx-auto">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center text-white flex-shrink-0">
                💎
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  Value of Managed Services
                </h3>
                <p className="text-sm text-muted-foreground">
                  Save 40-60% vs hiring full-time staff. Get expert support
                  without the overhead of salaries, benefits, and training
                  costs.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Project-Based Pricing
            </h2>
            <p className="text-muted-foreground">
              Flexible pricing for specific projects, no commitment required for
              one-off projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            {projects.map((project, index) => (
              <Card key={index} className="shadow-md">
                <CardContent className="p-6 flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">
                      {project.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="text-2xl font-bold text-[#1e3a5f] whitespace-nowrap">
                    {project.price}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mb-6">
            All project pricing is transparent and discussed upfront. No hidden
            fees or surprise charges.
          </p>

          <div className="text-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 h-12">
              Request Custom Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page