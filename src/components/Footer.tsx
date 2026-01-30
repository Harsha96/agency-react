import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AC</span>
              </div>
              <span className="font-bold text-xl text-white">Akinahs Collective</span>
            </div>
            <p className="text-sm leading-relaxed">
              All your digital needs in one place
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/design" className="hover:text-blue-400 transition-colors">
                  Graphic Design & Branding
                </Link>
              </li>
              <li>
                <Link to="/services/marketing" className="hover:text-blue-400 transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/web" className="hover:text-blue-400 transition-colors">
                  Website Design
                </Link>
              </li>
              <li>
                <Link to="/services/software" className="hover:text-blue-400 transition-colors">
                  Software & AI Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/support" className="hover:text-blue-400 transition-colors">
                  Content & Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-blue-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-blue-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="mailto:hello@akinahscollective.com" className="hover:text-blue-400 transition-colors">
                  hello@akinahscollective.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-blue-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>123 Tech Street, Silicon Valley, CA 94000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {currentYear} Akinahs Collective. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}