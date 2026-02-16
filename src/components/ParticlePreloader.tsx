import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';

export function ParticlePreloader() {
    return createPortal(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-white/80 backdrop-blur-sm"
        >
            {/* Central Burst Particle Effect - Absolutely centered */}
            <div className="relative flex items-center justify-center">
                {/* Particle animations centered on this container */}
                <div className="relative w-40 h-40 flex items-center justify-center">
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                            animate={{
                                scale: [0, 1.5, 0.5],
                                x: Math.cos(i * (Math.PI / 6)) * 80,
                                y: Math.sin(i * (Math.PI / 6)) * 80,
                                opacity: [0, 1, 0]
                            }}
                            transition={{
                                duration: 0.8,
                                ease: [0.16, 1, 0.3, 1],
                                delay: i * 0.02,
                                repeat: Infinity,
                                repeatDelay: 0.5
                            }}
                            className="absolute w-3 h-3 bg-blue-600 rounded-full blur-[2px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        />
                    ))}

                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0, 2, 1.8, 2], opacity: [0, 0.5, 0.3, 0.5] }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            repeat: Infinity,
                            repeatDelay: 0.5
                        }}
                        className="absolute w-20 h-20 bg-blue-400 rounded-full blur-2xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                </div>

                {/* Loading text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-full mt-8 text-slate-700 font-semibold text-lg whitespace-nowrap"
                >
                    Loading...
                </motion.div>
            </div>
        </motion.div>,
        document.body
    );
}
