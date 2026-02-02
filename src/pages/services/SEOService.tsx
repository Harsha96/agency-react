import { Link } from 'react-router-dom';
import { PenTool, TrendingUp, Search, Target, CheckCircle, ArrowRight } from 'lucide-react';

export default function SEOService() {
  const benefits = [
    'Increase organic traffic by 300%+',
    'Improve search engine rankings',
    'Drive qualified leads to your site',
    'Build brand authority and trust',
    'Long-term sustainable growth',
  ];

  const services = [
    {
      title: 'Blog Posts & Articles',
      description: 'In-depth, SEO-optimized content that educates and engages your audience.',
    },
    {
      title: 'Website Content',
      description: 'Compelling copy for landing pages, product pages, and service descriptions.',
    },
    {
      title: 'Product Descriptions',
      description: 'Persuasive descriptions that convert browsers into buyers.',
    },
    {
      title: 'Technical Content',
      description: 'Complex topics explained clearly for your technical audience.',
    },
    {
      title: 'Social Media Writing',
      description: 'Engaging posts that drive traffic and build your brand presence.',
    },
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      result: 'Increased organic traffic by 400% and sales by 150%',
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      industry: 'SaaS',
      result: 'Generated 10x more qualified leads from organic search',
      icon: <Target className="w-8 h-8" />,
    },
    {
      industry: 'B2B Services',
      result: 'Established thought leadership with 50+ ranking keywords',
      icon: <Search className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <PenTool className="w-4 h-4" />
                <span>Content Services</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                SEO Content Writing
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Rank higher on Google with AI-optimized, human-crafted content that converts readers into customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all"
                >
                  View Examples
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl transform rotate-3 opacity-20"></div>
              <img
                src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="SEO Content Writing"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What You Get</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive content solutions designed to boost your online visibility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow border-2 border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-12">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our SEO content has helped businesses like yours
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-xl border-2 border-gray-100 text-center"
              >
                <div className="inline-flex p-4 rounded-xl bg-blue-100 text-blue-600 mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.industry}</h3>
                <p className="text-gray-600 leading-relaxed">{useCase.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Dominate Search Results?</h2>
          <p className="text-xl mb-10 opacity-90">
            Let's create content that ranks, engages, and converts.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Start Your Content Strategy
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
