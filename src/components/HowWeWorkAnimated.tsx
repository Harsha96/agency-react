import { motion } from 'framer-motion';
import { Compass, Target, PencilRuler, Code2, Rocket } from 'lucide-react';

const steps = [
    {
        icon: <Compass className="w-8 h-8 md:w-10 md:h-10" />,
        title: 'Understand',
        description: 'We dive deep into your goals to discover the best path forward.',
        color: 'text-indigo-600',
        bgColor: 'bg-indigo-50',
        borderColor: 'border-indigo-100',
    },
    {
        icon: <Target className="w-8 h-8 md:w-10 md:h-10" />,
        title: 'Strategize',
        description: 'We define a clear roadmap and state the problem to solve.',
        color: 'text-blue-500',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-100',
    },
    {
        icon: <PencilRuler className="w-8 h-8 md:w-10 md:h-10" />,
        title: 'Design',
        description: 'We create high-end visuals and user-centric interfaces.',
        color: 'text-amber-500',
        bgColor: 'bg-amber-50',
        borderColor: 'border-amber-100',
    },
    {
        icon: <Code2 className="w-8 h-8 md:w-10 md:h-10" />,
        title: 'Develop',
        description: 'We build your product using modern, future-ready technology.',
        color: 'text-indigo-500',
        bgColor: 'bg-indigo-50',
        borderColor: 'border-indigo-100',
    },
    {
        icon: <Rocket className="w-8 h-8 md:w-10 md:h-10" />,
        title: 'Launch & Grow',
        description: 'We test, deploy, and scale your product for real-world impact.',
        color: 'text-emerald-500',
        bgColor: 'bg-emerald-50',
        borderColor: 'border-emerald-100',
    },
];

export const HowWeWorkAnimated = () => {
    return (
        <div className="relative py-20 overflow-hidden">
            {/* Background SVG paths for Desktop */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
                <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Forward Paths - Unified crawling animation */}
                    {[
                        { d: "M 150 250 Q 250 150 350 250", delay: 0.5 },
                        { d: "M 350 250 Q 450 150 550 250", delay: 1.0 },
                        { d: "M 550 250 Q 650 150 750 250", delay: 1.5 },
                    ].map((path, i) => (
                        <motion.path
                            key={i}
                            d={path.d}
                            stroke="url(#gradient-flow)"
                            strokeWidth="3"
                            strokeDasharray="8 8"
                            initial={{ pathLength: 0, opacity: 0, strokeDashoffset: 0 }}
                            whileInView={{ pathLength: 1, opacity: 0.4, strokeDashoffset: -100 }}
                            transition={{
                                pathLength: { duration: 1.5, delay: path.delay },
                                strokeDashoffset: { duration: 10, repeat: Infinity, ease: "linear" }
                            }}
                        />
                    ))}

                    {/* Highly Animated Final Stage (As per user drawing) */}
                    {/* Highly Animated Final Stage (As per user drawing - Triple Arcs) */}
                    {/* Top Arc */}
                    <motion.path
                        d="M 750 250 Q 850 120 950 250"
                        stroke="url(#gradient-flow)"
                        strokeWidth="3"
                        strokeDasharray="8 8"
                        initial={{ pathLength: 0, opacity: 0, strokeDashoffset: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.6, strokeDashoffset: -100 }}
                        transition={{
                            pathLength: { duration: 1.5, delay: 2 },
                            strokeDashoffset: { duration: 10, repeat: Infinity, ease: "linear" }
                        }}
                    />
                    {/* Middle Arc (Straight-ish) */}
                    <motion.path
                        d="M 750 250 Q 850 250 950 250"
                        stroke="url(#gradient-flow)"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0, opacity: 0, strokeDashoffset: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.4, strokeDashoffset: -100 }}
                        transition={{
                            pathLength: { duration: 1.2, delay: 2.1 },
                            strokeDashoffset: { duration: 6, repeat: Infinity, ease: "linear" }
                        }}
                    />
                    {/* Bottom Arc - Red Accent */}
                    <motion.path
                        d="M 750 250 Q 850 380 950 250"
                        stroke="url(#gradient-blue-accent)"
                        strokeWidth="3"
                        strokeDasharray="6 6"
                        initial={{ pathLength: 0, opacity: 0, strokeDashoffset: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.6, strokeDashoffset: -100 }}
                        transition={{
                            pathLength: { duration: 1.8, delay: 2.2 },
                            strokeDashoffset: { duration: 8, repeat: Infinity, ease: "linear" }
                        }}
                    />

                    {/* Growth/Scale outward spirals (Triple paths as per user drawing) */}
                    <motion.path
                        d="M 950 250 Q 1050 100 1200 200"
                        stroke="url(#gradient-flow)"
                        strokeWidth="3"
                        strokeDasharray="8 8"
                        initial={{ pathLength: 0, opacity: 0, strokeDashoffset: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.4, strokeDashoffset: -100 }}
                        transition={{
                            pathLength: { duration: 2.5, delay: 2.5 },
                            strokeDashoffset: { duration: 10, repeat: Infinity, ease: "linear" }
                        }}
                    />
                    <motion.path
                        d="M 950 250 Q 1100 250 1250 300"
                        stroke="url(#gradient-flow)"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0, opacity: 0, strokeDashoffset: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.3, strokeDashoffset: -100 }}
                        transition={{
                            pathLength: { duration: 2, delay: 2.7 },
                            strokeDashoffset: { duration: 8, repeat: Infinity, ease: "linear" }
                        }}
                    />
                    <motion.path
                        d="M 950 250 Q 1050 400 1200 450"
                        stroke="url(#gradient-blue-accent)"
                        strokeWidth="3"
                        strokeDasharray="6 6"
                        initial={{ pathLength: 0, opacity: 0, strokeDashoffset: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.5, strokeDashoffset: -100 }}
                        transition={{
                            pathLength: { duration: 2.8, delay: 2.6 },
                            strokeDashoffset: { duration: 12, repeat: Infinity, ease: "linear" }
                        }}
                    />

                    {/* Feedback Loops (Consistent dash style) */}
                    <motion.path
                        d="M 950 250 Q 550 550 150 250"
                        stroke="url(#gradient-flow-rev)"
                        strokeWidth="2"
                        strokeDasharray="6 6"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.2 }}
                        transition={{ duration: 3, delay: 3 }}
                    />
                    <motion.path
                        d="M 950 250 Q 750 400 550 250"
                        stroke="url(#gradient-flow-rev)"
                        strokeWidth="2"
                        strokeDasharray="6 6"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.2 }}
                        transition={{ duration: 2, delay: 3.5 }}
                    />
                    <motion.path
                        d="M 750 250 Q 550 400 350 250"
                        stroke="url(#gradient-flow-rev)"
                        strokeWidth="2"
                        strokeDasharray="6 6"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.2 }}
                        transition={{ duration: 2, delay: 4 }}
                    />

                    <defs>
                        <linearGradient id="gradient-flow" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" opacity="0.8" />
                            <stop offset="100%" stopColor="#6366f1" opacity="0.8" />
                        </linearGradient>
                        <linearGradient id="gradient-flow-rev" x1="100%" y1="0%" x2="0%" y2="0%">
                            <stop offset="0%" stopColor="#6366f1" opacity="0.4" />
                            <stop offset="100%" stopColor="#3b82f6" opacity="0.4" />
                        </linearGradient>
                        <linearGradient id="gradient-blue-accent" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#2563eb" opacity="0.8" />
                            <stop offset="100%" stopColor="#3b82f6" opacity="0.8" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Nodes Container */}
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-4 lg:pt-20">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.3, duration: 0.5 }}
                            className="flex flex-col items-center text-center group"
                        >
                            {/* Node Circle */}
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                animate={{
                                    y: [0, -4, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.5
                                }}
                                className={`w-24 h-24 md:w-32 md:h-32 rounded-full ${step.bgColor} ${step.borderColor} border-2 flex items-center justify-center mb-6 shadow-xl shadow-slate-200/50 group-hover:shadow-2xl transition-all relative overflow-hidden`}
                            >
                                {/* Subtle inner pulse for all steps */}
                                <motion.div
                                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                                    className={`absolute inset-0 ${step.bgColor} opacity-20`}
                                />

                                {/* Extra Growth Glow for the final stage */}
                                {index === steps.length - 1 && (
                                    <motion.div
                                        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl"
                                    />
                                )}

                                {/* Background Shine on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                <div className={`relative z-10 transition-colors duration-300 ${step.color}`}>
                                    <motion.div
                                        animate={index === steps.length - 1 ? { scale: [1, 1.1, 1] } : {}}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        {step.icon}
                                    </motion.div>
                                </div>

                                {/* Visual Step Number */}
                                <div className="absolute -top-1 -right-1 w-7 h-7 md:w-9 md:h-9 bg-white border border-slate-100 rounded-full flex items-center justify-center font-black text-slate-400 text-[10px] md:text-sm shadow-sm">
                                    0{index + 1}
                                </div>
                            </motion.div>

                            {/* Text Content */}
                            <motion.h3
                                className="text-lg md:text-xl font-black text-gray-950 mb-3 tracking-tight group-hover:text-blue-600 transition-colors"
                            >
                                {step.title}
                            </motion.h3>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-[200px]">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Mobile Flow Line (Visible on small screens) */}
            <div className="lg:hidden absolute left-1/2 top-40 bottom-40 w-0.5 border-l-2 border-dashed border-slate-200 -translate-x-1/2 z-0" />
        </div>
    );
};
