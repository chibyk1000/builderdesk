"use client";

import { Card } from "@/components/ui/card";
import {
  Shield,
  BarChart3,
  Building2,
  TrendingUp,
  Star,
  Users,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "../ui/badge";
import { useTranslations } from "next-intl";

export default function WhyChoose() {
  const t = useTranslations("Home.WhyChoose");

  const reasons = [
    {
      icon: Shield,
      title: t("reasons.reliability.title"),
      badge: t("reasons.reliability.badge"),
      description: t("reasons.reliability.description"),
      fulldesc: t("reasons.reliability.fulldesc"),
    },
    {
      icon: BarChart3,
      title: t("reasons.scalability.title"),
      badge: t("reasons.scalability.badge"),
      description: t("reasons.scalability.description"),
      fulldesc: t("reasons.scalability.fulldesc"),
    },
    {
      icon: Building2,
      title: t("reasons.industry.title"),
      badge: t("reasons.industry.badge"),
      description: t("reasons.industry.description"),
      fulldesc: t("reasons.industry.fulldesc"),
    },
    {
      icon: TrendingUp,
      title: t("reasons.technology.title"),
      badge: t("reasons.technology.badge"),
      description: t("reasons.technology.description"),
      fulldesc: t("reasons.technology.fulldesc"),
    },
    {
      icon: Users,
      title: t("reasons.training.title"),
      badge: t("reasons.training.badge"),
      description: t("reasons.training.description"),
      fulldesc: t("reasons.training.fulldesc"),
    },
    {
      icon: Star,
      title: t("reasons.hiring.title"),
      badge: t("reasons.hiring.badge"),
      description: t("reasons.hiring.description"),
      fulldesc: t("reasons.hiring.fulldesc"),
    },
  ];

  return (
    <section id="why" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-accent/10 font-medium text-accent border-none mb-3">
            {t("badge")}
          </Badge>
          <h2 className="text-3xl md:text-5xl text-primary mb-4">
            {t("title")}
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <Card
                key={index}
                className="p-8 border-0 h-[292px] gap-2 hover:shadow-lg transition relative shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A]"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <span className="absolute top-6 right-6 bg-[linear-gradient(90deg,#DBA400_0%,rgba(219,164,0,0.9)_100%)] text-white text-sm px-3 py-1 rounded-[33554400px] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
                    {reason.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-primary mb-3">
                  {reason.title}
                </h3>
                <p className="text-secondary text-sm mb-4">
                  {reason.description}
                </p>

                <Dialog>
                  <DialogHeader>
                    <DialogTitle></DialogTitle>
                  </DialogHeader>
                  <DialogTrigger>
                    <p className="text-primary/60 font-semibold text-sm hover:underline">
                      {t("learnMore")}
                    </p>
                  </DialogTrigger>
                  <DialogContent className="leading-8">
                    {reason.fulldesc}
                  </DialogContent>
                </Dialog>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-[linear-gradient(180deg,#0E4571_0%,#0A3554_100%)] text-white rounded-2xl p-12 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-white mb-2">
                {t("stats.projects.value")}
              </div>
              <p className="text-white/80">{t("stats.projects.label")}</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                {t("stats.onTime.value")}
              </div>
              <p className="text-white/80">{t("stats.onTime.label")}</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                {t("stats.experience.value")}
              </div>
              <p className="text-white/80">{t("stats.experience.label")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
