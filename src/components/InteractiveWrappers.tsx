import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface MouseGlowCardProps {
    children: React.ReactNode;
    className?: string;
}

export const MouseGlowCard: React.FC<MouseGlowCardProps> = ({ children, className = '' }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            className={`group relative overflow-hidden transition-all duration-500 ${className}`}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-500 group-hover:opacity-100 z-10"
                style={{
                    background: useTransform(
                        [mouseX, mouseY],
                        ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.1), transparent 80%)`
                    ),
                }}
            />
            <div className="relative z-20">
                {children}
            </div>
        </div>
    );
};

export const TiltCard: React.FC<MouseGlowCardProps> = ({ children, className = '' }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smoother, more subtle tilt for Expert UI (Max 5 degrees)
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 150, damping: 20 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 150, damping: 20 });

    function handleMouseMove(event: React.MouseEvent) {
        const rect = event.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        x.set(mouseX / width - 0.5);
        y.set(mouseY / height - 0.5);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: 1000
            }}
            className={`relative transition-transform duration-500 ${className}`}
        >
            <div style={{ transform: "translateZ(20px)" }}>
                {children}
            </div>
        </motion.div>
    );
};
