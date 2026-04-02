import teamImage from "@/assets/team-image.jpg";
import { motion } from "framer-motion";
import { fadeIn, stagger } from "@/lib/animations";

const CTASection = () => {
  return (
    <section className="py-20 bg-background" id="contact">
      <motion.div className="container mx-auto grid md:grid-cols-2 gap-8" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        {/* Build CTA */}
        <motion.div className="bg-section-dark text-section-dark-foreground rounded-2xl p-10 relative overflow-hidden" variants={fadeIn}>
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Build Your Next Solution With Us
            </h3>
            <p className="text-section-dark-foreground/70 mb-8">
              Collaborate with our experts to design and deliver scalable software solutions that accelerate your business growth.
            </p>
            <a
              href="#"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Schedule a Consultation
            </a>
          </div>
        </motion.div>

        {/* Join Team CTA */}
        <motion.div className="relative rounded-2xl overflow-hidden min-h-[320px]" variants={fadeIn}>
          <img
            src={teamImage}
            alt="Join Our Team"
            width={800}
            height={512}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-foreground/20"></div>
          <div className="relative z-10 h-full flex flex-col justify-end p-10">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
              Join Our Team
            </h3>
            <p className="text-primary-foreground/80 mb-6 text-sm">
              Be part of a high-performing team that solves complex challenges and shapes the future of technology.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="#"
                className="inline-block bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                See Open Roles
              </a>
              <a
                href="#"
                className="inline-block border border-primary-foreground/40 text-primary-foreground px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
              >
                Explore Life@ValuStrat
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTASection;
