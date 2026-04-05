
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play } from "lucide-react";
import advFlowersForever from "../assets/adv flowers forever.mp4";
import aryaCosmatics from "../assets/arya cosmatics.mp4";
import brandZone from "../assets/brand zone.mp4";
import flowersForever from "../assets/flowers forever.mp4";
import tajNursery from "../assets/taj nursery.mp4";
import heroBg from "../assets/hero-bg.jpg";

const categories = ["All", "Reels", "Brand Shoots", "Product Videos", "Ads"];

const projects = [
  {
    title: "Adv Flowers Forever",
    category: "Brand Shoots",
    description: "A vibrant shoot for Adv Flowers Forever.",
    video: advFlowersForever,
  },
  {
    title: "Arya Cosmatics",
    category: "Product Videos",
    description: "Product showcase for Arya Cosmatics.",
    video: aryaCosmatics,
  },
  {
    title: "Brand Zone",
    category: "Ads",
    description: "Ad campaign for Brand Zone.",
    video: brandZone,
  },
  {
    title: "Flowers Forever",
    category: "Reels",
    description: "Social media reel for Flowers Forever.",
    video: flowersForever,
  },
  {
    title: "Taj Nursery",
    category: "Brand Shoots",
    description: "Brand shoot for Taj Nursery.",
    video: tajNursery,
  },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="section-padding" ref={ref}>
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
            Selected <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card overflow-hidden group cursor-pointer hover:border-primary/20 transition-all duration-500"
            >
              <div className="relative aspect-video bg-surface flex items-center justify-center overflow-hidden">
                <video
                  src={project.video}
                  className="absolute inset-0 w-full h-full object-cover"
                  controls
                  preload="metadata"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 pointer-events-none" />
              </div>
              <div className="p-6">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">{project.category}</span>
                <h3 className="font-display font-semibold text-lg mt-2 mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                <p className="text-xs text-primary/80 font-medium">📈 {project.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
