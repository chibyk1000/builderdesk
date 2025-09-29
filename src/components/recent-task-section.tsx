"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Clock,
  Calendar,
  FileText,
  Mail,
  BarChart,
} from "lucide-react";
import { StripedPattern } from "./ui/striped-pattern";

const recentTasks = [
  {
    id: 1,
    title: "Analyzed Q4 sales report",
    description:
      "Generated insights from 500+ data points and created executive summary",
    type: "Analysis",
    icon: BarChart,
    time: "2 minutes ago",
    status: "completed",
  },
  {
    id: 2,
    title: "Scheduled team standup",
    description:
      "Found optimal time slot for 8 team members across 3 time zones",
    type: "Scheduling",
    icon: Calendar,
    time: "5 minutes ago",
    status: "completed",
  },
  {
    id: 3,
    title: "Drafted client proposal",
    description:
      "Created personalized proposal based on client requirements and past interactions",
    type: "Writing",
    icon: FileText,
    time: "12 minutes ago",
    status: "completed",
  },
  {
    id: 4,
    title: "Organizing email inbox",
    description:
      "Categorized 47 emails and flagged 3 urgent items requiring immediate attention",
    type: "Organization",
    icon: Mail,
    time: "18 minutes ago",
    status: "in-progress",
  },
];

export function RecentTasksSection() {
  return (
    <section
      id="tasks"
      className="py-20 px-4 bg-gradient-to-tr from-accent/20 to-"
    >
      <div className="max-w-6xl mx-auto relative">
        <StripedPattern className="[mask-image:radial-gradient(300px_circle_at_center,green,transparent)] -z-10 opacity-15" />
        <div className="">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              See your assistant <span className="text-primary">in action</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real examples of tasks completed by our assistant, showing the
              intelligence and efficiency you can expect.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentTasks.map((task, index) => (
              <Card
                key={task.id}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <task.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold">{task.title}</h3>
                        {task.status === "completed" ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <Clock className="w-4 h-4 text-yellow-500 animate-pulse" />
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">
                        {task.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">
                          {task.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {task.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
