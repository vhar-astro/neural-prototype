import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, Check, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { useComparison } from "@/context/ComparisonContext";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToComparison, isInComparison } = useComparison();

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <p className="text-muted-foreground">Продукт не найден</p>
          <Link to="/marketplace"><Button className="mt-4">Вернуться в маркетплейс</Button></Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Link to="/marketplace" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="h-4 w-4" /> Назад в маркетплейс
        </Link>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                {product.icon && <span className="text-6xl">{product.icon}</span>}
                <div>
                  <h1 className="text-2xl font-bold">{product.name}</h1>
                  <div className="mt-1 flex items-center gap-2">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="font-medium">{product.rating}</span>
                    <Badge variant="secondary">{product.category}</Badge>
                  </div>
                  <p className="mt-3 text-muted-foreground">{product.fullDescription}</p>
                </div>
              </div>
            </div>

            {product.videoUrl && (
              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="mb-4 text-lg font-semibold">Видео-демонстрация</h2>
                <div className="aspect-video overflow-hidden rounded-lg">
                  <iframe
                    className="h-full w-full"
                    src={product.videoUrl}
                    title={`${product.name} Video Demo`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}

            {/* Features */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="mb-4 text-lg font-semibold">Функции</h2>
              <div className="grid gap-2 sm:grid-cols-2">
                {product.features.map(f => (
                  <div key={f} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-success" />
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="mb-4 text-lg font-semibold">Сценарии использования</h2>
              <div className="space-y-4">
                {product.useCases.map((uc, i) => (
                  <div key={i} className="rounded-lg bg-muted/50 p-4">
                    <h3 className="font-medium">{uc.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{uc.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Integrations */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="mb-4 text-lg font-semibold">Интеграции</h2>
              <div className="flex flex-wrap gap-2">
                {product.integrations.map(i => (
                  <Badge key={i} variant="outline">{i}</Badge>
                ))}
              </div>
            </div>

            {/* Security */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                <Shield className="h-5 w-5 text-primary" /> Данные и безопасность
              </h2>
              <p className="text-sm text-muted-foreground">{product.dataSecurity}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="sticky top-24 space-y-4">
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="text-2xl font-bold text-primary">{product.price}</div>
                <div className="mt-1 text-sm text-muted-foreground">{product.paymentModel}</div>
                {product.trialAvailable && <Badge className="mt-2 bg-success/10 text-success border-success/20">Пробный период</Badge>}

                <div className="mt-6 space-y-3">
                  <Button className="w-full gradient-primary text-primary-foreground border-0">Купить</Button>
                  <Button
                    variant={isInComparison(product.id) ? "secondary" : "outline"}
                    className="w-full"
                    onClick={() => addToComparison(product)}
                    disabled={isInComparison(product.id)}
                  >
                    {isInComparison(product.id) ? "В сравнении ✓" : "Добавить к сравнению"}
                  </Button>
                  <Button variant="ghost" className="w-full">Связаться с разработчиком</Button>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-2 text-sm font-semibold">Платформы</h3>
                <div className="flex flex-wrap gap-1">{product.platform.map(p => <Badge key={p} variant="outline">{p}</Badge>)}</div>
                <h3 className="mb-2 mt-4 text-sm font-semibold">Уровень автономности</h3>
                <Badge>{product.autonomyLevel}</Badge>
                <h3 className="mb-2 mt-4 text-sm font-semibold">Рекомендуемая ниша</h3>
                <div className="flex flex-wrap gap-1">{product.niche.map(n => <Badge key={n} variant="outline">{n}</Badge>)}</div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-semibold">Разработчик</div>
                    <div className="text-sm text-muted-foreground">{product.developer}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
