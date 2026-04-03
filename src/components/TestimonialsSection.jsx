
const brands = [
  "ganjam cloth store",
  "mass bunk",
  "tony and guy",
  "zyna",
  "ganjam cloth store",
  "mass bunk",
  "tony and guy",
  "zyna",
];

const TestimonialsSection = () => {
  return (
    <>
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-primary uppercase">Our Clients</h2>
      </div>
      <section className="relative w-full py-16 bg-background overflow-hidden border-t border-b border-primary/20">
        <div className="absolute left-0 top-0 h-full w-1/5 z-10 pointer-events-none" style={{background: "linear-gradient(to right, #0a0a0a, transparent)"}} />
        <div className="absolute right-0 top-0 h-full w-1/5 z-10 pointer-events-none" style={{background: "linear-gradient(to left, #0a0a0a, transparent)"}} />
        <div className="relative w-full overflow-hidden whitespace-nowrap">
          <div
            className="inline-block animate-scroll"
            style={{ animation: "scroll 20s linear infinite" }}
          >
            {brands.map((brand, idx) => (
              <span
                key={idx}
                className="inline-block text-[2.5rem] md:text-[5rem] mx-12 font-black tracking-widest uppercase text-primary transition duration-300 cursor-default hover:text-white hover:drop-shadow-[0_0_20px_#ff6600] hover:scale-110"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </section>
    </>
  );
};

export default TestimonialsSection;
