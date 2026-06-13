import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const sectors = [
  {
    label: "Manufacturing",
    clients: [
      "Saint Gobain", "Ajanta Pharma", "Mahindra & Mahindra", "Pidilite Industries",
      "Panasonic", "Xiaomi", "Invisalign", "HP", "D'decor", "Yasham", "Ashtech",
    ],
  },
  {
    label: "BFSI",
    clients: [
      "ICICI Bank", "IDBI", "BOB", "IOB", "IIFL", "Axis Bank", "Yes Bank",
      "Citibank", "CSB", "Corporation Bank", "Sampath Bank", "Bank of Ceylon",
      "Julius Baer", "HDFC Bank", "Birla Sunlife Insurance", "Max Life Insurance",
      "LIC", "Mastercard", "Kotak Group", "Nation Trust Bank",
    ],
  },
  {
    label: "IT & Technology",
    clients: [
      "Tech Mahindra", "LTIMindtree", "Next Gen", "Eurofins", "Wipro",
      "TCS", "Zensar Technologies", "Mphasis", "Genesis", "Hexaware", "CleverTap",
    ],
  },
  {
    label: "Logistics & Supply Chain",
    clients: ["DHL", "Foodland", "Mahindra & Mahindra"],
  },
];

export default function Clients() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-32 bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(ellipse at 60% 40%, #C9A055 0%, transparent 60%)" }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-4xl">
            <div className="w-16 h-1 bg-accent mb-8" />
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Built in Partnership. Scaled Through Trust.
            </h1>
            <p className="text-xl text-white/75 max-w-3xl">
              A growing list of organisations, institutions, and communities that invest in inclusive leadership — and choose Leaders in Lipstick® to help them deliver it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "50+", label: "Organisations" },
              { num: "4", label: "Industry Sectors" },
              { num: "8+", label: "Countries" },
              { num: "2000+", label: "Leaders Trained" },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-serif text-4xl font-bold text-accent mb-1">{s.num}</div>
                <div className="text-sm text-white/70 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientele by Sector */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="text-center mb-16">
            <div className="w-12 h-1 bg-accent mx-auto mb-6" />
            <h2 className="font-serif text-4xl font-bold text-foreground">Our Clientele</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              From global multinationals to trusted Indian institutions — organisations that invest in their people choose Leaders in Lipstick®.
            </p>
          </motion.div>

          <div className="space-y-16">
            {sectors.map((sector, si) => (
              <motion.div key={si}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: si * 0.1 }}>
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-1 h-12 bg-accent rounded-full" />
                  <h3 className="font-serif text-3xl font-bold text-accent">{sector.label}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {sector.clients.map((client, ci) => (
                    <motion.div key={ci}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: ci * 0.03 }}
                      className="px-5 py-2.5 rounded-full border-2 border-primary/20 bg-primary/5 text-foreground text-sm font-medium hover:border-primary hover:bg-primary hover:text-white transition-all cursor-default">
                      {client}
                    </motion.div>
                  ))}
                </div>
                {si < sectors.length - 1 && <div className="mt-16 border-b border-border" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <section className="py-8 bg-muted overflow-hidden border-y border-border">
        <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {[...sectors.flatMap(s => s.clients), ...sectors.flatMap(s => s.clients)].map((client, i) => (
            <span key={i} className="mx-6 text-foreground/50 font-medium text-sm uppercase tracking-widest shrink-0">
              {client} <span className="mx-4 text-accent">·</span>
            </span>
          ))}
        </div>
      </section>

      {/* Trust statement */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Long-Term Partnerships", desc: "Over 60% of our clients return for additional programmes — because they see results, not just satisfaction scores." },
              { title: "Cross-Industry Expertise", desc: "We've delivered across manufacturing, BFSI, IT, logistics, and academia — adapting our methodology to each sector's culture and challenges." },
              { title: "Measurable Outcomes", desc: "Every engagement ends with an impact report — tracking participation, application, and business outcomes over time." },
            ].map((point, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-border">
                <div className="w-8 h-0.5 bg-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{point.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-center">
        <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}>
          <div className="w-12 h-1 bg-accent mx-auto mb-8" />
          <h2 className="font-serif text-4xl font-bold text-white mb-6">Join the Movement</h2>
          <p className="text-white/75 mb-10 max-w-xl mx-auto">
            Ready to invest in leadership capability for your organisation? Let's build something that lasts.
          </p>
          <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-md bg-white px-10 text-base font-medium text-primary shadow transition-colors hover:bg-white/90">
            Let's Build Together <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
