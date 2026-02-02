import { useEffect, useRef, useState } from 'react';

export const InteractiveGrid = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePos({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 overflow-hidden pointer-events-none"
        >
            {/* Base Grid */}
            <div
                className="absolute inset-0 bg-grid-pattern opacity-[0.03]"
            />

            {/* Spotlight Reveal */}
            <div
                className="absolute inset-0 bg-grid-pattern opacity-10 transition-opacity duration-300"
                style={{
                    maskImage: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
                    WebkitMaskImage: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
                }}
            />

            {/* Glow Effect */}
            <div
                className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
                style={{
                    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.08), transparent 40%)`,
                }}
            />
        </div>
    );
};
