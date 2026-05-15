"use client";
import { useState } from "react";
import { Svgexport26, Svgexport27, Svgexport28, Svgexport29 } from "./icons";

 function HowWeDoIt() {
  const bullets = [
    { text: "PMP Certified Project Managers", indent: 0 },
    { text: "Bachelor's Degree - minimum requirement", indent: 1 },
    { text: "No long Term Contracts", indent: 2 },
    { text: "Continous Training", indent: 3 },
  ];

  return (
    <div className="w-full  bg-white">
      <div className="flex flex-col md:flex-row items-start gap-16 max-w-5xl mx-auto justify-between ">
        {/* Left: Heading */}
        <div className="shrink-0">
          <h2 className="text-4xl font-bold text-sky-500 leading-tight whitespace-nowrap">
            HOW WE DO IT
          </h2>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col md:flex-1 ml-auto text-right gap-5 flex-1">
          {/* Top text block */}
          <div>
            <p className="text-sm font-bold text-gray-900 mb-1">
              Built for Contractors Who Are Tired of Doing Everything Themselves
            </p>
            <p className="text-sm font-bold text-gray-900">
              We take the work off your plate so you can focus on winning jobs
              and delivering projects.
            </p>
          </div>

          {/* Bullet list — cascading indents */}
          <div className="flex flex-col gap-2 text-right items-end">
            {bullets.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2"
                style={{ paddingLeft: `${item.indent * 28}px` }}
              >
                {/* Arrow circle icon */}
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="10"
                    stroke="#E87722"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M8 11h6M11 8l3 3-3 3"
                    stroke="#E87722"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-xs text-gray-900">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const steps = [
  {
    number: "1",
    title: "DISCOVERY",
    description:
      "We learn about your company, challenges, and specific needs through an in-depth consultation.",
    icon: <Svgexport26 className="size-30" />,
    active: false,
  },
  {
    number: "2",
    title: "PLAN",
    description:
      "We tailor a support package with the right services and frequency for your business.",
    icon: <Svgexport27 className="size-30" />,
    active: false,
  },
  {
    number: "3",
    title: "EXECUTE",
    description:
      "In one week, we will select and onboard the right team member to commence working on your projects.",
    icon: <Svgexport28 className="size-30" />,
    active: false,
  },
  {
    number: "4",
    title: "GROW AND SCALE",
    description:
      "As you expand, we scale with you — adding services or hours as needed.",
    icon: <Svgexport29 className="size-30" />,
    active: true,
  },
];

export function ProcessSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-10  min-h-screen">
      <HowWeDoIt />
      <div className="w-full flex items-center justify-center px-6  bg-white">
        <div className="w-full max-w-5xl">
          <div className="grid grid-cols-4 gap-0">
            {steps.map((step, i) => {
              const isLast = i === steps.length - 1;
              const isHovered = hovered === i;
              const numberColor = isLast ? "#b8cfe8" : "#e5e5e5";
              const hoverColor = isHovered
                ? isLast
                  ? "#a0bcd8"
                  : "#d0d0d0"
                : numberColor;

              return (
                <div
                  key={i}
                  className="relative flex flex-col px-4 pt-2 pb-8 cursor-default overflow-hidden"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Giant background number */}
                  <div
                    className="absolute top-0 left-0 select-none pointer-events-none leading-none font-black"
                    style={{
                      fontSize: "clamp(300px, 16vw, 400px)",
                      color: hoverColor,
                      fontFamily: "'Arial Black', 'Impact', sans-serif",
                      lineHeight: 1,
                      transition: "color 0.3s ease",
                      zIndex: 0,
                      top: "-10px",
                      left: "-4px",
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="relative z-10 mt-6 mb-4 transition-transform duration-300"
                    style={{
                      transform: isHovered
                        ? "translateY(-3px)"
                        : "translateY(0)",
                    }}
                  >
                    {step.icon}
                  </div>

                  {/* Title */}
                  <div
                    className="relative z-10 font-black text-sm tracking-wider mb-3 text-gray-900"
                    style={{
                      fontFamily: "'Arial Black', Arial, sans-serif",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {step.title}
                  </div>

                  {/* Description */}
                  <p
                    className="relative z-10 text-xs leading-relaxed text-gray-600"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      lineHeight: "1.6",
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

 
      </div>
    </section>
  );
}
