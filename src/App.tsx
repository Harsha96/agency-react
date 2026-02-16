import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';
import SmoothScroll from './components/SmoothScroll';
import { lazy, Suspense, useEffect } from 'react';

// Lazy load all pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const SEOService = lazy(() => import('./pages/services/SEOService'));
const AIService = lazy(() => import('./pages/services/AIService'));
const WebService = lazy(() => import('./pages/services/WebService'));
const DataService = lazy(() => import('./pages/services/DataService'));
const DevService = lazy(() => import('./pages/services/DevService'));
const DesignService = lazy(() => import('./pages/services/DesignService'));
const SupportService = lazy(() => import('./pages/services/SupportService'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Login'));
const Admin = lazy(() => import('./pages/Admin'));

import { InteractiveMascot } from './components/InteractiveMascot';
import GlobalBackground from './components/GlobalBackground';

// Preload critical routes for instant navigation
const preloadRoute = (importFn: () => Promise<any>) => {
  importFn();
};

function AppContent() {
  const location = useLocation();

  // Prefetch commonly accessed pages after initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      // Preload critical routes in the background
      preloadRoute(() => import('./pages/About'));
      preloadRoute(() => import('./pages/Services'));
      preloadRoute(() => import('./pages/Contact'));
    }, 2000); // Wait 2s after initial load to avoid blocking main content

    return () => clearTimeout(timer);
  }, []);

  return (
    <SmoothScroll>
      <GlobalBackground />
      <div className="flex flex-col min-h-screen relative z-10">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <div key={location.pathname} className="animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
            <Suspense fallback={<div className="min-h-screen bg-slate-50" />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/seo" element={<SEOService />} />
                <Route path="/services/ai" element={<AIService />} />
                <Route path="/services/web" element={<WebService />} />
                <Route path="/services/data" element={<DataService />} />
                <Route path="/services/dev" element={<DevService />} />
                <Route path="/services/design" element={<DesignService />} />
                <Route path="/services/support" element={<SupportService />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute>
                      <Admin />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </Suspense>
          </div>
        </main>
        <Footer />
        <InteractiveMascot />
      </div>
    </SmoothScroll>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
