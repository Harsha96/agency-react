import { Link } from 'react-router-dom';
import { Code, Smartphone, Database, Cloud, CheckCircle, ArrowRight } from 'lucide-react';

export default function DevService() {
  const benefits = [
    'Custom solutions built for your unique needs',
    'Scalable architecture that grows with your business',
    'Modern tech stack with best practices',
    'Clean, maintainable code',
    'Ongoing support and maintenance',
  ];

  const services = [
    {
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
      icon: <Smartphone className="w-8 h-8" />,
    },
    {
      title: 'Web Applications',
      description: 'Full-featured web applications with modern frameworks and responsive design.',
      icon: <Code className="w-8 h-8" />,
    },
    {
      title: 'API Development',
      description: 'RESTful and GraphQL APIs for seamless integrations and data access.',
      icon: <Database className="w-8 h-8" />,
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions on AWS, Azure, or Google Cloud.',
      icon: <Cloud className="w-8 h-8" />,
    },
  ];

  const technologies = [
    'React & Vue.js',
    'Node.js & Python',
    'React Native & Flutter',
    'PostgreSQL & MongoDB',
    'AWS & Supabase',
    'Docker & Kubernetes',
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Code className="w-4 h-4" />
                <span>Software Development</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Software Development
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Full-stack development for web and mobile. We build robust, scalable systems that power modern businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-900 hover:bg-gray-50 transition-all"
                >
                  View Projects
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-gray-700 rounded-2xl transform rotate-3 opacity-20"></div>
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Software Development"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Build</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From MVPs to enterprise systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex p-3 rounded-lg bg-gray-900 text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Technologies We Use</h3>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Us</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl mb-10 opacity-90">
            Let's discuss your project and bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Get a Development Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
