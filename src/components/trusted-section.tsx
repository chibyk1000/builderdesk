"use client";

import { Button } from "@/components/ui/button";
import {
  ChevronRight,

} from "lucide-react";

export function TrustedSection() {
  return (
    <section className="px-6 py-16 lg:px-12">
      <div className="relative max-w-5xl mx-auto overflow-hidden  flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-accent/5 to-secondary/50 rounded-3xl p-6 md:p-10 text-foreground">
        <div className="absolute pointer-events-none top-10 -z-1 left-20 size-64 bg-gradient-to-br from-accent/30 to-primary/20 blur-[180px]" />
        <div className="absolute pointer-events-none bottom-10 -z-1 right-20 size-64 bg-gradient-to-br from-accent/30 to-primary/20 blur-[180px]" />

        {/* Left side */}
        <div className="flex flex-col items-center md:items-start max-md:text-center">
          <div className="group flex items-center gap-2 rounded-full text-sm p-1 pr-3 text-accent bg-accent/15">
            <span className="bg-accent text-background text-xs px-3.5 py-1 rounded-full font-medium">
              NEW
            </span>
            <p className="flex items-center gap-1">
              <span>Try 30 days free trial option</span>
              <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition duration-300" />
            </p>
          </div>

          <h1 className="text-3xl font-medium max-w-xl mt-5 bg-gradient-to-r from-foreground to-accent text-transparent bg-clip-text">
            Trusted by leading companies.
          </h1>

          <p className="text-base text-muted-foreground max-w-lg mt-4">
            Built to integrate effortlessly with your existing tools, frameworks
            and workflows — so you can move faster.
          </p>

          <Button
            variant="outline"
            className="flex items-center gap-2 text-sm px-6 py-2.5 border-accent/30 hover:bg-accent/10 active:scale-95 transition rounded-full mt-6 bg-transparent"
          >
            Read more
            <svg
              width="13"
              height="10"
              viewBox="0 0 13 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.4243 5.42426C12.6586 5.18995 12.6586 4.81005 12.4243 4.57574L8.60589 0.757359C8.37157 0.523045 7.99167 0.523045 7.75736 0.757359C7.52304 0.991674 7.52304 1.37157 7.75736 1.60589L11.1515 5L7.75736 8.39411C7.52304 8.62843 7.52304 9.00833 7.75736 9.24264C7.99167 9.47696 8.37157 9.47696 8.60589 9.24264L12.4243 5.42426ZM0 5L0 5.6L12 5.6V5V4.4L0 4.4L0 5Z"
                fill="currentColor"
              />
            </svg>
          </Button>
        </div>

        {/* Right side: icons instead of image */}
        <div className="md:mr-16 max-md:mt-10">
          <div className="max-w-xs md:max-w-sm aspect-square  from-muted to-secondary rounded-lg flex items-center justify-center p-8">
            <img
              src="/trusted.png"
              alt="Happy client testimonial"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
