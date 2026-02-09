import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ComparisonProvider } from "@/context/ComparisonContext";
import Index from "./pages/Index";
import Marketplace from "./pages/Marketplace";
import ProductDetail from "./pages/ProductDetail";
import Categories from "./pages/Categories";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import Partners from "./pages/Partners";
import Bloggers from "./pages/Bloggers";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ComparisonProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogArticle />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/bloggers" element={<Bloggers />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ComparisonProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
