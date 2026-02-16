import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ScrollEffectProps {
    children: React.ReactNode;
    className?: string;
}

// Professional parallax with depth
export function ParallaxReveal({ children, className = '', speed = 0.5 }: ScrollEffectProps & { speed?: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <motion.div ref={ref} style={{ y, opacity }} className={className}>
            {children}
        </motion.div>
    );
}

// Cinematic fade with blur
export function CinematicReveal({ children, className = '', delay = 0 }: ScrollEffectProps & { delay?: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.9", "start 0.6"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const opacity = useTransform(smoothProgress, [0, 1], [0, 1]);
    const y = useTransform(smoothProgress, [0, 1], [60, 0]);
    const scale = useTransform(smoothProgress, [0, 1], [0.95, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                opacity,
                y,
                scale
            }}
            transition={{ delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Elegant slide from side
export function SlideReveal({
    children,
    className = '',
    direction = 'left'
}: ScrollEffectProps & { direction?: 'left' | 'right' }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.85", "start 0.5"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 25
    });

    const x = useTransform(
        smoothProgress,
        [0, 1],
        direction === 'left' ? [-100, 0] : [100, 0]
    );
    const opacity = useTransform(smoothProgress, [0, 0.3, 1], [0, 0.5, 1]);

    return (
        <motion.div ref={ref} style={{ x, opacity }} className={className}>
            {children}
        </motion.div>
    );
}

// Depth-based reveal (layers)
export function DepthReveal({
    children,
    className = '',
    depth = 1
}: ScrollEffectProps & { depth?: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    });

    const y = useTransform(smoothProgress, [0, 1], [50 * depth, -50 * depth]);
    const opacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
    const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1, 0.98]);

    return (
        <motion.div ref={ref} style={{ y, opacity, scale }} className={className}>
            {children}
        </motion.div>
    );
}

// Professional fade-in with lift
export function FadeUp({ children, className = '' }: ScrollEffectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.9", "start 0.65"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    });

    const opacity = useTransform(smoothProgress, [0, 1], [0, 1]);
    const y = useTransform(smoothProgress, [0, 1], [40, 0]);

    return (
        <motion.div ref={ref} style={{ opacity, y }} className={className}>
            {children}
        </motion.div>
    );
}

// Staggered grid reveal
export function StaggeredGrid({
    children,
    index = 0,
    className = ''
}: ScrollEffectProps & { index?: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.9", "start 0.6"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const baseDelay = index * 0.08;
    const opacity = useTransform(
        smoothProgress,
        [0, 0.3 + baseDelay, 1],
        [0, 0, 1]
    );
    const y = useTransform(
        smoothProgress,
        [0, 0.3 + baseDelay, 1],
        [50, 50, 0]
    );
    const scale = useTransform(
        smoothProgress,
        [0, 0.3 + baseDelay, 1],
        [0.9, 0.9, 1]
    );

    return (
        <motion.div ref={ref} style={{ opacity, y, scale }} className={className}>
            {children}
        </motion.div>
    );
}
