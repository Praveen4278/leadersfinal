import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";
import img1 from "@assets/WhatsApp Image 2026-06-13 at 12.11.40 (1).jpeg";
import img2 from "@assets/WhatsApp Image 2026-06-13 at 12.11.39 (2).jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const workshops = [
  {
    num: "01",
    title: "The Positive Leader",
    tagline: "Positivity is not about being cheerful. It is about being constructive when things go wrong.",
    why: "Negativity spreads faster than competence. One frustrated leader can drain an entire team's energy within weeks. This workshop is about realistic optimism — acknowledging obstacles while believing the team can navigate them. Not toxic positivity. The kind that acknowledges difficulty while still pointing toward a path forward.",
    modules: ["Emotional contagion in teams — how a leader's mood sets the thermostat", "Reframing without denying — acknowledging problems while keeping the team engaged", "Responding versus reacting in high-pressure moments", "Building team resilience through language and attention", "The difference between optimism and blind positivity"],
  },
  {
    num: "02",
    title: "The Power of Impact & Influence",
    tagline: "Authority is given. Influence is earned.",
    why: "Most professionals confuse influence with manipulation. Influence is a set of observable behaviours: building trust, understanding what matters to the other person, framing your request in terms of their interests. This workshop teaches those behaviours — practical moves that work inside organisations where you have no formal authority.",
    modules: ["The three currencies of influence — rational, emotional, and cooperative", "Building trust capital before you need to ask for something", "Influencing without authority — peer-to-peer, cross-functional, and upward", "Framing your request around their interests", "Handling resistance without escalating"],
  },
  {
    num: "03",
    title: "Effective Strategic Management Skills",
    tagline: "Strategy is not a document. It is a set of choices.",
    why: "Managers get promoted for operational excellence — then expected to think strategically without training. This workshop builds strategic thinking about your own function and resources. How to make tradeoffs. How to allocate attention, not just budget.",
    modules: ["Strategic thinking versus operational management", "Making tradeoffs — choosing what not to do", "Aligning team activities with organisational goals", "Resource allocation beyond the budget — time, attention, and talent", "Communicating your strategy upward and sideways"],
  },
  {
    num: "04",
    title: "Enabling Team Effectiveness & Eliminating Team Dysfunction",
    tagline: "Most teams are not dysfunctional because of bad people. They are dysfunctional because of bad patterns.",
    why: "Teams rarely discuss how they work together — only what they are doing. That avoidance costs them. This workshop creates space for that conversation, gives teams a shared language to name their dysfunctions, and tools to change the patterns.",
    modules: ["The five dysfunctions of a team — trust, conflict, commitment, accountability, results", "Surfacing undiscussable issues — creating psychological safety for honesty", "Meeting effectiveness — stopping the patterns that waste time", "Conflict resolution within the team", "Mutual accountability — holding each other to team norms"],
  },
  {
    num: "05",
    title: "Stakeholder Management",
    tagline: "Your success depends on people who do not report to you.",
    why: "Most professionals manage stakeholders reactively — reaching out only when they need something. Effective stakeholder management is proactive: regular communication, mutual discovery of interests, and careful expectation setting built before you ever need a favour.",
    modules: ["Stakeholder mapping and prioritisation — who matters, who does not", "Building trust proactively — small actions before big asks", "Tailoring communication to stakeholder style", "Managing difficult stakeholders — resistance, silence, and politics", "Upward stakeholder management — handling senior leaders effectively"],
  },
  {
    num: "06",
    title: "Outbound Training Workshops",
    tagline: "Some lessons cannot be learned in a conference room.",
    why: "Teams develop patterns — some helpful, some limiting — that are invisible inside the office. Outbound training disrupts those patterns. A new environment. Unfamiliar tasks. Physical challenges. The usual roles stop working. New behaviours emerge. The debrief connects every activity directly back to workplace realities.",
    modules: ["Communication under pressure — who speaks, who listens, who decides", "Trust and vulnerability — what helps, what hurts", "Leadership in ambiguity — when the plan fails, who steps up", "Resilience and recovery — bouncing back as a team", "Transferring learning back to work — the bridge from outdoors to the office"],
  },
];

export default function StrategicTeamSkillsDetail() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-32 bg-[#f5ece8] overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(ellipse at 70% 30%, #D4AF37 0%, transparent 60%)" }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-4xl">
            <div className="inline-block bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-primary/20">Workshop Suite</div>
            <div className="w-16 h-1 bg-accent mb-8" />
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">Strategic & Team Skills</h1>
            <p className="text-foreground/70 text-base sm:text-lg max-w-2xl leading-relaxed">Cross-functional capability building — problem solving, collaboration, strategic thinking, and high-performance team dynamics.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-semibold text-white shadow transition-colors hover:bg-primary/90">
                Book a Workshop <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/programs" className="inline-flex h-12 items-center justify-center rounded-md border-2 border-primary/40 px-8 text-sm font-semibold text-primary transition-colors hover:border-primary">
                All Programmes
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Strip */}
      <section className="grid grid-cols-2 h-52 sm:h-64 md:h-80">
        {[img1, img2].map((img, i) => (
          <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.2 }} className="overflow-hidden">
            <img src={img} alt={`Workshop ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </motion.div>
        ))}
      </section>

      {/* Workshops */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="mb-16">
            <div className="w-12 h-1 bg-accent mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Workshop Catalogue</h2>
            <p className="text-muted-foreground max-w-2xl">Each workshop is a standalone module that can be delivered independently or as part of a blended learning journey.</p>
          </motion.div>
          <div className="space-y-6">
            {workshops.map((ws, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className="bg-muted rounded-2xl p-6 md:p-8 border border-border hover:border-primary hover:shadow-md transition-all">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="font-serif text-5xl font-bold text-primary/15 shrink-0">{ws.num}</div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-1">{ws.title}</h3>
                    <p className="font-serif italic text-primary text-sm mb-4">{ws.tagline}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">{ws.why}</p>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Core Learning Areas</p>
                      <div className="flex flex-wrap gap-2">
                        {ws.modules.map((mod, mi) => (
                          <span key={mi} className="flex items-center gap-1.5 text-xs bg-primary/10 text-foreground px-3 py-1.5 rounded-full border border-primary/20">
                            <CheckCircle className="h-3 w-3 text-primary shrink-0" />{mod}
                          </span>
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

      {/* CTA */}
      <section className="py-24 bg-primary text-center">
        <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}>
          <div className="w-12 h-1 bg-accent mx-auto mb-8" />
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">Build capability that drives real results</h2>
          <p className="text-white/75 text-sm sm:text-base mb-10 max-w-xl mx-auto">Let's co-design the right combination of workshops for your team and your goals.</p>
          <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-md bg-white px-10 text-base font-semibold text-primary shadow transition-colors hover:bg-accent hover:text-white">
            Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
