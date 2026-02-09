import { Link } from "react-router-dom";
import { ArrowRight, Star, Zap, Shield, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, niches, categories, articles } from "@/data/products";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const popularProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 gradient-hero opacity-80" />
        </div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 bg-primary/20 text-primary-foreground border-primary/30">🚀 Платформа AI-агентов</Badge>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-primary-foreground lg:text-6xl">
              Найдите идеального<br />
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">AI-агента</span> для бизнеса
            </h1>
            <p className="mb-8 text-lg text-primary-foreground/80">
              Маркетплейс проверенных AI-решений для автоматизации продаж, поддержки, маркетинга и операций. Сравнивайте, выбирайте, внедряйте.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link to="/marketplace">
                <Button size="lg" className="gradient-primary text-primary-foreground border-0 px-8 text-base">
                  Найти AI-агента <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/partners">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 text-base">
                  Стать партнером
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Agents */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold lg:text-3xl">Популярные AI-агенты</h2>
            <p className="mt-1 text-muted-foreground">Лучшие решения по рейтингу пользователей</p>
          </div>
          <Link to="/marketplace" className="text-sm font-medium text-primary hover:underline">
            Смотреть все →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {popularProducts.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Niches */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold lg:text-3xl">Ниши / Продуктизация опыта</h2>
            <p className="mt-2 text-muted-foreground">Готовые подборки AI-агентов для вашей сферы</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {niches.map(niche => (
              <div key={niche.id} className="rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-1">
                <span className="text-4xl">{niche.icon}</span>
                <h3 className="mt-3 text-lg font-semibold">{niche.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{niche.description}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {niche.agentIds.map(aid => {
                    const agent = products.find(p => p.id === aid);
                    return agent ? <Badge key={aid} variant="outline" className="text-xs">{agent.name}</Badge> : null;
                  })}
                </div>
                <Link to={`/marketplace?niche=${encodeURIComponent(niche.name)}`}>
                  <Button variant="ghost" size="sm" className="mt-4 text-primary">
                    Посмотреть подборку <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-2xl font-bold lg:text-3xl">Категории</h2>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/marketplace?category=${encodeURIComponent(cat.name)}`}
              className="group flex flex-col items-center rounded-xl border border-border bg-card p-4 text-center shadow-card transition-all hover:shadow-card-hover hover:-translate-y-1"
            >
              <span className="text-3xl">{cat.icon}</span>
              <span className="mt-2 text-sm font-medium">{cat.name}</span>
              <span className="text-xs text-muted-foreground">{cat.count} агентов</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-2xl font-bold lg:text-3xl">Последние статьи</h2>
            <Link to="/blog" className="text-sm font-medium text-primary hover:underline">Все статьи →</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {articles.map(article => (
              <Link key={article.id} to={`/blog/${article.id}`} className="group rounded-xl border border-border bg-card p-5 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-1">
                <span className="text-xs text-muted-foreground">{article.date} · {article.readTime}</span>
                <h3 className="mt-2 text-sm font-semibold group-hover:text-primary transition-colors line-clamp-2">{article.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Neurosite */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-center text-2xl font-bold lg:text-3xl">Почему Neurosite</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: <Zap className="h-8 w-8 text-primary" />, title: "Быстрый подбор", desc: "Фильтры и сравнение помогут найти решение за минуты" },
            { icon: <Shield className="h-8 w-8 text-primary" />, title: "Проверенные агенты", desc: "Каждый агент проходит модерацию и верификацию" },
            { icon: <Star className="h-8 w-8 text-primary" />, title: "Реальные отзывы", desc: "Рейтинги от реальных пользователей и кейсы внедрения" },
            { icon: <BarChart3 className="h-8 w-8 text-primary" />, title: "Аналитика эффекта", desc: "Отслеживайте ROI от внедрения AI-агентов" },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-6 text-center shadow-card">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">{item.icon}</div>
              <h3 className="mb-1 font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
