import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calculator,
  ClipboardList,
  DollarSign,
  FileText,
  TrendingUp,
  Users,
} from "lucide-react";

const hourlyServices = [
  {
    title: "Project Management",
    icon: ClipboardList,
    price: "$15-25",
    period: "per hour",
    description: "Professional project coordination, scheduling, and",
  },
  {
    title: "Estimating",
    icon: Calculator,
    price: "$18-28",
    period: "per hour",
    description: "Accurate cost estimates, takeoffs, and bid preparation",
  },
  {
    title: "Bookkeeping",
    icon: DollarSign,
    price: "$12-18",
    period: "per hour",
    description: "Construction-focused financial management and reporting",
  },
  {
    title: "Admin Assistance",
    price: "$8-12",
    icon: Users,
    period: "per hour",
    description: "General administrative support and documentation",
  },
  {
    title: "Business Development",
    price: "$20-30",
    icon: TrendingUp,
    period: "per hour",
    description: "Lead generation, proposals, and growth strategies",
  },
];

export default function HourlyPricing() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold mb-2">Flexible Pricing</p>
          <h2 className="text-3xl md:text-4xl  text-primary mb-4">
            Hourly & Project-Based Pricing
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Need more flexibility? Pay only for the services you use, when you
            need them
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {hourlyServices.map((service, index) => (
            <Card
              key={index}
              className="p-6 border-2 border-gray-200 hover:border-primary/30 transition"
            >
              <div className="flex items-start gap-4 ">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-white  text-lg">
                    {<service.icon />}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg  text-primary ">{service.title}</h3>
                  <div className="mb-">
                    <span className="text-2xl  text-primary">
                      {service.price}
                    </span>
                    <span className="text-gray-600 block text-sm ml-2">
                      {service.period}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm">{service.description}</p>
            </Card>
          ))}

          <Card className="bg-linear-to-br from-primary to-primary/90 rounded-lg p-5 h-71 text-white">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                <span className="text-white  text-lg">
                  <FileText />
                </span>
              </div>
              <div>
                <h3 className="text-lg  mb-2">Per-Project Pricing</h3>
                <p className="text-white/90 text-sm mb-6">Custom Quote</p>
              </div>
            </div>
            <p className="text-white/80 text-sm mb-6">
              Flexible packages for specific projects or deliverables
            </p>

            <Button className="bg-white mt-auto  hover:bg-white/90  w-full text-primary font-semibold">
              Get Quote
            </Button>
          </Card>
        </div>

        <div className="rounded-lg p-8 gap-8 items-center bg-gray-50  flex justify-between">
          <div className="  flex-1 ">
            <h3 className="text-lg  text-primary mb-2">
              Volume Discounts Available
            </h3>
            <p className="text-secondary text-sm mb-6">
              Purchase 20+ hours upfront and save 10-15% on hourly rates
            </p>
          </div>
          <Button
           
            className=" t "
          >
            View All Options
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
