import { Link } from "wouter";
import { ArrowUpRight, Youtube } from "lucide-react";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaXTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa6";
import logoPath from "@assets/namma_logo_transparent.png";
import maxPotentialLogo from "@assets/max-potential-global-transparent.jpeg";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/community", label: "Who Can Join Us" },
  { href: "/clients", label: "Clients" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/contact", label: "Contact" },
];

const youtubeLinks = [
  { href: "https://youtu.be/wZ74HyPqIso", title: "Siji Varghese | TEDxLNCTBhopalWomen" },
  { href: "https://youtu.be/OkROVDMRSXY", title: "How to change your Partner every seven years" },
  { href: "https://youtu.be/_jWkWiXdKNc", title: "PSAI Talk Show" },
  { href: "http://www.youtube.com/c/KalpeshRaichura", title: "The First Guru — A daughter and a mother sharing a platform for the first time" },
];

const socialLinks = [
  { href: "https://www.linkedin.com/company/leaders-in-lipstick%C2%AE", Icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "https://www.instagram.com/leadersinlipstick.in/", Icon: FaInstagram, label: "Instagram" },
  { href: "https://facebook.com", Icon: FaFacebookF, label: "Facebook" },
  { href: "https://x.com", Icon: FaXTwitter, label: "X (Twitter)" },
  { href: "https://www.youtube.com/@LeadersinLipstick", Icon: FaYoutube, label: "YouTube" },
  { href: "https://wa.me/919082389632", Icon: FaWhatsapp, label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main footer section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Logo & Info section (col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start gap-6">
            <div className="flex items-center gap-4">
              <Link href="/" className="relative inline-block shrink-0 px-5 py-3 group">
                <img 
                  src={logoPath} 
                  alt="Leaders in Lipstick – Home" 
                  loading="lazy"
                  className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                />
              </Link>
              <Link href="/programs" className="relative inline-block shrink-0 px-5 py-3 group">
                <img 
                  src={maxPotentialLogo} 
                  alt="Max Potential Global — View 22 Programs" 
                  loading="lazy"
                  className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                  style={{ filter: 'invert(95%) sepia(5%) saturate(250%) hue-rotate(190deg) brightness(1.2)' }}
                />
              </Link>
            </div>
            <p className="text-white/70 text-sm text-center lg:text-left">
              Transforming leadership capability for inclusive, high-performing organisations.
            </p>
            {/* Social Icons */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation links section (col-span-4) */}
          <div className="lg:col-span-4">
            <h3 className="font-serif text-xl font-bold mb-6 text-center lg:text-left">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4 text-center lg:text-left">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-accent transition-all duration-300 py-1 min-h-[44px]"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/"
                className="text-white/80 hover:text-accent transition-all duration-300 py-1 min-h-[44px]"
              >
                Home
              </Link>
            </div>
          </div>

          {/* YouTube section (col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-xl font-bold mb-6 flex items-center gap-2">
              <Youtube className="h-5 w-5 text-accent" /> Watch Us
            </h3>
            <div className="flex flex-col gap-4">
              {youtubeLinks.map((yt, i) => (
                <a
                  key={i}
                  href={yt.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 group"
                >
                  <Youtube className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-white/70 text-xs leading-relaxed group-hover:text-accent transition-colors">{yt.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA & Contact section (col-span-3) */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start gap-6">
            <h3 className="font-serif text-xl font-bold">Get in Touch</h3>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-accent text-foreground px-10 py-4 text-sm md:text-base font-bold uppercase tracking-wider hover:bg-white hover:shadow-lg transition-all duration-300 rounded-sm min-h-[44px]"
            >
              Partner With Us
              <ArrowUpRight className="h-5 w-5" />
            </Link>
            <p className="text-white/60 text-sm text-center lg:text-left">
              shweta@leadersinlipstick.in
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-10 border-t border-white/15 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs md:text-sm uppercase tracking-widest text-white/50">
            © {new Date().getFullYear()} Leaders in Lipstick®. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/" className="text-xs text-white/50 hover:text-white transition-colors min-h-[44px]">Privacy Policy</Link>
            <Link href="/" className="text-xs text-white/50 hover:text-white transition-colors min-h-[44px]">Terms of Service</Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
