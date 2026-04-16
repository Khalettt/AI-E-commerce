import { motion } from "framer-motion";
import { Calendar, Clock, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ArticleMeta = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="container mx-auto px-6 py-8 flex flex-wrap items-center gap-6 text-muted-foreground text-sm"
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10 border-2 border-primary/20">
          <AvatarFallback className="bg-primary/10 text-primary font-bold">AP</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-foreground">AIPulse Editorial</p>
          <p className="text-xs text-muted-foreground">Tech & AI Writer</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Calendar className="h-4 w-4" />
        <span>April 16, 2026</span>
      </div>

      <div className="flex items-center gap-2">
        <Clock className="h-4 w-4" />
        <span>5 min read</span>
      </div>
    </motion.div>
  );
};

export default ArticleMeta;
