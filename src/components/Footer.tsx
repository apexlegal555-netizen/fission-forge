import { Linkedin, Youtube, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const links = {
    Services: ["AI & ML Services", "Generative AI", "Data Engineering", "Cloud Consulting", "Web & Mobile", "QA Services"],
    Company: ["About Us", "Careers", "Blog", "Case Studies", "Contact Us"],
    Resources: ["FloTorch", "Whitepapers", "Webinars", "Events"],
  };

  return (
    <footer className="bg-section-dark text-section-dark-foreground pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <a href="#" className="text-2xl font-bold tracking-tight">
              FISSION<span className="text-primary">LABS</span>
            </a>
            <p className="mt-4 text-sm text-section-dark-foreground/60">
              Leaders in Applied AI Engineering. Building dependable AI solutions for real-world environments.
            </p>
            <div className="flex gap-3 mt-6">
              {[Linkedin, Youtube, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-section-dark-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4 text-sm">{title}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-section-dark-foreground/60 hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-section-dark-foreground/10 pt-8 text-center">
          <p className="text-xs text-section-dark-foreground/40">
            © 2025 Fission Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
