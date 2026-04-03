import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹8,000",
    period: "/month",
    description: "For businesses getting started with content",
    features: [
      "8 Social Media Reels/month",
      "Social Media Management",
      "Landing Pages",
      "Monthly Performance Report",
      "virtual advertisement upto 2vdo/month",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "₹15,000",
    period: "/month",
    description: "For brands ready to scale their presence",
    features: [
      "12 Reels + 4 Long-form Videos",
      "Complete Social Media Management",
      "Monthly Brand Shoot",
      "Ad Creative Production (4/month)",
      "Weekly Strategy Calls",
      "Priority Support",
    ],
    highlighted: true, 
  },
  {
    name: "Premium",
    price: "₹25,000", 
    period: "/month",
    description: "For brands demanding excellence at scale",
    features: [  
      "Unlimited Content Production", 
      "Dedicated Creative Director",
      "Cinematic Brand Films (2/month)",
      "Full Ad Campaign Management",
      "Real-time Analytics Dashboard",
      "24/7 Priority Support",
      "Quarterly Brand Strategy Overhaul",
    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="section-padding bg-surface/50" ref={ref}>
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
            Investment <span className="text-gradient">Plans</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Limited slots available each month. Book early to secure your spot.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative rounded-2xl p-8 transition-all duration-500 ${
                plan.highlighted
                  ? "glass-card glow-border scale-[1.03]"
                  : "glass-card hover:border-white/20"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3 className="font-display font-bold text-xl mb-1">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-display font-bold">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-secondary-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:shadow-[0_0_25px_hsl(24_100%_55%_/_0.5)]"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
