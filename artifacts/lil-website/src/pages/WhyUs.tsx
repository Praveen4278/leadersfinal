import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, RefreshCw, Layers, BarChart3 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const reasons = [
  {
    num: "01",
    icon: RefreshCw,
    title: "Relationships That Last",
    desc: "Over 90% of our clients choose to partner with us again—because meaningful transformation earns trust.",
  },
  {
    num: "02",
    icon: Layers,
    title: "Expertise Across Ecosystems",
    desc: "From boardrooms to classrooms, factories to corporate headquarters, we tailor every engagement to the realities of each sector and audience.",
  },
  {
    num: "03",
    icon: BarChart3,
    title: "Outcomes Over Activity",
    desc: "We measure what matters. Every programme is designed to create observable shifts in behaviour, leadership effectiveness, and organizational performance.",
  },
];

export default function WhyUs() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(ellipse at 60% 40%, #D4AF37 0%, transparent 60%)" }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-4xl">
            <div className="w-16 h-1 bg-accent mb-8" />
            <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Why Us
            </h1>
            <p className="font-serif text-lg sm:text-xl md:text-2xl italic text-accent max-w-2xl">
              Trusted Across Industries. Proven Across Outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reasons */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid sm:grid-cols-3 gap-8">
            {reasons.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="bg-muted rounded-2xl p-8 border border-border hover:border-primary hover:shadow-md transition-all">
                <div className="font-serif text-5xl font-bold text-primary/15 mb-4">{item.num}</div>
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-5">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <div className="w-8 h-0.5 bg-accent mb-4" />
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground text-center">
        <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}>
          <div className="w-12 h-1 bg-accent mx-auto mb-8" />
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">Ready to associate with us?</h2>
          <p className="text-white/75 text-sm sm:text-base mb-10 max-w-xl mx-auto">
            Whether you're exploring a programme or planning an organisation-wide leadership initiative — we'd love to build it with you.
          </p>
          <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-md bg-accent px-10 text-base font-semibold text-white shadow transition-colors hover:bg-accent/90">
            Let's Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
