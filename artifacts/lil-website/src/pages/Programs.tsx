import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Users, Video, Building2, Mountain } from "lucide-react";
import programImg1 from "@assets/WhatsApp Image 2026-06-13 at 12.11.09 (1).jpeg";
import programImg2 from "@assets/WhatsApp Image 2026-06-13 at 12.11.09 (2).jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const deliveryFormats = [
  { icon: Users, title: "Immersive Cohorts", desc: "Structured multi-session journeys with peer learning and accountability." },
  { icon: Video, title: "Virtual Workshops", desc: "Live online sessions designed for global, distributed teams." },
  { icon: Building2, title: "Classroom Training", desc: "In-person, facilitated workshops at your premises or our venues." },
  { icon: Mountain, title: "Outbound Training", desc: "Experiential learning in the field — disrupting thinking through doing." },
];

const womenPrograms = [
  {
    num: "01",
    title: "Leaders in Lipstick",
    subtitle: "Women Managers Development",
    tagline: "Lead Authentically. Navigate Strategically.",
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
    subtitle: "For Women Leaders",
    tagline: "Peer Learning. Real Problems. Lasting Impact.",
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

const allWorkshops = {
  "CXO": [
    { num: "01", title: "Executive Presence & Gravitas", tagline: "Command the Room" },
    { num: "02", title: "Strategic Decision Making", tagline: "Lead with Clarity" },
    { num: "03", title: "Board Readiness", tagline: "Govern, Decide, Lead" },
  ],
  "Senior Managerial": [
    { num: "04", title: "The Art of Negotiation", tagline: "Prepare. Position. Protect." },
    { num: "05", title: "C-Suite Communication", tagline: "Speak with Impact" },
    { num: "06", title: "Strategic Management Skills", tagline: "Think. Trade Off. Lead." },
    { num: "07", title: "Stakeholder Management", tagline: "Map. Engage. Advance." },
  ],
  "Mid Managerial": [
    { num: "08", title: "Coaching & Mentoring", tagline: "Ask. Unlock. Develop." },
    { num: "09", title: "Enabling Team Effectiveness", tagline: "Surface. Shift. Align." },
    { num: "10", title: "The Power of Impact & Influence", tagline: "Earn. Frame. Move." },
    { num: "11", title: "Effective Feedback", tagline: "Specific. Impact-Focused. Trust-Preserving." },
  ],
  "Entry Level & Support Team": [
    { num: "12", title: "Prioritisation & Planning", tagline: "Choose. Focus. Deliver." },
    { num: "13", title: "Impactful Business Communication", tagline: "Structure. Clarity. Land." },
    { num: "14", title: "Mindfulness for Better Productivity", tagline: "Attend. Focus. Recover." },
    { num: "15", title: "Personal Effectiveness", tagline: "Audit. Design. Own." },
    { num: "16", title: "Setting Effective Goals", tagline: "Specific. Measurable. Owned." },
    { num: "17", title: "Work-Life Integration", tagline: "Sustain. Restore. Thrive." },
    { num: "18", title: "The Positive Leader", tagline: "Absorb. Redirect. Inspire." },
    { num: "19", title: "Storytelling & Public Speaking", tagline: "Hook. Build Tension. Land." },
    { num: "20", title: "Being Emotionally Intelligent", tagline: "Self-Aware. Composed. Connected." },
  ],
  "All Levels": [
    { num: "21", title: "Customer Centricity", tagline: "See. Simplify. Serve." },
    { num: "22", title: "Effective Selling Skills", tagline: "Discover. Understand. Propose." },
    { num: "23", title: "Outbound Training Workshops", tagline: "Disrupt. Discover. Transfer." },
  ],
};

const methodology = [
  { step: "01", title: "Discover", desc: "We immerse ourselves in your organisation's context, culture, and gaps through diagnostic conversations and needs analysis." },
  { step: "02", title: "Design", desc: "We co-create a bespoke learning journey — not an off-the-shelf solution — anchored to your business objectives and leadership framework." },
  { step: "03", title: "Deliver", desc: "Expert facilitators bring the programme to life through immersive workshops, peer learning, and real-world application challenges." },
  { step: "04", title: "Develop", desc: "We measure, refine, and sustain impact — through follow-up coaching, reinforcement sessions, and outcome tracking." },
];

export default function Programs() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-32 bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 30% 60%, #D4AF37 0%, transparent 50%)" }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-4xl">
            <div className="w-16 h-1 bg-accent mb-8" />
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Real-world leadership capability.
            </h1>
            <p className="text-lg text-white/75 max-w-2xl">
              Leadership experiences designed to build real-world capability — for women leaders, and behavioural growth for all employees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Delivery Formats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground">How We Deliver</h2>
          </motion.div>
          
          {/* Image showcase */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <img src={programImg1} alt="Workshop in action" className="w-full h-72 object-cover rounded-xl shadow-md" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
              <img src={programImg2} alt="Group activity" className="w-full h-72 object-cover rounded-xl shadow-md" />
            </motion.div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryFormats.map((format, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-8 rounded-xl border border-border hover:border-primary hover:shadow-md transition-all">
                <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mb-5">
                  <format.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{format.title}</h3>
                <p className="text-sm text-muted-foreground">{format.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stream 1 — Women Programs */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="mb-16">
            <div className="inline-block bg-primary text-white text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">Stream 01</div>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Women-Only Leadership Journeys</h2>
            <p className="text-muted-foreground max-w-2xl">Structured cohort programmes exclusively designed for women at every career stage — from emerging manager to boardroom ready.</p>
          </motion.div>
          <div className="space-y-8">
            {womenPrograms.map((prog, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-border">
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <div className="shrink-0">
                      <div className="font-serif text-6xl font-bold text-primary/20">{prog.num}</div>
                    </div>
                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="font-serif text-2xl font-bold text-foreground">{prog.title}</h3>
                        <p className="text-primary font-medium">{prog.subtitle}</p>
                        <p className="font-serif text-lg italic text-accent mt-1">{prog.tagline}</p>
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{prog.desc}</p>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Key Modules</p>
                        <div className="flex flex-wrap gap-2">
                          {prog.modules.map((mod, mi) => (
                            <span key={mi} className="text-sm bg-primary/10 text-primary px-4 py-1.5 rounded-full border border-primary/20">{mod}</span>
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

      {/* Stream 2 — All-Employee Workshops */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="mb-16">
            <div className="inline-block bg-accent text-white text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">Stream 02</div>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">All-Employee Behavioural Workshops</h2>
            <p className="text-muted-foreground max-w-2xl">High-impact workshop modules — open to all employees, delivered to build the behaviours that drive organisational performance.</p>
          </motion.div>

          <div className="space-y-16">
            {Object.entries(allWorkshops).map(([category, workshops], categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h3 className="font-serif text-2xl font-bold text-primary mb-6">{category}</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {workshops.map((ws, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                      className="bg-muted rounded-xl p-6 border border-border hover:border-accent hover:shadow-md transition-all"
                    >
                      <div className="font-serif text-3xl font-bold text-accent/40 mb-3">{ws.num}</div>
                      <h4 className="font-serif text-base font-bold text-foreground mb-1">{ws.title}</h4>
                      <p className="text-xs text-muted-foreground font-medium tracking-wide">{ws.tagline}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="text-center mb-16">
            <div className="w-12 h-1 bg-accent mx-auto mb-6" />
            <h2 className="font-serif text-4xl font-bold text-white">Our 4-Stage Journey Methodology</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((m, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="text-center">
                <div className="font-serif text-6xl font-bold text-accent/30 mb-2">{m.step}</div>
                <h3 className="font-serif text-2xl font-bold text-white mb-3">{m.title}</h3>
                <div className="w-8 h-0.5 bg-accent mx-auto mb-4" />
                <p className="text-white/70 text-sm leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background text-center">
        <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}>
          <div className="w-12 h-1 bg-accent mx-auto mb-8" />
          <h2 className="font-serif text-4xl font-bold text-foreground mb-6">Let's co-design your programme</h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            Every great leadership programme starts with a conversation. Tell us about your team, your goals, and your timeline.
          </p>
          <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-10 text-base font-medium text-white shadow transition-colors hover:bg-primary/90">
            Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
