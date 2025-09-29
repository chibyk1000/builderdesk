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


const TaskManagementimg = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
    <img
      src="/modern-task-management-dashboard-with-kanban-board.jpg"
      alt="Task Management Dashboard"
      width={300}
      height={200}
      className="w-full h-full object-cover"
    />
  </div>
);

const Chatimg = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
    <img
      src="/ai-chatbot-conversation-interface-with-natural-lan.jpg"
      alt=" Chat Interface"
      width={300}
      height={200}
      className="w-full h-full object-cover"
    />
  </div>
);

const Calendarimg = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
    <img
      src="/intelligent-calendar-scheduling-with-ai-powered-me.jpg"
      alt="Smart Calendar"
      width={300}
      height={200}
      className="w-full h-full object-cover"
    />
  </div>
);

const Documentimg = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
    <img
      src="/document-analysis-and-workflow-automation-with-ai-.jpg"
      alt="Document Analysis"
      width={300}
      height={200}
      className="w-full h-full object-cover"
    />
  </div>
);

const Analyticsimg = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
    <img
      src="/productivity-analytics-dashboard-with-performance-.jpg"
      alt="Analytics Dashboard"
      width={300}
      height={200}
      className="w-full h-full object-cover"
    />
  </div>
);

const Securityimg = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
    <img
      src="/enterprise-security-shield-with-encryption-and-dat.jpg"
      alt="Security Features"
      width={300}
      height={200}
      className="w-full h-full object-cover"
    />
  </div>
);

const Collaborationimg = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
    <img
      src="/team-collaboration-workspace-with-shared-tasks-and.jpg"
      alt="Team Collaboration"
      width={300}
      height={200}
      className="w-full h-full object-cover"
    />
  </div>
);

const features = [
  {
    title: "Smart Task Management",
    description:
      " task prioritization and intelligent scheduling that adapts to your workflow patterns.",
    header: <TaskManagementimg />,
    icon: <Brain className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Natural Language Processing",
    description:
      "Communicate with your assistant using natural language for seamless interaction.",
    header: <Chatimg />,
    icon: <MessageSquare className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Intelligent Scheduling",
    description:
      "Automatically schedule meetings, set reminders, and manage your calendar with context awareness.",
    header: <Calendarimg />,
    icon: <Calendar className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Document Analysis & Workflow Automation",
    description:
      "Extract insights, summarize content, and create custom automation workflows that trigger based on events.",
    header: <Documentimg />,
    icon: <FileText className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Performance Analytics",
    description:
      "Track productivity metrics and get actionable insights to optimize your workflow efficiency.",
    header: <Analyticsimg />,
    icon: <BarChart3 className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Enterprise Security",
    description:
      "Bank-level encryption and compliance with industry standards to keep your data secure.",
    header: <Securityimg />,
    icon: <Shield className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Team Collaboration",
    description:
      "Share insights, delegate tasks, and collaborate seamlessly with your team members.",
    header: <Collaborationimg />,
    icon: <Users className="h-4 w-4 text-neutral-500" />,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 b ">
      <div className="max-w-7xl mx-auto">
        <div className="animate-fade-in-up opacity -0 animation-delay-400">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful features for{" "}
              <span className="text-primary">every workflow</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how our assistant transforms the way you work with
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
                className={i === 3 || i === 6 ? "md:col-span-2 bg-transparent text-a" : " bg-transparent"}
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}
