import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { categories } from "@/data/products";

const Categories = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-2 text-3xl font-bold">Категории AI-агентов</h1>
      <p className="mb-8 text-muted-foreground">Выберите категорию, чтобы найти подходящее решение</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map(cat => (
          <Link
            key={cat.id}
            to={`/marketplace?category=${encodeURIComponent(cat.name)}`}
            className="group flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center shadow-card transition-all hover:shadow-card-hover hover:-translate-y-1"
          >
            <span className="text-5xl">{cat.icon}</span>
            <h3 className="mt-4 text-lg font-semibold group-hover:text-primary transition-colors">{cat.name}</h3>
            <span className="mt-1 text-sm text-muted-foreground">{cat.count} агентов</span>
          </Link>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

export default Categories;
