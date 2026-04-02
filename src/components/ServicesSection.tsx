import { useState } from "react";
import { Database, Cloud, Smartphone, ShieldCheck, Workflow, Settings, ChevronDown } from "lucide-react";
import servicesImage from "@/assets/services-image.jpg";

const services = [
  { icon: Database, title: "Data Engineering Services", points: ["Create scalable data pipelines and analytics platforms", "Turn data into actionable insights for better decisions"] },
  { icon: Cloud, title: "Cloud Consulting Services", points: ["Modernize infrastructure with cloud-native solutions", "Improve scalability, security, and performance"] },
  { icon: Smartphone, title: "Web and Mobile App Development", points: ["Build modern, high-performing web and mobile applications", "Use frameworks and practices that deliver smooth experiences"] },
  { icon: ShieldCheck, title: "Quality Assurance Services", points: ["Ensure software quality with comprehensive testing", "Automate processes to reduce errors and speed delivery"] },
  { icon: Workflow, title: "Salesforce Consulting Services", points: ["Optimize your Salesforce setup with expert guidance", "Customize workflows to match your business needs"] },
  { icon: Settings, title: "ServiceNow Solutions", points: ["Streamline enterprise workflows efficiently", "Implement and customize ServiceNow for better operations"] },
];

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Other Technology Services
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          We help businesses solve technology challenges beyond AI by delivering services that improve efficiency, reliability, and outcomes.
        </p>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="hidden lg:block rounded-2xl overflow-hidden">
            <img
              src={servicesImage}
              alt="Technology Services"
              width={640}
              height={800}
              loading="lazy"
              className="w-full h-[500px] object-cover rounded-2xl"
            />
          </div>
          <div className="space-y-3">
            {services.map((service, i) => (
              <div
                key={i}
                className="border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-light flex items-center justify-center shrink-0">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-semibold text-foreground">{service.title}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-5 pt-0">
                    <ul className="space-y-2 ml-13">
                      {service.points.map((point, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <a href="#" className="text-primary text-sm font-semibold mt-3 inline-block hover:underline ml-13">
                      Learn More →
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
