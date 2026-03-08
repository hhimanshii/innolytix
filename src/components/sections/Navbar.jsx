import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-gray-900 rounded-lg flex items-center justify-center group-hover:bg-gray-800 transition-colors">
           <img src="https://media.licdn.com/dms/image/v2/D4D0BAQFTFbzDNnsBbw/company-logo_200_200/company-logo_200_200/0/1687958159962/innolytix_solutions_logo?e=1774483200&v=beta&t=saiUO5ST52UYuZCDtLMvfDF0kL52FVxxUbM9hZAgjDQ" className="h-10 w-10"/>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-gray-900 leading-tight">INNOLYTIX</span>
            <span className="text-[9px] tracking-[0.2em] text-gray-500 font-medium uppercase">Innovate with Analytics</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="default"
            className="rounded-full px-6 bg-gray-900 hover:bg-gray-800 text-white font-medium shadow-lg shadow-gray-900/10 cursor-pointer"
          >
            Get a Free Consultation
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 p-0">
            <div className="flex flex-col h-full pt-12 px-6">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-8">
                <Button className="w-full rounded-full bg-gray-900 hover:bg-gray-800 cursor-pointer">
                  Get a Free Consultation
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
