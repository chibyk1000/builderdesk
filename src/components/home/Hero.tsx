"use client";

import { Svgexport11 } from "../icons";

export default function Hero() {
  return (
    <section className="relative min-h-screen  grid overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 w-11/12 grid mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between  gap-8 py-30 ">
          {/* Left Column */}
          <div className="text-white max-w-3/5  h-full grid  ">
            <h1 className="text-5xl lg:text-[64px] font-bold mb-6 leading-tight">
              Your Construction Back Office - Done Right
            </h1>

            <p className="text-[42px] mb-6 leading-relaxed">
              We handle your back office, so you can focus on building your
              business.
            </p>

            <p className="text-[27px] text-gray-100 mb-8 leading-relaxed">
              Builders Desk provides remote estimating, administrative, project
              management, bookkeeping, and operational support for US design and
              construction companies—so you can focus on what you do best.
            </p>

            {/* Action Buttons */}
            <div className="flex gap-4 shrink-0 mt-auto">
              <button className="bg-white text-gray-900  py-3 px-6 font-[arial]  hover:bg-gray-100 transition-colors">
                Schedule a free strategy call
              </button>
              <button className="border-2 border-white text-white  py-3 px-6 font-[arial] hover:bg-white/10 transition-colors">
                How we do it
              </button>
            </div>
          </div>

          {/* Right Column - Benefits List */}
          <div className="hidden lg:flex flex-col gap-6 justify-center ">
            {[
              "Save time.",
              "No long term contracts",
              "Reduce overhead.",
              "Scale without hiring in-house.",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center  gap-4">
                <div className="shrink-0 size-14 rounded-full  flex items-center justify-center mt-1">
                  <Svgexport11 size={40} />
                </div>
                <span className="text-[42px] text-[#D78715]">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Benefits List */}
        <div className="lg:hidden mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "Save time.",
            "No long term contracts",
            "Reduce overhead.",
            "Scale without hiring in-house.",
          ].map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-bold text-orange-500 text-sm sm:text-base">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
