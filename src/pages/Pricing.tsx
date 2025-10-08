import { CheckCircle2, Leaf, Sprout, Trees } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter Plan",
      subtitle: "Best For Small Contractors",
      price: "99",
      savings: "Save up to 9%",
      icon: Leaf,
      features: [
        "1x Dedicated Virtual Assistant",
        "20 hours/month support",
        "Basic project management",
        "Email & phone support",
        "Document organization",
      ],
    },
    {
      name: "Professional Plan",
      subtitle: "Ideal for Growing Businesses",
      price: "199",
      savings: "Save up to 15%",
      icon: Sprout,
      popular: true,
      features: [
        "2x Dedicated Virtual Assistants",
        "50 hours/month support",
        "Advanced project management",
        "Priority support 24/7",
        "Estimating & bid support",
        "QuickBooks integration",
        "CRM management",
      ],
    },
    {
      name: "Enterprise Plan",
      subtitle: "Tailored for Large Companies",
      price: "499",
      savings: "Save up to 20%",
      icon: Trees,
      features: [
        "Unlimited virtual assistant access",
        "150+ hours/month support",
        "Full-service back office",
        "Dedicated account manager",
        "Custom workflow automation",
        "Multi-project coordination",
        "Financial reporting & analysis",
      ],
    },
  ];

  const faqs = [
    {
      question: "Can I change plans later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes will take effect in your next billing cycle.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.",
    },
    {
      question: "Is there a setup fee?",
      answer:
        "No, there are no setup fees for any of our plans. You only pay the monthly subscription fee.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes, you can cancel your subscription at any time with no hidden penalties or long-term commitments.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Pricing Details
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Choose your right plan!
          </h1>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl">
            Select from the best plans, ensuring a perfect match. Need more or
            less? Customize your subscription for a seamless fit!
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-4 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-6xl mx-auto space-y-6">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={index}
                className={`bg-white border rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? "border-primary shadow-lg"
                    : "border-gray-200 hover:border-primary/30"
                }`}
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                  {/* Left Section */}
                  <div className="flex items-start gap-6 flex-1">
                    <div className="bg-primary/10 p-4 rounded-xl flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                      <p className="text-muted-foreground mb-4">
                        {plan.subtitle}
                      </p>
                      <p className="text-primary font-semibold mb-2">
                        {plan.savings}
                      </p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold">
                          ${plan.price}
                        </span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                    </div>
                  </div>

                  {/* Middle Section */}
                  <div className="flex-1">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col gap-3 lg:min-w-[180px]">
                    <Button
                      variant="outline"
                      className="border-gray-300 hover:border-primary hover:bg-primary/5"
                    >
                      Try For 15 Day's
                    </Button>
                    <Button
                      asChild
                      className="bg-primary hover:bg-primary/80 text-white"
                    >
                      <Link to="/contact">Get Started →</Link>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ Section with ShadCN Accordion */}
      <section className="py-20 px-4 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-2xl px-4 bg-card/80 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-lg font-medium py-4 hover:text-primary transition-all">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
