import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import {
  SiMastercard,
  SiDhl,
  SiXiaomi,
  SiPanasonic,
  SiHp,
  SiWipro,
} from "react-icons/si";
import type { IconType } from "react-icons";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

type Client = {
  name: string;
  abbr?: string;
  bg?: string;
  fg?: string;
  Icon?: IconType;
  iconStyle?: React.CSSProperties;
};

const sectors: { label: string; accentClass: string; clients: Client[] }[] = [
  {
    label: "Manufacturing",
    accentClass: "text-primary",
    clients: [
      { name: "Saint Gobain",       abbr: "SG",  bg: "#E42313", fg: "#fff" },
      { name: "Ajanta Pharma",      abbr: "AP",  bg: "#004B87", fg: "#fff" },
      { name: "Mahindra & Mahindra",abbr: "M&M", bg: "#BE0000", fg: "#fff" },
      { name: "Pidilite Industries",abbr: "PI",  bg: "#2E3990", fg: "#fff" },
      { name: "Panasonic", Icon: SiPanasonic, iconStyle: { color: "#0070C0", fontSize: 32 } },
      { name: "Xiaomi",    Icon: SiXiaomi,   iconStyle: { color: "#FF6900", fontSize: 32 } },
      { name: "Invisalign",         abbr: "IV",  bg: "#007DB8", fg: "#fff" },
      { name: "HP",        Icon: SiHp,       iconStyle: { color: "#0096D6", fontSize: 32 } },
      { name: "D'decor",            abbr: "DD",  bg: "#003366", fg: "#fff" },
      { name: "Yasham",             abbr: "YA",  bg: "#5C2D91", fg: "#fff" },
      { name: "Ashtech",            abbr: "AT",  bg: "#2E7D32", fg: "#fff" },
    ],
  },
  {
    label: "BFSI",
    accentClass: "text-accent",
    clients: [
      { name: "ICICI Bank",              abbr: "ICICI", bg: "#F96922", fg: "#fff" },
      { name: "IDBI Bank",               abbr: "IDBI",  bg: "#CC0000", fg: "#fff" },
      { name: "Bank of Baroda",          abbr: "BOB",   bg: "#F26522", fg: "#fff" },
      { name: "IOB",                     abbr: "IOB",   bg: "#003087", fg: "#fff" },
      { name: "IIFL",                    abbr: "IIFL",  bg: "#E8191D", fg: "#fff" },
      { name: "Axis Bank",               abbr: "AXIS",  bg: "#970022", fg: "#fff" },
      { name: "Yes Bank",                abbr: "YES",   bg: "#0B3D91", fg: "#fff" },
      { name: "Citibank",                abbr: "CITI",  bg: "#003B70", fg: "#fff" },
      { name: "CSB Bank",                abbr: "CSB",   bg: "#005AAB", fg: "#fff" },
      { name: "Corporation Bank",        abbr: "CORP",  bg: "#003B5C", fg: "#fff" },
      { name: "Sampath Bank",            abbr: "SB",    bg: "#1B3F8A", fg: "#fff" },
      { name: "Bank of Ceylon",          abbr: "BOC",   bg: "#003F7F", fg: "#fff" },
      { name: "Julius Baer",             abbr: "JB",    bg: "#1A1A1A", fg: "#C9A055" },
      { name: "HDFC Bank",               abbr: "HDFC",  bg: "#004C8F", fg: "#fff" },
      { name: "Birla Sunlife Insurance", abbr: "BSL",   bg: "#E63027", fg: "#fff" },
      { name: "Max Life Insurance",      abbr: "MAX",   bg: "#EE1C25", fg: "#fff" },
      { name: "LIC",                     abbr: "LIC",   bg: "#004B87", fg: "#FFD700" },
      { name: "Mastercard", Icon: SiMastercard, iconStyle: { color: "#EB001B", fontSize: 36 } },
      { name: "Kotak Group",             abbr: "KG",    bg: "#EF4B23", fg: "#fff" },
      { name: "Nation Trust Bank",       abbr: "NTB",   bg: "#1B4A8A", fg: "#fff" },
    ],
  },
  {
    label: "IT & Technology",
    accentClass: "text-primary",
    clients: [
      { name: "Tech Mahindra",     abbr: "TM",   bg: "#BE0000", fg: "#fff" },
      { name: "LTIMindtree",       abbr: "LTI",  bg: "#00813E", fg: "#fff" },
      { name: "Next Gen",          abbr: "NG",   bg: "#0082C8", fg: "#fff" },
      { name: "Eurofins",          abbr: "EF",   bg: "#009A44", fg: "#fff" },
      { name: "Wipro", Icon: SiWipro, iconStyle: { color: "#341C57", fontSize: 32 } },
      { name: "TCS",               abbr: "TCS",  bg: "#0057A8", fg: "#fff" },
      { name: "Zensar Technologies",abbr: "ZEN", bg: "#003087", fg: "#fff" },
      { name: "Mphasis",           abbr: "MPH",  bg: "#D7242A", fg: "#fff" },
      { name: "Genesis",           abbr: "GEN",  bg: "#0063A3", fg: "#fff" },
      { name: "Hexaware",          abbr: "HEX",  bg: "#E31837", fg: "#fff" },
      { name: "CleverTap",         abbr: "CT",   bg: "#FF6900", fg: "#fff" },
    ],
  },
  {
    label: "Logistics & Supply Chain",
    accentClass: "text-accent",
    clients: [
      { name: "DHL", Icon: SiDhl, iconStyle: { color: "#CC0000", fontSize: 42 } },
      { name: "Foodland",          abbr: "FL",   bg: "#2E7D32", fg: "#fff" },
      { name: "Mahindra & Mahindra",abbr: "M&M", bg: "#BE0000", fg: "#fff" },
    ],
  },
];

function initAbbr(name: string) {
  return name
    .split(/[\s&]+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

function ClientCard({ client, index }: { client: Client; index: number }) {
  const { name, abbr, bg, fg, Icon, iconStyle } = client;
  const display = abbr ?? initAbbr(name);

  return (
    <motion.div
      data-testid={`card-client-${index}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: (index % 6) * 0.05 }}
      className="flex flex-col items-center justify-center gap-2.5 bg-white rounded-xl p-5 shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
      style={{ minHeight: 104 }}
    >
      {Icon ? (
        <Icon style={iconStyle} className="shrink-0" />
      ) : (
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 shadow-sm"
          style={{ backgroundColor: bg ?? "#7B1532" }}
        >
          <span
            className="font-bold text-[10px] leading-none tracking-wide text-center"
            style={{ color: fg ?? "#fff" }}
          >
            {display}
          </span>
        </div>
      )}
      <span className="text-[11px] font-semibold text-center text-muted-foreground leading-tight max-w-full px-1">
        {name}
      </span>
    </motion.div>
  );
}

export default function Clients() {
  const allClients = sectors.flatMap((s) => s.clients);

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-32 bg-foreground overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(ellipse at 60% 40%, #C9A055 0%, transparent 60%)" }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-4xl">
            <div className="w-16 h-1 bg-accent mb-8" />
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Built in Partnership. Scaled Through Trust.
            </h1>
            <p className="text-xl text-white/75 max-w-3xl">
              A growing list of organisations that invest in inclusive leadership — and choose Leaders in Lipstick® to help them deliver it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "50+", label: "Organisations" },
              { num: "4",   label: "Industry Sectors" },
              { num: "8+",  label: "Countries" },
              { num: "2000+", label: "Leaders Trained" },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-serif text-4xl font-bold text-accent mb-1">{s.num}</div>
                <div className="text-sm text-white/70 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientele by Sector */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="text-center mb-16">
            <div className="w-12 h-1 bg-accent mx-auto mb-6" />
            <h2 className="font-serif text-4xl font-bold text-foreground">Our Clientele</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              From global multinationals to trusted Indian institutions — organisations that invest in their people choose Leaders in Lipstick®.
            </p>
          </motion.div>

          <div className="space-y-20">
            {sectors.map((sector, si) => (
              <motion.div
                key={si}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: si * 0.08 }}
              >
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-1 h-12 bg-accent rounded-full shrink-0" />
                  <h3 className={`font-serif text-3xl font-bold ${sector.accentClass}`}>
                    {sector.label}
                  </h3>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                  {sector.clients.map((client, ci) => (
                    <ClientCard key={ci} client={client} index={ci} />
                  ))}
                </div>
                {si < sectors.length - 1 && <div className="mt-20 border-b border-border" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <section className="py-6 bg-muted overflow-hidden border-y border-border">
        <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap">
          {[...allClients, ...allClients].map((client, i) => (
            <span key={i} className="mx-6 text-foreground/40 font-medium text-xs uppercase tracking-widest shrink-0">
              {client.name} <span className="mx-3 text-accent">·</span>
            </span>
          ))}
        </div>
      </section>

      {/* Trust statement */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 text-center"
          >
            {[
              { title: "Long-Term Partnerships", desc: "Over 60% of our clients return for additional programmes — because they see results, not just satisfaction scores." },
              { title: "Cross-Industry Expertise", desc: "We've delivered across manufacturing, BFSI, IT, logistics, and academia — adapting our methodology to each sector's culture and challenges." },
              { title: "Measurable Outcomes", desc: "Every engagement ends with an impact report — tracking participation, application, and business outcomes over time." },
            ].map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-border"
              >
                <div className="w-8 h-0.5 bg-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{point.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-center">
        <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}>
          <div className="w-12 h-1 bg-accent mx-auto mb-8" />
          <h2 className="font-serif text-4xl font-bold text-white mb-6">Join the Movement</h2>
          <p className="text-white/75 mb-10 max-w-xl mx-auto">
            Ready to invest in leadership capability for your organisation? Let's build something that lasts.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-14 items-center justify-center rounded-md bg-white px-10 text-base font-medium text-primary shadow transition-colors hover:bg-white/90"
          >
            Let's Build Together <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
