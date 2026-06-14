import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Linkedin, Instagram, ArrowRight, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const contactSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Enter a valid email address"),
  organisation: z.string().min(2, "Organisation name is required"),
  role: z.string().min(1, "Please select a role"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactOptions = [
  {
    icon: Mail,
    label: "General Enquiries",
    value: "hello@leadersinlipstick.com",
    link: "mailto:hello@leadersinlipstick.com",
  },
  {
    icon: Mail,
    label: "Corporate Partnerships",
    value: "partnerships@leadersinlipstick.com",
    link: "mailto:partnerships@leadersinlipstick.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/company/leaders-in-lipstick",
    link: "https://linkedin.com/company/leaders-in-lipstick",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@leadersinlipstick",
    link: "https://instagram.com/leadersinlipstick",
  },
];

const roles = [
  { value: "woman-leader", label: "I am a Woman Leader" },
  { value: "hr-ld", label: "I am an HR & L&D Professional" },
  { value: "corporate-partner", label: "I represent a Corporate Partner" },
  { value: "other", label: "Other" },
];

export default function Contact() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      organisation: "",
      role: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const formData = new FormData();
      Object.keys(data).forEach(key => formData.append(key, data[key as keyof ContactFormData]));

      const response = await fetch("https://formspree.io/f/mnjyobdw", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. We'll be in touch shortly.",
        });
        form.reset();
      } else {
        throw new Error("Formspree error");
      }
    } catch (error) {
      // Fallback to mailto if Formspree fails!
      const subject = encodeURIComponent(`Contact from ${data.firstName} ${data.lastName} - ${data.organisation}`);
      const body = encodeURIComponent(`Name: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nOrganisation: ${data.organisation}\nRole: ${data.role}\n\nMessage:\n${data.message}`);
      window.location.href = `mailto:hello@leadersinlipstick.com?subject=${subject}&body=${body}`;
      setSubmitted(true);
      toast({
        title: "Opening email client",
        description: "Automatic sending failed, opening your email client instead.",
      });
      form.reset();
    }
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(ellipse at 20% 70%, #fff 0%, transparent 55%)" }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-4xl">
            <div className="w-16 h-1 bg-accent mb-8" />
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Whether you're ready to enrol in a programme, explore a corporate partnership, or simply learn more — we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-5 gap-16">
            {/* Contact details */}
            <motion.div
              initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}
              className="md:col-span-2">
              <div className="w-12 h-1 bg-accent mb-8" />
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Reach Us</h2>
              <div className="space-y-6">
                {contactOptions.map((opt, i) => (
                  <motion.a key={i} href={opt.link} target="_blank" rel="noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-4 group">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                      <opt.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">{opt.label}</div>
                      <div className="text-blue-600 underline font-medium group-hover:text-blue-800 transition-colors">{opt.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-12 bg-muted rounded-2xl p-8 border-l-4 border-accent">
                <p className="font-serif text-lg italic text-primary mb-3">
                  "Every great partnership begins with a single conversation."
                </p>
                <p className="text-sm text-muted-foreground">We typically respond within 1 business day.</p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:col-span-3">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                  <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-foreground mb-4">Thank you.</h3>
                  <p className="text-muted-foreground max-w-sm mb-8">
                    Your message has been received. A member of our team will be in touch with you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-primary font-medium hover:underline flex items-center gap-2">
                    Send another message <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">First Name</label>
                      <input
                        id="firstName"
                        data-testid="input-firstName"
                        type="text"
                        {...form.register("firstName")}
                        placeholder="Priya"
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition" />
                      {form.formState.errors.firstName && (
                        <p className="mt-1 text-xs text-destructive">{form.formState.errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                      <input
                        id="lastName"
                        data-testid="input-lastName"
                        type="text"
                        {...form.register("lastName")}
                        placeholder="Sharma"
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition" />
                      {form.formState.errors.lastName && (
                        <p className="mt-1 text-xs text-destructive">{form.formState.errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                    <input
                      id="email"
                      data-testid="input-email"
                      type="email"
                      {...form.register("email")}
                      placeholder="priya@company.com"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition" />
                    {form.formState.errors.email && (
                      <p className="mt-1 text-xs text-destructive">{form.formState.errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="organisation" className="block text-sm font-medium text-foreground mb-2">Organisation</label>
                    <input
                      id="organisation"
                      data-testid="input-organisation"
                      type="text"
                      {...form.register("organisation")}
                      placeholder="Your company name"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition" />
                    {form.formState.errors.organisation && (
                      <p className="mt-1 text-xs text-destructive">{form.formState.errors.organisation.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-foreground mb-2">I am a</label>
                    <select
                      id="role"
                      data-testid="select-role"
                      {...form.register("role")}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition text-foreground">
                      <option value="">Select your role</option>
                      {roles.map((r) => (
                        <option key={r.value} value={r.value}>{r.label}</option>
                      ))}
                    </select>
                    {form.formState.errors.role && (
                      <p className="mt-1 text-xs text-destructive">{form.formState.errors.role.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <textarea
                      id="message"
                      data-testid="textarea-message"
                      rows={5}
                      {...form.register("message")}
                      placeholder="Tell us about your team, your goals, or what you'd like to explore..."
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition resize-none" />
                    {form.formState.errors.message && (
                      <p className="mt-1 text-xs text-destructive">{form.formState.errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    data-testid="button-submit"
                    disabled={form.formState.isSubmitting}
                    className="w-full h-14 inline-flex items-center justify-center rounded-lg bg-primary text-white text-base font-medium shadow transition-colors hover:bg-primary/90 disabled:opacity-50">
                    Send Message <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
