import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, TrendingUp, Building2, GraduationCap, Network, Star, Briefcase } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const womenAudiences = [
  {
    icon: Star,
    title: "Early-Career Professionals",
    desc: "Women in their first 1–5 years of corporate life, building the foundations of leadership identity and workplace confidence.",
  },
  {
    icon: TrendingUp,
    title: "Mid-Career Leaders",
    desc: "Women managers and senior individual contributors navigating the transition to strategic leadership and cross-functional influence.",
  },
  {
    icon: Building2,
    title: "Senior Leaders & Directors",
    desc: "Women with P&L ownership, team leadership, and board-readiness in their sights — sharpening governance, presence, and strategic acumen.",
  },
  {
    icon: Briefcase,
    title: "Entrepreneurs & Founders",
    desc: "Women building their own organisations, who need the rigour of corporate leadership frameworks applied to entrepreneurial contexts.",
  },
  {
    icon: ArrowRight,
    title: "Returnees & Career Shifters",
    desc: "Women re-entering the workforce or making significant career pivots — rebuilding confidence, currency, and professional narrative.",
  },
  {
    icon: Network,
    title: "Fast-Track Corporate Talent",
    desc: "High-potential women identified by their organisations for accelerated leadership development and succession planning.",
  },
];

const corporateAudiences = [
  {
    icon: GraduationCap,
    title: "HR & L&D Leaders",
    desc: "People leaders who want a partner — not a vendor — to help design, deliver, and measure leadership development at scale.",
  },
  {
    icon: Building2,
    title: "Corporates & Enterprises",
    desc: "Organisations with a genuine commitment to inclusive leadership — investing in programmes that move the representation needle, not just tick the box.",
  },
  {
    icon: Star,
    title: "Academic Institutions",
    desc: "Business schools, universities, and professional bodies integrating real-world leadership development into their curriculum and alumni offering.",
  },
];

const allies = [
  {
    title: "Mentors & Executive Coaches",
    desc: "Senior leaders — women and men — who want to actively contribute to the next generation's growth, and who find structured community valuable.",
  },
  {
    title: "CXO Communities",
    desc: "Executive peer networks that want to embed inclusive leadership principles at the highest level — through dialogue, exposure, and sponsorship.",
  },
  {
    title: "Policy Influencers",
    desc: "Advocates, researchers, and policy professionals working on gender equity in the workplace who want evidence and on-the-ground insight.",
  },
];

export default function Community() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(ellipse at 20% 60%, #fff 0%, transparent 60%)" }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-4xl">
            <div className="w-16 h-1 bg-accent mb-8" />
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              A Movement Built on Many Voices
            </h1>
            <p className="text-xl text-white/80">
              Leaders in Lipstick® is more than a training company. It's an ecosystem of professionals, organisations, and allies who believe that inclusive leadership is a competitive advantage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Women Community */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="mb-16">
            <div className="inline-block bg-primary text-white text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">Women-Centric Community</div>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">For Women at Every Stage</h2>
            <p className="text-muted-foreground max-w-2xl">From first job to first board seat — we meet women where they are and take them where they want to go.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {womenAudiences.map((aud, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                className="bg-muted rounded-xl p-8 border border-border hover:border-primary hover:shadow-md transition-all group">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <aud.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{aud.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{aud.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Clients */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="mb-16">
            <div className="inline-block bg-accent text-white text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">Organisational Partners</div>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Corporate & Organisational Clients</h2>
            <p className="text-muted-foreground max-w-2xl">Organisations that partner with us don't just buy training. They invest in a measurable, lasting shift in leadership capability.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {corporateAudiences.map((aud, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="bg-white rounded-2xl p-10 shadow-md border border-border text-center">
                <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <aud.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{aud.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{aud.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Allies */}
      <section className="py-24 bg-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="mb-16">
            <div className="w-12 h-1 bg-accent mb-6" />
            <h2 className="font-serif text-4xl font-bold text-white mb-4">Strategic Allies & Ecosystem Partners</h2>
            <p className="text-white/70 max-w-2xl">A movement needs more than participants. It needs champions.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {allies.map((ally, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="border border-white/20 rounded-xl p-8 hover:border-accent transition-colors">
                <div className="w-8 h-0.5 bg-accent mb-6" />
                <h3 className="font-serif text-xl font-bold text-white mb-3">{ally.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{ally.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Mix Matters */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="text-center">
            <div className="w-12 h-1 bg-accent mx-auto mb-8" />
            <h2 className="font-serif text-4xl font-bold text-foreground mb-8">Why This Mix Matters</h2>
            <div className="bg-muted rounded-2xl p-10 border-l-4 border-primary text-left max-w-3xl mx-auto">
              <p className="font-serif text-xl italic text-primary mb-6">
                "Inclusion doesn't happen in silos. When women develop alongside their organisations — with the support of allies, the backing of HR, and the engagement of leadership — the impact compounds."
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our community is deliberately cross-functional and cross-level. When an emerging leader is in the same ecosystem as a CHRO, a board-ready executive, and a policy voice — the conversations get richer, the networks get stronger, and the outcomes get bigger.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                That's what Leaders in Lipstick® is building: not just better-trained individuals, but better-led organisations — and a better-represented world.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-center">
        <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}>
          <div className="w-12 h-1 bg-accent mx-auto mb-8" />
          <h2 className="font-serif text-4xl font-bold text-white mb-6">Find Your Place in This Movement</h2>
          <p className="text-white/75 mb-10 max-w-xl mx-auto">
            Whether you're a woman leader, an HR professional, or an organisation ready to invest — there is a seat for you here.
          </p>
          <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-md bg-white px-10 text-base font-medium text-primary shadow transition-colors hover:bg-white/90">
            Get Involved <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
