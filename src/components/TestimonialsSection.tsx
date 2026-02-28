import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "CEO, NovaBrand",
    text: "FRAME FORAGE completely transformed our brand presence. Our engagement skyrocketed by 400% within the first quarter. They don't just create content — they create movements.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Founder, GlowSkin",
    text: "The product videos they created were beyond cinematic. Our conversion rate doubled overnight. Worth every penny.",
    rating: 5,
  },
  {
    name: "Rahul Kapoor",
    role: "Marketing Head, TechVault",
    text: "Their strategy-first approach sets them apart. They understood our audience better than we did. The results speak for themselves — 3x ROAS on our first campaign.",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    role: "Co-founder, UrbanEats",
    text: "From our restaurant launch to ongoing social media, FRAME FORAGE has been our creative backbone. Professional, creative, and incredibly results-driven.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(c => (c + 1) % testimonials.length);

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
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
            Client <span className="text-gradient">Love</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 md:p-12 text-center"
          >
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} size={18} className="text-primary fill-primary" />
              ))}
            </div>
            <p className="text-lg md:text-xl leading-relaxed mb-8 text-secondary-foreground">
              "{testimonials[current].text}"
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-display font-bold text-primary">
                {testimonials[current].name[0]}
              </div>
              <div className="text-left">
                <p className="font-semibold">{testimonials[current].name}</p>
                <p className="text-muted-foreground text-sm">{testimonials[current].role}</p>
              </div>
            </div>
          </motion.div>

          {/* Nav */}
          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors" aria-label="Previous">
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-muted-foreground/30"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors" aria-label="Next">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
