import { Brain, Sparkles, Server } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, stagger } from "@/lib/animations";

const capabilities = [
  {
    icon: Brain,
    number: "01",
    title: "AI and Machine Learning",
    points: [
      "Get accurate predictions to plan and optimize your business",
      "Identify patterns in complex data that drive smarter decisions",
      "Gain actionable insights to reduce risks and improve outcomes",
    ],
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Generative AI",
    points: [
      "Access precise answers from your data whenever you need them",
      "Automate content creation, summaries, and reports",
      "Use AI applications designed specifically for your workflows",
    ],
  },
  {
    icon: Server,
    number: "03",
    title: "Model Operations & Infrastructure",
    points: [
      "Run AI solutions reliably at scale in your environment",
      "Track performance to ensure consistent results",
      "Use secure cloud infrastructure that supports your operations",
    ],
  },
];

const CapabilitiesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <motion.div className="grid lg:grid-cols-4 gap-8" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <motion.div className="lg:col-span-1" variants={fadeIn}>
            <div className="bg-section-dark text-section-dark-foreground rounded-2xl p-8 h-full flex flex-col justify-between min-h-[280px]">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Core AI Capabilities</h2>
                <p className="text-section-dark-foreground/70 text-sm">
                  Comprehensive AI solutions tailored to your needs
                </p>
              </div>
              <a href="#" className="text-primary font-semibold text-sm hover:underline">
                Learn More →
              </a>
            </div>
          </motion.div>
          {capabilities.map((cap) => (
            <motion.div
              key={cap.number}
              className="border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow group"
              variants={fadeIn}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange-light flex items-center justify-center">
                  <cap.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-4xl font-bold text-muted-foreground/20">{cap.number}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{cap.title}</h3>
              <ul className="space-y-2">
                {cap.points.map((point, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
