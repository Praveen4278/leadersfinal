import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Users, Calendar, Target, Award } from "lucide-react";
import img1 from "@assets/WhatsApp Image 2026-06-13 at 12.11.39.jpeg";
import img2 from "@assets/WhatsApp Image 2026-06-13 at 12.11.39 (1).jpeg";
import img3 from "@assets/WhatsApp Image 2026-06-13 at 12.11.40.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const journeys = [
  {
    num: "01",
    title: "Leaders in Lipstick",
    subtitle: "Women Managers Development",
    tagline: "Lead Authentically. Navigate Strategically.",
    duration: "6 Months · 8 Sessions",
    desc: "A flagship cohort journey designed to equip women managers with the leadership identity, communication power, and strategic acumen to break through the middle-management ceiling.",
    modules: [
      "Leadership Identity & Personal Brand",
      "Strategic Communication & Executive Presence",
      "Navigating Organisational Politics",
      "Building High-Impact Relationships",
      "From Manager to Leader — The Mindset Shift",
    ],
  },
  {
    num: "02",
    title: "Board Readiness Journey",
    subtitle: "For Senior Women Leaders",
    tagline: "Govern. Decide. Lead at the Top.",
    duration: "4 Months · 6 Sessions",
    desc: "A high-intensity programme for senior women leaders preparing for board-level roles — covering governance, board dynamics, risk oversight, and the art of influencing at the highest level.",
    modules: [
      "Corporate Governance & Board Dynamics",
      "Financial Acumen for Board Members",
      "Risk, Compliance & Stakeholder Accountability",
      "Strategic Decision-Making at Board Level",
      "Positioning & Securing Board Nominations",
    ],
  },
  {
    num: "03",
    title: "Executive Development Program",
    subtitle: "For Senior Women Leaders",
    tagline: "Peer Learning. Real Problems. Lasting Impact.",
    duration: "5 Months · 7 Sessions",
    desc: "A peer-driven executive programme where senior women leaders bring their toughest real-world challenges into the room — and leave with clarity, strategy, and a trusted peer network.",
    modules: [
      "Executive Presence & Gravitas",
      "High-Stakes Negotiation & Influence",
      "Building & Leveraging Cross-Functional Alliances",
      "Managing Up — Influencing Without Authority",
      "Designing Your Next Leadership Chapter",
    ],
  },
];

const whyImmersive = [
  { icon: Users, title: "Peer Cohort Learning", desc: "Learn alongside a carefully curated group of peers who challenge, support and inspire each other throughout the journey." },
  { icon: Calendar, title: "Structured Over Time", desc: "Multi-session programmes allow learning to be applied, reflected upon, and reinforced — not forgotten after a single day." },
  { icon: Target, title: "Real-World Application", desc: "Each session ends with a practical challenge that participants bring back to their actual work environment." },
  { icon: Award, title: "Certified Completion", desc: "Participants receive a certificate of completion and are inducted into the Leaders in Lipstick® Alumni Network." },
];

export default function ImmersiveCohorts() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(ellipse at 70% 30%, #D4AF37 0%, transparent 60%)" }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-4xl">
            <div className="inline-block bg-accent/20 text-accent text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-accent/30">
              Programme Format
            </div>
            <div className="w-16 h-1 bg-accent mb-8" />
            <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Immersive Cohort Journeys
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Structured multi-session leadership journeys where women leaders grow together — through shared challenges, peer accountability, and expert facilitation.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-semibold text-primary shadow transition-colors hover:bg-accent hover:text-white">
                Enrol Your Team <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/programs" className="inline-flex h-12 items-center justify-center rounded-md border-2 border-white/40 px-8 text-sm font-semibold text-white transition-colors hover:border-white">
                All Programmes
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Strip */}
      <section className="py-0 bg-foreground">
        <div className="grid grid-cols-3 h-48 sm:h-64 md:h-80">
          {[img1, img2, img3].map((img, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.15 }} className="overflow-hidden">
              <img src={img} alt={`Cohort ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Immersive */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="text-center mb-16">
            <div className="w-12 h-1 bg-accent mx-auto mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Why Cohort-Based Learning Works</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Research consistently shows that sustained peer learning produces deeper behaviour change than single-day training events.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyImmersive.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-muted rounded-2xl p-8 border border-border hover:border-primary hover:shadow-md transition-all text-center">
                <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journeys */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="mb-16">
            <div className="w-12 h-1 bg-accent mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Our Cohort Programmes</h2>
            <p className="text-muted-foreground max-w-2xl">Each journey is designed for a specific career stage — ensuring the content, peer group, and outcomes are precisely aligned.</p>
          </motion.div>
          <div className="space-y-8">
            {journeys.map((prog, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-border">
                <div className="p-6 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
                    <div className="shrink-0">
                      <div className="font-serif text-5xl md:text-7xl font-bold text-primary/15">{prog.num}</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">{prog.duration}</span>
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-foreground">{prog.title}</h3>
                      <p className="text-primary font-medium">{prog.subtitle}</p>
                      <p className="font-serif text-lg italic text-accent mt-1 mb-4">{prog.tagline}</p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{prog.desc}</p>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Key Modules</p>
                        <div className="flex flex-wrap gap-2">
                          {prog.modules.map((mod, mi) => (
                            <span key={mi} className="flex items-center gap-1.5 text-sm bg-primary/10 text-primary px-4 py-1.5 rounded-full border border-primary/20">
                              <CheckCircle className="h-3.5 w-3.5" />{mod}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground text-center">
        <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}>
          <div className="w-12 h-1 bg-accent mx-auto mb-8" />
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">Ready to build your next cohort?</h2>
          <p className="text-white/70 text-sm sm:text-base mb-10 max-w-xl mx-auto">
            We work with organisations to co-design the right cohort journey for their women leaders. Let's talk.
          </p>
          <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-md bg-accent px-10 text-base font-semibold text-white shadow transition-colors hover:bg-accent/90">
            Start the Conversation <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
