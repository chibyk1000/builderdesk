import React from "react";
import { Button } from "../ui/button";
import {
  ArrowRight,
  CircleCheck,
  Clock,
  FileText,
  MessageSquare,
} from "lucide-react";
`Ready to Build Better Business?
Join hundreds of construction companies who trust us with their back-office operations.
Get Started Today
Chat on WhatsApp
Call Us
Email Us
Response Time
(800) 123-4567
info@buildersdesk.com
Within 24 hours`;
const PreFoot = () => {
  return (
    <div className="relative h-[640px] grid place-content-center bg-linear-to-b from-primary via-[#0A3554] to-primary overflow-hidden">
      <div className="absolute top-[175px] left-[80px] w-[384px] h-[384px] rounded-full bg-white/10 backdrop-blur-[128px] blur-3xl opacity-30"></div>

      <div className="absolute top-[80px] left-[1072px] opacity- 3 0 w-[384px] h-[384px] rounded-full bg-[#4584B7]/40  blur-[128px] "></div>

      <div className="w-full min-h-[350px] relative z-100 max-w-7xl flex flex-col items-center justify-center  py-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3 text-center">
          Ready to Build Better Business?
        </h1>
        <p className="text-white/80 mb-8 text-center max-w-xl">
          Join hundreds of construction companies who trust us with their
          back-office operations.
        </p>
        <div className="flex gap-4 mb-10">
          <Button
            variant={"ghost"}
            className="bg-white  shadow-2xl w-55 shadow-[#00000040] h-14   text-primary font-medium"
          >
            Get Started Today <ArrowRight />
          </Button>
          <Button
            variant={"success"}
            className=" h-14 w-55 text-white font-medium"
          >
            <MessageSquare /> Chat on WhatsApp
          </Button>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-xl w-[960px]   p-4 flex flex-col md:flex-row  md:gap-6 items-center text-white/80  h-24.5 pt-[25px] px-[55px] w-fu ll justify-between">
          <div className="flex gap-2 items-center">
            <span
              className="bg-white/10 size-12 rounded-[8px] grid place-content-center
            "
            >
              <Clock className="text-xl" />
            </span>
            <div>
              <p className="text-xs text-white/60">Call Us</p>
              <p className="text-sm">(800) 123-4567</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-6 bg-white/20"></div>

          <div className="flex gap-2 items-center">
            <span
              className="bg-[#25D366]/10 size-12 rounded-[8px] grid place-content-center
            "
            >
              <FileText className="text-xl text-[#25D366]" />
            </span>
            <div>
              <p className="text-xs text-white/60">Email</p>
              <p className="text-sm">info@buildersdesk.com</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-6 bg-white/20"></div>

          <div className="flex gap-2 items-center">
            <span
              className="bg-accent/10 size-12 rounded-[8px] grid place-content-center
            "
            >
              <CircleCheck className="text-xl text-accent" />
            </span>
            <div>
              <p className="text-xs text-white/60">Response Time</p>
              <p className="text-sm">Within 24 hours</p>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default PreFoot;
