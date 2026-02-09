import React, { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/data/products";

interface ComparisonContextType {
  comparisonItems: Product[];
  addToComparison: (product: Product) => void;
  removeFromComparison: (productId: string) => void;
  isInComparison: (productId: string) => boolean;
  clearComparison: () => void;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

export const ComparisonProvider = ({ children }: { children: ReactNode }) => {
  const [comparisonItems, setComparisonItems] = useState<Product[]>([]);

  const addToComparison = (product: Product) => {
    if (comparisonItems.length < 4 && !comparisonItems.find(p => p.id === product.id)) {
      setComparisonItems(prev => [...prev, product]);
    }
  };

  const removeFromComparison = (productId: string) => {
    setComparisonItems(prev => prev.filter(p => p.id !== productId));
  };

  const isInComparison = (productId: string) => {
    return comparisonItems.some(p => p.id === productId);
  };

  const clearComparison = () => setComparisonItems([]);

  return (
    <ComparisonContext.Provider value={{ comparisonItems, addToComparison, removeFromComparison, isInComparison, clearComparison }}>
      {children}
    </ComparisonContext.Provider>
  );
};

export const useComparison = () => {
  const context = useContext(ComparisonContext);
  if (!context) throw new Error("useComparison must be used within ComparisonProvider");
  return context;
};
