"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardTitle,
  CardAction,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,

  Check,

  ChevronLeft,
  ChevronRight,
  CircleCheck,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Badge } from "../ui/badge";
import CheckIcon from "./Icon";
import Link from "next/link";

const plans = [
  {
    name: "Administrative Support",
    price: "$1,500",
    maxProject: "Maximum of 2 projects at once",
    period: "/month",
    description:
      "Professional administrative assistance to streamline your operations",
    features: [
      "Filing and tracking",
      "Appointment setup",
      "Follow-up emails",
      "Insurance COI management",
      "Onboarding and offboarding",
      "Call answering",
      "Letter drafting",
      "License expiration tracking",
    ],
    recommended: true,
  },
  {
    name: "Project Management Support",
    price: "$1,500",
    maxProject: "Maximum of 2 projects at once",
    period: "/month",
    description: "Complete project management and analysis on-site",
    features: [
      "For 3 to 4 projects at once, add $1,000.00",
      "Project set up and close out",
      "Schedule of values",
      "AIA Billing",
      "Submittal preparation and tracking",
      "Change orders preparation",
      "Document control",
      "RFI's",
    ],
    recommended: true,
  },
  {
    name: "Marketing Branding Package",
    price: "$1,200",
    period: "/one time",
    description: "Comprehensive marketing and branding solutions",
    features: [
      "Website, hosting and management",
      "Graphic Design",
      "Logo",
      "Capability statement",
      "Business cards",
      "Brochures",
    ],
    recommended: false,
  },
  {
    name: "Social Media Management",
    price: "$600",
    period: "/month",
    description:
      "Professional social media management to grow your online presence",
    features: [
      "5 Posts a week",
      "Graphic design",
      "3 platforms of the client's choice",
      "Content calendar + Captions + Designs",
      "Posting of clients videos or pictures",
      "Hashtag research and keyword optimization",
    ],
    recommended: false,
  },
];

const filters = [
  "No setup fees",
  "Cancel anytime",
  "30 day money back",
  "Dedicated support",
];



export function Pricing2() {
    const plans = [
      {
        name: "Administrative Support",
        price: "$1,000",
        period: "/month",
        description: "Perfect for small to medium construction companies",
        features: [
          "Dedicated admin support",
          "Email management",
          "Calendar scheduling",
          "Document organization",
          "Data entry and filing",
          "Phone/email correspondence",
          "Meeting coordination",
          "Travel arrangements",
          "Expense tracking",
          "Client communication",
          "Limited project tracking",
          "Basic reporting",
        ],
        buttonText: "Get Started",
        buttonVariant: "outline" as const,
        ads: "",
      },
      {
        name: "Project Management Support",
        price: "$1,500",
        period: "/month",
        description: "Ideal for growing construction businesses",
        ads: "Maximum of 2 projects at once. For 3 to 4 projects add $1,000",
        popular: true,
        features: [
          "Project plan and schedule",
          "Budget tracking",
          "Resource allocation",
          "Risk management",
          "Quality control",
          "Stakeholder communication",
          "Change order management",
          "Progress reporting",
          "Team coordination",
          "Vendor management",
          "Safety compliance",
          "Document control",
        ],
        buttonText: "Get Started",
        buttonVariant: "default" as const,
      },
      {
        name: "Marketing Branding Package",
        price: "$1,200",
        period: "/one time",
        description: "Comprehensive marketing and branding solutions",
        features: [
          "Website, hosting and management",
          "Graphic Design",
          "Logo",
          "Capability statement",
          "Business cards",
          "Brochures",
        ],
        buttonText: "Get Started",
        buttonVariant: "outline" as const,
        ads: "",
      },

      {
        name: "Social Media Management",
        price: "$600",
        period: "/month",
        description:
          "Professional social media management to grow your online presence",
        features: [
          "5 Posts a week",
          "Graphic design",
          "3 platforms of the client's choice",
          "Content calendar + Captions + Designs",
          "Posting of clients videos or pictures",
          "Hashtag research and keyword optimization",
        ],
        buttonText: "Get Started",
        buttonVariant: "outline" as const,
        ads: "",
      },
    ];
  return (
    <section id="pricing" className=" ">
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          pagination={{
            el: ".swiper-pagination-custom",
            clickable: true,
            bulletClass: "swiper-pagination-bullet-custom",
            bulletActiveClass: "swiper-pagination-bullet-active-custom",
          }}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          className="pricing-swiper sm:w-10/12 overflow-visible mx-auto"
        >
          {plans.map((plan, index) => (
            <SwiperSlide key={index} className="overflow-visible py-5">
              <Card
                key={index}
                className={`relative shadow-lg border overflow-visible  h-[696px] flex-1  rounded-[12px] max-w-112 ${
                  plan.popular ? "border-[#1e3a5f] border-2" : ""
                }`}
              >
                {plan.popular && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent z-200 text-white px-4 py-1 rounded-full text-sm "
                    style={{
                      boxShadow:
                        "0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A",
                    }}
                  >
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-8 text-primary font-normal relative">
                  <CardTitle className="text-xl sm:text-2xl mb-2 font-normal">
                    {plan.name}
                  </CardTitle>
                  <p className="text-sm text-[#4A5565] sm:mt-2">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl sm:text-4xl font-normal">{plan.price}</span>
                    <span className="text-[#6A7282]">{plan.period}</span>
                  </div>
                  {plan.ads && (
                    <div className="absolute -bottom-2.5 w-full">
                      <p className="text-accent text-sm max-w-[341px] mx-auto">
                        Maximum of 2 projects at once. For 3 to 4 projects add
                        $1,000
                      </p>
                    </div>
                  )}
                </CardHeader>
                <CardContent className="space-y-3 flex-1 flex flex-col">
                  <div className="space-y-3 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className={`w-full mt-auto ${
                      plan.buttonVariant === "default"
                        ? "bg-[#1e3a5f] hover:bg-[#2d5a8c]"
                        : ""
                    }`}
                    variant={plan.buttonVariant}

                    asChild
                  >
                    <Link href={"/contact"}>
                    
                    {plan.buttonText}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="swiper-button-prev-custom max-sm:hidden absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-50 transition shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A]">
          <ChevronLeft className="w-6 h-6 text-primary" />
        </button>

        <button className="swiper-button-next-custom max-sm:hidden absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-50 transition shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A]">
          <ChevronRight className="w-6 h-6 text-primary" />
        </button>

        <div className="swiper-pagination-custom flex justify-center gap-2 mt-8"></div>
      </div>

      <style jsx>{`
        :global(.swiper-pagination-bullet-custom) {
          width: 10px;
          height: 10px;
          background-color: #d1d5db;
          border-radius: 50%;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        :global(.swiper-pagination-bullet-active-custom) {
          background-color: #1a3a52;
          width: 32px;
          height: 12px;
          border-radius: 33554400px;
        }
      `}</style>
    </section>
  );
}
export default function Pricing() {


  return (
    <section id="pricing" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-primary/5 text-xs font-medium text-primary border-none mb-4">
            Our Process
          </Badge>

          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Pricing That Scales With You
          </h2>
          <p className="text-secondary text-xl max-w-2xl mx-auto">
            Transparent monthly plans with no hidden fees. Pay for what you
            need.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full flex items-center gap-2  font-medium`}
            >
              <CircleCheck className="text-accent" />{" "}
              <span className="text-[#404040]">{filter}</span>
            </button>
          ))}
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            pagination={{
              el: ".swiper-pagination-custom",
              clickable: true,
              bulletClass: "swiper-pagination-bullet-custom",
              bulletActiveClass: "swiper-pagination-bullet-active-custom",
            }}
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            className="pricing-swiper w-10/12 mx-auto"
          >
            {plans.map((plan, index) => (
              <SwiperSlide key={index}>
                <Card
                  className="p-4 border-2  hover:border-primary h-120 border-gray-200 transition-all duration-500 hover:shadow-[0px_25px_50px_-12px_#00000040]
  group  gap-2"
                >
                  <CardTitle>
                    <h3 className="text-lg  leading-7 text-primary capitalize">
                      {plan.name}
                    </h3>
                  </CardTitle>
                  <CardDescription>
                    <p className="text-secondary text-xs ">
                      {plan.description}
                    </p>
                  </CardDescription>
                  <CardContent className="pl-0">
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-primary">
                        {plan.price}
                      </span>
                      <span className="text-secondary text-sm ml-2">
                        {plan.period}
                      </span>
                    </div>
                  </CardContent>

                  <p className="uppercase  text-sm text-secondary mb-3">
                    What's included:
                  </p>
                  <ul className="space-y-2 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="size-[16.8px] rounded-full bg-primary transition-all duration-500 group-hover:bg-accent  grid place-items-center">
                          <CheckIcon
                            className="fill-primary transition-all duration-500 group-hover:fill-accent stroke-white text-white size-[12.6px]"
                            stroke="white"
                          />
                        </span>

                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full  bg-white border border-primary group-hover:text-white group-hover:bg-primary  hover:bg-primary/90 transition-all duration-500 text-primary" asChild>
                    <Link href={"/pricing"}>
                    
                    Get Started <ArrowRight />
                    </Link>
                  </Button>
                  <p className="text-xs text-secondary text-center">
                    Start free 14-day trial
                  </p>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-50 transition shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A]">
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>

          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-50 transition shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A]">
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          <div className="swiper-pagination-custom flex justify-center gap-2 mt-8"></div>
        </div>
        <div className="mt-16 bg-[linear-gradient(180deg,#0E4571_0%,#0A3554_100%)] text-white rounded-2xl p-12 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl  mb-2">98%</div>
              <p className="text-white/80">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl  text-white mb-2">500+</div>
              <p className="text-white/80">Projects Completed</p>
            </div>

            <div>
              <div className="text-4xl   mb-2">15+</div>
              <p className="text-white/80">Years Experience</p>
            </div>
          </div>
        </div>

        <div className="w-full  mt-8">
          <div className="w-full mt-8">
            <div className="bg-gradient-to-r from-[#F9FAFB] to-white rounded-xl shadow-sm px-8 py-8 w-full text-center border">
              <h3 className="text-lg font-semibold mb-2 text-primary">
                Not sure which plan is right for you?
              </h3>
              <p className="text-gray-600 mb-6 text-sm max-w-lg mx-auto">
                Our team will help you find the perfect solution based on your
                company size, project volume, and specific needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  variant="outline"
                  asChild
                  className="border-primary text-primary px-6 py-2 font-medium"
                >
                  <Link href={"/pricing"}>
                  See All Pricing Options{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild className="bg-primary hover:bg-primary px-6 py-2 font-medium text-white">
                  <Link href={"/contact"}>
                  
                  Schedule a Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        :global(.swiper-pagination-bullet-custom) {
          width: 10px;
          height: 10px;
          background-color: #d1d5db;
          border-radius: 50%;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        :global(.swiper-pagination-bullet-active-custom) {
          background-color: #1a3a52;
          width: 32px;
          height: 12px;
          border-radius: 33554400px;
        }
      `}</style>
    </section>
  );
}
