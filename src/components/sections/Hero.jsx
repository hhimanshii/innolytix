import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/60 to-cyan-100/60 rounded-full blur-3xl opacity-60 animate-blob" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-amber-100/40 to-orange-100/40 rounded-full blur-3xl opacity-50 animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-gradient-to-r from-violet-100/30 to-pink-100/30 rounded-full blur-3xl opacity-40 animate-blob animation-delay-4000" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-2 h-2 bg-blue-400/30 rounded-full animate-float" />
        <div className="absolute top-[25%] right-[20%] w-3 h-3 bg-amber-400/20 rounded-full animate-float animation-delay-2000" />
        <div className="absolute bottom-[30%] left-[25%] w-1.5 h-1.5 bg-cyan-400/40 rounded-full animate-float animation-delay-4000" />
        <div className="absolute top-[60%] right-[10%] w-2.5 h-2.5 bg-violet-400/20 rounded-full animate-float animation-delay-1000" />
        <div className="absolute top-[40%] left-[50%] w-1 h-1 bg-gray-400/30 rounded-full animate-float animation-delay-3000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content — staggered fade-in */}
          <div className="space-y-8">
            <div
              className={`flex items-center gap-3 transition-all duration-700 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-xs font-medium bg-gray-100 text-gray-700 border-0">
                <Sparkles className="h-3 w-3 mr-1.5" />
                IT Services & Consulting
              </Badge>
              <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-xs font-medium bg-amber-50 text-amber-700 border-0">
                Dehradun, India
              </Badge>
            </div>

            <div
              className={`space-y-4 transition-all duration-700 delay-200 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                Innovation
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-400 animate-gradient-x bg-[length:200%]">
                  With Analytics
                </span>
              </h1>
              <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
                We transform businesses through cutting-edge IT solutions, data analytics,
                and digital innovation. Your success is powered by our expertise.
              </p>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-400 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Button
                size="lg"
                className="rounded-full px-8 bg-gray-900 hover:bg-gray-800 text-white font-medium h-13 text-base shadow-xl shadow-gray-900/15 cursor-pointer group hover:scale-105 transition-all duration-300"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-13 text-base font-medium border-gray-200 hover:bg-gray-50 cursor-pointer hover:scale-105 transition-all duration-300"
              >
                View Portfolio
              </Button>
            </div>

            {/* Stats with count-up feel */}
            <div
              className={`flex items-center gap-8 pt-4 transition-all duration-700 delay-500 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {[
                { num: "50+", label: "Projects Delivered" },
                { num: "30+", label: "Happy Clients" },
                { num: "5+", label: "Years Experience" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-8">
                  {i > 0 && <div className="w-px h-12 bg-gray-200 -ml-8" />}
                  <div>
                    <div className="text-3xl font-bold text-gray-900">{stat.num}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image — slide in + float */}
          <div
            className={`relative hidden lg:block transition-all duration-1000 delay-300 ${
              loaded ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-12 scale-95"
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-900/10 animate-float-slow">
              <img
                src="https://i.pinimg.com/736x/66/9d/6e/669d6e96f22eec1a0e4c7a7f3d1a0a9c.jpg"
                alt="Technology & Analytics"
                className="w-full h-[560px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-gray-900/10" />
              {/* Animated shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
            </div>

            {/* Floating card — bouncing */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl shadow-gray-900/10 border border-gray-100 animate-float animation-delay-1000">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Available Now</div>
                  <div className="text-xs text-gray-500">Ready for your project</div>
                </div>
              </div>
            </div>

            {/* Second floating badge */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl px-4 py-2.5 shadow-lg shadow-gray-900/10 border border-gray-100 animate-float animation-delay-3000">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-amber-500" />
                <span className="text-xs font-semibold text-gray-700">Top Rated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
