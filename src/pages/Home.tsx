import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Target, PenTool, Bot, Package, Lightbulb, MessageSquare, Shield, Users, Layout } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Database } from '../lib/supabase';
import { InteractiveGrid } from '../components/InteractiveGrid';
import { ParallaxIcons } from '../components/ParallaxIcons';
import { Process } from '../components/Process';
import { WhoWeAre } from '../components/WhoWeAre';
import { ProjectShowcase } from '../components/ProjectShowcase';

type CaseStudy = Database['case_studies'];

export default function Home() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCaseStudies();
  }, []);

  const loadCaseStudies = async () => {
    // Only fetching 3 for the showcase, but showcasing them in a premium way
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
      title: 'Graphic Design & Branding',
      description: 'Creative visuals, logos, and brand identities that make your business stand out.',
      link: '/services/web',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Digital Marketing & Social Media',
      description: 'Strategic online marketing to grow your audience and engagement.',
      link: '/services/seo',
      color: 'from-violet-500 to-purple-500',
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: 'Website Design & Development',
      description: 'Modern, responsive websites built for performance and usability.',
      link: '/services/web',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'Software & AI Solutions',
      description: 'Custom software solutions designed to support and scale your business.',
      link: '/services/ai',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Content & Online Support',
      description: 'Clear content, ongoing support, and tailored digital solutions.',
      link: '/services/seo',
      color: 'from-pink-500 to-rose-500',
    }
  ];

  const benefits = [
    {
      icon: <Package className="w-6 h-6" />,
      title: 'End-to-end digital solutions',
      description: 'We handle everything under one roof.',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Creative and technical expertise',
      description: 'Artistic vision meets technical mastery.',
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Simple, clear communication',
      description: 'No jargon, just transparent partnership.',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Solutions tailored to your needs',
      description: 'Custom strategies for your unique goals.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Reliable support you can trust',
      description: 'We are here when you need us.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-cyan-50 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow [animation-delay:1s]" />

        <InteractiveGrid />
        <ParallaxIcons />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-medium text-violet-600 mb-8 shadow-sm animate-fade-in-up">
              <Sparkles className="w-4 h-4" />
              <span className="tracking-wide">Everything your brand needs to succeed online</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 mb-8 leading-[1.1] tracking-tight animate-fade-in-up [animation-delay:100ms]">
              Design. Develop. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-500 to-indigo-600">
                Deliver.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 font-medium mb-12 animate-fade-in-up [animation-delay:200ms] leading-relaxed max-w-2xl mx-auto">
              All your digital needs in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in-up [animation-delay:300ms]">
              {/* Primary Call to Action */}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-blue-500/20"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>

              {/* Secondary Call to Action */}
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-lg bg-white text-slate-900 font-bold rounded-2xl border-2 border-slate-200 hover:border-violet-200 hover:bg-violet-50 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* REACTIVE Who We Are Section */}
      <WhoWeAre />

      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">What We Do</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our Services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 100} width="100%">
                <Link
                  to={service.link}
                  className="group relative bg-white rounded-2xl p-8 hover:bg-white transition-all duration-300 border border-slate-100 hover:border-violet-100 hover:shadow-2xl hover:shadow-violet-500/10 block h-full overflow-hidden flex flex-col items-center text-center"
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-5 rounded-bl-full group-hover:opacity-10 transition-opacity`} />

                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} text-white mb-6 shadow-lg transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex items-center text-violet-600 font-bold group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-900" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Us</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-violet-500 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-slate-700 rounded-lg text-violet-400 mr-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                </div>
                <p className="text-slate-400 pl-14">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STYLISH Project Showcase Section */}
      {!loading && caseStudies.length > 0 && (
        <ProjectShowcase projects={caseStudies} />
      )}

      {/* Process Section (How We Work) */}
      <Process />

      {/* Our Promise Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-violet-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Promise</h2>
          <p className="text-2xl md:text-3xl font-light mb-6">
            "We don’t just deliver services, we deliver solutions that work."
          </p>
          <p className="text-xl font-bold tracking-wide uppercase">
            Clear ideas. Smart execution. Real results.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/50" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">
            Ready to grow your digital presence?
          </h2>
          <p className="text-2xl text-slate-600 mb-12 leading-relaxed">
            Let’s build something impactful together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-12 py-6 text-xl bg-slate-900 text-white font-bold rounded-2xl hover:bg-black transition-all transform hover:scale-105 shadow-2xl hover:shadow-violet-500/20"
          >
            Get Started with us
            <ArrowRight className="ml-3 w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}