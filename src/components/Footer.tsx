import { Instagram, Youtube, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4 md:px-8">
      <div className="container-tight">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <span className="font-display text-2xl font-bold">
              FRAME FORAZE<span className="text-primary">.</span>
            </span>
            <p className="text-muted-foreground text-sm mt-3 max-w-sm">
              Premium creative media agency transforming brands through cinematic storytelling and data-driven strategy.
            </p>
            <div className="flex gap-4 mt-5">
              {[Instagram, Youtube, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  aria-label="Social media"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["About", "Services", "Portfolio", "Pricing", "Contact"].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Brand Promotion", "Video Production", "Reel Creation", "Ad Creatives", "Social Strategy"].map(s => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} FRAME FORAZE. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
