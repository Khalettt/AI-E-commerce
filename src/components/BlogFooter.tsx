import { Brain, Twitter, Github, Linkedin, Instagram } from "lucide-react";

const BlogFooter = () => {
  return (
    <footer className="gradient-primary py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <Brain className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold text-primary-foreground">
              AI<span className="text-primary">Pulse</span>
            </span>
          </div>

          <p className="text-primary-foreground/60 text-sm text-center max-w-md">
            © 2026 AIPulse. Exploring the intersection of AI, commerce, and social media. Built with passion for technology.
          </p>

          <div className="flex items-center gap-4">
            {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-primary-foreground/50 hover:text-primary transition-colors duration-200"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;
