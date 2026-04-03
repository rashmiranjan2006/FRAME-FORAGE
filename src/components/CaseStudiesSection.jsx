import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    client: "NovaBrand Fashion",
    problem: "Low online presence and declining engagement across social platforms.",
    strategy: "Multi-platform content blitz with cinematic brand films and influencer partnerships.",
    execution: "Produced 24 reels, 4 brand films, and managed 3-month campaign across Instagram and YouTube.",
    results: { impressions: "5M+", engagement: "+400%", sales: "+180%" },
  },
  {
    client: "TechVault SaaS",
    problem: "Failed product launch with minimal market awareness.",
    strategy: "Pre-launch teaser campaign followed by a launch event with live streaming.",
    execution: "Created teaser reels, product demo videos, and managed paid ad campaigns.",
    results: { impressions: "2.1M", engagement: "+250%", sales: "+320%" },
  },
  {
    client: "UrbanEats Restaurant",
    problem: "New restaurant in competitive market with zero brand recognition.",
    strategy: "Viral opening campaign with food cinematography and local influencer partnerships.",
    execution: "Shot cinematic food films, created 16 reels, and managed grand opening media.",
    results: { impressions: "1.8M", engagement: "+500%", sales: "Fully booked for 3 months" },
  },
];

const CaseStudiesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Results
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
            Case <span className="text-gradient">Studies</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.client}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <TrendingUp size={20} className="text-primary shrink-0" />
                  <span className="font-display font-semibold text-lg">{cs.client}</span>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-muted-foreground transition-transform duration-300 ${expanded === i ? "rotate-180" : ""}`}
                />
              </button>

              {expanded === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="px-6 pb-6 space-y-4"
                >
                  <div>
                    <span className="text-xs text-primary font-semibold uppercase tracking-wider">Problem</span>
                    <p className="text-muted-foreground text-sm mt-1">{cs.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs text-primary font-semibold uppercase tracking-wider">Strategy</span>
                    <p className="text-muted-foreground text-sm mt-1">{cs.strategy}</p>
                  </div>
                  <div>
                    <span className="text-xs text-primary font-semibold uppercase tracking-wider">Execution</span>
                    <p className="text-muted-foreground text-sm mt-1">{cs.execution}</p>
                  </div>
                  <div className="flex gap-4 pt-2">
                    {Object.entries(cs.results).map(([key, val]) => (
                      <div key={key} className="glass-card p-3 flex-1 text-center">
                        <p className="font-display font-bold text-primary">{val}</p>
                        <p className="text-xs text-muted-foreground capitalize">{key}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
