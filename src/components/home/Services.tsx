"use client"
import { ClipboardList, DollarSign, Palette, Ruler, Sparkles, TrendingUp, UserCheck, Users } from 'lucide-react'
import React from 'react'
import ServiceCard, { ServiceCtaCard } from '../common/service-card';
import { Badge } from '../ui/badge';




const Services = () => {
const services = [
  {
    icon: ClipboardList,
    title: "Project Management Support",
    description:
      "Comprehensive support to keep your projects on track and organized.",
    services: [
      "Project setup and closeout",
      "Schedule of values",
      "AJA Billing",
      "Submittal preparation and tracking",
      "Change orders preparation",
      "Document control",
      "RFI",
      "Safety plan",
      "Project scheduling",
    ],
  },
  {
    icon: Users,
    title: "Administrative Support",
    description:
      "Professional administrative assistance to streamline your operations.",
    services: [
      "Filing, Tracking, Appointment setup",
      "Follow-up emails",
      "Insurance COI management",
      "Onboarding",
      "Offboarding",
      "Call answering",
      "Letter drafting",
    ],
  },
  {
    icon: TrendingUp,
    title: "Business Development",
    description:
      "Strategic growth services including bidding, estimating, and marketing.",
    services: [
      "Bidding and Estimating",
      "Bid follow-up/tracking",
      "Prequalifications",
      "Proposal writing",
    ],
  },
  {
    icon: DollarSign,
    title: "Bookkeeping",
    description: "Financial tracking and reporting tailored for construction.",
    services: [
      "Payroll",
      "Chart of accounts setup",
      "Accounts receivable/payable tracking",
    ],
  },
  {
    icon: Palette,
    title: "Marketing",
    description:
      "Build your brand and online presence with our marketing services.",
    services: [
      "Social Media Management",
      "Website Design",
      "Graphic Design",
      "Capability Statements",
      "Overall Branding",
    ],
  },
  {
    icon: UserCheck,
    title: "Human Resources",
    description: "HR support to manage your team effectively.",
    services: [
      "Employee onboarding",
      "Recruitment assistance",
      "PTO tracking",
      "Employee offboarding",
      "Policy drafting",
    ],
  },
  {
    icon: Ruler,
    title: "Architectural Support",
    description: "Design and drafting support using the latest software.",
    services: [
      "Shop drawings",
      "Design drafting",
      "As-Builts",
      "3D modeling",
      "Rendering",
      "Software: AutoCAD, Revit, SketchUp, V-Ray, Lumion",
    ],
  },
];
  return (
    <section className="py-24">
      <header className="text-center ">
        <Badge className="text-primary bg-primary/5 mb-4 font-medium" variant={"outline"}>
          Our Services
        </Badge>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[40px]  text-primary mb-4">
            What We Do
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive solutions designed to help construction companies
            operate more efficiently.
          </p>
        </div>
      </header>
      <div className="grid grid-cols-3 gap-8  container  max-w-[1280px] px-8 mx-auto">
        {services.map((service) => {
          return (
            <ServiceCard
              description={service.description}
              icon={<service.icon />}
              title={service.title}
              services={service.services}
            />
          );
        })}
        <ServiceCtaCard
          icon={<Sparkles className="w-5 h-5" />}
          title="Need Something Else?"
          description="We offer custom solutions tailored to your specific needs."
          buttonText="View All Services"
          onClick={() => alert("Navigating to services...")}
        />
      </div>
    </section>
  );
}

export default Services
