import { Link } from "react-router-dom";
import { ArrowRight, PenTool, Share2, DollarSign, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Bloggers = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <section className="gradient-hero py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold text-primary-foreground lg:text-5xl">Для блогеров</h1>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Пишите обзоры на AI-агентов, делитесь опытом и зарабатывайте на реферальной программе
        </p>
        <Button size="lg" className="mt-8 gradient-primary text-primary-foreground border-0 px-8">
          Присоединиться как блогер <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>

    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-8 text-center text-2xl font-bold">Модель сотрудничества</h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {[
          { icon: <PenTool className="h-8 w-8 text-primary" />, title: "Публикуйте статьи", desc: "Пишите обзоры, сравнения и гайды по AI-агентам. Мы поможем с продвижением." },
          { icon: <Share2 className="h-8 w-8 text-primary" />, title: "Делитесь ссылками", desc: "Получите персональную реферальную ссылку. Каждый переход отслеживается." },
          { icon: <DollarSign className="h-8 w-8 text-primary" />, title: "Зарабатывайте", desc: "10% от каждой продажи по вашей реферальной ссылке. Без ограничений по сумме." },
        ].map((item, i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-6 text-center shadow-card">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">{item.icon}</div>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-muted/50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-2xl font-bold">Что вы получите</h2>
        <div className="mx-auto max-w-2xl grid gap-3">
          {[
            "Доступ к бесплатному тестированию AI-агентов",
            "Персональная реферальная ссылка с аналитикой",
            "Приоритетная публикация статей в блоге Neurosite",
            "Участие в партнёрских мероприятиях и вебинарах",
            "Эксклюзивные материалы и инсайды от разработчиков",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 rounded-lg bg-card p-4 border border-border">
              <CheckCircle className="h-5 w-5 shrink-0 text-success" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Bloggers;
