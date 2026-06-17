import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, MapPin, Users, Layers, Star, CheckCircle } from "lucide-react";
import img1 from "@assets/WhatsApp Image 2026-06-13 at 12.11.40 (1).jpeg";
import img2 from "@assets/WhatsApp Image 2026-06-13 at 12.11.40 (2).jpeg";
import img3 from "@assets/worksop1.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const benefits = [
  { icon: Users, title: "In-the-Room Energy", desc: "Nothing replicates the energy of a live room — the eye contact, the spontaneous breakthroughs, the trust that builds between peers." },
  { icon: Layers, title: "Fully Customisable", desc: "From half-day intensives to multi-day residential retreats — we design the format that fits your schedule, venue, and objectives." },
  { icon: MapPin, title: "At Your Premises", desc: "We come to you. Our facilitators travel to your offices, campuses, or offsites — minimising disruption to your team's workflow." },
  { icon: Star, title: "Expert Facilitation", desc: "Every classroom session is delivered by a senior facilitator with deep expertise in leadership development and adult learning." },
];

const programmes = [
  {
    title: "Women Leadership Masterclass",
    audience: "Women Managers & Senior Leaders",
    duration: "1 Day / 2 Days",
    desc: "An intensive in-person workshop experience covering leadership identity, executive presence, strategic communication, and navigating organisational dynamics.",
    outcomes: ["Sharper leadership identity", "Stronger executive presence", "Practical influencing toolkit", "Peer network established"],
  },
  {
    title: "Team Effectiveness Workshop",
    audience: "Cross-functional teams",
    duration: "1 Day",
    desc: "Designed for intact teams, this facilitated session surfaces hidden dynamics, aligns on shared values, and builds the psychological safety needed for peak performance.",
    outcomes: ["Shared team charter", "Improved trust levels", "Clearer communication norms", "Conflict resolution framework"],
  },
  {
    title: "Manager as Coach",
    audience: "People Managers — All Levels",
    duration: "1 Day",
    desc: "A hands-on, skills-based workshop that transforms how managers have conversations — moving from directive to coaching, and from fixing to enabling.",
    outcomes: ["GROW model mastery", "Active listening skills", "Coaching conversation practice", "Feedback that lands"],
  },
  {
    title: "Leadership Communication Intensive",
    audience: "Mid to Senior Managers",
    duration: "1 Day",
    desc: "A high-energy day focused entirely on communication — presenting with impact, storytelling, handling difficult conversations, and speaking up in high-stakes moments.",
    outcomes: ["Structured storytelling skill", "Presentation confidence", "Difficult conversation scripts", "Impromptu speaking ability"],
  },
];

const process = [
  { step: "01", title: "Discovery Call", desc: "We understand your team's context, culture, and learning objectives." },
  { step: "02", title: "Programme Design", desc: "We customise the agenda, case studies, and exercises for your specific group." },
  { step: "03", title: "Pre-Work", desc: "Participants complete a short diagnostic or reflection exercise before the session." },
  { step: "04", title: "Facilitated Session", desc: "An immersive, energising day (or days) led by our expert facilitators." },
  { step: "05", title: "Post-Session Support", desc: "Follow-up resources, action commitments, and optional coaching check-ins." },
];

export default function ClassroomTraining() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-32 bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(ellipse at 80% 20%, #D4AF37 0%, transparent 55%)" }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-4xl">
            <div className="inline-block bg-accent/20 text-accent text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-accent/30">
              Programme Format
            </div>
            <div className="w-16 h-1 bg-accent mb-8" />
            <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Classroom Training
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-white/80 max-w-2xl leading-relaxed">
              In-person, facilitated workshops that create the focused space, human connection, and transformative energy that only a live room can deliver.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-8 text-sm font-semibold text-white shadow transition-colors hover:bg-accent/90">
                Plan a Workshop <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/programs" className="inline-flex h-12 items-center justify-center rounded-md border-2 border-white/40 px-8 text-sm font-semibold text-white transition-colors hover:border-white">
                All Programmes
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Strip */}
      <section className="py-0">
        <div className="grid grid-cols-3 h-52 sm:h-72 md:h-96">
          {[img1, img2, img3].map((img, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }} className="overflow-hidden">
              <img src={img} alt={`Training ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="text-center mb-16">
            <div className="w-12 h-1 bg-accent mx-auto mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">The Power of In-Person Learning</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Some conversations, breakthroughs, and connections can only happen in the room together.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, i) => (
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

      {/* Programmes */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="mb-16">
            <div className="w-12 h-1 bg-accent mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Classroom Programmes</h2>
            <p className="text-muted-foreground max-w-2xl">All programmes can be delivered at your premises or an external venue of your choice.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {programmes.map((prog, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-border hover:border-primary hover:shadow-md transition-all">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">{prog.audience}</span>
                  <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-semibold">{prog.duration}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{prog.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{prog.desc}</p>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Participants Will Leave With</p>
                  <div className="space-y-2">
                    {prog.outcomes.map((o, oi) => (
                      <div key={oi} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                        {o}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="text-center mb-16">
            <div className="w-12 h-1 bg-accent mx-auto mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white">How It Works</h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {process.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center">
                <div className="font-serif text-5xl font-bold text-accent/30 mb-2">{p.step}</div>
                <h3 className="font-serif text-lg font-bold text-white mb-2">{p.title}</h3>
                <div className="w-6 h-0.5 bg-accent mx-auto mb-3" />
                <p className="text-white/70 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background text-center">
        <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}>
          <div className="w-12 h-1 bg-accent mx-auto mb-8" />
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">Bring us into your organisation</h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-10 max-w-xl mx-auto">
            We'll come to you. Tell us about your team size, goals, and preferred dates — and we'll design something exceptional.
          </p>
          <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-10 text-base font-semibold text-white shadow transition-colors hover:bg-primary/90">
            Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
