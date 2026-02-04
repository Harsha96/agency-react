import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function ParticlePreloader() {
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 800); // Cinematic duration
        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center bg-white/20 backdrop-blur-md"
                >
                    {/* Central Burst Particle Effect (CSS Powered for Speed) */}
                    <div className="relative">
                        {[...Array(12)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                                animate={{
                                    scale: [0, 1.5, 0.5],
                                    x: Math.cos(i * (Math.PI / 6)) * 150,
                                    y: Math.sin(i * (Math.PI / 6)) * 150,
                                    opacity: [0, 1, 0]
                                }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.16, 1, 0.3, 1],
                                    delay: i * 0.02
                                }}
                                className="absolute w-3 h-3 bg-blue-600 rounded-full blur-[2px]"
                            />
                        ))}

                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: [0, 2], opacity: [0, 0.5, 0] }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="w-20 h-20 bg-blue-400 rounded-full blur-2xl"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
