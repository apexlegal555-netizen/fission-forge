import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-hero-bg">
      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-40 opacity-10">
        <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
          <path
            fill="hsl(var(--primary))"
            d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,138.7C672,139,768,181,864,197.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            We Are the Leaders in Applied{" "}
            <span className="text-primary">AI Engineering</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            Partner with us to implement AI architectures built on disciplined
            engineering, robust data foundations, and secure operational
            practices that ensure dependable results.
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            BUILD YOUR NEXT SOLUTION WITH US
          </a>
        </div>
        <div className="relative flex justify-center">
          <div className="relative w-80 h-80 md:w-[420px] md:h-[420px]">
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full overflow-hidden">
              <img
                src={heroImage}
                alt="AI Engineering Professional"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
