import Image from "next/image";
import React from "react";
import { Svgexport30, Svgexport31, Svgexport32 } from "./icons";

const Pricing = () => {
  const topFeatures = [
    { text: "No set up fees", icon: "→" },
    { text: "Cancel anytime", icon: "→" },
    { text: "Dedicated support", icon: "→" },
  ];

  const pricingCards = [
    {
      icon: <Svgexport30 className="size-10" />,
      title: "Estimating Support",
      description:
        "For solo contractors & small trades who need the basics handled",
      price: "$1,500",
      period: "/mo",
      features: [
        "Material takeoffs",
        "BOQs",
        "Cost estimates",
        "48-hour turnaround",
        "Minor revisions",
      ],
      idealFor: "Small contractors, overwhelmed owners, first-time clients",
    },
    {
      icon: <Svgexport31 className="size-10"/>,
      title: "Operations Support",
      description: "We keep your projects and business running smoothly",
      price: "$2,500",
      period: "/mo",
      features: [
        "Everything in Package 1",
        "Email management",
        "Scheduling",
        "CRM updates",
        "Project coordination (PM support)",
        "Client communication assistance",
      ],
      idealFor: "For growing GCs ready to scale without growing headcount",
    },
    {
      icon: <Svgexport32 className="size-10"/>,
      title: "Full Back Office",
      description: "Your complete remote team",
      price: "$5,000",
      period: "/mo",
      features: [
        "Everything in Package 2",
        "Dedicated support staff",
        "Priority turnaround",
        "Invoicing + bookkeeping support",
        "Weekly reporting",
        "Workflow optimization",
      ],
      idealFor:
        "For established firms who want a fully outsourced back-office team",
    },
  ];

  const addOnServices = [
    {
      title: "Architectural",
      description: "Drawings, Revit, rendering",
      price: "$1,200/mo",
    },
    {
      title: "Marketing",
      description: "Social Media, content, emails, branding",
      price: "$800/mo",
    },
    {
      title: "Business Development",
      description: "Leads, Proposals, CRM",
      price: "$950/mo",
    },
    {
      title: "HR Support",
      description: "Hiring, Onboarding, Records",
      price: "$500/mo",
    },
    {
      title: "Administrative",
      description: "Document drafting, Data Entry, file management",
      price: "$950/mo",
    },
    {
      title: "Bookkeeping",
      description: "Payroll, expense, AR/AP",
      price: "$950/mo",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
      {/* Background Image */}
      <div className="absolute inset-0 ">
        <Image
          src="/pricing.avif"
          alt="Pricing background"
          fill
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        {/* Top Section */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pricing That Scales With You
          </h2>

          {/* Subtitle */}
          <p className="text-3xl md:text-4xl text-gray-200 mb-12">
            Transparent monthly plans with no hidden fees. Pay for what you
            need.
          </p>

          {/* Top Features */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {topFeatures.map((feature, i) => (
              <div key={i} className="flex items-center gap-3  w-full">
                {/* Circular Arrow Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-orange-500 flex-shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-orange-500"
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-3xl md:text-4xl text-white font-medium">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="w-10/12 mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          {pricingCards.map((card, i) => (
            <div key={i} className="bg-gray-100 rounded-lg p-7 w-120 h-150  shadow-sm">
              {/* Header: icon + title */}
              <div className="flex items-center gap-3 mb-3.5">
                {/* Icon */}
                <div className="flex-shrink-0 w-9 h-9">{card.icon}</div>
                <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                  {card.title}
                </h2>
              </div>

              {/* Subtitle */}
              <p className="text-2xl font-[350] text-[#595959] m-0 mb-3 leading-relaxed">
                {card.description}
              </p>

              {/* Pricing */}
              <p className="text-2xl text-gray-900 m-0 mb-3.5">
                Starting from{" "}
                <strong className="">
                  {card.price}
                  {card.period}
                </strong>
              </p>

              {/* Bullet list */}
              <ul className="m-0 mb-4.5 pl-4.5 text-xl ml-4  text-[#595959] font-[350] list-disc">
                {card.features.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>

              {/* Ideal for label */}
              <p className="text-xl font-bold text-orange-600 m-0 mb-1.5">
                Ideal for:
              </p>

              {/* Ideal for text */}
              <p className="text-xl text-[#595959] m-0 leading-relaxed">
                {card.idealFor}
              </p>
            </div>
          ))}
        </div>

        {/* Add-On Services Section */}
        <div className="max-w-10/12 mx-auto mt-20">
          {/* Heading */}
          <div className=" ">
            <h2 className=" font-bold text-white ">ADD-ON SERVICES</h2>
            <p className="text-orange-500 text-2xl font-semibold ">
              Available on any plan
            </p>
            <p className="text-gray-200 text-base md:text-2xl  ">
              These services can be added individually to any base plan — or
              combined into the Full Back Office package. Price varies by hours
              required.
            </p>
          </div>

          {/* Add-On Cards Grid */}
          <div className="grid mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2">
            {addOnServices.map((service, i) => {
              const isOrange = i % 2 === 0;

              return (
                <div
                  key={i}
                  className={`rounded-lg p-2 shadow-sm border border-white flex flex-col ${
                    isOrange ? "bg-[#d6730a]" : "bg-white"
                  }`}
                >
                  <div className="">
                    <h3
                      className={`text-nowrap text-xl font-bold m-0 mb-2 text-gray-900`}
                    >
                      {service.title}
                    </h3>
                    <p className={`text-xl font-[350] m-0 mb-3 leading-relaxed `}>
                      {service.description}
                    </p>
                  </div>
                  <p className={`text-lg font-bold m-0 mt-auto text-end`}>
                    {service.price}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
