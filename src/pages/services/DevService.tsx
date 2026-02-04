import { Link } from 'react-router-dom';
import { Code, Smartphone, Database, Cloud, CheckCircle, ArrowRight } from 'lucide-react';

export default function DevService() {
  const benefits = [
    'Custom solutions for your needs',
    'Scalable architecture',
    'Modern tech stack',
    'Clean, maintainable code',
    'Ongoing support',
  ];

  const services = [
    {
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps.',
      icon: <Smartphone className="w-8 h-8" />,
    },
    {
      title: 'Web Applications',
      description: 'Full-featured modern web apps.',
      icon: <Code className="w-8 h-8" />,
    },
    {
      title: 'API Development',
      description: 'Seamless integrations and data access.',
      icon: <Database className="w-8 h-8" />,
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable solutions on AWS/Azure/GCP.',
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
      <section className="relative bg-gray-50 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Code className="w-4 h-4" />
                <span>Software Development</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                Software Development
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed tracking-wide mb-8">
                Robust, scalable systems that power modern businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-10 py-5 text-lg bg-gradient-to-r from-gray-900 to-gray-800 text-white font-bold rounded-xl hover:from-black hover:to-gray-900 transition-all shadow-lg shadow-gray-500/40 hover:shadow-gray-500/50"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center px-10 py-5 text-lg bg-white text-gray-900 font-bold rounded-xl border-2 border-gray-900 hover:bg-gray-50 transition-all shadow-md hover:shadow-lg"
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
                className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow border-2 border-gray-100 flex flex-col items-center text-center"
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

            <div className="bg-white rounded-2xl p-12 shadow-xl border-2 border-gray-100">
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
            className="inline-flex items-center justify-center px-10 py-5 text-lg bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl shadow-gray-900/20"
          >
            Get a Development Quote
            <ArrowRight className="ml-2 w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
