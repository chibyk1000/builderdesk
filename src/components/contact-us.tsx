import { ArrowRight,  Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Svgexport33, Svgexport34 } from './icons';

const ContactUs = () => {
  return (
    <section className="min-h-screen py-10 px-4">
      <p className="text-primary text-[56px]">SCHEDULE A FREE STRATEGY CALL</p>

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
                    <Link href="/" className="flex items-center  flex-shrink-0">
                      <div className=" rounded relative  flex items-center justify-center">
                        <Image
                          src={"/logo-new.avif"}
                          width={111}
                          height={100}
                          alt="BuildersDesklogo"
                        />
                      </div>
                      <div className="flex flex-col relative -left-2 font-dm-sans">
                        <span className="text-xl  font-dm-sans  leading-tight">
                          THE <br /> BUILDERS
                        </span>

                        <span className="text-3xl font-black font-dm-sans leading-tight">
                          DESK
                        </span>
                      </div>
                    </Link>
                  </div>

                  <h2 className="text-4xl font-normal sm:text-4xl  text-[#595959]">
                    CALENDER
                  </h2>
                </div>

                {/* Phone Icon and Description */}
                <div className="space-y-4 w-9/12 ">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <Svgexport33 className="size-30" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-gray-700 text-lg leading-relaxed font-normal break-words">
                        Schedule a 30min. call to learn how The BuildersDesk can
                        support your growth and give you relief.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div>
                  <button className="inline-flex items-center gap-3  text-[#bd4f00] font-semibold py-3 px-6 rounded transition-colors duration-200">
                    <span>Click to Open Calender</span>
                    <span>

                    <Svgexport34 className="w-5 h-5" />
                    </span>
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