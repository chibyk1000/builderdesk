"use client";

import { useTranslations } from "next-intl";
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
import { Badge } from "../ui/badge";
import Link from "next/link";

export default function HourlyPricing() {
  const t = useTranslations("Home.hourlyPricing");

  const hourlyServices = [
    {
      title: t("services.projectManagement.title"),
      icon: ClipboardList,
      price: "$15-25",
      period: t("priceUnit"),
      description: t("services.projectManagement.description"),
    },
    {
      title: t("services.estimating.title"),
      icon: Calculator,
      price: "$18-28",
      period: t("priceUnit"),
      description: t("services.estimating.description"),
    },
    {
      title: t("services.bookkeeping.title"),
      icon: DollarSign,
      price: "$12-18",
      period: t("priceUnit"),
      description: t("services.bookkeeping.description"),
    },
    {
      title: t("services.adminAssistance.title"),
      icon: Users,
      price: "$8-12",
      period: t("priceUnit"),
      description: t("services.adminAssistance.description"),
    },
    {
      title: t("services.businessDevelopment.title"),
      icon: TrendingUp,
      price: "$20-30",
      period: t("priceUnit"),
      description: t("services.businessDevelopment.description"),
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-accent/10 text-accent">{t("badge")}</Badge>
          <h2 className="text-3xl md:text-4xl text-primary mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {hourlyServices.map((service, index) => (
            <Card
              key={index}
              className="p-6 border-2 border-gray-200 transition"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-white text-lg">{<service.icon />}</span>
                </div>
                <div>
                  <h3 className="text-lg text-primary">{service.title}</h3>
                  <div className="mb-">
                    <span className="text-2xl text-primary">
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

          <Card className="bg-linear-to-br from-primary gap-2 to-primary/90 rounded-lg p-5 text-white">
            <div className="flex items-start gap-2 mb-">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                <span className="text-white text-lg">
                  <FileText />
                </span>
              </div>
              <div>
                <h3 className="text-lg mb-2">
                  {t("pricing.perProject.title")}
                </h3>
                <p className="text-white/90 text-sm mb-6">
                  {t("pricing.perProject.description")}
                </p>
              </div>
            </div>
            <p className="text-white/80 text-sm mb-">
              {t("pricing.perProject.description")}
            </p>
            <Button
              asChild
              className="bg-white mt-aut hover:bg-white/90 w-full text-primary font-semibold"
            >
              <Link href="/contact">{t("pricing.perProject.button")}</Link>
            </Button>
          </Card>
        </div>

        <div className="rounded-lg p-8 gap-8 items-center border border-[#E5E7EB] bg-gray-50 max-md:flex-col max-md:items-center flex justify-between">
          <div className="flex-1">
            <h3 className="text-lg text-primary mb-2">
              {t("pricing.volumeDiscount.title")}
            </h3>
            <p className="text-secondary text-sm mb-6">
              {t("pricing.volumeDiscount.description")}
            </p>
          </div>
          <Button className="mx-auto" asChild>
            <Link href={"/pricing"}>
              {t("pricing.volumeDiscount.button")}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
