import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logoPath from "@assets/namma_logo_transparent.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/clients", label: "Clients" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/contact", label: "Contact" },
];

const programsOptions = [
  { href: "/programs", label: "Immersive Cohorts", description: "Structured multi-session journeys with peer learning and accountability." },
  { href: "/programs", label: "Virtual Workshops", description: "Live online sessions designed for global, distributed teams." },
  { href: "/programs", label: "Classroom Training", description: "In-person, facilitated workshops at your premises or our venues." },
  { href: "/programs", label: "Outbound Training", description: "Experiential learning in the field — disrupting thinking through doing." },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#70162C] border-b-4 border-[#D4AF37] shadow-lg"
    >
      <div className="container mx-auto px-6 lg:px-12 h-32 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <img
            src={logoPath}
            alt="Leaders in Lipstick"
            className="h-32 w-auto object-contain transition-all duration-300 group-hover:scale-110 brightness-125"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold tracking-wide uppercase transition-all duration-300 relative py-2 group text-white hover:text-[#C9A055] ${
                location === link.href ? "text-[#C9A055]" : ""
              }`}
            >
              {link.label}
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9A055] transition-all duration-300 group-hover:w-full ${location === link.href ? "w-full" : ""}`} />
            </Link>
          ))}
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`text-sm font-semibold tracking-wide uppercase transition-all duration-300 relative py-2 group text-white hover:text-[#C9A055] flex items-center gap-2 ${
                  location === "/programs" ? "text-[#C9A055]" : ""
                }`}
              >
                Programs
                <ChevronDown className="h-4 w-4" />
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9A055] transition-all duration-300 group-hover:w-full ${location === "/programs" ? "w-full" : ""}`} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-72 bg-white border border-[#70162C]/20 shadow-lg rounded-lg p-2">
              {programsOptions.map((option, idx) => (
                <DropdownMenuItem key={idx} asChild>
                  <Link
                    href={option.href}
                    className="flex flex-col gap-1 p-3 rounded-md hover:bg-[#70162C]/10 transition-colors"
                  >
                    <span className="font-semibold text-[#70162C]">{option.label}</span>
                    <span className="text-xs text-muted-foreground">{option.description}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/contact">
            <button className="px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 bg-white text-[#70162C] hover:bg-[#C9A055] hover:text-white shadow-lg border-2 border-[#C9A055]">
              Partner With Us
            </button>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#C9A055] shadow-lg">
          <nav className="flex flex-col px-6 py-6 gap-5">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground hover:text-[#70162C]">
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium ${location === link.href ? "text-[#70162C]" : "text-foreground hover:text-[#70162C]"}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
