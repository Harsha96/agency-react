import { Target, Users, Zap, Lightbulb } from 'lucide-react';

export const WhoWeAre = () => {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Who We Are</h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        A collective of creators, thinkers, and builders.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[250px]">
                    {/* Main Card - Spans 2 cols, 2 rows on lg */}
                    <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl p-8 bg-slate-900 text-white shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-indigo-900 opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-cyan-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                                    <Users className="w-4 h-4 text-cyan-400" />
                                    <span>Akinahs Collective</span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                                    More than just an agency. <br />
                                    <span className="text-cyan-400">We are your growth partners.</span>
                                </h3>
                                <p className="text-lg text-slate-300 max-w-md">
                                    We combine creativity, technology, and strategy to help brands grow in the digital space. Simple, efficient, and result-driven.
                                </p>
                            </div>
                            <div className="flex items-center space-x-4 pt-8">
                                <div className="flex -space-x-4">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-12 h-12 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-xs font-bold shadow-lg">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Team" className="w-full h-full rounded-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <span className="text-sm font-medium text-slate-400">+12 Experts</span>
                            </div>
                        </div>
                    </div>

                    {/* Side Card 1 - Strategy */}
                    <div className="bg-slate-50 rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-violet-200">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:rotate-12">
                            <Target className="w-32 h-32 text-violet-600" />
                        </div>
                        <div className="relative z-10">
                            <Target className="w-10 h-10 text-violet-600 mb-4" />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Strategic Vision</h4>
                            <p className="text-slate-600 text-sm">We don't guess. We plan, execute, and deliver measurable results.</p>
                        </div>
                    </div>

                    {/* Side Card 2 - Creativity */}
                    <div className="bg-slate-50 rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-pink-200">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110">
                            <Lightbulb className="w-32 h-32 text-pink-500" />
                        </div>
                        <div className="relative z-10">
                            <Lightbulb className="w-10 h-10 text-pink-500 mb-4" />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Creative Soul</h4>
                            <p className="text-slate-600 text-sm">Eye-catching designs that tell your brand's unique story.</p>
                        </div>
                    </div>

                    {/* Bottom Wide Card - Technology */}
                    <div className="md:col-span-3 bg-slate-900 rounded-3xl p-8 relative overflow-hidden group shadow-lg text-white border border-slate-800 hover:border-violet-500/50 transition-colors duration-500">
                        {/* Animated Gradient Background */}
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl animate-pulse-slow [animation-delay:1s] pointer-events-none"></div>

                        {/* Grid Pattern Overlay */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>

                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between relative z-10 gap-8">
                            <div className="max-w-xl">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="p-2 bg-yellow-400/10 rounded-lg">
                                        <Zap className="w-6 h-6 text-yellow-400" />
                                    </div>
                                    <h4 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                                        Powered by Innovation
                                    </h4>
                                </div>
                                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                    We don't just follow trends; we leverage the latest tech to build scalable, future-proof solutions. From AI-driven automation to robust cloud architecture.
                                </p>

                                {/* Decorative Code Snippet */}
                                <div className="hidden md:block bg-slate-950/50 rounded-lg p-3 font-mono text-xs text-slate-500 border border-white/5 max-w-sm">
                                    <div className="flex space-x-1.5 mb-2">
                                        <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                                        <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                                        <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                                    </div>
                                    <p><span className="text-violet-400">const</span> <span className="text-blue-400">future</span> = <span className="text-violet-400">await</span> <span className="text-yellow-300">build</span>(<span className="text-green-400">'scale'</span>);</p>
                                </div>
                            </div>

                            {/* Tech Stack Pills */}
                            <div className="flex flex-wrap gap-3 justify-start md:justify-end max-w-lg">
                                {['React', 'TypeScript', 'Next.js', 'Node.js', 'Supabase', 'Python', 'TensorFlow', 'OpenAI', 'AWS', 'Docker', 'Tailwind'].map((tag, i) => (
                                    <span
                                        key={tag}
                                        className={`px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-default ${i % 2 === 0 ? 'text-cyan-300' : 'text-violet-300'}`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
