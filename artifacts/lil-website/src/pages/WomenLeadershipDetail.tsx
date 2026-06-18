import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";
import img1 from "@assets/WhatsApp Image 2026-06-13 at 12.11.39.jpeg";
import img2 from "@assets/WhatsApp Image 2026-06-13 at 12.11.40.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const program = {
  title: "Leaders in Lipstick",
  subtitle: "Women Managers Development Program",
  tagline: "Leadership is not gendered. But the experience of leading often is.",
  why: "Most leadership training is gender-neutral in theory but not in practice. It assumes a level playing field that does not exist. Leaders in Lipstick was built differently. It is for women managers who want to lead effectively without pretending the system is fair. It combines strategic skill-building with honest conversations about what actually happens in male-dominated rooms. This is not a support group. It is a development program. Rigorous. Practical. Designed by women who have led in difficult environments.",
  experience: "The room is for women only. That changes everything. Participants speak freely about things they would never say in a mixed group. The program runs across multiple sessions. It covers the same core leadership skills as any serious program: communication, influence, and strategic thinking — but through the lens of a woman's experience. How to project authority without being called difficult. How to advocate for yourself without being seen as selfish. How to handle a male peer who takes credit for your work. How to ask for what you are worth without apologising.",
  outcomes: [
    "A clearer sense of their own leadership identity — not borrowed from male role models, built from their own strengths.",
    "Practical tactics for handling gender-based friction without burning emotional energy.",
    "A network of other women managers who understand what they face.",
    "Permission to lead differently — to stop trying to fit a mould that was not made for them.",
  ],
  modules: [
    "Navigating the competence-likeability trap — how to be respected and liked on your own terms.",
    "Voice and presence in male-dominated rooms — getting heard without performing masculinity.",
    "Self-advocacy and negotiation for women — asking for resources, recognition, and roles without apology.",
    "Managing microaggressions and bias — strategic responses that preserve your energy.",
    "Building peer support without appearing cliquey.",
  ],
  value: "Organisations that invest in women managers see higher retention, better team performance, and more balanced decision-making. But generic programs do not work. Women need training that reflects their actual experience. Leaders in Lipstick delivers that. It does not blame the organisation. It equips women to succeed inside it. And it sends a signal that the organisation takes their development seriously.",
};

export default function WomenLeadershipDetail() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(ellipse at 70% 30%, #D4AF37 0%, transparent 60%)" }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-4xl">
            <div className="w-16 h-1 bg-accent mb-8" />
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">Women Leadership Journeys</h1>
            <p className="text-accent font-semibold text-lg mb-3">{program.subtitle}</p>
            <p className="font-serif text-lg italic text-white/80 max-w-2xl">{program.tagline}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-semibold text-primary shadow transition-colors hover:bg-accent hover:text-white">
                Enrol Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/programs" className="inline-flex h-12 items-center justify-center rounded-md border-2 border-white/40 px-8 text-sm font-semibold text-white transition-colors hover:border-white">
                All Programmes
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Strip */}
      <section className="grid grid-cols-2 h-52 sm:h-72 md:h-80">
        {[img1, img2].map((img, i) => (
          <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.2 }} className="overflow-hidden">
            <img src={img} alt={`Women leadership ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </motion.div>
        ))}
      </section>

      {/* Why */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}>
            <div className="w-12 h-1 bg-accent mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">Why This Programme Exists</h2>
            <p className="text-muted-foreground leading-relaxed text-base">{program.why}</p>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}>
            <div className="w-12 h-1 bg-accent mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">What Participants Experience</h2>
            <p className="text-muted-foreground leading-relaxed text-base">{program.experience}</p>
          </motion.div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="mb-12">
            <div className="w-12 h-1 bg-accent mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">Core Learning Areas</h2>
          </motion.div>
          <div className="space-y-4">
            {program.modules.map((mod, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-4 bg-muted rounded-xl p-5 border border-border">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-foreground leading-relaxed">{mod}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="mb-12">
            <div className="w-12 h-1 bg-accent mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">What Participants Walk Away With</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {program.outcomes.map((outcome, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/10 border border-white/20 rounded-xl p-6">
                <div className="w-6 h-0.5 bg-accent mb-4" />
                <p className="text-white/85 text-sm leading-relaxed">{outcome}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}>
            <div className="w-12 h-1 bg-accent mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">Organisational Value</h2>
            <p className="text-muted-foreground leading-relaxed text-base">{program.value}</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground text-center">
        <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}>
          <div className="w-12 h-1 bg-accent mx-auto mb-8" />
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">Ready to invest in your women leaders?</h2>
          <p className="text-white/70 text-sm sm:text-base mb-10 max-w-xl mx-auto">Let's co-design the right programme for your team and your goals.</p>
          <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-md bg-accent px-10 text-base font-semibold text-white shadow transition-colors hover:bg-accent/90">
            Start the Conversation <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
