import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="mb-3 text-lg font-bold text-gradient">Neurosite</h3>
          <p className="text-sm text-muted-foreground">
            Маркетплейс AI-агентов для бизнеса. Находите, сравнивайте и внедряйте лучшие решения.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Платформа</h4>
          <div className="flex flex-col gap-2">
            <Link to="/marketplace" className="text-sm text-muted-foreground hover:text-primary transition-colors">Маркетплейс</Link>
            <Link to="/categories" className="text-sm text-muted-foreground hover:text-primary transition-colors">Категории</Link>
            <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Блог</Link>
          </div>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Сотрудничество</h4>
          <div className="flex flex-col gap-2">
            <Link to="/partners" className="text-sm text-muted-foreground hover:text-primary transition-colors">Для партнеров</Link>
            <Link to="/bloggers" className="text-sm text-muted-foreground hover:text-primary transition-colors">Для блогеров</Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">О платформе</Link>
          </div>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Контакты</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span>hello@neurosite.ru</span>
            <span>+7 (495) 123-45-67</span>
            <span>Москва, Россия</span>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
        © 2026 Neurosite. Все права защищены.
      </div>
    </div>
  </footer>
);

export default Footer;
