import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SectionCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  index: number;
  highlightWords?: string[];
  quote?: string;
  stat?: { value: string; label: string };
}

const SectionCard = ({
  id,
  title,
  description,
  image,
  icon: Icon,
  index,
  highlightWords = [],
  quote,
  stat,
}: SectionCardProps) => {
  const isReversed = index % 2 !== 0;

  const highlightText = (text: string) => {
    if (!highlightWords.length) return text;
    const regex = new RegExp(`(${highlightWords.join("|")})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, i) =>
      highlightWords.some((w) => w.toLowerCase() === part.toLowerCase()) ? (
        <span key={i} className="text-accent font-semibold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <section id={id} className="py-6 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Card className="card-hover overflow-hidden border-0 shadow-lg bg-card rounded-2xl">
          <div
            className={`flex flex-col ${
              isReversed ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            {/* Image */}
            <div className="md:w-1/2 overflow-hidden">
              <motion.img
                src={image}
                alt={title}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-64 md:h-full object-cover"
                whileInView={{ scale: [1.08, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>

            {/* Content */}
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Section {index + 1}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-sans font-extrabold text-foreground heading-underline mb-6 tracking-tight">
                {title}
              </h2>

              <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-prose">
                {highlightText(description)}
              </p>

              {quote && (
                <div className="mt-6 flex gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <Quote className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm italic text-foreground/80">{quote}</p>
                </div>
              )}

              {stat && (
                <div className="mt-6 inline-flex items-center gap-4 p-4 rounded-xl bg-accent/5 border border-accent/10">
                  <span className="text-3xl font-extrabold text-primary">{stat.value}</span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              )}
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
};

export default SectionCard;
