import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";
import img1 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.02_1781323608679.jpeg";
import img2 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.04_1781323608680.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const workshops = [
  {
    num: "01",
    title: "The Art of Negotiation",
    tagline: "Getting to yes without breaking the relationship on the way there.",
    why: "Inside organisations, the harder negotiations happen closer to home — with peers who control the resources you need, with leaders who have different priorities, with teams whose goals conflict with yours. This workshop treats negotiation not as a rare event but as a daily leadership competency.",
    modules: ["Interest-based negotiation — moving beyond fixed positions", "Preparing for internal negotiations and mapping stakeholders", "Managing emotional pressure — responding, not reacting", "Trading value, not concessions", "Handling difficult counterparts", "Closing without burning relationships"],
  },
  {
    num: "02",
    title: "Impactful Business Communication",
    tagline: "Being understood the first time.",
    why: "Most business communication fails because the sender assumes the receiver understands. This workshop teaches structure, clarity, and audience awareness — for managers presenting to executives and anyone whose communication directly affects decisions.",
    modules: ["Structuring for clarity — the pyramid principle", "Audience analysis — what the other person actually needs to hear", "Concision without losing substance", "Verbal communication under pressure", "Presentation design that supports the speaker"],
  },
  {
    num: "03",
    title: "Mindfulness for Better Productivity",
    tagline: "The ability to pay attention to what matters, for as long as it matters.",
    why: "Most productivity training focuses on systems. This workshop addresses attention directly — not as a personality trait but as a trainable skill. Participants learn why their mind wanders and how to bring it back without frustration.",
    modules: ["The neuroscience of attention — why the brain wanders", "Single-tasking as a productivity tool", "Short mindfulness practices for the workplace", "Managing digital distractions without willpower alone", "Recovering focus after an interruption"],
  },
  {
    num: "04",
    title: "Being Emotionally Intelligent",
    tagline: "Accurate about what you feel. Accurate about what others feel. Accurate about what to do next.",
    why: "This workshop uses the Emotional Skills Assessment Process (ESAP) from EI Learning Systems, USA. A serious assessment tool that gives participants specific, actionable feedback on their emotional skill gaps — not generic theory.",
    modules: ["Self-awareness — recognising your emotional patterns", "Self-management — regulating impulse under pressure", "Social awareness — reading others accurately", "Relationship management — building trust and resolving conflict", "The neuroscience of emotion — why your brain reacts"],
  },
  {
    num: "05",
    title: "Work-Life Integration",
    tagline: "Not how do I separate these two worlds — but how do I move between them without burning out.",
    why: "The pursuit of balance creates guilt. Integration removes the guilt. It acknowledges that work and life overlap. The goal is sustainable movement — knowing when to push and when to rest.",
    modules: ["Energy management versus time management", "Setting micro-boundaries that protect recovery", "Switching contexts effectively", "Communicating your integration style to your team", "Recognising burnout before it arrives"],
  },
  {
    num: "06",
    title: "Effective Selling Skills",
    tagline: "Helping people realise they already want it.",
    why: "Real selling starts with listening. Understanding the customer's world, goals, and constraints. This workshop builds that foundation — a repeatable process for moving from conversation to commitment without manipulation.",
    modules: ["Discovery — questions that uncover real needs", "Structuring a sales conversation", "Handling objections without arguing", "Negotiating value, not price", "Building long-term customer relationships"],
  },
  {
    num: "07",
    title: "Storytelling & Public Speaking",
    tagline: "Data convinces the mind. Stories move the heart.",
    why: "Even professionals who are comfortable speaking often bore their audience. This workshop combines storytelling techniques with public speaking skills — structure, voice, body language, and the confidence to connect with any audience.",
    modules: ["Story structure for business — hook, tension, resolution", "Finding your authentic speaking voice", "Using data within a story", "Managing nerves — practical techniques", "Speaking without slides"],
  },
  {
    num: "08",
    title: "Personal Effectiveness",
    tagline: "Removing the friction between intention and action.",
    why: "Most professionals operate on default settings. This workshop helps participants design a new default — a personal operating system that supports their priorities and adapts when the day goes wrong.",
    modules: ["Time auditing — seeing your actual patterns", "Deep work versus shallow work", "Meeting effectiveness", "Email and message discipline", "Decision-making under pressure"],
  },
  {
    num: "09",
    title: "Art of Giving Feedback",
    tagline: "Feedback that actually changes behaviour — specific, actionable, without triggering defensiveness.",
    why: "Most feedback is either too soft to help or too hard to hear. This workshop teaches a structured approach that separates behaviour from identity, focuses on impact not intent, and leaves recipients clear on what to do next.",
    modules: ["The SBI framework — Situation, Behaviour, Impact", "Separating behaviour from identity", "Delivering negative feedback with care", "Receiving feedback gracefully", "Creating a feedback culture"],
  },
  {
    num: "10",
    title: "Coaching and Mentoring",
    tagline: "Managing tells. Coaching asks.",
    why: "Managers get promoted because they are good at solving problems — then they keep solving their team's problems. Coaching is the exit ramp from that trap. This workshop builds the skill of unlocking others' thinking through questions.",
    modules: ["The difference between coaching, mentoring, and managing", "Powerful questions that unlock thinking", "Active listening in coaching", "Structuring a coaching conversation", "Knowing when to stop coaching and give direction"],
  },
  {
    num: "11",
    title: "Customer Centricity",
    tagline: "A set of daily decisions — not a value written on a wall.",
    why: "Internal teams often forget who they serve. This workshop is for anyone who interacts with customers — external or internal. It teaches participants to see the world through the customer's eyes and identify friction points.",
    modules: ["Customer journey mapping", "Identifying and eliminating customer pain", "Internal customer centricity", "Balancing process efficiency with experience", "Handling complaints as opportunities"],
  },
  {
    num: "12",
    title: "Prioritisation & Planning",
    tagline: "The difference between busy and effective is not effort — it is what you choose to put first.",
    why: "Teams fail because they try to do everything. This workshop builds the skill of deliberate choice — not working harder, but working on the right things. And protecting that choice when other people want your time.",
    modules: ["Urgent vs important — the Eisenhower matrix applied to daily work", "Saying no with professionalism", "Weekly and quarterly prioritisation", "Managing upstream requests", "Team alignment on priorities"],
  },
  {
    num: "13",
    title: "Setting Effective Goals",
    tagline: "Turning vague aspirations into executable plans.",
    why: "Professionals set goals every year during performance reviews — then forget about them for eleven months. This workshop treats goals as working documents: reviewed weekly, adjusted as circumstances change, connected to daily action.",
    modules: ["SMART goals done properly — a design process, not a checklist", "Breaking annual goals into monthly and weekly actions", "Identifying and planning for obstacles in advance", "Accountability systems that work", "Reviewing and adjusting without feeling like a failure"],
  },
  {
    num: "14",
    title: "Executive Presence & Grooming",
    tagline: "Looking like you belong in the room — not because of your title, because of how you carry yourself.",
    why: "High-potential professionals often get overlooked because their presence undermines their performance. This workshop gives specific, actionable feedback on the three pillars of executive presence: gravitas, communication, and appearance.",
    modules: ["The three pillars — gravitas, communication, and appearance", "Non-verbal signals that undermine authority", "Voice modulation and pacing", "Handling Q&A with senior leaders", "Professional grooming standards for different contexts"],
  },
];

export default function BehaviouralIntelligenceDetail() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-32 bg-accent overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(ellipse at 30% 60%, #fff 0%, transparent 55%)" }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-4xl">
            <div className="inline-block bg-white/20 text-white text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-white/30">Workshop Suite</div>
            <div className="w-16 h-1 bg-white mb-8" />
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">Behavioural Intelligence</h1>
            <p className="text-foreground/80 text-base sm:text-lg max-w-2xl leading-relaxed">High-impact workshops on emotional intelligence, negotiation, influence, communication — skills that move organisations and people forward.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-foreground px-8 text-sm font-semibold text-white shadow transition-colors hover:bg-primary">
                Book a Workshop <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/programs" className="inline-flex h-12 items-center justify-center rounded-md border-2 border-foreground/40 px-8 text-sm font-semibold text-foreground transition-colors hover:border-foreground">
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
                className="bg-muted rounded-2xl p-6 md:p-8 border border-border hover:border-accent hover:shadow-md transition-all">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="font-serif text-5xl font-bold text-accent/20 shrink-0">{ws.num}</div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-1">{ws.title}</h3>
                    <p className="font-serif italic text-accent text-sm mb-4">{ws.tagline}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">{ws.why}</p>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Core Learning Areas</p>
                      <div className="flex flex-wrap gap-2">
                        {ws.modules.map((mod, mi) => (
                          <span key={mi} className="flex items-center gap-1.5 text-xs bg-accent/10 text-foreground px-3 py-1.5 rounded-full border border-accent/20">
                            <CheckCircle className="h-3 w-3 text-accent shrink-0" />{mod}
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
      <section className="py-24 bg-accent text-center">
        <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}>
          <div className="w-12 h-1 bg-white mx-auto mb-8" />
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">Build the behaviours that drive performance</h2>
          <p className="text-foreground/75 text-sm sm:text-base mb-10 max-w-xl mx-auto">Available as standalone sessions or as part of a blended learning journey. Let's design the right combination for your team.</p>
          <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-md bg-foreground px-10 text-base font-semibold text-white shadow transition-colors hover:bg-primary">
            Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
