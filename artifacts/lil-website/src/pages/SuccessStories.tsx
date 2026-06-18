import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Lightbox } from "@/components/ui/lightbox";
import Globe from "@/components/Globe";

import img1 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.03_1781323608680.jpeg";
import img2 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.04_1781323608680.jpeg";
import img3 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.07_1781323608680.jpeg";
import img4 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.08_(1)_1781323608681.jpeg";
import img5 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.08_(2)_1781323608681.jpeg";
import img6 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.08_1781323608681.jpeg";
import img7 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.11_(1)_1781323608681.jpeg";
import img8 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.11_1781323608681.jpeg";
import img9 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.12_(1)_1781323608681.jpeg";
import img10 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.12_(2)_1781323608682.jpeg";
import img11 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.12_1781323608682.jpeg";
import img12 from "@assets/WhatsApp_Image_2026-06-12_at_22.58.13_1781323608682.jpeg";
import workshop1 from "@assets/worksop1.jpeg";
import workshop2 from "@assets/worksop2.jpeg";
import new1 from "@assets/WhatsApp Image 2026-06-13 at 12.11.09 (1).jpeg";
import new2 from "@assets/WhatsApp Image 2026-06-13 at 12.11.09 (2).jpeg";
import new3 from "@assets/WhatsApp Image 2026-06-13 at 12.11.09.jpeg";
import new4 from "@assets/WhatsApp Image 2026-06-13 at 12.11.10.jpeg";
import new5 from "@assets/WhatsApp Image 2026-06-13 at 12.11.39 (1).jpeg";
import new6 from "@assets/WhatsApp Image 2026-06-13 at 12.11.39 (2).jpeg";
import new7 from "@assets/WhatsApp Image 2026-06-13 at 12.11.39.jpeg";
import new8 from "@assets/WhatsApp Image 2026-06-13 at 12.11.40 (1).jpeg";
import new9 from "@assets/WhatsApp Image 2026-06-13 at 12.11.40 (2).jpeg";
import new10 from "@assets/WhatsApp Image 2026-06-13 at 12.11.40 (3).jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stats = [
  { num: "1 Lakh+", label: "Participants Impacted" },
  { num: "100+", label: "Organisations" },
  { num: "1400+", label: "Workshops Conducted" },
  { num: "8+", label: "Countries" },
];

const testimonials = [
  {
    quote: "Partnering with Leaders in Lipstick® gave us more than a training programme. It gave us a measurable shift in how our women leaders see themselves — and how our organisation sees them.",
    who: "CHRO, Global Financial Services Firm",
  },
  {
    quote: "Feb 2016 : I had the chance to attend your lecture while serving in IDBI Bank as Assistant manager. Seeing you teach with such passion made me question myself that will I ever be this passionate about my job. You were so full of life. You inspired me to pursue my dream of becoming a civil servant and resume my preparation. August 2020 : Have qualified civil services 2019. AIR 680. It was not possible without your help ma'am. Thank u so much for inspiring this average kid to believe in his dreams. Thank you for showing me that it is okay to dream and chase them.",
    who: "Yashlok Kumar Dutt, IRS Officer.",
  },
  {
    quote: "Really, the workshop is well devised for its very objective. You conducted it in a superb manner. Thanks a lot for making the participants motivated. Thanks a lot for the tips you shared on developing positive attitude, on many etiquettes and on winning the negative emotions. It was a wonderful experience. Thanks a lot, Siji, for everything what I have gained in the last two days.",
    who: "Rajavel, AGM, Central Bank",
  },
  {
    quote: "As the Head of the Zonal Training Centre, Mumbai, I had the opportunity of attending Siji's lively and energetic sessions on Unnati: Rising to Success, a program to enable women employees to develop the necessary attributes for taking up leadership positions in the organization while ensuring work life balance. As she starts the session, within minutes, she has already established that one to one rapport with each participant and even the introverted participants start opening up to her. Handling a session on Soft Skills is not everyone's cup of tea, but I have seen Siji spread her charm, wit, and humor together with sending out hard hitting reality messages that set us thinking. She is very expressive and keeps the participants spellbound with her real-life experiences and stories. Her sessions gave insight into Image Building: Enhancing your professional presence, Effective Communication and Negotiation Skills, Corporate Image building and Balancing Act: Avoiding the superwoman syndrome. Her presentation style through activities and role plays was very engaging and inspiring. The feedback received for her sessions was incredibly positive and encouraging.",
    who: "Sonali Nagle, Deputy General Manager, IDBI Bank",
  },
];

const galleryImages = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, 
  workshop1, workshop2,
  new1, new2, new3, new4, new5, new6, new7, new8, new9, new10
];

export default function SuccessStories() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 75% 30%, #D4AF37 0%, transparent 55%)" }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-4xl">
            <div className="w-16 h-1 bg-accent mb-8" />
            <h1 className="font-serif text-3xl sm:text-4xl md:text-7xl font-bold text-white leading-tight mb-6">
              Down Memory Lane
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/80">
              Every number behind our impact is a leader who chose to invest in herself — and an organisation that chose to invest in her.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}>
                <div className="font-serif text-3xl md:text-5xl font-bold text-accent mb-2 leading-tight">{stat.num}</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest font-medium">{stat.label}</div>
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
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">What Leaders Say</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="bg-muted rounded-2xl p-6 md:p-10 border border-border flex flex-col">
                <div className="text-accent font-serif text-6xl leading-none mb-6">"</div>
                <p className="font-serif text-base md:text-lg italic text-foreground leading-relaxed flex-1 mb-6 md:mb-8">{t.quote}</p>
                <div className="pt-6 border-t border-border">
                  <div className="w-8 h-0.5 bg-accent mb-3" />
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">— {t.who}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="text-center mb-14">
            <div className="w-12 h-1 bg-accent mx-auto mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Beyond Training — Building Lasting Memories</h2>
            <p className="text-muted-foreground mt-4">Moments from workshops, cohorts, and leadership journeys across India and beyond.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}>
                <Lightbox 
                  src={img} 
                  alt={`Leaders in Lipstick workshop ${i + 1}`} 
                  className="aspect-[3/4]" 
                  imgClassName="w-full h-full object-cover rounded-xl" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Locations */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="text-center mb-16">
            <div className="w-12 h-1 bg-accent mx-auto mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Our Global Footprint</h2>
            <p className="text-muted-foreground mt-4">Empowering leaders across continents.</p>
          </motion.div>
          <Globe />
        </div>
      </section>

      {/* Pull quote */}
      <section className="py-24 bg-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}>
            <div className="text-accent font-serif text-8xl leading-none mb-6">"</div>
            <p className="font-serif text-xl sm:text-2xl md:text-4xl italic text-white leading-relaxed mb-6 md:mb-10">
              68% of Leaders in Lipstick® participants secure a promotion or expanded role within 18 months of completing their programme.
            </p>
            <p className="text-white/60 text-sm uppercase tracking-widest">Leaders in Lipstick® Impact Data, 2025</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-foreground text-center">
        <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}>
          <div className="w-12 h-1 bg-accent mx-auto mb-8" />
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">Write your own success story.</h2>
          <p className="text-white/70 text-sm sm:text-base mb-6 md:mb-10 max-w-xl mx-auto">
            Find out which programme is right for you — or explore a corporate partnership that delivers measurable impact.
          </p>
          <Link href="/contact" className="inline-flex h-12 md:h-14 items-center justify-center rounded-md bg-primary px-8 md:px-10 text-sm md:text-base font-medium text-white shadow transition-colors hover:bg-primary/90">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
