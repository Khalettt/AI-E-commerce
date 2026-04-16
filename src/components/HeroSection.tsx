import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      >
        <img
          src={heroBg}
          alt="AI and E-Commerce futuristic concept"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-background" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/20 text-primary-foreground border border-primary/30 mb-6"
        >
          Featured Article
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight max-w-4xl mx-auto"
        >
          Impact of <span className="text-accent">AI</span> on E-Commerce &amp; Role of{" "}
          <span className="text-accent">Social Media</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto"
        >
          Exploring how artificial intelligence and social platforms are reshaping
          the future of digital commerce and consumer experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-10"
        >
          <a
            href="#intro"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Start Reading ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
