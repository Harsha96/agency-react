import { motion } from 'framer-motion';
import { Compass, Target, PencilRuler, Code2, Rocket } from 'lucide-react';

const steps = [
    {
        icon: <Compass className="w-6 h-6 md:w-7 md:h-7" />,
        title: 'Understand',
        description: 'We dive deep into your goals to discover the best path forward.',
        color: 'text-indigo-600',
        bgColor: 'bg-indigo-50',
        borderColor: 'border-indigo-100',
    },
    {
        icon: <Target className="w-6 h-6 md:w-7 md:h-7" />,
        title: 'Strategize',
        description: 'We define a clear roadmap and state the problem to solve.',
        color: 'text-blue-500',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-100',
    },
    {
        icon: <PencilRuler className="w-6 h-6 md:w-7 md:h-7" />,
        title: 'Design',
        description: 'We create high-end visuals and user-centric interfaces.',
        color: 'text-amber-500',
        bgColor: 'bg-amber-50',
        borderColor: 'border-amber-100',
    },
    {
        icon: <Code2 className="w-6 h-6 md:w-7 md:h-7" />,
        title: 'Develop',
        description: 'We build your product using modern, future-ready technology.',
        color: 'text-indigo-500',
        bgColor: 'bg-indigo-50',
        borderColor: 'border-indigo-100',
    },
    {
        icon: <Rocket className="w-6 h-6 md:w-7 md:h-7" />,
        title: 'Launch & Grow',
        description: 'We test, deploy, and scale your product for real-world impact.',
        color: 'text-emerald-500',
        bgColor: 'bg-emerald-50',
        borderColor: 'border-emerald-100',
    },
];

export const HowWeWorkAnimated = () => {
    return (
        <div className="relative py-6 overflow-hidden">
            {/* Nodes Container */}
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Straight line with circles at each step - timeline style */}
                <div className="hidden lg:block absolute top-[calc(3rem+2.5rem+12px)] left-[10%] right-[10%] z-0 overflow-visible">
                    {/* Base straight line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-[2px] bg-gradient-to-r from-indigo-300 via-blue-400 to-cyan-300 origin-left"
                    />

                    {/* Circles at each step position */}
                    {[0, 25, 50, 75, 100].map((pos, i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3 + i * 0.2, duration: 0.4, type: "spring", stiffness: 200 }}
                            style={{ left: `${pos}%` }}
                            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
                        >
                            <div className="w-4 h-4 rounded-full bg-white border-2 border-blue-400 shadow-md relative">
                                <motion.div
                                    animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                                    className="absolute inset-0 rounded-full bg-blue-400/30"
                                />
                            </div>
                        </motion.div>
                    ))}

                    {/* Flowing glowing dot */}
                    <motion.div
                        animate={{ left: ["-2%", "102%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5 }}
                        className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_4px_rgba(59,130,246,0.5)]"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-4 lg:pt-12 relative">
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
                                className={`w-18 h-18 md:w-24 md:h-24 rounded-full ${step.bgColor} ${step.borderColor} border-2 flex items-center justify-center mb-4 shadow-xl shadow-slate-200/50 group-hover:shadow-2xl transition-all relative overflow-hidden`}
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
                                <div className="absolute -top-1 -right-1 w-6 h-6 md:w-7 md:h-7 bg-white border border-slate-100 rounded-full flex items-center justify-center font-black text-slate-400 text-[9px] md:text-xs shadow-sm">
                                    0{index + 1}
                                </div>
                            </motion.div>

                            {/* Text Content */}
                            <motion.h3
                                className="text-base md:text-lg font-black text-gray-950 mb-2 tracking-tight group-hover:text-blue-600 transition-colors"
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
