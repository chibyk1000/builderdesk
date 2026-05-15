"use client";

import {
  ThumbsUp,
  BarChart3,
  Building2,
  Settings,
  GraduationCap,
  ClipboardList,
} from "lucide-react";
import { Svgexport19, Svgexport20, Svgexport21, Svgexport22, Svgexport23, Svgexport24 } from "./icons";
import Image from "next/image";

export function WhyPartnerSection() {
  const reasons = [
    {
      icon: Svgexport19,
      title: "RELIABLE",
      tagline: "98% ON-TIME",
      description:
        "At The Builders Desk, reliability is at the core of everything we do. We understand that in construction, timing is critical. Our team is committed to meeting deadlines, maintaining organized workflows, and ensuring consistent communication with your team. Our 98% on-time delivery rate demonstrates our dedication to being a partner you can count on, project after project.",
    },
    {
      icon: Svgexport20,
      title: "SCALABLE AND FLEXIBLE",
      tagline: "FULLY FLEXIBLE",
      description:
        "No long-term contracts. Stop when you need to, and pick back up when you are ready. From sole proprietors and small builders to large firms, our services scale with your business. Whether you need 10 hours a week or full-time support across multiple services, we adapt to your changing needs without the overhead of hiring full-time staff",
    },
    {
      icon: Svgexport21,
      title: "INDUSTRY-SPECIFIC",
      tagline: "EXPERTISE 15+ YEARS",
      description:
        "Our project managers are PMP trained and have a minimum of Bachelor's degrees in their respective fields. We don't just understand business—we understand construction specifically: every permit requirement, estimate detail, budget nuance, and regulatory compliance issue. We speak your language and bring real industry expertise to every task.",
    },
    {
      icon: Svgexport22,
      title: "TECHNOLOGY AND SOFTWARE",
      tagline: "CUTTING EDGE",
      description:
        "We invest in the latest and greatest tools to get the task done. We own and have proficiency in software like: Planswift, Primavera P6, AutoCAD, Revit, Lumion, 3D Max, Sketch Up, and more. This ensures we can seamlessly integrate with your existing workflows and deliver professional results.",
    },
    {
      icon: Svgexport23,
      title: "CONTINUED TRAINING",
      tagline: "ALWAYS LEARNING",
      description:
        "We stay ahead of the times by enrolling our team members in specialized training programs like PMP, Microsoft Office Suite, Customer Service Representative certification, and more. Continuous professional development ensures our team brings the latest best practices to your business.",
    },
    {
      icon: Svgexport24,
      title: "HIRING SELECTION",
      tagline: "TOP TALENT",
      description:
        "We hire the top 1% with a basic requirement of undergraduate degrees in the areas of specialization like: construction management, architecture, engineering, etc. Our Admins hold undergraduate degrees in fields like business administration, communication, English, and more. Quality starts with quality people.",
    },
  ];

  return (

    <div>
     <Image src="/office-img.avif" alt="Our Partners" width={1200} height={600} className="w-full h-auto" />
    <section className="bg-gray-100 py-16">
      <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-6xl font-[350] text-primary max-w-4xl mb-12">
          WHY PARTNER WITH THE BUILDERS DESK?
        </h2>

        <div className="space-y-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-20 w-20 rounded-lg ">
                    <Icon className="size-16 text-orange-500" />
                  </div>
                </div>
                <div className="flex-1 flex gap-10">
                  <div className="mb-2 w-60">
                    <h3 className="text-[23px] font-bold text-black">
                      {reason.title}
                    </h3>

                    <p className="h font-semibold">
                      {reason.tagline}
                    </p>
                  </div>
                  <p className="text-gray-700 flex-1 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </div>
  );
}
