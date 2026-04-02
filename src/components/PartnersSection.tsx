import { motion } from "framer-motion";
import { fadeIn, stagger } from "@/lib/animations";

const services = [
  {
    number: "01",
    title: "AI and Machine Learning",
    points: [
      "Get accurate predictions to plan and optimize your business",
      "Identify patterns in complex data that drive smarter decisions",
      "Gain actionable insights to reduce risks and improve outcomes",
    ],
  },
  {
    number: "02",
    title: "Generative AI",
    points: [
      "Access precise answers from your data whenever you need them",
      "Automate content creation, summaries, and reports",
      "Use AI applications designed specifically for your workflows",
    ],
  },
  {
    number: "03",
    title: "Model Operations & Infrastructure",
    points: [
      "Run AI solutions reliably at scale in your environment",
      "Track performance to ensure consistent results",
      "Use secure cloud infrastructure that supports your operations",
    ],
  },
];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.number}
              variants={fadeIn}
              className="relative p-6 rounded-lg bg-background/50 border border-border hover:border-primary/50 transition-colors group"
            >
              {/* Animated gradient border effect */}
              <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-primary via-accent to-section-dark opacity-0 group-hover:opacity-60 blur-sm transition-opacity animate-spin-slow" />
              
              <div className="relative">
                <span className="text-5xl font-bold text-primary/20">{service.number}</span>
                <h3 className="text-xl font-bold text-foreground mt-2 mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.points.map((point, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
