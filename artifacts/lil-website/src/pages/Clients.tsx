import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Landmark, Building2, Globe2, Briefcase } from "lucide-react";
import clientImg1 from "@assets/WhatsApp Image 2026-06-13 at 12.11.09.jpeg";
import clientImg2 from "@assets/WhatsApp Image 2026-06-13 at 12.11.10.jpeg";
import {
  SiMastercard,
  SiDhl,
  SiXiaomi,
  SiPanasonic,
  SiHp,
  SiWipro,
  SiTata,
  SiMahindra,
  SiTcs,
} from "react-icons/si";
import {
  SchneiderElectricIcon,
  SaintGobainIcon,
  InvisalignIcon,
  CitiIcon,
  IciciBankIcon,
  IdbiBankIcon,
  BankOfBarodaIcon,
  IobIcon,
  AxisBankIcon,
  YesBankIcon,
  HdfcBankIcon,
  LicIcon,
  KotakBankIcon,
  TechMahindraIcon,
  LtimindtreeIcon,
  EurofinsIcon,
  MphasisIcon,
  HexawareIcon,
  ClevertapIcon,
  AjantaPharmaIcon,
  PidiliteIcon,
  DdecorIcon,
  YashamIcon,
  AshtechIcon,
  IiflIcon,
  CsbBankIcon,
  CorporationBankIcon,
  SampathBankIcon,
  BankOfCeylonIcon,
  JuliusBaerIcon,
  BirlaSunlifeIcon,
  MaxLifeIcon,
  NationTrustIcon,
  NextGenIcon,
  ZensarIcon,
  GenesisIcon,
  FoodlandIcon,
} from "../icons/client-logos";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

import type { IconType } from "react-icons";

type Client = {
  name: string;
  Icon?: IconType;
  iconStyle?: React.CSSProperties;
  abbr?: string;
  img?: string;
  customSize?: string; // e.g., "h-24 w-24 md:h-32 md:w-32"
};

const sectors: { label: string; icon: any; accentClass: string; clients: Client[] }[] = [
  {
    label: "Manufacturing",
    icon: Building2,
    accentClass: "text-primary",
    clients: [
      { name: "Panasonic", img: "/Panasonic.png" },
      { name: "Xiaomi", img: "/Xiaomi_logo.svg", customSize: "h-12 w-12 md:h-20 lg:h-28 xl:h-36 w-20 lg:w-28 xl:w-36" },
      { name: "HP", img: "/hp.png" },
      { name: "Saint Gobain", img: "/SaintGobain.png" },
      { name: "Ajanta Pharma", img: "/Ajanta-Pharma-Limited-Logo.png" },
      { name: "Mahindra & Mahindra", img: "/Mahindra.png" },
      { name: "Pidilite Industries", img: "/Pidilite.png" },
      { name: "Invisalign", img: "/Invisalign-logo.png" },
      { name: "D'decor", img: "/Ddecor.png" },
      { name: "Yasham", img: "/Yasham.png" },
      { name: "Ashtech", img: "/Ashtech.png" },
    ],
  },
  {
    label: "BFSI",
    icon: Landmark,
    accentClass: "text-accent",
    clients: [
      { name: "Mastercard", img: "/Mastercard.png" },
      { name: "Citibank", img: "/Citi Bank.png" },
      { name: "ICICI Bank", img: "/ICICI.png" },
      { name: "IDBI Bank", img: "/IDBI.png" },
      { name: "Bank of Baroda", img: "/BOB.png" },
      { name: "IOB", img: "/IOB.png" },
      { name: "IIFL", img: "/IIFL.png" },
      { name: "Axis Bank", img: "/Axis Bank.png" },
      { name: "Yes Bank", img: "/YES Bank.png" },
      { name: "CSB Bank", img: "/CSB bank.png" },
      { name: "Corporation Bank", img: "/Corporation bank.png" },
      { name: "Sampath Bank", img: "/Sampath bank.png" },
      { name: "Bank of Ceylon", img: "/Bank of Ceylon.png" },
      { name: "Julius Baer", img: "/Julius Bar.png" },
      { name: "HDFC Bank", img: "/HDFC bank.png" },
      { name: "Birla Sunlife Insurance", img: "/Birla sunlife.png" },
      { name: "Max Life Insurance", img: "/Max life.png" },
      { name: "LIC", img: "/LIC.png" },
      { name: "Kotak Group", img: "/Kotak.png" },
      { name: "Nation Trust Bank", img: "/Nations Trust bank.png" },
    ],
  },
  {
    label: "IT & Technology",
    icon: Globe2,
    accentClass: "text-primary",
    clients: [
      { name: "Wipro", img: "/wipro.png", customSize: "h-14 w-14 md:h-22 lg:h-30 xl:h-38 w-22 lg:w-30 xl:w-38" },
      { name: "Tata Group", img: "/Tata group.png", customSize: "h-14 w-14 md:h-22 lg:h-30 xl:h-38 w-22 lg:w-30 xl:w-38" },
      { name: "Tech Mahindra", img: "/Tech Mahindra.png" },
      { name: "LTIMindtree", img: "/LTI Mindtree.png" },
      { name: "Next Gen", img: "/Nextgen.png" },
      { name: "Eurofins", img: "/Eurofins.png" },
      { name: "TCS", img: "/tcs.png" },
      { name: "Zensar Technologies", img: "/Zensar technology.png" },
      { name: "Mphasis", img: "/Mphasis .png" },
      { name: "Genesis", img: "/Genesis.png" },
      { name: "Hexaware", img: "/Hexaware.png" },
      { name: "CleverTap", img: "/Clevertap.png" },
    ],
  },
  {
    label: "Logistics & Supply Chain",
    icon: Briefcase,
    accentClass: "text-accent",
    clients: [
      { name: "DHL", img: "/DHL.png" },
      { name: "Foodland", img: "/Foodland.png" },
      { name: "Mahindra & Mahindra", Icon: SiMahindra, iconStyle: { color: "#BE0000" } },
    ],
  },
];

function initAbbr(name: string, abbr?: string) {
  return abbr || name
    .split(/[\s&]+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

function ClientCard({ client, index }: { client: Client; index: number }) {
  const { name, Icon, iconStyle, abbr, img, customSize } = client;
  const defaultSize = "h-16 w-16 md:h-24 lg:h-32 xl:h-40 w-24 lg:w-32 xl:w-40";
  const size = customSize || defaultSize;

  return (
    <motion.div
      data-testid={`card-client-${index}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: (index % 6) * 0.05 }}
      className="flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 cursor-default relative group min-h-[120px] md:min-h-[180px] lg:min-h-[220px] xl:min-h-[240px] p-4"
    >
      {img ? (
        <img
          src={img}
          alt={name}
          className={`${size} aspect-square object-contain transition-all duration-300`}
        />
      ) : Icon ? (
        <Icon
          className={`${size} aspect-square transition-all duration-300`}
          style={{
            ...iconStyle,
          }}
        />
      ) : (
        <div
          className={`${size} aspect-square rounded-lg flex items-center justify-center shrink-0`}
          style={{ backgroundColor: "#70162C" }}
        >
          <span className="font-bold text-[12px] md:text-[16px] lg:text-[22px] xl:text-[28px] leading-none tracking-wide text-center text-white">
            {initAbbr(name, abbr)}
          </span>
        </div>
      )}
      <span className="absolute bottom-0 left-0 right-0 text-center text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
          style={{ backgroundImage: "radial-gradient(ellipse at 60% 40%, #D4AF37 0%, transparent 60%)" }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-4xl">
            <div className="w-16 h-1 bg-accent mb-8" />
            <h1 className="font-serif text-3xl sm:text-4xl md:text-7xl font-bold text-white leading-tight mb-6">
              Built in Partnership. Scaled Through Trust.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/75 max-w-3xl">
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
                <div className="font-serif text-2xl sm:text-4xl font-bold text-accent mb-1">{s.num}</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-wider">{s.label}</div>
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
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Our Clientele and Collaborators</h2>
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
                <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
                  <div className="w-1 h-8 md:h-12 bg-accent rounded-full shrink-0" />
                  <h3 className={`font-serif text-xl md:text-3xl font-bold ${sector.accentClass}`}>
                    {sector.label}
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 md:gap-10 xl:gap-12">
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
                className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-border"
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
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">Join the Movement</h2>
          <p className="text-white/75 text-sm sm:text-base mb-6 md:mb-10 max-w-xl mx-auto">
            Ready to invest in leadership capability for your organisation? Let's build something that lasts.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-12 md:h-14 items-center justify-center rounded-md bg-white px-8 md:px-10 text-sm md:text-base font-medium text-primary shadow transition-colors hover:bg-white/90"
          >
            Let's Build Together <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
