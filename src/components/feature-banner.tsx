"use client";

import { useTranslations } from "next-intl";
import { Users, TrendingUp, Shield } from "lucide-react";

export function FeatureBanner() {
  const t = useTranslations("Features");

  return (
    <div className="bg-[#88C3EF] text-white py-6">
      <div className="w-7/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {/* Feature 1 */}
          <div className="flex items-center gap-4">
            <Users className="w-8 h-8 shrink-0" />
            <span className="text-[18px] font-neue-haas ">
              {t("support")}
            </span>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-4">
            <TrendingUp className="w-8 h-8 shrink-0" />
            <span className="text-[18px] ">{t("trackRecord")}</span>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-4">
            <Shield className="w-8 h-8 flex-shrink-0" />
            <span className="text-[18px] ">{t("certified")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
