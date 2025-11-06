
"use client"
import { CircleCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Pricing2 } from "@/components/home/Pricing";
import Link from "next/link";
import { useTranslations } from "next-intl";
const Page = () => {
 
 


const t = useTranslations("pricingPage") 


  const services = t.raw("hourlyPricing.services") as {
    name: string;
    rate: string;
    description: string;
  }[];

  const projects = t.raw("projectPricing.projects") as {
    name: string;
    price: string;
    description: string;
  }[];

  const statsItem = t.raw("stats.items") as { value: string; title: string, description: string }[]
  const faqItems = t.raw("faq.items") as {question:string, answer:string}[]
  return (
    <div>
      <section className="py-16 px-6 bg-background relative overflow-hidden">
        <div className="size-150 bg-primary/5 rounded-full absolute -top-85 -right-60"></div>

        <div className="max-w-[1285px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12 relative overflow-hidden">
            <div className="   items-center justify-center hidden lg:flex">
              <div className="text-4xl size-78 relative">
                <Image src={"/pricing-hero-l.png"} alt="" fill />
              </div>
            </div>

            <div className="flex-1 text-center ">
              <div className="inline-block bg-accent/10 border border-accent/20 text-primary px-2 py-1 rounded-full text-sm  mb-4">
                <span className="size-2 bg-accent rounded-full inline-block"></span>{" "}
                {t("hero.badge")}
              </div>
              <h1 className="text-4xl md:text-5xl text-primary  space-x-3  mb-4">
                <span> {t("hero.title1")}</span>
                <span className="text-accent"> {t("hero.title2")}</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                {t("hero.subtitle")}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="flex items-center gap-2  px-4 py-2 rounded-lg">
                  <div className="size-7 sm:size-10 rounded-lg bg-primary flex items-center justify-center">
                    <CircleCheck className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium">
                    {t("hero.features.payPerTask")}
                  </span>
                </div>
                <div className="flex items-center gap-2 0 px-4 py-2 rounded-lg">
                  <div className="size-7 sm:size-10 rounded-lg bg-primary flex items-center justify-center">
                    <CircleCheck className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium">
                    {t("hero.features.unlimited")}
                  </span>
                </div>
                <div className="flex items-center gap-2  px-4 py-2 rounded-lg">
                  <div className="size-7 sm:size-10 rounded-lg bg-primary flex items-center justify-center">
                    <CircleCheck className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium">
                    {t("hero.features.customQuote")}
                  </span>
                </div>
              </div>
            </div>

            <div className="   items-center justify-center hidden lg:flex">
              <div className="text-4xl size-78 relative">
                <Image src={"/pricing-hero-r.png"} alt="" fill />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" ">
        <div className="max-w-7xl mx-auto bg-muted/30 py-16 px-6 ">
          <div className="text-center mb-12">
            <h2 className="max-sm:text-2xl text-3xl md:text-4xl text-primary mb-4">
              {t("pricingSection.title")}
            </h2>
            <p className="text-[#4A5565] text-lg sm:text-xl">
              {t("pricingSection.subtitle")}
            </p>
          </div>

          <Pricing2 />

          <div className="text-center">
            <p className="text-center text-sm text-[#4A5565] mt-8">
              {t("pricingSection.customMessage")}
            </p>
            <Button
              variant={"outline"}
              className="border-primary border mx-auto   mt-8 text-primary"
              asChild
            >
              <Link href="/contact">{t("pricingSection.customButton")}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-3xl md:text-4xl  mb-4 text-primary">
              {t("hourlyPricing.title")}
            </h2>
            <p className="text-muted-foreground">
              {t("hourlyPricing.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-md  h-45.5 transition-shadow">
                <CardHeader className="font-normal">
                  <CardTitle className="text-lg sm:text-xl text-primary font-normal">
                    {service.name}
                  </CardTitle>
                  <div className="sm:text-2xl text-xl  text-primary">
                    {service.rate}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-[#4A5565]">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card
            className=" border-orange-200  mx-auto"
            style={{
              background: `linear-gradient(90deg, rgba(219, 164, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%)`,
            }}
          >
            <CardContent className="p-6 flex max-lg:flex-col justify-between gap-4">
              <div className="flex max-lg:flex-col max-lg:items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent flex  items-center justify-center text-white shrink-0">
                  <Star fill="white" />
                </div>
                <div>
                  <h3 className=" text-lg mb-1 max-lg:text-center">
                    {t("hourlyPricing.discount.title")}
                  </h3>
                  <p className="text-sm text-muted-foreground max-lg:text-center">
                    {t("hourlyPricing.discount.description")}
                  </p>
                </div>
              </div>

              <Button asChild>
                <Link href="/contact">
                  {t("hourlyPricing.discount.button")}
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="">
        <div className="max-w-7xl mx-auto bg-muted/30 py-16 px-3 lg:px-6 mb-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl text-primary md:text-4xl  mb-4">
              {t("projectPricing.title")}
            </h2>
            <p className="text-[#4A5565] text-lg sm:text-xl">
              {t("projectPricing.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-[#E5E7EB]">
                <CardContent className="p-3 lg:p-6 flex flex-col  gap-4">
                  <div className="flex-1 flex  justify-between ">
                    <h3 className="text-primary text-lg mb-1">
                      {project.name}
                    </h3>

                    <div className="text-lg  text-[#1e3a5f] whitespace-nowrap">
                      {project.price}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-primary mb-6">
            {t("projectPricing.footerNote")}
          </p>

          <div className="text-center">
            <Button
              className="bg-accent hover:bg-accent/90 text-white px-8 h-12"
              asChild
            >
              <Link href="/contact">{t("projectPricing.button")}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/60 max-md:px-2 max-w-7xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-10">
          {t("stats.title")}
        </h2>

        <div className="max-w-6xl mx-auto  grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card */}

          {statsItem.map((stat, i) => {
            return (
              <div className="bg-white border h-[230px] grid border-gray-200 rounded-xl p-6 text-center">
                <p className="sm:text-3xl text-2xl  text-primary">
                  {stat.value}
                </p>
                <h3 className="text-gray-800 font-medium mt-2">{stat.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16 bg-white max-md:px-2">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-10">
          {t("faq.title")}
        </h2>

        <div className="max-w-[704px] mx-auto space-y-4">
          {
            faqItems.map((faq, i) => {
              return (
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-medium text-gray-800">{faq.question}</h3>
                  <p className="text-sm text-gray-600 mt-2">{faq.answer}</p>
                </div>
              );
            })
          }
        

 
        </div>
      </section>
    </div>
  );
};

export default Page;
