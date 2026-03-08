import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const posts = [
  {
    image: "/images/blog1.png",
    category: "Data Analytics",
    title: "How Data Analytics is Reshaping Business Decision Making in 2025",
    excerpt:
      "Discover the latest trends in data analytics and how businesses in Dehradun and beyond are leveraging data-driven insights for competitive advantage.",
    date: "Mar 5, 2025",
    readTime: "5 min read",
  },
  {
    image: "https://i.pinimg.com/1200x/29/f5/eb/29f5eb8878efc9e94360a08d3942164e.jpg",
    category: "Cloud Computing",
    title: "Cloud Migration Best Practices for Small & Medium Enterprises",
    excerpt:
      "A comprehensive guide on how SMEs can smoothly transition to cloud infrastructure while minimizing downtime and maximizing ROI.",
    date: "Feb 28, 2025",
    readTime: "7 min read",
  },
  {
    image: "https://i.pinimg.com/1200x/ba/13/98/ba1398f344ecb1dc14f916b3628f0a39.jpg",
    category: "Cybersecurity",
    title: "Essential Cybersecurity Measures Every Business Must Implement",
    excerpt:
      "Protect your business from evolving cyber threats with our expert recommendations on security frameworks and tools.",
    date: "Feb 20, 2025",
    readTime: "4 min read",
  },
];

export default function Blog() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal(0.1);

  return (
    <section id="blog" className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 reveal ${headerVisible ? "visible" : ""}`}
        >
          <div className="space-y-4">
            <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-xs font-medium bg-gray-100 text-gray-600 border-0">
              Blog & Insights
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Latest Articles
            </h2>
            <p className="text-gray-500 max-w-lg text-base md:text-lg">
              Stay updated with the latest trends, insights, and best practices in IT and technology.
            </p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors group">
            View all articles
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Blog Grid */}
        <div
          ref={gridRef}
          className={`grid md:grid-cols-3 gap-8 stagger-children reveal ${gridVisible ? "visible" : ""}`}
        >
          {posts.map((post, index) => (
            <Card key={index} className="group border-0 shadow-sm hover:shadow-xl transition-all duration-500 bg-white rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2">
              <div className="aspect-[16/11] overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <CardContent className="p-6 space-y-4">
                <Badge variant="secondary" className="rounded-full text-xs px-3 py-1 bg-gray-100 text-gray-600 border-0">
                  {post.category}
                </Badge>
                <h3 className="text-lg font-semibold text-gray-900 leading-snug line-clamp-2 group-hover:text-gray-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-4 pt-2 text-xs text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
