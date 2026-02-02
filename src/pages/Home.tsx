import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Target, TrendingUp, PenTool, Bot, Globe, BarChart, Code, Star, CheckCircle, Package, Lightbulb, MessageSquare, Shield } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { supabase } from '../lib/supabase';
import type { Database } from '../lib/supabase';
import CatEyes from '../components/cateyes';

type CaseStudy = Database['case_studies'];

export default function Home() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadCaseStudies();
    
    // Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
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
    // new 
    
    //end return
    <div className="min-h-screen">
      {/* ===== ELEGANT ANIMATED HERO SECTION ===== */}
      <section 
        ref={heroRef}
        className="relative bg-gradient-to-br from-gray-900 via-slate-900/95 to-gray-900 pt-24 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden gradient-flow"
        style={{ 
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #0f172a 100%)',
          backgroundSize: '400% 400%'
        }}
      >
        {/* Cat mascot – scrolls with hero */}
<div className="absolute bottom-8 right-8 hidden md:block z-20">
  <CatEyes />
</div>

        {/* Animated gradient orbs */}
        <div className="absolute -top-48 -right-48 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/15 to-purple-700/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-48 -left-48 w-[400px] h-[400px] bg-gradient-to-br from-cyan-500/15 to-emerald-600/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '-12s' }}></div>
        
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{ 
            backgroundImage: `url("image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        ></div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center animate-fade-in">
          {/* Floating glass badge with fade-in */}
          <div className={`inline-flex items-center space-x-2 glass-card px-5 py-2.5 rounded-full text-sm font-medium mb-10 mx-auto transform transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Sparkles className="w-4 h-4 text-blue-400 animate-pulse-slow" />
            <span className="text-blue-200">Design. Develop. Deliver.</span>
          </div>
          
          {/* Headline with gradient text */}
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            Design.{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent gradient-text">
              Develop
            </span>
            . Deliver.
          </h1>

          {/* Sub-headline */}
          <p className={`text-2xl md:text-3xl text-slate-300 font-medium mb-10 max-w-3xl mx-auto transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            Everything your brand needs to succeed online
          </p>

          {/* Supporting text */}
          <p className={`text-xl text-slate-400 mb-12 max-w-2xl mx-auto transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            All your digital needs in one place.
          </p>

          {/* CTA buttons with staggered fade-in */}
          <div className={`flex flex-col sm:flex-row gap-5 justify-center transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Primary CTA with pulse glow */}
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-500 transition-all transform hover:scale-[1.03] shadow-lg hover:shadow-blue-500/40 relative overflow-hidden group min-w-[200px] pulse-glow"
            >
              <span className="relative z-10 flex items-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            
            {/* Secondary CTA */}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 glass-card text-white font-semibold rounded-xl hover:bg-white/15 transition-all transform hover:scale-[1.02] min-w-[200px]"
            >
              Contact Us
            </Link>
          </div>
        </div>

      </section>

      {/* ===== WHAT WE DO SECTION ===== */}
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
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} text-white mb-4 transform transition-transform duration-500 group-hover:scale-110`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <div className="flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services/dev"
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all transform hover:scale-105"
            >
              <Code className="w-5 h-5 mr-2" />
              Software Development
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US SECTION ===== */}
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
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="inline-flex p-3 rounded-lg bg-blue-100 text-blue-600 mb-4 transform transition-transform duration-300 hover:scale-110">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RECENT WORK SECTION ===== */}
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
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <img
                      src={study.image_url}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">{study.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tech_stack.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full transform transition-transform hover:scale-105"
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
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
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
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
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

      {/* ===== FINAL CTA SECTION ===== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to grow your digital presence?</h2>
          <p className="text-xl mb-10 opacity-90">
            Let's build something impactful together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg pulse-glow"
          >
            Get Started with us
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}