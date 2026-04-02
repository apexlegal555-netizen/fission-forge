import { Check } from "lucide-react";
import flotorchImage from "@/assets/flotorch-screen.jpg";

const features = [
  "Optimize workflows for cost, latency, and throughput",
  "Leverage agentic assets via no-code tools, SDKs, or assistants",
  "Plug and play models without changing existing workflows",
  "Gain visibility with built-in observability and tracing",
];

const FloTorchSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={flotorchImage}
              alt="FloTorch AI Platform"
              width={960}
              height={640}
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/20 rounded-full" />
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary/10 rounded-full" />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Experience FloTorch, Our{" "}
            <span className="text-primary">Enterprise AI Gateway</span>
          </h2>
          <p className="text-muted-foreground">
            Turn AI concepts into live solutions faster and more reliably. Deploy, scale,
            and manage AI workflows securely and seamlessly.
          </p>
          <ul className="space-y-3">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-sm text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="inline-block border-2 border-primary text-primary px-6 py-3 rounded-md font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Learn More About FloTorch
          </a>
        </div>
      </div>
    </section>
  );
};

export default FloTorchSection;
