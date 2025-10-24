import { Card } from "@/components/ui/card";
import {
  Shield,
  BarChart3,
  Building2,
  TrendingUp,
  Star,
  Users,

} from "lucide-react";
import { Badge } from "../ui/badge";

const reasons = [
  {
    icon: Shield,
    title: "Reliability",
    badge: "98% On-Time",
    description:
      "We commit to deadlines, organized workflows, and consistent communication. Our 99% on-time delivery rate speaks for itself.",
    fulldesc:
      "At The Builders Desk, reliability is at the core of everything we do. We understand that in construction, timing is critical. Our team is committed to meeting deadlines, maintaining organized workflows, and ensuring consistent communication with your team. Our 98% on-time delivery rate demonstrates our dedication to being a partner you can count on, project after project.",
  },
  {
    icon: BarChart3,
    title: "Scalability and Flexibility",
    badge: "Fully Flexible",
    description:
      "Our solutions fit with your business. Add services, scale up with your business, and adjust as needed.",
    fulldesc:
      "No long-term contracts. Stop when you need to, and pick back up when you are ready. From sole proprietors and small builders to large firms, our services scale with your business. Whether you need 10 hours a week or full-time support across multiple services, we adapt to your changing needs without the overhead of hiring full-time staff.",
  },
  {
    icon: Building2,
    title: "Industry-Specific Expertise",
    badge: "15+ Years",
    description:
      "We understand construction's unique challenges, budget issues, and regulatory requirements. We know the industry.",
    fulldesc:
      "Our project managers are PMP trained and have a minimum of Bachelor's degrees in their respective fields. We don't just understand business—we understand construction specifically: every permit requirement, estimate detail, budget nuance, and regulatory compliance issue. We speak your language and bring real industry expertise to every task.",
  },
  {
    icon: TrendingUp,
    title: "Technology and Software",
    badge: "Cutting Edge",
    description:
      "We invest in the latest tools to give you the best experience and competitive advantage.",
    fulldesc:
      "We invest in the latest and greatest tools to get the task done. We own and have proficiency in software like: Planswift, Primavera P6, AutoCAD, Revit, Lumion, 3D Max, Sketch Up, and more. This ensures we can seamlessly integrate with your existing workflows and deliver professional results.",
  },
  {
    icon: Users,
    title: "Continued Training",
    badge: "Always Learning",
    description:
      "Our team stays ahead through specialized training and continuous learning.",
    fulldesc:
      "We stay ahead of the times by enrolling our team members in specialized training programs like PMP, Microsoft Office Suite, Customer Service Representative certification, and more. Continuous professional development ensures our team brings the latest best practices to your business.",
  },
  {
    icon: Star,
    title: "Hiring Selection",
    badge: "Top Talent",
    description:
      "We hire the top 1% with optimal education, experience, and certifications.",
    fulldesc:
      "We hire the top 1% with a basic requirement of undergraduate degrees in the areas of specialization like: construction management, architecture, engineering, etc. Our Admins hold undergraduate degrees in fields like business administration, communication, English, and more. Quality starts with quality people.",
  },
];

export default function WhyChoose() {
  return (
    <section id="why" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-accent/10 font-medium text-accent border-none mb-3">
            Our Competitive Edge
          </Badge>
          <h2 className="text-3xl md:text-5xl  text-primary mb-4">
            Why Construction Companies Choose Us
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            We combine industry expertise with dedicated support to help your
            business thrive
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <Card
                key={index}
                className="p-8 border-0 h-[292px] gap-2 hover:shadow-lg transition relative"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <span
                    className="absolute top-6 right-6 bg-[linear-gradient(90deg,#DBA400_0%,rgba(219,164,0,0.9)_100%)] 
             text-white text-sm  px-3 py-1 rounded-[33554400px]
             shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)]"
                  >
                    {reason.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-primary mb-3">
                  {reason.title}
                </h3>
                <p className="text-secondary text-sm mb-4">
                  {reason.description}
                </p>
                <a
                  href="#"
                  className="text-primary/60 font-semibold text-sm hover:underline"
                >
                  Click to learn more →
                </a>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-[linear-gradient(180deg,#0E4571_0%,#0A3554_100%)] text-white rounded-2xl p-12 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <p className="text-white/80">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <p className="text-white/80">On-Time Delivery</p>
            </div>
            <div>
              <div className="text-4xl font-bold  mb-2">15+</div>
              <p className="text-white/80">Projects Managed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
