"use client";

import {
  ClipboardList,
  DollarSign,
  Palette,
  Ruler,
  Sparkles,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";
import React from "react";
import ServiceCard, { ServiceCtaCard } from "../common/service-card";
import { Badge } from "../ui/badge";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Variants } from "framer-motion";
import { motion } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};


const Services = () => {
  const t = useTranslations("Home.Services");
  const router = useRouter()

  const services = [
    {
      icon: ClipboardList,
      title: t("items.projectManagement.title"),
      description: t("items.projectManagement.description"),
      services: t.raw("items.projectManagement.services"),
    },
    {
      icon: Users,
      title: t("items.adminSupport.title"),
      description: t("items.adminSupport.description"),
      services: t.raw("items.adminSupport.services"),
    },
    {
      icon: TrendingUp,
      title: t("items.businessDev.title"),
      description: t("items.businessDev.description"),
      services: t.raw("items.businessDev.services"),
    },
    {
      icon: DollarSign,
      title: t("items.bookkeeping.title"),
      description: t("items.bookkeeping.description"),
      services: t.raw("items.bookkeeping.services"),
    },
    {
      icon: Palette,
      title: t("items.marketing.title"),
      description: t("items.marketing.description"),
      services: t.raw("items.marketing.services"),
    },
    {
      icon: UserCheck,
      title: t("items.hr.title"),
      description: t("items.hr.description"),
      services: t.raw("items.hr.services"),
    },
    {
      icon: Ruler,
      title: t("items.archSupport.title"),
      description: t("items.archSupport.description"),
      services: t.raw("items.archSupport.services"),
    },
  ];

  return (
    <motion.section
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={stagger}
    >
      <motion.header className="text-center" variants={fadeUp}>
        <Badge
          className="text-primary bg-primary/5 mb-4 font-medium"
          variant="outline"
        >
          {t("badge")}
        </Badge>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[40px] text-primary mb-4">
            {t("heading")}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>
      </motion.header>

      <motion.div
        variants={stagger}
        className="grid md:grid-cols-3 gap-8 xl:max-w-7xl px-2 sm:px-8 mx-auto"
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <ServiceCard
              description={service.description}
              icon={<service.icon />}
              title={service.title}
              services={service.services}
            />
          </motion.div>
        ))}

        <motion.div variants={fadeUp} transition={{ delay: 0.2 }}>
          <ServiceCtaCard
            icon={<Sparkles className="w-5 h-5" />}
            title={t("cta.title")}
            description={t("cta.description")}
            buttonText={t("cta.button")}
            onClick={() => router.push("/services")}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Services;
