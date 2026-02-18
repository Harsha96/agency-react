import { useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface CounterProps {
    end: number;
    duration?: number;
    suffix?: string;
}

export const Counter = ({ end, duration = 2, suffix = '' }: CounterProps) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        if (isInView) {
            let startTime: number | null = null;
            const step = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
                setCount(Math.floor(progress * end));
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
    }, [isInView, end, duration]);

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
};
