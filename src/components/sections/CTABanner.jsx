import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-4 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-8 md:px-16 py-14 overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-amber-500/5 to-blue-500/5 rounded-full blur-2xl" />

          <div className="relative text-center space-y-6">
            <div className="inline-block">
              <span className="px-4 py-1.5 bg-amber-500/20 rounded-full text-amber-300 text-xs font-medium tracking-wide uppercase">
                Let's Collaborate
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Let's grow your brand
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                together!
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Partner with Innolytix IT Solutions and leverage the power of analytics, 
              technology, and innovation to transform your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="rounded-full px-8 bg-white text-gray-900 hover:bg-gray-100 font-semibold h-13 text-base cursor-pointer group"
              >
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-13 text-base font-medium border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white cursor-pointer"
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
