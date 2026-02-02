import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const InteractiveMascot = () => {
    const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
    const [hoverMessage, setHoverMessage] = useState<string | null>(null);
    const [isGlowing, setIsGlowing] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    // We check for contact page for the specific happy animation
    const isContactPage = location.pathname === '/contact';

    // Helper to get message based on current page
    const getPageContextMessage = (path: string) => {
        if (path === '/contact') return "Yay! Let's talk! 🎉";
        if (path.includes('/services')) return "Ready to scale? 📈";
        if (path.includes('/portfolio')) return "Build yours next? ✨";
        if (path.includes('/about')) return "We'd love to help! 💙";
        if (path.includes('/blog')) return "Got questions? 💭";
        if (path === '/login') return "Welcome back! 🔐";
        return "Let's get started! 🚀"; // Home & Default
    };

    const defaultPageMessage = getPageContextMessage(location.pathname);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;

            const target = e.target as HTMLElement;
            const interactive = target.closest('button, a, [role="button"]') as HTMLElement;
            const isHoveringSelf = containerRef.current.contains(target);

            // --- Eye Tracking Logic ---
            const rect = containerRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
            const distance = Math.min(
                10,
                Math.hypot(e.clientX - centerX, e.clientY - centerY) / 8
            );

            setEyePosition({
                x: Math.cos(angle) * distance,
                y: Math.sin(angle) * distance,
            });

            // --- Interaction Logic ---
            const shouldGlow = !!interactive && !isHoveringSelf;
            setIsGlowing(shouldGlow);

            let msg: string | null = null;

            if (isHoveringSelf) {
                // Hovering the cat itself: Show page-specific context message
                msg = getPageContextMessage(location.pathname);
            } else if (interactive) {
                // Hovering other interactive elements - Context Awareness
                const text = (interactive.textContent || '').toLowerCase();
                const href = (interactive as HTMLAnchorElement).href?.toLowerCase() ||
                    (interactive.getAttribute('href') || '').toLowerCase();

                // Priority 1: High Impact Actions
                if (text.includes('contact') || href.includes('contact') || text.includes('touch')) msg = "Let's connect! 🤝";
                else if (text.includes('delete') || text.includes('remove') || text.includes('cancel')) msg = "Careful! 🙀";
                else if (text.includes('submit') || text.includes('send') || text.includes('confirm')) msg = "Make it happen! 📨";

                // Priority 2: Sections
                else if (text.includes('about') || href.includes('about') || text.includes('team')) msg = "Meet the experts! 👨‍💻";
                else if (text.includes('service') || href.includes('service')) msg = "Scale your biz! 🚀";
                else if (text.includes('portfolio') || href.includes('portfolio') || text.includes('work') || text.includes('case')) msg = "See results! 🏆";
                else if (text.includes('blog') || href.includes('blog') || text.includes('news')) msg = "Expert insights! 💡";
                else if (text.includes('login') || href.includes('login') || text.includes('sign')) msg = "Client Portal 🔐";

                // Priority 3: Specific Services
                else if (text.includes('seo') || href.includes('seo')) msg = "Rank #1 Google! 🥇";
                else if (text.includes('ai') || href.includes('ai') || text.includes('bot')) msg = "Automate it! 🤖";
                else if (text.includes('web') || href.includes('web') || text.includes('design')) msg = "Pixel perfect! 🎨";
                else if (text.includes('data') || href.includes('data') || text.includes('analy')) msg = "Data secrets! 📊";
                else if (text.includes('dev') || href.includes('dev') || text.includes('soft')) msg = "Code wizards! 🧙‍♂️";
                else if (text.includes('cat') || text.includes('kitty')) msg = "That's me! 😺";

                // Priority 4: Generic Calls to Action
                else if (text.includes('read') || text.includes('learn') || text.includes('view') || text.includes('more')) msg = "Deep dive! 🌊";
                else if (text.includes('start') || text.includes('get') || text.includes('try')) msg = "Do it now! 🔥";
                else if (text.includes('back') || text.includes('return')) msg = "Go back! 🔙";

                // Priority 5: Socials
                else if (href.includes('twitter') || href.includes('linkedin') || href.includes('github') || href.includes('instagram') || href.includes('facebook')) msg = "Follow us! 🌐";
                else if (href.includes('mailto')) msg = "Email us! 📧";
                else if (href.includes('tel')) msg = "Call us! ☎️";

                // Fallback
                else msg = "Click to explore! ✨";
            }

            setHoverMessage(msg);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [location.pathname]);

    // Message to display
    const displayMessage = hoverMessage || defaultPageMessage;

    return (
        <div
            ref={containerRef}
            className={`fixed bottom-6 right-6 w-24 h-24 md:w-32 md:h-32 z-50 pointer-events-auto transition-transform duration-300 ${isContactPage ? 'animate-bounce' : 'animate-float'}`}
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

                    {/* Eyes Container - Glows on Interaction */}
                    <circle
                        cx="75"
                        cy="110"
                        r="25"
                        className={`transition-colors duration-300 ${isGlowing ? 'fill-yellow-400 animate-pulse' : 'fill-gray-900'}`}
                    />
                    <circle
                        cx="125"
                        cy="110"
                        r="25"
                        className={`transition-colors duration-300 ${isGlowing ? 'fill-yellow-400 animate-pulse' : 'fill-gray-900'}`}
                    />

                    {/* Eyes Logic: Happy vs Tracking */}
                    {isContactPage ? (
                        <>
                            {/* Happy Eyes ^ ^ - Contrast adaption for Glow */}
                            <path d="M60 115 Q75 100 90 115" className={`fill-none stroke-[4] transition-colors duration-300 ${isGlowing ? 'stroke-gray-900' : 'stroke-white'}`} />
                            <path d="M110 115 Q125 100 140 115" className={`fill-none stroke-[4] transition-colors duration-300 ${isGlowing ? 'stroke-gray-900' : 'stroke-white'}`} />

                            {/* Blush */}
                            <circle cx="55" cy="130" r="6" className="fill-pink-300 opacity-60" />
                            <circle cx="145" cy="130" r="6" className="fill-pink-300 opacity-60" />
                        </>
                    ) : (
                        /* Tracking Pupils */
                        <g style={{ transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)` }}>
                            {/* Left Pupil - Dilates on interaction */}
                            <circle cx="75" cy="110" r="10" className={`transition-colors duration-300 ${isGlowing ? 'fill-black' : 'fill-blue-400'}`} />
                            <circle cx="78" cy="107" r="3" className="fill-white" />

                            {/* Right Pupil */}
                            <circle cx="125" cy="110" r="10" className={`transition-colors duration-300 ${isGlowing ? 'fill-black' : 'fill-blue-400'}`} />
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

                {/* Speech Bubble Tooltip - Visible on Hover Message or Self Hover */}
                <div className={`absolute -top-16 right-0 bg-white border-2 border-gray-900 rounded-xl p-3 shadow-xl transition-opacity duration-300 whitespace-nowrap z-50 ${hoverMessage ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-sm font-bold text-gray-900">
                        {displayMessage}
                    </p>
                    <div className="absolute bottom-[-8px] right-8 w-4 h-4 bg-white border-b-2 border-r-2 border-gray-900 transform rotate-45"></div>
                </div>
            </Link>
        </div>
    );
};
