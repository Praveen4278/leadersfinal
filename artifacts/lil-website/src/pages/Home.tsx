import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { useEffect, useState, useRef } from "react";
import { ArrowRight, Users, Video, Building2, Mountain, Brain, ArrowUpRight, Download } from "lucide-react";

import heroImg from "@assets/WhatsApp_Image_2026-06-12_at_22.58.02_1781323608679.jpeg";
import eventImg1 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.03_1781323608680.jpeg";
import eventImg2 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.04_1781323608680.jpeg";
import eventImg3 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.05_1781323608680.jpeg";
import eventImg4 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.07_1781323608680.jpeg";
import eventImg5 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.08_1781323608681.jpeg";
import rejiImg from "@assets/WhatsApp_Image_2026-06-12_at_22.58.02_1781323608679.jpeg";

const TYPING_WORDS = ["Leadership.", "Influence.", "Excellence.", "Impact."];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

function useTypingEffect(words: string[], speed = 100, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }

    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return displayed;
}

const programs = [
  {
    icon: "✦",
    title: "Women Leadership Journeys",
    desc: "Flagship cohort programmes designed to elevate women managers and senior leaders into their next chapter — with clarity, confidence, and community.",
    bg: "bg-primary",
    text: "text-white",
    border: "border-white/20",
    btn: "border-white text-white hover:bg-white hover:text-primary",
    href: "/women-leadership",
  },
  {
    icon: "◈",
    title: "Behavioural Intelligence",
    desc: "High-impact workshops on emotional intelligence, negotiation, influence, communication — skills that move organisations forward.",
    bg: "bg-accent",
    text: "text-foreground",
    border: "border-foreground/20",
    btn: "border-foreground text-foreground hover:bg-foreground hover:text-white",
    href: "/behavioural-intelligence",
  },
  {
    icon: "◎",
    title: "Strategic & Team Skills",
    desc: "Cross-functional capability building — problem solving, collaboration, strategic thinking, and high-performance team dynamics.",
    bg: "bg-[#f5ece8]",
    text: "text-foreground",
    border: "border-foreground/20",
    btn: "border-primary text-primary hover:bg-primary hover:text-white",
    href: "/strategic-team-skills",
  },
  {
    icon: "⬡",
    title: "AI Adoption & Literacy",
    desc: "Future-ready programmes that embed practical AI literacy and responsible adoption into everyday leadership and decision-making.",
    bg: "bg-foreground",
    text: "text-white",
    border: "border-white/20",
    btn: "border-white text-white hover:bg-white hover:text-foreground",
    href: "/ai-training",
  },
];

const formats = [
  { icon: Users, title: "Immersive Cohorts", desc: "Multi-session journeys with peer accountability and structured progression." },
  { icon: Building2, title: "Classroom Training", desc: "Facilitator-led in-person workshops at your premises or venue." },
  { icon: Video, title: "Virtual Workshops", desc: "Live online sessions for global and distributed teams." },
  { icon: Mountain, title: "Outbound Programs", desc: "Experiential learning that disrupts thinking through real-world doing." },
];

const stats = [
  { num: "2000+", label: "Women Impacted" },
  { num: "50+", label: "Organisations" },
  { num: "68%", label: "Promotion Rate" },
  { num: "8+", label: "Countries" },
];

export default function Home() {
  const typed = useTypingEffect(TYPING_WORDS);

  return (
    <div className="w-full overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] flex items-end pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-4xl">
            <p className="text-white/60 text-sm uppercase tracking-widest mb-6 font-medium">
              Women-centric in identity. Inclusive in impact.
            </p>
            <h1 className="font-sans text-3xl sm:text-4xl md:text-7xl font-bold text-white leading-tight mb-4">
              Lead. Influence. Transform.
            </h1>
            <div className="font-sans text-2xl sm:text-3xl md:text-6xl font-bold text-accent leading-tight mb-8 h-12 md:h-20 flex items-center">
              <span>{typed}</span>
              <span className="cursor-blink ml-1">|</span>
            </div>
            <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-xl mb-10 font-light leading-relaxed">
              Bespoke leadership and behavioural training for organisations that believe human capability is the ultimate competitive advantage.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <Link href="/programs">
                <button className="px-8 py-4 rounded-full bg-accent text-foreground text-sm md:text-base font-bold uppercase tracking-wider hover:bg-white hover:shadow-lg transition-all duration-300 min-h-[44px]">
                  Explore Programs
                </button>
              </Link>
              <div className="flex items-center gap-3">
                <a
                  href="/LIL - Brochure - Corporate Employees - Brochure V1.1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-4 rounded-full border-2 border-white text-white text-sm font-semibold tracking-wide hover:bg-white hover:text-[#70162C] transition-all duration-300 min-h-[44px]"
                >
                  View Brochure
                </a>
                <a
                  href="/LIL - Brochure - Corporate Employees - Brochure V1.1.pdf"
                  download
                  rel="noopener noreferrer"
                  title="Download PDF"
                  className="flex items-center gap-1.5 text-white/70 text-xs font-medium hover:text-white transition-colors border border-white/30 rounded-full px-4 py-2 hover:border-white min-h-[44px]"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download PDF
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── IMPACT STATS ── */}
      <section className="bg-secondary py-16 text-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold text-primary mb-2">{s.num}</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDITORIAL TWO-COLUMN ── */}
      <section className="py-0 bg-white">
        <div className="grid md:grid-cols-2 min-h-[80vh]">
          {/* Left column */}
          <div className="flex flex-col justify-between p-10 lg:p-16 border-b md:border-b-0 md:border-r border-border">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-accent leading-tight">
                Designed for women...
              </h2>
            </motion.div>
            {/* Mobile-only Image (eventImg2 - women image) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 block md:hidden"
            >
              <img
                src={eventImg2}
                alt="Impact session"
                loading="lazy"
                className="w-full h-72 md:h-80 object-cover"
              />
            </motion.div>
            {/* Desktop-only Image (eventImg1 - next image) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 hidden md:block"
            >
              <img
                src={eventImg1}
                alt="Leadership workshop"
                loading="lazy"
                className="w-full h-72 md:h-80 object-cover"
              />
            </motion.div>
          </div>

          {/* Right column */}
          <div className="flex flex-col justify-between p-10 lg:p-16">
            {/* Desktop-only Image (eventImg2 - women image) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="hidden md:block"
            >
              <img
                src={eventImg2}
                alt="Impact session"
                loading="lazy"
                className="w-full h-72 md:h-80 object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 md:mt-0"
            >
              <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight mb-6">
                ...built for impact
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-md">
                Leaders in Lipstick® has spent over a decade refining the science of leadership development. We integrate behavioural psychology, emotional intelligence frameworks, and real-world application to create measurable, lasting change.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-wider hover:gap-4 transition-all duration-300 min-h-[44px]">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
            {/* Mobile-only Image (eventImg1 - next image) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 block md:hidden"
            >
              <img
                src={eventImg1}
                alt="Leadership workshop"
                loading="lazy"
                className="w-full h-72 md:h-80 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="bg-[#f0eef5] py-16">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
          <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-8">
            <span className="text-white font-serif text-xl font-bold">"</span>
          </div>
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-xl sm:text-2xl md:text-4xl italic text-foreground leading-relaxed mb-8"
          >
            Leaders in Lipstick® gave our entire organisation a shared language for leadership — and our women leaders a community to grow with.
          </motion.blockquote>
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            — Head of L&D, Financial Services
          </p>
        </div>
      </section>

      {/* ── DELIVERY FORMATS ── */}
      <section className="bg-[#f0eef5] py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: image + format icons */}
            <div className="flex flex-col gap-8">
              <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              src={eventImg3}
              alt="Training session"
              loading="lazy"
              className="w-full h-72 md:h-80 object-cover rounded-lg"
            />
              <div className="grid grid-cols-2 gap-6">
                {formats.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <f.icon className="h-6 w-6 text-primary mb-2" strokeWidth={1.5} />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-1">{f.title}</h4>
                    <p className="text-sm text-muted-foreground leading-snug">{f.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: heading + image */}
            <div className="flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
                  Meeting your people where they are
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Every organisation learns differently. That is why we offer flexible, facilitator-led formats that meet your people where they are — across roles, locations, and languages.
                </p>
              </motion.div>
              <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              src={eventImg4}
              alt="Workshop energy"
              loading="lazy"
              className="w-full h-72 md:h-80 object-cover rounded-lg"
            />
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR PROGRAMS ── */}
      <section className="bg-white">
        <div className="container mx-auto px-6 lg:px-12 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">Our Programs</h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
              Designed to build real-world leadership capability, inspire performance, and create lasting organisational impact.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`${p.bg} ${p.text} p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col min-h-[320px] md:min-h-[480px] border-r ${p.border} last:border-r-0`}
            >
              <div className="text-3xl md:text-4xl mb-6 md:mb-8 opacity-60">{p.icon}</div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 leading-tight">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed opacity-80 flex-1">{p.desc}</p>
              <Link href={p.href} className={`mt-6 md:mt-8 inline-block border px-4 py-2 md:px-6 md:py-3 text-[10px] sm:text-xs font-medium uppercase tracking-wider transition-all duration-300 min-h-[44px] ${p.btn}`}>
                Read More
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── GALLERY STRIP ── */}
      <section className="bg-white py-0 overflow-hidden">
        <div className="grid grid-cols-3 md:grid-cols-5 h-56 md:h-72">
          {[eventImg1, eventImg2, eventImg3, eventImg4, eventImg5].map((img, i) => (
            <div key={i} className="overflow-hidden">
              <img
                src={img}
                alt={`Event ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-foreground py-20 md:py-28 text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* QR Code Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <a href="https://leadersinlipstick.in" target="_blank" rel="noopener noreferrer">
                <img
                  src="/qr.png"
                  alt="QR Code to leadersinlipstick.in"
                  loading="lazy"
                  className="w-40 h-40 md:w-48 md:h-48 rounded-xl shadow-2xl bg-white p-2"
                />
              </a>
              <p className="text-white/70 text-xs mt-4 uppercase tracking-widest">
                Scan to visit leadersinlipstick.in
              </p>
            </motion.div>

            {/* Main CTA Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <p className="text-white/50 text-xs uppercase tracking-widest mb-6">Ready to invest in leadership?</p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-10">
                Let's build something<br />
                <span className="text-accent">extraordinary.</span>
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-primary text-white px-8 py-3 sm:px-10 sm:py-4 text-xs sm:text-sm font-medium uppercase tracking-wider hover:bg-primary/80 transition-all duration-300 min-h-[44px]"
              >
                Partner With Us <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
