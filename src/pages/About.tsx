"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("story");

  const TABS = [
    { key: "story", label: "Our Story" },
    { key: "mission", label: "Our Mission" },
    { key: "vision", label: "Our Vision" },
    { key: "why", label: "Why Choose Us" },
  ];

  const TAB_CONTENT = {
    story: {
      title: "Our Journey as BuildersDesk",
      description:
        "BuildersDesk was founded to bridge the operational gap in the construction industry. We understand that builders thrive on-site—not behind a desk. Our story is one of collaboration and determination—helping construction firms stay efficient while focusing on what truly matters: building great projects. We've served over 500 construction companies, providing them with the back-office support they need to succeed.",
      image: "/construction-team-collaboration-office.jpg",
      buttonText: "Learn More About Our Services",
      buttonLink: "/services",
    },
    mission: {
      title: "Simplifying Construction Operations for Growth",
      description:
        "Our mission is to simplify and streamline construction operations through reliable, industry-specific back-office solutions. We handle the paperwork, coordination, and support—so you can focus on running successful projects on-site. From project management to bookkeeping, we're your dedicated partner in operational excellence.",
      image: "/construction-dashboard.png",
      buttonText: "See Our Services",
      buttonLink: "/services",
    },
    vision: {
      title: "Empowering Builders Globally",
      description:
        "Our vision is to become the leading support partner for construction companies across continents, helping them grow smarter, leaner, and faster through innovation and operational excellence. We're building a future where construction firms can scale without the administrative burden, focusing their energy on what they do best—building.",
      image: "/global-construction-network-growth.jpg",
      buttonText: "Join Our Growing Network",
      buttonLink: "/contact",
    },
    why: {
      title: "Why Construction Companies Choose BuildersDesk",
      description:
        "We're not just another service provider—we're your dedicated partner in construction operations. With deep industry knowledge, a U.S.-based team combined with global efficiency, scalable services for companies of all sizes, and transparent pricing with no long-term contracts, we provide the support you need to thrive. Our 98% client satisfaction rate speaks for itself.",
      image: "/construction-business-success-partnership.jpg",
      buttonText: "Get Started Today",
      buttonLink: "/contact",
    },
  };

  const active = TAB_CONTENT[activeTab as keyof typeof TAB_CONTENT];

  return (
    <div className="min-h-screen bg-background">
 

      {/* Top Section */}
      <section className="pt-32 pb-12 px-4 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-3xl mx-auto text-center">
          <span className="px-4 py-1 rounded-full bg-[#039A9A]/10 text-[#039A9A] text-sm font-medium">
            About BuildersDesk
          </span>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            Our journey highlights the strength of collaboration and
            determination. Together, we've tackled challenges, celebrated
            successes, and built a legacy of trust and innovation in the
            construction industry.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="mt-6 bg-[#039A9A] hover:bg-[#028080] "
            >
              Partner With Us →
            </Button>
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mt-12 gap-4 md:gap-8 border-b border-border max-w-3xl mx-auto overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`pb-3 px-2 text-sm md:text-base font-medium relative whitespace-nowrap ${
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
            <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
              {active.description}
            </p>
            <Link to={active.buttonLink}>
              <Button
                size="lg"
                className="bg-[#039A9A] hover:bg-[#028080] "
              >
                {active.buttonText} →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 px-4 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-b from-transparent to-[#039A9A]/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-center">
            <div className="bg-gradient-to-br from-[#039A9A]/10 to-[#02c5c5]/10 rounded-3xl p-6 md:p-8 border border-[#039A9A]/20">
              <div className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#039A9A] mb-2">
                500+
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                Construction Companies Served
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#039A9A]/10 to-[#02c5c5]/10 rounded-3xl p-6 md:p-8 border border-[#039A9A]/20">
              <div className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#039A9A] mb-2">
                24/7
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                Support Availability
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#039A9A]/10 to-[#02c5c5]/10 rounded-3xl p-6 md:p-8 border border-[#039A9A]/20">
              <div className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#039A9A] mb-2">
                98%
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                Client Satisfaction Rate
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}
