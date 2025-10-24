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

const Hero = () => {
  const offer = [
    "No long-term contracts",
    "Scale as you grow",
    "Industry specialists",
  ];
    return (
      <section className="min-h-screen relative text-white  bg-[linear-gradient(180deg,#0E4571_0%,#0A3554_50%,#063049_100%)] overflow-hidden  pt-10 ">
        {/* Top blue blur light */}
        <div className="absolute right-0 top-0 size-[400px] rounded-full bg-[#5EA0D5] z-40 blur-[200px]" />

        {/* Center gradient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] rounded-[33554400px] bg-[linear-gradient(180deg,#0E4571_0%,rgba(0,0,0,0)_100%)] backdrop-blur-[300px] opacity-20"></div>

        {/* Content */}
        <section className="relative z-50 w-10/12 mx-auto  space-y-4  text-center md:text-left">
          <div className="w-full mx-auto md:mx-0 space-y-4 ">
            {/* Trust Badge */}
            <div className="rounded-full border border-white/20 w-80 justify-center px-2 h-[42px] flex items-center gap-2 bg-white/10 mx-auto md:mx-0">
              <span className="inline-block bg-yellow-400 rounded-full size-2"></span>
              <p className="text-white text-sm">
                Trusted by 50+ Construction Companies
              </p>
            </div>

            <div className=" grid grid-cols-12  w-full gap-20 items-end ">
              <section className="space-y-4  flex-1 col-span-6">
                {/* Headline */}
                <article className="mt-8 leading-tight">
                  <h2 className="text-white text-6xl md:text-7xl font-bold">
                    Build Better
                  </h2>
                  <h2 className="text-yellow-400 text-6xl md:text-7xl font-bold">
                    Business
                  </h2>

                  <p className="text-white/80 text-lg leading-relaxed">
                    Expert back-office support for design and construction
                    companies. Project management, bookkeeping, estimating &
                    more—so you can focus on what you do best.
                  </p>
                </article>

                <div className="flex gap-1">
                  {offer.map((o) => {
                    return (
                      <span className="flex gap-2">
                        <CircleCheck className="text-accent" />
                        <span>{o}</span>
                      </span>
                    );
                  })}
                </div>
                <div className="flex gap-4">
                  <Button className="flex font-medium items-center gap-2 bg-accent text-white  px-6 py-3 rounded-lg transition-all duration-300 hover:bg-accent/90 [box-shadow:0_25px_50px_-12px_#DBA4004D] h-14 w-60 text-[18px] ">
                    <span>Get Free Consultation</span>
                    <ArrowRight className="size-4" />
                  </Button>
                  <Button
                    variant={"ghost"}
                    className="font-medium h-14 w-45.5 text-[18px]  bg-white hover:bg-white/80  text-black"
                  >
                    View Pricing
                  </Button>
                </div>
              </section>
              <div className="col-span-5">
                {/* Image wrapper */}
                <div className="relative rounded-2xl grid  ">
                  {/* Gradient Glass Overlay */}
                  <div className="absolute -top-8 -left-8   z-10 rounded-3xl opacity-70 backdrop-blur-[20px] bg-[linear-gradient(135deg,rgba(219,164,0,0.2)_0%,rgba(255,255,255,0.1)_50%,rgba(0,0,0,0)_100%)] w-[533px] h-[377px] pointer-events-none"></div>
                  {/* Image Wrapper */}
                  <div className="relative z-20 w-[476px] h-[313px] [box-shadow:0px_25px_50px_-12px_#00000040]">
                    <Button className="bg-accent hover:bg-accent text-white absolute -top-4 z-105 -right-4">
                      <CircleCheck />
                      <span>Full-Service Support</span>
                    </Button>

                    <div className="bg-white rounded-xl bg-liner grid place-content-center absolute -bottom-4 z-105 h-[106px] w-[188px] -left-4">
                      <div className="flex gap-2">
                        <div className="w-14 h-14 rounded-lg bg-[linear-gradient(180deg,#DBA400_0%,#C99400_100%)] shadow-[0_4px_6px_-4px_#0000001A,0_10px_15px_-3px_#0000001A] opacity-100 grid place-content-center">
                          <Star />
                        </div>
                        <div>
                          <p className="text-primary text-3xl">4.9/5</p>
                          <p className="text-secondary text-xs">
                            Client Rating
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[linear-gradient(0deg,rgba(14,69,113,0.4)_0%,rgba(0,0,0,0)_50%,rgba(0,0,0,0)_100%)]">
                      <Image
                        src="/ImageWithFallback.png"
                        alt="Construction team at work"
                        fill
                        className="object-cover z-[5] object-center rounded-2xl"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 pt-8 text-center md:text-left">
              <div className="w-53 bg-white/5 h-35 border rounded-xl grid place-content-center text-center">
                <ClipboardList className="text-accent inline-block mx-auto" />
                <h3 className="text-4xl font-bold text-white">500+</h3>
                <p className="text-gray-400 text-sm">Projects Delivered</p>
              </div>
              <div className="w-53 bg-white/5 h-35 border rounded-xl grid place-content-center text-center">
                <Clock className="text-accent inline-block mx-auto" />
                <h3 className="text-4xl font-bold text-white">500+</h3>
                <p className="text-gray-400 text-sm">Projects Delivered</p>
              </div>
              <div className="w-53 bg-white/5 h-35 border rounded-xl grid place-content-center text-center">
                <Shield className="text-accent inline-block mx-auto" />

                <h3 className="text-4xl font-bold text-white">500+</h3>
                <p className="text-gray-400 text-sm">Projects Delivered</p>
              </div>
            </div>
          </div>
        </section>

        <div className="flex border-t border-white/10 bg-white/5 h-[69px] mt-10 items-center justify-center text-white/80">
          {/* Item 1 */}
          <div className="flex items-center justify-center gap-2 px-6">
            <Shield className="text-accent" />
            <p>Industry Certified</p>
          </div>

          {/* Custom Divider */}
          <div className="w-[1px] h-6 bg-gradient-to-b from-white/10 to-white/5 mx-4" />

          {/* Item 2 */}
          <div className="flex items-center justify-center gap-2 px-6">
            <Users className="text-accent" />
            <p>Dedicated Support Team</p>
          </div>

          {/* Custom Divider */}
          <div className="w-[1px] h-6 bg-gradient-to-b from-white/10 to-white/5 mx-4" />

          {/* Item 3 */}
          <div className="flex items-center justify-center gap-2 px-6">
            <TrendingUp className="text-accent" />
            <p>Proven Track Record</p>
          </div>
        </div>
      </section>
    );
};

export default Hero;
