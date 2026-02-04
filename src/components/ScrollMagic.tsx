import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ScrollMagicProps {
    children: React.ReactNode;
    className?: string;
}

export function ScrollMagicCards({ children, className = '' }: ScrollMagicProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Smooth spring animation
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Transform values based on scroll
    const opacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const scale = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.95]);
    const y = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -50]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity, scale, y }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function ScrollCombineEffect({ children, className = '' }: ScrollMagicProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    });

    // Cards come from sides and combine in center
    const xLeft = useTransform(smoothProgress, [0, 1], [-200, 0]);
    const xRight = useTransform(smoothProgress, [0, 1], [200, 0]);
    const opacity = useTransform(smoothProgress, [0, 0.5, 1], [0, 1, 1]);
    const rotate = useTransform(smoothProgress, [0, 1], [10, 0]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}

export function ScrollStackEffect({ children, index = 0 }: ScrollMagicProps & { index?: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    });

    // Cards stack on top of each other as you scroll
    const y = useTransform(smoothProgress, [0, 0.5, 1], [150, index * 20, index * 20]);
    const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1 - index * 0.05, 1 - index * 0.05]);
    const opacity = useTransform(smoothProgress, [0, 0.3], [0, 1]);

    return (
        <motion.div
            ref={ref}
            style={{ y, scale, opacity }}
            className={`transition-all duration-300`}
        >
            {children}
        </motion.div>
    );
}

export function ScrollRotateIn({ children, className = '' }: ScrollMagicProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    });

    const rotate = useTransform(smoothProgress, [0, 1], [-180, 0]);
    const scale = useTransform(smoothProgress, [0, 1], [0.5, 1]);
    const opacity = useTransform(smoothProgress, [0, 0.5, 1], [0, 0.5, 1]);

    return (
        <motion.div
            ref={ref}
            style={{ rotate, scale, opacity }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Parallax effect for backgrounds
export function ScrollParallax({ children, speed = 0.5, className = '' }: ScrollMagicProps & { speed?: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);

    return (
        <div ref={ref} className={`relative ${className}`}>
            <motion.div style={{ y }}>
                {children}
            </motion.div>
        </div>
    );
}
