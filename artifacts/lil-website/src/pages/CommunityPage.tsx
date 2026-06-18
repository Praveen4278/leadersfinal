import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Users, Heart, Globe, MessageCircle, Star, Zap, Shield } from "lucide-react";
import img1 from "@assets/WhatsApp Image 2026-06-13 at 12.11.39.jpeg";
import img2 from "@assets/WhatsApp Image 2026-06-13 at 12.11.39 (1).jpeg";
import img3 from "@assets/WhatsApp Image 2026-06-13 at 12.11.40 (2).jpeg";
import img4 from "@assets/WhatsApp Image 2026-06-13 at 12.11.40 (3).jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const pillars = [
  {
    icon: Users,
    title: "Peer Learning Circles",
    desc: "Small, curated groups of women leaders who meet regularly to share challenges, exchange insights, and hold each other accountable to their growth goals.",
  },
  {
    icon: Heart,
    title: "Mentorship & Sponsorship",
    desc: "Structured connections between emerging leaders and senior women who have navigated the same terrain — offering guidance, advocacy, and real-world wisdom.",
  },
  {
    icon: Globe,
    title: "Cross-Industry Network",
    desc: "A deliberately diverse community spanning BFSI, tech, manufacturing, healthcare, and beyond — because the best ideas come from outside your own sector.",
  },
  {
    icon: MessageCircle,
    title: "Honest Conversations",
    desc: "Spaces where women can speak freely about the real challenges of leading — without filters, without judgment, and without performing.",
  },
  {
    icon: Zap,
    title: "Leadership Events & Summits",
    desc: "Regular gatherings — virtual and in-person — featuring keynotes, panel discussions, workshops, and networking designed to inspire and connect.",
  },
  {
    icon: Shield,
    title: "Alumni Network",
    desc: "Programme graduates become lifelong members of the Leaders in Lipstick® alumni family — with access to resources, reunions, and ongoing development.",
  },
];

const values = [
  { title: "Courage Over Comfort", desc: "We choose honest conversations over polite ones. Growth lives in the uncomfortable truths." },
  { title: "Lift As You Climb", desc: "Every member of this community is both a learner and a leader. We grow by giving back." },
  { title: "Inclusion Without Exception", desc: "Every woman — regardless of industry, level, or background — has a place in this community." },
  { title: "Action Over Intention", desc: "We don't just talk about change. We build the skills, networks, and confidence to create it." },
];

const testimonials = [
  {
    quote: "The community gave me something no training programme ever had — women who truly understood what I was facing and helped me find my own answers.",
    name: "Senior Manager, BFSI",
  },
  {
    quote: "I joined for the programme. I stayed for the people. The peer connections I built here have changed how I lead, negotiate, and advocate for myself.",
    name: "Director, Technology",
  },
  {
    quote: "For the first time in my career, I felt like I belonged in a room full of leaders. Not in spite of being a woman — because of it.",
    name: "VP, Manufacturing",
  },
];

export default function CommunityPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(ellipse at 70% 30%, #D4AF37 0%, transparent 60%)" }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-4xl">
            <div className="w-16 h-1 bg-accent mb-8" />
            <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Our Community
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-white/80 max-w-2xl leading-relaxed">
              A living, breathing ecosystem of women leaders, organisations, and allies — united by a belief that inclusive leadership changes everything.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-semibold text-primary shadow transition-colors hover:bg-accent hover:text-white">
                Join the Community <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/community" className="inline-flex h-12 items-center justify-center rounded-md border-2 border-white/40 px-8 text-sm font-semibold text-white transition-colors hover:border-white">
                Who Can Join Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Strip */}
      <section className="grid grid-cols-4 h-40 sm:h-56 md:h-72">
        {[img1, img2, img3, img4].map((img, i) => (
          <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="overflow-hidden">
            <img src={img} alt={`Community ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </motion.div>
        ))}
      </section>

      {/* Intro */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-1 bg-accent mb-6" />
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
                More Than a Programme. A Movement.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Leaders in Lipstick® was never just a training company. From the very first cohort, it became clear that the most powerful thing we were building was not a curriculum — it was a community.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A community of women who refuse to shrink. Who champion each other across industries, roles, and geographies. Who believe that when one woman rises, she reaches back and pulls others up with her.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "1 Lakh+", label: "Participants Impacted" },
                { num: "100+", label: "Organisations" },
                { num: "1400+", label: "Workshops Conducted" },
                { num: "8+", label: "Countries" },
              ].map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-muted rounded-2xl p-6 text-center border border-border">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-1">{s.num}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="text-center mb-16">
            <div className="w-12 h-1 bg-accent mx-auto mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Community Offers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Six pillars that make this more than a network — and more than a programme.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-8 border border-border hover:border-primary hover:shadow-md transition-all">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-5">
                  <p.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="text-center mb-16">
            <div className="w-12 h-1 bg-accent mx-auto mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Community Values</h2>
            <p className="text-white/70 max-w-2xl mx-auto">The principles that guide every interaction, every conversation, and every connection in this space.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-white/15 rounded-xl p-8 hover:border-accent transition-colors text-center">
                <div className="w-8 h-0.5 bg-accent mx-auto mb-5" />
                <h3 className="font-serif text-lg font-bold text-white mb-3">{v.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="text-center mb-16">
            <div className="w-12 h-1 bg-accent mx-auto mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Voices from the Community</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-muted rounded-2xl p-8 border border-border">
                <Star className="h-6 w-6 text-accent mb-4" />
                <p className="font-serif text-base italic text-foreground leading-relaxed mb-6">"{t.quote}"</p>
                <div className="w-8 h-0.5 bg-accent mb-3" />
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-center">
        <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}>
          <div className="w-12 h-1 bg-accent mx-auto mb-8" />
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">Find Your Place in This Movement</h2>
          <p className="text-white/75 text-sm sm:text-base mb-10 max-w-xl mx-auto">
            Whether you're a woman leader, an HR professional, or an organisation ready to invest — there is a seat for you here.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-md bg-white px-10 text-base font-semibold text-primary shadow transition-colors hover:bg-accent hover:text-white">
              Join Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/community" className="inline-flex h-14 items-center justify-center rounded-md border-2 border-white/40 px-10 text-base font-semibold text-white transition-colors hover:border-white">
              Who Can Join Us
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
