import { ScrollReveal } from './ScrollReveal';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MouseGlowCard, TiltCard } from './InteractiveWrappers';
import type { Database } from '../lib/supabase';

type CaseStudy = Database['case_studies'];

interface ProjectShowcaseProps {
    projects: CaseStudy[];
}

export const ProjectShowcase = ({ projects }: ProjectShowcaseProps) => {
    if (!projects || projects.length === 0) return null;

    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden border-y border-slate-100">
            {/* Subtle Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.05)_0%,_transparent_50%)] z-[1]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <ScrollReveal>
                    <div className="text-center mb-16 md:mb-24">
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-950 mb-6 tracking-tight">Selected Work</h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full mb-6" />
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Real projects. Real results. See how we transform ideas into digital success.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Projects Grid - Card-Based Layout */}
                <div className="space-y-12 md:space-y-20">
                    {projects.map((project, index) => (
                        <ScrollReveal key={project.id} delay={index * 100} width="100%">
                            <TiltCard className="h-full">
                                <MouseGlowCard className="h-full rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-2xl shadow-blue-500/5">
                                    {/* Card Container */}
                                    <div className={`relative h-full bg-white/60 backdrop-blur-2xl transition-all duration-500 hover:bg-white/80`}>
                                        {/* Desktop: Alternating Layout */}
                                        <div className={`hidden lg:grid lg:grid-cols-2 gap-0 h-full ${index % 2 === 0 ? '' : 'lg:grid-flow-dense'}`}>
                                            {/* Image Section */}
                                            <div className={`relative overflow-hidden group ${index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-2'}`}>
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                                <img
                                                    src={project.image_url}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                                    loading="lazy"
                                                />
                                                {/* Blue View Badge */}
                                                <div className="absolute bottom-8 right-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                                    <Link to="/portfolio" className="flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 backdrop-blur-xl px-6 py-3 rounded-2xl text-sm font-bold text-white shadow-2xl shadow-blue-500/30 transition-all">
                                                        <span>View Project</span>
                                                        <ExternalLink className="w-4 h-4" />
                                                    </Link>
                                                </div>
                                            </div>

                                            {/* Content Section */}
                                            <div className={`p-10 md:p-16 flex flex-col justify-center ${index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1'}`}>
                                                {/* Blue Category Badge */}
                                                <div className="flex items-center gap-3 mb-6">
                                                    {project.tech_stack.slice(0, 2).map((tech, i) => (
                                                        <span key={i} className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md shadow-blue-500/20">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>

                                                <h3 className="text-3xl md:text-5xl font-black text-gray-950 mb-6 tracking-tight leading-tight">
                                                    {project.title}
                                                </h3>

                                                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                                                    {project.description}
                                                </p>

                                                {/* Tech Stack Pills */}
                                                <div className="flex flex-wrap gap-2 mb-10">
                                                    {project.tech_stack.map((tech, i) => (
                                                        <span key={i} className="px-4 py-2 bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold rounded-xl shadow-sm">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* View Details Link */}
                                                <Link to="/portfolio" className="inline-flex items-center text-gray-950 font-black text-lg group/link">
                                                    <span className="relative">
                                                        See Full Case Study
                                                        <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-600 transition-all duration-500 group-hover/link:w-full" />
                                                    </span>
                                                    <ArrowRight className="ml-3 w-6 h-6 transform group-hover/link:translate-x-2 transition-transform duration-500" />
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Mobile: Unified Card Layout */}
                                        <div className="lg:hidden p-6 md:p-8">
                                            <div className="relative rounded-2xl overflow-hidden mb-8 shadow-lg group">
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                                <img
                                                    src={project.image_url}
                                                    alt={project.title}
                                                    className="w-full aspect-video object-cover transform transition-transform duration-700 group-hover:scale-105"
                                                    loading="lazy"
                                                />
                                                {/* Category Badge */}
                                                <div className="absolute top-4 right-4 bg-blue-600 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-white shadow-lg shadow-blue-500/30">
                                                    {project.tech_stack[0]}
                                                </div>
                                            </div>

                                            <h3 className="text-2xl md:text-3xl font-black text-gray-950 mb-4 tracking-tight leading-tight">
                                                {project.title}
                                            </h3>

                                            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6">
                                                {project.description}
                                            </p>

                                            {/* Tech Stack */}
                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {project.tech_stack.slice(0, 4).map((tech, i) => (
                                                    <span key={i} className="px-3 py-1.5 bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold rounded-lg">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Mobile CTA */}
                                            <Link
                                                to="/portfolio"
                                                className="flex items-center justify-center w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/30 active:scale-[0.98] transition-all"
                                            >
                                                View Project <ArrowRight className="ml-2 w-5 h-5" />
                                            </Link>
                                        </div>
                                    </div>
                                </MouseGlowCard>
                            </TiltCard>
                        </ScrollReveal>
                    ))}
                </div>

                {/* View All CTA */}
                <ScrollReveal>
                    <div className="mt-16 md:mt-24 text-center">
                        <Link
                            to="/portfolio"
                            className="inline-flex items-center px-8 py-4 bg-white text-gray-950 font-bold rounded-2xl border-2 border-gray-200 hover:border-orange-500 hover:text-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            View All Projects <ArrowRight className="ml-3 w-5 h-5" />
                        </Link>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};
