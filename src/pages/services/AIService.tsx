import { Link } from 'react-router-dom';
import { Bot, Zap, MessageSquare, Workflow, CheckCircle, ArrowRight } from 'lucide-react';

export default function AIService() {
  const benefits = [
    'Reduce operational costs by 40-60%',
    'Improve response times from hours to seconds',
    'Scale customer support effortlessly',
    'Gain insights from customer interactions',
    'Free up team for high-value tasks',
  ];

  const services = [
    {
      title: 'AI Chatbots',
      description: 'Intelligent conversational AI for 24/7 support.',
      icon: <MessageSquare className="w-8 h-8" />,
    },
    {
      title: 'Workflow Automation',
      description: 'Automate tasks with smart solutions.',
      icon: <Workflow className="w-8 h-8" />,
    },
    {
      title: 'API Integrations',
      description: 'Connect AI with your existing tools.',
      icon: <Zap className="w-8 h-8" />,
    },
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: 'Automate 80% of inquiries.',
    },
    {
      title: 'Lead Qualification',
      description: 'Route leads automatically.',
    },
    {
      title: 'Data Processing',
      description: 'Real-time data insights.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Bot className="w-4 h-4" />
                <span>AI Solutions</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                Software & AI Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed tracking-wide mb-8">
                Automate tasks, enhance experiences, and unlock new capabilities with AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-10 py-5 text-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg shadow-purple-500/40 hover:shadow-purple-500/50"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center px-10 py-5 text-lg bg-white text-purple-600 font-bold rounded-xl border-2 border-purple-600 hover:bg-purple-50 transition-all shadow-md hover:shadow-lg"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl transform rotate-3 opacity-20"></div>
              <img
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="AI Services"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Custom AI implementations tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow border-2 border-gray-100 flex flex-col items-center text-center"
              >
                <div className="inline-flex p-3 rounded-lg bg-purple-600 text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-12 shadow-xl border-2 border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Benefits</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how AI can transform your operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Automate Your Business?</h2>
          <p className="text-xl mb-10 opacity-90">
            Let's discuss how AI can solve your specific challenges.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 text-lg bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl shadow-purple-900/20"
          >
            Schedule AI Consultation
            <ArrowRight className="ml-2 w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
