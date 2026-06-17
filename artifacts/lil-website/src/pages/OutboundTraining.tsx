import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Mountain, Compass, Zap, Heart, Shield, RefreshCw } from "lucide-react";
import img1 from "@assets/worksop1.jpeg";
import img2 from "@assets/worksop2.jpeg";
import img3 from "@assets/WhatsApp Image 2026-06-13 at 12.11.40 (3).jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const principles = [
  { icon: Zap, title: "Disrupt to Develop", desc: "New environments break habitual thinking patterns, forcing participants to engage with their leadership in fresh, unguarded ways." },
  { icon: Heart, title: "Whole-Person Learning", desc: "Outbound activities engage the body, emotions, and mind together — creating deeper, more durable learning than cognitive-only approaches." },
  { icon: Shield, title: "Safe to Fail", desc: "The field context creates a psychologically safe space to take risks, fail fast, and learn from experience without career consequences." },
  { icon: RefreshCw, title: "Transfer Back", desc: "Every activity is debriefed with specific links to workplace realities — ensuring insights transfer directly into daily leadership practice." },
];

const experiences = [
  {
    title: "The Leadership Crucible",
    audience: "Senior Leaders & CXOs",
    duration: "2 Days",
    setting: "Outstation Retreat",
    desc: "An intense two-day outdoor leadership experience for senior leaders. Through high-challenge activities, participants encounter their leadership edge — and discover new capacity for presence, decision-making, and influence under pressure.",
    themes: ["Decision-making under uncertainty", "Leading without positional authority", "Trust and psychological safety", "Resilience and recovery"],
  },
  {
    title: "Team in the Field",
    audience: "Intact Teams — All Levels",
    duration: "1 Day",
    setting: "Outdoor Campus",
    desc: "A full day of outdoor team challenges designed to surface team dynamics, test communication under pressure, and forge genuine bonds between team members. Facilitated debrief translates every activity into team insights.",
    themes: ["Trust building", "Communication under pressure", "Shared accountability", "Collective problem-solving"],
  },
  {
    title: "Women Who Lead Outdoors",
    audience: "Women Leaders Cohort",
    duration: "1 Day",
    setting: "Nature Setting",
    desc: "An outbound day designed exclusively for women leaders — combining physical challenges with deep reflection on leadership identity, courage, and the inner barriers that hold women back from stepping fully into their power.",
    themes: ["Inner confidence & courage", "Overcoming self-limiting beliefs", "Peer trust & vulnerability", "Leadership presence in action"],
  },
  {
    title: "New Manager Bootcamp",
    audience: "First-time Managers",
    duration: "1.5 Days",
    setting: "Residential Camp",
    desc: "A rite-of-passage experience for newly promoted managers — combining outdoor challenges with classroom reflection to build the mindset, skills, and identity of a leader who earns respect through action, not title.",
    themes: ["The identity shift: from peer to leader", "Giving feedback outdoors", "Accountability in practice", "Leading diverse personalities"],
  },
];

const stats = [
  { num: "94%", label: "of participants rate outbound learning as more impactful than classroom-only" },
  { num: "3x", label: "higher retention of key leadership lessons versus traditional training" },
  { num: "100%", label: "of activities are debriefed and linked back to real workplace scenarios" },
];

export default function OutboundTraining() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden" style={{ backgroundColor: "#1a0a0f" }}>
        <div className="absolute inset-0 opacity-30">
          <img src={img1} alt="Outbound" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-4xl">
            <div className="inline-block bg-accent/20 text-accent text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-accent/30">
              Programme Format
            </div>
            <div className="w-16 h-1 bg-accent mb-8" />
            <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Outbound Training
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Experiential leadership development in the field — where outdoor challenges reveal what classroom theory never can, and real growth happens beyond the comfort zone.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-8 text-sm font-semibold text-white shadow transition-colors hover:bg-accent/90">
                Plan an Outbound <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/programs" className="inline-flex h-12 items-center justify-center rounded-md border-2 border-white/40 px-8 text-sm font-semibold text-white transition-colors hover:border-white">
                All Programmes
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="font-serif text-4xl sm:text-5xl font-bold text-accent mb-2">{s.num}</div>
                <p className="text-white/70 text-sm leading-relaxed max-w-xs mx-auto">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="text-center mb-16">
            <div className="w-12 h-1 bg-accent mx-auto mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Why Learning Outdoors Works</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">The field creates conditions that the classroom simply cannot replicate — uncertainty, physical challenge, and the raw truth of how you show up.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((item, i) => (
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

      {/* Image duo */}
      <section className="grid md:grid-cols-2 h-64 sm:h-80 md:h-96">
        <div className="overflow-hidden">
          <img src={img2} alt="Outbound activity" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="overflow-hidden">
          <img src={img3} alt="Team activity" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        </div>
      </section>

      {/* Experiences */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="mb-16">
            <div className="w-12 h-1 bg-accent mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Outbound Experiences</h2>
            <p className="text-muted-foreground max-w-2xl">Each experience is designed around a specific leadership challenge — and every activity maps back to a concrete workplace insight.</p>
          </motion.div>
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-border hover:border-accent hover:shadow-md transition-all">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="shrink-0 flex flex-col items-center justify-center bg-primary/5 rounded-xl p-5 min-w-[100px] text-center border border-primary/10">
                    <Mountain className="h-8 w-8 text-primary mb-2" />
                    <span className="text-xs font-bold text-primary uppercase tracking-wide">{exp.duration}</span>
                    <span className="text-xs text-muted-foreground mt-1">{exp.setting}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-semibold">{exp.audience}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">{exp.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{exp.desc}</p>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Leadership Themes</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.themes.map((t, ti) => (
                          <span key={ti} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 bg-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}>
            <Compass className="h-12 w-12 text-accent mx-auto mb-8 opacity-60" />
            <p className="font-serif text-xl sm:text-2xl md:text-3xl italic text-white leading-relaxed mb-6">
              "The greatest breakthroughs in leadership don't happen at a desk. They happen when you're challenged, uncertain, and surrounded by people who are right there with you."
            </p>
            <div className="w-12 h-0.5 bg-accent mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background text-center">
        <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}>
          <div className="w-12 h-1 bg-accent mx-auto mb-8" />
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">Take your team into the field</h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-10 max-w-xl mx-auto">
            Ready to design an outbound experience that your team will never forget? Let's build it together.
          </p>
          <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-10 text-base font-semibold text-white shadow transition-colors hover:bg-primary/90">
            Design My Outbound <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
