import { Link } from 'react-router-dom';
import { PenTool, Bot, Globe, BarChart, Code, ArrowRight, CheckCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <PenTool className="w-12 h-12" />,
      title: 'SEO Content Writing',
      description: 'Drive organic traffic with content that ranks and converts.',
      features: [
        'Blog posts & articles',
        'Website content',
        'Product descriptions',
        'Technical writing',
        'Social media content',
      ],
      link: '/services/seo',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: 'AI Services',
      description: 'Intelligent automation and AI-powered solutions.',
      features: [
        'AI chatbots',
        'Workflow automation',
        'API integrations',
        'Natural language processing',
        'Machine learning models',
      ],
      link: '/services/ai',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Website Building',
      description: 'Modern, responsive websites that drive results.',
      features: [
        'Custom web development',
        'Landing pages',
        'E-commerce platforms',
        'Responsive design',
        'Performance optimization',
      ],
      link: '/services/web',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <BarChart className="w-12 h-12" />,
      title: 'Data Analytics',
      description: 'Transform data into actionable business insights.',
      features: [
        'Dashboard development',
        'Business intelligence',
        'Data visualization',
        'Predictive analytics',
        'Reporting automation',
      ],
      link: '/services/data',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Software Development',
      description: 'Full-stack development for web and mobile.',
      features: [
        'Mobile applications',
        'Web applications',
        'API development',
        'Database design',
        'Cloud infrastructure',
      ],
      link: '/services/dev',
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Comprehensive Digital Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From AI-powered content to custom software development, we provide end-to-end solutions that help your business grow and scale.
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
