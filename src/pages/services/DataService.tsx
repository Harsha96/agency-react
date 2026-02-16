import { Link } from 'react-router-dom';
import { BarChart, TrendingUp, PieChart, CheckCircle, ArrowRight } from 'lucide-react';

export default function DataService() {
  const benefits = [
    'Confidence in data-driven decisions',
    'Identify hidden opportunities',
    'Predict trends and behavior',
    'Automate reporting',
    'Actionable insights',
  ];

  const services = [
    {
      title: 'Dashboard Development',
      description: 'Real-time metrics visualization.',
      icon: <BarChart className="w-8 h-8" />,
    },
    {
      title: 'Business Intelligence',
      description: 'Strategic insights for decision-making.',
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      title: 'Data Visualization',
      description: 'Compelling, easy-to-understand visuals.',
      icon: <PieChart className="w-8 h-8" />,
    },
  ];

  const capabilities = [
    'Dashboard creation',
    'Predictive analytics',
    'Data cleaning & preparation',
    'Automated reporting',
    'Custom metrics tracking',
    'Integration with existing tools',
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gray-50 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <BarChart className="w-4 h-4" />
                <span>Data Analytics</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                Data Analytics
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed tracking-wide mb-8">
                Actionable insights and predictive models for business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-10 py-5 text-lg bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-xl hover:from-orange-700 hover:to-red-700 transition-all shadow-lg shadow-orange-500/40 hover:shadow-orange-500/50"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center px-10 py-5 text-lg bg-white text-orange-600 font-bold rounded-xl border-2 border-orange-600 hover:bg-orange-50 transition-all shadow-md hover:shadow-lg"
                >
                  See Examples
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl transform rotate-3 opacity-20"></div>
              <img
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Data Analytics"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Analytics Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From data collection to actionable insights
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow border-2 border-gray-100 flex flex-col items-center text-center"
              >
                <div className="inline-flex p-3 rounded-lg bg-orange-600 text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Capabilities</h3>
              <div className="space-y-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{capability}</span>
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

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Unlock the Power of Your Data</h2>
          <p className="text-xl mb-10 opacity-90">
            Let's turn your data into a competitive advantage.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 text-lg bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl shadow-orange-900/20"
          >
            Schedule Data Consultation
            <ArrowRight className="ml-2 w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
