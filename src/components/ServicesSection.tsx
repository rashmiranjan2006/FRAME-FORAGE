import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Megaphone, Video, Film, TrendingUp, Rocket, Palette, X } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Brand Promotion Campaigns",
    description: "Strategic multi-channel campaigns that amplify your brand's reach and drive measurable results.",
    details: "We design end-to-end promotion strategies tailored to your brand identity, target audience, and business goals. From social media blitzes to influencer partnerships."
  },
  {
    icon: Video,
    title: "Cinematic Video Production",
    description: "Hollywood-grade video content that tells your brand story with impact and emotion.",
    details: "Our production team uses cinema-grade equipment and post-production techniques to deliver stunning visual narratives that captivate audiences."
  },
  {
    icon: Film,
    title: "Reel & Short-form Content",
    description: "Scroll-stopping reels and shorts optimized for maximum engagement and virality.",
    details: "We create trend-aware, platform-optimized short-form content that hooks viewers in the first second and drives action."
  },
  {
    icon: TrendingUp,
    title: "Social Media Growth Strategy",
    description: "Data-backed strategies that grow your following, engagement, and conversions organically.",
    details: "Our growth strategies combine content calendars, analytics, community management, and paid amplification for sustainable social growth."
  },
  {
    icon: Rocket,
    title: "Product Launch Campaigns",
    description: "End-to-end launch strategies that create buzz and drive first-day sales momentum.",
    details: "From teaser campaigns to launch day execution and post-launch nurturing, we engineer product launches that generate excitement and revenue."
  },
  {
    icon: Palette,
    title: "Ad Creative Production",
    description: "High-converting ad creatives designed to maximize ROAS across all platforms.",
    details: "We produce scroll-stopping ad creatives backed by performance data, A/B testing, and platform-specific best practices."
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeModal, setActiveModal] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding bg-surface/50" ref={ref}>
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
            Services That <span className="text-gradient">Deliver</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setActiveModal(i)}
              className="glass-card p-8 group cursor-pointer hover:border-primary/30 hover:shadow-[0_0_30px_hsl(24_100%_55%_/_0.1)] transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
              <span className="text-primary text-sm font-medium group-hover:underline">
                Learn More →
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeModal !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card glow-border p-8 max-w-lg w-full relative"
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X size={20} />
            </button>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              {(() => {
                const Icon = services[activeModal].icon;
                return <Icon className="text-primary" size={22} />;
              })()}
            </div>
            <h3 className="font-display font-bold text-2xl mb-4">{services[activeModal].title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">{services[activeModal].details}</p>
            <a
              href="#contact"
              onClick={() => setActiveModal(null)}
              className="inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:shadow-[0_0_20px_hsl(24_100%_55%_/_0.4)] transition-all"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
