import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { useEffect, useState, useRef } from "react";
import { ArrowRight, Users, Video, Building2, Mountain, Brain, ArrowUpRight } from "lucide-react";

import heroImg from "@assets/WhatsApp_Image_2026-06-12_at_22.58.02_1781323608679.jpeg";
import eventImg1 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.03_1781323608680.jpeg";
import eventImg2 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.04_1781323608680.jpeg";
import eventImg3 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.05_1781323608680.jpeg";
import eventImg4 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.07_1781323608680.jpeg";
import eventImg5 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.08_1781323608681.jpeg";
import rejiImg from "@assets/WhatsApp_Image_2026-06-12_at_22.58.02_1781323608679.jpeg";

const TYPING_WORDS = ["Leadership.", "Influence.", "Excellence.", "Impact."];

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
  },
  {
    icon: "◈",
    title: "Behavioural Intelligence",
    desc: "High-impact workshops on emotional intelligence, negotiation, influence, communication — skills that move organisations forward.",
    bg: "bg-accent",
    text: "text-foreground",
    border: "border-foreground/20",
    btn: "border-foreground text-foreground hover:bg-foreground hover:text-white",
  },
  {
    icon: "◎",
    title: "Strategic & Team Skills",
    desc: "Cross-functional capability building — problem solving, collaboration, strategic thinking, and high-performance team dynamics.",
    bg: "bg-[#f5ece8]",
    text: "text-foreground",
    border: "border-foreground/20",
    btn: "border-primary text-primary hover:bg-primary hover:text-white",
  },
  {
    icon: "⬡",
    title: "AI Adoption & Literacy",
    desc: "Future-ready programmes that embed practical AI literacy and responsible adoption into everyday leadership and decision-making.",
    bg: "bg-foreground",
    text: "text-white",
    border: "border-white/20",
    btn: "border-white text-white hover:bg-white hover:text-foreground",
  },
];

const formats = [
  { icon: Users, title: "Immersive Cohorts", desc: "Multi-session journeys with peer accountability and structured progression." },
  { icon: Building2, title: "Classroom Training", desc: "Facilitator-led in-person workshops at your premises or venue." },
  { icon: Video, title: "Virtual Workshops", desc: "Live online sessions for global and distributed teams." },
  { icon: Mountain, title: "Outbound Programs", desc: "Experiential learning that disrupts thinking through real-world doing." },
];

import {
  SiMastercard,
  SiDhl,
  SiPanasonic,
  SiHp,
  SiWipro,
} from "react-icons/si";

type HomeClient = {
  name: string;
  Icon: any;
  color: string;
};

const clients: HomeClient[] = [
  { name: "Mastercard", Icon: SiMastercard, color: "#EB001B" },
  { name: "DHL", Icon: SiDhl, color: "#CC0000" },
  { name: "Panasonic", Icon: SiPanasonic, color: "#0070C0" },
  { name: "HP", Icon: SiHp, color: "#0096D6" },
  { name: "Wipro", Icon: SiWipro, color: "#341C57" },
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
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-white/60 text-sm uppercase tracking-widest mb-6 font-medium">
              Women-centric in identity. Inclusive in impact.
            </p>
            <h1 className="font-sans text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
              Lead. Influence. Transform.
            </h1>
            <div className="font-sans text-4xl md:text-6xl font-bold text-accent leading-tight mb-8 h-16 md:h-20 flex items-center">
              <span>{typed}</span>
              <span className="cursor-blink ml-1">|</span>
            </div>
            <p className="text-white/80 text-base md:text-lg max-w-xl mb-10 font-light leading-relaxed">
              Bespoke leadership and behavioural training for organisations that believe human capability is the ultimate competitive advantage.
            </p>
            <div className="flex items-center gap-6 flex-wrap">
              <Link href="/programs">
                <button className="w-12 h-12 rounded-full border-2 border-white text-white flex items-center justify-center hover:bg-white hover:text-foreground transition-all duration-300">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
              <Link href="/programs" className="text-white/80 text-sm font-medium hover:text-white transition-colors">
                Explore Programs
              </Link>
              <a
                href="/LIL - Brochure - Corporate Employees - Brochure V1.1.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white text-white text-sm font-semibold tracking-wide hover:bg-white hover:text-[#70162C] transition-all duration-300"
              >
                <span>Download Brochure</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── EDITORIAL TWO-COLUMN ── */}
      <section className="py-0 bg-white">
        <div className="grid md:grid-cols-2 min-h-[80vh]">
          {/* Left column */}
          <div className="flex flex-col justify-between p-10 lg:p-16 border-r border-border">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-accent leading-tight">
                Designed for women...
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8"
            >
              <img
                src={eventImg1}
                alt="Leadership workshop"
                className="w-full h-72 md:h-80 object-cover"
              />
            </motion.div>
          </div>

          {/* Right column */}
          <div className="flex flex-col justify-between p-10 lg:p-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={eventImg2}
                alt="Impact session"
                className="w-full h-72 md:h-80 object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8"
            >
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight mb-6">
                ...built for impact
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-md">
                Leaders in Lipstick® has spent over a decade refining the science of leadership development. We integrate behavioural psychology, emotional intelligence frameworks, and real-world application to create measurable, lasting change.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-wider hover:gap-4 transition-all duration-300">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── DELIVERY FORMATS ── */}
      <section className="bg-[#f0eef5] py-0">
        <div className="grid md:grid-cols-2 min-h-[80vh]">
          {/* Left: image + format icons */}
          <div className="p-10 lg:p-16 flex flex-col gap-8">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              src={eventImg3}
              alt="Training session"
              className="w-full h-72 object-cover"
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
          <div className="p-10 lg:p-16 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
                Meeting your people where they are
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed max-w-md">
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
              className="w-full h-64 object-cover mt-8"
            />
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
            <h2 className="font-serif text-4xl font-bold text-foreground mb-3">Our Programs</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
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
              className={`${p.bg} ${p.text} p-10 lg:p-12 flex flex-col min-h-[480px] border-r ${p.border} last:border-r-0`}
            >
              <div className="text-4xl mb-8 opacity-60">{p.icon}</div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-6 leading-tight">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed opacity-80 flex-1">{p.desc}</p>
              <Link href="/programs" className={`mt-8 inline-block border px-6 py-3 text-xs font-medium uppercase tracking-wider transition-all duration-300 ${p.btn}`}>
                Read More
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── IMPACT STATS ── */}
      <section className="bg-secondary py-20 text-foreground">
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
                <div className="font-serif text-5xl md:text-6xl font-bold text-primary mb-2">{s.num}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR CLIENTS ── */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-serif text-4xl font-bold text-center text-foreground mb-16"
          >
            Our Clients
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-x-12 gap-y-8 items-center justify-items-center">
            {clients.map((client, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-center"
              >
                <div className="w-24 h-24 rounded-full bg-primary/8 border border-primary/15 flex items-center justify-center mx-auto mb-2">
                <client.Icon
                  className="h-12 w-12"
                  style={{ color: client.color }}
                />
              </div>
                <p className="text-xs text-muted-foreground font-medium">{client.name}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/clients"
              className="inline-block border border-foreground px-8 py-3 text-sm font-medium uppercase tracking-wider text-foreground hover:bg-foreground hover:text-white transition-all duration-300"
            >
              See All Clients
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="bg-[#f0eef5] py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
          <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-8">
            <span className="text-white font-serif text-xl font-bold">"</span>
          </div>
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl md:text-4xl italic text-foreground leading-relaxed mb-8"
          >
            Leaders in Lipstick® gave our entire organisation a shared language for leadership — and our women leaders a community to grow with.
          </motion.blockquote>
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            — Head of L&D, Financial Services
          </p>
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
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10">
                Let's build something<br />
                <span className="text-accent">extraordinary.</span>
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-primary text-white px-10 py-4 text-sm font-medium uppercase tracking-wider hover:bg-primary/80 transition-all duration-300"
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
