import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const InteractiveMascot = () => {
    const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const isContactPage = location.pathname === '/contact';

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Calculate angle to mouse
            const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);

            // Limit eye movement radius
            const distance = Math.min(
                10,
                Math.hypot(e.clientX - centerX, e.clientY - centerY) / 8
            );

            setEyePosition({
                x: Math.cos(angle) * distance,
                y: Math.sin(angle) * distance,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            className={`fixed bottom-6 right-6 w-24 h-24 md:w-32 md:h-32 z-50 pointer-events-auto transform hover:scale-105 transition-transform duration-300 ${isContactPage ? 'animate-bounce' : 'animate-float'}`}
        >
            <Link to="/contact" className="block w-full h-full relative group">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
                    {/* Cat Head Shape - Solid Design */}
                    <path
                        d="M40 80 L60 40 L90 60 L110 60 L140 40 L160 80 L180 110 L160 170 L40 170 L20 110 Z"
                        className="fill-white stroke-gray-900 stroke-[4]"
                    />

                    {/* Ears Inner */}
                    <path d="M60 40 L75 70 L90 60 Z" className="fill-blue-500" />
                    <path d="M140 40 L125 70 L110 60 Z" className="fill-blue-500" />

                    {/* Eyes Container */}
                    <circle cx="75" cy="110" r="25" className="fill-gray-900" />
                    <circle cx="125" cy="110" r="25" className="fill-gray-900" />

                    {/* Eyes Logic: Happy vs Tracking */}
                    {isContactPage ? (
                        <>
                            {/* Happy Eyes ^ ^ */}
                            <path d="M60 115 Q75 100 90 115" className="fill-none stroke-white stroke-[4]" />
                            <path d="M110 115 Q125 100 140 115" className="fill-none stroke-white stroke-[4]" />

                            {/* Blush */}
                            <circle cx="55" cy="130" r="6" className="fill-pink-300 opacity-60" />
                            <circle cx="145" cy="130" r="6" className="fill-pink-300 opacity-60" />
                        </>
                    ) : (
                        /* Tracking Pupils */
                        <g style={{ transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)` }}>
                            {/* Left Pupil */}
                            <circle cx="75" cy="110" r="10" className="fill-blue-400" />
                            <circle cx="78" cy="107" r="3" className="fill-white" />

                            {/* Right Pupil */}
                            <circle cx="125" cy="110" r="10" className="fill-blue-400" />
                            <circle cx="128" cy="107" r="3" className="fill-white" />
                        </g>
                    )}

                    {/* Nose */}
                    <path d="M92 140 L108 140 L100 152 Z" className="fill-pink-500" />

                    {/* Moustache/Whiskers - Digital Style */}
                    <line x1="30" y1="130" x2="60" y2="135" className="stroke-gray-400 stroke-[3]" />
                    <line x1="30" y1="145" x2="60" y2="145" className="stroke-gray-400 stroke-[3]" />

                    <line x1="170" y1="130" x2="140" y2="135" className="stroke-gray-400 stroke-[3]" />
                    <line x1="170" y1="145" x2="140" y2="145" className="stroke-gray-400 stroke-[3]" />

                </svg>

                {/* Speech Bubble Tooltip */}
                <div className="absolute -top-16 right-0 bg-white border-2 border-gray-900 rounded-xl p-3 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                    <p className="text-sm font-bold text-gray-900">
                        {isContactPage ? "Yay! Let's talk! 🎉" : "Let's get started! 🚀"}
                    </p>
                    <div className="absolute bottom-[-8px] right-8 w-4 h-4 bg-white border-b-2 border-r-2 border-gray-900 transform rotate-45"></div>
                </div>
            </Link>
        </div>
    );
};
