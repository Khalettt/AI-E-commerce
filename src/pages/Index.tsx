import Navbar from "@/components/Navbar";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import HeroSection from "@/components/HeroSection";
import ArticleMeta from "@/components/ArticleMeta";
import TableOfContents from "@/components/TableOfContents";
import SectionCard from "@/components/SectionCard";
import SocialShareBar from "@/components/SocialShareBar";
import BlogFooter from "@/components/BlogFooter";
import ScrollToTop from "@/components/ScrollToTop";
import { sections } from "@/data/sections";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ReadingProgressBar />
      <Navbar />
      <HeroSection />
      <ArticleMeta />
      <SocialShareBar />

      <div className="container mx-auto px-6 flex gap-10">
        <TableOfContents />
        <main className="flex-1 min-w-0">
          {sections.map((section, index) => (
            <SectionCard key={section.id} {...section} index={index} />
          ))}
        </main>
      </div>

      <SocialShareBar />
      <BlogFooter />
      <ScrollToTop />
    </div>
  );
};

export default Index;
