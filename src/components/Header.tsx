import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const services = [
    { name: 'SEO Content Writing', path: '/services/seo' },
    { name: 'AI Services', path: '/services/ai' },
    { name: 'Website Building', path: '/services/web' },
    { name: 'Data Analytics', path: '/services/data' },
    { name: 'Software Development', path: '/services/dev' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">AC</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Akinahs Collective</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              About
            </Link>

            <div className="relative group">
              <button
                className={`text-sm font-medium flex items-center space-x-1 transition-colors ${
                  location.pathname.startsWith('/services') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(true)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 border border-gray-100"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    to="/services"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    All Services
                  </Link>
                  <div className="border-t border-gray-100 my-1"></div>
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/portfolio"
              className={`text-sm font-medium transition-colors ${
                isActive('/portfolio') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Portfolio
            </Link>
            <Link
              to="/blog"
              className={`text-sm font-medium transition-colors ${
                isActive('/blog') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
            {user && (
              <>
                <Link
                  to="/admin"
                  className={`text-sm font-medium transition-colors ${
                    isActive('/admin') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Admin
                </Link>
                <button
                  onClick={() => signOut()}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                About
              </Link>
              <Link to="/services" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                Services
              </Link>
              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 pl-4"
                >
                  {service.name}
                </Link>
              ))}
              <Link to="/portfolio" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                Portfolio
              </Link>
              <Link to="/blog" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                Blog
              </Link>
              <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                Contact Us
              </Link>
              {user && (
                <>
                  <Link to="/admin" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                    Admin
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="text-sm font-medium text-gray-700 hover:text-blue-600 text-left"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
