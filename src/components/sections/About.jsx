import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Target, Lightbulb, Users, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We stay ahead of the curve, adopting the latest technologies to deliver cutting-edge solutions for our clients.",
  },
  {
    icon: Target,
    title: "Client-Centric",
    description:
      "Every solution we build is tailored to your unique business needs, ensuring maximum impact and ROI.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Our team of skilled professionals brings deep domain expertise across IT services, analytics, and consulting.",
  },
  {
    icon: TrendingUp,
    title: "Results Driven",
    description:
      "We measure our success by the tangible outcomes we deliver — faster decisions, lower costs, and scalable growth.",
  },
];

export default function About() {
  const [leftRef, leftVisible] = useScrollReveal();
  const [rightRef, rightVisible] = useScrollReveal();

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div
            ref={leftRef}
            className={`space-y-8 reveal-left ${leftVisible ? "visible" : ""}`}
          >
            <div className="space-y-4">
              <Badge
                variant="secondary"
                className="rounded-full px-4 py-1.5 text-xs font-medium bg-gray-100 text-gray-600 border-0"
              >
                About Us
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                Empowering Businesses
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-500">
                  Through Technology
                </span>
              </h2>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                Based in <strong className="text-gray-700">Dehradun, Uttarakhand</strong>,
                Innolytix IT Solutions is a dynamic IT services and consulting firm.
                We help organisations harness the power of data analytics, cloud
                infrastructure, and modern software to stay competitive in an
                ever-evolving digital landscape.
              </p>
              <p className="text-gray-500 text-base leading-relaxed">
                Since our inception we have served <strong className="text-gray-700">30+ clients</strong> across
                industries, delivering <strong className="text-gray-700">50+ projects</strong> that range from
                enterprise dashboards to full-scale cloud migrations. Our mission
                is simple — <em>innovate with analytics</em>.
              </p>
            </div>
          </div>

          {/* Right — Values grid */}
          <div
            ref={rightRef}
            className={`grid sm:grid-cols-2 gap-6 stagger-children reveal-right ${rightVisible ? "visible" : ""}`}
          >
            {values.map((v, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-gray-50 hover:bg-gray-900 transition-all duration-500 cursor-default hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-900/10"
              >
                <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-gray-800 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                  <v.icon className="h-5 w-5 text-gray-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-base font-semibold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">
                  {v.title}
                </h4>
                <p className="text-sm text-gray-500 group-hover:text-gray-400 leading-relaxed transition-colors duration-300">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
