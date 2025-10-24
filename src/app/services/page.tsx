import { BookOpen, Headphones, Clock, Phone, CircleCheck, ClipboardList, DollarSign, Palette, Ruler, User } from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import {
  ClipboardCheck,
  UserCheck,
  TrendingUp,
  Calculator,
  Megaphone,
  Users,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: ClipboardList,
    title: "Project Management Support",
    description:
      "Comprehensive support to keep your projects on track and organized.",
  },
  {
    icon: Users,
    title: "Administrative Support",
    description:
      "Professional administrative assistance to streamline your operations.",
  },
  {
    icon: TrendingUp,
    title: "Business Development",
    description:
      "Strategic growth services including bidding, estimating, and marketing.",
  },
  {
    icon: DollarSign,
    title: "Bookkeeping",
    description: "Financial tracking and reporting tailored for construction.",
  },
  {
    icon: Palette,
    title: "Marketing",
    description:
      "Build your brand and online presence with our marketing services.",
  },
  {
    icon: UserCheck,
    title: "Human Resources",
    description: "HR support to manage your team effectively.",
  },
  {
    icon: Ruler,
    title: "Administrative Support",
    description: "Design and drafting support using latest software.",
  },
];
const qualifications = [
  {
    title: "Project Management Support",
    sub: "Expert project managers with industry credentials.",
    icon: ClipboardList,
    items: [
      "Coordinate project timelines and deliverables",
      "Facilitate team communication and collaboration",
      "Track project milestones and report progress",
      "Manage project documentation and resources",
      "Support stakeholder engagement and reporting",
    ],
  },
  {
    title: "Administrative Support",
    sub: "Highly trained administrative professionals.",
    icon: Users,
    items: [
      "Calendar management and scheduling",
      "Email and correspondence management",
      "Data entry and database maintenance",
      "Document preparation and formatting",
      "Travel arrangements and expense reporting",
    ],
  },
  {
    title: "Business Development",
    sub: "Strategic professionals driving your growth.",
    icon: TrendingUp,
    items: [
      "Market research and competitive analysis",
      "Lead generation and qualification",
      "Partnership development and management",
      "Proposal preparation and presentation support",
      "Client relationship management",
    ],
  },
  {
    title: "Bookkeeping",
    sub: "Certified accounting professionals.",
    icon: DollarSign,
    items: [
      "Accounts payable and receivable management",
      "Bank reconciliation and financial reporting",
      "Expense tracking and categorization",
      "Invoice preparation and processing",
      "Financial data organization and maintenance",
    ],
  },
  {
    title: "Marketing",
    sub: "Creative professionals with industry expertise.",
    icon: Palette,
    items: [
      "Social media management and content creation",
      "Email marketing campaign execution",
      "Content writing and copywriting",
      "Marketing analytics and reporting",
      "Brand consistency and guidelines management",
    ],
  },
  {
    title: "Human Resources",
    sub: "HR professionals ensuring compliance and efficiency.",
    icon: UserCheck,
    items: [
      "Recruitment and onboarding support",
      "Employee records management",
      "Benefits administration assistance",
      "HR policy documentation and compliance",
      "Performance review coordination",
    ],
  },
  {
    title: "Administrative Support",
    sub: "Licensed architects and design professionals.",
    icon: Ruler,
    items: [
      "Virtual assistant services",
      "Meeting coordination and minutes",
      "File organization and management",
      "Customer service support",
      "General administrative tasks",
    ],
  },
];

const steps = [
  {
    number: 1,
    title: "Discovery Call",
    description:
      "We learn about your business, challenges, and specific needs.",
    icon: Phone,
  },
  {
    number: 2,
    title: "Custom Plan",
    description:
      "We create a tailored support plan that fits your requirements.",
    icon: FileText,
  },
  {
    number: 3,
    title: "Team Integration",
    description: "Our experts integrate seamlessly with your existing team.",
    icon: Users,
  },
  {
    number: 4,
    title: "Ongoing Support",
    description:
      "Consistent, reliable service with regular check-ins and optimization.",
    icon: Headphones,
  },
];

const benefits = [
  {
    title: "Industry Expertise",
    description:
      "Our team understands construction business operations, terminology, and unique challenges.",
  },
  {
    title: "Scalable Solutions",
    description:
      "Grow your support as your business grows—no overhead costs or HR headaches.",
  },
  {
    title: "Reliable Service",
    description:
      "Consistent, dependable support you can count on day after day, project after project.",
  },
  {
    title: "Cost Effective",
    description:
      "Get expert support without the cost of hiring full-time employees and managing benefits.",
  },
];
function Page() {
  return (
    <>
      <section
        className="relative "
        style={{
          background: `linear-gradient(180deg, #0E4571 0%, #FFFFFF 100%)`,
        }}
      >
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <Badge className="text-sm bg-accent/10 flex h-9.5 rounded-full w-[227px] ">
                <span className="inline-block size-2 bg-accent rounded-full "></span>
                <span className="font-light">PROFESSIONAL SOLUTIONS</span>
              </Badge>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold leading-tight text-balance">
                  Our Services
                </h1>
                <div className="flex gap-5 mt-5">
                  <div className="h-1 bg-accent w-20 rounded-full"></div>
                  <div className="h-1 bg-accent w-10 rounded-full"></div>
                  <div className="h-1 bg-accent w-5 rounded-full"></div>
                </div>
              </div>
              <p className="text-lg md:text-xl text-[#404040] leading-relaxed max-w-xl">
                Comprehensive back-office support designed to help you focus on
                what matters most. From project management to administrative
                support, we've got you covered with professional services
                tailored to your business needs.
              </p>

              {/* Service Features */}
              <div className="flex flex-wrap gap-6 pt-4 text-primary">
                <div className="flex items-center gap-3 ">
                  <div className="w-10 h-10 rounded-full bg-primary  flex items-center justify-center">
                    <CircleCheck className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-medium">Learn More</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <CircleCheck className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-medium">Free Trial</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <CircleCheck className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-medium">24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative lg:h-[580px] h-[400px]">
              <div className="absolute inset-0  rounded-lg" />
              <Image
                src="/services-hero.png"
                alt="Professional businesswoman providing services"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl  text-[#1A1A1A]">
              Our Services
            </h2>
            <p className="text-[#4A5565] text-lg max-w-2xl mx-auto">
              Comprehensive back-office support services designed to help your
              business thrive
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-2  transition-colors h-74">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-normal text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl  text-[#1A1A1A] mb-3">
              Some key qualifications of your back office team
            </h2>
            <p className="text-[#4A5565] text-xl">
              Expert capabilities across all service areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-8xl mx-auto">
            {qualifications.map((qualification, index) => (
              <Card key={index} className="border-2">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-3">
                    <div className=" size-31.5 rounded-lg relative bg-[#F3F4F6] flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="size-16 text-[#99A1AF]" />
                      <div className="bg-[#E28C1B] absolute top-23 left-23 backdrop-blur-sm rounded-[12px] p-3 flex items-center justify-center shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
                        <qualification.icon className="text-white" />
                      </div>
                    </div>
                    <CardTitle className=" font-normal grid text-primary pt-1">
                      <span className="text-2xl">{qualification.title}</span>
                      <span className="text-sm leading-5.5">
                        {qualification.sub}
                      </span>
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {qualification.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-balance">
              How We Work With You
            </h2>
            <p className="text-primary underline decoration-2 underline-offset-4">
              A simple, straightforward process to get you the support you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            {/* Left Column - Benefits */}
            <div>
              <h2 className="text-4xl font-bold mb-12 text-balance">
                Why Construction Companies Choose Us
              </h2>
              <div className="space-y-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - CTA Box */}
            <div className="bg-primary text-primary-foreground rounded-lg p-8 lg:sticky lg:top-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-8 opacity-90 leading-relaxed">
                Let's discuss your specific needs and create a custom support
                plan for your construction business.
              </p>
              <div className="space-y-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Schedule a Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full justify-center gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <FileText className="w-4 h-4" />
                  View Pricing Plans
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-balance">
              Let Us Handle the Back Office
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
              Focus on building great projects while we take care of project
              management, estimating, bookkeeping, and more.
            </p>
            <Button size="lg" className="px-8">
              Get Your Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
