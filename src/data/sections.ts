import {
  Brain,
  ShoppingCart,
  Sparkles,
  Bot,
  BarChart3,
  Share2,
  TrendingUp,
  ShieldAlert,
  Lightbulb,
  Globe,
} from "lucide-react";

import sectionIntro from "@/assets/section-intro.jpg";
import sectionAiEcommerce from "@/assets/section-ai-ecommerce.jpg";
import sectionRecommendations from "@/assets/section-recommendations.jpg";
import sectionChatbots from "@/assets/section-chatbots.jpg";
import sectionAnalytics from "@/assets/section-analytics.jpg";
import sectionSocial from "@/assets/section-social.jpg";
import sectionAdvantages from "@/assets/section-advantages.jpg";
import sectionChallenges from "@/assets/section-challenges.jpg";
import sectionConclusion from "@/assets/section-conclusion.jpg";

export const sections = [
  {
    id: "intro",
    title: "Introduction",
    description:
      "Artificial Intelligence is no longer a futuristic concept — it's the driving force behind modern e-commerce. Combined with the explosive reach of social media, AI is fundamentally transforming how businesses sell, market, and connect with consumers worldwide.",
    image: sectionIntro,
    icon: Brain,
    highlightWords: ["Artificial Intelligence", "e-commerce", "social media"],
  },
  {
    id: "ai-overview",
    title: "AI and E-commerce Overview",
    description:
      "The global AI in e-commerce market is projected to reach $16.8 billion by 2030. From intelligent search to automated warehousing, AI permeates every layer of online retail infrastructure, creating unprecedented efficiency gains.",
    image: sectionAiEcommerce,
    icon: Globe,
    highlightWords: ["$16.8 billion", "intelligent search", "efficiency"],
    quote: "AI is not replacing commerce — it's redefining it entirely.",
    stat: { value: "$16.8B", label: "Projected AI e-commerce market by 2030" },
  },
  {
    id: "ai-ecommerce",
    title: "AI in E-Commerce",
    description:
      "From personalized shopping experiences to intelligent supply chain management, AI enables online businesses to operate smarter and faster. Machine learning algorithms analyze customer behavior to optimize pricing, inventory, and product discovery in real-time.",
    image: sectionAiEcommerce,
    icon: ShoppingCart,
    highlightWords: ["Machine learning", "personalized", "real-time"],
    stat: { value: "35%", label: "Of Amazon revenue comes from AI recommendations" },
  },
  {
    id: "recommendations",
    title: "Recommendation Systems",
    description:
      "Platforms like Amazon, Netflix, and Spotify leverage deep learning recommendation engines to suggest products and content. These systems analyze browsing history, purchase patterns, and user preferences to create hyper-personalized experiences that drive engagement and sales.",
    image: sectionRecommendations,
    icon: Sparkles,
    highlightWords: ["deep learning", "hyper-personalized", "engagement"],
    quote: "Netflix saves $1 billion per year through its recommendation engine by reducing subscriber churn.",
  },
  {
    id: "chatbots",
    title: "AI-Powered Chatbots",
    description:
      "Modern chatbots powered by natural language processing provide 24/7 customer support, handle complex queries, and even process transactions. They reduce operational costs while delivering instant, consistent service that scales effortlessly across millions of users.",
    image: sectionChatbots,
    icon: Bot,
    highlightWords: ["natural language processing", "24/7", "scales"],
    stat: { value: "80%", label: "Of businesses plan to use chatbots by 2026" },
  },
  {
    id: "analytics",
    title: "Predictive Analytics",
    description:
      "By analyzing historical data and market trends, predictive analytics helps businesses forecast demand, detect fraud, and anticipate customer needs before they arise. This data-driven approach transforms decision-making from reactive to proactive.",
    image: sectionAnalytics,
    icon: BarChart3,
    highlightWords: ["predictive analytics", "forecast", "data-driven"],
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    description:
      "Platforms like Instagram, TikTok, and Facebook have become essential marketing channels. AI-driven ad targeting, influencer matching, and content optimization enable brands to reach precisely the right audience at the right moment with compelling, personalized messaging.",
    image: sectionSocial,
    icon: Share2,
    highlightWords: ["Instagram", "TikTok", "Facebook", "AI-driven"],
    quote: "Social commerce sales are expected to reach $2.9 trillion by 2026.",
  },
  {
    id: "advantages",
    title: "Key Advantages",
    description:
      "The integration of AI in e-commerce delivers measurable benefits: enhanced customer experience through personalization, increased conversion rates, reduced operational costs, and data-backed decision making. Businesses adopting AI see up to 30% improvement in sales performance.",
    image: sectionAdvantages,
    icon: TrendingUp,
    highlightWords: ["30%", "conversion rates", "personalization"],
    stat: { value: "30%", label: "Sales improvement with AI adoption" },
  },
  {
    id: "challenges",
    title: "Challenges & Concerns",
    description:
      "Despite its benefits, AI adoption raises critical concerns around data privacy, algorithmic bias, and security vulnerabilities. The proliferation of deepfakes and misinformation on social media adds complexity. Businesses must balance innovation with ethical responsibility and regulatory compliance.",
    image: sectionChallenges,
    icon: ShieldAlert,
    highlightWords: ["data privacy", "algorithmic bias", "ethical responsibility"],
  },
  {
    id: "conclusion",
    title: "Conclusion",
    description:
      "AI and social media are inseparable forces reshaping e-commerce. As technology evolves, businesses that embrace AI responsibly while leveraging social platforms strategically will lead the next era of digital commerce. The future belongs to those who innovate with purpose.",
    image: sectionConclusion,
    icon: Lightbulb,
    highlightWords: ["responsibly", "innovate with purpose", "digital commerce"],
    quote: "The future of commerce belongs to those who blend AI intelligence with human creativity.",
  },
];
