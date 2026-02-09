import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const BlogArticle = () => {
  const { id } = useParams();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <p className="text-muted-foreground">Статья не найдена</p>
          <Link to="/blog"><Button className="mt-4">Вернуться в блог</Button></Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Link to="/blog" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="h-4 w-4" /> Назад в блог
        </Link>
        <article className="mx-auto max-w-3xl">
          <div className="text-sm text-muted-foreground">{article.date} · {article.readTime}</div>
          <h1 className="mt-2 text-3xl font-bold lg:text-4xl">{article.title}</h1>
          <div className="mt-2 text-sm text-muted-foreground">Автор: {article.author}</div>
          <div className="prose mt-8 max-w-none">
            {article.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return <h2 key={i} className="mt-8 mb-3 text-xl font-semibold">{paragraph.replace("## ", "")}</h2>;
              }
              if (paragraph.startsWith("- ")) {
                return (
                  <ul key={i} className="my-3 list-disc pl-6 space-y-1">
                    {paragraph.split("\n").map((li, j) => (
                      <li key={j} className="text-muted-foreground">{li.replace("- ", "")}</li>
                    ))}
                  </ul>
                );
              }
              if (/^\d\./.test(paragraph)) {
                return (
                  <ol key={i} className="my-3 list-decimal pl-6 space-y-1">
                    {paragraph.split("\n").map((li, j) => (
                      <li key={j} className="text-muted-foreground">{li.replace(/^\d\.\s/, "")}</li>
                    ))}
                  </ol>
                );
              }
              return <p key={i} className="my-3 text-muted-foreground leading-relaxed">{paragraph}</p>;
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-xl gradient-primary p-8 text-center">
            <h3 className="text-xl font-bold text-primary-foreground">Найдите подходящего AI-агента</h3>
            <p className="mt-2 text-primary-foreground/80">Более 50 проверенных решений на Neurosite</p>
            <Link to="/marketplace">
              <Button size="lg" variant="secondary" className="mt-4">Перейти в маркетплейс</Button>
            </Link>
          </div>
        </article>

        {/* Related products */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">Рекомендуемые AI-агенты</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogArticle;
