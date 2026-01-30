import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Target, TrendingUp, PenTool, Bot, Globe, BarChart, Code, Star, CheckCircle, Package, Lightbulb, MessageSquare, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Database } from '../lib/supabase';

type CaseStudy = Database['case_studies'];

export default function Home() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCaseStudies();
  }, []);

  const loadCaseStudies = async () => {
    const { data, error } = await supabase
      .from('case_studies')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false })
      .limit(3);

    if (!error && data) {
      setCaseStudies(data);
    }
    setLoading(false);
  };

  const services = [
    {
      icon: <PenTool className="w-8 h-8" />,
      title: 'SEO Content Writing',
      description: 'Rank higher with AI-optimized, human-crafted content that converts.',
      link: '/services/seo',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'AI Services',
      description: 'Custom AI solutions, chatbots, and intelligent automation for your business.',
      link: '/services/ai',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Website Building',
      description: 'Modern, responsive websites built with cutting-edge technology.',
      link: '/services/web',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights and predictive models.',
      link: '/services/data',
      color: 'from-orange-500 to-red-500',
    },
  ];

  // Updated "Why Choose Us" section
  const benefits = [
    {
      icon: <Package className="w-6 h-6" />,
      title: 'End-to-End Solutions',
      description: 'Complete digital services from start to finish — all under one roof.',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Creative & Technical Expertise',
      description: 'A perfect blend of artistic vision and technical mastery.',
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Clear Communication',
      description: 'Simple, transparent communication throughout every project.',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Tailored Solutions',
      description: 'Custom strategies designed specifically for your unique needs.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Reliable Support',
      description: 'Ongoing support and partnership you can trust.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      content: 'The AI chatbot they built reduced our support costs by 60% while improving customer satisfaction. Incredible ROI.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      company: 'GrowthCo',
      content: 'Their SEO content strategy increased our organic traffic by 400% in just 6 months. Game-changing results.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      company: 'DataFlow Systems',
      content: 'The analytics dashboard they created gave us insights we never knew we needed. Now we make better decisions daily.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Cleaned up (removed duplicate) */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-20 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Digital Solutions</span>
            </div>
            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight">
              Design. Develop. Deliver.
            </h1>

            {/* Sub-headline */}
            <p className="text-2xl md:text-3xl text-gray-700 font-medium mb-4">
              Everything your brand needs to succeed online
            </p>

            {/* Supporting line */}
            <p className="text-xl text-gray-600 mb-10">
              All your digital needs in one place.
            </p>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital services powered by AI and delivered by experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} text-white mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <div className="flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services/dev"
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all"
            >
              <Code className="w-5 h-5 mr-2" />
              Software Development
            </Link>
          </div>
        </div>
      </section>

      {/* Updated "Why Choose Us" Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for digital success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex p-3 rounded-lg bg-blue-100 text-blue-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Recent Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results for real businesses
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <img
                      src={study.image_url}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">{study.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tech_stack.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-start space-x-2 text-green-600">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <p className="text-sm font-medium line-clamp-2">{study.results}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
            >
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to grow your digital presence?</h2>
    <p className="text-xl mb-10 opacity-90">
      Let's build something impactful together.
    </p>
    <Link
      to="/contact"
      className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
    >
      Get Started with us
      <ArrowRight className="ml-2 w-5 h-5" />
    </Link>
  </div>
</section>
    </div>
  );
}