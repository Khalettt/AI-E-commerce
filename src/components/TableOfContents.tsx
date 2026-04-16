import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { List } from "lucide-react";
import { sections } from "@/data/sections";

const TableOfContents = () => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="hidden lg:block sticky top-24 w-64 shrink-0 self-start"
    >
      <div className="flex items-center gap-2 mb-4 text-foreground font-semibold">
        <List className="h-4 w-4 text-primary" />
        <span className="text-sm uppercase tracking-wider">Contents</span>
      </div>
      <ul className="space-y-1 border-l-2 border-border pl-4">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`block text-sm py-1.5 transition-colors duration-200 ${
                activeId === s.id
                  ? "text-primary font-semibold border-l-2 border-primary -ml-[18px] pl-[14px]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {s.title}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default TableOfContents;
