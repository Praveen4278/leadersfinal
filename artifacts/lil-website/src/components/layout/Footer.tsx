import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import logoPath from "@assets/namma_logo_transparent.png";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/ai-training", label: "AI Training" },
  { href: "/community", label: "Who We Serve" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/clients", label: "Clients" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main footer section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Logo section (col-span-3) */}
          <div className="lg:col-span-3">
            <div className="relative inline-block shrink-0 px-5 py-3">
              <img 
                src={logoPath} 
                alt="Leaders in Lipstick" 
                className="h-20 w-auto object-contain" 
              />
            </div>
          </div>

          {/* Navigation links section (col-span-6) */}
          <nav className="lg:col-span-6">
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm md:text-base text-white/80 hover:text-accent transition-all duration-300 uppercase tracking-wider font-semibold relative py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </nav>

          {/* CTA section (col-span-3) */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-accent text-foreground px-10 py-4 text-sm md:text-base font-bold uppercase tracking-wider hover:bg-white hover:shadow-lg transition-all duration-300 rounded-sm"
            >
              Partner With Us
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-10 border-t border-white/15 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs md:text-sm uppercase tracking-widest text-white/50">
            © {new Date().getFullYear()} Leaders in Lipstick®. All Rights Reserved.
          </p>
          <p className="text-xs md:text-sm uppercase tracking-widest text-accent font-bold italic">
            Nurture · Elevate · Lead
          </p>
        </div>
      </div>
    </footer>
  );
}
