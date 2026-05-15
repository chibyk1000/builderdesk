"use client";

import {
  Users,
  Calculator,
  Square,
  FileText,
  Megaphone,
  TrendingUp,
  Users2,
  PiggyBank,
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      title: "PROJECT MANAGEMENT SUPPORT",
      description:
        "Keep Your Projects Organized, On Schedule, and Moving Forward",
      icon: Users,
      bgColor: "bg-blue-100",
      features: [
        "Project Set up and Close-out",
        "Schedule of Values",
        "A.I.A Billing",
        "Submittal Management",
        "Change Orders",
        "Document Control",
        "RFI Management",
        "Scheduling",
        "Safety Plans, JHA, AHA",
      ],
    },
    {
      title: "ESTIMATING SUPPORT",
      description: "Accurate Estimates That Help You Win More Jobs",
      icon: Calculator,
      bgColor: "bg-gray-50",
      features: [
        "Material takeoffs",
        "Quantity surveying",
        "Cost estimating",
        "Bid preparation support",
        "BOQs (Bills of Quantities)",
        "Labor and material pricing",
        "Estimate revisions and updates",
        "Fast turnaround estimating support",
      ],
    },
    {
      title: "ARCHITECTURAL SUPPORT",
      description: "Professional Drafting & Design Support for Your Projects",
      icon: Square,
      bgColor: "bg-blue-100",
      features: [
        "Shop Drawings",
        "Design Drafting",
        "As-Builts",
        "3D Modeling",
        "Rendering",
        "Construction Documents",
      ],
    },
    {
      title: "ADMINISTRATIVE SUPPORT",
      description: "Reliable Back-Office Support for Busy Contractors",
      icon: FileText,
      bgColor: "bg-white border border-gray-200",
      features: [
        "Filing tracking appointment set up",
        "Email management",
        "Insurance/C.O.I Management",
        "CRM updates and Management",
        "Call Answering",
        "Document drafting",
        "Data Entry and Processing",
      ],
    },
    {
      title: "MARKETING SUPPORT",
      description: "Build Your Brand and Generate More Leads",
      icon: Megaphone,
      bgColor: "bg-white",
      features: [
        "Social media management",
        "Content creation",
        "Graphic design support",
        "Email marketing campaigns",
        "Website content updates",
        "Marketing material preparation",
        "Brand support and consistency",
        "Lead generation assistance",
      ],
    },
    {
      title: "BUSINESS DEVELOPMENT SUPPORT",
      description: "Helping You Find, Pursue, and Close More Opportunities",
      icon: TrendingUp,
      bgColor: "bg-blue-100",
      features: [
        "Lead research and prospecting",
        "Proposal preparation",
        "CRM pipeline management",
        "Follow-up coordination",
        "Bid opportunity tracking",
        "Client outreach support",
        "Sales presentation assistance",
        "Partnership and vendor research",
      ],
    },
    {
      title: "HR SUPPORT",
      description: "HR support to manage your team effectively",
      icon: Users2,
      bgColor: "bg-white",
      features: [
        "Recruitment and candidate sourcing",
        "Resume screening",
        "Interview scheduling",
        "Employee onboarding support",
        "Staff record management",
        "HR documentation preparation",
        "Attendance and leave tracking",
        "Performance tracking support",
      ],
    },
    {
      title: "ACCOUNTING SUPPORT",
      description: "Financial tracking and reporting tailored for construction",
      icon: PiggyBank,
      bgColor: "bg-blue-100",
      features: [
        "Bookkeeping",
        "Invoice preparation",
        "Accounts payable and receivable tracking",
        "Expense tracking and reporting",
        "Financial record organization",
        "Bank reconciliation support",
        "Payroll support",
        "Monthly financial reporting assistance",
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-gray-600 text-sm font-medium mb-2">Our Services</p>
          <h2 className="text-4xl font-bold text-blue-600 mb-4">WHAT WE DO</h2>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Reliable Remote Support for Contractors Who Are Tired of Doing
            Everything Themselves
          </h3>
          <p className="text-gray-700">
            We take the work off your plate so you can focus on winning jobs and
            delivering projects.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className={`p-6 rounded-lg ${service.bgColor}`}>
                {/* Icon */}
                <div className="mb-4 flex items-center gap-2">
                  <IconComponent
                    className="w-6 h-6 text-blue-600"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="font-bold text-gray-900 text-sm mb-3 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-orange-500 font-semibold text-sm mb-4 leading-snug">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-gray-800 text-sm flex items-start"
                    >
                      <span className="mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
