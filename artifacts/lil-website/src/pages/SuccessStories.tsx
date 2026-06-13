import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

import img1 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.03_1781323608680.jpeg";
import img2 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.04_1781323608680.jpeg";
import img3 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.07_1781323608680.jpeg";
import img4 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.08_(1)_1781323608681.jpeg";
import img5 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.08_(2)_1781323608681.jpeg";
import img6 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.08_1781323608681.jpeg";
import img7 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.11_(1)_1781323608681.jpeg";
import img8 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.11_1781323608681.jpeg";
import img9 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.12_(1)_1781323608681.jpeg";
import img10 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.12_(2)_1781323608682.jpeg";
import img11 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.12_1781323608682.jpeg";
import img12 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.13_1781323608682.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stats = [
  { num: "2000+", label: "Women Impacted" },
  { num: "50+", label: "Organisations" },
  { num: "68%", label: "Promotion Rate" },
  { num: "8+", label: "Countries" },
];

const testimonials = [
  {
    quote: "Before Leaders in Lipstick®, I had the skills but not the belief. After the Board Readiness cohort, I walked into my first board interview with complete clarity. I got the role.",
    who: "Independent Director, FMCG sector",
  },
  {
    quote: "Leaders in Lipstick® gave our entire organisation a shared language for leadership. Our mixed teams came away from the behavioural workshops with real skills they use daily.",
    who: "Head of L&D, Global Technology Firm",
  },
  {
    quote: "Partnering with Leaders in Lipstick® gave us more than a training programme. It gave us a measurable shift in how our women leaders see themselves — and how our organisation sees them.",
    who: "CHRO, Global Financial Services Firm",
  },
];

const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

export default function SuccessStories() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 75% 30%, #C9A055 0%, transparent 55%)" }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-4xl">
            <div className="w-16 h-1 bg-accent mb-8" />
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              From the Room to the Boardroom
            </h1>
            <p className="text-xl text-white/80">
              Every number behind our impact is a leader who chose to invest in herself — and an organisation that chose to invest in her.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}>
                <div className="font-serif text-6xl md:text-7xl font-bold text-accent mb-2">{stat.num}</div>
                <div className="text-sm text-white/70 uppercase tracking-widest font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="text-center mb-16">
            <div className="w-12 h-1 bg-accent mx-auto mb-6" />
            <h2 className="font-serif text-4xl font-bold text-foreground">What Leaders Say</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="bg-muted rounded-2xl p-10 border border-border flex flex-col">
                <div className="text-accent font-serif text-6xl leading-none mb-6">"</div>
                <p className="font-serif text-lg italic text-foreground leading-relaxed flex-1 mb-8">{t.quote}</p>
                <div className="pt-6 border-t border-border">
                  <div className="w-8 h-0.5 bg-accent mb-3" />
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">— {t.who}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="text-center mb-14">
            <div className="w-12 h-1 bg-accent mx-auto mb-6" />
            <h2 className="font-serif text-4xl font-bold text-foreground">In the Room</h2>
            <p className="text-muted-foreground mt-4">Moments from workshops, cohorts, and leadership journeys across India and beyond.</p>
          </motion.div>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className="break-inside-avoid overflow-hidden rounded-xl">
                <img
                  src={img}
                  alt={`Leaders in Lipstick workshop ${i + 1}`}
                  className="w-full object-cover hover:scale-105 transition-transform duration-500 rounded-xl"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}>
            <div className="text-accent font-serif text-8xl leading-none mb-6">"</div>
            <p className="font-serif text-3xl md:text-4xl italic text-white leading-relaxed mb-10">
              68% of Leaders in Lipstick® participants secure a promotion or expanded role within 18 months of completing their programme.
            </p>
            <p className="text-white/60 text-sm uppercase tracking-widest">Leaders in Lipstick® Impact Data, 2025</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background text-center">
        <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}>
          <div className="w-12 h-1 bg-accent mx-auto mb-8" />
          <h2 className="font-serif text-4xl font-bold text-foreground mb-6">Write your own success story.</h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            Find out which programme is right for you — or explore a corporate partnership that delivers measurable impact.
          </p>
          <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-10 text-base font-medium text-white shadow transition-colors hover:bg-primary/90">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
