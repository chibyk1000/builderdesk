"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Project Manager",
    company: "UrbanAxis Builders",
    avatar: "/img/professional-woman-headshot.png",
    content:
      "The Builders Desk assistant helps me stay on top of daily priorities without digging through spreadsheets or emails.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "CEO",
    company: "InnovateLab Construction",
    avatar: "/img/professional-man-headshot.png",
    content:
      "Builders Desk has become an essential part of our operations — saving me hours every week.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Operations Director",
    company: "DataSync Build Co.",
    avatar: "/img/professional-woman-headshot.png",
    content:
      "No more chasing updates or digging for files. It keeps everything organized and accessible.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Kim",
    role: "Founder",
    company: "NextGen Dev Group",
    avatar: "/img/professional-man-headshot.png",
    content:
      "As a startup, we rely on tools that keep us lean. Builders Desk feels like an extra assistant.",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Marketing Lead",
    company: "GrowthCorp Projects",
    avatar: "/img/professional-woman-headshot.png",
    content:
      "The assistant helps me pull client updates fast — our turnaround speed is up significantly.",
    rating: 5,
  },
  {
    id: 6,
    name: "Alex Johnson",
    role: "CTO",
    company: "CloudTech Build Systems",
    avatar: "/img/professional-man-headshot.png",
    content:
      "Builders Desk hits that perfect balance between simplicity and function.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-16 px-4 bg-gradient-to-b from-background to-accent/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Loved by <span className="text-primary">thousands</span> of teams
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            Real stories from leaders who trust Builders Desk to streamline
            their construction operations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <Card className="group relative bg-white border border-border/60 rounded-xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                <CardContent className="p-5">
                  {/* Stars */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">
                    &quot;{testimonial.content}&quot;
                  </p>

                  {/* Person Info */}
                  <div className="flex items-center gap-3">
                    <Avatar className="w-9 h-9 border border-border">
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
                      <p className="font-semibold text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}{" "}
                        <span className="text-primary font-medium">
                          @ {testimonial.company}
                        </span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
