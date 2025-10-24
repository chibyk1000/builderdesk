import React from "react";
import { Card } from "@/components/ui/card";
import {
  Home,
  Factory,
  Building,
  Compass,
  HardHat,
  FileText,
  CheckCircle,
  DollarSign,
  LucideIcon,
  Sparkle,
  Sparkles,
  CircleCheck,
} from "lucide-react";
import Image from "next/image";

// --- 1. Data Definitions ---

const expertiseSectors = [
  {
    icon: Home,
    title: "Residential",
    description: "Single & multi-family homes",
  },
  {
    icon: Building,
    title: "Commercial",
    description: "Office buildings & retail",
  },
  {
    icon: Factory,
    title: "Industrial",
    description: "Warehouses & facilities",
  },
  {
    icon: Compass,
    title: "Infrastructure",
    description: "Roads, bridges & utilities",
  },
];

const expertiseDetails = [
  {
    icon: CircleCheck,
    text: "Regional material costs & vendor relationships",
  },
  {
    icon: CircleCheck,
    text: "Local & state regulatory compliance",
  },
  {
    icon: CircleCheck,
    text: "Subcontractor coordination best practices",
  },
  {
    icon: CircleCheck,
    text: "Construction-specific accounting standards",
  },
];


interface SectorCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const SectorCard: React.FC<SectorCardProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  <Card className="flex items-center flex-row p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="bg-primary text-white p-3 rounded-md mr-4">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h4 className="text-primary">{title}</h4>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  </Card>
);

interface ExpertiseDetailProps {
  icon: LucideIcon;
  text: string;
}

const ExpertiseDetail: React.FC<ExpertiseDetailProps> = ({
  icon: Icon,
  text,
}) => (
  <div className="flex items-start space-x-3 text-white bg-white/10 p-3 rounded-lg ">
    <Icon className="w-5 h-5 text-yellow-400 mt-1 shrink-0" />
    <p className="text-sm  border-primary pl-3">{text}</p>
  </div>
);

// --- 3. Main Component ---
export default function IndustryExpertise() {
  return (
    <section className="py-20 bg-white">
      {/* --- Header --- */}
      <div className="text-center mb-12 px-4">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white bg-primary rounded-full mb-3">
          Industry Expertise
        </span>
        <h2 className="text-4xl md:text-5xl  text-gray-900 mb-4">
          Built for Construction Companies
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We understand your industry inside and out, bringing specialized
          knowledge to every project type.
        </p>
      </div>

      {/* --- Main Two-Column Content --- */}
      <div className="container mx-auto h-[428px] max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Image with Stats */}
        <div className="relative rounded-xl overflow-hidden shadow-xl">
          <div className="aspect-video bg-gray-200">
            <Image
              src="/expertise.png"
              fill
              alt="Construction Site Overview"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-[linear-gradient(0deg,rgba(14,69,113,0.3)_0%,rgba(0,0,0,0)_100%)] absolute top-0 left-0 right-0 bottom-0"></div>

          <div className="absolute bottom-5 left-3 right-3 rounded-xl bg-white/95 p-4 flex justify-around items-center border-t border-gray-100 shadow-lg">
            {[
              { num: "500+", label: "Projects" },
              { num: "15+", label: "Years" },
              { num: "98%", label: "On-Time" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl  text-gray-900">{stat.num}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Sectors We Serve */}
        <div className="space-y-4">
          <h3 className="text-xl  text-primary mb-2">Sectors We Serve</h3>
          <div className="space-y-4">
            {expertiseSectors.map((sector, index) => (
              <SectorCard key={index} {...sector} />
            ))}
          </div>
        </div>
      </div>

      {/* --- Footer Expertise Banner --- */}
      <div className="container mx-auto max-w-6xl px-4 mt-16">
        <div className="bg-primary rounded-xl p-8 shadow-2xl">
          <div className="flex items-center mb-6">
            <Sparkles className="w-6 h-6 text-yellow-400 mr-3" />
            <h3 className="text-xl font-semibold text-white">
              Our Construction Expertise
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseDetails.map((detail, index) => (
              <ExpertiseDetail key={index} {...detail} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
