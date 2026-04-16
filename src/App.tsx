import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { FullPageLoader } from './components/LoadingSkeleton';
import { MobileNav } from './components/MobileNav';
import { HomePage } from './pages/HomePage';

const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const GuidePage = lazy(() => import('./pages/GuidePage').then((m) => ({ default: m.GuidePage })));
const SubmitPage = lazy(() => import('./pages/SubmitPage').then((m) => ({ default: m.SubmitPage })));
const ToolDetailPage = lazy(() => import('./pages/ToolDetailPage').then((m) => ({ default: m.ToolDetailPage })));

function AppLayout() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCategorySelect = (categoryId: string, subCategoryId?: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubCategory(subCategoryId || null);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar
        selectedCategory={selectedCategory}
        selectedSubCategory={selectedSubCategory}
        onCategorySelect={handleCategorySelect}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        isMobile={isMobile}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className={`flex min-w-0 flex-1 flex-col ${!isMobile ? 'ml-[280px]' : ''} ${isMobile ? 'pb-16' : ''}`}>
        {isMobile && (
          <div className="surface-panel sticky top-0 z-30 flex h-16 items-center justify-between border-b border-[var(--border-color)] px-4">
            <span className="font-display text-lg">智能零零 AI 工具</span>
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="warm-button-ghost !rounded-2xl !p-2.5"
              aria-label="打开菜单"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        )}

        <main className="flex-1">
          <ErrorBoundary>
            <Suspense fallback={<FullPageLoader />}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <HomePage
                      searchQuery={searchQuery}
                      selectedCategory={selectedCategory}
                      selectedSubCategory={selectedSubCategory}
                    />
                  }
                />
                <Route path="/tool/:id" element={<ToolDetailPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/guide" element={<GuidePage />} />
                <Route path="/submit" element={<SubmitPage />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>

        <Footer />
      </div>

      {isMobile && <MobileNav />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ErrorBoundary>
        <AppLayout />
      </ErrorBoundary>
    </Router>
  );
}
