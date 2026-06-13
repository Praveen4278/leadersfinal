import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import logoPath from "@assets/namma ].jpeg";

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
<footer className="bg-foreground text-white py-16 overflow-hidden">
       <div className="container mx-auto px-6 lg:px-12">
         {/* Single compact row */}
         <div className="flex flex-col md:flex-row items-center justify-between gap-10">
           {/* Logo */}
           <div className="bg-white px-5 py-3 rounded-lg inline-block shrink-0">
             <img src={logoPath} alt="Leaders in Lipstick" className="h-14 w-auto object-contain" />
           </div>

           {/* Nav links */}
           <nav className="flex flex-wrap justify-center gap-x-10 gap-y-4">
             {quickLinks.map((link) => (
               <Link
                 key={link.href}
                 href={link.href}
                 className="text-base text-white/70 hover:text-accent transition-colors duration-200 uppercase tracking-wider"
               >
                 {link.label}
               </Link>
             ))}
           </nav>

           {/* Right side */}
           <div className="flex items-center gap-10 shrink-0">
             <a
               href="mailto:shweta.leadersinlipstick@gmail.com"
               className="text-base text-white/70 hover:text-accent transition-colors hidden lg:block"
             >
               shweta.leadersinlipstick@gmail.com
             </a>
             <Link
               href="/contact"
               className="inline-flex items-center gap-2 bg-accent text-foreground px-8 py-3 text-base font-bold uppercase tracking-wider hover:bg-white transition-all duration-200 rounded-sm"
             >
               Partner With Us <ArrowUpRight className="h-5 w-5" />
             </Link>
           </div>
         </div>

         {/* Bottom micro bar */}
         <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
           <p className="text-sm uppercase tracking-widest text-white/40">
             © {new Date().getFullYear()} Leaders in Lipstick®. All Rights Reserved.
           </p>
           <p className="text-sm uppercase tracking-widest text-accent/70 font-bold italic">
             Nurture · Elevate · Lead
           </p>
         </div>
       </div>
     </footer>
  );
}
