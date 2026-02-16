import { ScrollReveal } from './ScrollReveal';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
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

                <div className="grid gap-16">
                    {projects.map((project, index) => (
                        <ScrollReveal key={project.id} delay={index * 100} width="100%">
                            <div className={`group flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}>

                                {/* Image Section */}
                                <div className="w-full lg:w-3/5 relative">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.01] group-hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)]">
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                                        <img
                                            src={project.image_url}
                                            alt={project.title}
                                            className="w-full h-[400px] object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                                            loading="lazy"
                                            decoding="async"
                                        />

                                        {/* Floating Action Badge */}
                                        <div className="absolute bottom-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                                            <Link to={`/portfolio`} className="flex items-center space-x-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold text-slate-900 shadow-lg hover:bg-white">
                                                <span>View Case Study</span>
                                                <ExternalLink className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Decorative Elements behind image */}
                                    <div className={`absolute -bottom-6 -right-6 w-full h-full border-2 border-slate-200 rounded-2xl -z-10 transform translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 ${index % 2 !== 0 ? 'left-4' : 'right-4'}`} />
                                </div>

                                {/* Content Section */}
                                <div className="w-full lg:w-2/5">
                                    <div className="flex items-center space-x-2 mb-3 md:mb-4">
                                        {project.tech_stack.slice(0, 1).map((tech, i) => (
                                            <span key={i} className="text-violet-600 font-bold bg-violet-50 px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 md:mb-4 group-hover:text-violet-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-4 md:mb-6">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                                        {project.tech_stack.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 bg-white border border-slate-200 text-slate-500 text-xs font-medium rounded-md">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center text-slate-900 font-bold group/link cursor-pointer hover:text-violet-600 transition-colors">
                                        <span className="border-b-2 border-slate-200 group-hover/link:border-violet-600 transition-colors pb-1">See Details</span>
                                        <ArrowRight className="ml-2 w-5 h-5 transform group-hover/link:translate-x-2 transition-transform" />
                                    </div>
                                </div>

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
