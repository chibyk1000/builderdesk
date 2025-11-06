"use client"
import { BookOpen, Headphones, Clock, Phone, CircleCheck, ClipboardList, DollarSign, Palette, Ruler, User } from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import {
  ClipboardCheck,
  UserCheck,
  TrendingUp,
  Calculator,
  Megaphone,
  Users,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useTranslations } from "next-intl";

const services = [
  {
    icon: ClipboardList,
    title: "Project Management Support",
    description:
      "Comprehensive support to keep your projects on track and organized.",
  },
  {
    icon: Users,
    title: "Administrative Support",
    description:
      "Professional administrative assistance to streamline your operations.",
  },
  {
    icon: TrendingUp,
    title: "Business Development",
    description:
      "Strategic growth services including bidding, estimating, and marketing.",
  },
  {
    icon: DollarSign,
    title: "Bookkeeping",
    description: "Financial tracking and reporting tailored for construction.",
  },
  {
    icon: Palette,
    title: "Marketing",
    description:
      "Build your brand and online presence with our marketing services.",
  },
  {
    icon: UserCheck,
    title: "Human Resources",
    description: "HR support to manage your team effectively.",
  },
  {
    icon: Ruler,
    title: "Administrative Support",
    description: "Design and drafting support using latest software.",
  },
];


const qualifications = [
  {
    title: "Project Management Support",
    sub: "Expert project managers with industry credentials.",
    icon: ClipboardList,
    items: [
      "Bachelor's degree in Construction Management or Engineering",
      "PMP (Project Management Professional) certification",
      "Expert proficiency in project management software (Procore, Buildertrend, CoConstruct)",
      "Expert proficiency in MS Office suite and Google Suite",
      "Expert proficiency in scheduling software (Primavera P6, MS Project)",
      "OSHA safety certification",
      "Minimum 5+ years construction industry experience",
    ],
  },
  {
    title: "Administrative Support",
    sub: "Highly trained administrative professionals.",
    icon: Users,
    items: [
      "Bachelor's degree in relevant field",
      "Customer Service Rep training course",
      "Expert proficiency in CRM Management (ClickUp, HubSpot, Salesforce, Trello, Asana, Monday, etc.)",
      "Expert proficiency in MS Office suite and Google Suite",
      "Advanced communication and organizational skills",
      "Experience in construction industry preferred",
      "Document management expertise",
    ],
  },
  {
    title: "Business Development",
    sub: "Strategic professionals driving your growth.",
    icon: TrendingUp,
    items: [
      "Bachelor's degree in Business Administration or related field",
      "Expert proficiency in estimating software (Planswift, Bluebeam, On-Screen Takeoff)",
      "Advanced knowledge of construction bidding processes",
      "Proposal writing and RFP response expertise",
      "Expert proficiency in MS Office suite and Google Suite",
      "Experience with pre-qualification and bonding requirements",
      "Strong analytical and presentation skills",
    ],
  },
  {
    title: "Bookkeeping",
    sub: "Certified accounting professionals.",
    icon: DollarSign,
    items: [
      "Degree in Accounting or Finance",
      "Expert proficiency in QuickBooks and/or Xero",
      "Construction accounting specialization",
      "Payroll processing certification",
      "Knowledge of job costing and WIP reporting",
      "Expert proficiency in MS Office suite and Google Suite",
      "Understanding of construction-specific tax requirements",
    ],
  },
  {
    title: "Marketing",
    sub: "Creative professionals with industry expertise.",
    icon: Palette,
    items: [
      "Bachelor's degree in Marketing, Communications, or Design",
      "Expert proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign)",
      "Social media management certification",
      "SEO and digital marketing expertise",
      "Website development and management skills",
      "Content creation and copywriting experience",
      "Construction industry marketing experience preferred",
    ],
  },
  {
    title: "Human Resources",
    sub: "HR professionals ensuring compliance and efficiency.",
    icon: UserCheck,
    items: [
      "Bachelor's degree in Human Resources or Business Administration",
      "HR certification (PHR, SPHR, or SHRM-CP)",
      "Expert proficiency in HRIS systems",
      "Knowledge of labor laws and construction industry regulations",
      "Recruitment and talent acquisition expertise",
      "Expert proficiency in MS Office suite and Google Suite",
      "Employee relations and conflict resolution skills",
    ],
  },
  {
    title: "Architecture & Design",
    sub: "Architects and design professionals.",
    icon: Ruler,
    items: [
      "Bachelor's or Master's degree in Architecture or related field",
      "Proficiency in AutoCAD, REVIT, SketchUp",
      "Expert proficiency in rendering software (V-ray, Lumion, 3ds Max)",
      "Shop drawing and as-built documentation expertise",
      "3D modeling and visualization skills",
      "Understanding of building codes and regulations",
      "Minimum 5+ years of design and drafting experience",
    ],
  },
];




const steps = [
  {
    number: 1,
    title: "Discovery Call",
    description:
      "We learn about your business, challenges, and specific needs.",
    icon: Phone,
  },
  {
    number: 2,
    title: "Custom Plan",
    description:
      "We create a tailored support plan that fits your requirements.",
    icon: FileText,
  },
  {
    number: 3,
    title: "Team Integration",
    description: "Our experts integrate seamlessly with your existing team.",
    icon: Users,
  },
  {
    number: 4,
    title: "Ongoing Support",
    description:
      "Consistent, reliable service with regular check-ins and optimization.",
    icon: Headphones,
  },
];

function Page() {
  const t = useTranslations("servicesPage");
  const benefits = t.raw("benefits.list") as {
    title: string;
    description: string;
  }[];

  const features = t.raw("hero.features") as string[] 
  const st = t.raw("services.list") as { title: string, description: string }[]
  const qt = t.raw("qualifications.list") as { title: string; sub: string, items: string[] }[];
  const stepst = t.raw("process.steps")
  return (
    <>
      <section className="relative bg-[#E28C1B] bg-linear-to-b from-yellow-800/50">
        <div className="container max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <Badge className="text-sm bg-primary/10 flex h-9.5 rounded-full w-[227px] ">
                <span className="inline-block size-2 bg-primary rounded-full "></span>
                <span className="font-light">{t("hero.badge")}</span>
              </Badge>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold leading-tight text-balance">
                  {t("hero.title")}
                </h1>
                <div className="flex gap-5 mt-5">
                  <div className="h-1 bg-primary/50 w-20 rounded-full"></div>
                  <div className="h-1 bg-primary/50 w-10 rounded-full"></div>
                  <div className="h-1 bg-primary/50 w-5 rounded-full"></div>
                </div>
              </div>
              <p className="text-lg md:text-xl text-white leading-relaxed max-w-x l">
                {t("hero.subtitle")}
              </p>

              {/* Service Features */}
              <div className="flex flex-wrap gap-6 max-w- pt-4 text-white">
                {features.map((ft, i) => {
                  return (
                    <div className="flex items-center gap-3 " key={i}>
                      <div className="w-10 h-10 rounded-full bg-primary  flex items-center justify-center">
                        <CircleCheck className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <span className="font-medium">{ft}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative lg:h-[580px] h-[400px]">
              <div className="absolute inset-0  rounded-lg" />
              <Image
                src="/services-hero.png"
                alt="Professional businesswoman providing services"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 max-w-7xl mx-auto bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl  text-[#1A1A1A]">
              {t("services.sectionTitle")}
            </h2>
            <p className="text-[#4A5565] text-lg max-w-2xl mx-auto">
              {t("services.sectionDescription")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-2  transition-colors ">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-normal text-primary">
                    {st[index].title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {st[index].description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 max-w-7xl mx-auto bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl  text-[#1A1A1A] mb-3">
              {t("qualifications.sectionTitle")}
            </h2>
            <p className="text-[#4A5565] text-xl">
              {t("qualifications.sectionDescription")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-8xl mx-auto">
            {qualifications.map((qualification, index) => (
              <Card key={index} className="border-2">
                <CardHeader className="pb-4">
                  <div className="flex max-sm: flex-col items-start gap-3">
                    <div className="relative  w-full">
                      <div className=" size-24 lg:size-31.5 rounded-lg sm:relative bg-[#F3F4F6] flex items-center justify-center shrink-0 mt-1">
                        <User className="size-16 text-[#99A1AF]" />
                        <div className=" bg-primary   lg:bg-[#E28C1B] absolute  bottom-0 right-0 sm:top-17 lg:top-23 sm:left-15 lg:left-23 backdrop-blur-sm rounded-[12px] size-10 lg:size-12 flex items-center justify-center shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
                          <qualification.icon className="text-white" />
                        </div>
                      </div>
                    </div>
                    <CardTitle className=" font-normal grid text-primary pt-1">
                      <span className=" text-xl md:text-2xl">
                        {qt[index].title}
                      </span>
                      <span className="text-sm leading-5.5">
                        {qt[index].sub}
                      </span>
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {qt[index].items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2">
                        <CircleCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-[#364153] text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="">
        <div className="container max-w-7xl mx-auto px-4 bg-[#F9FAFB] py-20 ">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-4xl  mb-4 text-balance text-[#1A1A1A]">
              {t("process.sectionTitle")}
            </h2>
            <p className="text-[#4A5565] text-sm lg:text-xl ">
              {t("process.sectionDescription")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-center"
              >
                <div className="size-14 lg:size-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl  mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg lg:text-xl mb-3">{stepst[i].title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {stepst[i].description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center  mx-auto ">
            {/* Left Column - Benefits */}
            <div>
              <h2 className="text-2xl lg:text-4xl  mb-12 ">
                {t("benefits.sectionTitle")}
              </h2>
              <div className="space-y-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-xl  bg-[#F3F4F6] flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-[#1A1A1A] mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-[#4A5565] leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - CTA Box */}
            <div className="bg-primary text-primary-foreground rounded-lg p-8  ">
              <h3 className="text-2xl font-bold mb-4">{t("cta.title")}</h3>
              <p className="mb-8 opacity-90 leading-relaxed">
                {t("cta.description")}
              </p>
              <div className="space-y-4">
                <Button
                  size="lg"
                  variant="ghost"
                  className="w-full justify-center gap-2 bg-white"
                  asChild
                >
                  <Link href="/contact">
                    <Phone className="w-4 h-4" />
                    {t("cta.buttons.consultation")}
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="w-full justify-center gap-2 bg-white border-primary-foreground hover:bg-primary-foreground text-primary"
                  asChild
                >
                  <Link href="/pricing">
                    <FileText className="w-4 h-4" />
                    {t("cta.buttons.pricing")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" mb-20">
        <div className="container mx-auto max-w-4xl px-4 py-10 bg-[#F9FAFB]">
          <div className="mx-auto text-center">
            <h2 className="text-2xl sm:text-4xl  mb-6 text-balance">
              {t("finalSection.title")}
            </h2>
            <p className="text-lg sm:text-xl text-[#4A5565] mb-8 leading-relaxed text-pretty">
              {t("finalSection.description")}
            </p>
            <Button size="lg" className="px-8" asChild>
              <Link href="/contact"> {t("finalSection.button")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
