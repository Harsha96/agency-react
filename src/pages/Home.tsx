import { Link } from 'react-router-dom';
import { ArrowRight, Target, Palette, Sparkles, Package, Lightbulb, Headphones, Shield, TrendingUp, Globe, MessageSquare, Zap } from 'lucide-react';
import { SectionReveal } from '../components/SectionReveal';
import { WhoWeAre } from '../components/WhoWeAre';
import { ProjectShowcase } from '../components/ProjectShowcase';
import { MagneticWrapper } from '../components/MagneticWrapper';
import { MouseGlowCard } from '../components/InteractiveWrappers';
import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Database } from '../lib/supabase';
import { HeroParticles, RainParticles } from '../components/HeroParticles';
import { SectionDivider } from '../components/SectionDivider';
import { ModernCarousel } from '../components/ModernCarousel';
import { Counter } from '../components/Counter';
import { HowWeWorkAnimated } from '../components/HowWeWorkAnimated';

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
      icon: <Palette className="w-10 h-10" />,
      title: 'Graphic Design & Branding',
      description: 'Visuals and identities that make your brand unforgettable.',
      features: ['Logo design', 'Brand identity', 'Marketing materials', 'Packaging'],
      link: '/services/design',
      color: 'from-blue-600 to-cyan-500',
      iconColor: 'text-white',
      shadow: 'shadow-blue-500/20',
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'Digital Marketing & Social Media',
      description: 'Smart strategies to grow your reach and engagement.',
      features: ['SM Management', 'Content strategy', 'Paid ads', 'Analytics'],
      link: '/services/seo',
      color: 'from-violet-600 to-purple-500',
      iconColor: 'text-white',
      shadow: 'shadow-violet-500/20',
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: 'Website Design & Development',
      description: 'Fast, modern, and responsive websites built to perform.',
      features: ['Custom design', 'Responsive dev', 'E-commerce', 'SEO'],
      link: '/services/web',
      color: 'from-emerald-600 to-teal-500',
      iconColor: 'text-white',
      shadow: 'shadow-emerald-500/20',
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: 'Software & AI Solutions',
      description: 'Custom systems designed to scale with your business.',
      features: ['Custom software', 'AI automation', 'API integration', 'Mobile apps'],
      link: '/services/ai',
      color: 'from-orange-600 to-amber-500',
      iconColor: 'text-white',
      shadow: 'shadow-orange-500/20',
    },
    {
      icon: <Headphones className="w-10 h-10" />,
      title: 'Content & Online Support',
      description: 'Clear content and ongoing support when you need it.',
      features: ['Copywriting', 'Tech support', 'Maintenance', 'Consulting'],
      link: '/services/support',
      color: 'from-pink-600 to-rose-500',
      iconColor: 'text-white',
      shadow: 'shadow-pink-500/20',
    },
  ];

  const benefits = [
    {
      icon: <Package className="w-6 h-6" />,
      title: 'End to end digital solutions',
      description: 'We handle everything under one roof.',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Creative + technical expertise',
      description: 'Artistic vision meets technical mastery.',
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Clear, honest communication',
      description: 'No jargon, just transparent partnership.',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Solutions built around your goals',
      description: 'Custom strategies for your unique needs.',
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

      {/* Hero Section - Full White Background with Premium Effects */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-4 overflow-hidden bg-white">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-4">
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
            className="bg-blue-100/40 backdrop-blur-[100px] rounded-[3rem] shadow-[0_40px_100px_-25px_rgba(59,130,246,0.12)] border border-blue-200/40 pt-10 pb-8 px-6 sm:px-10 md:pt-16 md:pb-12 md:px-16 lg:pt-20 lg:pb-16 lg:px-24 overflow-hidden relative group"
          >
            {/* Inner Border Glow */}
            <div className="absolute inset-0 border border-slate-200 rounded-[3rem] pointer-events-none" />
            <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[3rem]" />
            {/* Subtle Gradient Decor */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-4xl">
              {/* Tagline First */}
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 mb-4 sm:mb-6 tracking-wider uppercase">From Concept to Design</p>

              {/* Main Heading */}
              <h1 className="font-heading text-[28px] sm:text-[38px] md:text-[52px] lg:text-[64px] font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 leading-[110%] sm:leading-[105%] md:leading-[100%] tracking-tight">
                <motion.span
                  animate={{
                    color: ["#1f2937", "#2563eb", "#1f2937", "#1f2937"],
                    scale: [1, 1.05, 1, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.4, 1] }}
                  className="inline-block"
                >
                  Design.
                </motion.span>{' '}
                <motion.span
                  animate={{
                    color: ["#1f2937", "#1f2937", "#2563eb", "#1f2937"],
                    scale: [1, 1, 1.05, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.3, 0.5, 1] }}
                  className="inline-block"
                >
                  Develop.
                </motion.span>{' '}
                <motion.span
                  animate={{
                    color: ["#1f2937", "#1f2937", "#1f2937", "#2563eb"],
                    scale: [1, 1, 1, 1.05],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.6, 0.8, 1] }}
                  className="inline-block"
                >
                  Deploy.
                </motion.span>
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg font-normal text-slate-600 mb-6 sm:mb-8 md:mb-10 leading-loose max-w-2xl">
                Everything your brand needs to grow online. <br className="hidden sm:inline" />
                <span className="sm:hidden"> </span>All your digital needs, in one place.
              </p>

              {/* Stats Badges */}
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10 justify-center md:justify-start">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="stats-badge text-center min-w-[90px] sm:min-w-[100px] md:min-w-0 py-1.5 sm:py-2 px-3 sm:px-4"
                >
                  <span className="stats-badge-number text-lg sm:text-xl md:text-2xl">
                    <Counter end={1} suffix="K+" />
                  </span>
                  <span className="stats-badge-label text-[9px] sm:text-[10px] md:text-xs">Happy Clients</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="stats-badge text-center min-w-[90px] sm:min-w-[100px] md:min-w-0 py-1.5 sm:py-2 px-3 sm:px-4"
                >
                  <span className="stats-badge-number text-lg sm:text-xl md:text-2xl">
                    <Counter end={500} suffix="+" />
                  </span>
                  <span className="stats-badge-label text-[9px] sm:text-[10px] md:text-xs">Projects Delivered</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="stats-badge text-center min-w-[90px] sm:min-w-[100px] md:min-w-0 py-1.5 sm:py-2 px-3 sm:px-4"
                >
                  <span className="stats-badge-number text-lg sm:text-xl md:text-2xl">
                    <Counter end={98} suffix="%" />
                  </span>
                  <span className="stats-badge-label text-[9px] sm:text-[10px] md:text-xs">Client Satisfaction</span>
                </motion.div>
              </div>

              {/* Mobile-optimized buttons with better touch targets */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 w-full sm:w-auto">
                <MagneticWrapper>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-xl shadow-orange-500/30 active:scale-95 min-h-[44px] w-full sm:w-auto"
                  >
                    Get Started
                  </Link>
                </MagneticWrapper>

                <MagneticWrapper>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-white/80 text-slate-900 font-bold rounded-xl border-2 border-blue-100/50 hover:border-blue-600 hover:text-blue-600 backdrop-blur-sm transition-all duration-300 active:scale-95 min-h-[44px] w-full sm:w-auto"
                  >
                    Contact Us
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

      {/* Services Section - Darker Background */}
      <section className="py-6 md:py-10 lg:py-14 px-4 sm:px-6 lg:px-8 bg-slate-100 relative z-20 overflow-hidden border-b border-slate-200">

        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10 lg:mb-14">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 tracking-tight">Our Services</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full mb-4" />
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                Everything your brand needs to succeed online.
              </p>
            </div>
          </SectionReveal>


          {/* Mobile: Carousel View */}
          <div className="md:hidden">
            <ModernCarousel autoPlay={true} autoPlayInterval={5000} showIndicators={true}>
              {services.map((service, index) => (
                <div key={index} className="px-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85, filter: "blur(12px)" }}
                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                    className="h-full"
                  >
                    <div className="relative bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center h-full group">
                      <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 transform transition-transform group-hover:scale-110 duration-500 shadow-lg ${service.shadow}`}>
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-950 mb-3 tracking-tight">{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed flex-grow text-sm">{service.description}</p>

                      <ul className="space-y-2.5 mb-8 w-full">
                        {service.features?.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center justify-center text-gray-600 text-[11px] font-bold uppercase tracking-wider">
                            <Zap className="w-3.5 h-3.5 text-blue-500 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        to={service.link}
                        className="inline-flex items-center justify-center w-full px-6 py-4 bg-gray-950 text-white font-bold rounded-2xl text-sm hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/20"
                      >
                        Explore Service <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              ))}
            </ModernCarousel>
          </div>

          {/* Desktop: Grid View */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {services.map((service, index) => (
              <SectionReveal key={index} delay={index * 0.1}>
                <div className="relative bg-white rounded-[2.5rem] p-8 lg:p-10 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-blue-400/20 transition-all duration-500 flex flex-col items-center text-center h-full hover:-translate-y-2 group overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent opacity-50 -mr-16 -mt-16 rounded-full blur-2xl" />

                  <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-8 transform transition-transform group-hover:scale-110 duration-500 shadow-lg ${service.shadow}`}>
                    {service.icon}
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-950 mb-4 group-hover:text-blue-600 transition-colors leading-tight tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-10 w-full">
                    {service.features?.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center text-[10px] sm:text-[12px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-800 transition-colors">
                        <Zap className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={service.link}
                    className="inline-flex items-center justify-center w-full px-6 py-4 bg-gray-950 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 group-hover:scale-[1.02]"
                  >
                    View Details
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider type="curve" color="fill-indigo-50/40" />

      {/* Why Choose Us Section - Darker Background */}
      <section className="py-6 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden border-b border-slate-200">
        {/* Subtle Mesh Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.05)_0%,_transparent_70%)] z-[1]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionReveal>
            <div className="text-center mb-8 md:mb-14">
              <h2 className="text-3xl md:text-6xl font-bold text-gray-950 mb-3 md:mb-4 tracking-tight">Why Choose Us</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
            </div>
          </SectionReveal>


          {/* Mobile: Carousel View */}
          <div className="md:hidden">
            <ModernCarousel autoPlay={true} autoPlayInterval={5000} showIndicators={true}>
              {benefits.map((benefit, index) => (
                <div key={index} className="px-4">
                  <div className="overflow-hidden h-full rounded-[2rem]">
                    <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full"
                    >
                      <div className="bg-white/80 backdrop-blur-xl p-6 rounded-[2rem] border border-blue-100 shadow-lg shadow-blue-500/5 h-full flex flex-col items-center text-center min-h-[240px]">
                        <div className="p-3 bg-blue-50 rounded-xl text-blue-600 mb-4">
                          {benefit.icon}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-2">{benefit.title}</h3>
                        <p className="text-slate-600 leading-relaxed text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </ModernCarousel>
          </div>

          {/* Desktop: Grid View */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 justify-center">
            {benefits.map((benefit, index) => (
              <SectionReveal key={index} delay={index * 0.05}>
                <MouseGlowCard>
                  <div className="bg-blue-100/40 backdrop-blur-xl p-6 lg:p-7 rounded-[1.5rem] border border-blue-200/40 hover:border-blue-500/30 hover:bg-blue-100/60 transition-all duration-500 h-full group flex flex-col items-center text-center">
                    <motion.div
                      animate={{
                        rotate: [0, 5, -5, 0],
                        y: [0, -3, 3, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="p-4 bg-blue-600/10 rounded-2xl text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm"
                    >
                      {benefit.icon}
                    </motion.div>
                    <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-4">{benefit.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm group-hover:text-slate-900 transition-colors">
                      {benefit.description}
                    </p>
                  </div>
                </MouseGlowCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider type="slant" color="fill-slate-50" reverse />

      {/* STYLISH Project Showcase Section */}
      {
        !loading && caseStudies.length > 0 && (
          <SectionReveal>
            <ProjectShowcase projects={caseStudies} />
          </SectionReveal>
        )
      }

      <SectionDivider type="curve" color="fill-blue-100/10" reverse />

      {/* How We Work Section - Redesigned Circular Flow */}
      <section className="py-6 md:py-10 lg:py-14 px-4 sm:px-6 lg:px-8 bg-blue-100/10 relative overflow-hidden border-y border-blue-200/20">
        <RainParticles />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionReveal>
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-6xl font-bold text-gray-950 mb-3 md:mb-4 tracking-tight">How We Work</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full" />
              <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                A human-centered approach to building digital products that matter.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <HowWeWorkAnimated />
          </SectionReveal>
        </div>
      </section>

      <SectionDivider type="wave" color="fill-blue-600/5" />


      {/* Our Promise Section - Ultra Clean */}
      <SectionReveal>
        <section className="py-6 md:py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/5 via-indigo-600/5 to-cyan-500/5 backdrop-blur-md text-gray-900 border-y border-blue-100/50 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-10 tracking-tight">Our Promise</h2>
            <p className="text-xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-8 leading-relaxed text-gray-700">
              We don't just deliver services. We deliver <span className="text-blue-600 font-semibold">solutions that work</span>.
            </p>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6 md:mb-8 rounded-full" />
            <p className="text-sm md:text-xl font-bold tracking-widest uppercase text-blue-600">
              Clear ideas. Smart execution. Real results.
            </p>
          </div>
        </section>
      </SectionReveal>

      {/* CTA Section - Luxury Dark - Resized */}
      <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/10 z-[1] blur-3xl opacity-50" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <SectionReveal>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-6 md:mb-8 tracking-tighter leading-[0.95]">
              Ready to grow your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
                digital presence?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-8 md:mb-12 leading-relaxed max-w-xl mx-auto">
              Let's build something impactful together.
            </p>
            <MagneticWrapper>
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-6 py-3 sm:px-10 sm:py-5 text-base sm:text-xl bg-white text-slate-950 font-bold rounded-2xl hover:bg-blue-50 transition-all duration-500 shadow-[0_0_50px_rgba(59,130,246,0.3)] transform active:scale-95 translate-y-0 hover:-translate-y-2"
              >
                Get Started with Us
                <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </MagneticWrapper>
          </SectionReveal>
        </div>
      </section>
    </div >
  );
}