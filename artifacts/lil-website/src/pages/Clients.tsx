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
  Icon?: IconType;
  iconColor?: string;
};

const sectors: { label: string; accentClass: string; clients: Client[] }[] = [
  {
    label: "Manufacturing",
    accentClass: "text-primary",
    clients: [
      { name: "Saint Gobain" },
      { name: "Ajanta Pharma" },
      { name: "Mahindra & Mahindra" },
      { name: "Pidilite Industries" },
      { name: "Panasonic", Icon: SiPanasonic, iconColor: "#0070C0" },
      { name: "Xiaomi", Icon: SiXiaomi, iconColor: "#FF6900" },
      { name: "Invisalign" },
      { name: "HP", Icon: SiHp, iconColor: "#0096D6" },
      { name: "D'decor" },
      { name: "Yasham" },
      { name: "Ashtech" },
    ],
  },
  {
    label: "BFSI",
    accentClass: "text-accent",
    clients: [
      { name: "ICICI Bank" },
      { name: "IDBI Bank" },
      { name: "Bank of Baroda" },
      { name: "IOB" },
      { name: "IIFL" },
      { name: "Axis Bank" },
      { name: "Yes Bank" },
      { name: "Citibank" },
      { name: "CSB Bank" },
      { name: "Corporation Bank" },
      { name: "Sampath Bank" },
      { name: "Bank of Ceylon" },
      { name: "Julius Baer" },
      { name: "HDFC Bank" },
      { name: "Birla Sunlife Insurance" },
      { name: "Max Life Insurance" },
      { name: "LIC" },
      { name: "Mastercard", Icon: SiMastercard, iconColor: "#EB001B" },
      { name: "Kotak Group" },
      { name: "Nation Trust Bank" },
    ],
  },
  {
    label: "IT & Technology",
    accentClass: "text-primary",
    clients: [
      { name: "Tech Mahindra" },
      { name: "LTIMindtree" },
      { name: "Next Gen" },
      { name: "Eurofins" },
      { name: "Wipro", Icon: SiWipro, iconColor: "#341C57" },
      { name: "TCS" },
      { name: "Zensar Technologies" },
      { name: "Mphasis" },
      { name: "Genesis" },
      { name: "Hexaware" },
      { name: "CleverTap" },
    ],
  },
  {
    label: "Logistics & Supply Chain",
    accentClass: "text-accent",
    clients: [
      { name: "DHL", Icon: SiDhl, iconColor: "#FFCC00" },
      { name: "Foodland" },
      { name: "Mahindra & Mahindra" },
    ],
  },
];

function initials(name: string) {
  return name
    .split(/[\s&]+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function ClientCard({ client, index }: { client: Client; index: number }) {
  const { name, Icon, iconColor } = client;

  return (
    <motion.div
      data-testid={`card-client-${index}`}
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: (index % 6) * 0.05 }}
      className="flex flex-col items-center justify-center gap-2.5 bg-white rounded-xl p-5 shadow-sm border border-border hover:border-primary hover:shadow-md transition-all group cursor-default min-h-[96px]"
    >
      {Icon ? (
        <Icon
          style={{ color: iconColor }}
          className="w-8 h-8 shrink-0 group-hover:scale-110 transition-transform duration-300"
        />
      ) : (
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
          <span className="text-primary group-hover:text-white text-xs font-bold transition-colors">
            {initials(name)}
          </span>
        </div>
      )}
      <span className="text-[11px] font-semibold text-center text-muted-foreground group-hover:text-foreground transition-colors leading-tight max-w-full">
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
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 60% 40%, #C9A055 0%, transparent 60%)",
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="max-w-4xl"
          >
            <div className="w-16 h-1 bg-accent mb-8" />
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Built in Partnership. Scaled Through Trust.
            </h1>
            <p className="text-xl text-white/75 max-w-3xl">
              A growing list of organisations that invest in inclusive
              leadership — and choose Leaders in Lipstick® to help them deliver
              it.
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
              { num: "4", label: "Industry Sectors" },
              { num: "8+", label: "Countries" },
              { num: "2000+", label: "Leaders Trained" },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-serif text-4xl font-bold text-accent mb-1">
                  {s.num}
                </div>
                <div className="text-sm text-white/70 uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientele by Sector */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-12 h-1 bg-accent mx-auto mb-6" />
            <h2 className="font-serif text-4xl font-bold text-foreground">
              Our Clientele
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              From global multinationals to trusted Indian institutions —
              organisations that invest in their people choose Leaders in
              Lipstick®.
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
                  <h3
                    className={`font-serif text-3xl font-bold ${sector.accentClass}`}
                  >
                    {sector.label}
                  </h3>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                  {sector.clients.map((client, ci) => (
                    <ClientCard key={ci} client={client} index={ci} />
                  ))}
                </div>
                {si < sectors.length - 1 && (
                  <div className="mt-20 border-b border-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <section className="py-6 bg-muted overflow-hidden border-y border-border">
        <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap">
          {[...allClients, ...allClients].map((client, i) => (
            <span
              key={i}
              className="mx-6 text-foreground/40 font-medium text-xs uppercase tracking-widest shrink-0"
            >
              {client.name}{" "}
              <span className="mx-3 text-accent">·</span>
            </span>
          ))}
        </div>
      </section>

      {/* Trust statement */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 text-center"
          >
            {[
              {
                title: "Long-Term Partnerships",
                desc: "Over 60% of our clients return for additional programmes — because they see results, not just satisfaction scores.",
              },
              {
                title: "Cross-Industry Expertise",
                desc: "We've delivered across manufacturing, BFSI, IT, logistics, and academia — adapting our methodology to each sector's culture and challenges.",
              },
              {
                title: "Measurable Outcomes",
                desc: "Every engagement ends with an impact report — tracking participation, application, and business outcomes over time.",
              },
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
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {point.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <div className="w-12 h-1 bg-accent mx-auto mb-8" />
          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            Join the Movement
          </h2>
          <p className="text-white/75 mb-10 max-w-xl mx-auto">
            Ready to invest in leadership capability for your organisation?
            Let's build something that lasts.
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
