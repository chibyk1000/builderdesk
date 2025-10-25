import React from "react";
import { Check, CircleCheck, Clock, MessageSquare, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Pricing2 } from "@/components/home/Pricing";
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
      ads:""
    },
    {
      name: "Project Management Support",
      price: "$1,500",
      period: "/month",
        description: "Ideal for growing construction businesses",
      ads:"Maximum of 2 projects at once. For 3 to 4 projects add $1,000",
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
      <section className="py-16 px-6 bg-background relative overflow-hidden">
        <div className="size-150 bg-primary/5 rounded-full absolute -top-85 -right-60"></div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12 relative overflow-hidden">
            <div className="  flex items-center justify-center">
              <div className="text-4xl size-78 relative">
                <Image src={"/pricing-hero-l.png"} alt="" fill />
              </div>
            </div>

            <div className="flex-1 text-center ">
              <div className="inline-block bg-accent/10 border border-accent/20 text-primary px-4 py-1 rounded-full text-sm  mb-4">
                <span className="size-2 bg-accent rounded-full inline-block"></span>{" "}
                TRANSPARENT PRICING
              </div>
              <h1 className="text-4xl md:text-5xl text-primary  space-x-3  mb-4">
                <span>Pricing That Scales</span>
                <span className="text-accent">With You</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                Flexible plans designed to grow with your construction business,
                no hidden fees, no surprises
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="flex items-center gap-2  px-4 py-2 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                    <CircleCheck className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium">Pay Per Task</span>
                </div>
                <div className="flex items-center gap-2 0 px-4 py-2 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                    <CircleCheck className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium">Unlimited</span>
                </div>
                <div className="flex items-center gap-2  px-4 py-2 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                    <CircleCheck className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium">Custom Quote</span>
                </div>
              </div>
            </div>

            <div className="  flex items-center justify-center">
              <div className="text-4xl size-78 relative">
                <Image src={"/pricing-hero-r.png"} alt="" fill />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-primary mb-4">
              Pricing That Scales With You
            </h2>
            <p className="text-[#4A5565] text-xl">
              Flexible pricing for every stage of your construction business
            </p>
          </div>

          <Pricing2 />

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
            <h2 className="text-3xl md:text-4xl  mb-4">Hourly Pricing</h2>
            <p className="text-muted-foreground">
              Flexible hourly rates for every stage of your construction
              business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="shadow-md hover:shadow-lg h-45.5 transition-shadow"
              >
                <CardHeader className="font-normal">
                  <CardTitle className="text-xl text-primary font-normal">
                    {service.name}
                  </CardTitle>
                  <div className="text-2xl  text-primary">{service.rate}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[#4A5565]">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-orange-50 border-orange-200  mx-auto">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center text-white flex-shrink-0">
                <Star fill="white" />
              </div>
              <div>
                <h3 className=" text-lg mb-1">Volume Discount</h3>
                <p className="text-sm text-muted-foreground">
                  Purchase 20+ hours upfront and save 10-15% on all hourly rates
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-primary md:text-4xl  mb-4">
              Project-Based Pricing
            </h2>
            <p className="text-[#4A5565] text-xl">
              Flexible pricing for specific projects, no commitment required for
              one-off projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-[#E5E7EB]">
                <CardContent className="p-6 flex flex-col  gap-4">
                  <div className="flex-1 flex  justify-between ">
                    <h3 className="text-primary text-lg mb-1">
                      {project.name}
                    </h3>

                    <div className="text-lg  text-[#1e3a5f] whitespace-nowrap">
                      {project.price}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-primary mb-6">
            All project pricing is transparent and discussed upfront. No hidden
            fees or surprise charges.
          </p>

          <div className="text-center">
            <Button className="bg-accent hover:bg-accent/90 text-white px-8 h-12">
              Request Custom Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
