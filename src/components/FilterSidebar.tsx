import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FilterSidebarProps {
  filters: {
    category: string;
    platform: string;
    paymentModel: string;
    autonomyLevel: string;
    niche: string;
  };
  onFilterChange: (key: string, value: string) => void;
}

const FilterGroup = ({ title, options, value, onChange }: {
  title: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b border-border pb-4">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-2 text-sm font-semibold">
        {title}
        {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>
      {open && (
        <div className="mt-1 flex flex-col gap-1">
          <button
            onClick={() => onChange("")}
            className={`rounded px-2 py-1 text-left text-sm transition-colors ${!value ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-muted"}`}
          >
            Все
          </button>
          {options.map(opt => (
            <button
              key={opt}
              onClick={() => onChange(opt)}
              className={`rounded px-2 py-1 text-left text-sm transition-colors ${value === opt ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-muted"}`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const FilterSidebar = ({ filters, onFilterChange }: FilterSidebarProps) => {
  return (
    <aside className="w-full space-y-4 rounded-xl border border-border bg-card p-4 lg:w-64">
      <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Фильтры</h3>
      <FilterGroup
        title="Категория"
        options={["Клиентская поддержка", "Продажи и лиды", "Контент и маркетинг", "Здравоохранение", "HoReCa", "Фитнес и здоровье", "Образование", "Аналитика"]}
        value={filters.category}
        onChange={v => onFilterChange("category", v)}
      />
      <FilterGroup
        title="Платформа"
        options={["Telegram", "Сайт", "CRM"]}
        value={filters.platform}
        onChange={v => onFilterChange("platform", v)}
      />
      <FilterGroup
        title="Модель оплаты"
        options={["Подписка", "Разовый платёж"]}
        value={filters.paymentModel}
        onChange={v => onFilterChange("paymentModel", v)}
      />
      <FilterGroup
        title="Уровень автономности"
        options={["Высокий", "Средний", "Низкий"]}
        value={filters.autonomyLevel}
        onChange={v => onFilterChange("autonomyLevel", v)}
      />
      <FilterGroup
        title="Рекомендуемая ниша"
        options={["Стоматология", "Маркетинговое агентство", "Онлайн-школа", "Ресторан / кафе", "E-commerce", "Фитнес / спорт"]}
        value={filters.niche}
        onChange={v => onFilterChange("niche", v)}
      />
    </aside>
  );
};

export default FilterSidebar;
