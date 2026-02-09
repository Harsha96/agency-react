import { Link } from 'react-router-dom';
import { Bot, Globe, ArrowRight, Zap, Palette, Megaphone, MessageSquare } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export default function Services() {
  const services = [
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'Graphic Design & Branding',
      description: 'Creative visuals and brand identities.',
      features: [
        'Logo design & brand identity',
        'Marketing materials',
        'Social media graphics',
        'Packaging design',
        'Brand guidelines',
      ],
      link: '/services/design',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Megaphone className="w-12 h-12" />,
      title: 'Digital Marketing & Social Media',
      description: 'Strategic marketing to grow your audience.',
      features: [
        'Social media management',
        'Content strategy',
        'Paid advertising campaigns',
        'Email marketing',
        'Analytics & reporting',
      ],
      link: '/services/seo',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Website Design & Development',
      description: 'Modern, responsive, performant websites.',
      features: [
        'Custom website design',
        'Responsive development',
        'E-commerce solutions',
        'CMS integration',
        'SEO optimization',
      ],
      link: '/services/web',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: 'Software & AI Solutions',
      description: 'Custom software to scale your business.',
      features: [
        'Custom software development',
        'AI-powered automation',
        'API integrations',
        'Mobile applications',
        'Cloud infrastructure',
      ],
      link: '/services/ai',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: 'Content & Online Support',
      description: 'Clear content and tailored solutions.',
      features: [
        'Content creation & copywriting',
        'Ongoing technical support',
        'Website maintenance',
        'Digital strategy consulting',
        'Training & documentation',
      ],
      link: '/services/support',
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      <section className="relative bg-gradient-to-br from-blue-100 via-white to-blue-50 pt-40 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-950 mb-8 leading-tight tracking-tight">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed tracking-wide max-w-2xl mx-auto">
              Everything your brand needs to succeed online.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 100} width="100%">
                <div
                  className="relative bg-white rounded-3xl shadow-xl p-10 border border-gray-100 h-full hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center group"
                >
                  <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-8 transform transition-transform group-hover:scale-110 group-hover:rotate-3 duration-500 shadow-lg`}>
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight">{service.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-10 w-full">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center justify-center text-gray-600 text-sm">
                        <Zap className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={service.link}
                    className="inline-flex items-center justify-center w-full px-6 py-4 bg-gray-950 text-white font-bold rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-blue-500/20"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Not Sure Which Service You Need?</h2>
          <p className="text-xl mb-10 opacity-90">
            Let's talk about your goals and find the perfect solution for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 text-lg bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}