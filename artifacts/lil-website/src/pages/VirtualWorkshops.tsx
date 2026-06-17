import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Wifi, Globe, Clock, Monitor, MessageSquare, BarChart3 } from "lucide-react";
import img1 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.02_1781323608679.jpeg";
import img2 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.03_1781323608680.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const features = [
  { icon: Globe, title: "Globally Accessible", desc: "Deliver consistent leadership development across geographies — no travel required, zero compromise on quality." },
  { icon: Clock, title: "Time-Zone Friendly", desc: "Sessions are designed in focused 90–120 minute blocks, minimising screen fatigue while maximising depth." },
  { icon: Monitor, title: "Highly Interactive", desc: "Breakout rooms, digital whiteboards, live polls, and peer exercises — not a passive webinar." },
  { icon: MessageSquare, title: "Pre & Post Work", desc: "Each session is supported by pre-reads, reflection tools, and post-session application assignments." },
  { icon: Wifi, title: "Tech-Platform Neutral", desc: "Delivered on your preferred platform — Zoom, Teams, Google Meet — with zero setup burden on your team." },
  { icon: BarChart3, title: "Impact Tracked", desc: "Post-session surveys and learning analytics give you clear visibility on engagement and knowledge uptake." },
];

const workshops = [
  {
    category: "Women Leadership",
    items: [
      { title: "Navigating the Hybrid Workplace", desc: "Strategies for women leaders to maintain visibility, influence, and credibility in remote and hybrid environments.", duration: "2 hrs" },
      { title: "Building Your Digital Personal Brand", desc: "Craft a compelling professional identity on LinkedIn and in virtual spaces — be known for what matters.", duration: "2 hrs" },
      { title: "Virtual Executive Presence", desc: "Command attention, project confidence, and build trust through the screen — just as you would in person.", duration: "90 min" },
    ],
  },
  {
    category: "All Employees",
    items: [
      { title: "Effective Remote Communication", desc: "Write with clarity, speak with precision, and reduce the noise that comes with distributed teams.", duration: "90 min" },
      { title: "Mindfulness for Better Productivity", desc: "Science-backed practices to manage attention, reduce digital overwhelm, and perform at your best.", duration: "90 min" },
      { title: "Resilience in Uncertain Times", desc: "Build the mental agility to adapt, recover, and grow — regardless of external conditions.", duration: "2 hrs" },
      { title: "Managing Remote Teams", desc: "For people managers: create psychological safety, accountability, and performance across distributed teams.", duration: "2 hrs" },
    ],
  },
];

export default function VirtualWorkshops() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-32 bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(ellipse at 20% 60%, #D4AF37 0%, transparent 55%)" }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-4xl">
            <div className="inline-block bg-accent/20 text-accent text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-accent/30">
              Programme Format
            </div>
            <div className="w-16 h-1 bg-accent mb-8" />
            <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Virtual Workshops
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Live, facilitated online sessions designed for global and distributed teams — delivered with the same energy and depth as in-person training.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-8 text-sm font-semibold text-white shadow transition-colors hover:bg-accent/90">
                Book a Session <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/programs" className="inline-flex h-12 items-center justify-center rounded-md border-2 border-white/40 px-8 text-sm font-semibold text-white transition-colors hover:border-white">
                All Programmes
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image + Intro */}
      <section className="py-0 bg-muted">
        <div className="grid md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="overflow-hidden h-72 md:h-auto">
            <img src={img1} alt="Virtual session" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-center px-8 md:px-16 py-16">
            <div className="w-10 h-1 bg-accent mb-6" />
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">Not a Webinar. A Workshop.</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We design our virtual sessions as genuinely immersive experiences — not talking-head presentations. Participants come prepared, engage deeply, and leave with actions they can apply immediately.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every session is capped at 20 participants to ensure personal attention, rich discussion, and the psychological safety required for honest reflection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="text-center mb-16">
            <div className="w-12 h-1 bg-accent mx-auto mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">What Makes Our Virtual Sessions Different</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-5 p-6 rounded-xl border border-border hover:border-primary hover:shadow-sm transition-all">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Menu */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="mb-16">
            <div className="w-12 h-1 bg-accent mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Workshop Menu</h2>
            <p className="text-muted-foreground max-w-2xl">Choose from our curated catalogue or request a bespoke session designed around your team's specific challenges.</p>
          </motion.div>
          <div className="space-y-14">
            {workshops.map((group, gi) => (
              <motion.div key={gi} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h3 className="font-serif text-xl font-bold text-primary mb-6">{group.category}</h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  {group.items.map((ws, i) => (
                    <div key={i} className="bg-white rounded-xl p-6 border border-border hover:border-accent hover:shadow-md transition-all">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h4 className="font-serif text-base font-bold text-foreground">{ws.title}</h4>
                        <span className="text-xs bg-accent/10 text-accent px-2.5 py-1 rounded-full font-semibold shrink-0">{ws.duration}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{ws.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="h-64 md:h-96 overflow-hidden">
        <img src={img2} alt="Workshop group" className="w-full h-full object-cover object-center" />
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-center">
        <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}>
          <div className="w-12 h-1 bg-accent mx-auto mb-8" />
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">Bring a virtual workshop to your team</h2>
          <p className="text-white/75 text-sm sm:text-base mb-10 max-w-xl mx-auto">
            Available as standalone sessions or as part of a blended learning journey. Minimum group size: 10 participants.
          </p>
          <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-md bg-white px-10 text-base font-semibold text-primary shadow transition-colors hover:bg-accent hover:text-white">
            Request a Session <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
