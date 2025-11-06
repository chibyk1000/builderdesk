import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  services: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  services,
}) => {
  return (
    <Card
      className="group self-start relative border border-gray-200 rounded-2xl overflow-hidden 
      shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A]
      transition-all duration-500 ease-in-out
      hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]
      h-[260px] hover:h-[360px]" // 👈 Compact -> Expanded
    >
      {/* Base Content */}
      <CardContent
        className="p-6 py-2 flex flex-col gap-3 h-full z-10 relative bg-white 
        transition-all duration-500 ease-in-out 
        group-hover:opacity-0 group-hover:scale-95"
      >
        {/* Icon + Title */}
        <div className="flex flex-col gap-6">
          <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-white">
            {icon}
          </div>
          <h3 className="text-2xl font-semibold text-primary">{title}</h3>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </CardContent>

      {/* Hover Overlay */}
      <div
        className="absolute inset-0 bg-primary text-white flex flex-col items-center 
        pt-10 px-6 opacity-0 translate-y-6 
        transition-all duration-500 ease-in-out
        group-hover:opacity-100 group-hover:translate-y-0"
      >
        {/* Icon + Title */}
        <div className="flex items-center gap-4 mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-accent">
            {icon}
          </div>
        </div>

        {/* Services */}
        <ul className="space-y-2 w-full text-center">
          {services.map((service, i) => (
            <li
              key={i}
              className="flex items-center justify-center gap-2 text-sm text-white/90"
            >
              <span>{service}</span>
              <CheckCircle className="text-accent size-4 shrink-0" />
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};


export default ServiceCard;

interface ServiceCtaCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  onClick?: () => void;
}

export const ServiceCtaCard: React.FC<ServiceCtaCardProps> = ({
  icon,
  title,
  description,
  buttonText,
  onClick,
}) => {
  return (
    <Card className="rounded-2xl self-start overflow-hidden border-none bg-[linear-gradient(180deg,#0E4571_0%,#0A3554_100%)] text-white">
      <CardContent className="p-6 flex flex-col justify-between h-full space-y-4">
        <div className="space-y-4">
          {/* Icon */}
          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-yellow-400">
            {icon}
          </div>

          {/* Text */}
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-white/80 mt-2 leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Button */}
        <Button
          onClick={onClick}
          variant="secondary"
          asChild
          className="w-full bg-white text-primary hover:bg-white/90 font-medium mt-auto"
        >
          <Link href={"/services"}>
          
          {buttonText}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
