"use client";

import { AudienceMarquee } from "./audience";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export function ModernHero() {
  return (
    <div className="relative flex flex-col max-md:pt-20 items-center min-h-screen justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-32 bg-slate-950 overflow-x-hidden text-white">
      {/* Background blur SVG */}
      <svg
        className="absolute inset-0 z-10 size-full blur-[300px] opacity-20"
        width={1440}
        height={900}
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {" "}
        10{" "}
        <g filter="url(#a)">
          {" "}
          11{" "}
          <path
            d="M1279.12 651.482c-22 6.106-44 12.212-135.83 19.142-91.82 6.929-252.813 14.497-345.534 14.119s-112.296-8.932-132.029-20.074c-40.902-23.095-67.695-48.431-92.222-82.426-43.46-60.236-63.449-115.445-66.098-143.181-2.37-24.804 6.608-45.711 18.307-63.328 12.043-18.137 33.695-29.82 71.913-43.681 73.132-26.523 132.819-39.093 158.087-37.728 35.983 1.944 85.151 19.972 133.921 42.519 54.55 25.219 85.81 54.21 147.755 103.202 40.89 42.153 74.78 87.455 96.15 121.421 9.68 13.541 17 19.579 26.15 28.613"
            stroke="#8C00FF"
            strokeWidth={130}
            strokeLinecap="round"
          />{" "}
          12{" "}
        </g>{" "}
        13{" "}
        <g filter="url(#b)">
          {" "}
          14{" "}
          <path
            d="M984.952 466.869c-15.802 15.902-31.604 31.803-106.587 82.344-74.982 50.541-208.666 135.24-287.962 179.98-79.297 44.74-100.155 46.955-122.408 47.039-46.123.173-81.297-8.423-118.747-25.508-66.356-30.274-110.243-67.666-125.983-90.043-14.077-20.012-16.578-42.214-15.158-62.931 1.461-21.329 14.257-41.82 40.13-72.221 49.508-58.173 94.326-97.906 116.549-109.022 31.647-15.829 82.36-24.343 134.93-28.808 58.801-4.994 99.563 4.55 176.224 16.248 55.375 16.094 106.309 38.276 141.054 56.869 14.842 6.848 24.021 8.443 36.22 11.703"
            stroke="#3E0090"
            strokeWidth={130}
            strokeLinecap="round"
          />{" "}
          15{" "}
        </g>{" "}
        16{" "}
      </svg>

      {/* Avatar stack with fade-in */}
      <motion.div
        className="flex items-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="flex -space-x-2 pr-3">
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
              className={`w-7 h-7 rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[${
                i + 1
              }]`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.2 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        className="text-5xl leading-[68px] md:text-6xl md:leading-[84px] font-medium max-w-4xl text-center mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        We Power your Construction Back Office
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-base text-center text-slate-200 max-w-2xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        From scheduling and reminders to research and writing—your assistant is
        here to save time, reduce stress, and help you focus on what matters.
        Available anytime, anywhere.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex items-center gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Button className="text-white  px-7 h-11">Get started</Button>
        <Button
          className="flex items-center gap-2 border transition bg-transparent px-6 h-11"
          variant={"outline"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-video-icon lucide-video"
          >
            <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
            <rect x="2" y="6" width="14" height="12" rx="2" />
          </svg>
          <span>Watch demo</span>
        </Button>
      </motion.div>

      {/* Audience Marquee */}
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <AudienceMarquee />
      </motion.div>
    </div>
  );
}
