"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  const t = useTranslations("About");

  return (
    <section className="relative text-white grid min-h-screen grid-cols-1 md:grid-cols-2 gap-8  px-6 py-20 bg-black/30">
      <Image
        src={"/about.webp"}
        alt={t("title")}
        layout="fill"
        objectFit="cover"
        className="-z-1"
      />
      <div>
        <p className="text-3xl">{t("whoWeAre")}</p>
        <h2 className="text-6xl">{t("title")}</h2>
      </div>
      <div className="text-xl font-light">
        <h3 className="font-bold">{t("tagline")}</h3>​<p>{t("p1")}</p>​<p>{t("p2")}</p>​<p>{t("p3")}</p>​<p>{t("p4")}</p>​<p>{t("p5")}</p>
        <p className="font-bold ">{t("footer")}</p>
      </div>

      {/* Statistics Section */}
      <div className="col-span-1 md:col-span-2 mt-12 grid grid-cols-2 md:grid-cols-4 gap-1 pt-12 h-60 ">
        <div className="bg-white p-6 flex flex-col  ">
          <p className="text-4xl md:text-6xl -bold text-gray-900 mb-2">15</p>
          <p className="text-gray-600 mt-auto text-xl md:text-2xl">
            {t("stats.experience").split(" ").slice(0, 2).join(" ")} <br />{" "}
            {t("stats.experience").split(" ").slice(2).join(" ")}
          </p>
        </div>
        <div className="bg-white p-6 flex flex-col  ">
          <p className="text-4xl md:text-6xl -bold text-gray-900 mb-2">400+</p>
          <p className="text-gray-600 mt-auto  text-xl md:text-2x">
            {t("stats.completed").split(" ").slice(0, 1).join(" ")} <br />{" "}
            {t("stats.completed").split(" ").slice(1).join(" ")}
          </p>
        </div>
        <div className="bg-white p-6 flex flex-col  ">
          <p className="text-4xl md:text-6xl -bold text-gray-900 mb-2">95%</p>
          <p className="text-gray-600 mt-auto text-xl md:text-2xl">
            {t("stats.satisfaction").split(" ").slice(0, 1).join(" ")} <br />{" "}
            {t("stats.satisfaction").split(" ").slice(1).join(" ")}
          </p>
        </div>
        <div className="bg-white p-6 flex flex-col  ">
          <p className="text-4xl md:text-6xl -bold text-gray-900 mb-2">4.9/5</p>
          <p className="text-gray-600 mt-auto text-xl md:text-2xl">
            {t("stats.rating").split(" ").slice(0, 1).join(" ")} <br />{" "}
            {t("stats.rating").split(" ").slice(1).join(" ")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
