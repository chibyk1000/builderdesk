"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Product Manager",
    company: "TechFlow Inc.",
    avatar: "/professional-woman-headshot.png",
    content:
      "Assist has transformed how our team manages projects. The intelligent task prioritization alone has saved us 10+ hours per week.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "CEO",
    company: "InnovateLab",
    avatar: "/professional-man-headshot.png",
    content:
      "The natural language processing is incredible. I can just tell it what I need, and it understands context perfectly every time.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Operations Director",
    company: "DataSync Solutions",
    avatar: "/professional-woman-headshot.png",
    content:
      "We've tried other  assistants, but none come close to Assist's ability to handle complex workflows and integrations.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Kim",
    role: "Startup Founder",
    company: "NextGen Apps",
    avatar: "/professional-man-headshot.png",
    content:
      "As a small team, Assist gives us the productivity of a much larger organization. It's like having an extra team member.",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Marketing Lead",
    company: "GrowthCorp",
    avatar: "/professional-woman-headshot.png",
    content:
      "The document analysis feature is a game-changer. It processes our reports and extracts key insights in seconds.",
    rating: 5,
  },
  {
    id: 6,
    name: "Alex Johnson",
    role: "CTO",
    company: "CloudTech",
    avatar: "/professional-man-headshot.png",
    content:
      "Enterprise-grade security with consumer-friendly UX. Assist strikes the perfect balance for our organization.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-accent/20">
      <div className="max-w-6xl mx-auto">
        <div className="">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Loved by <span className="text-primary">thousands</span> of teams
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See what our customers are saying about their experience with
              Assist.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm a"
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
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
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
