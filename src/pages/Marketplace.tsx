import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import FilterSidebar from "@/components/FilterSidebar";
import ComparisonTable from "@/components/ComparisonTable";
import { products } from "@/data/products";
import { useComparison } from "@/context/ComparisonContext";

const Marketplace = () => {
  const [searchParams] = useSearchParams();
  const { comparisonItems } = useComparison();
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    category: searchParams.get("category") || "",
    platform: "",
    paymentModel: "",
    autonomyLevel: "",
    niche: searchParams.get("niche") || "",
  });

  const showComparison = searchParams.get("compare") === "true" || comparisonItems.length > 0;

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const filtered = useMemo(() => {
    return products.filter(p => {
      if (search && !p.name.toLowerCase().includes(search.toLowerCase()) && !p.shortDescription.toLowerCase().includes(search.toLowerCase())) return false;
      if (filters.category && p.category !== filters.category) return false;
      if (filters.platform && !p.platform.includes(filters.platform)) return false;
      if (filters.paymentModel && p.paymentModel !== filters.paymentModel) return false;
      if (filters.autonomyLevel && p.autonomyLevel !== filters.autonomyLevel) return false;
      if (filters.niche && !p.niche.some(n => n.includes(filters.niche))) return false;
      return true;
    });
  }, [search, filters]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-6 text-3xl font-bold">Маркетплейс AI-агентов</h1>

        {/* Search */}
        <div className="relative mb-6 max-w-lg">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Поиск по названию или задаче..." value={search} onChange={e => setSearch(e.target.value)} className="pl-10" />
        </div>

        <div className="flex flex-col gap-6 lg:flex-row">
          <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
          <div className="flex-1 space-y-8">
            {/* Comparison */}
            {showComparison && (
              <ComparisonTable />
            )}

            {/* Products grid */}
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
            {filtered.length === 0 && (
              <div className="rounded-xl border border-border bg-card p-12 text-center">
                <p className="text-muted-foreground">Ничего не найдено. Попробуйте изменить фильтры.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Marketplace;
