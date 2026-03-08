import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Server,
  Shield,
  Cloud,
  Code,
  BarChart3,
  Settings,
} from "lucide-react";

const services = [
  {
    icon: Server,
    title: "IT Infrastructure",
    description:
      "End-to-end infrastructure solutions including servers, storage, and networking for enterprise environments.",
    tag: "Infrastructure",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insights with our advanced analytics and business intelligence solutions.",
    tag: "Analytics",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Protect your business with comprehensive security solutions, threat detection, and compliance management.",
    tag: "Security",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Seamless cloud migration, management, and optimization across AWS, Azure, and Google Cloud platforms.",
    tag: "Cloud",
  },
  {
    icon: Code,
    title: "Software Development",
    description:
      "Custom software solutions, web and mobile applications built with modern technologies and best practices.",
    tag: "Development",
  },
  {
    icon: Settings,
    title: "Managed Services",
    description:
      "24/7 IT management, monitoring, and support to keep your systems running smoothly and efficiently.",
    tag: "Support",
  },
];

export default function Services() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal(0.1);

  return (
    <section id="services" className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center space-y-4 mb-16 reveal ${headerVisible ? "visible" : ""}`}
        >
          <Badge
            variant="secondary"
            className="rounded-full px-4 py-1.5 text-xs font-medium bg-gray-100 text-gray-600 border-0"
          >
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            What We Offer
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
            Comprehensive IT solutions tailored to accelerate your business
            growth and digital transformation journey.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={gridRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children reveal ${gridVisible ? "visible" : ""}`}
        >
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border-0 shadow-sm hover:shadow-xl transition-all duration-500 bg-white rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2"
            >
              <CardContent className="p-8 space-y-5">
                <div className="w-14 h-14 rounded-2xl bg-gray-100 group-hover:bg-gray-900 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <Badge
                      variant="secondary"
                      className="rounded-full text-[10px] px-2.5 py-0.5 bg-gray-100 text-gray-500 border-0 font-medium"
                    >
                      {service.tag}
                    </Badge>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="pt-2">
                  <span className="text-sm font-medium text-gray-900 group-hover:text-gray-600 transition-colors inline-flex items-center gap-1.5">
                    Learn more
                    <svg
                      className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
