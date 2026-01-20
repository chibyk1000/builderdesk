"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const containerVariants:Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants:Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,    
      ease: "easeOut",
    },
  },
};

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mike Richardson",
      role: "Owner",
      image: "/pics1.jpg",
      text: `"The Builders Desk transformed how we operate. They took over our estimating and project management, and we saw a 40% reduction in admin time. We're winning more bids and completing projects faster."`,
    },
    {
      name: "Sarah Chen",
      role: "Project Director",
      image: "/pics2.png",
      text: `"Outstanding service! Their bookkeeping expertise helped us identify cost overruns we didn’t even know we had. We’ve improved our profit margins significantly since partnering with them."`,
    },
    {
      name: "James Torres",
      role: "CEO",
      image: "/pics2.png",
      text: `"Reliable, professional, and they truly understand construction. We’ve scaled from 5 to 15 projects simultaneously without hiring additional admin staff. Best investment we’ve made."`,
    },
  ];

  return (
    <section className="py-20 bg-[#F9FAFB] overflow-hidden">
      <div className="max-w-8xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="bg-blue-50 font-medium text-primary border-none mb-3">
            Testimonials
          </Badge>

          <h2 className="text-4xl font-semibold text-primary mb-2">
            What Our Clients Say
          </h2>

          <p className="text-secondary mb-12">
            Trusted by construction professionals across Nigeria
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8"
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -6,
                transition: { duration: 0.2 },
              }}
              className="max-w-98 w-full"
            >
              <Card className="border h-full border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-left">
                  {/* Stars */}
                  <motion.div
                    className="flex gap-1 mb-4 text-accent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent" />
                    ))}
                  </motion.div>

                  {/* Text */}
                  <p className="text-gray-600 mb-6 leading-relaxed">{t.text}</p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="text-[#0B1F3A] font-semibold">{t.name}</p>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
