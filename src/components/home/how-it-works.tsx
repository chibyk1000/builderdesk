"use client"
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Discover",
      text: "We learn about your company, challenges, and specific needs through an in-depth consultation.",
    },
    {
      number: "2",
      title: "Plan",
      text: "We tailor a support package with the right services and frequency for your business.",
    },
    {
      number: "3",
      title: "Implement",
      text: "In one week, we will select and onboard the right team member to commence working on your projects.",
    },
    {
      number: "4",
      title: "Grow & Scale",
      text: "As you expand, we scale with you—adding services or hours as needed.",
    },
  ];

  return (
    <section className="py-20  text-center">
      <div className="max-w-6xl mx-auto px-6">
        <Badge className="bg-blue-50 text-primary border-none mb-4">
          Our Process
        </Badge>
        <h2 className="text-4xl font-semibold text-primary">How It Works</h2>
        <p className="text-secondary mt-3 mb-12 max-w-2xl mx-auto">
          A simple, proven process to get you the support you need
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center relative"
            >
              {/* Number Box */}
              <div className="border-2 2px  grid place-content-center size-28   border-[#DBA40033] rounded-2xl">
                <div className="text-white w-24 h-24 flex items-center justify-center rounded-lg shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A] bg-[linear-gradient(180deg,#0E4571_0%,#0A3554_100%)] text-2xl font-semibold">
                  {step.number}
                </div>
              </div>

              {/* Connector (for larger screens) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-14 -right-12 w-8 h-1 bg-[linear-gradient(180deg,#DBA400_0%,rgba(0,0,0,0)_100%)]"></div>
              )}

              <h3 className="text-lg font-semibold text-primary">
                {step.title}
              </h3>
              <p className="text-gray-500 mt-2  max-w-xs">{step.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="pt-12">
                  <Button className="bg-primary inline-flex gap-4 hover:bg-primary/90 text h-12  text-white rounded-md max-w-67 w-full py-2 shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A]">
                      <span>
                          
                      Start Your Journey Today 
                      </span>
            
                      <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
