import { Link } from 'react-router-dom';
import { Globe, Smartphone, Zap, CheckCircle, ArrowRight } from 'lucide-react';

export default function WebService() {
  const benefits = [
    'Fast, responsive websites',
    'Trust-building modern design',
    'Optimized for conversions',
    'SEO-friendly architecture',
    'Scalable infrastructure',
  ];

  const services = [
    {
      title: 'Custom Website Development',
      description: 'Custom built to your specs.',
      icon: <Globe className="w-8 h-8" />,
    },
    {
      title: 'Landing Pages',
      description: 'High-converting pages.',
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: 'Responsive Design',
      description: 'Great experiences on all devices.',
      icon: <Smartphone className="w-8 h-8" />,
    },
  ];

  const features = [
    'Mobile-first responsive design',
    'Lightning-fast performance',
    'Modern UI/UX design',
    'SEO optimization',
    'Analytics integration',
    'Contact forms & CTA buttons',
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Globe className="w-4 h-4" />
                <span>Web Development</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                Website Building
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed tracking-wide mb-8">
                Modern, responsive websites with beautiful design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-10 py-5 text-lg bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg shadow-green-500/40 hover:shadow-green-500/50"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center px-10 py-5 text-lg bg-white text-green-600 font-bold rounded-xl border-2 border-green-600 hover:bg-green-50 transition-all shadow-md hover:shadow-lg"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl transform rotate-3 opacity-20"></div>
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Website Building"
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
              From simple landing pages to complex web applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow border-2 border-gray-100 flex flex-col items-center text-center"
              >
                <div className="inline-flex p-3 rounded-lg bg-green-600 text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Standard Features</h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-12 shadow-xl border-2 border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Key Benefits</h3>
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

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Launch Your Website?</h2>
          <p className="text-xl mb-10 opacity-90">
            Let's build a website that represents your brand and drives results.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 text-lg bg-white text-green-600 font-bold rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl shadow-green-900/20"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
