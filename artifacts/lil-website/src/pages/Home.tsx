import { motion } from "framer-motion";
import { Link } from "wouter";
import heroImg from "@assets/WhatsApp_Image_2026-06-12_at_22.58.02_1781323608679.jpeg";
import eventImg1 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.03_1781323608680.jpeg";
import eventImg2 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.04_1781323608680.jpeg";
import eventImg3 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.05_1781323608680.jpeg";
import { ArrowRight, Sparkles, Target, Users, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 z-10" />
        
        <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
              Lead. Influence. Transform.
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-light">
              Transformative leadership journeys and behavioural programs for all professionals — designed to shape decisions and drive change that matters.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/programs" className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-white/90">
                Explore Our Programs
              </Link>
              <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md border-2 border-accent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-accent hover:text-white">
                Partner With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Block */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-serif text-4xl font-bold text-foreground mb-8"
          >
            Designed for Women. Built for Impact. Open to All.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground mb-8"
          >
            Leaders in Lipstick® is a premium women's leadership and behavioural training organisation. We believe leadership is not a title; it is a responsibility. Our methodology integrates behavioural psychology, emotional intelligence frameworks, and leadership development strategy to create measurable change.
          </motion.p>
          <motion.h3 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-serif text-3xl font-bold text-accent uppercase tracking-widest mt-12"
          >
            Nurture. Elevate. Lead.
          </motion.h3>
        </div>
      </section>

      {/* Two Tracks */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-primary hover:-translate-y-2 transition-transform duration-300">
              <h3 className="font-serif text-3xl font-bold mb-4 text-primary">Women Leadership Journeys</h3>
              <p className="text-muted-foreground mb-6">Exclusive cohorts designed to elevate women into senior leadership and board readiness.</p>
              <Link href="/programs" className="text-primary font-medium flex items-center hover:underline">
                View Journeys <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-accent hover:-translate-y-2 transition-transform duration-300">
              <h3 className="font-serif text-3xl font-bold mb-4 text-foreground">Behavioural Programs for All</h3>
              <p className="text-muted-foreground mb-6">High-impact workshops on negotiation, emotional intelligence, and strategic communication.</p>
              <Link href="/programs" className="text-accent font-medium flex items-center hover:underline">
                View Workshops <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Clusters */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center mb-16 text-foreground">Core Focus Areas</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Leadership & Personal Effectiveness" },
              { icon: Users, title: "Communication & Influence" },
              { icon: Sparkles, title: "Strategic & Team Skills" },
              { icon: BookOpen, title: "AI Adoption & Literacy" }
            ].map((cluster, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 border rounded-lg hover:border-primary transition-colors">
                <div className="h-16 w-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                  <cluster.icon className="h-8 w-8" />
                </div>
                <h4 className="font-serif text-xl font-bold text-foreground">{cluster.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "2000+", label: "Women Impacted" },
              { num: "50+", label: "Organisations" },
              { num: "68%", label: "Promotion Rate" },
              { num: "8+", label: "Countries" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="font-serif text-5xl md:text-6xl font-bold text-accent mb-2">{stat.num}</div>
                <div className="text-sm md:text-base font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src={eventImg1} alt="Workshop" className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-500" />
            <img src={eventImg2} alt="Workshop" className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-500" />
            <img src={eventImg3} alt="Workshop" className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="text-accent text-6xl font-serif mb-6">"</div>
          <p className="font-serif text-3xl md:text-4xl italic text-foreground mb-8">
            Leaders in Lipstick® gave our entire organisation a shared language for leadership — and our women leaders a community to grow with.
          </p>
          <div className="font-medium text-muted-foreground uppercase tracking-wider">
            — Head of L&D, Financial Services
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-background text-center">
        <h2 className="font-serif text-4xl font-bold text-foreground mb-8">Ready to invest in leadership capability?</h2>
        <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-10 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
          Let's Connect <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </section>
    </div>
  );
}
