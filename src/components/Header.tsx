import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GitCompare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useComparison } from "@/context/ComparisonContext";

const navItems = [
  { label: "Главная", path: "/" },
  { label: "Маркетплейс", path: "/marketplace" },
  { label: "Категории", path: "/categories" },
  { label: "Блог", path: "/blog" },
  { label: "Для партнеров", path: "/partners" },
  { label: "Для блогеров", path: "/bloggers" },
  { label: "О платформе", path: "/about" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { comparisonItems } = useComparison();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <span className="text-gradient">Neurosite</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted ${
                location.pathname === item.path ? "bg-muted text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/marketplace?compare=true">
            <Button variant="outline" size="sm" className="relative">
              <GitCompare className="h-4 w-4" />
              {comparisonItems.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                  {comparisonItems.length}
                </span>
              )}
            </Button>
          </Link>
          <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border bg-card px-4 py-4 lg:hidden">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted ${
                location.pathname === item.path ? "bg-muted text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
