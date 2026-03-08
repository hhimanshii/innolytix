import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle, Users, Award } from "lucide-react";

const caseStudies = [
  {
    image: "https://i.pinimg.com/736x/4a/d0/f0/4ad0f0f5b2d59abc439da6f1d816d7c2.jpg",
    title: "Enterprise Analytics Platform",
    description:
      "Built a comprehensive data analytics dashboard for a leading retail chain, resulting in 40% improvement in decision-making speed and operational efficiency.",
    tags: ["Analytics", "Dashboard", "Retail"],
    stats: { metric: "40%", label: "Faster Decisions" },
  },
  {
    image: "https://i.pinimg.com/1200x/44/27/19/442719890d3cbb6fb1818cf14883f374.jpg",
    title: "Cloud Migration Strategy",
    description:
      "Successfully migrated legacy systems to cloud infrastructure for a financial services firm, reducing IT costs by 35% while improving system reliability.",
    tags: ["Cloud", "Migration", "FinTech"],
    stats: { metric: "35%", label: "Cost Reduction" },
  },
];

export default function Clients() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [cardsRef, cardsVisible] = useScrollReveal(0.1);
  const [trustRef, trustVisible] = useScrollReveal();

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center space-y-4 mb-16 reveal ${headerVisible ? "visible" : ""}`}
        >
          <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-xs font-medium bg-gray-100 text-gray-600 border-0">
            Case Studies
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Client Success Stories
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
            Real results for real businesses. See how we've helped organizations transform through technology.
          </p>
        </div>

        {/* Case Studies */}
        <div
          ref={cardsRef}
          className={`grid md:grid-cols-2 gap-8 stagger-children reveal ${cardsVisible ? "visible" : ""}`}
        >
          {caseStudies.map((study, index) => (
            <Card key={index} className="group border-0 shadow-sm hover:shadow-xl transition-all duration-500 bg-white rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-1">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={study.image} alt={study.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-2 flex-wrap">
                  {study.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="rounded-full text-xs px-3 py-1 bg-gray-100 text-gray-600 border-0">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{study.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{study.description}</p>
                <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-semibold text-gray-900">{study.stats.metric}</span>
                    <span className="text-sm text-gray-500">{study.stats.label}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div
          ref={trustRef}
          className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center stagger-children reveal ${trustVisible ? "visible" : ""}`}
        >
          <div className="flex flex-col items-center gap-3 group">
            <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-500">Client Satisfaction</div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">30+</div>
              <div className="text-sm text-gray-500">Trusted Clients</div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Award className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-500">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
