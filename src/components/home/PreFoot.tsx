"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import {
  ArrowRight,
  CircleCheck,
  Clock,
  FileText,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

const PreFoot = () => {
  const t = useTranslations("Home.preFoot");

  return (
    <div className="relative h-[640px] grid place-content-center bg-linear-to-b from-primary via-[#0A3554] to-primary overflow-hidden">
      <div className="absolute top-[175px] left-20 w-[384px] h-96 rounded-full bg-white/10 backdrop-blur-[128px] blur-3xl opacity-30"></div>
      <div className="absolute top-20 left-[1072px] w-[384px] h-96 rounded-full bg-[#4584B7]/40 blur-[128px] opacity-30"></div>

      <div className="w-full min-h-[350px] relative z-100 max-w-7xl flex flex-col items-center justify-center py-16">
        <h1 className="text-4xl w-80 md:max-w-xl text-white mb-3 text-center">
          {t("heading")}
        </h1>
        <p className="text-white/80 mb-8 text-center w-80 md:max-w-xl">
          {t("subheading")}
        </p>

        <div className="md:flex max-md:space-y-4 gap-4 mb-10">
          <Button
            variant={"ghost"}
            asChild
            className="bg-white max-md:w-full shadow-2xl w-55 shadow-[#00000040] h-14 text-primary font-medium"
          >
            <Link href="/contact">
              {t("buttons.getStarted")} <ArrowRight />
            </Link>
          </Button>
          <Button
            variant={"success"}
            className="h-14 w-55 max-md:w-full text-white font-medium"
          >
            <MessageSquare /> {t("buttons.chatWhatsapp")}
          </Button>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-xl xl:w-[960px] p-4 flex max-md:gap-4 flex-col md:flex-row md:gap-6 sm:items-center text-white/80 lg:h-24.5 pt-[25px] px-[55px] w-full justify-between">
          {/* Call */}
          <div className="flex gap-2 items-center">
            <span className="bg-white/10 size-12 rounded-xl grid place-content-center">
              <Clock className="text-xl" />
            </span>
            <div>
              <p className="text-xs text-white/60">{t("contact.call")}</p>
              <p className="text-sm">{t("contact.phone")}</p>
            </div>
          </div>

          <div className="hidden md:block w-px h-6 bg-white/20"></div>

          {/* Email */}
          <div className="flex gap-2 items-center">
            <span className="bg-success/10 size-12 rounded-xl grid place-content-center">
              <FileText className="text-xl text-success" />
            </span>
            <div>
              <p className="text-xs text-white/60">{t("contact.emailLabel")}</p>
              <p className="text-sm">{t("contact.email")}</p>
            </div>
          </div>

          <div className="hidden md:block w-px h-6 bg-white/20"></div>

          {/* Response Time */}
          <div className="flex gap-2 items-center">
            <span className="bg-accent/10 size-12 rounded-xl grid place-content-center">
              <CircleCheck className="text-xl text-accent" />
            </span>
            <div>
              <p className="text-xs text-white/60">
                {t("contact.responseTimeLabel")}
              </p>
              <p className="text-sm">{t("contact.responseTime")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreFoot;
