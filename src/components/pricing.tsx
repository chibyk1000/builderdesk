"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { Svgexport30, Svgexport31, Svgexport32 } from "./icons";

const Pricing = () => {
  const t = useTranslations("Pricing");

  const topFeatures = [
    { text: t("features.noSetup"), icon: "→" },
    { text: t("features.cancel"), icon: "→" },
    { text: t("features.support"), icon: "→" },
  ];

  const pricingCards = [
    {
      icon: <Svgexport30 className="size-10" />,
      title: t("cards.estimating.title"),
      description: t("cards.estimating.description"),
      price: "$1,500",
      period: t("mo"),
      features: t.raw("cards.estimating.features"),
      idealFor: t("cards.estimating.idealFor"),
    },
    {
      icon: <Svgexport31 className="size-10" />,
      title: t("cards.operations.title"),
      description: t("cards.operations.description"),
      price: "$2,500",
      period: t("mo"),
      features: t.raw("cards.operations.features"),
      idealFor: t("cards.operations.idealFor"),
    },
    {
      icon: <Svgexport32 className="size-10" />,
      title: t("cards.full.title"),
      description: t("cards.full.description"),
      price: "$5,000",
      period: t("mo"),
      features: t.raw("cards.full.features"),
      idealFor: t("cards.full.idealFor"),
    },
  ];

  const addOnServices = [
    {
      title: t("addons.items.architectural.title"),
      description: t("addons.items.architectural.description"),
      price: "$1,200/mo",
    },
    {
      title: t("addons.items.marketing.title"),
      description: t("addons.items.marketing.description"),
      price: "$800/mo",
    },
    {
      title: t("addons.items.business.title"),
      description: t("addons.items.business.description"),
      price: "$950/mo",
    },
    {
      title: t("addons.items.hr.title"),
      description: t("addons.items.hr.description"),
      price: "$500/mo",
    },
    {
      title: t("addons.items.admin.title"),
      description: t("addons.items.admin.description"),
      price: "$950/mo",
    },
    {
      title: t("addons.items.bookkeeping.title"),
      description: t("addons.items.bookkeeping.description"),
      price: "$950/mo",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
      {/* Background Image */}
      <div className="absolute inset-0 ">
        <Image
          src="/pricing.avif"
          alt={t("title")}
          fill
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        {/* Top Section */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
            {t("title")}
          </h2>

          {/* Subtitle */}
          <p className="text-3xl md:text-4xl text-gray-200 mb-12">
            {t("subtitle")}
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
            <div
              key={i}
              className="bg-gray-100 rounded-lg p-7 w-120 h-150  shadow-sm"
            >
              {/* Header: icon + title */}
              <div className="flex items-center gap-3 mb-3.5">
                {/* Icon */}
                <div className="flex-shrink-0 w-9 h-9">{card.icon}</div>
                <h2 className="2xl:text-3xl font-bold text-gray-900 leading-tight">
                  {card.title}
                </h2>
              </div>

              {/* Subtitle */}
              <p className="2xl:text-2xl font-[350] text-[#595959] m-0 mb-3 leading-relaxed">
                {card.description}
              </p>

              {/* Pricing */}
              <p className="2xl:text-2xl text-gray-900 m-0 mb-3.5">
                {t("startingFrom")}{" "}
                <strong className="">
                  {card.price}
                  {card.period}
                </strong>
              </p>

              {/* Bullet list */}
              <ul className="m-0 mb-4.5 pl-4.5 2xl:text-xl ml-4  text-[#595959] font-[350] list-disc">
                {card.features.map((item: string, j: number) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>

              {/* Ideal for label */}
              <p className="text-xl font-bold text-orange-600 m-0 mb-1.5">
                {t("idealForLabel")}
              </p>

              {/* Ideal for text */}
              <p className="2xl:text-xl text-[#595959] m-0 leading-relaxed">
                {card.idealFor}
              </p>
            </div>
          ))}
        </div>

        {/* Add-On Services Section */}
        <div className="max-w-10/12 mx-auto mt-20">
          {/* Heading */}
          <div className=" ">
            <h2 className=" font-bold text-white ">{t("addons.title")}</h2>
            <p className="text-orange-500 2xl:text-2xl font-semibold ">
              {t("addons.subtitle")}
            </p>
            <p className="text-gray-200 text-base 2xl:text-2xl  ">
              {t("addons.description")}
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
