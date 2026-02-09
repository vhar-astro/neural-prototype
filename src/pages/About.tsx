import { Shield, Eye, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <section className="gradient-hero py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold text-primary-foreground lg:text-5xl">О платформе</h1>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Neurosite — экосистема для поиска, сравнения и внедрения AI-агентов в бизнес
        </p>
      </div>
    </section>

    <section className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl space-y-12">
        <div className="rounded-xl border border-border bg-card p-8 shadow-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold">Миссия</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Мы верим, что AI-агенты — это будущее автоматизации бизнеса. Наша миссия — сделать технологии искусственного интеллекта доступными для каждой компании, от малого бизнеса до крупных корпораций. Neurosite объединяет лучших разработчиков AI-решений и бизнес-пользователей, создавая прозрачный и удобный рынок.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-8 shadow-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold">Доверие и модерация</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Каждый AI-агент на платформе проходит многоступенчатую проверку: техническую экспертизу, аудит безопасности данных и оценку пользовательского опыта. Мы публикуем только проверенные решения с прозрачными условиями использования. Отзывы и рейтинги формируются реальными пользователями.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-8 shadow-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Eye className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold">Видение</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Мы строим экосистему, где AI-агенты станут стандартным инструментом для бизнеса — как CRM или мессенджер. Neurosite станет центром, где компании находят, сравнивают и внедряют AI-решения для любых задач: от клиентской поддержки до стратегической аналитики.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { value: "50+", label: "AI-агентов на платформе" },
            { value: "1 200+", label: "Активных пользователей" },
            { value: "98%", label: "Удовлетворённость клиентов" },
          ].map((stat, i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-6 text-center shadow-card">
              <div className="text-3xl font-bold text-gradient">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
