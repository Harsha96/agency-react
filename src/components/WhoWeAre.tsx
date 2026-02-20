import { Target, Users, Zap, Lightbulb } from 'lucide-react';
import { MouseGlowCard, TiltCard } from './InteractiveWrappers';
import { MaskedReveal } from './SectionReveal';
import { motion } from 'framer-motion';

export const WhoWeAre = () => {
    return (
        <section className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-slate-100/40 relative overflow-hidden border-y border-slate-200/50">
            {/* Ultra-subtle light overlay - Enhanced for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/10 to-white z-[1]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-8 md:mb-10">
                    <MaskedReveal>
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-950 mb-6 tracking-tight">Who We Are</h2>
                    </MaskedReveal>
                    <MaskedReveal delay={0.2}>
                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            We're a collective of creators, thinkers, and developers <br className="hidden md:block" />
                            shaping the next wave of <span className="text-blue-600 font-bold">digital experiences</span>.
                        </p>
                    </MaskedReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 md:auto-rows-[280px]">
                    {/* Main Brand Card - Total Mobile Redesign */}
                    <div className="md:col-span-2 md:row-span-2">
                        <TiltCard className="h-full">
                            <MouseGlowCard className="h-full rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-2xl shadow-blue-500/5">
                                <div className="relative h-full p-6 sm:p-8 md:p-12 bg-white/60 backdrop-blur-2xl text-gray-900 transition-all duration-500 group-hover:bg-white/80">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/10 opacity-60" />

                                    <div className="relative z-10 h-full flex flex-col justify-between">
                                        <div>
                                            <div className="inline-flex items-center space-x-2 bg-blue-50 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-bold mb-6 md:mb-8 border border-blue-100 shadow-sm">
                                                <Users className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
                                                <span className="text-blue-700 tracking-widest uppercase">Akinahs Collective</span>
                                            </div>
                                            <h3 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4 md:mb-6 leading-[1.15] tracking-tight text-gray-950">
                                                A full-service <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">digital agency.</span>
                                            </h3>
                                            <div className="space-y-4">
                                                <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-xl leading-relaxed">
                                                    We design, build, and scale digital products that actually work. From bold visuals to powerful software, we bring creativity, tech, and strategy together, all under one roof.
                                                </p>
                                                <p className="text-xs sm:text-sm md:text-lg text-gray-500 max-w-xl leading-relaxed">
                                                    Simple. Smart. Results-driven.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-8 md:mt-10 pt-8 md:pt-10 border-t border-gray-100">
                                            <div className="flex -space-x-3 md:-space-x-4">
                                                {[1, 2, 3, 4].map(i => (
                                                    <div key={i} className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 md:border-4 border-white bg-blue-50 flex items-center justify-center shadow-md overflow-hidden transition-transform hover:scale-110 hover:z-20">
                                                        <img src={`https://i.pravatar.cc/150?img=${i + 20}`} alt="Team" className="w-full h-full object-cover" />
                                                    </div>
                                                ))}
                                            </div>
                                            <div>
                                                <p className="text-base md:text-lg font-bold text-gray-950">12+ digital visionaries</p>
                                                <p className="text-xs md:text-sm text-gray-500 font-medium">Working around the clock to power your success.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </MouseGlowCard>
                        </TiltCard>
                    </div>

                    {/* Side Card: Strategy */}
                    <div className="md:col-span-1">
                        <TiltCard className="h-full">
                            <MouseGlowCard className="h-full rounded-[2rem] border border-gray-100 overflow-hidden shadow-xl shadow-blue-500/5 hover:border-blue-300 transition-all duration-500">
                                <div className="bg-white/40 backdrop-blur-md p-8 md:p-10 h-full relative group hover:bg-white/60">
                                    <div className="absolute top-0 right-0 p-4 opacity-[0.03] transition-opacity transform group-hover:rotate-12 group-hover:scale-110">
                                        <Target className="w-24 h-24 md:w-32 md:h-32 text-blue-600" />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="p-3 bg-blue-50 rounded-xl w-fit mb-6 shadow-sm">
                                            <Target className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                                        </div>
                                        <h4 className="text-xl md:text-2xl font-bold text-gray-950 mb-3 tracking-tight">Expert Strategy</h4>
                                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                            Clear planning. Strong execution. Real growth.
                                        </p>
                                    </div>
                                </div>
                            </MouseGlowCard>
                        </TiltCard>
                    </div>

                    {/* Side Card: Creativity */}
                    <div className="md:col-span-1">
                        <TiltCard className="h-full">
                            <MouseGlowCard className="h-full rounded-[2rem] border border-gray-100 overflow-hidden shadow-xl shadow-blue-500/5 hover:border-blue-300 transition-all duration-500">
                                <div className="bg-white/40 backdrop-blur-md p-8 md:p-10 h-full relative group hover:bg-white/60">
                                    <div className="absolute top-0 right-0 p-4 opacity-[0.03] transition-opacity transform group-hover:-rotate-12 group-hover:scale-110">
                                        <Lightbulb className="w-24 h-24 md:w-32 md:h-32 text-indigo-600" />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="p-3 bg-indigo-50 rounded-xl w-fit mb-6 shadow-sm">
                                            <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-indigo-600" />
                                        </div>
                                        <h4 className="text-xl md:text-2xl font-bold text-gray-950 mb-3 tracking-tight">Creative Soul</h4>
                                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                            Designs that connect, inspire, and stand out.
                                        </p>
                                    </div>
                                </div>
                            </MouseGlowCard>
                        </TiltCard>
                    </div>

                    {/* Tech Stack Banner - Expert Light */}
                    <div className="md:col-span-3 mt-4">
                        <MouseGlowCard className="rounded-[2rem] border border-gray-100 overflow-hidden shadow-2xl shadow-blue-500/5">
                            <div className="bg-white/60 backdrop-blur-2xl p-8 md:p-12 relative group hover:bg-white/80 transition-all duration-700">
                                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
                                    <div className="max-w-2xl text-center lg:text-left">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8 }}
                                            className="flex items-center justify-center lg:justify-start space-x-4 mb-6"
                                        >
                                            <div className="p-3 bg-yellow-400/10 rounded-xl relative">
                                                <div className="absolute inset-0 bg-yellow-400/20 rounded-xl animate-ping opacity-20" />
                                                <Zap className="w-6 h-6 md:w-7 md:h-7 text-yellow-500 relative z-10" />
                                            </div>
                                            <h4 className="text-xl md:text-3xl font-black text-gray-950 tracking-tight">
                                                Powered by Innovation
                                            </h4>
                                        </motion.div>
                                        <p className="text-gray-600 text-base md:text-xl leading-relaxed">
                                            We use modern, future-ready technology to build solutions that last.
                                        </p>
                                    </div>
                                    <div className="w-full lg:w-1/2 overflow-hidden relative pointer-events-none">
                                        {/* Gradient masks for soft edges */}
                                        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white/80 to-transparent z-10" />
                                        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white/80 to-transparent z-10" />

                                        <motion.div
                                            className="flex gap-4 whitespace-nowrap"
                                            animate={{ x: [0, -1030] }}
                                            transition={{
                                                duration: 25,
                                                repeat: Infinity,
                                                ease: "linear"
                                            }}
                                        >
                                            {[...['React', 'TypeScript', 'Next.js', 'Node.js', 'Supabase', 'Python', 'AI/ML', 'Cloud'], ...['React', 'TypeScript', 'Next.js', 'Node.js', 'Supabase', 'Python', 'AI/ML', 'Cloud']].map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className={`inline-block px-6 py-2.5 rounded-xl bg-white border border-gray-100 text-sm font-black shadow-sm transition-all duration-300 hover:border-blue-300 cursor-default ${i % 2 === 0 ? 'text-blue-600' : 'text-indigo-600'}`}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </MouseGlowCard>
                    </div>
                </div>
            </div>
        </section>
    );
};
