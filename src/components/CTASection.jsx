import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-surface/50" ref={ref}>
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="glass-card glow-border p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6">
              Ready to Scale
              <br />
              <span className="text-gradient">Your Brand?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Limited slots available this month. Book your free strategy consultation now and let's create something extraordinary together.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-10 py-5 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:shadow-[0_0_40px_hsl(24_100%_55%_/_0.5)] transition-all duration-300"
            >
              Schedule Free Consultation
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
