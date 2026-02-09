import { Target, Users, Zap, Lightbulb } from 'lucide-react';
import { MouseGlowCard, TiltCard } from './InteractiveWrappers';
import { MaskedReveal } from './SectionReveal';

export const WhoWeAre = () => {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden">
            {/* Ultra-subtle light overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent z-[1]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <MaskedReveal>
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-950 mb-6 tracking-tight">Who We Are</h2>
                    </MaskedReveal>
                    <MaskedReveal delay={0.2}>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            A high-end collective of creators, thinkers, and builders <br />
                            passionate about defining the next wave of <span className="text-blue-600 font-bold">digital excellence</span>.
                        </p>
                    </MaskedReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 auto-rows-[280px]">
                    {/* Main Brand Card - Expert Light */}
                    <TiltCard className="md:col-span-2 md:row-span-2">
                        <MouseGlowCard className="h-full rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-2xl shadow-blue-500/5">
                            <div className="relative h-full p-10 bg-white/40 backdrop-blur-2xl text-gray-900 transition-all duration-500 group-hover:bg-white/60">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/10 opacity-60" />

                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    <div>
                                        <div className="inline-flex items-center space-x-2 bg-blue-50/80 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-bold mb-8 border border-blue-100 shadow-sm">
                                            <Users className="w-4 h-4 text-blue-600" />
                                            <span className="text-blue-700 tracking-wide uppercase text-xs">Akinahs Collective</span>
                                        </div>
                                        <h3 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight text-gray-950">
                                            A full-service <br />
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">digital agency.</span>
                                        </h3>
                                        <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
                                            Akinahs Collective is a full-service digital agency delivering smart, reliable online solutions for individuals and businesses. We combine creativity, technology, and strategy to help brands grow in the digital space.
                                        </p>
                                        <p className="text-lg text-gray-600 mt-4 max-w-xl leading-relaxed">
                                            Whether you need eye-catching designs or scalable software solutions, we handle everything under one roof—simple, efficient, and result driven.
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-6 pt-10 border-t border-gray-100/50">
                                        <div className="flex -space-x-4">
                                            {[1, 2, 3, 4].map(i => (
                                                <div key={i} className="w-14 h-14 rounded-full border-4 border-white bg-blue-50 flex items-center justify-center shadow-lg overflow-hidden transition-transform hover:scale-110 hover:z-20 cursor-pointer">
                                                    <img src={`https://i.pravatar.cc/150?img=${i + 20}`} alt="Team" className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                        <div>
                                            <p className="text-lg font-bold text-gray-950">12+ Digital Visionaries</p>
                                            <p className="text-sm text-gray-500 font-medium">Powering your success 24/7</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </MouseGlowCard>
                    </TiltCard>

                    {/* Side Card: Strategy */}
                    <TiltCard>
                        <MouseGlowCard className="h-full rounded-[2rem] border border-gray-100 overflow-hidden shadow-xl shadow-blue-500/5 hover:border-blue-300 transition-all duration-500">
                            <div className="bg-white/40 backdrop-blur-md p-8 h-full relative group hover:bg-white/60">
                                <div className="absolute top-0 right-0 p-4 opacity-[0.03] transition-opacity transform group-hover:rotate-12 group-hover:scale-110 group-hover:opacity-[0.07]">
                                    <Target className="w-32 h-32 text-blue-600" />
                                </div>
                                <div className="relative z-10">
                                    <div className="p-4 bg-blue-50 rounded-2xl w-fit mb-6 shadow-sm">
                                        <Target className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-gray-950 mb-3 tracking-tight">Expert Strategy</h4>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        We plan with precision and execute with passion to deliver measurable scale.
                                    </p>
                                </div>
                            </div>
                        </MouseGlowCard>
                    </TiltCard>

                    {/* Side Card: Creativity */}
                    <TiltCard>
                        <MouseGlowCard className="h-full rounded-[2rem] border border-gray-100 overflow-hidden shadow-xl shadow-blue-500/5 hover:border-blue-300 transition-all duration-500">
                            <div className="bg-white/40 backdrop-blur-md p-8 h-full relative group hover:bg-white/60">
                                <div className="absolute top-0 right-0 p-4 opacity-[0.03] transition-opacity transform group-hover:-rotate-12 group-hover:scale-110 group-hover:opacity-[0.07]">
                                    <Lightbulb className="w-32 h-32 text-indigo-600" />
                                </div>
                                <div className="relative z-10">
                                    <div className="p-4 bg-indigo-50 rounded-2xl w-fit mb-6 shadow-sm">
                                        <Lightbulb className="w-8 h-8 text-indigo-600" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-gray-950 mb-3 tracking-tight">Creative Soul</h4>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        Bold designs that resonate deeply with your audience and amplify your identity.
                                    </p>
                                </div>
                            </div>
                        </MouseGlowCard>
                    </TiltCard>

                    {/* Tech Stack Banner - Expert Light */}
                    <div className="md:col-span-3 mt-4">
                        <MouseGlowCard className="rounded-[2rem] border border-gray-100 overflow-hidden shadow-2xl shadow-blue-500/5">
                            <div className="bg-white/40 backdrop-blur-2xl p-10 relative group hover:bg-white/60 transition-all duration-700">
                                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
                                    <div className="max-w-2xl text-center lg:text-left">
                                        <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
                                            <div className="p-3 bg-yellow-400/10 rounded-xl shadow-inner">
                                                <Zap className="w-7 h-7 text-yellow-500" />
                                            </div>
                                            <h4 className="text-2xl md:text-3xl font-extrabold text-gray-950 tracking-tight">
                                                Powered by Cutting-Edge Innovation
                                            </h4>
                                        </div>
                                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                                            We leverage the world's most powerful technologies to build future-proof solutions. From high-performance web apps to intelligent AI integration.
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-4 justify-center lg:justify-end max-w-lg">
                                        {['React 19', 'TypeScript', 'Next.js', 'Node.js', 'Supabase', 'Python', 'AI/ML', 'Cloud Engineering'].map((tag, i) => (
                                            <span
                                                key={tag}
                                                className={`px-4 py-2 md:px-6 md:py-2.5 rounded-xl bg-white border border-gray-100 text-xs md:text-sm font-bold shadow-sm transition-all duration-300 hover:scale-110 hover:border-blue-300 cursor-default ${i % 2 === 0 ? 'text-blue-600' : 'text-indigo-600'}`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                {/* Subtle decorative line */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent blur-sm" />
                            </div>
                        </MouseGlowCard>
                    </div>
                </div>
            </div>
        </section>
    );
};
