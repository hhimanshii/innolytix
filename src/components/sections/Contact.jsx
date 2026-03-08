import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageSquare,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@innolytixsolutions.com",
    href: "mailto:contact@innolytixsolutions.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 123 456 7890",
    href: "tel:+911234567890",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Dehradun, Uttarakhand, India",
    href: null,
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat, 9 AM – 6 PM IST",
    href: null,
  },
];

export default function Contact() {
  const [leftRef, leftVisible] = useScrollReveal();
  const [rightRef, rightVisible] = useScrollReveal();

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — Info */}
          <div
            ref={leftRef}
            className={`space-y-8 reveal-left ${leftVisible ? "visible" : ""}`}
          >
            <div className="space-y-4">
              <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-xs font-medium bg-gray-100 text-gray-600 border-0">
                Contact Us
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
                Get in Touch
              </h2>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-md">
                Have a project in mind? We'd love to hear from you. Reach out and let's discuss how Innolytix can help transform your business.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 stagger-children">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5 cursor-default">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <item.icon className="h-4 w-4 text-gray-700" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-sm font-medium text-gray-900">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div
            ref={rightRef}
            className={`reveal-right ${rightVisible ? "visible" : ""}`}
          >
            <Card className="border-0 shadow-xl shadow-gray-900/5 rounded-2xl hover:shadow-2xl transition-shadow duration-500">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center">
                    <MessageSquare className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Send us a message</h3>
                    <p className="text-xs text-gray-500">We'll get back to you within 24 hours</p>
                  </div>
                </div>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Name</label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-0 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-all duration-200 hover:bg-gray-100"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-0 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-all duration-200 hover:bg-gray-100"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Subject</label>
                    <input
                      type="text"
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border-0 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-all duration-200 hover:bg-gray-100"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border-0 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-all duration-200 resize-none hover:bg-gray-100"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full rounded-xl h-12 bg-gray-900 hover:bg-gray-800 text-white font-medium cursor-pointer group hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-gray-900/10"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
