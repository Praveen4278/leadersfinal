import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import logoPath from "@assets/WhatsApp_Image_2026-06-12_at_22.58.15_(1)_1781323608682.jpeg";

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
    <footer className="bg-foreground text-white">
      {/* Main footer */}
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={logoPath}
              alt="Leaders in Lipstick"
              className="h-14 w-auto object-contain brightness-0 invert mb-6"
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              A premium women's leadership and behavioural training organisation. Women-centric in identity. Inclusive in impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-6 font-medium">Navigate</h4>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-6 font-medium">Let's Connect</h4>
            <p className="font-serif text-3xl font-bold text-white mb-6 leading-tight">
              Ready to transform your organisation?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-accent text-accent px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-accent hover:text-foreground transition-all duration-300"
            >
              Get in Touch <ArrowUpRight className="h-4 w-4" />
            </Link>
            <div className="mt-8 space-y-2">
              <p className="text-sm text-white/60">
                <span className="text-white/40 text-xs uppercase tracking-wider block mb-1">Email</span>
                info@leadersinlipstick.com
              </p>
              <p className="text-sm text-white/60">
                <span className="text-white/40 text-xs uppercase tracking-wider block mb-1">Based In</span>
                India | Global Delivery
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Leaders in Lipstick®. All Rights Reserved.
          </p>
          <p className="text-xs text-white/30 font-serif italic">
            Nurture. Elevate. Lead.
          </p>
        </div>
      </div>
    </footer>
  );
}
