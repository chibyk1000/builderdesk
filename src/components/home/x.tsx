"use client";

import { AudienceMarquee } from "./audience";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export function ModernHero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-16 lg:px-24 xl:px-32 bg-slate-950 text-white overflow-hidden">
      {/* Background gradient blur */}
      <svg
        className="absolute inset-0 z-0 size-full blur-[300px] opacity-20"
        width={1440}
        height={900}
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#a)">
          <path
            d="M1279.12 651.482c-22 6.106-44 12.212-135.83 19.142..."
            stroke="#8C00FF"
            strokeWidth={130}
            strokeLinecap="round"
          />
        </g>
      </svg>

      {/* LEFT CONTENT */}
      <motion.div
        className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left max-w-xl space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Avatars */}
        <div className="flex -space-x-2 justify-center md:justify-start">
          {[
            "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
            "https://randomuser.me/api/portraits/men/75.jpg",
          ].map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`avatar-${i}`}
              className={`w-9 h-9 rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[${
                i + 1
              }]`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.2 }}
            />
          ))}
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-medium leading-tight">
          We Power your Construction Back Office{" "}
          <span className="text-primary">Virtual Assistant</span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-200 text-base md:text-lg max-w-md">
          From scheduling and reminders to research and writing—your assistant
          is here to save time, reduce stress, and help you focus on what
          matters. Available anytime, anywhere.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button className="px-8 h-11 text-white">Get started</Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 px-6 h-11 border-white/40 hover:bg-white/10 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-video"
            >
              <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
              <rect x="2" y="6" width="14" height="12" rx="2" />
            </svg>
            <span>Watch demo</span>
          </Button>
        </div>

        {/* Audience Marquee */}
        <motion.div
          className="w-full max-w-md mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <AudienceMarquee />
        </motion.div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="relative mt-12 md:mt-0 md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <img
          src="/assistant-illustration.png"
          alt="AI Assistant"
          className="w-[90%] md:w-[85%] lg:w-[75%] rounded-3xl shadow-2xl"
        />
      </motion.div>
    </section>
  );
}
