import { Link } from 'react-router-dom';
import { PenTool, Bot, Globe, BarChart, Code, ArrowRight, CheckCircle, Palette, Megaphone, MessageSquare, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'Graphic Design & Branding',
      description: 'Creative visuals, logos, and brand identities that make your business stand out.',
      features: [
        'Logo design & brand identity',
        'Marketing materials',
        'Social media graphics',
        'Packaging design',
        'Brand guidelines',
      ],
      link: '/services/design',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Megaphone className="w-12 h-12" />,
      title: 'Digital Marketing & Social Media',
      description: 'Strategic online marketing to grow your audience and engagement.',
      features: [
        'Social media management',
        'Content strategy',
        'Paid advertising campaigns',
        'Email marketing',
        'Analytics & reporting',
      ],
      link: '/services/marketing',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Website Design & Development',
      description: 'Modern, responsive websites built for performance and usability.',
      features: [
        'Custom website design',
        'Responsive development',
        'E-commerce solutions',
        'CMS integration',
        'SEO optimization',
      ],
      link: '/services/web',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: 'Software & AI Solutions',
      description: 'Custom software solutions designed to support and scale your business.',
      features: [
        'Custom software development',
        'AI-powered automation',
        'API integrations',
        'Mobile applications',
        'Cloud infrastructure',
      ],
      link: '/services/software',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: 'Content & Online Support',
      description: 'Clear content, ongoing support, and tailored digital solutions.',
      features: [
        'Content creation & copywriting',
        'Ongoing technical support',
        'Website maintenance',
        'Digital strategy consulting',
        'Training & documentation',
      ],
      link: '/services/support',
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Everything your brand needs to succeed online — all under one roof.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6`}>
                    {service.icon}
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={service.link}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>

                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl transform rotate-3 opacity-20`}></div>
                    <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                      <div className={`w-full h-64 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                        <div className="text-white opacity-50">
                          {service.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Not Sure Which Service You Need?</h2>
          <p className="text-xl mb-10 opacity-90">
            Let's talk about your goals and find the perfect solution for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}