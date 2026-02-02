import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import SEOService from './pages/services/SEOService';
import AIService from './pages/services/AIService';
import WebService from './pages/services/WebService';
import DataService from './pages/services/DataService';
import DevService from './pages/services/DevService';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Admin from './pages/Admin';

import { InteractiveMascot } from './components/InteractiveMascot';

function AppContent() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <div key={location.pathname} className="animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/seo" element={<SEOService />} />
            <Route path="/services/ai" element={<AIService />} />
            <Route path="/services/web" element={<WebService />} />
            <Route path="/services/data" element={<DataService />} />
            <Route path="/services/dev" element={<DevService />} />
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
        </div>
      </main>
      <Footer />
      <InteractiveMascot />
    </div>
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
