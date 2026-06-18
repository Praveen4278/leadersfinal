import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Brain, Code2, Shield, Zap, Users, CheckCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const whyNow = [
  { icon: Brain, text: "AI is reshaping every function — from finance and marketing to operations and HR. Leaders who don't understand AI cannot govern it." },
  { icon: Shield, text: "Responsible AI adoption requires informed leadership. The risks of uninformed deployment are reputational, legal, and competitive." },
  { icon: Zap, text: "Organisations with AI-literate leadership teams are 2.5x more likely to see measurable productivity gains within 12 months." },
  { icon: Users, text: "Your teams are already using AI. The question is whether it's governed, strategic, and aligned with your organisation's values." },
];

const track1Modules = [
  { title: "Introduction to AI", desc: "Demystifying artificial intelligence — what it is, what it isn't, and what it means for your industry." },
  { title: "AI Tools for Professional Functions", desc: "A curated overview of AI tools applicable to finance, HR, legal, marketing, and operations." },
  { title: "Prompt Engineering Basics", desc: "How to communicate with AI systems effectively — getting better outputs with better inputs." },
  { title: "AI for Everyday Productivity", desc: "Practical applications for email, research, reporting, and decision support." },
  { title: "Responsible Use of AI", desc: "Ethical frameworks, bias awareness, data governance, and setting appropriate organisational guardrails." },
];

const track2Programs = [
  { title: "Generative AI for Business Functions", focus: "ChatGPT, Copilot, Gemini — applied to real business workflows." },
  { title: "AI for Data Analysis & Insights", focus: "Using AI tools to turn raw data into actionable business intelligence." },
  { title: "Prompt Engineering — Advanced", focus: "Multi-turn prompting, chain-of-thought, and system prompt design." },
  { title: "AI-Powered Automation", focus: "Zapier, Make, and workflow automation for productivity gains." },
  { title: "Machine Learning Fundamentals", focus: "Understanding how models are trained — without the maths." },
  { title: "Building with AI APIs", focus: "For technically inclined professionals — integrating AI into products and workflows." },
];

const trainers = [
  {
    name: "Vandana Sachdeva",
    track: "Track 1 — AI for Leaders & Governance",
    role: "AI Literacy Specialist for Senior Leadership and Governance Roles",
    tags: ["Governance-first", "Non-technical", "Immediately applicable"],
    bio: "Vandana specialises in making AI accessible and actionable for senior leaders and board members. Her sessions are designed for executives who need to govern AI, not build it — and who need to do so confidently, responsibly, and fast.",
  },
  {
    name: "Prof. Ajit Vishwakarma",
    track: "Track 2 — Technical & Applied AI",
    role: "Applied AI Educator | 15+ Years | 500K+ Trained",
    tags: ["Top 1% ChatGPT user", "4.9/5 across 15K+ sessions", "500K+ professionals trained"],
    bio: "One of India's most sought-after applied AI educators. Trusted by Accenture, Deloitte, EY, HDFC, IBM, Infosys, Microsoft, TCS, Wipro, and 140+ more organisations. His sessions are hands-on, immediately practical, and built for professionals who want to actually use AI — not just understand it.",
  },
];

export default function AITraining() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-32 bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(ellipse at 80% 40%, #D4AF37 0%, transparent 60%)" }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative max-w-6xl">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-4xl">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-7xl font-bold text-white leading-tight mb-8">
              AI is a leadership decision.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/75 max-w-3xl">
              Artificial Intelligence is no longer a technology decision — it is a leadership decision. Leaders who don't understand AI cannot govern it. Organisations that don't invest in AI literacy will fall behind those that do.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Two Tracks Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="text-center mb-14">
            <div className="w-12 h-1 bg-accent mx-auto mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Two Tracks. One Goal.</h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2 md:mt-4 max-w-xl mx-auto">AI fluency at every level of your organisation — from the boardroom to the frontline.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="bg-primary rounded-2xl p-6 md:p-10 text-white">
              <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Track 01</div>
              <h3 className="font-serif text-2xl font-bold mb-4">Non-Technical AI for Leaders & Governance</h3>
              <p className="text-white/80 leading-relaxed">For C-suite executives, senior leaders, board members, and HR/L&D heads who need to understand, govern, and champion AI adoption — without becoming technologists.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-muted rounded-2xl p-6 md:p-10 border border-border">
              <div className="bg-accent/20 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Code2 className="h-6 w-6 text-accent" />
              </div>
              <div className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Track 02</div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Hands-On Technical AI Capability</h3>
              <p className="text-muted-foreground leading-relaxed">For managers, analysts, executives, and professionals who want to actively use AI tools to transform their daily productivity, decision-making, and workflows.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why AI Training, Why Now */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="mb-14">
            <div className="w-12 h-1 bg-accent mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Why AI Training. Why Now.</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {whyNow.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-4 sm:gap-5 bg-white rounded-xl p-5 sm:p-7 shadow-sm border border-border">
                <div className="shrink-0 h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-foreground/80 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Track 1 Detail */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="mb-14">
            <div className="inline-block bg-primary text-white text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">Track 01</div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-3">AI Literacy for Senior Leaders</h2>
            <p className="text-muted-foreground">4-hour intensive | Available as a half-day workshop or split across two sessions</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {["C-Suite Executives", "Senior Leaders", "Board Members", "HR & L&D Heads", "General Managers"].map((who, i) => (
                <span key={i} className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full border border-primary/20">{who}</span>
              ))}
            </div>
          </motion.div>
          <div className="space-y-4">
            {track1Modules.map((mod, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-5 bg-muted rounded-xl p-6 border border-border">
                <div className="shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{mod.title}</h4>
                  <p className="text-sm text-muted-foreground">{mod.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Track 2 Detail */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="mb-14">
            <div className="inline-block bg-accent text-white text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">Track 02</div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-3">Hands-On Technical AI Programmes</h2>
            <p className="text-muted-foreground">6 standalone programmes — each 4–8 hours, combinable into learning journeys</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Managers & Analysts", "Marketing & Sales Teams", "HR Professionals", "Technically Inclined Executives", "Operations Leaders"].map((who, i) => (
                <span key={i} className="text-xs bg-accent/10 text-accent px-3 py-1.5 rounded-full border border-accent/20">{who}</span>
              ))}
            </div>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {track2Programs.map((prog, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-xl p-7 shadow-sm border border-border hover:border-accent hover:shadow-md transition-all">
                <div className="font-serif text-4xl font-bold text-accent/30 mb-3">{String(i + 1).padStart(2, "0")}</div>
                <h4 className="font-serif text-lg font-bold text-foreground mb-2">{prog.title}</h4>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">{prog.focus}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="text-center mb-16">
            <div className="w-12 h-1 bg-accent mx-auto mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white">AI Trainers</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-10">
            {trainers.map((trainer, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-white rounded-2xl p-6 md:p-10">
                <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">{trainer.track}</div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-1">{trainer.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{trainer.role}</p>
                <p className="text-foreground/80 leading-relaxed mb-6">{trainer.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {trainer.tags.map((tag, ti) => (
                    <span key={ti} className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background text-center">
        <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}>
          <div className="w-12 h-1 bg-accent mx-auto mb-8" />
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to build AI capability?</h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-6 md:mb-10 max-w-xl mx-auto">
            Tell us about your team size, current AI maturity, and goals — we'll design the right track for you.
          </p>
          <Link href="/contact" className="inline-flex h-12 md:h-14 items-center justify-center rounded-md bg-primary px-8 md:px-10 text-sm md:text-base font-medium text-white shadow transition-colors hover:bg-primary/90">
            Start the Conversation <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
