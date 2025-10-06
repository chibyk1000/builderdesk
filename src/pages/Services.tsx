"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("project");

  const TABS = [
    { key: "project", label: "Project Management" },
    { key: "admin", label: "Administrative" },
    { key: "estimating", label: "Estimating" },
    { key: "bookkeeping", label: "Bookkeeping" },
    { key: "crm", label: "Business Development" },
    { key: "custom", label: "Custom Solutions" },
  ];

  const TAB_CONTENT = {
    project: {
      title: "Project Management Support",
      description:
        "We assist with scheduling, document control, RFI/submittal tracking, and client communications—keeping your jobs organized and on track. Our team ensures nothing falls through the cracks, from daily logs to change orders. We integrate with your existing systems and workflows to provide seamless support that keeps projects moving forward.",
      image: "/construction-project-management-scheduling.jpg",
      features: [
        "Scheduling & Coordination",
        "Document Control",
        "RFI/Submittal Tracking",
        "Client Communications",
      ],
    },
    admin: {
      title: "Administrative Assistance",
      description:
        "From data entry to permit filing, our virtual construction assistants take the busywork off your plate. We handle the administrative tasks that consume your time, allowing you to focus on the field. Our team is trained in construction-specific processes and can adapt to your company's unique needs.",
      image: "/office-administrative-work-construction.jpg",
      features: [
        "Data Entry",
        "Permit Filing",
        "Document Management",
        "Email & Calendar Management",
      ],
    },
    estimating: {
      title: "Estimating Support",
      description:
        "Our team helps prepare accurate estimates, bids, takeoffs, and proposal documents using industry-standard software. We work with tools like PlanSwift, Bluebeam, and Excel to deliver precise estimates that help you win more projects. Our estimators understand construction costs and can provide detailed breakdowns.",
      image: "/construction-estimating-blueprints-calculator.jpg",
      features: [
        "Bid Preparation",
        "Takeoff Services",
        "Proposal Documents",
        "Cost Analysis",
      ],
    },
    bookkeeping: {
      title: "Bookkeeping & Financial Admin",
      description:
        "We handle invoicing, expense tracking, payroll coordination, and QuickBooks management—ensuring your books stay audit-ready. Our financial administrators understand construction accounting, including job costing, retention, and progress billing. Keep your finances organized and compliant with minimal effort.",
      image: "/financial-bookkeeping-accounting-dashboard.jpg",
      features: [
        "Invoicing",
        "Expense Tracking",
        "Payroll Coordination",
        "QuickBooks Management",
      ],
    },
    crm: {
      title: "Business Development & CRM",
      description:
        "Let us help you track leads, nurture client relationships, and build your pipeline with custom CRM support and BD strategies. We manage your customer relationships, follow up on opportunities, and help you maintain the connections that drive growth. Our team can work with any CRM platform or help you implement one.",
      image: "/business-development-crm-sales-pipeline.jpg",
      features: [
        "Lead Tracking",
        "Client Relationship Management",
        "Pipeline Development",
        "BD Strategy Support",
      ],
    },
    custom: {
      title: "Custom Outsourcing Solutions",
      description:
        "Need help with something else? We create custom solutions to meet your business needs. Whether it's specialized reporting, compliance tracking, or unique operational challenges, our team can develop tailored support services. We're flexible and adaptable to whatever your construction business requires.",
      image: "/custom-business-solutions-consulting.jpg",
      features: [
        "Tailored Services",
        "Specialized Reporting",
        "Compliance Support",
        "Flexible Solutions",
      ],
    },
  };

  const active = TAB_CONTENT[activeTab as keyof typeof TAB_CONTENT];

  return (
    <div className="min-h-screen bg-background">
      

      {/* Top Section */}
      <section className="pt-32 pb-12 px-4 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-3xl mx-auto text-center">
          <span className="px-4 py-1 rounded-full  bg-[#039A9A]/10 text-[#039A9A] text-sm font-medium">
            Our Services
          </span>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            At BuildersDesk, we offer flexible, scalable support solutions
            designed specifically for the construction industry. Choose from our
            comprehensive service offerings or let us create a custom package
            for your needs.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="mt-6 bg-[#039A9A] hover:bg-[#028080] "
            >
              Contact Us for a Tailored Package →
            </Button>
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mt-12 gap-2 md:gap-4 border-b border-border max-w-5xl mx-auto overflow-x-auto pb-2">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`pb-3 px-3 text-xs md:text-sm font-medium relative whitespace-nowrap ${
                activeTab === tab.key
                  ? "text-[#039A9A]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
              {activeTab === tab.key && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#039A9A]"></span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-20 px-4 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden bg-muted">
            <img
              src={active.image || "/placeholder.svg"}
              alt={active.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              {active.title}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed">
              {active.description}
            </p>
            <div className="space-y-2 mb-8">
              {active.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5  bg-[#039A9A]"></div>
                  <span className="text-sm text-muted-foreground">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-[#039A9A] hover:bg-[#028080] "
              >
                Get Started →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-b from-transparent to-[#039A9A]/5">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#039A9A]/10 to-[#02c5c5]/10 rounded-3xl p-8 md:p-12 text-center border border-[#039A9A]/20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Need Help Now?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8">
            Whether you need help on one project or across your entire
            operation, we're ready to support you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className=" bg-[#039A9A] hover:bg-[#028080]"
              >
                Schedule a Free Discovery Call
              </Button>
            </Link>
            <Link to="/pricing">
              <Button
                size="lg"
                variant="outline"
                className=" bg-transparent"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

     
    </div>
  );
}
