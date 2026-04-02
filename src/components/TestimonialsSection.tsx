import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, stagger } from "@/lib/animations";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Gaurav",
    role: "Chief Product Officer",
    company: "BrightReturn",
    text: "Implementing FloTorch's capabilities has enhanced AI experimentation, indexing, and retrieval. The focus on open-source experimentation and scalable production enables us to deliver efficient, compliant AI solutions.",
  },
  {
    name: "Mohan Reddy",
    role: "Co-Founder & CTO",
    company: "SkyHive",
    text: "They helped us develop our domain-specific HR AI solution using fine-tuned LLM models on AWS. Their expertise delivered a 65% improvement in labor market prediction accuracy and reduced our operational costs by over 30%.",
  },
  {
    name: "Igor Ganapolsky",
    role: "Owner",
    company: "Boats Group",
    text: "The team delivered a truly world-class, AI-powered newsletter product. Their deep expertise in AWS, web development, and AI/ML infrastructure was evident throughout the project.",
  },
  {
    name: "Raja Krishnamurthy",
    role: "VP - Security & Innovation",
    company: "ERPA",
    text: "The team demonstrated an impressive level of involvement and commitment throughout the engagement. Their collaborative approach ensured a smooth and highly productive process from start to finish.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-20 bg-background">
      <motion.div className="container mx-auto" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <motion.h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4" variants={fadeIn}>
          What Our Clients Say
        </motion.h2>
        <motion.p className="text-center text-muted-foreground mb-12" variants={fadeIn}>
          Hear from leaders who transformed their business with our solutions
        </motion.p>

        <motion.div className="max-w-3xl mx-auto relative" variants={fadeIn}>
          <motion.div className="bg-secondary/50 rounded-2xl p-8 md:p-12 relative" variants={fadeIn}>
            <Quote className="w-10 h-10 text-primary/20 absolute top-6 left-6" />
            <p className="text-lg text-foreground leading-relaxed mb-8 mt-4">
              "{t.text}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">{t.name[0]}</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">
                  {t.role} · {t.company}
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div className="flex items-center justify-center gap-4 mt-8" variants={fadeIn}>
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
