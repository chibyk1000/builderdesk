"use client"
import {
  ArrowRight,
  CircleCheck,
  ClipboardList,
  Clock,
  Shield,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Variants } from "framer-motion";
import { motion } from "framer-motion";
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const stagger: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const Hero = () => {
  const t = useTranslations("Home.Hero");

  const offer = [
    t("offers.noContract"),
    t("offers.scale"),
    t("offers.specialists"),
  ];

  return (
    <section className=" relative text-white  bg-[linear-gradient(180deg,#0E4571_0%,#0A3554_50%,#063049_100%)] overflow-hidden  pt-28   h-fit flex flex-col ">
      {/* Top blue blur light */}

      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        className="absolute right-0 top-0 size-[600px] rounded-full bg-[#5EA0D5] z-40 blur-[240px] opacity-50"
      />
      <motion.div
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute left-0 bottom-0 size-[500px]  bg-white z-40 blur-[200px] opacity-15"
      />

      {/* Center gradient glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] rounded-[33554400px] bg-[linear-gradient(180deg,#0E4571_0%,rgba(0,0,0,0)_100%)] blur-[300px] "
      ></motion.div>

      {/* Content */}
      <motion.section
        className="relative z-50 container px-2 sm:px-10 max-w-[1260px] mx-auto  space-y-4  text-left md:text-left"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <div className="w-full  md:mx-0  ">
          {/* Trust Badge */}

          <div className=" md:grid grid-cols-12   justify-between  w-full gap-20 items-end ">
            <section className="space-y-8  flex-1 col-span-12  xl:col-span-6">
              <motion.div variants={fadeIn} className="rounded-full border border-white/20 w-80 justify-center px-2 h-[42px] flex items-center gap-2 bg-white/10 mx-auto md:mx-0">
                <span className="inline-block bg-yellow-400 rounded-full size-2"></span>
                <p className="text-white text-sm">{t("badge")}</p>
              </motion.div>
              {/* Headline */}
              <motion.article className="mt-8 " variants={fadeUp}>
                <h2 className="text-white max-sm:text-4xl text-6xl md:text-7xl mb-2 font-bold">
                  {t("headline1")}
                </h2>
                <h2 className="text-yellow-400 max-sm:text-4xl text-6xl md:text-7xl font-bold">
                  {t("headline2")}
                </h2>

                <p className="text-white/80 text-lg mt-6 leading-relaxed max-w-140">
                  {t("description")}
                </p>
              </motion.article>

              <motion.div className="flex flex-wrap gap-1" variants={stagger}>
                {offer.map((o, i) => {
                  return (
                    <motion.span
                      className="flex gap-2"
                      key={i}
                      variants={fadeUp}
                    >
                      <CircleCheck className="text-accent" />
                      <span className="max-sm:text-sm">{o}</span>
                    </motion.span>
                  );
                })}
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="flex max-sm:flex-col  gap-4"
              >
                <Button
                  className="flex font-medium items-center gap-2 bg-accent text-white  px-6 py-3 rounded-lg transition-all duration-300 hover:bg-accent/90 [box-shadow:0_25px_30px_-12px_#DBA4004D] h-14  text-[18px] "
                  asChild
                  style={
                    {
                      // boxShadow: `0px 25px 50px -12px #DBA4004D`
                    }
                  }
                >
                  <Link href={"/contact"}>
                    <span>{t("buttons.consultation")}</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  className="font-medium h-14 sm:w-45.5 text-[18px] dark:bg-white bg-white hover:bg-white/80  text-black"
                >
                  <Link href={"/pricing"} className="bg-white">
                    {t("buttons.pricing")}
                  </Link>
                </Button>
              </motion.div>
            </section>
            <div className="col-span-6 hidden xl:grid">
              {/* Image wrapper */}
              <div className="relative rounded-2xl grid justify-end  ">
                {/* Gradient Glass Overlay */}
                <div className="absolute -top-8 -left-8   z-10 rounded-3xl bg-[linear-gradient(135deg,rgba(219,164,0,0.2)_0%,rgba(255,255,255,0.1)_50%,rgba(0,0,0,0)_100%)] blur-[80px] w-[533px] h-[377px] pointer-events-none"></div>
                {/* Image Wrapper */}
                <motion.div
                  className="relative z-20 w-[476px] h-[313px] [box-shadow:0px_25px_50px_-12px_#00000040]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Button className="bg-accent hover:bg-accent text-white absolute -top-4 z-105 -right-4">
                    <CircleCheck />
                    <span>{t("image.tag")}</span>
                  </Button>

                  <div className="bg-white rounded-xl bg-liner grid place-content-center absolute -bottom-4 z-105 h-[106px] w-[188px] -left-4">
                    <div className="flex gap-2">
                      <div className="w-14 h-14 rounded-lg bg-[linear-gradient(180deg,#DBA400_0%,#C99400_100%)] shadow-[0_4px_6px_-4px_#0000001A,0_10px_15px_-3px_#0000001A] opacity-100 grid place-content-center">
                        <Star />
                      </div>
                      <div>
                        <p className="text-primary text-3xl">4.9/5</p>
                        <p className="text-secondary text-xs">
                          {t("image.ratingLabel")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[linear-gradient(0deg,rgba(14,69,113,0.4)_0%,rgba(0,0,0,0)_50%,rgba(0,0,0,0)_100%)]">
                    <Image
                      src="/ImageWithFallback.png"
                      alt={t("image.alt")}
                      fill
                      className="object-cover z-5 object-center rounded-2xl"
                      priority
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div
            className="grid grid-cols-3 max-w-[682.65625px] gap-2 md:gap-6 pt-8 text-center md:text-left"
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className=" bg-white/5 border-white/10 space-y-1 h-35 border rounded-xl grid place-content-center text-center"
            >
              <ClipboardList className="text-accent inline-block mx-auto max-md:size-4" />
              <h3 className="text-2xl md:text-4xl font-bold text-white">
                {t("stats.projects.value")}
              </h3>
              <p className="text-white/70 text-sm md:hidden">
                {" "}
                {t("stats.projects.labelShort")}{" "}
              </p>
              <p className="text-white/70 text-xs max-md:hidden">
                {t("stats.projects.labelFull")}
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className=" bg-white/5 border-white/10 h-35 space-y-1 border rounded-xl grid place-content-center text-center"
            >
              <Clock className="text-accent inline-block mx-auto max-md:size-4" />
              <h3 className="text-2xl md:text-4xl font-bold text-white">
                {t("stats.onTime.value")}
              </h3>
              <p className="text-white/70 text-sm md:hidden">
                {" "}
                {t("stats.onTime.labelShort")}
              </p>
              <p className="text-white/70 text-sm max-md:hidden">
                {t("stats.onTime.labelFull")}
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className=" bg-white/5 border-white/10 h-35 space-y-1 border rounded-xl grid place-content-center text-center"
            >
              <Shield className="text-accent inline-block mx-auto max-md:size-4" />
              <h3 className="text-2xl md:text-4xl font-bold text-white">
                {t("stats.experience.value")}
              </h3>

              <p className="text-white/70 text-sm md:hidden">
                {" "}
                {t("stats.onTime.labelShort")}
              </p>
              <p className="text-white/70 text-sm max-md:hidden">
                {t("stats.onTime.labelFull")}
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div variants={fadeIn} className="col-span-6 xl:hidden mt-10 ">
          {/* Image wrapper */}
          <div className="relative rounded-2xl  ">
            {/* Gradient Glass Overlay */}
            <div className="absolute -top-8 -left-8   z-10 rounded-3xl bg-[linear-gradient(135deg,rgba(219,164,0,0.2)_0%,rgba(255,255,255,0.1)_50%,rgba(0,0,0,0)_100%)] blur-[80px] w-[533px] h-[377px] pointer-events-none"></div>
            {/* Image Wrapper */}
            <div className="relative z-20 xs:w-[342px] md:w-[677px]  h-[313px] [box-shadow:0px_25px_50px_-12px_#00000040]">
              <Button className="bg-accent hover:bg-accent  max-sm:h-8 top-10 right-2 text-white absolute sm:-top-4 z-105 sm:-right-4">
                <CircleCheck />
                <span>{t("image.tag")}</span>
              </Button>

              <div className="bg-white rounded-xl bg-liner grid place-content-center absolute -bottom-4 z-105 h-[78px] sm:h-[106px] w-[154px] sm:w-[188px] left-4 sm:-left-4">
                <div className="flex gap-2">
                  <div className="w-14 h-14 rounded-lg bg-[linear-gradient(180deg,#DBA400_0%,#C99400_100%)] shadow-[0_4px_6px_-4px_#0000001A,0_10px_15px_-3px_#0000001A] opacity-100 grid place-content-center">
                    <Star />
                  </div>
                  <div>
                    <p className="text-primary text-xl sm:text-3xl">4.9/5</p>
                    <p className="text-secondary text-xs">
                      {t("image.ratingLabel")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[linear-gradient(0deg,rgba(14,69,113,0.4)_0%,rgba(0,0,0,0)_50%,rgba(0,0,0,0)_100%)]">
                <Image
                  src="/ImageWithFallback.png"
                  alt="Construction team at work"
                  fill
                  className="object-cover z-5 object-center rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      <motion.div variants={fadeIn} className="flex max-sm:flex-col border-t border-white/10 bg-white/5 max-sm:items-center max-sm:py-3 md:h-[69px] mt-10 md:items-center justify-center text-white/80">
        {/* Item 1 */}
        <div className="flex items-center    md:justify-center gap-2 px-6">
          <Shield className="text-accent" />
          <p>{t("footer.certified")}</p>
        </div>

        {/* Custom Divider */}
        <div className="w-px hidden sm:block h-6 bg-linear-to-b from-white/10 to-white/5 mx-4" />

        {/* Item 2 */}
        <div className="flex items-center md:justify-center gap-2 px-6">
          <Users className="text-accent" />
          <p> {t("footer.support")}</p>
        </div>

        {/* Custom Divider */}
        <div className="w-px h-6 bg-linear-to-b  hidden sm:block from-white/10 to-white/5 mx-4" />

        {/* Item 3 */}
        <div className="flex items-center md:justify-center gap-2 px-6">
          <TrendingUp className="text-accent" />
          <p>{t("footer.trackRecord")}</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
