import { Link } from "react-router-dom";
import { Star, Plus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";
import { useComparison } from "@/context/ComparisonContext";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToComparison, removeFromComparison, isInComparison } = useComparison();
  const inComparison = isInComparison(product.id);

  return (
    <div className="group rounded-xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
      <div className="mb-3 flex items-start justify-between">
        <span className="text-4xl">{product.icon}</span>
        <Badge variant="secondary" className="text-xs">
          {product.paymentModel}
        </Badge>
      </div>

      <h3 className="mb-1 text-lg font-semibold">{product.name}</h3>
      <p className="mb-3 text-sm text-muted-foreground line-clamp-2">{product.shortDescription}</p>

      <div className="mb-3 flex items-center gap-1">
        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
        <span className="text-sm font-medium">{product.rating}</span>
        <span className="ml-2 text-xs text-muted-foreground">{product.category}</span>
      </div>

      <div className="mb-3 flex flex-wrap gap-1">
        {product.niche.map(n => (
          <Badge key={n} variant="outline" className="text-[10px]">{n}</Badge>
        ))}
      </div>

      <div className="mb-4 text-sm font-semibold text-primary">{product.price}</div>

      <div className="flex gap-2">
        <Link to={`/product/${product.id}`} className="flex-1">
          <Button variant="default" size="sm" className="w-full">Подробнее</Button>
        </Link>
        <Button
          variant={inComparison ? "secondary" : "outline"}
          size="sm"
          onClick={() => inComparison ? removeFromComparison(product.id) : addToComparison(product)}
        >
          {inComparison ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
