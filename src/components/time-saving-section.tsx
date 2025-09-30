"use client";

import { Clock, CheckCircle2, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function TimeSavingSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <img
                src="/desk.jpg"
                alt="Save time hiring virtual assistant"
                width={600}
                height={600}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Floating stats */}
            <div className="absolute top-10 -right-4 bg-white rounded-xl shadow-lg p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#039A9A]/20 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#039A9A]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">5 min</p>
                  <p className="text-sm text-gray-600">To Get Started</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 -left-4 bg-white rounded-xl shadow-lg p-4 animate-float animation-delay-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#039A9A]/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-[#039A9A]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">90%</p>
                  <p className="text-sm text-gray-600">Time Saved</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-block bg-[#039A9A]/10 text-[#039A9A] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Save Time & Money
            </div>

            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-6 text-gray-900 leading-tight">
              Skip the <span className="text-[#039A9A]">Hiring Hassle</span>
            </h2>

            <p className="text-md text-gray-600 mb-8 leading-relaxed">
              Traditional hiring takes 6-10 weeks and costs thousands. Get a
              virtual assistant in just 5 minutes and start delegating tasks
              immediately.
            </p>

            {/* Key benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#039A9A]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-[#039A9A]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Instant Access
                  </h3>
                  <p className="text-gray-600">
                    No job postings, interviews, or waiting. Start delegating
                    tasks right away.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#039A9A]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-[#039A9A]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    No Training Required
                  </h3>
                  <p className="text-gray-600">
                    AI-powered assistant understands your needs from day one.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#039A9A]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-[#039A9A]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    24/7 Availability
                  </h3>
                  <p className="text-gray-600">
                    Always ready to help, no matter the time or timezone.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-[#039A9A] hover:bg-[#039A9A]/90 text-white"
              >
                Get Started Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
              >
                See How It Works
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div>
                <p className="text-3xl font-bold text-[#039A9A]">5 min</p>
                <p className="text-sm text-gray-600">Setup Time</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#039A9A]">90%</p>
                <p className="text-sm text-gray-600">Time Saved</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#039A9A]">24/7</p>
                <p className="text-sm text-gray-600">Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#039A9A]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#039A9A]/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
