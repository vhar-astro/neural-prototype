import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useComparison } from "@/context/ComparisonContext";

const ComparisonTable = () => {
  const { comparisonItems, removeFromComparison, clearComparison } = useComparison();

  if (comparisonItems.length === 0) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center">
        <p className="text-muted-foreground">Добавьте AI-агентов для сравнения, нажав кнопку «+» на карточке продукта</p>
      </div>
    );
  }

  const rows: { label: string; getValue: (p: typeof comparisonItems[0]) => string }[] = [
    { label: "Цена", getValue: p => p.price },
    { label: "Каналы работы", getValue: p => p.platform.join(", ") },
    { label: "Функции", getValue: p => p.features.slice(0, 3).join(", ") },
    { label: "Уровень автономности", getValue: p => p.autonomyLevel },
    { label: "Интеграции", getValue: p => p.integrations.slice(0, 3).join(", ") },
    { label: "Данные и безопасность", getValue: p => p.dataSecurity.slice(0, 60) + "…" },
    { label: "Ниша", getValue: p => p.niche.join(", ") },
    { label: "Модель оплаты", getValue: p => p.paymentModel },
    { label: "Рейтинг", getValue: p => `${p.rating} ⭐` },
  ];

  return (
    <div className="rounded-xl border border-border bg-card overflow-x-auto">
      <div className="flex items-center justify-between border-b border-border p-4">
        <h3 className="text-lg font-semibold">Сравнение ({comparisonItems.length})</h3>
        <Button variant="ghost" size="sm" onClick={clearComparison}>Очистить</Button>
      </div>
      <table className="w-full min-w-[600px]">
        <thead>
          <tr className="border-b border-border">
            <th className="p-3 text-left text-sm font-medium text-muted-foreground w-40">Параметр</th>
            {comparisonItems.map(item => (
              <th key={item.id} className="p-3 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-sm font-semibold">{item.name}</span>
                  <button onClick={() => removeFromComparison(item.id)} className="ml-auto text-muted-foreground hover:text-destructive">
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.label} className="border-b border-border last:border-0">
              <td className="p-3 text-sm font-medium text-muted-foreground">{row.label}</td>
              {comparisonItems.map(item => (
                <td key={item.id} className="p-3 text-sm">{row.getValue(item)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
