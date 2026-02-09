import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles } from "@/data/products";

const Blog = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-2 text-3xl font-bold">Блог</h1>
      <p className="mb-8 text-muted-foreground">Статьи об AI-агентах, кейсы и лучшие практики</p>
      <div className="grid gap-6 sm:grid-cols-2">
        {articles.map(article => (
          <Link key={article.id} to={`/blog/${article.id}`} className="group rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-1">
            <div className="text-xs text-muted-foreground">{article.date} · {article.readTime} · {article.author}</div>
            <h2 className="mt-2 text-xl font-semibold group-hover:text-primary transition-colors">{article.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{article.excerpt}</p>
            <span className="mt-4 inline-block text-sm font-medium text-primary">Читать →</span>
          </Link>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

export default Blog;
