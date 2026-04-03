import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FounderSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-surface/50" ref={ref}>
      <div className="container-tight">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center"
          >
            {/* Avatar */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center shrink-0">
              <span className="font-display text-5xl font-bold text-primary">S</span>
            </div>

            <div>
              <span className="text-primary text-xs font-semibold tracking-widest uppercase mb-2 block">
                From the Founder
              </span>
              <h3 className="font-display font-bold text-2xl md:text-3xl mb-4">
                Where Technology Meets Creativity
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "I started FRAME FORZE with a simple belief: every brand has a story worth telling cinematically. 
                We combine cutting-edge technology with raw creative talent to build experiences that don't just look good — 
                they convert. Our vision is to be the creative partner that modern businesses deserve."
              </p>
              <p className="font-display font-semibold">
                — Founder, <span className="text-primary">FRAME FORZE</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
