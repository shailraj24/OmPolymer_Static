import { useState } from 'react';
import { useHashRoute } from './hooks/useHashRoute';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { QuoteModal } from './components/QuoteModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const { route, navigate } = useHashRoute();
  const { isDark, toggleTheme } = useTheme();

  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteProductId, setQuoteProductId] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (productId?: string) => {
    setQuoteProductId(productId);
    setQuoteModalOpen(true);
  };

  const currentHash = typeof window !== 'undefined' ? window.location.hash : '';

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 selection:bg-blue-600 selection:text-white transition-colors">
      
      {/* Sticky Navigation */}
      <Navbar
        currentHash={currentHash}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Main Page View Routing */}
      <main className="flex-1">
        {route.page === 'home' && (
          <HomePage
            onOpenQuoteModal={handleOpenQuoteModal}
            onNavigate={navigate}
          />
        )}

        {route.page === 'about' && (
          <AboutPage
            onOpenQuoteModal={() => handleOpenQuoteModal()}
            onNavigate={navigate}
          />
        )}

        {route.page === 'products' && (
          <ProductsPage
            onOpenQuoteModal={handleOpenQuoteModal}
            onNavigate={navigate}
          />
        )}

        {route.page === 'product-detail' && (
          <ProductDetailPage
            productId={route.productId}
            onOpenQuoteModal={handleOpenQuoteModal}
            onNavigate={navigate}
          />
        )}

        {route.page === 'blog' && (
          <BlogPage
            onNavigate={navigate}
          />
        )}

        {route.page === 'blog-detail' && (
          <BlogDetailPage
            blogId={route.blogId}
            onNavigate={navigate}
          />
        )}

        {route.page === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Commercial Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preSelectedProductId={quoteProductId}
      />

    </div>
  );
}
