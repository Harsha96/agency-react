import { ScrollReveal } from './ScrollReveal';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MouseGlowCard } from './InteractiveWrappers';
import type { Database } from '../lib/supabase';

type CaseStudy = Database['case_studies'];

interface ProjectShowcaseProps {
    projects: CaseStudy[];
}

export const ProjectShowcase = ({ projects }: ProjectShowcaseProps) => {
    if (!projects || projects.length === 0) return null;

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Decorative BG */}
            <div className="absolute top-0 left-0 w-full h-full bg-slate-50 opacity-100" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16">
                    <div className="max-w-2xl mb-6 md:mb-0">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-6">Selected Work</h2>
                        <p className="text-lg md:text-xl text-slate-600">
                            Transforming ideas into digital reality. Here's what we've been working on.
                        </p>
                    </div>
                    <Link
                        to="/portfolio"
                        className="hidden md:flex items-center px-6 py-3 bg-white rounded-full text-slate-900 font-bold border border-slate-200 hover:border-violet-400 hover:text-violet-600 transition-all shadow-sm hover:shadow-md"
                    >
                        View All Projects <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>

                <div className="space-y-12 lg:space-y-32">
                    {projects.map((project, index) => (
                        <ScrollReveal key={project.id} delay={index * 100} width="100%">
                            {/* Desktop Layout - Alternating Sections */}
                            <div className={`hidden lg:flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
                                {/* Image Section */}
                                <div className="lg:w-3/5 relative group">
                                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] group-hover:shadow-blue-500/10">
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                        <img
                                            src={project.image_url}
                                            alt={project.title}
                                            className="w-full h-[500px] object-cover object-center transform transition-transform duration-1000 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute bottom-10 right-10 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                            <Link to={`/portfolio`} className="flex items-center space-x-3 bg-white/95 backdrop-blur-xl px-6 py-3 rounded-2xl text-sm font-bold text-slate-900 shadow-2xl hover:bg-white transition-colors">
                                                <span>View Case Study</span>
                                                <ExternalLink className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className={`absolute -bottom-6 -right-6 w-full h-full border-2 border-slate-200/50 rounded-[2.5rem] -z-10 transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 ${index % 2 !== 0 ? 'left-4' : 'right-4'}`} />
                                </div>

                                {/* Content Section */}
                                <div className="lg:w-2/5">
                                    <div className="flex items-center space-x-3 mb-6">
                                        {project.tech_stack.slice(0, 2).map((tech, i) => (
                                            <span key={i} className="text-blue-600 font-bold bg-blue-50 px-4 py-1.5 rounded-full text-xs uppercase tracking-widest border border-blue-100">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-4xl font-extrabold text-slate-950 mb-6 tracking-tight group-hover:text-blue-600 transition-colors duration-500">
                                        {project.title}
                                    </h3>
                                    <p className="text-xl text-slate-600 leading-relaxed mb-8">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-3 mb-10">
                                        {project.tech_stack.map((tech, i) => (
                                            <span key={i} className="px-4 py-2 bg-white border border-slate-100 text-slate-500 text-xs font-bold rounded-xl shadow-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <Link to="/portfolio" className="group/link inline-flex items-center text-slate-950 font-black text-lg">
                                        <span className="relative">
                                            See Details
                                            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-600 transition-all duration-500 group-hover/link:w-full" />
                                        </span>
                                        <ArrowRight className="ml-3 w-6 h-6 transform group-hover/link:translate-x-2 transition-transform duration-500" />
                                    </Link>
                                </div>
                            </div>

                            {/* Mobile Layout - Premium Unified Card */}
                            <div className="lg:hidden">
                                <MouseGlowCard className="rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl">
                                    <div className="bg-white/60 backdrop-blur-xl p-4 sm:p-6">
                                        <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video shadow-lg">
                                            <img
                                                src={project.image_url}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-[10px] font-black text-blue-600 shadow-sm border border-blue-100/50 uppercase tracking-wider">
                                                {project.tech_stack[0]}
                                            </div>
                                        </div>
                                        <div className="px-2">
                                            <h3 className="text-2xl font-black text-gray-950 mb-3 tracking-tight leading-tight">
                                                {project.title}
                                            </h3>
                                            <p className="text-slate-600 text-base leading-relaxed mb-6 line-clamp-3">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {project.tech_stack.slice(0, 3).map((tech, i) => (
                                                    <span key={i} className="px-3 py-1.5 bg-slate-50 border border-slate-100 text-slate-500 text-[10px] font-bold rounded-lg">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            <Link
                                                to="/portfolio"
                                                className="flex items-center justify-center w-full py-4 bg-gray-950 text-white font-bold rounded-2xl shadow-lg shadow-gray-900/20 active:scale-[0.98] transition-all"
                                            >
                                                View Project <ArrowRight className="ml-2 w-5 h-5" />
                                            </Link>
                                        </div>
                                    </div>
                                </MouseGlowCard>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="mt-16 text-center md:hidden">
                    <Link to="/portfolio" className="inline-flex items-center font-bold text-violet-600 bg-violet-50 px-6 py-3 rounded-full">
                        View All Projects <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
};
