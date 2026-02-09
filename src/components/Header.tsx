import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-close mobile menu when navigating to a new page
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isHomePage = location.pathname === '/';
  const isDarkHeader = isHomePage && !scrolled;

  const isActive = (path: string) => location.pathname === path;

  const services = [
    { name: 'Graphic Design & Branding', path: '/services/design' },
    { name: 'Digital Marketing', path: '/services/seo' },
    { name: 'Website Building', path: '/services/web' },
    { name: 'Software & AI', path: '/services/ai' },
    { name: 'Online Support', path: '/services/support' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
      ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm py-4'
      : 'bg-transparent py-6'
      }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className={`w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg transition-all duration-500 ${scrolled ? 'scale-90' : 'scale-100'}`}>
              <span className="text-white font-bold text-xl">AC</span>
            </div>
            <span className={`font-bold text-xl tracking-tight transition-colors duration-300 ${isDarkHeader ? 'text-white' : 'text-gray-900 group-hover:text-blue-600'
              }`}>
              Akinahs Collective
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-semibold tracking-wide transition-colors ${isActive('/')
                ? 'text-blue-600'
                : (isDarkHeader ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-blue-600')
                }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-semibold tracking-wide transition-colors ${isActive('/about')
                ? 'text-blue-600'
                : (isDarkHeader ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-blue-600')
                }`}
            >
              About
            </Link>

            <div className="relative group">
              <button
                className={`text-sm font-semibold tracking-wide flex items-center space-x-1 transition-colors ${location.pathname.startsWith('/services')
                  ? 'text-blue-600'
                  : (isDarkHeader ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-blue-600')
                  }`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(true)}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl py-3 border border-gray-100 animate-fade-in-up"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    to="/services"
                    className="block px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    All Services
                  </Link>
                  <div className="border-t border-gray-100 my-2 mx-5"></div>
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/portfolio"
              className={`text-sm font-semibold tracking-wide transition-colors ${isActive('/portfolio')
                ? 'text-blue-600'
                : (isDarkHeader ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-blue-600')
                }`}
            >
              Portfolio
            </Link>
            <Link
              to="/blog"
              className={`text-sm font-semibold tracking-wide transition-colors ${isActive('/blog')
                ? 'text-blue-600'
                : (isDarkHeader ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-blue-600')
                }`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg shadow-blue-500/20"
            >
              Contact Us
            </Link>
            {user && (
              <>
                <Link
                  to="/admin"
                  className={`text-sm font-semibold tracking-wide transition-colors ${isActive('/admin') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                    }`}
                >
                  Admin
                </Link>
                <button
                  onClick={() => signOut()}
                  className="text-sm font-semibold tracking-wide text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${isDarkHeader ? 'text-white hover:bg-white/10' : 'text-gray-900 hover:bg-gray-100'
              }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-100 bg-white shadow-xl rounded-b-2xl overflow-hidden animate-fade-in-up">
            <div className="flex flex-col space-y-3 px-4">
              <Link to="/" className="text-base font-semibold text-gray-900 hover:text-blue-600 px-2 py-2 transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-base font-semibold text-gray-900 hover:text-blue-600 px-2 py-2 transition-colors">
                About
              </Link>
              <Link to="/services" className="text-base font-semibold text-gray-900 hover:text-blue-600 px-2 py-2 transition-colors">
                Services
              </Link>
              <div className="grid grid-cols-1 gap-2 pl-4 border-l-2 border-blue-100">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="text-sm font-medium text-gray-600 hover:text-blue-600 py-1.5 transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <Link to="/portfolio" className="text-base font-semibold text-gray-900 hover:text-blue-600 px-2 py-2 transition-colors">
                Portfolio
              </Link>
              <Link to="/blog" className="text-base font-semibold text-gray-900 hover:text-blue-600 px-2 py-2 transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center py-3 bg-blue-600 text-white font-bold rounded-xl mt-4 shadow-lg shadow-blue-500/20">
                Contact Us
              </Link>
              {user && (
                <div className="border-t border-gray-100 pt-4 mt-4 flex flex-col space-y-3">
                  <Link to="/admin" className="text-base font-semibold text-gray-900 hover:text-blue-600 px-2 py-2 transition-colors">
                    Admin
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="text-base font-semibold text-gray-900 hover:text-blue-600 text-left px-2 py-2"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
