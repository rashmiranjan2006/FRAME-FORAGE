import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "200+", label: "Projects Completed" },
  { value: "15+", label: "Brands Served" },
  { value: "100%", label: "Avg. Engagement Growth" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.8 }}
          > 
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">
              A Tech-Driven  
              <br /> 
              <span className="text-gradient">Creative Agency</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              FRAME FORZE is where cinematic storytelling meets data-driven strategy.
              We don't just create content — we engineer brand experiences that convert
              attention into revenue.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From startups to established brands, our mission is to deliver premium
              creative solutions that make businesses impossible to ignore in a noisy
              digital landscape.
            </p>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                className="glass-card p-8 flex items-center gap-6 group hover:border-primary/30 transition-all duration-500"
              >
                <span className="text-4xl md:text-5xl font-display font-bold text-gradient">
                  {stat.value}
                </span>
                <span className="text-muted-foreground text-sm uppercase tracking-widest">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
