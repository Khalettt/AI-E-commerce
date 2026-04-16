import { useState } from "react";
import { motion } from "framer-motion";
import { Twitter, Facebook, Linkedin, Link2, Heart, Bookmark, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const SocialShareBar = () => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const url = typeof window !== "undefined" ? window.location.href : "";
  const title = "Impact of AI on E-Commerce and Role of Social Media";

  const share = (platform: string) => {
    const urls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    };
    window.open(urls[platform], "_blank", "width=600,height=400");
  };

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    toast({ title: "Link copied!", description: "Article link copied to clipboard." });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="container mx-auto px-6 py-6 flex flex-wrap items-center gap-3"
    >
      <span className="text-sm font-medium text-muted-foreground mr-2">Share:</span>
      <Button variant="outline" size="icon" className="rounded-full h-9 w-9" onClick={() => share("twitter")}>
        <Twitter className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" className="rounded-full h-9 w-9" onClick={() => share("facebook")}>
        <Facebook className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" className="rounded-full h-9 w-9" onClick={() => share("linkedin")}>
        <Linkedin className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" className="rounded-full h-9 w-9" onClick={copyLink}>
        <Link2 className="h-4 w-4" />
      </Button>

      <div className="ml-auto flex items-center gap-2">
        <Button
          variant={liked ? "default" : "outline"}
          size="sm"
          className="rounded-full gap-1.5"
          onClick={() => setLiked(!liked)}
        >
          <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
          {liked ? "Liked" : "Like"}
        </Button>
        <Button
          variant={bookmarked ? "default" : "outline"}
          size="sm"
          className="rounded-full gap-1.5"
          onClick={() => setBookmarked(!bookmarked)}
        >
          <Bookmark className={`h-4 w-4 ${bookmarked ? "fill-current" : ""}`} />
          {bookmarked ? "Saved" : "Save"}
        </Button>
      </div>
    </motion.div>
  );
};

export default SocialShareBar;
