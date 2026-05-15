import { ArrowRight, Phone } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const ContactUs = () => {
  return (
    <section className='min-h-screen py-10 px-4'>
      <p className="text-primary text-3xl">SCHEDULE A FREE STRATEGY CALL</p>

      <div>
        <section className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Side - Image */}
              <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                <div className="relative w-full max-w-md aspect-square">
                  <Image
                    src="/contact.avif"
                    alt="Business professionals in consultation"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="flex flex-col justify-center order-1 lg:order-2 space-y-8">
                {/* Logo and Title */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 12h18M3 6h18M3 18h18"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">THE</p>
                      <p className="text-sm font-bold text-gray-900">
                        BUILDERS
                      </p>
                    </div>
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                    DESK
                  </h1>
                  <h2 className="text-3xl sm:text-4xl font-semibold text-gray-700">
                    CALENDER
                  </h2>
                </div>

                {/* Phone Icon and Description */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Phone
                          className="w-8 h-8 text-orange-500"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Schedule a 30min. call to learn how The BuildersDesk can
                        support your growth and give you relief.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div>
                  <button className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded transition-colors duration-200">
                    <span>Click to Open Calender</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default ContactUs