import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Star, Globe, Heart, Lightbulb, Users } from "lucide-react";
import rejiImg from "@assets/WhatsApp_Image_2026-06-12_at_22.58.02_1781323608679.jpeg";
import shwetaImg from "@assets/WhatsApp_Image_2026-06-12_at_22.58.06_1781323608680.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const values = [
  {
    icon: Star,
    title: "Transformative Courage",
    desc: "We challenge comfort zones — including our own. Every programme is designed to push boundaries, not reinforce them.",
  },
  {
    icon: Globe,
    title: "Inclusive Excellence",
    desc: "Women-centric in identity. Inclusive in impact. Our programmes serve all professionals committed to growth.",
  },
  {
    icon: Lightbulb,
    title: "Evidence-Led Practice",
    desc: "Our methodology integrates behavioural psychology, emotional intelligence research, and career intelligence systems.",
  },
  {
    icon: ArrowRight,
    title: "Measurable Impact",
    desc: "68% of our participants secure promotions or expanded roles within 18 months. Results, not rhetoric.",
  },
  {
    icon: Heart,
    title: "Sisterhood & Sponsorship",
    desc: "We build communities of women who champion one another — peer-to-peer, cross-industry, across borders.",
  },
];

const team = [
  {
    name: "Reji Samuel",
    title: "International Keynote Speaker | Transformation Strategist | Education Visionary",
    img: rejiImg,
    quote: "Clarity creates confidence. Confidence creates leaders.",
    bio: "With 35+ years of leadership in education, psychology, and human development, Reji Samuel partners with institutions and leadership teams to drive measurable transformation. His methodology integrates behavioural psychology, emotional intelligence frameworks, career intelligence systems, and leadership development strategy.",
    credentials: [
      "International NLP Practitioner",
      "Global Career Counsellor (UCLA)",
      "Green Belt – Career Counselling (Singapore)",
      "Child Counselling – Malaysia",
    ],
    global: "India · Dubai · Sharjah · United Kingdom · Europe · Africa",
  },
  {
    name: "Shweta Batra",
    title: "Life & Mindset Coach | Counselling Psychologist | Master Trainer | Author | Educator",
    img: shwetaImg,
    quote: "An architect of breakthroughs and sovereign growth.",
    bio: "Award-winning Life & Mindset Coach and Keynote Speaker with a 20-year trajectory as School Principal, National Master Trainer & Educator. Shweta specialises in helping leaders, educators, and parents dismantle internal resistance to reclaim Clarity, Courage, and Action.",
    credentials: [
      "World Record Holder",
      "Award-Winning Life & Mindset Coach",
      "International Keynote Speaker (2025)",
      "Inspiring Woman Psychologist Award (2025)",
      "C20/G20 Strategic Moderator",
    ],
    global: "Mumbai, India · International Stages",
  },
];

export default function About() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #C9A055 0%, transparent 60%)" }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-4xl">
            <div className="w-16 h-1 bg-accent mb-8" />
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              Leadership is not a title.
            </h1>
            <p className="font-serif text-2xl md:text-3xl text-white/80 italic">
              It's a responsibility — and every professional deserves the tools to own it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}>
              <div className="w-12 h-1 bg-accent mb-6" />
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6">Our Journey</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Leaders in Lipstick® was born from a simple but powerful observation: the world has no shortage of capable women. It has a shortage of systems that recognise, develop, and promote them. We set out to change that.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                What began as a focused initiative to equip women managers with the language and confidence of leadership has grown into a comprehensive ecosystem — one that combines structured learning journeys, peer cohorts, behavioural workshops, and measurable outcomes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, Leaders in Lipstick® works with organisations across manufacturing, BFSI, IT, logistics, and education — delivering programmes that move the needle on representation, retention, and performance.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="bg-muted rounded-2xl p-10 border-l-4 border-primary">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Our Vision</h3>
                <p className="font-serif text-lg italic text-primary leading-relaxed">
                  "To be the global catalyst that transforms boardrooms into inclusive spaces, elevating women's leadership representation from 21% to 30% by 2030 — and beyond."
                </p>
              </div>
              <div className="bg-primary rounded-2xl p-10 mt-6">
                <h3 className="font-serif text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-white/85 leading-relaxed">
                  To design and deliver leadership programmes and behavioural interventions that build real-world capability, create lasting mindset shifts, and generate measurable business impact — for women leaders and all professionals committed to growth.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ethos + Two Streams */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="text-center mb-16">
            <div className="w-12 h-1 bg-accent mx-auto mb-6" />
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">Our Ethos</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-lg">
              We believe the most powerful leadership journeys happen when rigorous methodology meets genuine human connection. We don't just train — we transform. And we measure every step of the way.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-primary">
              <div className="text-primary text-4xl font-serif font-bold mb-2">01</div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Women Leadership Journeys</h3>
              <p className="text-muted-foreground leading-relaxed">
                Structured, immersive cohort programmes designed exclusively for women — from emerging managers to board-ready executives. Built around real challenges, real peers, and real outcomes.
              </p>
              <Link href="/programs" className="inline-flex items-center mt-6 text-primary font-medium hover:underline">
                Explore Journeys <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-accent">
              <div className="text-accent text-4xl font-serif font-bold mb-2">02</div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Behavioural Programs for All</h3>
              <p className="text-muted-foreground leading-relaxed">
                20 high-impact workshop modules — from negotiation and emotional intelligence to storytelling and stakeholder management — open to all employees, delivered to build the behaviours that drive organisational performance.
              </p>
              <Link href="/programs" className="inline-flex items-center mt-6 text-accent font-medium hover:underline">
                Explore Workshops <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="text-center mb-16">
            <div className="w-12 h-1 bg-accent mx-auto mb-6" />
            <h2 className="font-serif text-4xl font-bold text-foreground">Core Values</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-muted rounded-xl p-8 hover:shadow-lg transition-shadow border border-border">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-5">
                  <val.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{val.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="text-center mb-16">
            <div className="w-12 h-1 bg-accent mx-auto mb-6" />
            <h2 className="font-serif text-4xl font-bold text-white">Meet the Team</h2>
            <p className="text-white/70 mt-4 max-w-xl mx-auto">The people who built Leaders in Lipstick® — and continue to shape it.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-10">
            {team.map((member, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                <div className="h-72 overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-8">
                  <div className="text-accent font-serif text-4xl mb-2">"</div>
                  <p className="font-serif text-lg italic text-primary mb-6">{member.quote}</p>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{member.title}</p>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-6">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.credentials.map((c, ci) => (
                      <span key={ci} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">{c}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Globe className="h-4 w-4" />
                    <span>{member.global}</span>
                  </div>
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
          <h2 className="font-serif text-4xl font-bold text-foreground mb-6">Ready to work with us?</h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            Whether you're exploring a programme or planning an organisation-wide leadership initiative — we'd love to build it with you.
          </p>
          <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-10 text-base font-medium text-white shadow transition-colors hover:bg-primary/90">
            Let's Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
