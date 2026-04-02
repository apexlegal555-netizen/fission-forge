import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const caseStudies = [
  {
    category: "Fashion Retail Company",
    title: "AI-Powered Fashion Retail Platform",
    description:
      "Built an AI-driven fashion platform using AWS SageMaker for virtual try-ons, Amazon Rekognition for body measurements, and Personalize for styling recommendations.",
    impact:
      "Reduced return rates by up to 60%, increased conversions by 90%, and delivered a personalized shopping experience.",
    color: "from-primary/80 to-primary",
  },
  {
    category: "Professional Services Technology",
    title: "Generative AI Knowledge Platform",
    description:
      "Implemented a RAG-based AI agent using FloTorch on AWS. Built a unified knowledge base from 23 regulatory sources with real-time monitoring.",
    impact:
      "Reduced research time by 75%, saving firms over $3,750 daily, with 90% adoption within three months.",
    color: "from-section-dark to-foreground",
  },
  {
    category: "Human Resource Technology",
    title: "AI-Powered HRMS & Labour Analysis",
    description:
      "Built an AI-driven HRMS platform on AWS, modernized into microservices, and deployed AI models for real-time workforce insights.",
    impact:
      "Enabled adaptive workforce planning, AI-driven skill assessment, and targeted learning at scale.",
    color: "from-primary to-primary/60",
  },
];

const CaseStudiesSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % caseStudies.length);
  const prev = () => setCurrent((c) => (c - 1 + caseStudies.length) % caseStudies.length);

  const cs = caseStudies[current];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Case Studies</h2>
            <p className="text-muted-foreground">
              Explore how we've helped organizations transform their business
            </p>
          </div>
          <div className="hidden md:flex gap-3">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className={`bg-gradient-to-br ${cs.color} rounded-2xl p-10 flex flex-col justify-end min-h-[360px] text-primary-foreground`}>
            <p className="text-sm opacity-80 mb-2">{cs.category}</p>
            <h3 className="text-2xl font-bold mb-4">{cs.title}</h3>
            <a href="#" className="text-sm font-semibold underline underline-offset-4 hover:opacity-80">
              LEARN MORE
            </a>
          </div>
          <div className="bg-background rounded-2xl p-10 border border-border flex flex-col justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-4">{cs.description}</p>
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs font-semibold text-primary mb-2">Impact:</p>
              <p className="text-sm text-foreground">{cs.impact}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8 md:hidden">
          <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
