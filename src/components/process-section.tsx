"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Svgexport11, Svgexport26, Svgexport27, Svgexport28, Svgexport29 } from "./icons";

 function HowWeDoIt() {
  const t = useTranslations("Process");

  return (
    <div className="w-full  bg-white">
      <div className="flex flex-col md:flex-row items-start gap-16 max-w-11/12 mx-auto justify-between ">
        {/* Left: Heading */}
        <div className="">
          <h2 className="text-6xl font-bold text-[#1262a0] leading-tight whitespace-nowrap">
            {t("title")}
          </h2>
        </div>

        {/* Right: Content */}
        <div className=" flex-1 text- gap-5 flex-1">
          {/* Top text block */}
          <div className="text-[30px] ">
            <p className=" font-bold text-gray-900 mb-1">
              {t("tagline")}
            </p>
            <p className=" font-bold text-gray-900">
              {t("description")}
            </p>
          </div>

          {/* Bullet list — cascading indents */}
          <div className="flex flex-col gap-2 text-right items-end">
            <div
              className="flex items-center gap-2 mr-40"
              style={{ paddingLeft: "0px" }}
            >
              <Svgexport11 />
              <span className="text-[23px] text-gray-900">
                {t("bullets.pmp")}
              </span>
            </div>

            <div
              className="flex items-center gap-2"
              style={{ paddingLeft: "28px" }}
            >
              <Svgexport11 />
              <span className="text-[23px] text-gray-900">
                {t("bullets.degree")}
              </span>
            </div>

            <div
              className="flex items-center gap-2 mr-20"
              style={{ paddingLeft: "56px" }}
            >
              <Svgexport11 />
              <span className="text-[23px] text-gray-900">
                {t("bullets.noContracts")}
              </span>
            </div>

            <div
              className="flex items-center gap-2 mr-10"
              style={{ paddingLeft: "84px" }}
            >
              <Svgexport11 />
              <span className="text-[23px] text-gray-900">{t("bullets.training")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProcessSection() {
  const t = useTranslations("Process");
  const [hovered, setHovered] = useState<number | null>(null);

  const steps = [
    {
      number: "1",
      title: t("steps.discovery.title"),
      description: t("steps.discovery.description"),
      icon: <Svgexport26 className="size-30" />,
      active: false,
    },
    {
      number: "2",
      title: t("steps.plan.title"),
      description: t("steps.plan.description"),
      icon: <Svgexport27 className="size-30" />,
      active: false,
    },
    {
      number: "3",
      title: t("steps.execute.title"),
      description: t("steps.execute.description"),
      icon: <Svgexport28 className="size-30" />,
      active: false,
    },
    {
      number: "4",
      title: t("steps.grow.title"),
      description: t("steps.grow.description"),
      icon: <Svgexport29 className="size-30" />,
      active: true,
    },
  ];

  return (
    <section className="py-10  min-h-screen">
      <HowWeDoIt />
      <div className="w-full flex items-center justify-center px-6  bg-white">
        <div className=" w-11/12 mt-10">
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
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[32rem] select-none pointer-events-none leading-none font-black"
                    style={{
                      color: hoverColor,
                      fontFamily: "inherit",
                      lineHeight: 1,
                      transition: "all 0.5s ease",
                      zIndex: 0,
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
                    className="relative z-10 font-bold text-[23px] tracking-wider mb-3 text-gray-900"
                    style={{
                      fontFamily: "'Arial Black', Arial, sans-serif",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {step.title}
                  </div>

                  {/* Description */}
                  <p
                    className="relative z-10 font-[350]  2xl:text-[23px] leading-relaxed text-gray-600"
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

