import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
    Award,
  Building2,
  CheckCircle2,
  CircleCheckBig,
  Clock,
  Eye,
  Handshake,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const Page = () => {
  const features = [
    {
      icon: CircleCheckBig,
      title: "Save Time & Money",
      description:
        "Reduce overhead costs and free up time for what matters most—building.",
    },
    {
      icon: TrendingUp,
      title: "Scale Efficiently",
      description:
        "Grow your business without the growing pains of hiring in-house staff.",
    },
    {
      icon: Sparkles,
      title: "Industry Experts",
      description:
        "Work with professionals who understand construction inside and out.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Get help when you need it with our dedicated support team.",
    },
  ];

  const images = [
    "/about-section1.png",
    "/about-section2.png",
    "/about-section3.png",
  ];
    
    const values = [
      {
        icon: Shield,
        title: "Reliability",
        desc: "Consistent, dependable service you can count on day after day.",
      },
      {
        icon: Award,
        title: "Excellence",
        desc: "Industry-leading standards in every task we handle for you.",
      },
      {
        icon: Users,
        title: "Partnership",
        desc: "We work as an extension of your team, aligned with your goals.",
      },
      {
        icon: Building2,
        title: "Industry Expertise",
        desc: "Deep knowledge of construction business operations and challenges.",
      },
      {
        icon: Handshake,
        title: "Integrity",
        desc: "Transparent communication and ethical business practices.",
      },
      {
        icon: Target,
        title: "Results-Driven",
        desc: "Focused on measurable outcomes that grow your business.",
      },
    ];

    const team = [
      {
        icon: Users,
        title: "Project Managers",
        desc: "Certified professionals with extensive construction experience.",
      },
      {
        icon: Users,
        title: "Estimators",
        desc: "Skilled in accurate takeoffs and cost analysis.",
      },
      {
        icon: Users,
        title: "Bookkeepers",
        desc: "Construction accounting specialists.",
      },
      {
        icon: Users,
        title: "Admin Support",
        desc: "Dedicated assistants for daily operations.",
      },
    ];
  return (
    <section>
      <div
        style={{
          background: `linear-gradient(180deg, #0E4571 0%, #0A3554 100%)`,
        }}
        className="h-[514px] px-6   pt-20 overflow-hidden"
      >
        <div className=" grid grid-cols-12 max-w-[1280px] mx-auto w-full  text-white">
          <div className="col-span-6 grid h-96">
            <Badge className="bg-accent text-white h-7">About Us</Badge>

            <h1 className="text-5xl">
              Your Trusted Back-Office Partner for Construction Success
            </h1>

            <p className="text-lg max-w-156.5">
              We provide comprehensive support services that help construction
              companies streamline operations and scale efficiently.
            </p>

            <div className="flex gap-5">
              <div>
                <p className="text-accent text-3xl">10+</p>
                <p className="text-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-accent text-3xl">500+</p>
                <p className="text-sm">Projects</p>
              </div>
              <div>
                <p className="text-accent text-3xl">98%</p>
                <p className="text-sm">Projects</p>
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <div className="relative w-full h-full top-13 max-h-144.5">
              <Image
                src={"/about-hero.png"}
                alt="buildersdesk-about-hero"
                className="object-cover"
                fill
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-20  max-w-[1280px] mx-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="text-center mb-16">
            <Badge className="bg-accent/10 font-medium h-9 w-32.5 p-0 rounded-full text-sm text-accent border-none mb-3">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl md:text-5xl  text-primary mb-4">
              Your Trusted Back-Office Partner
            </h2>
            <p className="text-[#4A5565] text-lg max-w-2xl mx-auto">
              We handle the administrative details so you can focus on building
              great projects and growing your business.
            </p>
          </div>
        </div>
        <section className="bg-white py-16 ">
          <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {features.map(({ icon: Icon, title, description }) => (
              <Card
                key={title}
                className="shadow-none border-0 flex h-71 flex-col p-6 w-72  bg-transparent"
              >
                <CardContent className=" space-y-8 p-0">
                  <div className="bg-accent/10 size-16 rounded-full p-4 justify-center">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-[#0E4571] font-semibold text-lg">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                    {description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <div className="grid grid-cols-3 gap-4">
          {images.map((img) => {
            return (
              <div className="relative h-64" key={img}>
                <Image
                  src={img}
                  alt=""
                  fill
                  className="rounded-2xl object-top"
                />
              </div>
            );
          })}
        </div>
      </div>

      <section
        style={{
          background: `linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 100%)`,
        }}
        className="pt-20 pb-40 px-6 md:px-20 lg:px-40"
      >
        <div className="grid grid-cols-2 gap-12 max-w-[1260px] mx-auto h-206 items-center">
          {/* Left side - Mission & Vision */}
          <div>
            <Badge className="bg-accent/10 font-normal h-9 px-4 rounded-full text-sm text-accent border-none mb-14">
              Our Purpose
            </Badge>
            <div className="space-y-8 grid gap-10 grid-rows-2">
              {/* Mission */}
              <Card className="border-2 border-accent/20 w-full h-full flex-1 p-8">
                <div className="size-16 rounded-full bg-accent/10 grid place-content-center mb-4">
                  <Target className="text-accent size-8.5" />
                </div>
                <CardTitle className="text-[#0E4571] text-3xl mb-3">
                  Our Mission
                </CardTitle>
                <CardContent className="p-0">
                  <p className="text-[#364153] text-lg leading-relaxed">
                    To empower construction companies to focus on what they do
                    best—building—by providing comprehensive, reliable
                    back-office support that streamlines operations, improves
                    efficiency, and drives business growth.
                  </p>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card className="border-2 border-accent/20 w-full h-full flex-1 p-8">
                <div className="size-16 rounded-full bg-accent/10 grid place-content-center mb-4">
                  <Eye className="text-accent size-8.5" />
                </div>
                <CardTitle className="text-[#0E4571] text-3xl mb-3">
                  Our Vision
                </CardTitle>
                <CardContent className="p-0">
                  <p className="text-[#364153] text-lg leading-relaxed">
                    To be the most trusted partner for construction companies
                    nationwide, recognized for our industry expertise,
                    commitment to excellence, and ability to help businesses
                    scale efficiently.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="overflow-hidden relative self-end ">
            <div
              style={{
                background: `linear-gradient(0deg, rgba(14, 69, 113, 0.9) 0%, rgba(14, 69, 113, 0.4) 50%, rgba(0, 0, 0, 0) 100%)`,
              }}
              className="absolute bottom-0 h-32 left-0  right-0 z-20 rounded-b-4xl p-4 "
            >
              <h2 className="text-white text-3xl">Expert Professionals</h2>
              <p className="text-white/90">
                Dedicated to your construction business success
              </p>
            </div>
            <div className="relative w-full h-full mx-auto">
              <div className="relative aspect-[400/500] rounded-2xl overflow-hidden ">
                <Image
                  src="/mission-vission.png"
                  alt="Mission and Vision illustration"
                  fill
                  className="object-cover object-center rounded-b-3xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-177.5 grid max-w-[1280px] mx-auto grid-cols-2 items-center  gap-10">
        <div
          className="relative h-144 w-f"
          style={{ boxShadow: `0px 25px 50px -12px #00000040` }}
        >
          <Image src={"/experience.png"} alt="" fill className="rounded-2xl" />
        </div>
        <div>
          <Badge className="bg-accent/10 font-medium h-9 w-21.5 p-0 rounded-full text-sm text-accent border-none mb-3">
            Our Story
          </Badge>

          <h2 className="text-primary text-5xl">Built on Experience</h2>

          <article className="text-primary space-y-10 mt-10">
            <p>
              The Builders Desk was founded by construction industry veterans
              who understood firsthand the challenges of managing back-office
              operations while trying to grow a construction business.
            </p>
            <p>
              We saw too many talented contractors struggling with
              administrative tasks, project documentation, and financial
              management—taking time away from what they do best: building
              exceptional projects.
            </p>

            <p>
              Our commitment to reliability, scalability, and industry expertise
              has made us a trusted partner for construction companies across
              the nation.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#F9FAFB] to-white py-24 px-6 md:px-16 lg:px-32 text-center">
        {/* Core Values */}
        <div className="max-w-6xl mx-auto">
          <Badge className="bg-accent/10 text-accent border-none rounded-full px-4 py-1 mb-4">
            What Drives Us
          </Badge>
          <h2 className="text-[#0E4571] text-4xl font-semibold mb-2">
            Our Core Values
          </h2>
          <p className="text-[#364153] text-lg mb-12">
            These principles guide everything we do and shape how we serve our
            clients.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <Card
                key={i}
                className="p-8 border-0 border-none shadow-none transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-accent/10 flex items-center justify-center">
                  <v.icon className="text-accent w-7 h-7" />
                </div>
                <CardTitle className="text-[#0E4571] text-xl mb-2">
                  {v.title}
                </CardTitle>
                <CardContent className="p-0">
                  <p className="text-[#364153] text-base leading-relaxed">
                    {v.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Expert Team */}
        <div className="max-w-6xl mx-auto mt-32">
          <Badge className="bg-accent/10 text-accent border-none rounded-full px-4 py-1 mb-4">
            Meet Our Team
          </Badge>
          <h2 className="text-[#0E4571] text-4xl font-semibold mb-2">
            Our Expert Team
          </h2>
          <p className="text-[#364153] text-lg mb-12">
            Construction professionals dedicated to your success
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((t, i) => (
              <Card
                key={i}
                className="p-8   transition-all duration-300 border-none"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-[#0E4571] flex items-center justify-center">
                  <t.icon className="text-white w-7 h-7" />
                </div>
                <CardTitle className="text-[#0E4571] text-xl mb-2">
                  {t.title}
                </CardTitle>
                <CardContent className="p-0">
                  <p className="text-[#364153] text-base leading-relaxed">
                    {t.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="relative h-80 mb-16 max-w-6xl mx-auto rounded-2xl overflow-hidden">
        {/* Overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: `linear-gradient(90deg, rgba(14, 69, 113, 0.9) 0%, rgba(14, 69, 113, 0.6) 100%)`,
          }}
        ></div>

        {/* Image */}
        <Image src="/expert.png" alt="" fill className="object-cover" />
      </div>

      <section
        style={{
          background: `linear-gradient(180deg, #0E4571 0%, #0A3554 100%)`,
        }}
        className="relative h-92 isolate overflow-y-hidden text-white grid place-items-center "
      >
        <div className="absolute top-20 left-40 size-40 rounded-full rem]  bg-accent blur-[148px]"></div>
        <div className="absolute -top-24 right-40 size-40 rounded-full   bg-accent blur-[148px]"></div>

        <div className="max-w-224 w-full px-8 text-center space-y-4">
          <h3 className="text-5xl">Ready to Build Better Business?</h3>
          <p className="text-xl">
            Experience the difference that reliable, construction-focused
            back-office support can make for your business.
          </p>

          <div className="space-x-4">
            <Button className="w-52 bg-accent hover:bg-accent/90">
              Get Started Today
            </Button>
            <Button className="w-42 bg-white text-primary hover:bg-white/90">
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Page;
