"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  Brain,
  MessageSquare,
  Calendar,
  FileText,
  BarChart3,
  Shield,
  Users,
} from "lucide-react";

const TaskManagementSkeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-100 dark:from-blue-900/20 dark:to-purple-900/20 to-purple-100 p-4">
    <div className="space-y-2 w-full">
      <div className="h-3 bg-blue-200 dark:bg-blue-800/50 rounded w-3/4"></div>
      <div className="h-2 bg-purple-200 dark:bg-purple-800/50 rounded w-1/2"></div>
      <div className="h-2 bg-blue-200 dark:bg-blue-800/50 rounded w-2/3"></div>
      <div className="flex gap-2 mt-3">
        <div className="h-6 w-16 bg-blue-300 dark:bg-blue-700/50 rounded-full"></div>
        <div className="h-6 w-20 bg-purple-300 dark:bg-purple-700/50 rounded-full"></div>
      </div>
    </div>
  </div>
);

const ChatSkeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-green-100 dark:from-green-900/20 dark:to-teal-900/20 to-teal-100 p-4">
    <div className="space-y-3 w-full">
      <div className="flex justify-end">
        <div className="h-8 bg-green-200 dark:bg-green-800/50 rounded-2xl w-2/3"></div>
      </div>
      <div className="flex justify-start">
        <div className="h-8 bg-teal-200 dark:bg-teal-800/50 rounded-2xl w-3/4"></div>
      </div>
      <div className="flex justify-end">
        <div className="h-8 bg-green-200 dark:bg-green-800/50 rounded-2xl w-1/2"></div>
      </div>
    </div>
  </div>
);

const CalendarSkeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-orange-100 dark:from-orange-900/20 dark:to-red-900/20 to-red-100 p-4">
    <div className="grid grid-cols-7 gap-1 w-full">
      {Array.from({ length: 21 }).map((_, i) => (
        <div
          key={i}
          className={`h-3 rounded ${
            i === 5 || i === 12 || i === 18
              ? "bg-orange-300 dark:bg-orange-700/50"
              : "bg-orange-100 dark:bg-orange-900/30"
          }`}
        ></div>
      ))}
    </div>
  </div>
);

const DocumentSkeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-indigo-100 dark:from-indigo-900/20 dark:to-cyan-900/20 to-cyan-100 p-4">
    <div className="space-y-2 w-full">
      <div className="h-4 bg-indigo-200 dark:bg-indigo-800/50 rounded w-full"></div>
      <div className="h-3 bg-cyan-200 dark:bg-cyan-800/50 rounded w-4/5"></div>
      <div className="h-3 bg-indigo-200 dark:bg-indigo-800/50 rounded w-3/5"></div>
      <div className="h-3 bg-cyan-200 dark:bg-cyan-800/50 rounded w-2/3"></div>
      <div className="flex gap-2 mt-3">
        <div className="h-2 w-2 bg-indigo-300 dark:bg-indigo-700/50 rounded-full"></div>
        <div className="h-2 w-2 bg-cyan-300 dark:bg-cyan-700/50 rounded-full"></div>
        <div className="h-2 w-2 bg-indigo-300 dark:bg-indigo-700/50 rounded-full"></div>
      </div>
    </div>
  </div>
);

const AnalyticsSkeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-pink-100 dark:from-pink-900/20 dark:to-rose-900/20 to-rose-100 p-4">
    <div className="flex items-end justify-between w-full h-full">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="bg-pink-300 dark:bg-pink-700/50 rounded-t w-4"
          style={{ height: `${Math.random() * 60 + 20}%` }}
        ></div>
      ))}
    </div>
  </div>
);

const SecuritySkeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-emerald-100 dark:from-emerald-900/20 dark:to-green-900/20 to-green-100 p-4 items-center justify-center">
    <div className="relative">
      <div className="w-12 h-12 bg-emerald-300 dark:bg-emerald-700/50 rounded-full"></div>
      <div className="absolute inset-0 w-12 h-12 bg-emerald-200 dark:bg-emerald-800/30 rounded-full animate-ping"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Shield className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
      </div>
    </div>
  </div>
);

const CollaborationSkeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-violet-100 dark:from-violet-900/20 dark:to-purple-900/20 to-purple-100 p-4">
    <div className="flex items-center justify-center w-full space-x-2">
      <div className="w-8 h-8 bg-violet-300 dark:bg-violet-700/50 rounded-full"></div>
      <div className="w-8 h-8 bg-purple-300 dark:bg-purple-700/50 rounded-full -ml-2"></div>
      <div className="w-8 h-8 bg-violet-300 dark:bg-violet-700/50 rounded-full -ml-2"></div>
      <div className="w-8 h-8 bg-purple-300 dark:bg-purple-700/50 rounded-full -ml-2 flex items-center justify-center">
        <span className="text-xs text-purple-700 dark:text-purple-300 font-bold">
          +
        </span>
      </div>
    </div>
  </div>
);

const features = [
  {
    title: "Smart Task Management",
    description:
      " task prioritization and intelligent scheduling that adapts to your workflow patterns.",
    header: <TaskManagementSkeleton />,
    icon: <Brain className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Natural Language Processing",
    description:
      "Communicate with your assistant using natural language for seamless interaction.",
    header: <ChatSkeleton />,
    icon: <MessageSquare className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Intelligent Scheduling",
    description:
      "Automatically schedule meetings, set reminders, and manage your calendar with context awareness.",
    header: <CalendarSkeleton />,
    icon: <Calendar className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Document Analysis & Workflow Automation",
    description:
      "Extract insights, summarize content, and create custom automation workflows that trigger based on events.",
    header: <DocumentSkeleton />,
    icon: <FileText className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Performance Analytics",
    description:
      "Track productivity metrics and get actionable insights to optimize your workflow efficiency.",
    header: <AnalyticsSkeleton />,
    icon: <BarChart3 className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Enterprise Security",
    description:
      "Bank-level encryption and compliance with industry standards to keep your data secure.",
    header: <SecuritySkeleton />,
    icon: <Shield className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Team Collaboration",
    description:
      "Share insights, delegate tasks, and collaborate seamlessly with your team members.",
    header: <CollaborationSkeleton />,
    icon: <Users className="h-4 w-4 text-neutral-500" />,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful features for{" "}
              <span className="text-primary">every workflow</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how our virtual assistant  assistants   transforms the way you work with
              intelligent automation and seamless integration.
            </p>
          </div>
          <BentoGrid className="max-w-4xl mx-auto">
            {features.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}
