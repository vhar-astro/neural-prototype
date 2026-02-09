import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, DollarSign, Upload, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const steps = [
  { icon: <Upload className="h-8 w-8 text-primary" />, title: "Зарегистрируйтесь", desc: "Создайте аккаунт разработчика на Neurosite" },
  { icon: <CheckCircle className="h-8 w-8 text-primary" />, title: "Опишите продукт", desc: "Заполните карточку: функции, цены, интеграции" },
  { icon: <BarChart3 className="h-8 w-8 text-primary" />, title: "Пройдите модерацию", desc: "Мы проверим качество и безопасность решения" },
  { icon: <DollarSign className="h-8 w-8 text-primary" />, title: "Получайте клиентов", desc: "Ваш AI-агент доступен тысячам потенциальных клиентов" },
];

const benefits = [
  "Доступ к растущей аудитории бизнес-пользователей",
  "Маркетинговая поддержка и продвижение",
  "Аналитика продаж и поведения пользователей",
  "Гибкая модель монетизации (подписка / разовый платёж)",
  "Техническая поддержка от команды Neurosite",
  "Размещение кейсов и статей в блоге",
];

const Partners = () => (
  <div className="min-h-screen bg-background">
    <Header />

    {/* Hero */}
    <section className="gradient-hero py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold text-primary-foreground lg:text-5xl">Для партнеров</h1>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Публикуйте ваших AI-агентов на Neurosite и получайте доступ к тысячам бизнес-клиентов
        </p>
        <Button
          size="lg"
          variant="outline"
          className="mt-8 border-primary-foreground/30 bg-transparent px-8 text-primary-foreground hover:bg-primary-foreground/10"
        >
          Стать партнером <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>

    {/* Steps */}
    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-8 text-center text-2xl font-bold">Как опубликовать AI-агента</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-6 text-center shadow-card">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">{step.icon}</div>
            <div className="mb-1 text-xs font-bold text-primary">Шаг {i + 1}</div>
            <h3 className="font-semibold">{step.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Benefits */}
    <section className="bg-muted/50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-2xl font-bold">Преимущества</h2>
        <div className="mx-auto max-w-2xl grid gap-3">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-center gap-3 rounded-lg bg-card p-4 border border-border">
              <CheckCircle className="h-5 w-5 shrink-0 text-success" />
              <span className="text-sm">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Revenue */}
    <section className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-2xl rounded-xl border border-border bg-card p-8 text-center shadow-card">
        <h2 className="text-2xl font-bold">Модель дохода</h2>
        <p className="mt-4 text-muted-foreground">
          Вы устанавливаете цену. Neurosite берёт комиссию 15% с продаж. Никаких скрытых платежей. 
          Выплаты 2 раза в месяц на расчётный счёт.
        </p>
        <Link to="/marketplace">
          <Button className="mt-6 gradient-primary text-primary-foreground border-0">Посмотреть каталог</Button>
        </Link>
      </div>
    </section>

    <Footer />
  </div>
);

export default Partners;
