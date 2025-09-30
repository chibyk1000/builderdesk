"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Project Manager",
    company: "UrbanAxis Builders",
    avatar: "/professional-woman-headshot.png",
    content:
      "The Builders Desk assistant helps me stay on top of daily priorities without digging through spreadsheets or emails. It’s streamlined our entire workflow.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "CEO",
    company: "InnovateLab Construction",
    avatar: "/professional-man-headshot.png",
    content:
      "Builders Desk has become an essential part of our operations. The assistant keeps our team aligned and saves me hours every week.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Operations Director",
    company: "DataSync Build Co.",
    avatar: "/professional-woman-headshot.png",
    content:
      "No more chasing updates or digging for files. The virtual assistant keeps everything organized and accessible. It's like having an extra coordinator on the team.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Kim",
    role: "Founder",
    company: "NextGen Dev Group",
    avatar: "/professional-man-headshot.png",
    content:
      "As a startup, we rely on tools that keep us lean and efficient. Builders Desk does just that — it's like adding a full-time assistant without the overhead.",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Marketing Lead",
    company: "GrowthCorp Projects",
    avatar: "/professional-woman-headshot.png",
    content:
      "The assistant helps me pull together client-facing updates and reports in no time. It’s seriously boosted our turnaround speed.",
    rating: 5,
  },
  {
    id: 6,
    name: "Alex Johnson",
    role: "CTO",
    company: "CloudTech Build Systems",
    avatar: "/professional-man-headshot.png",
    content:
      "Builders Desk hits that perfect balance between simplicity and function. It fits right into our existing tools and makes everything smoother.",
    rating: 5,
  },
];


export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-accent/20">
      <div className="max-w-6xl mx-auto">
        <div className="animate-fade-in-up opacity-0 animation-delay-1000">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Loved by <span className="text-primary">thousands</span> of teams
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See what our customers are saying about their experience with
              Builders Desk.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm animate-fade-in-up opacity-0"
                style={{ animationDelay: `${1 + index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="object-cover"
                      />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
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
