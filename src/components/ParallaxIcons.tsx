import { useEffect, useState } from 'react';
import { Bot, Brain, Code, Sparkles, Database, Cpu } from 'lucide-react';

export const ParallaxIcons = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX - window.innerWidth / 2) / 50,
                y: (e.clientY - window.innerHeight / 2) / 50,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const icons = [
        { Icon: Bot, top: '15%', left: '10%', delay: '0s', moveFactor: 1.5, color: 'text-blue-500' },
        { Icon: Brain, top: '25%', right: '15%', delay: '1s', moveFactor: -2, color: 'text-purple-500' },
        { Icon: Code, bottom: '20%', left: '15%', delay: '2s', moveFactor: 1, color: 'text-cyan-500' },
        { Icon: Database, bottom: '30%', right: '10%', delay: '0.5s', moveFactor: -1.5, color: 'text-orange-500' },
        { Icon: Sparkles, top: '40%', left: '20%', delay: '1.5s', moveFactor: 2, color: 'text-yellow-500' },
        { Icon: Cpu, top: '10%', right: '30%', delay: '0.8s', moveFactor: -1, color: 'text-emerald-500' },
    ];

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {icons.map((item, index) => (
                <div
                    key={index}
                    className={`absolute opacity-20 animate-float ${item.color}`}
                    style={{
                        top: item.top,
                        left: item.left,
                        right: item.right,
                        bottom: item.bottom,
                        transform: `translate(${mousePos.x * item.moveFactor}px, ${mousePos.y * item.moveFactor}px)`,
                        transition: 'transform 0.2s ease-out',
                        animationDelay: item.delay,
                    }}
                >
                    <item.Icon className="w-12 h-12" />
                </div>
            ))}
        </div>
    );
};
