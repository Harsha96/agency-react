import { Link } from 'react-router-dom';
import { Bot, Globe, ArrowRight, Zap, Palette, Megaphone, MessageSquare } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export default function Services() {
  const services = [
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'Graphic Design & Branding',
      description: 'Visuals and identities that make your brand unforgettable.',
      features: [
        'Logo design & brand identity',
        'Marketing materials',
        'Social media graphics',
        'Packaging design',
        'Brand guidelines',
      ],
      link: '/services/design',
      color: 'from-blue-600 to-cyan-500',
      shadow: 'shadow-blue-500/20',
    },
    {
      icon: <Megaphone className="w-12 h-12" />,
      title: 'Digital Marketing & Social Media',
      description: 'Strategic marketing to grow your audience and engagement.',
      features: [
        'Social media management',
        'Content strategy',
        'Paid advertising campaigns',
        'Email marketing',
        'Analytics & reporting',
      ],
      link: '/services/seo',
      color: 'from-violet-600 to-purple-500',
      shadow: 'shadow-violet-500/20',
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Website Design & Development',
      description: 'Modern, responsive, and performance-driven websites.',
      features: [
        'Custom website design',
        'Responsive development',
        'E-commerce solutions',
        'CMS integration',
        'SEO optimization',
      ],
      link: '/services/web',
      color: 'from-emerald-600 to-teal-500',
      shadow: 'shadow-emerald-500/20',
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: 'Software & AI Solutions',
      description: 'Custom systems designed to scale with your business.',
      features: [
        'Custom software development',
        'AI-powered automation',
        'API integrations',
        'Mobile applications',
        'Cloud infrastructure',
      ],
      link: '/services/ai',
      color: 'from-orange-600 to-amber-500',
      shadow: 'shadow-orange-500/20',
    },
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: 'Content & Online Support',
      description: 'Clear ideas and smart execution for ongoing success.',
      features: [
        'Content creation & copywriting',
        'Ongoing technical support',
        'Website maintenance',
        'Digital strategy consulting',
        'Training & documentation',
      ],
      link: '/services/support',
      color: 'from-pink-600 to-rose-500',
      shadow: 'shadow-pink-500/20',
    },
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      <section className="relative bg-gradient-to-br from-blue-100 via-white to-blue-50 pt-20 md:pt-24 pb-8 md:pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-7xl font-black text-gray-950 mb-6 md:mb-8 leading-tight tracking-tight">
              Our Services
            </h1>
            <p className="text-lg md:text-2xl text-gray-700 font-medium leading-relaxed tracking-wide max-w-2xl mx-auto">
              Everything your brand needs to succeed online.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-14 px-4 sm:px-6 lg:px-8 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-stretch mb-12 md:mb-16">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 100} width="100%">
                <div
                  className="relative bg-white rounded-3xl shadow-xl p-8 sm:p-10 border border-slate-100 h-full hover:shadow-2xl hover:border-blue-400/20 transition-all duration-500 flex flex-col items-center text-center group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent opacity-50 -mr-16 -mt-16 rounded-full blur-2xl" />

                  <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-8 transform transition-transform group-hover:scale-110 group-hover:rotate-3 duration-500 shadow-lg ${service.shadow}`}>
                    {service.icon}
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-950 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-10 w-full">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center justify-center text-gray-600 text-[13px] font-bold uppercase tracking-widest group-hover:text-gray-900 transition-colors">
                        <Zap className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={service.link}
                    className="inline-flex items-center justify-center w-full px-6 py-4 bg-gray-950 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 group-hover:scale-[1.02]"
                  >
                    Explore Service
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10 blur-3xl" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Need a Custom Solution?</h2>
          <p className="text-lg md:text-xl mb-12 text-slate-400">
            Let's talk about your goals and find the perfect solution for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 text-lg bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all transform hover:scale-105 shadow-xl shadow-blue-500/20"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}