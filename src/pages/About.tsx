import { Users, Target, Heart, Rocket } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { ModernCarousel } from '../components/ModernCarousel';

export default function About() {

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: '15+ years in AI and machine learning. Former tech lead at major Silicon Valley companies.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Full-stack architect with expertise in scalable systems. Built platforms serving millions of users.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Content',
      bio: 'SEO expert and content strategist. Helped 100+ companies dominate their organic search rankings.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'David Park',
      role: 'Lead Data Scientist',
      bio: 'PhD in Data Science. Specializes in predictive analytics and building data-driven solutions.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '5+', label: 'Years Experience' },
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      {/* <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              <span>About Us</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Building the Future with AI & Human Expertise
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're a team of innovators, developers, and strategists passionate about helping businesses thrive in the digital age through AI-powered solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section className="relative bg-gradient-to-br from-blue-100 via-white to-blue-50 pt-20 md:pt-32 pb-10 md:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 md:mb-8">
              <Users className="w-3 h-3 md:w-4 md:h-4" />
              <span className="tracking-wide uppercase text-[10px] md:text-xs font-bold">Who We Are</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-gray-950 mb-6 md:mb-8 leading-tight tracking-tight">
              Akinahs Collective
            </h1>
            <p className="text-lg md:text-2xl text-gray-700 font-medium leading-relaxed tracking-wide mb-6 md:mb-8 max-w-3xl mx-auto">
              Smart, reliable digital solutions for your business.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed tracking-wide max-w-2xl mx-auto">
              We handle everything under one roof — simple, efficient, and result-driven.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 100} width="100%">
                <div className="bg-white rounded-xl p-8 shadow-xl border-2 border-gray-100 text-center h-full hover:border-blue-200 transition-colors">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-16 md:mb-24">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-5xl font-black text-gray-950 mb-6 md:mb-8 tracking-tight leading-tight">
                Our story starts with a simple vision.
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-left">
                <p>
                  Founded in 2024, Akinahs Collective was born from a desire to bridge the gap between complex technology and meaningful business outcomes. We saw too many businesses struggling with fragmented digital strategies.
                </p>
                <p>
                  Today, we are a diverse team of designers, developers, and strategists dedicated to creating digital experiences that don't just look great, but drive real, measurable growth for our partners.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="absolute inset-0 bg-blue-600/10 rounded-3xl rotate-3 translate-x-4 translate-y-4 -z-10" />
              <img
                src="https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?auto=format&fit=crop&q=80&w=1000"
                alt="Our team working"
                className="rounded-3xl shadow-2xl relative z-10 w-full object-cover aspect-video md:aspect-square"
              />
            </div>
          </div>

          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-950 mb-4">Values that drive us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto italic font-medium">The principles behind every project we deliver.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 flex flex-col items-center text-center hover:shadow-2xl hover:border-violet-200 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#9C8CFF]" />
              <div className="w-20 h-20 rounded-2xl bg-violet-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Users className="w-10 h-10 text-[#9C8CFF]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight">Client First</h3>
              <p className="text-gray-600 leading-relaxed font-medium">Your success is our only metric. We build partnerships, not just products.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 flex flex-col items-center text-center hover:shadow-2xl hover:border-amber-200 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#F7C36E]" />
              <div className="w-20 h-20 rounded-2xl bg-amber-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Rocket className="w-10 h-10 text-[#F7C36E]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight">Innovation</h3>
              <p className="text-gray-600 leading-relaxed font-medium">We stay at the edge of tech to give your business a competitive advantage.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 flex flex-col items-center text-center hover:shadow-2xl hover:border-emerald-200 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#48BB9B]" />
              <div className="w-20 h-20 rounded-2xl bg-emerald-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Target className="w-10 h-10 text-[#48BB9B]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight">Excellence</h3>
              <p className="text-gray-600 leading-relaxed font-medium">No cutting corners. We deliver high-end quality in every single line of code.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 flex flex-col items-center text-center hover:shadow-2xl hover:border-rose-200 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#E66F6B]" />
              <div className="w-20 h-20 rounded-2xl bg-rose-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Heart className="w-10 h-10 text-[#E66F6B]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight">Integrity</h3>
              <p className="text-gray-600 leading-relaxed font-medium">Honest communication and transparent processes at every stage.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Experts in AI, development, content, and data science
            </p>
          </div>

          <div className="md:hidden">
            <ModernCarousel autoPlay={true} autoPlayInterval={6000} showIndicators={true}>
              {team.map((member, index) => (
                <div key={index} className="px-4">
                  <div
                    className="group bg-white rounded-xl overflow-hidden shadow-lg"
                  >
                    <div className="relative h-64 overflow-hidden bg-gray-200">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </ModernCarousel>
          </div>

          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <ScrollReveal key={index} delay={index * 100} width="100%">
                <div
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden bg-gray-200">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover image-hover-zoom"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <span className="text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Profile</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 border-y border-blue-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-950 mb-6">Join Us on This Journey</h2>
          <p className="text-lg md:text-xl mb-10 text-gray-700">
            We're always looking for talented individuals who share our passion for innovation and excellence.
          </p>
          <a
            href="mailto:careers@aiagency.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl shadow-blue-900/20"
          >
            View Open Positions
          </a>
        </div>
      </section>
    </div >
  );
}
