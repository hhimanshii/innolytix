import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const footerLinks = {
  Services: [
    "IT Infrastructure",
    "Data Analytics",
    "Cybersecurity",
    "Cloud Solutions",
    "Software Development",
    "Managed Services",
  ],
  Company: ["About Us", "Our Team", "Careers", "Case Studies", "Blog", "Contact"],
  Resources: ["Documentation", "Knowledge Base", "FAQs", "Support Portal", "Privacy Policy", "Terms of Service"],
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="7" height="18" rx="1" fill="#111" opacity="0.9" />
                  <rect x="12" y="7" width="6" height="14" rx="1" fill="#111" opacity="0.7" />
                  <rect x="20" y="11" width="1" height="10" rx="0.5" fill="#111" opacity="0.5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white leading-tight">
                  INNOLYTIX
                </span>
                <span className="text-[9px] tracking-[0.2em] text-gray-500 font-medium uppercase">
                  Innovate with Analytics
                </span>
              </div>
            </a>
            <p className="text-sm leading-relaxed max-w-sm">
              Innolytix IT Solutions is a Dehradun-based IT services and
              consulting company dedicated to driving business transformation
              through innovation and analytics.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:contact@innolytixsolutions.com"
                className="flex items-center gap-3 text-sm hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                contact@innolytixsolutions.com
              </a>
              <a
                href="tel:+911234567890"
                className="flex items-center gap-3 text-sm hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                +91 123 456 7890
              </a>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 shrink-0" />
                Dehradun, Uttarakhand, India
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-5">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-gray-800/50" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Innolytix IT Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/innolytix-solutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
