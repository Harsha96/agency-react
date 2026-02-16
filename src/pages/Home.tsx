import { Link } from 'react-router-dom';
import { ArrowRight, Target, Palette, Sparkles, Package, Lightbulb, Headphones, Shield, TrendingUp, Globe, Search, Code, CheckCircle, MessageSquare } from 'lucide-react';
import { SectionReveal, MaskedReveal } from '../components/SectionReveal';
import { WhoWeAre } from '../components/WhoWeAre';
import { ProjectShowcase } from '../components/ProjectShowcase';
import { MagneticWrapper } from '../components/MagneticWrapper';
import { MouseGlowCard, TiltCard } from '../components/InteractiveWrappers';
import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Database } from '../lib/supabase';
import { HeroParticles, RainParticles } from '../components/HeroParticles';

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
      icon: <Palette className="w-8 h-8" />,
      title: 'Graphic Design & Branding',
      description: 'Creative visuals, logos, and brand identities that make your business stand out.',
      link: '/services/design',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Digital Marketing & Social Media',
      description: 'Strategic online marketing to grow your audience and engagement.',
      link: '/services/seo',
      color: 'from-violet-500 to-purple-500',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Website Design & Development',
      description: 'Modern, responsive websites built for performance and usability.',
      link: '/services/web',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Software & AI Solutions',
      description: 'Custom software solutions designed to support and scale your business.',
      link: '/services/ai',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Content & Online Support',
      description: 'Clear content, ongoing support, and tailored digital solutions.',
      link: '/services/support',
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

  // Case studies and other logic...

  return (
    <div className="min-h-screen">

      {/* Hero Section - Premium Radial Blue Glow on Luminous White Backdrop */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white">
        {/* Layered Luminous Blue Core - Deeper and more intentional */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(circle at 40% 50%, rgba(37, 99, 235, 0.12) 0%, rgba(59, 130, 246, 0.05) 45%, transparent 85%),
              radial-gradient(circle at 60% 40%, rgba(96, 165, 250, 0.08) 0%, transparent 60%)
            `
          }}
        />

        {/* Hero Level Particle Magic - Adjusted for white background */}
        <HeroParticles />

        {/* Soft Background Accents */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 30, 0],
              y: [0, 20, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, -20, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[15%] right-[10%] w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[120px]"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-12">
          {/* Contained Hero Card - Premium Glassmorphism with Floating Motion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: "easeOut" }
            }}
            style={{
              y: useScroll().scrollYProgress.get() * -20 // Subtle parallax
            }}
            className="bg-blue-50/20 backdrop-blur-[100px] rounded-[3rem] shadow-[0_40px_100px_-25px_rgba(59,130,246,0.12)] border border-blue-200/40 p-10 md:p-16 lg:p-24 overflow-hidden relative group"
          >
            {/* Inner Border Glow */}
            <div className="absolute inset-0 border border-white/40 rounded-[3rem] pointer-events-none" />
            <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-400/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[3rem]" />
            {/* Subtle Gradient Decor */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-4xl">
              <MaskedReveal>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-[1.2] tracking-tight">
                  Design. Develop. <span className="text-blue-600">Deploy.</span>
                </h1>
              </MaskedReveal>

              <MaskedReveal delay={0.25}>
                <p className="text-xl md:text-2xl font-medium text-slate-600 mb-12 leading-relaxed max-w-2xl">
                  Everything your brand needs to grow online. <br />
                  All your digital needs, in one place.
                </p>
              </MaskedReveal>

              <div className="flex flex-wrap gap-6">
                <MagneticWrapper>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center px-10 py-5 text-xl bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-blue-500/20 active:scale-95"
                  >
                    Get started
                  </Link>
                </MagneticWrapper>

                <MagneticWrapper>
                  <Link
                    to="/services"
                    className="group inline-flex items-center justify-center px-10 py-5 text-xl bg-white/80 text-slate-900 font-bold rounded-2xl border-2 border-blue-100/50 hover:border-blue-600 hover:text-blue-600 backdrop-blur-sm transition-all duration-300 active:scale-95"
                  >
                    Our Services
                  </Link>
                </MagneticWrapper>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionReveal>
        <WhoWeAre />
      </SectionReveal>

      {/* Services Section - Light Blue Shade */}
      <section className="py-16 md:pt-12 md:pb-24 px-4 sm:px-6 lg:px-8 bg-blue-50/30 relative z-20 overflow-hidden">

        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 tracking-tight">Our Services</h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                Everything your brand needs to succeed online.
              </p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <SectionReveal key={index} delay={index * 0.05}>
                <TiltCard>
                  <MouseGlowCard className="h-full">
                    <Link
                      to={service.link}
                      className="group relative bg-blue-50/80 backdrop-blur-2xl rounded-[2.5rem] p-10 hover:bg-blue-100/50 transition-all duration-500 border border-blue-200/50 shadow-2xl shadow-blue-500/5 hover:border-blue-400/40 hover:shadow-blue-500/10 block h-full overflow-hidden flex flex-col items-center text-center"
                    >
                      {/* Dynamic Background Glow */}
                      <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700`} />

                      <div className={`p-5 bg-gradient-to-br ${service.color} rounded-2xl text-white mb-8 group-hover:scale-110 transition-transform duration-700 group-hover:rotate-6 shadow-lg shadow-blue-500/10`}>
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight">{service.title}</h3>
                      <p className="text-gray-600 mb-8 leading-relaxed flex-grow text-lg">{service.description}</p>
                      <div className="inline-flex items-center text-blue-600 font-bold group-hover:translate-x-3 transition-transform duration-500">
                        View Solution <ArrowRight className="ml-2 w-5 h-5" />
                      </div>
                    </Link>
                  </MouseGlowCard>
                </TiltCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Soft Light Blue Aesthetic */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Subtle Mesh Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.05)_0%,_transparent_70%)] z-[1]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionReveal>
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl md:text-6xl font-bold text-gray-950 mb-4 md:mb-6 tracking-tight">Why Choose Us</h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
            {benefits.map((benefit, index) => (
              <SectionReveal key={index} delay={index * 0.05}>
                <MouseGlowCard>
                  <div className="bg-blue-100/40 backdrop-blur-xl p-8 lg:p-10 rounded-[2.5rem] border border-blue-200/40 hover:border-blue-500/30 hover:bg-blue-100/60 transition-all duration-500 h-full group flex flex-col items-center text-center">
                    <div className="p-4 bg-blue-600/10 rounded-2xl text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-500">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-4">{benefit.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-base group-hover:text-slate-900 transition-colors">
                      {benefit.description}
                    </p>
                  </div>
                </MouseGlowCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* STYLISH Project Showcase Section */}
      {
        !loading && caseStudies.length > 0 && (
          <SectionReveal>
            <ProjectShowcase projects={caseStudies} />
          </SectionReveal>
        )
      }

      {/* How We Work Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Particle Rain Background Restored */}
        <RainParticles />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionReveal>
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl md:text-6xl font-bold text-gray-950 mb-4 md:mb-6 tracking-tight">How We Work</h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
            </div>
          </SectionReveal>

          <div className="relative">
            {/* Connecting Flow Lines (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full -translate-y-1/2 z-0">
              <svg className="w-full h-24 overflow-visible px-12">
                <motion.path
                  d="M 15 50 Q 50 0, 85 50 T 155 50 Q 190 0, 225 50 T 295 50"
                  fill="none"
                  stroke="url(#flowGradient)"
                  strokeWidth="4"
                  strokeDasharray="12 12"
                  initial={{ strokeDashoffset: 0 }}
                  animate={{ strokeDashoffset: -200 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="opacity-20"
                />
                <defs>
                  <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              {[
                {
                  icon: <Search className="w-10 h-10 text-blue-600" />,
                  title: 'Understand',
                  description: 'We listen to your needs and goals.',
                  step: '01',
                  accent: 'blue'
                },
                {
                  icon: <Code className="w-10 h-10 text-indigo-600" />,
                  title: 'Create',
                  description: 'We design and develop smart digital solutions.',
                  step: '02',
                  accent: 'indigo'
                },
                {
                  icon: <CheckCircle className="w-10 h-10 text-blue-600" />,
                  title: 'Deliver',
                  description: 'We launch, support, and help you grow.',
                  step: '03',
                  accent: 'blue'
                }
              ].map((step, index) => (
                <SectionReveal key={index} delay={index * 0.05}>
                  <div className="relative p-10 bg-blue-50/60 backdrop-blur-sm rounded-[2.5rem] border border-blue-100/50 group transition-all duration-700 hover:bg-blue-100/40 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.15)] group">
                    {/* Glowing Step Number */}
                    <div className="absolute top-6 right-8 text-5xl font-black text-slate-200/50 group-hover:text-blue-500/20 group-hover:scale-125 transition-all duration-700 select-none">
                      {step.step}
                      <div className="absolute inset-0 blur-2xl bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Pulsing Icon Container */}
                    <div className="relative p-5 bg-white rounded-2xl w-fit mb-8 shadow-sm group-hover:shadow-xl group-hover:shadow-blue-500/10 transition-all duration-700 transform group-hover:scale-110">
                      <div className="absolute inset-0 bg-blue-500/5 rounded-2xl animate-pulse scale-150 opacity-0 group-hover:opacity-100" />
                      {step.icon}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-950 mb-4 tracking-tight group-hover:text-blue-600 transition-colors duration-500">{step.title}</h3>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Our Promise Section - Ultra Clean */}
      <SectionReveal>
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/5 via-indigo-600/5 to-cyan-500/5 backdrop-blur-md text-gray-900 border-y border-blue-100/50 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-10 tracking-tight">Our Promise</h2>
            <p className="text-xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-8 leading-relaxed text-gray-700">
              "We don't just deliver services, we deliver <span className="text-blue-600 font-semibold">solutions that work</span>."
            </p>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6 md:mb-8 rounded-full" />
            <p className="text-sm md:text-xl font-bold tracking-widest uppercase text-blue-600">
              Clear ideas. Smart execution. Real results.
            </p>
          </div>
        </section>
      </SectionReveal>

      {/* CTA Section - Luxury Dark */}
      <section className="py-24 md:py-40 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/10 z-[1] blur-3xl opacity-50" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <SectionReveal>
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-extrabold text-white mb-8 md:mb-10 tracking-tighter leading-[0.95]">
              Ready to grow your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
                digital presence?
              </span>
            </h2>
            <p className="text-lg md:text-2xl text-slate-400 mb-12 md:mb-16 leading-relaxed max-w-2xl mx-auto">
              Let's build something impactful together.
            </p>
            <MagneticWrapper>
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-6 py-3 sm:px-10 sm:py-5 text-base sm:text-xl bg-white text-slate-950 font-bold rounded-2xl hover:bg-blue-50 transition-all duration-500 shadow-[0_0_50px_rgba(59,130,246,0.3)] transform active:scale-95 translate-y-0 hover:-translate-y-2"
              >
                Get Started with us
                <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </MagneticWrapper>
          </SectionReveal>
        </div>
      </section>
    </div >
  );
}